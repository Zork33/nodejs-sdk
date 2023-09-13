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
exports.Session = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const nice_grpc_1 = require("nice-grpc");
const iam_token_service_1 = require("./token-service/iam-token-service");
const metadata_token_service_1 = require("./token-service/metadata-token-service");
const client_factory_1 = require("./utils/client-factory");
const _1 = require(".");
const service_endpoints_1 = require("./service-endpoints");
const isOAuth = (config) => 'oauthToken' in config;
const isIamToken = (config) => 'iamToken' in config;
const isServiceAccount = (config) => 'serviceAccountJson' in config;
const createIamToken = (iamEndpoint, req) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = (0, nice_grpc_1.createChannel)(iamEndpoint, grpc_js_1.credentials.createSsl());
    const client = client_factory_1.clientFactory.create(_1.serviceClients.IamTokenServiceClient.service, channel);
    const resp = yield client.create(_1.cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial(req));
    return resp.iamToken;
});
const newTokenCreator = (config) => {
    if (isOAuth(config)) {
        return () => {
            const iamEndpoint = (0, service_endpoints_1.getServiceClientEndpoint)(_1.serviceClients.IamTokenServiceClient);
            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    }
    if (isIamToken(config)) {
        const { iamToken } = config;
        return () => __awaiter(void 0, void 0, void 0, function* () { return iamToken; });
    }
    const tokenService = isServiceAccount(config) ? new iam_token_service_1.IamTokenService(config.serviceAccountJson) : new metadata_token_service_1.MetadataTokenService();
    return () => __awaiter(void 0, void 0, void 0, function* () { return tokenService.getToken(); });
};
const newChannelCredentials = (tokenCreator, sslOptions) => grpc_js_1.credentials.combineChannelCredentials(grpc_js_1.credentials.createSsl(sslOptions === null || sslOptions === void 0 ? void 0 : sslOptions.rootCerts, sslOptions === null || sslOptions === void 0 ? void 0 : sslOptions.privateKey, sslOptions === null || sslOptions === void 0 ? void 0 : sslOptions.certChain), grpc_js_1.credentials.createFromMetadataGenerator((params, callback) => {
    tokenCreator()
        .then((token) => {
        const md = new grpc_js_1.Metadata();
        md.set('authorization', `Bearer ${token}`);
        return callback(null, md);
    })
        .catch((error) => callback(error));
}));
class Session {
    constructor(config) {
        this.config = Object.assign(Object.assign({}, Session.DEFAULT_CONFIG), config);
        this.tokenCreator = newTokenCreator(this.config);
        this.channelCredentials = newChannelCredentials(this.tokenCreator, this.config.ssl);
    }
    get pollInterval() {
        return this.config.pollInterval;
    }
    client(clientClass, customEndpoint) {
        const endpoint = customEndpoint || (0, service_endpoints_1.getServiceClientEndpoint)(clientClass);
        const channel = (0, nice_grpc_1.createChannel)(endpoint, this.channelCredentials);
        return client_factory_1.clientFactory.create(clientClass.service, channel);
    }
}
exports.Session = Session;
Session.DEFAULT_CONFIG = {
    pollInterval: 1000,
};
