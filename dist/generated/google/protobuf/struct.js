"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        default:
            return "UNKNOWN";
    }
}
exports.nullValueToJSON = nullValueToJSON;
const baseStruct = { $type: "google.protobuf.Struct" };
exports.Struct = {
    $type: "google.protobuf.Struct",
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.fields).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Struct_FieldsEntry.encode({
                    $type: "google.protobuf.Struct.FieldsEntry",
                    key: key,
                    value,
                }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStruct);
        message.fields = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
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
        const message = Object.assign({}, baseStruct);
        message.fields = Object.entries((_a = object.fields) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(([k, v]) => {
                obj.fields[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStruct);
        message.fields = Object.entries((_a = object.fields) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap(object) {
        const struct = exports.Struct.fromPartial({});
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields[key] = object[key];
            });
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        Object.keys(message.fields).forEach((key) => {
            object[key] = message.fields[key];
        });
        return object;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Struct.$type, exports.Struct);
const baseStruct_FieldsEntry = {
    $type: "google.protobuf.Struct.FieldsEntry",
    key: "",
};
exports.Struct_FieldsEntry = {
    $type: "google.protobuf.Struct.FieldsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStruct_FieldsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStruct_FieldsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value = object.value;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStruct_FieldsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Struct_FieldsEntry.$type, exports.Struct_FieldsEntry);
const baseValue = { $type: "google.protobuf.Value" };
exports.Value = {
    $type: "google.protobuf.Value",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.structValue), writer.uint32(42).fork()).ldelim();
        }
        if (message.listValue !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.listValue), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nullValue = reader.int32();
                    break;
                case 2:
                    message.numberValue = reader.double();
                    break;
                case 3:
                    message.stringValue = reader.string();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                case 5:
                    message.structValue = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.listValue = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValue);
        message.nullValue =
            object.nullValue !== undefined && object.nullValue !== null
                ? nullValueFromJSON(object.nullValue)
                : undefined;
        message.numberValue =
            object.numberValue !== undefined && object.numberValue !== null
                ? Number(object.numberValue)
                : undefined;
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? String(object.stringValue)
                : undefined;
        message.boolValue =
            object.boolValue !== undefined && object.boolValue !== null
                ? Boolean(object.boolValue)
                : undefined;
        message.structValue =
            typeof object.structValue === "object" ? object.structValue : undefined;
        message.listValue = Array.isArray(object === null || object === void 0 ? void 0 : object.listValue)
            ? [...object.listValue]
            : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nullValue !== undefined &&
            (obj.nullValue =
                message.nullValue !== undefined
                    ? nullValueToJSON(message.nullValue)
                    : undefined);
        message.numberValue !== undefined &&
            (obj.numberValue = message.numberValue);
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        message.structValue !== undefined &&
            (obj.structValue = message.structValue);
        message.listValue !== undefined && (obj.listValue = message.listValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseValue);
        message.nullValue = (_a = object.nullValue) !== null && _a !== void 0 ? _a : undefined;
        message.numberValue = (_b = object.numberValue) !== null && _b !== void 0 ? _b : undefined;
        message.stringValue = (_c = object.stringValue) !== null && _c !== void 0 ? _c : undefined;
        message.boolValue = (_d = object.boolValue) !== null && _d !== void 0 ? _d : undefined;
        message.structValue = (_e = object.structValue) !== null && _e !== void 0 ? _e : undefined;
        message.listValue = (_f = object.listValue) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
    wrap(value) {
        if (value === null) {
            return { nullValue: NullValue.NULL_VALUE };
        }
        else if (typeof value === "boolean") {
            return { boolValue: value };
        }
        else if (typeof value === "number") {
            return { numberValue: value };
        }
        else if (typeof value === "string") {
            return { stringValue: value };
        }
        else if (Array.isArray(value)) {
            return { listValue: value };
        }
        else if (typeof value === "object") {
            return { structValue: value };
        }
        else if (typeof value === "undefined") {
            return {};
        }
        else {
            throw new Error("Unsupported any value type: " + typeof value);
        }
    },
    unwrap(message) {
        if ((message === null || message === void 0 ? void 0 : message.stringValue) !== undefined) {
            return message.stringValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.numberValue) !== undefined) {
            return message.numberValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.boolValue) !== undefined) {
            return message.boolValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.structValue) !== undefined) {
            return message.structValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.listValue) !== undefined) {
            return message.listValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.nullValue) !== undefined) {
            return null;
        }
        return undefined;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Value.$type, exports.Value);
const baseListValue = { $type: "google.protobuf.ListValue" };
exports.ListValue = {
    $type: "google.protobuf.ListValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListValue);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListValue);
        message.values = Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? [...object.values] : [];
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListValue);
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
    wrap(value) {
        return { $type: "google.protobuf.ListValue", values: value };
    },
    unwrap(message) {
        return message.values;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListValue.$type, exports.ListValue);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
