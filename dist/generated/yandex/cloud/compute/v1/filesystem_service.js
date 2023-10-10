"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesystemServiceClient = exports.FilesystemServiceService = exports.ListFilesystemOperationsResponse = exports.ListFilesystemOperationsRequest = exports.DeleteFilesystemMetadata = exports.DeleteFilesystemRequest = exports.UpdateFilesystemMetadata = exports.UpdateFilesystemRequest_LabelsEntry = exports.UpdateFilesystemRequest = exports.CreateFilesystemMetadata = exports.CreateFilesystemRequest_LabelsEntry = exports.CreateFilesystemRequest = exports.ListFilesystemsResponse = exports.ListFilesystemsRequest = exports.GetFilesystemRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const filesystem_1 = require("../../../../yandex/cloud/compute/v1/filesystem");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.GetFilesystemRequest",
    filesystemId: "",
};
exports.GetFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.GetFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFilesystemRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFilesystemRequest);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetFilesystemRequest);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFilesystemRequest.$type, exports.GetFilesystemRequest);
const baseListFilesystemsRequest = {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListFilesystemsRequest = {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesystemsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListFilesystemsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListFilesystemsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesystemsRequest.$type, exports.ListFilesystemsRequest);
const baseListFilesystemsResponse = {
    $type: "yandex.cloud.compute.v1.ListFilesystemsResponse",
    nextPageToken: "",
};
exports.ListFilesystemsResponse = {
    $type: "yandex.cloud.compute.v1.ListFilesystemsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.filesystems) {
            filesystem_1.Filesystem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesystemsResponse);
        message.filesystems = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystems.push(filesystem_1.Filesystem.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFilesystemsResponse);
        message.filesystems = ((_a = object.filesystems) !== null && _a !== void 0 ? _a : []).map((e) => filesystem_1.Filesystem.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.filesystems) {
            obj.filesystems = message.filesystems.map((e) => e ? filesystem_1.Filesystem.toJSON(e) : undefined);
        }
        else {
            obj.filesystems = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFilesystemsResponse);
        message.filesystems =
            ((_a = object.filesystems) === null || _a === void 0 ? void 0 : _a.map((e) => filesystem_1.Filesystem.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesystemsResponse.$type, exports.ListFilesystemsResponse);
const baseCreateFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest",
    folderId: "",
    name: "",
    description: "",
    typeId: "",
    zoneId: "",
    size: 0,
    blockSize: 0,
};
exports.CreateFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateFilesystemRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.typeId !== "") {
            writer.uint32(42).string(message.typeId);
        }
        if (message.zoneId !== "") {
            writer.uint32(50).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(56).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(64).int64(message.blockSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFilesystemRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateFilesystemRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.typeId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.blockSize = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseCreateFilesystemRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.blockSize =
            object.blockSize !== undefined && object.blockSize !== null
                ? Number(object.blockSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.blockSize !== undefined &&
            (obj.blockSize = Math.round(message.blockSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateFilesystemRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.typeId = (_e = object.typeId) !== null && _e !== void 0 ? _e : "";
        message.zoneId = (_f = object.zoneId) !== null && _f !== void 0 ? _f : "";
        message.size = (_g = object.size) !== null && _g !== void 0 ? _g : 0;
        message.blockSize = (_h = object.blockSize) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFilesystemRequest.$type, exports.CreateFilesystemRequest);
const baseCreateFilesystemRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateFilesystemRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateFilesystemRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateFilesystemRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateFilesystemRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFilesystemRequest_LabelsEntry.$type, exports.CreateFilesystemRequest_LabelsEntry);
const baseCreateFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata",
    filesystemId: "",
};
exports.CreateFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFilesystemMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateFilesystemMetadata);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateFilesystemMetadata);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFilesystemMetadata.$type, exports.CreateFilesystemMetadata);
const baseUpdateFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest",
    filesystemId: "",
    name: "",
    description: "",
    size: 0,
};
exports.UpdateFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateFilesystemRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFilesystemRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateFilesystemRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseUpdateFilesystemRequest);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
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
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateFilesystemRequest);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.size = (_e = object.size) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFilesystemRequest.$type, exports.UpdateFilesystemRequest);
const baseUpdateFilesystemRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateFilesystemRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateFilesystemRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateFilesystemRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateFilesystemRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFilesystemRequest_LabelsEntry.$type, exports.UpdateFilesystemRequest_LabelsEntry);
const baseUpdateFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata",
    filesystemId: "",
};
exports.UpdateFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFilesystemMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateFilesystemMetadata);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateFilesystemMetadata);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFilesystemMetadata.$type, exports.UpdateFilesystemMetadata);
const baseDeleteFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest",
    filesystemId: "",
};
exports.DeleteFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFilesystemRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFilesystemRequest);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteFilesystemRequest);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFilesystemRequest.$type, exports.DeleteFilesystemRequest);
const baseDeleteFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata",
    filesystemId: "",
};
exports.DeleteFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFilesystemMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFilesystemMetadata);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteFilesystemMetadata);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFilesystemMetadata.$type, exports.DeleteFilesystemMetadata);
const baseListFilesystemOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest",
    filesystemId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListFilesystemOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filesystemId !== "") {
            writer.uint32(10).string(message.filesystemId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesystemOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filesystemId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
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
        const message = Object.assign({}, baseListFilesystemOperationsRequest);
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
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
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListFilesystemOperationsRequest);
        message.filesystemId = (_a = object.filesystemId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesystemOperationsRequest.$type, exports.ListFilesystemOperationsRequest);
const baseListFilesystemOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse",
    nextPageToken: "",
};
exports.ListFilesystemOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesystemOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFilesystemOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFilesystemOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesystemOperationsResponse.$type, exports.ListFilesystemOperationsResponse);
/** A set of methods for managing filesystems. */
exports.FilesystemServiceService = {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.FilesystemService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(filesystem_1.Filesystem.encode(value).finish()),
        responseDeserialize: (value) => filesystem_1.Filesystem.decode(value),
    },
    /** Lists filesystems in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.FilesystemService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFilesystemsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFilesystemsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFilesystemsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFilesystemsResponse.decode(value),
    },
    /** Creates a filesystem in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.FilesystemService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified filesystem. */
    update: {
        path: "/yandex.cloud.compute.v1.FilesystemService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.FilesystemService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified filesystem. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFilesystemOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFilesystemOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFilesystemOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFilesystemOperationsResponse.decode(value),
    },
};
exports.FilesystemServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FilesystemServiceService, "yandex.cloud.compute.v1.FilesystemService");
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
