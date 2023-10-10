"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionServiceClient = exports.VersionServiceService = exports.AvailableVersions = exports.ListVersionsResponse = exports.ListVersionsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../yandex/cloud/k8s/v1/cluster");
exports.protobufPackage = "yandex.cloud.k8s.v1";
const baseListVersionsRequest = {
    $type: "yandex.cloud.k8s.v1.ListVersionsRequest",
};
exports.ListVersionsRequest = {
    $type: "yandex.cloud.k8s.v1.ListVersionsRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVersionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseListVersionsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseListVersionsRequest);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsRequest.$type, exports.ListVersionsRequest);
const baseListVersionsResponse = {
    $type: "yandex.cloud.k8s.v1.ListVersionsResponse",
};
exports.ListVersionsResponse = {
    $type: "yandex.cloud.k8s.v1.ListVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.availableVersions) {
            exports.AvailableVersions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVersionsResponse);
        message.availableVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.availableVersions.push(exports.AvailableVersions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseListVersionsResponse);
        message.availableVersions = ((_a = object.availableVersions) !== null && _a !== void 0 ? _a : []).map((e) => exports.AvailableVersions.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.availableVersions) {
            obj.availableVersions = message.availableVersions.map((e) => e ? exports.AvailableVersions.toJSON(e) : undefined);
        }
        else {
            obj.availableVersions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListVersionsResponse);
        message.availableVersions =
            ((_a = object.availableVersions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AvailableVersions.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsResponse.$type, exports.ListVersionsResponse);
const baseAvailableVersions = {
    $type: "yandex.cloud.k8s.v1.AvailableVersions",
    releaseChannel: 0,
    versions: "",
};
exports.AvailableVersions = {
    $type: "yandex.cloud.k8s.v1.AvailableVersions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.releaseChannel !== 0) {
            writer.uint32(8).int32(message.releaseChannel);
        }
        for (const v of message.versions) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAvailableVersions);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.releaseChannel = reader.int32();
                    break;
                case 2:
                    message.versions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseAvailableVersions);
        message.releaseChannel =
            object.releaseChannel !== undefined && object.releaseChannel !== null
                ? (0, cluster_1.releaseChannelFromJSON)(object.releaseChannel)
                : 0;
        message.versions = ((_a = object.versions) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = (0, cluster_1.releaseChannelToJSON)(message.releaseChannel));
        if (message.versions) {
            obj.versions = message.versions.map((e) => e);
        }
        else {
            obj.versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAvailableVersions);
        message.releaseChannel = (_a = object.releaseChannel) !== null && _a !== void 0 ? _a : 0;
        message.versions = ((_b = object.versions) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AvailableVersions.$type, exports.AvailableVersions);
/** A set of methods for managing Kubernetes versions. */
exports.VersionServiceService = {
    /** Retrieves the list of versions in the specified release channel. */
    list: {
        path: "/yandex.cloud.k8s.v1.VersionService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVersionsResponse.decode(value),
    },
};
exports.VersionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.VersionServiceService, "yandex.cloud.k8s.v1.VersionService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
