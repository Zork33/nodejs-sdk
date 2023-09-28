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
const metadata_token_service_consts_1 = require("../../token-service/metadata-token-service.consts");
const TTL = 10 * 60 * 60;
describe('MetadataTokenService.getToken', () => {
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
    (0, metadata_token_service_1.setTestInitializeTimerAdvance)((duration) => __awaiter(void 0, void 0, void 0, function* () {
        yield fakeTimersFixture.advanceTimer(duration);
    }));
    const { testLogger, testLoggerFn, } = (0, test_logger_1.buildTestLogger)();
    let metadataTokenService;
    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios_1.default, 'get');
        jest.spyOn(Math, 'random');
        Math.random.mockReturnValue(1);
        metadataTokenService = new metadata_token_service_1.MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset(); // clear constructor log
    });
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        yield fakeTimersFixture.dispose();
    }));
    it('initial state, successfully fetching token', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
        ]);
    }));
    it('initial state, error when fetching token', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
            const res = [
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
            ];
            for (let i = 0; i < metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN; i++) {
                res.push([
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
                ], [
                    'error',
                    'failed to fetch token: 400 error',
                ]);
            }
            return res;
        })());
    }));
    it('there is a token, but at the next fetchToken() an error is received', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        testLoggerFn.mockReset(); // log starts from here
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenRefreshAt - Date.now());
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
                metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
            ],
            [
                'error',
                'failed to fetch token: 400 error',
            ]
        ]);
    }));
    it('token expired, successfully fetch new token', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        testLoggerFn.mockReset(); // log starts from here
        // @ts-ignore
        yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenExpiresAt - Date.now());
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
            ]
        ]);
    }));
    it('token expired, error when fetching new token', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        testLoggerFn.mockReset(); // log starts from here
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenExpiresAt - Date.now());
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
            const res = [
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
            ];
            for (let i = 0; i < metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN; i++) {
                res.push([
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
                ], [
                    'error',
                    'failed to fetch token: 400 error',
                ]);
            }
            return res;
        })());
    }));
    it('one _getToken() in a time', () => __awaiter(void 0, void 0, void 0, function* () {
        let getResolve;
        // eslint-disable-next-line no-promise-executor-return
        axios_1.default.get.mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () {
            return new Promise((resolve) => {
                getResolve = resolve;
            });
        }));
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
        expect(yield getTokenPromise1)
            .toBe('123');
        expect(yield getTokenPromise2)
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(TTL * 1000),
                '',
            ]
        ]);
    }));
    it('fetchToken() is not invoked again till tokenRefreshAt, even if there was an error', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        // @ts-ignore
        yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenRefreshAt - 20 - Date.now());
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        // @ts-ignore
        yield expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
        yield fakeTimersFixture.advanceTimer(20); // it's time to update
        // @ts-ignore
        expect(yield metadataTokenService.getToken()).toBe('123');
    }));
    it('in a while starts to report token TTL left', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });
        // @ts-ignore
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        testLoggerFn.mockReset();
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        yield fakeTimersFixture.advanceTimer(metadataTokenService.tokenStartReportTTLAt - Date.now());
        // @ts-ignore
        expect(yield metadataTokenService.getToken())
            .toBe('123');
        // @ts-ignore
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
                metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
            ],
            [
                'error',
                'failed to fetch token: 400 error',
            ],
            [
                'warn',
                metadata_token_service_1.MetadataTokenService.Messages.warn_emaining_token_TTL,
                // @ts-ignore
                new hr_interval_1.HRInterval(metadataTokenService.tokenExpiresAt - Date.now()),
            ],
        ]);
    }));
});
