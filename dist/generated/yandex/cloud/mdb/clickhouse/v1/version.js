"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
const baseVersion = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Version",
    id: "",
    name: "",
    deprecated: false,
    updatableTo: "",
};
exports.Version = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Version",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.updatableTo) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        message.updatableTo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 4:
                    message.updatableTo.push(reader.string());
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
        const message = Object.assign({}, baseVersion);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.updatableTo = ((_a = object.updatableTo) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.updatableTo) {
            obj.updatableTo = message.updatableTo.map((e) => e);
        }
        else {
            obj.updatableTo = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseVersion);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.updatableTo = ((_d = object.updatableTo) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version.$type, exports.Version);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
