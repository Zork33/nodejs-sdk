"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeServiceClient = exports.NodeServiceService = exports.NodeExecutionResponse = exports.NodeExecutionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../../../google/protobuf/struct");
exports.protobufPackage = "yandex.cloud.datasphere.v1";
const baseNodeExecutionRequest = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest",
    folderId: "",
    nodeId: "",
};
exports.NodeExecutionRequest = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.input !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.input), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeExecutionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.input = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNodeExecutionRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.nodeId =
            object.nodeId !== undefined && object.nodeId !== null
                ? String(object.nodeId)
                : "";
        message.input = typeof object.input === "object" ? object.input : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.input !== undefined && (obj.input = message.input);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNodeExecutionRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.nodeId = (_b = object.nodeId) !== null && _b !== void 0 ? _b : "";
        message.input = (_c = object.input) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeExecutionRequest.$type, exports.NodeExecutionRequest);
const baseNodeExecutionResponse = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse",
};
exports.NodeExecutionResponse = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.output !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.output), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeExecutionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.output = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNodeExecutionResponse);
        message.output =
            typeof object.output === "object" ? object.output : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.output !== undefined && (obj.output = message.output);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNodeExecutionResponse);
        message.output = (_a = object.output) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeExecutionResponse.$type, exports.NodeExecutionResponse);
/** A set of methods for managing Node resources. */
exports.NodeServiceService = {
    /** Executes deployed Node. */
    execute: {
        path: "/yandex.cloud.datasphere.v1.NodeService/Execute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.NodeExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.NodeExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.NodeExecutionResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.NodeExecutionResponse.decode(value),
    },
};
exports.NodeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NodeServiceService, "yandex.cloud.datasphere.v1.NodeService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
