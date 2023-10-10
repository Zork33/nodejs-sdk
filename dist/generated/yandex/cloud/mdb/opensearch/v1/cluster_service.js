"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreClusterMetadata = exports.RestoreClusterRequest_LabelsEntry = exports.RestoreClusterRequest = exports.BackupClusterMetadata = exports.BackupClusterRequest = exports.DashboardsClusterUpdateSpec = exports.OpenSearchClusterUpdateSpec = exports.ConfigUpdateSpec = exports.DashboardsCreateSpec_NodeGroup = exports.DashboardsCreateSpec = exports.OpenSearchCreateSpec_NodeGroup = exports.OpenSearchCreateSpec = exports.ConfigCreateSpec = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.MoveClusterMetadata = exports.MoveClusterRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterLogsResponse = exports.LogRecord_MessageEntry = exports.LogRecord = exports.ListClusterLogsRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = exports.RescheduleMaintenanceRequest_RescheduleType = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.protobufPackage = void 0;
exports.ClusterServiceClient = exports.ClusterServiceService = exports.UpdateAuthSettingsMetadata = exports.UpdateAuthSettingsRequest = exports.GetAuthSettingsRequest = exports.DeleteNodeGroupMetadata = exports.UpdateNodeGroupMetadata = exports.AddNodeGroupMetadata = exports.AddDashboardsNodeGroupRequest = exports.DashboardsNodeGroupUpdateSpec = exports.UpdateDashboardsNodeGroupRequest = exports.DeleteDashboardsNodeGroupRequest = exports.AddOpenSearchNodeGroupRequest = exports.OpenSearchNodeGroupUpdateSpec = exports.UpdateOpenSearchNodeGroupRequest = exports.DeleteOpenSearchNodeGroupRequest = exports.ListClusterBackupsResponse = exports.ListClusterBackupsRequest = exports.RescheduleMaintenanceMetadata = exports.RescheduleMaintenanceRequest = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/cluster");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const auth_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/auth");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const opensearch_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch");
const backup_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/backup");
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1";
var ListClusterLogsRequest_ServiceType;
(function (ListClusterLogsRequest_ServiceType) {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** OPENSEARCH - OpenSearch logs. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["OPENSEARCH"] = 1] = "OPENSEARCH";
    /** DASHBOARDS - Dashboards logs. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["DASHBOARDS"] = 2] = "DASHBOARDS";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "OPENSEARCH":
            return ListClusterLogsRequest_ServiceType.OPENSEARCH;
        case 2:
        case "DASHBOARDS":
            return ListClusterLogsRequest_ServiceType.DASHBOARDS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}
exports.listClusterLogsRequest_ServiceTypeFromJSON = listClusterLogsRequest_ServiceTypeFromJSON;
function listClusterLogsRequest_ServiceTypeToJSON(object) {
    switch (object) {
        case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return "SERVICE_TYPE_UNSPECIFIED";
        case ListClusterLogsRequest_ServiceType.OPENSEARCH:
            return "OPENSEARCH";
        case ListClusterLogsRequest_ServiceType.DASHBOARDS:
            return "DASHBOARDS";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** OPENSEARCH - OpenSearch logs. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["OPENSEARCH"] = 1] = "OPENSEARCH";
    /** DASHBOARDS - Dashboards logs. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["DASHBOARDS"] = 2] = "DASHBOARDS";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "OPENSEARCH":
            return StreamClusterLogsRequest_ServiceType.OPENSEARCH;
        case 2:
        case "DASHBOARDS":
            return StreamClusterLogsRequest_ServiceType.DASHBOARDS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}
exports.streamClusterLogsRequest_ServiceTypeFromJSON = streamClusterLogsRequest_ServiceTypeFromJSON;
function streamClusterLogsRequest_ServiceTypeToJSON(object) {
    switch (object) {
        case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return "SERVICE_TYPE_UNSPECIFIED";
        case StreamClusterLogsRequest_ServiceType.OPENSEARCH:
            return "OPENSEARCH";
        case StreamClusterLogsRequest_ServiceType.DASHBOARDS:
            return "DASHBOARDS";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
var RescheduleMaintenanceRequest_RescheduleType;
(function (RescheduleMaintenanceRequest_RescheduleType) {
    /** RESCHEDULE_TYPE_UNSPECIFIED - Time of the maintenance is not specified.. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["RESCHEDULE_TYPE_UNSPECIFIED"] = 0] = "RESCHEDULE_TYPE_UNSPECIFIED";
    /** IMMEDIATE - Start the maintenance operation immediately. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["IMMEDIATE"] = 1] = "IMMEDIATE";
    /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["NEXT_AVAILABLE_WINDOW"] = 2] = "NEXT_AVAILABLE_WINDOW";
    /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["SPECIFIC_TIME"] = 3] = "SPECIFIC_TIME";
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RescheduleMaintenanceRequest_RescheduleType = exports.RescheduleMaintenanceRequest_RescheduleType || (exports.RescheduleMaintenanceRequest_RescheduleType = {}));
function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESCHEDULE_TYPE_UNSPECIFIED":
            return RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED;
        case 1:
        case "IMMEDIATE":
            return RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE;
        case 2:
        case "NEXT_AVAILABLE_WINDOW":
            return RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW;
        case 3:
        case "SPECIFIC_TIME":
            return RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED;
    }
}
exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = rescheduleMaintenanceRequest_RescheduleTypeFromJSON;
function rescheduleMaintenanceRequest_RescheduleTypeToJSON(object) {
    switch (object) {
        case RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED:
            return "RESCHEDULE_TYPE_UNSPECIFIED";
        case RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE:
            return "IMMEDIATE";
        case RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW:
            return "NEXT_AVAILABLE_WINDOW";
        case RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME:
            return "SPECIFIC_TIME";
        default:
            return "UNKNOWN";
    }
}
exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = rescheduleMaintenanceRequest_RescheduleTypeToJSON;
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetClusterRequest.$type, exports.GetClusterRequest);
const baseListClustersRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest",
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
        const message = Object.assign({}, baseListClustersRequest);
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
        const message = Object.assign({}, baseListClustersRequest);
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
        const message = Object.assign({}, baseListClustersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersRequest.$type, exports.ListClustersRequest);
const baseListClustersResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clusters) {
            cluster_1.Cluster.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusters.push(cluster_1.Cluster.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters = ((_a = object.clusters) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.Cluster.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) => e ? cluster_1.Cluster.toJSON(e) : undefined);
        }
        else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters =
            ((_a = object.clusters) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.Cluster.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersResponse.$type, exports.ListClustersResponse);
const baseCreateClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest",
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
            exports.CreateClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            exports.ConfigCreateSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(58).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.labels = {};
        message.securityGroupIds = [];
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
                    const entry4 = exports.CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.environment = reader.int32();
                    break;
                case 6:
                    message.configSpec = exports.ConfigCreateSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                case 11:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateClusterRequest);
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? (0, cluster_1.cluster_EnvironmentFromJSON)(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigCreateSpec.fromJSON(object.configSpec)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
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
        message.environment !== undefined &&
            (obj.environment = (0, cluster_1.cluster_EnvironmentToJSON)(message.environment));
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigCreateSpec.toJSON(message.configSpec)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_e = object.environment) !== null && _e !== void 0 ? _e : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigCreateSpec.fromPartial(object.configSpec)
                : undefined;
        message.networkId = (_f = object.networkId) !== null && _f !== void 0 ? _f : "";
        message.securityGroupIds = ((_g = object.securityGroupIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.serviceAccountId = (_h = object.serviceAccountId) !== null && _h !== void 0 ? _h : "";
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest_LabelsEntry.$type, exports.CreateClusterRequest_LabelsEntry);
const baseCreateClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterMetadata.$type, exports.CreateClusterMetadata);
const baseUpdateClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.ConfigUpdateSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.configSpec = exports.ConfigUpdateSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                case 10:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigUpdateSpec.fromJSON(object.configSpec)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigUpdateSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigUpdateSpec.fromPartial(object.configSpec)
                : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.securityGroupIds = ((_e = object.securityGroupIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.serviceAccountId = (_f = object.serviceAccountId) !== null && _f !== void 0 ? _f : "";
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest_LabelsEntry.$type, exports.UpdateClusterRequest_LabelsEntry);
const baseUpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterMetadata.$type, exports.UpdateClusterMetadata);
const baseDeleteClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterRequest.$type, exports.DeleteClusterRequest);
const baseDeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterMetadata.$type, exports.DeleteClusterMetadata);
const baseListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
    filter: "",
    serviceType: 0,
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(40).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(50).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(56).bool(message.alwaysNextPageToken);
        }
        if (message.filter !== "") {
            writer.uint32(66).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(72).int32(message.serviceType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 6:
                    message.pageToken = reader.string();
                    break;
                case 7:
                    message.alwaysNextPageToken = reader.bool();
                    break;
                case 8:
                    message.filter = reader.string();
                    break;
                case 9:
                    message.serviceType = reader.int32();
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
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.columnFilter = ((_a = object.columnFilter) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.alwaysNextPageToken =
            object.alwaysNextPageToken !== undefined &&
                object.alwaysNextPageToken !== null
                ? Boolean(object.alwaysNextPageToken)
                : false;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        }
        else {
            obj.columnFilter = [];
        }
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fromTime = (_c = object.fromTime) !== null && _c !== void 0 ? _c : undefined;
        message.toTime = (_d = object.toTime) !== null && _d !== void 0 ? _d : undefined;
        message.pageSize = (_e = object.pageSize) !== null && _e !== void 0 ? _e : 0;
        message.pageToken = (_f = object.pageToken) !== null && _f !== void 0 ? _f : "";
        message.alwaysNextPageToken = (_g = object.alwaysNextPageToken) !== null && _g !== void 0 ? _g : false;
        message.filter = (_h = object.filter) !== null && _h !== void 0 ? _h : "";
        message.serviceType = (_j = object.serviceType) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsRequest.$type, exports.ListClusterLogsRequest);
const baseLogRecord = {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogRecord);
        message.message = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    const entry2 = exports.LogRecord_MessageEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.message[entry2.key] = entry2.value;
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
        const message = Object.assign({}, baseLogRecord);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.message = Object.entries((_a = object.message) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        obj.message = {};
        if (message.message) {
            Object.entries(message.message).forEach(([k, v]) => {
                obj.message[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLogRecord);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.message = Object.entries((_b = object.message) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord.$type, exports.LogRecord);
const baseLogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord_MessageEntry.$type, exports.LogRecord_MessageEntry);
const baseListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.logs) {
            exports.LogRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(exports.LogRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = ((_a = object.logs) !== null && _a !== void 0 ? _a : []).map((e) => exports.LogRecord.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? exports.LogRecord.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = ((_a = object.logs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.LogRecord.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsResponse.$type, exports.ListClusterLogsResponse);
const baseStreamLogRecord = {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.record !== undefined) {
            exports.LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextRecordToken !== "") {
            writer.uint32(18).string(message.nextRecordToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamLogRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record = exports.LogRecord.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextRecordToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamLogRecord);
        message.record =
            object.record !== undefined && object.record !== null
                ? exports.LogRecord.fromJSON(object.record)
                : undefined;
        message.nextRecordToken =
            object.nextRecordToken !== undefined && object.nextRecordToken !== null
                ? String(object.nextRecordToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined &&
            (obj.record = message.record
                ? exports.LogRecord.toJSON(message.record)
                : undefined);
        message.nextRecordToken !== undefined &&
            (obj.nextRecordToken = message.nextRecordToken);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamLogRecord);
        message.record =
            object.record !== undefined && object.record !== null
                ? exports.LogRecord.fromPartial(object.record)
                : undefined;
        message.nextRecordToken = (_a = object.nextRecordToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamLogRecord.$type, exports.StreamLogRecord);
const baseStreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    recordToken: "",
    filter: "",
    serviceType: 0,
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.recordToken !== "") {
            writer.uint32(42).string(message.recordToken);
        }
        if (message.filter !== "") {
            writer.uint32(50).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(56).int32(message.serviceType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.recordToken = reader.string();
                    break;
                case 6:
                    message.filter = reader.string();
                    break;
                case 7:
                    message.serviceType = reader.int32();
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
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.columnFilter = ((_a = object.columnFilter) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
        message.recordToken =
            object.recordToken !== undefined && object.recordToken !== null
                ? String(object.recordToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        }
        else {
            obj.columnFilter = [];
        }
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.recordToken !== undefined &&
            (obj.recordToken = message.recordToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fromTime = (_c = object.fromTime) !== null && _c !== void 0 ? _c : undefined;
        message.toTime = (_d = object.toTime) !== null && _d !== void 0 ? _d : undefined;
        message.recordToken = (_e = object.recordToken) !== null && _e !== void 0 ? _e : "";
        message.filter = (_f = object.filter) !== null && _f !== void 0 ? _f : "";
        message.serviceType = (_g = object.serviceType) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamClusterLogsRequest.$type, exports.StreamClusterLogsRequest);
const baseListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        const message = Object.assign({}, baseListClusterOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseListClusterOperationsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterOperationsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsRequest.$type, exports.ListClusterOperationsRequest);
const baseListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse",
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
        const message = Object.assign({}, baseListClusterOperationsResponse);
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
        const message = Object.assign({}, baseListClusterOperationsResponse);
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
        const message = Object.assign({}, baseListClusterOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsResponse.$type, exports.ListClusterOperationsResponse);
const baseListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        const message = Object.assign({}, baseListClusterHostsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseListClusterHostsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsRequest.$type, exports.ListClusterHostsRequest);
const baseListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            cluster_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(cluster_1.Host.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? cluster_1.Host.toJSON(e) : undefined));
        }
        else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.Host.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsResponse.$type, exports.ListClusterHostsResponse);
const baseMoveClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest",
    clusterId: "",
    destinationFolderId: "",
};
exports.MoveClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveClusterRequest.$type, exports.MoveClusterRequest);
const baseMoveClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.sourceFolderId !== "") {
            writer.uint32(18).string(message.sourceFolderId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(26).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.sourceFolderId = reader.string();
                    break;
                case 3:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.sourceFolderId =
            object.sourceFolderId !== undefined && object.sourceFolderId !== null
                ? String(object.sourceFolderId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.sourceFolderId !== undefined &&
            (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMoveClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.sourceFolderId = (_b = object.sourceFolderId) !== null && _b !== void 0 ? _b : "";
        message.destinationFolderId = (_c = object.destinationFolderId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveClusterMetadata.$type, exports.MoveClusterMetadata);
const baseStartClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterRequest.$type, exports.StartClusterRequest);
const baseStartClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterMetadata.$type, exports.StartClusterMetadata);
const baseStopClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterRequest.$type, exports.StopClusterRequest);
const baseStopClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterMetadata.$type, exports.StopClusterMetadata);
const baseConfigCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec",
    version: "",
    adminPassword: "",
};
exports.ConfigCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.adminPassword !== "") {
            writer.uint32(18).string(message.adminPassword);
        }
        if (message.opensearchSpec !== undefined) {
            exports.OpenSearchCreateSpec.encode(message.opensearchSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.dashboardsSpec !== undefined) {
            exports.DashboardsCreateSpec.encode(message.dashboardsSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            cluster_1.Access.encode(message.access, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigCreateSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.adminPassword = reader.string();
                    break;
                case 3:
                    message.opensearchSpec = exports.OpenSearchCreateSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dashboardsSpec = exports.DashboardsCreateSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.access = cluster_1.Access.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigCreateSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : "";
        message.opensearchSpec =
            object.opensearchSpec !== undefined && object.opensearchSpec !== null
                ? exports.OpenSearchCreateSpec.fromJSON(object.opensearchSpec)
                : undefined;
        message.dashboardsSpec =
            object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
                ? exports.DashboardsCreateSpec.fromJSON(object.dashboardsSpec)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromJSON(object.access)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        message.opensearchSpec !== undefined &&
            (obj.opensearchSpec = message.opensearchSpec
                ? exports.OpenSearchCreateSpec.toJSON(message.opensearchSpec)
                : undefined);
        message.dashboardsSpec !== undefined &&
            (obj.dashboardsSpec = message.dashboardsSpec
                ? exports.DashboardsCreateSpec.toJSON(message.dashboardsSpec)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? cluster_1.Access.toJSON(message.access) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConfigCreateSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.adminPassword = (_b = object.adminPassword) !== null && _b !== void 0 ? _b : "";
        message.opensearchSpec =
            object.opensearchSpec !== undefined && object.opensearchSpec !== null
                ? exports.OpenSearchCreateSpec.fromPartial(object.opensearchSpec)
                : undefined;
        message.dashboardsSpec =
            object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
                ? exports.DashboardsCreateSpec.fromPartial(object.dashboardsSpec)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromPartial(object.access)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigCreateSpec.$type, exports.ConfigCreateSpec);
const baseOpenSearchCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec",
    plugins: "",
};
exports.OpenSearchCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.plugins) {
            writer.uint32(10).string(v);
        }
        for (const v of message.nodeGroups) {
            exports.OpenSearchCreateSpec_NodeGroup.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.opensearchConfig2 !== undefined) {
            opensearch_1.OpenSearchConfig2.encode(message.opensearchConfig2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchCreateSpec);
        message.plugins = [];
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plugins.push(reader.string());
                    break;
                case 2:
                    message.nodeGroups.push(exports.OpenSearchCreateSpec_NodeGroup.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.opensearchConfig2 = opensearch_1.OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenSearchCreateSpec);
        message.plugins = ((_a = object.plugins) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.nodeGroups = ((_b = object.nodeGroups) !== null && _b !== void 0 ? _b : []).map((e) => exports.OpenSearchCreateSpec_NodeGroup.fromJSON(e));
        message.opensearchConfig2 =
            object.opensearchConfig_2 !== undefined &&
                object.opensearchConfig_2 !== null
                ? opensearch_1.OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        }
        else {
            obj.plugins = [];
        }
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? exports.OpenSearchCreateSpec_NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        message.opensearchConfig2 !== undefined &&
            (obj.opensearchConfig_2 = message.opensearchConfig2
                ? opensearch_1.OpenSearchConfig2.toJSON(message.opensearchConfig2)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenSearchCreateSpec);
        message.plugins = ((_a = object.plugins) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.nodeGroups =
            ((_b = object.nodeGroups) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OpenSearchCreateSpec_NodeGroup.fromPartial(e))) || [];
        message.opensearchConfig2 =
            object.opensearchConfig2 !== undefined &&
                object.opensearchConfig2 !== null
                ? opensearch_1.OpenSearchConfig2.fromPartial(object.opensearchConfig2)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchCreateSpec.$type, exports.OpenSearchCreateSpec);
const baseOpenSearchCreateSpec_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup",
    name: "",
    hostsCount: 0,
    zoneIds: "",
    subnetIds: "",
    assignPublicIp: false,
    roles: 0,
};
exports.OpenSearchCreateSpec_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(24).int64(message.hostsCount);
        }
        for (const v of message.zoneIds) {
            writer.uint32(34).string(v);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        writer.uint32(58).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchCreateSpec_NodeGroup);
        message.zoneIds = [];
        message.subnetIds = [];
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 4:
                    message.zoneIds.push(reader.string());
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
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
        var _a, _b, _c;
        const message = Object.assign({}, baseOpenSearchCreateSpec_NodeGroup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.zoneIds = ((_a = object.zoneIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.subnetIds = ((_b = object.subnetIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.roles = ((_c = object.roles) !== null && _c !== void 0 ? _c : []).map((e) => (0, cluster_1.openSearch_GroupRoleFromJSON)(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        if (message.roles) {
            obj.roles = message.roles.map((e) => (0, cluster_1.openSearch_GroupRoleToJSON)(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseOpenSearchCreateSpec_NodeGroup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_b = object.hostsCount) !== null && _b !== void 0 ? _b : 0;
        message.zoneIds = ((_c = object.zoneIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subnetIds = ((_d = object.subnetIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.assignPublicIp = (_e = object.assignPublicIp) !== null && _e !== void 0 ? _e : false;
        message.roles = ((_f = object.roles) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchCreateSpec_NodeGroup.$type, exports.OpenSearchCreateSpec_NodeGroup);
const baseDashboardsCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec",
};
exports.DashboardsCreateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodeGroups) {
            exports.DashboardsCreateSpec_NodeGroup.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboardsCreateSpec);
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nodeGroups.push(exports.DashboardsCreateSpec_NodeGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseDashboardsCreateSpec);
        message.nodeGroups = ((_a = object.nodeGroups) !== null && _a !== void 0 ? _a : []).map((e) => exports.DashboardsCreateSpec_NodeGroup.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? exports.DashboardsCreateSpec_NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDashboardsCreateSpec);
        message.nodeGroups =
            ((_a = object.nodeGroups) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DashboardsCreateSpec_NodeGroup.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DashboardsCreateSpec.$type, exports.DashboardsCreateSpec);
const baseDashboardsCreateSpec_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup",
    name: "",
    hostsCount: 0,
    zoneIds: "",
    subnetIds: "",
    assignPublicIp: false,
};
exports.DashboardsCreateSpec_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(24).int64(message.hostsCount);
        }
        for (const v of message.zoneIds) {
            writer.uint32(34).string(v);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboardsCreateSpec_NodeGroup);
        message.zoneIds = [];
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 4:
                    message.zoneIds.push(reader.string());
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseDashboardsCreateSpec_NodeGroup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.zoneIds = ((_a = object.zoneIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.subnetIds = ((_b = object.subnetIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseDashboardsCreateSpec_NodeGroup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_b = object.hostsCount) !== null && _b !== void 0 ? _b : 0;
        message.zoneIds = ((_c = object.zoneIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subnetIds = ((_d = object.subnetIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.assignPublicIp = (_e = object.assignPublicIp) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DashboardsCreateSpec_NodeGroup.$type, exports.DashboardsCreateSpec_NodeGroup);
const baseConfigUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec",
    version: "",
    adminPassword: "",
};
exports.ConfigUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.adminPassword !== "") {
            writer.uint32(18).string(message.adminPassword);
        }
        if (message.opensearchSpec !== undefined) {
            exports.OpenSearchClusterUpdateSpec.encode(message.opensearchSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.dashboardsSpec !== undefined) {
            exports.DashboardsClusterUpdateSpec.encode(message.dashboardsSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            cluster_1.Access.encode(message.access, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigUpdateSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.adminPassword = reader.string();
                    break;
                case 3:
                    message.opensearchSpec = exports.OpenSearchClusterUpdateSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dashboardsSpec = exports.DashboardsClusterUpdateSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.access = cluster_1.Access.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigUpdateSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : "";
        message.opensearchSpec =
            object.opensearchSpec !== undefined && object.opensearchSpec !== null
                ? exports.OpenSearchClusterUpdateSpec.fromJSON(object.opensearchSpec)
                : undefined;
        message.dashboardsSpec =
            object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
                ? exports.DashboardsClusterUpdateSpec.fromJSON(object.dashboardsSpec)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromJSON(object.access)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        message.opensearchSpec !== undefined &&
            (obj.opensearchSpec = message.opensearchSpec
                ? exports.OpenSearchClusterUpdateSpec.toJSON(message.opensearchSpec)
                : undefined);
        message.dashboardsSpec !== undefined &&
            (obj.dashboardsSpec = message.dashboardsSpec
                ? exports.DashboardsClusterUpdateSpec.toJSON(message.dashboardsSpec)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? cluster_1.Access.toJSON(message.access) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConfigUpdateSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.adminPassword = (_b = object.adminPassword) !== null && _b !== void 0 ? _b : "";
        message.opensearchSpec =
            object.opensearchSpec !== undefined && object.opensearchSpec !== null
                ? exports.OpenSearchClusterUpdateSpec.fromPartial(object.opensearchSpec)
                : undefined;
        message.dashboardsSpec =
            object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
                ? exports.DashboardsClusterUpdateSpec.fromPartial(object.dashboardsSpec)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromPartial(object.access)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigUpdateSpec.$type, exports.ConfigUpdateSpec);
const baseOpenSearchClusterUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec",
    plugins: "",
};
exports.OpenSearchClusterUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.plugins) {
            writer.uint32(10).string(v);
        }
        if (message.opensearchConfig2 !== undefined) {
            opensearch_1.OpenSearchConfig2.encode(message.opensearchConfig2, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchClusterUpdateSpec);
        message.plugins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plugins.push(reader.string());
                    break;
                case 2:
                    message.opensearchConfig2 = opensearch_1.OpenSearchConfig2.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseOpenSearchClusterUpdateSpec);
        message.plugins = ((_a = object.plugins) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.opensearchConfig2 =
            object.opensearchConfig_2 !== undefined &&
                object.opensearchConfig_2 !== null
                ? opensearch_1.OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        }
        else {
            obj.plugins = [];
        }
        message.opensearchConfig2 !== undefined &&
            (obj.opensearchConfig_2 = message.opensearchConfig2
                ? opensearch_1.OpenSearchConfig2.toJSON(message.opensearchConfig2)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOpenSearchClusterUpdateSpec);
        message.plugins = ((_a = object.plugins) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.opensearchConfig2 =
            object.opensearchConfig2 !== undefined &&
                object.opensearchConfig2 !== null
                ? opensearch_1.OpenSearchConfig2.fromPartial(object.opensearchConfig2)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchClusterUpdateSpec.$type, exports.OpenSearchClusterUpdateSpec);
const baseDashboardsClusterUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec",
};
exports.DashboardsClusterUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboardsClusterUpdateSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseDashboardsClusterUpdateSpec);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseDashboardsClusterUpdateSpec);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DashboardsClusterUpdateSpec.$type, exports.DashboardsClusterUpdateSpec);
const baseBackupClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest",
    clusterId: "",
};
exports.BackupClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupClusterRequest.$type, exports.BackupClusterRequest);
const baseBackupClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata",
    clusterId: "",
};
exports.BackupClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupClusterMetadata.$type, exports.BackupClusterMetadata);
const baseRestoreClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
    folderId: "",
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RestoreClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            exports.ConfigCreateSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(58).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        if (message.folderId !== "") {
            writer.uint32(90).string(message.folderId);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.environment = reader.int32();
                    break;
                case 6:
                    message.configSpec = exports.ConfigCreateSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                case 11:
                    message.folderId = reader.string();
                    break;
                case 12:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? (0, cluster_1.cluster_EnvironmentFromJSON)(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigCreateSpec.fromJSON(object.configSpec)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.environment !== undefined &&
            (obj.environment = (0, cluster_1.cluster_EnvironmentToJSON)(message.environment));
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigCreateSpec.toJSON(message.configSpec)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_e = object.environment) !== null && _e !== void 0 ? _e : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigCreateSpec.fromPartial(object.configSpec)
                : undefined;
        message.networkId = (_f = object.networkId) !== null && _f !== void 0 ? _f : "";
        message.securityGroupIds = ((_g = object.securityGroupIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.serviceAccountId = (_h = object.serviceAccountId) !== null && _h !== void 0 ? _h : "";
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        message.folderId = (_k = object.folderId) !== null && _k !== void 0 ? _k : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest_LabelsEntry.$type, exports.RestoreClusterRequest_LabelsEntry);
const baseRestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestoreClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestoreClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterMetadata.$type, exports.RestoreClusterMetadata);
const baseRescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
};
exports.RescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.rescheduleType !== 0) {
            writer.uint32(16).int32(message.rescheduleType);
        }
        if (message.delayedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.rescheduleType = reader.int32();
                    break;
                case 3:
                    message.delayedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.rescheduleType =
            object.rescheduleType !== undefined && object.rescheduleType !== null
                ? rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object.rescheduleType)
                : 0;
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.rescheduleType !== undefined &&
            (obj.rescheduleType = rescheduleMaintenanceRequest_RescheduleTypeToJSON(message.rescheduleType));
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.rescheduleType = (_b = object.rescheduleType) !== null && _b !== void 0 ? _b : 0;
        message.delayedUntil = (_c = object.delayedUntil) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RescheduleMaintenanceRequest.$type, exports.RescheduleMaintenanceRequest);
const baseRescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
};
exports.RescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.delayedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.delayedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.delayedUntil = (_b = object.delayedUntil) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RescheduleMaintenanceMetadata.$type, exports.RescheduleMaintenanceMetadata);
const baseListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        const message = Object.assign({}, baseListClusterBackupsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseListClusterBackupsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterBackupsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterBackupsRequest.$type, exports.ListClusterBackupsRequest);
const baseListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backups) {
            backup_1.Backup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(backup_1.Backup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = ((_a = object.backups) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.Backup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) => e ? backup_1.Backup.toJSON(e) : undefined);
        }
        else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = ((_a = object.backups) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.Backup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterBackupsResponse.$type, exports.ListClusterBackupsResponse);
const baseDeleteOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest",
    clusterId: "",
    name: "",
};
exports.DeleteOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteOpenSearchNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteOpenSearchNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteOpenSearchNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOpenSearchNodeGroupRequest.$type, exports.DeleteOpenSearchNodeGroupRequest);
const baseUpdateOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest",
    clusterId: "",
    name: "",
};
exports.UpdateOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.nodeGroupSpec !== undefined) {
            exports.OpenSearchNodeGroupUpdateSpec.encode(message.nodeGroupSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOpenSearchNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nodeGroupSpec = exports.OpenSearchNodeGroupUpdateSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateOpenSearchNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.OpenSearchNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.nodeGroupSpec !== undefined &&
            (obj.nodeGroupSpec = message.nodeGroupSpec
                ? exports.OpenSearchNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateOpenSearchNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.OpenSearchNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOpenSearchNodeGroupRequest.$type, exports.UpdateOpenSearchNodeGroupRequest);
const baseOpenSearchNodeGroupUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec",
    hostsCount: 0,
    roles: 0,
};
exports.OpenSearchNodeGroupUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(16).int64(message.hostsCount);
        }
        writer.uint32(26).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchNodeGroupUpdateSpec);
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
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
        const message = Object.assign({}, baseOpenSearchNodeGroupUpdateSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.roles = ((_a = object.roles) !== null && _a !== void 0 ? _a : []).map((e) => (0, cluster_1.openSearch_GroupRoleFromJSON)(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        if (message.roles) {
            obj.roles = message.roles.map((e) => (0, cluster_1.openSearch_GroupRoleToJSON)(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenSearchNodeGroupUpdateSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_a = object.hostsCount) !== null && _a !== void 0 ? _a : 0;
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchNodeGroupUpdateSpec.$type, exports.OpenSearchNodeGroupUpdateSpec);
const baseAddOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest",
    clusterId: "",
};
exports.AddOpenSearchNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.nodeGroupSpec !== undefined) {
            exports.OpenSearchCreateSpec_NodeGroup.encode(message.nodeGroupSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddOpenSearchNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.nodeGroupSpec = exports.OpenSearchCreateSpec_NodeGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddOpenSearchNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.OpenSearchCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.nodeGroupSpec !== undefined &&
            (obj.nodeGroupSpec = message.nodeGroupSpec
                ? exports.OpenSearchCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddOpenSearchNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.OpenSearchCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddOpenSearchNodeGroupRequest.$type, exports.AddOpenSearchNodeGroupRequest);
const baseDeleteDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest",
    clusterId: "",
    name: "",
};
exports.DeleteDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDashboardsNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDashboardsNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDashboardsNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDashboardsNodeGroupRequest.$type, exports.DeleteDashboardsNodeGroupRequest);
const baseUpdateDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest",
    clusterId: "",
    name: "",
};
exports.UpdateDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.nodeGroupSpec !== undefined) {
            exports.DashboardsNodeGroupUpdateSpec.encode(message.nodeGroupSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDashboardsNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nodeGroupSpec = exports.DashboardsNodeGroupUpdateSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDashboardsNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.DashboardsNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.nodeGroupSpec !== undefined &&
            (obj.nodeGroupSpec = message.nodeGroupSpec
                ? exports.DashboardsNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateDashboardsNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.DashboardsNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDashboardsNodeGroupRequest.$type, exports.UpdateDashboardsNodeGroupRequest);
const baseDashboardsNodeGroupUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec",
    hostsCount: 0,
};
exports.DashboardsNodeGroupUpdateSpec = {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(16).int64(message.hostsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboardsNodeGroupUpdateSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDashboardsNodeGroupUpdateSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDashboardsNodeGroupUpdateSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_a = object.hostsCount) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DashboardsNodeGroupUpdateSpec.$type, exports.DashboardsNodeGroupUpdateSpec);
const baseAddDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest",
    clusterId: "",
};
exports.AddDashboardsNodeGroupRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.nodeGroupSpec !== undefined) {
            exports.DashboardsCreateSpec_NodeGroup.encode(message.nodeGroupSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDashboardsNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.nodeGroupSpec = exports.DashboardsCreateSpec_NodeGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDashboardsNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.DashboardsCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.nodeGroupSpec !== undefined &&
            (obj.nodeGroupSpec = message.nodeGroupSpec
                ? exports.DashboardsCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddDashboardsNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.nodeGroupSpec =
            object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
                ? exports.DashboardsCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDashboardsNodeGroupRequest.$type, exports.AddDashboardsNodeGroupRequest);
const baseAddNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata",
    clusterId: "",
    name: "",
};
exports.AddNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddNodeGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddNodeGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddNodeGroupMetadata.$type, exports.AddNodeGroupMetadata);
const baseUpdateNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata",
    clusterId: "",
    name: "",
};
exports.UpdateNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupMetadata.$type, exports.UpdateNodeGroupMetadata);
const baseDeleteNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata",
    clusterId: "",
    name: "",
};
exports.DeleteNodeGroupMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNodeGroupMetadata.$type, exports.DeleteNodeGroupMetadata);
const baseGetAuthSettingsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest",
    clusterId: "",
};
exports.GetAuthSettingsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAuthSettingsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAuthSettingsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAuthSettingsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAuthSettingsRequest.$type, exports.GetAuthSettingsRequest);
const baseUpdateAuthSettingsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest",
    clusterId: "",
};
exports.UpdateAuthSettingsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.settings !== undefined) {
            auth_1.AuthSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAuthSettingsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.settings = auth_1.AuthSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAuthSettingsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? auth_1.AuthSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? auth_1.AuthSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAuthSettingsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? auth_1.AuthSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAuthSettingsRequest.$type, exports.UpdateAuthSettingsRequest);
const baseUpdateAuthSettingsMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata",
    clusterId: "",
};
exports.UpdateAuthSettingsMetadata = {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAuthSettingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAuthSettingsMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAuthSettingsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAuthSettingsMetadata.$type, exports.UpdateAuthSettingsMetadata);
/** A set of methods for managing OpenSearch clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified OpenSearch cluster.
     *
     * To get the list of all available OpenSearch clusters, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
    list: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates an OpenSearch cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified OpenSearch cluster. */
    update: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified OpenSearch cluster. */
    delete: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a backup for the specified OpenSearch cluster. */
    backup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new OpenSearch cluster using the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Reschedules a planned maintenance operation. */
    rescheduleMaintenance: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/RescheduleMaintenance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns a list of available backups for the specified OpenSearch cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Moves the specified OpenSearch cluster to the specified folder. */
    move: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified OpenSearch cluster. */
    start: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified OpenSearch cluster. */
    stop: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Retrieves logs for the specified OpenSearch cluster.
     * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
     */
    listLogs: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Creates an OpenSearch type host group. */
    addOpenSearchNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddOpenSearchNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddOpenSearchNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddOpenSearchNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes an OpenSearch type host group. */
    deleteOpenSearchNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteOpenSearchNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteOpenSearchNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteOpenSearchNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates an OpenSearch type host group. */
    updateOpenSearchNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateOpenSearchNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOpenSearchNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOpenSearchNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a Dashboards type host group. */
    addDashboardsNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddDashboardsNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDashboardsNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDashboardsNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes a Dashboards type host group. */
    deleteDashboardsNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteDashboardsNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDashboardsNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDashboardsNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates a Dashboards type host group. */
    updateDashboardsNodeGroup: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateDashboardsNodeGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDashboardsNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDashboardsNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves auth settings for specified cluster. */
    getAuthSettings: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/GetAuthSettings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAuthSettingsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAuthSettingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(auth_1.AuthSettings.encode(value).finish()),
        responseDeserialize: (value) => auth_1.AuthSettings.decode(value),
    },
    /** Updates auth settings for specified cluster. */
    updateAuthSettings: {
        path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateAuthSettings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAuthSettingsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAuthSettingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.opensearch.v1.ClusterService");
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
