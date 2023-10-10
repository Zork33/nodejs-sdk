"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostTypeServiceClient = exports.HostTypeServiceService = exports.ListHostTypesResponse = exports.ListHostTypesRequest = exports.GetHostTypeRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const host_type_1 = require("../../../../yandex/cloud/compute/v1/host_type");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetHostTypeRequest = {
    $type: "yandex.cloud.compute.v1.GetHostTypeRequest",
    hostTypeId: "",
};
exports.GetHostTypeRequest = {
    $type: "yandex.cloud.compute.v1.GetHostTypeRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostTypeId !== "") {
            writer.uint32(10).string(message.hostTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetHostTypeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetHostTypeRequest);
        message.hostTypeId =
            object.hostTypeId !== undefined && object.hostTypeId !== null
                ? String(object.hostTypeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostTypeId !== undefined && (obj.hostTypeId = message.hostTypeId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetHostTypeRequest);
        message.hostTypeId = (_a = object.hostTypeId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetHostTypeRequest.$type, exports.GetHostTypeRequest);
const baseListHostTypesRequest = {
    $type: "yandex.cloud.compute.v1.ListHostTypesRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListHostTypesRequest = {
    $type: "yandex.cloud.compute.v1.ListHostTypesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHostTypesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListHostTypesRequest);
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListHostTypesRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostTypesRequest.$type, exports.ListHostTypesRequest);
const baseListHostTypesResponse = {
    $type: "yandex.cloud.compute.v1.ListHostTypesResponse",
    nextPageToken: "",
};
exports.ListHostTypesResponse = {
    $type: "yandex.cloud.compute.v1.ListHostTypesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hostTypes) {
            host_type_1.HostType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHostTypesResponse);
        message.hostTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypes.push(host_type_1.HostType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListHostTypesResponse);
        message.hostTypes = ((_a = object.hostTypes) !== null && _a !== void 0 ? _a : []).map((e) => host_type_1.HostType.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hostTypes) {
            obj.hostTypes = message.hostTypes.map((e) => e ? host_type_1.HostType.toJSON(e) : undefined);
        }
        else {
            obj.hostTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListHostTypesResponse);
        message.hostTypes =
            ((_a = object.hostTypes) === null || _a === void 0 ? void 0 : _a.map((e) => host_type_1.HostType.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostTypesResponse.$type, exports.ListHostTypesResponse);
/** Set of methods to view possible host configurations. */
exports.HostTypeServiceService = {
    /** Returns information about specified host type. */
    get: {
        path: "/yandex.cloud.compute.v1.HostTypeService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetHostTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetHostTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(host_type_1.HostType.encode(value).finish()),
        responseDeserialize: (value) => host_type_1.HostType.decode(value),
    },
    /** List avaliable host types. */
    list: {
        path: "/yandex.cloud.compute.v1.HostTypeService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostTypesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostTypesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostTypesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostTypesResponse.decode(value),
    },
};
exports.HostTypeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.HostTypeServiceService, "yandex.cloud.compute.v1.HostTypeService");
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
