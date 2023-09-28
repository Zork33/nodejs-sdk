"use strict";
// MetadataTokenService.reportError
// MetadataTokenService.initialize
// MetadataTokenService.fetchToken
// MetadataTokenService.dispose
// MetadataTokenService.getToken
// MetadataTokenService.constructors
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
const metadata_token_service_1 = require("../../token-service/metadata-token-service");
const testOnError = () => { };
describe('metadata-token-service', () => {
    it('constructor: default', () => __awaiter(void 0, void 0, void 0, function* () {
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService();
        // @ts-ignore
        expect(metadataTokenService.url)
            .toEqual('http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token');
        // @ts-ignore
        expect(metadataTokenService.opts)
            .toEqual({
            headers: {
                'Metadata-Flavor': 'Google',
            },
        });
        // @ts-ignore
        expect(metadataTokenService.onError)
            .not
            .toBeDefined();
        // @ts-ignore
        expect(metadataTokenService.doUpdateTokenInBackground)
            .toBeFalsy();
    }));
    for (const url of [undefined, 'AnURL']) {
        for (const doUpdateTokenInBackground of [undefined, true, false]) {
            for (const onError of [undefined, testOnError]) {
                // eslint-disable-next-line @typescript-eslint/no-loop-func
                it(`constructor: ${url ? 'url and ' : ''} options' : ${url} ${doUpdateTokenInBackground} ${!!onError}`, () => __awaiter(void 0, void 0, void 0, function* () {
                    const metadataTokenService = url
                        ? new metadata_token_service_1.MetadataTokenService(url, {
                            doUpdateTokenInBackground,
                            onError,
                        })
                        : new metadata_token_service_1.MetadataTokenService({
                            doUpdateTokenInBackground,
                            onError,
                        });
                    // @ts-ignore
                    expect(metadataTokenService.url)
                        .toBe(url);
                    // @ts-ignore
                    expect(metadataTokenService.opts)
                        .toEqual({});
                    // @ts-ignore
                    expect(metadataTokenService.onError)
                        .not
                        .toBe(onError);
                    // @ts-ignore
                    expect(metadataTokenService.doUpdateTokenInBackground)
                        .toBe(doUpdateTokenInBackground);
                    yield metadataTokenService.dispose();
                }));
            }
        }
    }
});
