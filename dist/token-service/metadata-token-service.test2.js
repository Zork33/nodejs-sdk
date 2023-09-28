"use strict";
// TODO: Check, does timer extends time slot of doUpdateTokenInBackground func call
// TODO: Add delays into initialize - question: what to do on doUpdateTokenInBackground
// TODO: Delay calls to Iam on errors
// TODO: Add timer logic - ok period, error period
// TODO: Report errors, if 20% spent, with interval - add this rule to .consts.ts
// TODO: All tests should work in both modes
// TODO: Add dispose() to cancel timer
// TODO: Remove tests from build results
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
// Simple example
// Cannot initialize
// initialize() retries on error
// Regular token extend for %
// getToken() retries on error
// Token is obsoleted, time to reinitialize
// Errors are reported thru onError once in a period
// Start timer once created
const axios_1 = __importDefault(require("axios"));
const metadata_token_service_1 = require("./metadata-token-service");
const metadata_token_service_consts_1 = require("./metadata-token-service.consts");
const DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES = [false, true];
const MATH_RANDOM_VALUES = [0, 0.8, 1];
/**
 * Guarantees that once the time has arrived, all functions called from setTimeout() will be finished by the time
 * await fakeTimersFixture.advance(...).  It is important if an async function is passed to setTimeout().
 */
class FakeTimersFixture {
    constructor() {
        this.timeouts = [];
    }
    setup() {
        jest.useFakeTimers();
        // @ts-ignore
        this.prevSetTimeout = global.setTimeout;
        // @ts-ignore
        global.setTimeout = (handler, timeout, ...args) => 
        // @ts-ignore
        this.prevSetTimeout(() => {
            this.timeouts.push(handler.call(undefined, args));
        }, timeout);
    }
    advance(msToRun) {
        return __awaiter(this, void 0, void 0, function* () {
            jest.advanceTimersByTime(msToRun);
            yield Promise.all(this.timeouts);
            this.timeouts.length = 0;
        });
    }
    dispose() {
        // @ts-ignore
        global.setTimeout = this.prevSetTimeout;
        jest.useRealTimers();
    }
}
describe('metadata-token-service', () => {
    const fakeTimersFixture = new FakeTimersFixture();
    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios_1.default, 'get');
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(global, 'setInterval');
        jest.spyOn(Math, 'random');
    });
    afterEach(() => {
        jest.restoreAllMocks();
        fakeTimersFixture.dispose();
    });
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        it(`Simple example: doUpdateTokenInBackground ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            // set token
            axios_1.default.get.mockReturnValue({
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: 10 * 60 * 60, // secs
                },
            });
            // first time
            const t1 = yield metadataTokenService.getToken();
            expect(t1)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
            // second time - no extra token request
            const t2 = yield metadataTokenService.getToken();
            expect(t2)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
            metadataTokenService.dispose();
        }));
    }
    // for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
    for (const doUpdateTokenInBackground of [false]) {
        // for (const RANDOM of MATH_RANDOM_VALUES) {
        for (const RANDOM of [0]) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            fit(`Cannot initialize: doUpdateTokenInBackground: ${doUpdateTokenInBackground}, RANDOM: ${RANDOM}`, () => __awaiter(void 0, void 0, void 0, function* () {
                const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
                Math.random.mockReturnValue(RANDOM);
                // return an error
                axios_1.default.get.mockReturnValue({
                    status: 400,
                });
                yield expect(() => metadataTokenService.getToken())
                    .rejects
                    .toThrow();
                const intervals = setTimeout.mock.calls.map((v) => v[1]);
                expect(intervals)
                    .toEqual([
                    // eslint-disable-next-line no-bitwise
                    (1 << Math.min(0, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING)) * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION
                        * (1 - RANDOM * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO),
                    // eslint-disable-next-line no-bitwise
                    (1 << Math.min(1, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING)) * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION
                        * (1 - RANDOM * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO),
                    // eslint-disable-next-line no-bitwise
                    (1 << Math.min(2, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING)) * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION
                        * (1 - RANDOM * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO),
                    // eslint-disable-next-line no-bitwise
                    (1 << Math.min(3, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING)) * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION
                        * (1 - RANDOM * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO),
                    // eslint-disable-next-line no-bitwise
                    (1 << Math.min(4, metadata_token_service_consts_1.INITIALIZE_BACKOFF_CEILING)) * metadata_token_service_consts_1.INITIALIZE_BACKOFF_SLOT_DURATION
                        * (1 - RANDOM * metadata_token_service_consts_1.INITIALIZE_BACKOFF_UNCERTAIN_RATIO),
                ]);
                jest.restoreAllMocks();
            }));
        }
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        for (const tokenLifetimeSec of [30 * 60 * 60, 60 * 60, 10 * 60 * 60]) {
            it(
            // eslint-disable-next-line max-len
            `Regular token extend for when ${metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT}% lifetime left: doUpdateTokenInBackground ${doUpdateTokenInBackground}, period ${tokenLifetimeSec} mins`, 
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            () => __awaiter(void 0, void 0, void 0, function* () {
                const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
                const nextTokenTimeSec = tokenLifetimeSec * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100);
                let expectGetCalls = 0;
                let n = 0;
                for (const token of ['123', '456', '789']) {
                    axios_1.default.get.mockReturnValue({
                        status: 200,
                        data: {
                            access_token: token,
                            expires_in: tokenLifetimeSec,
                        },
                    });
                    if (n++ > 0) { // advance for update semi period, starting from 2nd run
                        // time to get next token, even then old token is good
                        // eslint-disable-next-line no-await-in-loop
                        yield fakeTimersFixture.advance((nextTokenTimeSec - (nextTokenTimeSec / 2)) * 1000);
                    }
                    // add extra 10 sec, so setTimeout would trigger before getToken(), otherwise due to racing
                    // an old token may shows up
                    // eslint-disable-next-line no-await-in-loop
                    yield fakeTimersFixture.advance(10 * 1000);
                    // 1st token call in the TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT period
                    // eslint-disable-next-line no-await-in-loop
                    let t = yield metadataTokenService.getToken();
                    expect(t)
                        .toBe(token);
                    expect(axios_1.default.get.mock.calls)
                        .toHaveLength(++expectGetCalls);
                    // 2nd token call in the same time
                    // eslint-disable-next-line no-await-in-loop
                    t = yield metadataTokenService.getToken();
                    expect(t)
                        .toBe(token);
                    expect(axios_1.default.get.mock.calls)
                        .toHaveLength(expectGetCalls); // increase is not expected
                    // eslint-disable-next-line no-await-in-loop
                    yield fakeTimersFixture.advance((nextTokenTimeSec / 2) * 1000); // still same token is good
                    // 3rd token call in the TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT period with some time has advanced
                    // eslint-disable-next-line no-await-in-loop
                    t = yield metadataTokenService.getToken();
                    expect(t)
                        .toBe(token);
                    expect(axios_1.default.get.mock.calls)
                        .toHaveLength(expectGetCalls); // increase is not expected
                }
                if (!doUpdateTokenInBackground) {
                    expect(setTimeout)
                        .not
                        .toHaveBeenCalled();
                }
                else {
                    expect(setTimeout)
                        .toHaveBeenCalled();
                }
                expect(setInterval)
                    .not
                    .toHaveBeenCalled(); // setInterval is not in use in the token provider's code
                metadataTokenService.dispose();
            }));
        }
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        xit(`Iam occasionally returns an error while .initialize(): : doUpdateTokenInBackground ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            // return token on 4th attempt - tests initialize()
            const nextResp = (function* () {
                for (let i = 0; i < 3; i++) {
                    yield {
                        status: 400,
                    };
                }
                return {
                    status: 200,
                    data: {
                        access_token: '123',
                        expires_in: 10 * 60 * 60, // secs
                    },
                };
            }());
            axios_1.default.get.mockImplementation(() => nextResp.next().value);
            // first time - return token, even if it was returned only on 4th attempt
            let t = yield metadataTokenService.getToken();
            expect(t)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(4);
            // after 1 hour, return on an error use old token and make only one attempt to get token
            axios_1.default.get.mockReturnValue({
                status: 400,
            });
            // after 1 hour,
            jest.advanceTimersByTime(60 * 60 * 1000);
            // Iam returns an error on 1st attempt, so we use the old token
            t = yield metadataTokenService.getToken();
            expect(t)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(5);
            // on next attempt we receive new token, and use this one
            axios_1.default.get.mockReturnValue({
                status: 200,
                data: {
                    access_token: '456',
                    expires_in: 10 * 60 * 60, // secs
                },
            });
            t = yield metadataTokenService.getToken();
            expect(t)
                .toBe('456');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(6);
        }));
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        xit(`use old token, if .getFetch() return an error: doUpdateTokenInBackground ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            const TOKEN_LIFETIME_MINS = 100;
            // set token
            axios_1.default.get.mockReturnValue({
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: TOKEN_LIFETIME_MINS * 60,
                },
            });
            let t = yield metadataTokenService.getToken();
            jest.advanceTimersByTime(10); // to overcome numbers rounding mistakes
            expect(t)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
            // return an error
            axios_1.default.get.mockReturnValue({
                status: 400,
            });
            jest.advanceTimersByTime(TOKEN_LIFETIME_MINS * 60 * 1000 * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100));
            t = yield metadataTokenService.getToken();
            expect(t)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(2);
        }));
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        xit(`parallel fetch token: doUpdateTokenInBackground ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            let responseResolve;
            let responsePromise;
            axios_1.default.get.mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () {
                responsePromise = new Promise((resolve) => {
                    responseResolve = resolve;
                });
                yield responsePromise;
                return {
                    status: 200,
                    data: {
                        access_token: '123',
                        expires_in: 10 * 60 * 60, // secs
                    },
                };
            }));
            const t1 = metadataTokenService.getToken();
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
            const t2 = metadataTokenService.getToken();
            const t3 = metadataTokenService.getToken();
            // @ts-ignore
            responseResolve === null || responseResolve === void 0 ? void 0 : responseResolve();
            // @ts-ignore
            yield responsePromise;
            expect(yield t1)
                .toBe('123');
            expect(yield t2)
                .toBe('123');
            expect(yield t3)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
        }));
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        xit(
        // eslint-disable-next-line max-len
        `if less then TOKEN_MINIMUM_LIFETIME_MARGIN_MS min left use .initialize() not .getToken(): doUpdateTokenInBackground ${doUpdateTokenInBackground}`, 
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            const TOKEN_LIFETIME_MINS = 100;
            // set token
            axios_1.default.get.mockReturnValue({
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: TOKEN_LIFETIME_MINS * 60,
                },
            });
            const t = yield metadataTokenService.getToken();
            jest.advanceTimersByTime(10); // to overcome numbers rounding mistakes
            expect(t)
                .toBe('123');
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1);
            // return an error
            axios_1.default.get.mockReturnValue({
                status: 400,
            });
            jest.advanceTimersByTime(TOKEN_LIFETIME_MINS * 60 * 1000);
            yield expect(() => metadataTokenService.getToken())
                .rejects
                .toThrow();
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(1 + metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN);
        }));
    }
    for (const doUpdateTokenInBackground of DO_UPDATE_TOKEN_IN_BACKGROUND_VALUES) {
        xit(
        // eslint-disable-next-line max-len
        `if always returned token with less then TOKEN_MINIMUM_LIFETIME_MARGIN_MS left: doUpdateTokenInBackground ${doUpdateTokenInBackground}`, 
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
            // set token
            axios_1.default.get.mockReturnValue({
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: (metadata_token_service_consts_1.TOKEN_MINIMUM_LIFETIME_MARGIN_MS / 2) / 1000,
                },
            });
            yield expect(() => metadataTokenService.getToken())
                .rejects
                .toThrow();
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN);
            yield expect(() => metadataTokenService.getToken())
                .rejects
                .toThrow();
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(2 * metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN);
            yield expect(() => metadataTokenService.getToken())
                .rejects
                .toThrow();
            expect(axios_1.default.get.mock.calls)
                .toHaveLength(3 * metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN);
        }));
    }
});
