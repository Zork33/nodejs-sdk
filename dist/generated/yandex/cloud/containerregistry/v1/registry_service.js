"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryServiceClient = exports.RegistryServiceService = exports.UpdateIpPermissionMetadata = exports.SetIpPermissionMetadata = exports.ListIpPermissionsResponse = exports.ListIpPermissionRequest = exports.UpdateIpPermissionRequest = exports.SetIpPermissionRequest = exports.DeleteRegistryMetadata = exports.DeleteRegistryRequest = exports.UpdateRegistryMetadata = exports.UpdateRegistryRequest_LabelsEntry = exports.UpdateRegistryRequest = exports.CreateRegistryMetadata = exports.CreateRegistryRequest_LabelsEntry = exports.CreateRegistryRequest = exports.ListRegistriesResponse = exports.ListRegistriesRequest = exports.GetRegistryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const registry_1 = require("../../../../yandex/cloud/containerregistry/v1/registry");
const ip_permission_1 = require("../../../../yandex/cloud/containerregistry/v1/ip_permission");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseGetRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest",
    registryId: "",
};
exports.GetRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRegistryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRegistryRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRegistryRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRegistryRequest.$type, exports.GetRegistryRequest);
const baseListRegistriesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListRegistriesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRegistriesRequest);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListRegistriesRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListRegistriesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistriesRequest.$type, exports.ListRegistriesRequest);
const baseListRegistriesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse",
    nextPageToken: "",
};
exports.ListRegistriesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.registries) {
            registry_1.Registry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRegistriesResponse);
        message.registries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registries.push(registry_1.Registry.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRegistriesResponse);
        message.registries = ((_a = object.registries) !== null && _a !== void 0 ? _a : []).map((e) => registry_1.Registry.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.registries) {
            obj.registries = message.registries.map((e) => e ? registry_1.Registry.toJSON(e) : undefined);
        }
        else {
            obj.registries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRegistriesResponse);
        message.registries =
            ((_a = object.registries) === null || _a === void 0 ? void 0 : _a.map((e) => registry_1.Registry.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistriesResponse.$type, exports.ListRegistriesResponse);
const baseCreateRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest",
    folderId: "",
    name: "",
};
exports.CreateRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateRegistryRequest_LabelsEntry.encode({
                $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateRegistryRequest);
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
                    const entry3 = exports.CreateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
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
        const message = Object.assign({}, baseCreateRegistryRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateRegistryRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryRequest.$type, exports.CreateRegistryRequest);
const baseCreateRegistryRequest_LabelsEntry = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateRegistryRequest_LabelsEntry = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateRegistryRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateRegistryRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateRegistryRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryRequest_LabelsEntry.$type, exports.CreateRegistryRequest_LabelsEntry);
const baseCreateRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata",
    registryId: "",
};
exports.CreateRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateRegistryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateRegistryMetadata);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateRegistryMetadata);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryMetadata.$type, exports.CreateRegistryMetadata);
const baseUpdateRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest",
    registryId: "",
    name: "",
};
exports.UpdateRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateRegistryRequest_LabelsEntry.encode({
                $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRegistryRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    const entry4 = exports.UpdateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
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
        const message = Object.assign({}, baseUpdateRegistryRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateRegistryRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryRequest.$type, exports.UpdateRegistryRequest);
const baseUpdateRegistryRequest_LabelsEntry = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateRegistryRequest_LabelsEntry = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateRegistryRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateRegistryRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateRegistryRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryRequest_LabelsEntry.$type, exports.UpdateRegistryRequest_LabelsEntry);
const baseUpdateRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata",
    registryId: "",
};
exports.UpdateRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRegistryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateRegistryMetadata);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateRegistryMetadata);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryMetadata.$type, exports.UpdateRegistryMetadata);
const baseDeleteRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest",
    registryId: "",
};
exports.DeleteRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRegistryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRegistryRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRegistryRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryRequest.$type, exports.DeleteRegistryRequest);
const baseDeleteRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata",
    registryId: "",
};
exports.DeleteRegistryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRegistryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRegistryMetadata);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRegistryMetadata);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryMetadata.$type, exports.DeleteRegistryMetadata);
const baseSetIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest",
    registryId: "",
};
exports.SetIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermission) {
            ip_permission_1.IpPermission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetIpPermissionRequest);
        message.ipPermission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermission.push(ip_permission_1.IpPermission.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSetIpPermissionRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.ipPermission = ((_a = object.ipPermission) !== null && _a !== void 0 ? _a : []).map((e) => ip_permission_1.IpPermission.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        if (message.ipPermission) {
            obj.ipPermission = message.ipPermission.map((e) => e ? ip_permission_1.IpPermission.toJSON(e) : undefined);
        }
        else {
            obj.ipPermission = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetIpPermissionRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.ipPermission =
            ((_b = object.ipPermission) === null || _b === void 0 ? void 0 : _b.map((e) => ip_permission_1.IpPermission.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetIpPermissionRequest.$type, exports.SetIpPermissionRequest);
const baseUpdateIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest",
    registryId: "",
};
exports.UpdateIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermissionDeltas) {
            ip_permission_1.IpPermissionDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateIpPermissionRequest);
        message.ipPermissionDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermissionDeltas.push(ip_permission_1.IpPermissionDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateIpPermissionRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.ipPermissionDeltas = ((_a = object.ipPermissionDeltas) !== null && _a !== void 0 ? _a : []).map((e) => ip_permission_1.IpPermissionDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        if (message.ipPermissionDeltas) {
            obj.ipPermissionDeltas = message.ipPermissionDeltas.map((e) => e ? ip_permission_1.IpPermissionDelta.toJSON(e) : undefined);
        }
        else {
            obj.ipPermissionDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateIpPermissionRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.ipPermissionDeltas =
            ((_b = object.ipPermissionDeltas) === null || _b === void 0 ? void 0 : _b.map((e) => ip_permission_1.IpPermissionDelta.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateIpPermissionRequest.$type, exports.UpdateIpPermissionRequest);
const baseListIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest",
    registryId: "",
};
exports.ListIpPermissionRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListIpPermissionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListIpPermissionRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListIpPermissionRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListIpPermissionRequest.$type, exports.ListIpPermissionRequest);
const baseListIpPermissionsResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse",
};
exports.ListIpPermissionsResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.permissions) {
            ip_permission_1.IpPermission.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListIpPermissionsResponse);
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permissions.push(ip_permission_1.IpPermission.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListIpPermissionsResponse);
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => ip_permission_1.IpPermission.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? ip_permission_1.IpPermission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListIpPermissionsResponse);
        message.permissions =
            ((_a = object.permissions) === null || _a === void 0 ? void 0 : _a.map((e) => ip_permission_1.IpPermission.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListIpPermissionsResponse.$type, exports.ListIpPermissionsResponse);
const baseSetIpPermissionMetadata = {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata",
    registryId: "",
};
exports.SetIpPermissionMetadata = {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetIpPermissionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetIpPermissionMetadata);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetIpPermissionMetadata);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetIpPermissionMetadata.$type, exports.SetIpPermissionMetadata);
const baseUpdateIpPermissionMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata",
    registryId: "",
};
exports.UpdateIpPermissionMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateIpPermissionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateIpPermissionMetadata);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateIpPermissionMetadata);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateIpPermissionMetadata.$type, exports.UpdateIpPermissionMetadata);
/** A set of methods for managing Registry resources. */
exports.RegistryServiceService = {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(registry_1.Registry.encode(value).finish()),
        responseDeserialize: (value) => registry_1.Registry.decode(value),
    },
    /** Retrieves the list of Registry resources in the specified folder. */
    list: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRegistriesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRegistriesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRegistriesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRegistriesResponse.decode(value),
    },
    /** Creates a registry in the specified folder. */
    create: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified registry. */
    update: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified registry. */
    delete: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists access bindings for the specified registry. */
    listAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified registry. */
    setAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List ip permissions for the specified registry. */
    listIpPermission: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListIpPermissionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListIpPermissionsResponse.decode(value),
    },
    /** Set ip permissions for the specified registry. */
    setIpPermission: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Update ip permissions for the specified registry. */
    updateIpPermission: {
        path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RegistryServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RegistryServiceService, "yandex.cloud.containerregistry.v1.RegistryService");
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
