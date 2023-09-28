"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.DataStream = exports.DataStreamBatchSettings = exports.BillingBudget = exports.RetrySettings = exports.LoggingBatchSettings = exports.CloudLogsBatchSettings = exports.BatchSettings = exports.PutQueueMessage = exports.InvokeContainerWithRetry = exports.InvokeContainerOnce = exports.InvokeFunctionWithRetry = exports.InvokeFunctionOnce = exports.Trigger_Logging = exports.Trigger_CloudLogs = exports.Trigger_ContainerRegistry = exports.Trigger_ObjectStorage = exports.Trigger_IoTBrokerMessage = exports.Trigger_IoTMessage = exports.Trigger_MessageQueue = exports.Trigger_Timer = exports.Trigger_Rule = exports.Trigger_LabelsEntry = exports.Trigger = exports.trigger_StatusToJSON = exports.trigger_StatusFromJSON = exports.Trigger_Status = exports.trigger_ContainerRegistryEventTypeToJSON = exports.trigger_ContainerRegistryEventTypeFromJSON = exports.Trigger_ContainerRegistryEventType = exports.trigger_ObjectStorageEventTypeToJSON = exports.trigger_ObjectStorageEventTypeFromJSON = exports.Trigger_ObjectStorageEventType = exports.triggerTypeToJSON = exports.triggerTypeFromJSON = exports.TriggerType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const log_entry_1 = require("../../../../../yandex/cloud/logging/v1/log_entry");
exports.protobufPackage = "yandex.cloud.serverless.triggers.v1";
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["TRIGGER_TYPE_UNSPECIFIED"] = 0] = "TRIGGER_TYPE_UNSPECIFIED";
    /** TIMER - The trigger is activated on a timer. */
    TriggerType[TriggerType["TIMER"] = 2] = "TIMER";
    /**
     * MESSAGE_QUEUE - The trigger is activated by messages from a message queue.
     *
     * Only Message Queue is currently supported.
     */
    TriggerType[TriggerType["MESSAGE_QUEUE"] = 3] = "MESSAGE_QUEUE";
    /** IOT_MESSAGE - The trigger is activated by messages from IoT Core. */
    TriggerType[TriggerType["IOT_MESSAGE"] = 4] = "IOT_MESSAGE";
    TriggerType[TriggerType["IOT_BROKER_MESSAGE"] = 12] = "IOT_BROKER_MESSAGE";
    TriggerType[TriggerType["OBJECT_STORAGE"] = 5] = "OBJECT_STORAGE";
    TriggerType[TriggerType["CONTAINER_REGISTRY"] = 6] = "CONTAINER_REGISTRY";
    /** CLOUD_LOGS - The trigger is activated by cloud log group events */
    TriggerType[TriggerType["CLOUD_LOGS"] = 7] = "CLOUD_LOGS";
    /** LOGGING - The trigger is activated by logging group events */
    TriggerType[TriggerType["LOGGING"] = 8] = "LOGGING";
    /** BILLING_BUDGET - The trigger is activated by billing events */
    TriggerType[TriggerType["BILLING_BUDGET"] = 9] = "BILLING_BUDGET";
    /** YDS - The trigger is activated by YDS events */
    TriggerType[TriggerType["YDS"] = 10] = "YDS";
    /** MAIL - The trigger is activated by email */
    TriggerType[TriggerType["MAIL"] = 11] = "MAIL";
    TriggerType[TriggerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
function triggerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TRIGGER_TYPE_UNSPECIFIED":
            return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
        case 2:
        case "TIMER":
            return TriggerType.TIMER;
        case 3:
        case "MESSAGE_QUEUE":
            return TriggerType.MESSAGE_QUEUE;
        case 4:
        case "IOT_MESSAGE":
            return TriggerType.IOT_MESSAGE;
        case 12:
        case "IOT_BROKER_MESSAGE":
            return TriggerType.IOT_BROKER_MESSAGE;
        case 5:
        case "OBJECT_STORAGE":
            return TriggerType.OBJECT_STORAGE;
        case 6:
        case "CONTAINER_REGISTRY":
            return TriggerType.CONTAINER_REGISTRY;
        case 7:
        case "CLOUD_LOGS":
            return TriggerType.CLOUD_LOGS;
        case 8:
        case "LOGGING":
            return TriggerType.LOGGING;
        case 9:
        case "BILLING_BUDGET":
            return TriggerType.BILLING_BUDGET;
        case 10:
        case "YDS":
            return TriggerType.YDS;
        case 11:
        case "MAIL":
            return TriggerType.MAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TriggerType.UNRECOGNIZED;
    }
}
exports.triggerTypeFromJSON = triggerTypeFromJSON;
function triggerTypeToJSON(object) {
    switch (object) {
        case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
            return "TRIGGER_TYPE_UNSPECIFIED";
        case TriggerType.TIMER:
            return "TIMER";
        case TriggerType.MESSAGE_QUEUE:
            return "MESSAGE_QUEUE";
        case TriggerType.IOT_MESSAGE:
            return "IOT_MESSAGE";
        case TriggerType.IOT_BROKER_MESSAGE:
            return "IOT_BROKER_MESSAGE";
        case TriggerType.OBJECT_STORAGE:
            return "OBJECT_STORAGE";
        case TriggerType.CONTAINER_REGISTRY:
            return "CONTAINER_REGISTRY";
        case TriggerType.CLOUD_LOGS:
            return "CLOUD_LOGS";
        case TriggerType.LOGGING:
            return "LOGGING";
        case TriggerType.BILLING_BUDGET:
            return "BILLING_BUDGET";
        case TriggerType.YDS:
            return "YDS";
        case TriggerType.MAIL:
            return "MAIL";
        default:
            return "UNKNOWN";
    }
}
exports.triggerTypeToJSON = triggerTypeToJSON;
var Trigger_ObjectStorageEventType;
(function (Trigger_ObjectStorageEventType) {
    Trigger_ObjectStorageEventType[Trigger_ObjectStorageEventType["OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED"] = 0] = "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED";
    Trigger_ObjectStorageEventType[Trigger_ObjectStorageEventType["OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT"] = 1] = "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT";
    Trigger_ObjectStorageEventType[Trigger_ObjectStorageEventType["OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT"] = 2] = "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT";
    Trigger_ObjectStorageEventType[Trigger_ObjectStorageEventType["OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT"] = 3] = "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT";
    Trigger_ObjectStorageEventType[Trigger_ObjectStorageEventType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Trigger_ObjectStorageEventType = exports.Trigger_ObjectStorageEventType || (exports.Trigger_ObjectStorageEventType = {}));
function trigger_ObjectStorageEventTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED":
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED;
        case 1:
        case "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT":
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT;
        case 2:
        case "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT":
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT;
        case 3:
        case "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT":
            return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Trigger_ObjectStorageEventType.UNRECOGNIZED;
    }
}
exports.trigger_ObjectStorageEventTypeFromJSON = trigger_ObjectStorageEventTypeFromJSON;
function trigger_ObjectStorageEventTypeToJSON(object) {
    switch (object) {
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED:
            return "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED";
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT:
            return "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT";
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT:
            return "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT";
        case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT:
            return "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT";
        default:
            return "UNKNOWN";
    }
}
exports.trigger_ObjectStorageEventTypeToJSON = trigger_ObjectStorageEventTypeToJSON;
var Trigger_ContainerRegistryEventType;
(function (Trigger_ContainerRegistryEventType) {
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED"] = 0] = "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED";
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE"] = 1] = "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE";
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE"] = 2] = "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE";
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG"] = 3] = "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG";
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG"] = 4] = "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG";
    Trigger_ContainerRegistryEventType[Trigger_ContainerRegistryEventType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Trigger_ContainerRegistryEventType = exports.Trigger_ContainerRegistryEventType || (exports.Trigger_ContainerRegistryEventType = {}));
function trigger_ContainerRegistryEventTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED":
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED;
        case 1:
        case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE":
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE;
        case 2:
        case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE":
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE;
        case 3:
        case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG":
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG;
        case 4:
        case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG":
            return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Trigger_ContainerRegistryEventType.UNRECOGNIZED;
    }
}
exports.trigger_ContainerRegistryEventTypeFromJSON = trigger_ContainerRegistryEventTypeFromJSON;
function trigger_ContainerRegistryEventTypeToJSON(object) {
    switch (object) {
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED:
            return "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED";
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE:
            return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE";
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE:
            return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE";
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG:
            return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG";
        case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG:
            return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG";
        default:
            return "UNKNOWN";
    }
}
exports.trigger_ContainerRegistryEventTypeToJSON = trigger_ContainerRegistryEventTypeToJSON;
var Trigger_Status;
(function (Trigger_Status) {
    Trigger_Status[Trigger_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Trigger_Status[Trigger_Status["ACTIVE"] = 1] = "ACTIVE";
    Trigger_Status[Trigger_Status["PAUSED"] = 2] = "PAUSED";
    Trigger_Status[Trigger_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Trigger_Status = exports.Trigger_Status || (exports.Trigger_Status = {}));
function trigger_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Trigger_Status.STATUS_UNSPECIFIED;
        case 1:
        case "ACTIVE":
            return Trigger_Status.ACTIVE;
        case 2:
        case "PAUSED":
            return Trigger_Status.PAUSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Trigger_Status.UNRECOGNIZED;
    }
}
exports.trigger_StatusFromJSON = trigger_StatusFromJSON;
function trigger_StatusToJSON(object) {
    switch (object) {
        case Trigger_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Trigger_Status.ACTIVE:
            return "ACTIVE";
        case Trigger_Status.PAUSED:
            return "PAUSED";
        default:
            return "UNKNOWN";
    }
}
exports.trigger_StatusToJSON = trigger_StatusToJSON;
const baseTrigger = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
};
exports.Trigger = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger",
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
            exports.Trigger_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.rule !== undefined) {
            exports.Trigger_Rule.encode(message.rule, writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger);
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
                    const entry6 = exports.Trigger_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 8:
                    message.rule = exports.Trigger_Rule.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.status = reader.int32();
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
        const message = Object.assign({}, baseTrigger);
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
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? exports.Trigger_Rule.fromJSON(object.rule)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? trigger_StatusFromJSON(object.status)
                : 0;
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
        message.rule !== undefined &&
            (obj.rule = message.rule ? exports.Trigger_Rule.toJSON(message.rule) : undefined);
        message.status !== undefined &&
            (obj.status = trigger_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseTrigger);
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
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? exports.Trigger_Rule.fromPartial(object.rule)
                : undefined;
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger.$type, exports.Trigger);
const baseTrigger_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
    key: "",
    value: "",
};
exports.Trigger_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
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
        const message = Object.assign({}, baseTrigger_LabelsEntry);
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
        const message = Object.assign({}, baseTrigger_LabelsEntry);
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
        const message = Object.assign({}, baseTrigger_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_LabelsEntry.$type, exports.Trigger_LabelsEntry);
const baseTrigger_Rule = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule",
};
exports.Trigger_Rule = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timer !== undefined) {
            exports.Trigger_Timer.encode(message.timer, writer.uint32(18).fork()).ldelim();
        }
        if (message.messageQueue !== undefined) {
            exports.Trigger_MessageQueue.encode(message.messageQueue, writer.uint32(26).fork()).ldelim();
        }
        if (message.iotMessage !== undefined) {
            exports.Trigger_IoTMessage.encode(message.iotMessage, writer.uint32(34).fork()).ldelim();
        }
        if (message.iotBrokerMessage !== undefined) {
            exports.Trigger_IoTBrokerMessage.encode(message.iotBrokerMessage, writer.uint32(114).fork()).ldelim();
        }
        if (message.objectStorage !== undefined) {
            exports.Trigger_ObjectStorage.encode(message.objectStorage, writer.uint32(42).fork()).ldelim();
        }
        if (message.containerRegistry !== undefined) {
            exports.Trigger_ContainerRegistry.encode(message.containerRegistry, writer.uint32(50).fork()).ldelim();
        }
        if (message.cloudLogs !== undefined) {
            exports.Trigger_CloudLogs.encode(message.cloudLogs, writer.uint32(74).fork()).ldelim();
        }
        if (message.logging !== undefined) {
            exports.Trigger_Logging.encode(message.logging, writer.uint32(82).fork()).ldelim();
        }
        if (message.billingBudget !== undefined) {
            exports.BillingBudget.encode(message.billingBudget, writer.uint32(90).fork()).ldelim();
        }
        if (message.dataStream !== undefined) {
            exports.DataStream.encode(message.dataStream, writer.uint32(98).fork()).ldelim();
        }
        if (message.mail !== undefined) {
            exports.Mail.encode(message.mail, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_Rule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.timer = exports.Trigger_Timer.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.messageQueue = exports.Trigger_MessageQueue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.iotMessage = exports.Trigger_IoTMessage.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.iotBrokerMessage = exports.Trigger_IoTBrokerMessage.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.objectStorage = exports.Trigger_ObjectStorage.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.containerRegistry = exports.Trigger_ContainerRegistry.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.cloudLogs = exports.Trigger_CloudLogs.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.logging = exports.Trigger_Logging.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.billingBudget = exports.BillingBudget.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dataStream = exports.DataStream.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.mail = exports.Mail.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrigger_Rule);
        message.timer =
            object.timer !== undefined && object.timer !== null
                ? exports.Trigger_Timer.fromJSON(object.timer)
                : undefined;
        message.messageQueue =
            object.messageQueue !== undefined && object.messageQueue !== null
                ? exports.Trigger_MessageQueue.fromJSON(object.messageQueue)
                : undefined;
        message.iotMessage =
            object.iotMessage !== undefined && object.iotMessage !== null
                ? exports.Trigger_IoTMessage.fromJSON(object.iotMessage)
                : undefined;
        message.iotBrokerMessage =
            object.iotBrokerMessage !== undefined && object.iotBrokerMessage !== null
                ? exports.Trigger_IoTBrokerMessage.fromJSON(object.iotBrokerMessage)
                : undefined;
        message.objectStorage =
            object.objectStorage !== undefined && object.objectStorage !== null
                ? exports.Trigger_ObjectStorage.fromJSON(object.objectStorage)
                : undefined;
        message.containerRegistry =
            object.containerRegistry !== undefined &&
                object.containerRegistry !== null
                ? exports.Trigger_ContainerRegistry.fromJSON(object.containerRegistry)
                : undefined;
        message.cloudLogs =
            object.cloudLogs !== undefined && object.cloudLogs !== null
                ? exports.Trigger_CloudLogs.fromJSON(object.cloudLogs)
                : undefined;
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? exports.Trigger_Logging.fromJSON(object.logging)
                : undefined;
        message.billingBudget =
            object.billingBudget !== undefined && object.billingBudget !== null
                ? exports.BillingBudget.fromJSON(object.billingBudget)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? exports.DataStream.fromJSON(object.dataStream)
                : undefined;
        message.mail =
            object.mail !== undefined && object.mail !== null
                ? exports.Mail.fromJSON(object.mail)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timer !== undefined &&
            (obj.timer = message.timer
                ? exports.Trigger_Timer.toJSON(message.timer)
                : undefined);
        message.messageQueue !== undefined &&
            (obj.messageQueue = message.messageQueue
                ? exports.Trigger_MessageQueue.toJSON(message.messageQueue)
                : undefined);
        message.iotMessage !== undefined &&
            (obj.iotMessage = message.iotMessage
                ? exports.Trigger_IoTMessage.toJSON(message.iotMessage)
                : undefined);
        message.iotBrokerMessage !== undefined &&
            (obj.iotBrokerMessage = message.iotBrokerMessage
                ? exports.Trigger_IoTBrokerMessage.toJSON(message.iotBrokerMessage)
                : undefined);
        message.objectStorage !== undefined &&
            (obj.objectStorage = message.objectStorage
                ? exports.Trigger_ObjectStorage.toJSON(message.objectStorage)
                : undefined);
        message.containerRegistry !== undefined &&
            (obj.containerRegistry = message.containerRegistry
                ? exports.Trigger_ContainerRegistry.toJSON(message.containerRegistry)
                : undefined);
        message.cloudLogs !== undefined &&
            (obj.cloudLogs = message.cloudLogs
                ? exports.Trigger_CloudLogs.toJSON(message.cloudLogs)
                : undefined);
        message.logging !== undefined &&
            (obj.logging = message.logging
                ? exports.Trigger_Logging.toJSON(message.logging)
                : undefined);
        message.billingBudget !== undefined &&
            (obj.billingBudget = message.billingBudget
                ? exports.BillingBudget.toJSON(message.billingBudget)
                : undefined);
        message.dataStream !== undefined &&
            (obj.dataStream = message.dataStream
                ? exports.DataStream.toJSON(message.dataStream)
                : undefined);
        message.mail !== undefined &&
            (obj.mail = message.mail ? exports.Mail.toJSON(message.mail) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTrigger_Rule);
        message.timer =
            object.timer !== undefined && object.timer !== null
                ? exports.Trigger_Timer.fromPartial(object.timer)
                : undefined;
        message.messageQueue =
            object.messageQueue !== undefined && object.messageQueue !== null
                ? exports.Trigger_MessageQueue.fromPartial(object.messageQueue)
                : undefined;
        message.iotMessage =
            object.iotMessage !== undefined && object.iotMessage !== null
                ? exports.Trigger_IoTMessage.fromPartial(object.iotMessage)
                : undefined;
        message.iotBrokerMessage =
            object.iotBrokerMessage !== undefined && object.iotBrokerMessage !== null
                ? exports.Trigger_IoTBrokerMessage.fromPartial(object.iotBrokerMessage)
                : undefined;
        message.objectStorage =
            object.objectStorage !== undefined && object.objectStorage !== null
                ? exports.Trigger_ObjectStorage.fromPartial(object.objectStorage)
                : undefined;
        message.containerRegistry =
            object.containerRegistry !== undefined &&
                object.containerRegistry !== null
                ? exports.Trigger_ContainerRegistry.fromPartial(object.containerRegistry)
                : undefined;
        message.cloudLogs =
            object.cloudLogs !== undefined && object.cloudLogs !== null
                ? exports.Trigger_CloudLogs.fromPartial(object.cloudLogs)
                : undefined;
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? exports.Trigger_Logging.fromPartial(object.logging)
                : undefined;
        message.billingBudget =
            object.billingBudget !== undefined && object.billingBudget !== null
                ? exports.BillingBudget.fromPartial(object.billingBudget)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? exports.DataStream.fromPartial(object.dataStream)
                : undefined;
        message.mail =
            object.mail !== undefined && object.mail !== null
                ? exports.Mail.fromPartial(object.mail)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_Rule.$type, exports.Trigger_Rule);
const baseTrigger_Timer = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer",
    cronExpression: "",
};
exports.Trigger_Timer = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cronExpression !== "") {
            writer.uint32(10).string(message.cronExpression);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionOnce.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeFunctionWithRetry !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunctionWithRetry, writer.uint32(826).fork()).ldelim();
        }
        if (message.invokeContainerWithRetry !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainerWithRetry, writer.uint32(834).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_Timer);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cronExpression = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionOnce.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.invokeFunctionWithRetry = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 104:
                    message.invokeContainerWithRetry = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrigger_Timer);
        message.cronExpression =
            object.cronExpression !== undefined && object.cronExpression !== null
                ? String(object.cronExpression)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionOnce.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeFunctionWithRetry =
            object.invokeFunctionWithRetry !== undefined &&
                object.invokeFunctionWithRetry !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunctionWithRetry)
                : undefined;
        message.invokeContainerWithRetry =
            object.invokeContainerWithRetry !== undefined &&
                object.invokeContainerWithRetry !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainerWithRetry)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cronExpression !== undefined &&
            (obj.cronExpression = message.cronExpression);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionOnce.toJSON(message.invokeFunction)
                : undefined);
        message.invokeFunctionWithRetry !== undefined &&
            (obj.invokeFunctionWithRetry = message.invokeFunctionWithRetry
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunctionWithRetry)
                : undefined);
        message.invokeContainerWithRetry !== undefined &&
            (obj.invokeContainerWithRetry = message.invokeContainerWithRetry
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainerWithRetry)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTrigger_Timer);
        message.cronExpression = (_a = object.cronExpression) !== null && _a !== void 0 ? _a : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionOnce.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeFunctionWithRetry =
            object.invokeFunctionWithRetry !== undefined &&
                object.invokeFunctionWithRetry !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunctionWithRetry)
                : undefined;
        message.invokeContainerWithRetry =
            object.invokeContainerWithRetry !== undefined &&
                object.invokeContainerWithRetry !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainerWithRetry)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_Timer.$type, exports.Trigger_Timer);
const baseTrigger_MessageQueue = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue",
    queueId: "",
    serviceAccountId: "",
};
exports.Trigger_MessageQueue = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.queueId !== "") {
            writer.uint32(90).string(message.queueId);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            exports.BatchSettings.encode(message.batchSettings, writer.uint32(34).fork()).ldelim();
        }
        if (message.visibilityTimeout !== undefined) {
            duration_1.Duration.encode(message.visibilityTimeout, writer.uint32(42).fork()).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionOnce.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerOnce.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_MessageQueue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 11:
                    message.queueId = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.batchSettings = exports.BatchSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.visibilityTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionOnce.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerOnce.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrigger_MessageQueue);
        message.queueId =
            object.queueId !== undefined && object.queueId !== null
                ? String(object.queueId)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.BatchSettings.fromJSON(object.batchSettings)
                : undefined;
        message.visibilityTimeout =
            object.visibilityTimeout !== undefined &&
                object.visibilityTimeout !== null
                ? duration_1.Duration.fromJSON(object.visibilityTimeout)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionOnce.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerOnce.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.queueId !== undefined && (obj.queueId = message.queueId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? exports.BatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.visibilityTimeout !== undefined &&
            (obj.visibilityTimeout = message.visibilityTimeout
                ? duration_1.Duration.toJSON(message.visibilityTimeout)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionOnce.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerOnce.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTrigger_MessageQueue);
        message.queueId = (_a = object.queueId) !== null && _a !== void 0 ? _a : "";
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.BatchSettings.fromPartial(object.batchSettings)
                : undefined;
        message.visibilityTimeout =
            object.visibilityTimeout !== undefined &&
                object.visibilityTimeout !== null
                ? duration_1.Duration.fromPartial(object.visibilityTimeout)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionOnce.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerOnce.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_MessageQueue.$type, exports.Trigger_MessageQueue);
const baseTrigger_IoTMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage",
    registryId: "",
    deviceId: "",
    mqttTopic: "",
};
exports.Trigger_IoTMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.deviceId !== "") {
            writer.uint32(18).string(message.deviceId);
        }
        if (message.mqttTopic !== "") {
            writer.uint32(26).string(message.mqttTopic);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_IoTMessage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.mqttTopic = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrigger_IoTMessage);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.mqttTopic =
            object.mqttTopic !== undefined && object.mqttTopic !== null
                ? String(object.mqttTopic)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.mqttTopic !== undefined && (obj.mqttTopic = message.mqttTopic);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTrigger_IoTMessage);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.deviceId = (_b = object.deviceId) !== null && _b !== void 0 ? _b : "";
        message.mqttTopic = (_c = object.mqttTopic) !== null && _c !== void 0 ? _c : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_IoTMessage.$type, exports.Trigger_IoTMessage);
const baseTrigger_IoTBrokerMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage",
    brokerId: "",
    mqttTopic: "",
};
exports.Trigger_IoTBrokerMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.mqttTopic !== "") {
            writer.uint32(18).string(message.mqttTopic);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_IoTBrokerMessage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                case 2:
                    message.mqttTopic = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrigger_IoTBrokerMessage);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.mqttTopic =
            object.mqttTopic !== undefined && object.mqttTopic !== null
                ? String(object.mqttTopic)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.mqttTopic !== undefined && (obj.mqttTopic = message.mqttTopic);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTrigger_IoTBrokerMessage);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.mqttTopic = (_b = object.mqttTopic) !== null && _b !== void 0 ? _b : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_IoTBrokerMessage.$type, exports.Trigger_IoTBrokerMessage);
const baseTrigger_ObjectStorage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage",
    eventType: 0,
    bucketId: "",
    prefix: "",
    suffix: "",
};
exports.Trigger_ObjectStorage = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(26).fork();
        for (const v of message.eventType) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.bucketId !== "") {
            writer.uint32(34).string(message.bucketId);
        }
        if (message.prefix !== "") {
            writer.uint32(50).string(message.prefix);
        }
        if (message.suffix !== "") {
            writer.uint32(58).string(message.suffix);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_ObjectStorage);
        message.eventType = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventType.push(reader.int32());
                        }
                    }
                    else {
                        message.eventType.push(reader.int32());
                    }
                    break;
                case 4:
                    message.bucketId = reader.string();
                    break;
                case 6:
                    message.prefix = reader.string();
                    break;
                case 7:
                    message.suffix = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseTrigger_ObjectStorage);
        message.eventType = ((_a = object.eventType) !== null && _a !== void 0 ? _a : []).map((e) => trigger_ObjectStorageEventTypeFromJSON(e));
        message.bucketId =
            object.bucketId !== undefined && object.bucketId !== null
                ? String(object.bucketId)
                : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        message.suffix =
            object.suffix !== undefined && object.suffix !== null
                ? String(object.suffix)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.eventType) {
            obj.eventType = message.eventType.map((e) => trigger_ObjectStorageEventTypeToJSON(e));
        }
        else {
            obj.eventType = [];
        }
        message.bucketId !== undefined && (obj.bucketId = message.bucketId);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseTrigger_ObjectStorage);
        message.eventType = ((_a = object.eventType) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.bucketId = (_b = object.bucketId) !== null && _b !== void 0 ? _b : "";
        message.prefix = (_c = object.prefix) !== null && _c !== void 0 ? _c : "";
        message.suffix = (_d = object.suffix) !== null && _d !== void 0 ? _d : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_ObjectStorage.$type, exports.Trigger_ObjectStorage);
const baseTrigger_ContainerRegistry = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry",
    eventType: 0,
    registryId: "",
    imageName: "",
    tag: "",
};
exports.Trigger_ContainerRegistry = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(26).fork();
        for (const v of message.eventType) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.registryId !== "") {
            writer.uint32(34).string(message.registryId);
        }
        if (message.imageName !== "") {
            writer.uint32(42).string(message.imageName);
        }
        if (message.tag !== "") {
            writer.uint32(50).string(message.tag);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_ContainerRegistry);
        message.eventType = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventType.push(reader.int32());
                        }
                    }
                    else {
                        message.eventType.push(reader.int32());
                    }
                    break;
                case 4:
                    message.registryId = reader.string();
                    break;
                case 5:
                    message.imageName = reader.string();
                    break;
                case 6:
                    message.tag = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseTrigger_ContainerRegistry);
        message.eventType = ((_a = object.eventType) !== null && _a !== void 0 ? _a : []).map((e) => trigger_ContainerRegistryEventTypeFromJSON(e));
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.imageName =
            object.imageName !== undefined && object.imageName !== null
                ? String(object.imageName)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.eventType) {
            obj.eventType = message.eventType.map((e) => trigger_ContainerRegistryEventTypeToJSON(e));
        }
        else {
            obj.eventType = [];
        }
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.imageName !== undefined && (obj.imageName = message.imageName);
        message.tag !== undefined && (obj.tag = message.tag);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseTrigger_ContainerRegistry);
        message.eventType = ((_a = object.eventType) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.registryId = (_b = object.registryId) !== null && _b !== void 0 ? _b : "";
        message.imageName = (_c = object.imageName) !== null && _c !== void 0 ? _c : "";
        message.tag = (_d = object.tag) !== null && _d !== void 0 ? _d : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_ContainerRegistry.$type, exports.Trigger_ContainerRegistry);
const baseTrigger_CloudLogs = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs",
    logGroupId: "",
};
exports.Trigger_CloudLogs = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.logGroupId) {
            writer.uint32(10).string(v);
        }
        if (message.batchSettings !== undefined) {
            exports.CloudLogsBatchSettings.encode(message.batchSettings, writer.uint32(18).fork()).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_CloudLogs);
        message.logGroupId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId.push(reader.string());
                    break;
                case 2:
                    message.batchSettings = exports.CloudLogsBatchSettings.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseTrigger_CloudLogs);
        message.logGroupId = ((_a = object.logGroupId) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.CloudLogsBatchSettings.fromJSON(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.logGroupId) {
            obj.logGroupId = message.logGroupId.map((e) => e);
        }
        else {
            obj.logGroupId = [];
        }
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? exports.CloudLogsBatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTrigger_CloudLogs);
        message.logGroupId = ((_a = object.logGroupId) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.CloudLogsBatchSettings.fromPartial(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_CloudLogs.$type, exports.Trigger_CloudLogs);
const baseTrigger_Logging = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging",
    logGroupId: "",
    resourceType: "",
    resourceId: "",
    levels: 0,
};
exports.Trigger_Logging = {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.resourceType) {
            writer.uint32(26).string(v);
        }
        for (const v of message.resourceId) {
            writer.uint32(34).string(v);
        }
        writer.uint32(42).fork();
        for (const v of message.levels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.batchSettings !== undefined) {
            exports.LoggingBatchSettings.encode(message.batchSettings, writer.uint32(50).fork()).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrigger_Logging);
        message.resourceType = [];
        message.resourceId = [];
        message.levels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.resourceType.push(reader.string());
                    break;
                case 4:
                    message.resourceId.push(reader.string());
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.levels.push(reader.int32());
                        }
                    }
                    else {
                        message.levels.push(reader.int32());
                    }
                    break;
                case 6:
                    message.batchSettings = exports.LoggingBatchSettings.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTrigger_Logging);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.resourceType = ((_a = object.resourceType) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.resourceId = ((_b = object.resourceId) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.levels = ((_c = object.levels) !== null && _c !== void 0 ? _c : []).map((e) => (0, log_entry_1.logLevel_LevelFromJSON)(e));
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.LoggingBatchSettings.fromJSON(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.resourceType) {
            obj.resourceType = message.resourceType.map((e) => e);
        }
        else {
            obj.resourceType = [];
        }
        if (message.resourceId) {
            obj.resourceId = message.resourceId.map((e) => e);
        }
        else {
            obj.resourceId = [];
        }
        if (message.levels) {
            obj.levels = message.levels.map((e) => (0, log_entry_1.logLevel_LevelToJSON)(e));
        }
        else {
            obj.levels = [];
        }
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? exports.LoggingBatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseTrigger_Logging);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.resourceType = ((_b = object.resourceType) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.resourceId = ((_c = object.resourceId) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.levels = ((_d = object.levels) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.LoggingBatchSettings.fromPartial(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trigger_Logging.$type, exports.Trigger_Logging);
const baseInvokeFunctionOnce = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce",
    functionId: "",
    functionTag: "",
    serviceAccountId: "",
};
exports.InvokeFunctionOnce = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionTag !== "") {
            writer.uint32(18).string(message.functionTag);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(26).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInvokeFunctionOnce);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.functionTag = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInvokeFunctionOnce);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.functionTag =
            object.functionTag !== undefined && object.functionTag !== null
                ? String(object.functionTag)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.functionTag !== undefined &&
            (obj.functionTag = message.functionTag);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInvokeFunctionOnce);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.functionTag = (_b = object.functionTag) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InvokeFunctionOnce.$type, exports.InvokeFunctionOnce);
const baseInvokeFunctionWithRetry = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry",
    functionId: "",
    functionTag: "",
    serviceAccountId: "",
};
exports.InvokeFunctionWithRetry = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionTag !== "") {
            writer.uint32(18).string(message.functionTag);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.retrySettings !== undefined) {
            exports.RetrySettings.encode(message.retrySettings, writer.uint32(34).fork()).ldelim();
        }
        if (message.deadLetterQueue !== undefined) {
            exports.PutQueueMessage.encode(message.deadLetterQueue, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInvokeFunctionWithRetry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.functionTag = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.retrySettings = exports.RetrySettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.deadLetterQueue = exports.PutQueueMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInvokeFunctionWithRetry);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.functionTag =
            object.functionTag !== undefined && object.functionTag !== null
                ? String(object.functionTag)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? exports.RetrySettings.fromJSON(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? exports.PutQueueMessage.fromJSON(object.deadLetterQueue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.functionTag !== undefined &&
            (obj.functionTag = message.functionTag);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.retrySettings !== undefined &&
            (obj.retrySettings = message.retrySettings
                ? exports.RetrySettings.toJSON(message.retrySettings)
                : undefined);
        message.deadLetterQueue !== undefined &&
            (obj.deadLetterQueue = message.deadLetterQueue
                ? exports.PutQueueMessage.toJSON(message.deadLetterQueue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInvokeFunctionWithRetry);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.functionTag = (_b = object.functionTag) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? exports.RetrySettings.fromPartial(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? exports.PutQueueMessage.fromPartial(object.deadLetterQueue)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InvokeFunctionWithRetry.$type, exports.InvokeFunctionWithRetry);
const baseInvokeContainerOnce = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce",
    containerId: "",
    path: "",
    serviceAccountId: "",
};
exports.InvokeContainerOnce = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== "") {
            writer.uint32(10).string(message.containerId);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(34).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInvokeContainerOnce);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInvokeContainerOnce);
        message.containerId =
            object.containerId !== undefined && object.containerId !== null
                ? String(object.containerId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.path !== undefined && (obj.path = message.path);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInvokeContainerOnce);
        message.containerId = (_a = object.containerId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InvokeContainerOnce.$type, exports.InvokeContainerOnce);
const baseInvokeContainerWithRetry = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry",
    containerId: "",
    path: "",
    serviceAccountId: "",
};
exports.InvokeContainerWithRetry = {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== "") {
            writer.uint32(10).string(message.containerId);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(34).string(message.serviceAccountId);
        }
        if (message.retrySettings !== undefined) {
            exports.RetrySettings.encode(message.retrySettings, writer.uint32(42).fork()).ldelim();
        }
        if (message.deadLetterQueue !== undefined) {
            exports.PutQueueMessage.encode(message.deadLetterQueue, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInvokeContainerWithRetry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                case 5:
                    message.retrySettings = exports.RetrySettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.deadLetterQueue = exports.PutQueueMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInvokeContainerWithRetry);
        message.containerId =
            object.containerId !== undefined && object.containerId !== null
                ? String(object.containerId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? exports.RetrySettings.fromJSON(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? exports.PutQueueMessage.fromJSON(object.deadLetterQueue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.path !== undefined && (obj.path = message.path);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.retrySettings !== undefined &&
            (obj.retrySettings = message.retrySettings
                ? exports.RetrySettings.toJSON(message.retrySettings)
                : undefined);
        message.deadLetterQueue !== undefined &&
            (obj.deadLetterQueue = message.deadLetterQueue
                ? exports.PutQueueMessage.toJSON(message.deadLetterQueue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInvokeContainerWithRetry);
        message.containerId = (_a = object.containerId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? exports.RetrySettings.fromPartial(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? exports.PutQueueMessage.fromPartial(object.deadLetterQueue)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InvokeContainerWithRetry.$type, exports.InvokeContainerWithRetry);
const basePutQueueMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage",
    queueId: "",
    serviceAccountId: "",
};
exports.PutQueueMessage = {
    $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.queueId !== "") {
            writer.uint32(90).string(message.queueId);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(18).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePutQueueMessage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 11:
                    message.queueId = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePutQueueMessage);
        message.queueId =
            object.queueId !== undefined && object.queueId !== null
                ? String(object.queueId)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.queueId !== undefined && (obj.queueId = message.queueId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePutQueueMessage);
        message.queueId = (_a = object.queueId) !== null && _a !== void 0 ? _a : "";
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PutQueueMessage.$type, exports.PutQueueMessage);
const baseBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.BatchSettings",
    size: 0,
};
exports.BatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.BatchSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            duration_1.Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBatchSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cutoff = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBatchSettings);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromJSON(object.cutoff)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? duration_1.Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBatchSettings);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromPartial(object.cutoff)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BatchSettings.$type, exports.BatchSettings);
const baseCloudLogsBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings",
    size: 0,
};
exports.CloudLogsBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            duration_1.Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCloudLogsBatchSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cutoff = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCloudLogsBatchSettings);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromJSON(object.cutoff)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? duration_1.Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCloudLogsBatchSettings);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromPartial(object.cutoff)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CloudLogsBatchSettings.$type, exports.CloudLogsBatchSettings);
const baseLoggingBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings",
    size: 0,
};
exports.LoggingBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            duration_1.Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoggingBatchSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cutoff = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoggingBatchSettings);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromJSON(object.cutoff)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? duration_1.Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLoggingBatchSettings);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromPartial(object.cutoff)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoggingBatchSettings.$type, exports.LoggingBatchSettings);
const baseRetrySettings = {
    $type: "yandex.cloud.serverless.triggers.v1.RetrySettings",
    retryAttempts: 0,
};
exports.RetrySettings = {
    $type: "yandex.cloud.serverless.triggers.v1.RetrySettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.retryAttempts !== 0) {
            writer.uint32(8).int64(message.retryAttempts);
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRetrySettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.retryAttempts = longToNumber(reader.int64());
                    break;
                case 2:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRetrySettings);
        message.retryAttempts =
            object.retryAttempts !== undefined && object.retryAttempts !== null
                ? Number(object.retryAttempts)
                : 0;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromJSON(object.interval)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.retryAttempts !== undefined &&
            (obj.retryAttempts = Math.round(message.retryAttempts));
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRetrySettings);
        message.retryAttempts = (_a = object.retryAttempts) !== null && _a !== void 0 ? _a : 0;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromPartial(object.interval)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RetrySettings.$type, exports.RetrySettings);
const baseBillingBudget = {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget",
    billingAccountId: "",
    budgetId: "",
};
exports.BillingBudget = {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.billingAccountId !== "") {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.budgetId !== "") {
            writer.uint32(18).string(message.budgetId);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBillingBudget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.budgetId = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBillingBudget);
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        message.budgetId =
            object.budgetId !== undefined && object.budgetId !== null
                ? String(object.budgetId)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.budgetId !== undefined && (obj.budgetId = message.budgetId);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBillingBudget);
        message.billingAccountId = (_a = object.billingAccountId) !== null && _a !== void 0 ? _a : "";
        message.budgetId = (_b = object.budgetId) !== null && _b !== void 0 ? _b : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BillingBudget.$type, exports.BillingBudget);
const baseDataStreamBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings",
    size: 0,
};
exports.DataStreamBatchSettings = {
    $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.cutoff !== undefined) {
            duration_1.Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataStreamBatchSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cutoff = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDataStreamBatchSettings);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromJSON(object.cutoff)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff
                ? duration_1.Duration.toJSON(message.cutoff)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDataStreamBatchSettings);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? duration_1.Duration.fromPartial(object.cutoff)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DataStreamBatchSettings.$type, exports.DataStreamBatchSettings);
const baseDataStream = {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream",
    endpoint: "",
    database: "",
    stream: "",
    serviceAccountId: "",
};
exports.DataStream = {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpoint !== "") {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.database !== "") {
            writer.uint32(18).string(message.database);
        }
        if (message.stream !== "") {
            writer.uint32(26).string(message.stream);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(34).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            exports.DataStreamBatchSettings.encode(message.batchSettings, writer.uint32(42).fork()).ldelim();
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(106).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataStream);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.string();
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    message.stream = reader.string();
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                case 5:
                    message.batchSettings = exports.DataStreamBatchSettings.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDataStream);
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? String(object.stream)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.DataStreamBatchSettings.fromJSON(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.database !== undefined && (obj.database = message.database);
        message.stream !== undefined && (obj.stream = message.stream);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? exports.DataStreamBatchSettings.toJSON(message.batchSettings)
                : undefined);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDataStream);
        message.endpoint = (_a = object.endpoint) !== null && _a !== void 0 ? _a : "";
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.stream = (_c = object.stream) !== null && _c !== void 0 ? _c : "";
        message.serviceAccountId = (_d = object.serviceAccountId) !== null && _d !== void 0 ? _d : "";
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? exports.DataStreamBatchSettings.fromPartial(object.batchSettings)
                : undefined;
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DataStream.$type, exports.DataStream);
const baseMail = {
    $type: "yandex.cloud.serverless.triggers.v1.Mail",
    email: "",
};
exports.Mail = {
    $type: "yandex.cloud.serverless.triggers.v1.Mail",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.invokeFunction !== undefined) {
            exports.InvokeFunctionWithRetry.encode(message.invokeFunction, writer.uint32(810).fork()).ldelim();
        }
        if (message.invokeContainer !== undefined) {
            exports.InvokeContainerWithRetry.encode(message.invokeContainer, writer.uint32(826).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMail);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.email = reader.string();
                    break;
                case 101:
                    message.invokeFunction = exports.InvokeFunctionWithRetry.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.invokeContainer = exports.InvokeContainerWithRetry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMail);
        message.email =
            object.email !== undefined && object.email !== null
                ? String(object.email)
                : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromJSON(object.invokeContainer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.invokeFunction !== undefined &&
            (obj.invokeFunction = message.invokeFunction
                ? exports.InvokeFunctionWithRetry.toJSON(message.invokeFunction)
                : undefined);
        message.invokeContainer !== undefined &&
            (obj.invokeContainer = message.invokeContainer
                ? exports.InvokeContainerWithRetry.toJSON(message.invokeContainer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMail);
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.invokeFunction =
            object.invokeFunction !== undefined && object.invokeFunction !== null
                ? exports.InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
                : undefined;
        message.invokeContainer =
            object.invokeContainer !== undefined && object.invokeContainer !== null
                ? exports.InvokeContainerWithRetry.fromPartial(object.invokeContainer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mail.$type, exports.Mail);
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
