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
describe('MetadataTokenService.fetchToken', () => {
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
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
    it('successfully fetching token', () => __awaiter(void 0, void 0, void 0, function* () {
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
        expect(yield metadataTokenService.fetchToken())
            .toBe('123');
        expect(testLoggerFn.mock.calls)
            .toEqual([
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
    it('error when fetching token, with increasing delay between attempts', () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.get.mockReturnValue({
            status: 400,
            statusText: 'error',
        });
        // @ts-ignore
        metadataTokenService.tokenExpiresAt = Date.now() + TTL;
        // @ts-ignore
        metadataTokenService.token = '123';
        // @ts-ignore
        metadataTokenService.tokenStartReportTTLAt = Date.now() + TTL + 24;
        for (let i = 0; i < metadata_token_service_consts_1.GET_TOKEN_BACKOFF_CEILING + 2; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            yield expect(metadataTokenService.fetchToken())
                .rejects
                .toThrow(new Error('failed to fetch token: 400 error'));
            // @ts-ignore
            // eslint-disable-next-line no-bitwise
            const slotsCount = 1 << Math.min(metadataTokenService.tokenErrorCount - 1, metadata_token_service_consts_1.GET_TOKEN_BACKOFF_CEILING);
            const maxDuration = slotsCount * metadata_token_service_consts_1.GET_TOKEN_BACKOFF_SLOT_DURATION;
            // @ts-ignore
            expect(metadataTokenService.tokenRefreshAt)
                .toBe(Date.now() + maxDuration * (1 - RANDOM * metadata_token_service_consts_1.GET_TOKEN_BACKOFF_UNCERTAIN_RATIO));
            // @ts-ignore
            // after error remains the same
            expect(metadataTokenService.token)
                .toBe('123');
            // @ts-ignore
            expect(metadataTokenService.tokenExpiresAt)
                .toBe(Date.now() + TTL);
            // @ts-ignore
            expect(metadataTokenService.tokenStartReportTTLAt)
                .toBe(Date.now() + TTL + 24);
            expect(testLoggerFn.mock.calls)
                .toEqual([
                [
                    'trace',
                    metadata_token_service_1.MetadataTokenService.Messages.trace_fetchToken,
                ],
                [
                    'error',
                    'failed to fetch token: 400 error',
                ]
            ]);
            testLoggerFn.mockReset();
        }
    }));
});
