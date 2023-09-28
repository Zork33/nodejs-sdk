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
const fake_timers_fixture_1 = require("../../utils/tests/fake-timers-fixture");
const metadata_token_service_1 = require("../../token-service/metadata-token-service");
const metadata_token_service_consts_1 = require("../../token-service/metadata-token-service.consts");
describe('MetadataTokenService.printError', () => {
    const testError = new Error('test error');
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
    const onErrorMock = jest.fn();
    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(console, 'error')
            .mockImplementation(() => { });
    });
    afterEach(() => {
        jest.restoreAllMocks();
        fakeTimersFixture.dispose();
    });
    for (const onError of [undefined, onErrorMock]) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        it(`printError: simple: ${!!onError}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ onError });
            // @ts-ignore
            (metadataTokenService.reportError)(testError);
            expect((onError !== null && onError !== void 0 ? onError : console.error).mock.calls)
                .toEqual([[onError ? testError : 'failed to fetch token from metadata service: Error: test error']]);
        }));
    }
    it('printError: one message per ERROR_REPORT_INTERVAL_MS', () => __awaiter(void 0, void 0, void 0, function* () {
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({});
        for (let i = 0; i < 3; i++) {
            // @ts-ignore
            (metadataTokenService.reportError)(new Error(i.toString()));
            // @ts-ignore
            (metadataTokenService.reportError)(testError);
            // eslint-disable-next-line no-await-in-loop
            yield fakeTimersFixture.advanceTimer(metadata_token_service_consts_1.ERROR_REPORT_INTERVAL_MS);
        }
        expect(console.error.mock.calls)
            .toHaveLength(3);
        expect(console.error.mock.calls[2][0].toString())
            .toEqual('failed to fetch token from metadata service: Error: 2');
    }));
});
