"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.Secret_LabelsEntry = exports.Secret = exports.version_StatusToJSON = exports.version_StatusFromJSON = exports.Version_Status = exports.secret_StatusToJSON = exports.secret_StatusFromJSON = exports.Secret_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.lockbox.v1";
var Secret_Status;
(function (Secret_Status) {
    Secret_Status[Secret_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The secret is being created. */
    Secret_Status[Secret_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The secret is active and the secret payload can be accessed.
     *
     * Can be set to INACTIVE using the [SecretService.Deactivate] method.
     */
    Secret_Status[Secret_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The secret is inactive and unusable.
     *
     * Can be set to ACTIVE using the [SecretService.Deactivate] method.
     */
    Secret_Status[Secret_Status["INACTIVE"] = 3] = "INACTIVE";
    Secret_Status[Secret_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Secret_Status = exports.Secret_Status || (exports.Secret_Status = {}));
function secret_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Secret_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Secret_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Secret_Status.ACTIVE;
        case 3:
        case "INACTIVE":
            return Secret_Status.INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Secret_Status.UNRECOGNIZED;
    }
}
exports.secret_StatusFromJSON = secret_StatusFromJSON;
function secret_StatusToJSON(object) {
    switch (object) {
        case Secret_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Secret_Status.CREATING:
            return "CREATING";
        case Secret_Status.ACTIVE:
            return "ACTIVE";
        case Secret_Status.INACTIVE:
            return "INACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.secret_StatusToJSON = secret_StatusToJSON;
var Version_Status;
(function (Version_Status) {
    Version_Status[Version_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** ACTIVE - The version is active and the secret payload can be accessed. */
    Version_Status[Version_Status["ACTIVE"] = 1] = "ACTIVE";
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [Version.destroy_at] field.
     */
    Version_Status[Version_Status["SCHEDULED_FOR_DESTRUCTION"] = 2] = "SCHEDULED_FOR_DESTRUCTION";
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    Version_Status[Version_Status["DESTROYED"] = 3] = "DESTROYED";
    Version_Status[Version_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Version_Status = exports.Version_Status || (exports.Version_Status = {}));
function version_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case "ACTIVE":
            return Version_Status.ACTIVE;
        case 2:
        case "SCHEDULED_FOR_DESTRUCTION":
            return Version_Status.SCHEDULED_FOR_DESTRUCTION;
        case 3:
        case "DESTROYED":
            return Version_Status.DESTROYED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Version_Status.UNRECOGNIZED;
    }
}
exports.version_StatusFromJSON = version_StatusFromJSON;
function version_StatusToJSON(object) {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Version_Status.ACTIVE:
            return "ACTIVE";
        case Version_Status.SCHEDULED_FOR_DESTRUCTION:
            return "SCHEDULED_FOR_DESTRUCTION";
        case Version_Status.DESTROYED:
            return "DESTROYED";
        default:
            return "UNKNOWN";
    }
}
exports.version_StatusToJSON = version_StatusToJSON;
const baseSecret = {
    $type: "yandex.cloud.lockbox.v1.Secret",
    id: "",
    folderId: "",
    name: "",
    description: "",
    kmsKeyId: "",
    status: 0,
    deletionProtection: false,
};
exports.Secret = {
    $type: "yandex.cloud.lockbox.v1.Secret",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Secret_LabelsEntry.encode({
                $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.kmsKeyId !== "") {
            writer.uint32(58).string(message.kmsKeyId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.currentVersion !== undefined) {
            exports.Version.encode(message.currentVersion, writer.uint32(74).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecret);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Secret_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.kmsKeyId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.currentVersion = exports.Version.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseSecret);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.kmsKeyId =
            object.kmsKeyId !== undefined && object.kmsKeyId !== null
                ? String(object.kmsKeyId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? secret_StatusFromJSON(object.status)
                : 0;
        message.currentVersion =
            object.currentVersion !== undefined && object.currentVersion !== null
                ? exports.Version.fromJSON(object.currentVersion)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
        message.status !== undefined &&
            (obj.status = secret_StatusToJSON(message.status));
        message.currentVersion !== undefined &&
            (obj.currentVersion = message.currentVersion
                ? exports.Version.toJSON(message.currentVersion)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseSecret);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.kmsKeyId = (_g = object.kmsKeyId) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.currentVersion =
            object.currentVersion !== undefined && object.currentVersion !== null
                ? exports.Version.fromPartial(object.currentVersion)
                : undefined;
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret.$type, exports.Secret);
const baseSecret_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry",
    key: "",
    value: "",
};
exports.Secret_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecret_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSecret_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
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
        const message = Object.assign({}, baseSecret_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret_LabelsEntry.$type, exports.Secret_LabelsEntry);
const baseVersion = {
    $type: "yandex.cloud.lockbox.v1.Version",
    id: "",
    secretId: "",
    description: "",
    status: 0,
    payloadEntryKeys: "",
};
exports.Version = {
    $type: "yandex.cloud.lockbox.v1.Version",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.secretId !== "") {
            writer.uint32(18).string(message.secretId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.destroyAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        for (const v of message.payloadEntryKeys) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        message.payloadEntryKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.secretId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.destroyAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.payloadEntryKeys.push(reader.string());
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
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.destroyAt =
            object.destroyAt !== undefined && object.destroyAt !== null
                ? fromJsonTimestamp(object.destroyAt)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? version_StatusFromJSON(object.status)
                : 0;
        message.payloadEntryKeys = ((_a = object.payloadEntryKeys) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = version_StatusToJSON(message.status));
        if (message.payloadEntryKeys) {
            obj.payloadEntryKeys = message.payloadEntryKeys.map((e) => e);
        }
        else {
            obj.payloadEntryKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseVersion);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.secretId = (_b = object.secretId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.destroyAt = (_d = object.destroyAt) !== null && _d !== void 0 ? _d : undefined;
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.payloadEntryKeys = ((_g = object.payloadEntryKeys) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version.$type, exports.Version);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
