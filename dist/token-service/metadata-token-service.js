"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTokenService = exports.getTestInitPromise = exports.setTestInitializeTimerAdvance = void 0;
const axios_1 = __importDefault(require("axios"));
const util = __importStar(require("util"));
const simple_logger_1 = require("../utils/simple-logger");
const metadata_token_service_consts_1 = require("./metadata-token-service.consts");
const hr_interval_1 = require("../utils/hr-interval");
/**
 * Since in the metadata token service the initialize() method contains a loop of retries to get the token, so
 * to keep this loop from hanging on the timer while unit tests, we need to advance the timer between retries inside initialize().
 */
let testInitializeTimerAdvance;
/**
 * **Only for unit tests purposes**.
 */
const setTestInitializeTimerAdvance = (timerAdvance) => {
    testInitializeTimerAdvance = timerAdvance;
};
exports.setTestInitializeTimerAdvance = setTestInitializeTimerAdvance;
let testInitPromise;
const getTestInitPromise = () => testInitPromise;
exports.getTestInitPromise = getTestInitPromise;
// eslint-disable-next-line import/export
class MetadataTokenService {
    /* istanbul ignore next */
    constructor(urlOrOptions = MetadataTokenService.DEFAULT_URL, options = {}) {
        /**
         * The time after which the token cannot be used. This is the token expiration time minus the minimum time that
         * must be available (TOKEN_MINIMUM_LIFETIME_MARGIN_MS).
         */
        this.tokenExpiresAt = 0;
        /**
         * Time of scheduled token renewal. Counted as a percentage of the initial time for which the token
         * was issued (TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT).
         */
        this.tokenRefreshAt = 0;
        /**
         * Time after which to issue warning messages about how much time the available token has left. Counted as
         * a percentage of the time for which the token was issued (TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT).
         */
        this.tokenStartReportTTLAt = 0;
        /**
         * Counter of repeated errors received in fetchToken() to make repeated requests with less frequency.
         */
        this.tokenErrorCount = 0;
        this.disposed = false;
        if (typeof urlOrOptions === 'object') {
            this.url = MetadataTokenService.DEFAULT_URL;
            // eslint-disable-next-line no-param-reassign
            options = urlOrOptions;
        }
        else {
            this.url = urlOrOptions;
        }
        const { logger, doUpdateTokenInBackground } = options, opts = __rest(options, ["logger", "doUpdateTokenInBackground"]);
        /* istanbul ignore next */
        this.logger = logger !== null && logger !== void 0 ? logger : new simple_logger_1.SimpleLogger({ prefix: MetadataTokenService.DEFAULT_LOGGER_PREFIX });
        this.doUpdateTokenInBackground = doUpdateTokenInBackground !== null && doUpdateTokenInBackground !== void 0 ? doUpdateTokenInBackground : false;
        this.axiosOptions = Object.assign(Object.assign({}, MetadataTokenService.DEFAULT_OPTIONS), opts);
        this.logger.debug(MetadataTokenService.Messages.debug_ctor, this.url, this.doUpdateTokenInBackground, this.axiosOptions);
        if (this.doUpdateTokenInBackground) {
            testInitPromise = this.getToken()
                .catch(() => {
            }); // intentionally without await
        }
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.trace(MetadataTokenService.Messages.trace_getToken);
            if (this.disposed) {
                throw new Error(MetadataTokenService.Messages.err_service_is_disposed);
            }
            if (this.doUpdateTokenInBackground && (this.tokenLastError || this.token)) {
                if (this.tokenLastError)
                    throw this.tokenLastError;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return this.token;
            }
            if (!this.currentGetTokenPromise) {
                this.currentGetTokenPromise = this._getToken()
                    .finally(() => {
                    delete this.currentGetTokenPromise;
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return this.currentGetTokenPromise;
        });
    }
    /**
     * It is recommended to call this method at the beginning of serverless function with context.token parameter.
     * This will reduce serverless function runtime avoiding additional request to the Iam service.
     */
    setIamResponse(iamResponse) {
        this.logger.trace(MetadataTokenService.Messages.trace_setIamResponse);
        if (!(typeof iamResponse === 'object'
            && iamResponse !== null
            && iamResponse.token_type === 'Bearer'
            && typeof iamResponse.expires_in === 'number'
            && iamResponse.expires_in > 0
            && typeof iamResponse.access_token === 'string'
            && iamResponse.access_token !== '')) {
            throw new Error(util.format(MetadataTokenService.Messages.err_invalid_iam_token, iamResponse));
        }
        const TTL = iamResponse.expires_in * 1000 - metadata_token_service_consts_1.TOKEN_MINIMUM_LIFETIME_MARGIN_MS;
        // even in non-debug mode output messages that we've got a new token, if there were errors before that
        this.logger[this.tokenLastError ? 'info' : 'debug'](MetadataTokenService.Messages.debug_new_token_was_received, new hr_interval_1.HRInterval(iamResponse.expires_in * 1000), TTL <= 0 ? MetadataTokenService.Messages.debug_new_token_was_received_too_small_postfix : '');
        if (TTL <= 0) {
            throw new Error(util.format(MetadataTokenService.Messages.err_part_insufficient_lifetime, new hr_interval_1.HRInterval(iamResponse.expires_in * 1000)));
        }
        this.token = iamResponse.access_token;
        this.tokenExpiresAt = Date.now() + TTL;
        this.tokenRefreshAt = Date.now() + iamResponse.expires_in * 1000 * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100);
        this.tokenStartReportTTLAt = Date.now() + iamResponse.expires_in * 1000 * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT / 100);
        delete this.tokenLastError;
        this.tokenErrorCount = 0;
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.trace(MetadataTokenService.Messages.trace_dispose);
            if (this.disposed) {
                throw new Error(MetadataTokenService.Messages.err_service_is_disposed);
            }
            this.disposed = true;
            if (this.timer) {
                clearTimeout(this.timer);
                delete this.timer;
            }
        });
    }
    _getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.trace(MetadataTokenService.Messages.trace__getToken);
            try {
                if (this.tokenLastError && Date.now() < this.tokenRefreshAt) {
                    throw this.tokenLastError;
                }
                try {
                    if (!this.token || Date.now() >= this.tokenExpiresAt) {
                        yield this.initialize();
                    }
                    else if (Date.now() >= this.tokenRefreshAt) {
                        try {
                            this.token = yield this.fetchToken();
                        }
                        catch (_a) {
                            // keep using existing token
                            if (Date.now() >= this.tokenStartReportTTLAt) {
                                this.logger.warn(MetadataTokenService.Messages.warn_emaining_token_TTL, new hr_interval_1.HRInterval(this.tokenExpiresAt - Date.now()));
                            }
                        }
                    }
                }
                catch (error) {
                    this.tokenLastError = error;
                    throw error;
                }
            }
            finally {
                if (this.doUpdateTokenInBackground && !this.disposed) {
                    this.setTimer();
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return this.token;
        });
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.trace(MetadataTokenService.Messages.trace_initialize);
            delete this.token;
            for (let i = 1;; i++) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    this.token = yield this.fetchToken();
                    break;
                }
                catch (error) {
                    if (i === metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN) {
                        throw error;
                    }
                }
                // eslint-disable-next-line no-bitwise
                const slotsCount = 1 << Math.min(i, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING);
                const maxDuration = slotsCount * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION;
                const duration = Math.trunc(maxDuration * (1 - Math.random() * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO));
                // eslint-disable-next-line no-await-in-loop,@typescript-eslint/no-loop-func,no-async-promise-executor
                yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        setTimeout(resolve, duration);
                        // note: await below is skipped out deliberately
                        if (testInitializeTimerAdvance)
                            yield testInitializeTimerAdvance(duration);
                    }
                    catch (error) {
                        /* istanbul ignore next */
                        reject(error);
                    }
                }));
            }
        });
    }
    fetchToken() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.trace(MetadataTokenService.Messages.trace_fetchToken);
            let token;
            // @ts-ignore
            try {
                // eslint-disable-next-line @typescript-eslint/ban-types
                const res = yield axios_1.default.get(this.url, this.axiosOptions);
                if (res.status !== 200) {
                    throw new Error(util.format(MetadataTokenService.Messages.err_part_http_error, res.status, res.statusText));
                }
                this.setIamResponse(res.data);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return this.token;
            }
            catch (error_) {
                const error = error_;
                // eslint-disable-next-line no-bitwise
                const slotsCount = 1 << Math.min(this.tokenErrorCount++, metadata_token_service_consts_1.GET_TOKEN_BACKOFF_CEILING);
                const maxDuration = slotsCount * metadata_token_service_consts_1.GET_TOKEN_BACKOFF_SLOT_DURATION;
                this.tokenRefreshAt = Date.now() + maxDuration * (1 - Math.random() * metadata_token_service_consts_1.GET_TOKEN_BACKOFF_UNCERTAIN_RATIO);
                error.message = util.format(MetadataTokenService.Messages.err_failed_fetch, error.message);
                this.logger.error(error.message);
                throw error;
            }
        });
    }
    setTimer() {
        this.logger.trace(MetadataTokenService.Messages.trace_setTimer);
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            try {
                this.token = yield this._getToken();
            }
            catch (_a) {
                // nothing - keep using old token or an old error
            }
        }), this.tokenRefreshAt - Date.now());
    }
}
exports.MetadataTokenService = MetadataTokenService;
/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/no-namespace,import/export
(function (MetadataTokenService) {
    let Messages;
    (function (Messages) {
        /**
         * Inlines: new HRInterval().
         */
        Messages["warn_emaining_token_TTL"] = "remaining token's TTL: %s";
        /**
         * Inlines: url, doUpdateTokenInBackground, axiosOptions.
         */
        Messages["debug_ctor"] = "metadata-token.ctor: url: %s, doUpdateTokenInBackground: %s, axiosOptions: %o";
        /**
         * Inlines: new HRInterval(), "(too small TTL)"?.
         */
        Messages["debug_new_token_was_received"] = "new token. TTL: %s%s";
        Messages["debug_new_token_was_received_too_small_postfix"] = " (too small TTL)";
        Messages["trace_getToken"] = "metadata-token.getToken";
        Messages["trace_dispose"] = "metadata-token.dispose";
        Messages["trace__getToken"] = "metadata-token._getToken";
        Messages["trace_initialize"] = "metadata-token.initialize";
        Messages["trace_fetchToken"] = "metadata-token.fetchToken";
        Messages["trace_setIamResponse"] = "metadata-token.setIamResponse";
        Messages["trace_setTimer"] = "metadata-token.setTimer";
        /**
         * Inlines: http-status, error-message.
         */
        Messages["err_part_http_error"] = "%s %s";
        /**
         * Inlines: new HRInerval().
         */
        Messages["err_part_insufficient_lifetime"] = "insufficient lifetime: %s";
        /**
         * Inlines: err_part
         */
        Messages["err_failed_fetch"] = "failed to fetch token: %s";
        Messages["err_invalid_iam_token"] = "invalid iam token: %o";
        Messages["err_service_is_disposed"] = "service is disposed";
    })(Messages = MetadataTokenService.Messages || (MetadataTokenService.Messages = {}));
    MetadataTokenService.DEFAULT_URL = 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
    MetadataTokenService.DEFAULT_OPTIONS = {
        headers: {
            'Metadata-Flavor': 'Google',
        },
    };
    MetadataTokenService.DEFAULT_LOGGER_PREFIX = 'metadata-auth';
})(MetadataTokenService = exports.MetadataTokenService || (exports.MetadataTokenService = {}));
