"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fake_timers_fixture_1 = require("../../utils/tests/fake-timers-fixture");
const metadata_token_service_1 = require("../../token-service/metadata-token-service");
const test_logger_1 = require("../../utils/test-logger");
const hr_interval_1 = require("../../utils/hr-interval");
const TTL = 10 * 60 * 60;
describe('MetadataTokenService.getToken', () => {
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
    (0, metadata_token_service_1.setTestInitializeTimerAdvance)((duration) => __awaiter(void 0, void 0, void 0, function* () {
        yield fakeTimersFixture.advanceTimer(duration);
    }));
    const { testLogger, testLoggerFn, } = (0, test_logger_1.buildTestLogger)();
    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios_1.default, 'get');
        jest.spyOn(Math, 'random');
        Math.random.mockReturnValue(1);
        testLoggerFn.mockReset(); // clear constructor log
    });
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        yield fakeTimersFixture.dispose();
    }));
    it('the first time the token is requested immediately when the service is created', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background tocken will be received
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_ctor,
                metadata_token_service_1.MetadataTokenService.DEFAULT_URL,
                true,
                metadata_token_service_1.MetadataTokenService.DEFAULT_OPTIONS,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace__getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_initialize,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(TTL * 1000),
                '',
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setTimer,
            ],
        ]);
        yield metadataTokenService.dispose();
    }));
    it('the first time the token request has failed', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        testLoggerFn.mockReset(); // clear log
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
        ]);
        yield metadataTokenService.dispose();
    }));
    it('if getToken() is called until an initial response or an error is received, getToken() will wait for a response', () => __awaiter(void 0, void 0, void 0, function* () {
        let getResolve;
        // eslint-disable-next-line no-promise-executor-return
        axios_1.default.get.mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () {
            return new Promise((resolve) => {
                getResolve = resolve;
            });
        }));
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        const getTokenPromise1 = metadataTokenService.getToken();
        const getTokenPromise2 = metadataTokenService.getToken();
        // @ts-ignore
        getResolve({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        expect(yield getTokenPromise1)
            .toBe('123');
        expect(yield getTokenPromise2)
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_ctor,
                metadata_token_service_1.MetadataTokenService.DEFAULT_URL,
                true,
                metadata_token_service_1.MetadataTokenService.DEFAULT_OPTIONS,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace__getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_initialize,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(TTL * 1000),
                '',
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setTimer,
            ],
        ]);
    }));
    it('the token is regularly requested by timer, even if it not used - ok responses', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        testLoggerFn.mockReset();
        const N = 5;
        for (let i = 0; i < N; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenRefreshAt - Date.now());
        }
        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
            const res = [];
            for (let i = 0; i < N; i++) {
                res.push([
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace__getToken,
                ], [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
                ], [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
                ], [
                    'debug',
                    metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                    new hr_interval_1.HRInterval(TTL * 1000),
                    '',
                ], [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_setTimer,
                ]);
            }
            return res;
        })());
    }));
    it('the token is regularly requested by timer, even if it not used - error responses', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        testLoggerFn.mockReset();
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        const N = 5;
        for (let i = 0; i < N; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenRefreshAt - Date.now());
        }
        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
            const res = [];
            for (let i = 0; i < N; i++) {
                res.push([
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace__getToken,
                ], [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
                ], [
                    'error',
                    'failed to fetch token: 400 error',
                ], [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_setTimer,
                ]);
            }
            return res;
        })());
    }));
    it('when getToken() is called, no fetchToken() called, even if it\'s about time', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // intentionally disable timer
        // @ts-ignore
        jest.spyOn(metadata_token_service_1.MetadataTokenService.prototype, 'setTimer');
        // @ts-ignore
        metadata_token_service_1.MetadataTokenService.prototype.setTimer.mockReturnValue();
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        testLoggerFn.mockReset(); // clear log
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        // @ts-ignore
        fakeTimersFixture.advanceTimer(metadataTokenService.tokenRefreshAt * 2);
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_getToken,
            ],
        ]);
    }));
    it('dispose stops the timer and getToken() starts to throw an error', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield (0, metadata_token_service_1.getTestInitPromise)(); // wait till background error will be received
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        yield expect(metadataTokenService.dispose())
            .resolves
            .toBeUndefined();
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error(metadata_token_service_1.MetadataTokenService.Messages.err_service_is_disposed));
        yield expect(metadataTokenService.dispose())
            .rejects
            .toThrow(new Error(metadata_token_service_1.MetadataTokenService.Messages.err_service_is_disposed));
    }));
    it('dispose() while initialize() is not complete', () => __awaiter(void 0, void 0, void 0, function* () {
        let getResolve;
        // eslint-disable-next-line no-promise-executor-return
        axios_1.default.get.mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () {
            return new Promise((resolve) => {
                getResolve = resolve;
            });
        }));
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });
        yield metadataTokenService.dispose();
        // @ts-ignore
        getResolve({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        yield (0, metadata_token_service_1.getTestInitPromise)();
        // @ts-ignore
        expect(metadataTokenService.timer)
            .toBeUndefined();
    }));
});
