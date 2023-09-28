"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = exports.Polygon = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.ai.vision.v1";
const basePolygon = { $type: "yandex.cloud.ai.vision.v1.Polygon" };
exports.Polygon = {
    $type: "yandex.cloud.ai.vision.v1.Polygon",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vertices) {
            exports.Vertex.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolygon);
        message.vertices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertices.push(exports.Vertex.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePolygon);
        message.vertices = ((_a = object.vertices) !== null && _a !== void 0 ? _a : []).map((e) => exports.Vertex.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.vertices) {
            obj.vertices = message.vertices.map((e) => e ? exports.Vertex.toJSON(e) : undefined);
        }
        else {
            obj.vertices = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePolygon);
        message.vertices = ((_a = object.vertices) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Vertex.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Polygon.$type, exports.Polygon);
const baseVertex = {
    $type: "yandex.cloud.ai.vision.v1.Vertex",
    x: 0,
    y: 0,
};
exports.Vertex = {
    $type: "yandex.cloud.ai.vision.v1.Vertex",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVertex);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = longToNumber(reader.int64());
                    break;
                case 2:
                    message.y = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVertex);
        message.x =
            object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y =
            object.y !== undefined && object.y !== null ? Number(object.y) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseVertex);
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Vertex.$type, exports.Vertex);
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
