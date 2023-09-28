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
describe('MetadataTokenService.dispose', () => {
    const fakeTimersFixture = new fake_timers_fixture_1.FakeTimersFixture();
    const onErrorMock = jest.fn();
    beforeEach(() => {
        fakeTimersFixture.setup();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    // timer get cleared
    for (const doUpdateTokenInBackground of [true, false]) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        it(`getToken: ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
            const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ doUpdateTokenInBackground });
        }));
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        // it(`getToken: ${doUpdateTokenInBackground}`, async () => {
        //     const metadataTokenService = new MetadataTokenService({doUpdateTokenInBackground});
        //
        // });
    }
});
