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
Object.defineProperty(exports, "__esModule", { value: true });
const test_logger_1 = require("../../utils/test-logger");
const metadata_token_service_1 = require("../../token-service/metadata-token-service");
const fake_timers_fixture_1 = require("../../utils/tests/fake-timers-fixture");
const metadata_token_service_consts_1 = require("../../token-service/metadata-token-service.consts");
const hr_interval_1 = require("../../utils/hr-interval");
describe('MetadataTokenService.setIamResponse', () => {
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
    const { testLogger, testLoggerFn, } = (0, test_logger_1.buildTestLogger)();
    let metadataTokenService;
    beforeEach(() => {
        fakeTimersFixture.setup();
        metadataTokenService = new metadata_token_service_1.MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset();
    });
    afterEach(() => {
        testLoggerFn.mockReset();
        fakeTimersFixture.dispose();
    });
    it('general', () => __awaiter(void 0, void 0, void 0, function* () {
        const TTL = 10 * 60 * 60; // sec
        metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: TTL,
        });
        // @ts-ignore
        expect(metadataTokenService.token)
            .toBe('123');
        // @ts-ignore
        expect(metadataTokenService.tokenExpiresAt)
            .toBe(Date.now() + (TTL * 1000) - metadata_token_service_consts_1.TOKEN_MINIMUM_LIFETIME_MARGIN_MS);
        // @ts-ignore
        expect(metadataTokenService.tokenRefreshAt)
            .toBe(Date.now() + (TTL * 1000) * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100));
        // @ts-ignore
        expect(metadataTokenService.tokenStartReportTTLAt)
            .toBe(Date.now() + (TTL * 1000) * (1 - metadata_token_service_consts_1.TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT / 100));
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(36000000),
                '',
            ],
        ]);
    }));
    it('new token received after an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const TTL = 10 * 60 * 60; // sec
        // @ts-ignore
        metadataTokenService.tokenLastError = {};
        metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: TTL,
        });
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'info',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(36000000),
                '',
            ],
        ]);
    }));
    it('token with TTL less than allowed', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: metadata_token_service_consts_1.TOKEN_MINIMUM_LIFETIME_MARGIN_MS / 1000 / 2,
        }))
            .toThrow(new Error('insufficient lifetime: 00:07:30'));
        expect(testLoggerFn.mock.calls)
            .toEqual([
            [
                'trace',
                metadata_token_service_1.MetadataTokenService.Messages.trace_setIamResponse,
            ],
            [
                'debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_new_token_was_received,
                new hr_interval_1.HRInterval(450000),
                ' (too small TTL)',
            ],
        ]);
    }));
    it('invalid token structure', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => metadataTokenService.setIamResponse(undefined))
            .toThrow(new Error('invalid iam token: undefined'));
        expect(() => metadataTokenService.setIamResponse(null))
            .toThrow(new Error('invalid iam token: null'));
        expect(() => metadataTokenService.setIamResponse({}))
            .toThrow(new Error('invalid iam token: {}'));
        expect(() => metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            expires_in: 'str',
        }))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: \'str\' }'));
        expect(() => metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            expires_in: -1,
        }))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: -1 }'));
        expect(() => metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            expires_in: 10 * 60 * 60,
            access_token: 111,
        }))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: 36000, access_token: 111 }'));
        expect(() => metadataTokenService.setIamResponse({
            token_type: 'Bearer',
            expires_in: 10 * 60 * 60,
            access_token: '123',
        }))
            .not
            .toThrow();
    }));
});
