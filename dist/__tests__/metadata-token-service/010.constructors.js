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
const metadata_token_service_1 = require("../../token-service/metadata-token-service");
const test_logger_1 = require("../../utils/test-logger");
const { testLogger, testLoggerFn, } = (0, test_logger_1.buildTestLogger)();
beforeEach(() => {
    jest.spyOn(metadata_token_service_1.MetadataTokenService.prototype, 'getToken');
    // so init sequenc whouldn't start in the constructor
    metadata_token_service_1.MetadataTokenService.prototype.getToken.mockReturnValue(Promise.resolve());
});
afterEach(() => {
    testLoggerFn.mockReset();
});
describe('metadata-token-service.constructors', () => {
    it('constructor: default', () => __awaiter(void 0, void 0, void 0, function* () {
        const metadataTokenService = new metadata_token_service_1.MetadataTokenService({ logger: testLogger });
        expect(testLoggerFn.mock.calls)
            .toEqual([
            ['debug',
                metadata_token_service_1.MetadataTokenService.Messages.debug_ctor,
                metadata_token_service_1.MetadataTokenService.DEFAULT_URL,
                false,
                metadata_token_service_1.MetadataTokenService.DEFAULT_OPTIONS,
            ]
        ]);
    }));
    for (const url of [undefined, 'AnURL']) {
        for (const doUpdateTokenInBackground of [undefined, true, false]) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            it(`constructor: ${url} ${doUpdateTokenInBackground}`, () => __awaiter(void 0, void 0, void 0, function* () {
                const metadataTokenService = url
                    ? new metadata_token_service_1.MetadataTokenService(url, {
                        headers: {},
                        doUpdateTokenInBackground,
                        logger: testLogger,
                    })
                    : new metadata_token_service_1.MetadataTokenService({
                        headers: {},
                        doUpdateTokenInBackground,
                        logger: testLogger,
                    });
                yield metadataTokenService.dispose();
                expect(testLoggerFn.mock.calls)
                    .toEqual([
                    ['debug',
                        metadata_token_service_1.MetadataTokenService.Messages.debug_ctor,
                        url === undefined
                            ? metadata_token_service_1.MetadataTokenService.DEFAULT_URL
                            : url,
                        doUpdateTokenInBackground === undefined ? false : doUpdateTokenInBackground,
                        { headers: {} },
                    ], ['trace',
                        metadata_token_service_1.MetadataTokenService.Messages.trace_dispose,
                    ]
                ]);
            }));
        }
    }
});
