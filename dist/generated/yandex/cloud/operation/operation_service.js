"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationServiceClient = exports.OperationServiceService = exports.CancelOperationRequest = exports.GetOperationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operation_1 = require("../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.operation";
const baseGetOperationRequest = {
    $type: "yandex.cloud.operation.GetOperationRequest",
    operationId: "",
};
exports.GetOperationRequest = {
    $type: "yandex.cloud.operation.GetOperationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operationId !== "") {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOperationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOperationRequest);
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetOperationRequest);
        message.operationId = (_a = object.operationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOperationRequest.$type, exports.GetOperationRequest);
const baseCancelOperationRequest = {
    $type: "yandex.cloud.operation.CancelOperationRequest",
    operationId: "",
};
exports.CancelOperationRequest = {
    $type: "yandex.cloud.operation.CancelOperationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operationId !== "") {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelOperationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCancelOperationRequest);
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCancelOperationRequest);
        message.operationId = (_a = object.operationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelOperationRequest.$type, exports.CancelOperationRequest);
/** A set of methods for managing operations for asynchronous API requests. */
exports.OperationServiceService = {
    /** Returns the specified Operation resource. */
    get: {
        path: "/yandex.cloud.operation.OperationService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel: {
        path: "/yandex.cloud.operation.OperationService/Cancel",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OperationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OperationServiceService, "yandex.cloud.operation.OperationService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
