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
const metadata_token_service_consts_1 = require("../../token-service/metadata-token-service.consts");
const test_logger_1 = require("../../utils/test-logger");
const hr_interval_1 = require("../../utils/hr-interval");
const TTL = 10 * 60 * 60;
const RANDOM = 0.7;
describe('MetadataTokenService.initialize', () => {
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
        Math.random.mockReturnValue(RANDOM);
        metadataTokenService = new metadata_token_service_1.MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset(); // clear constructor log
    });
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        yield fakeTimersFixture.dispose();
    }));
    it('token was successfully obtained from the beginning', () => __awaiter(void 0, void 0, void 0, function* () {
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
        yield metadataTokenService.initialize();
        // @ts-ignore
        expect(metadataTokenService.token)
            .toBe('123');
    }));
    it('the token was not successfully obtained on the first attempt', () => __awaiter(void 0, void 0, void 0, function* () {
        const N = Math.trunc(metadata_token_service_consts_1.INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN / 2);
        const nextReturn = (function* nextReturn() {
            for (let i = 0; i < N; i++) {
                yield {
                    status: 400,
                    statusText: 'error',
                };
            }
            return {
                status: 200,
                statusText: 'ok',
                data: {
                    token_type: 'Bearer',
                    access_token: '123',
                    expires_in: TTL,
                },
            };
        }());
        axios_1.default.get.mockImplementation(() => nextReturn.next().value);
        // @ts-ignore
        yield metadataTokenService.initialize();
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_initialize,
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
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
            ],
            [
                'error',
                'failed to fetch token: 400 error',
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
    it('all attempts failed', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        yield expect(metadataTokenService.initialize())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
    }));
});
