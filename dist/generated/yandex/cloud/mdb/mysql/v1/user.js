"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpec = exports.ConnectionLimits = exports.Permission = exports.User = exports.permission_PrivilegeToJSON = exports.permission_PrivilegeFromJSON = exports.Permission_Privilege = exports.authPluginToJSON = exports.authPluginFromJSON = exports.AuthPlugin = exports.globalPermissionToJSON = exports.globalPermissionFromJSON = exports.GlobalPermission = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mysql.v1";
var GlobalPermission;
(function (GlobalPermission) {
    GlobalPermission[GlobalPermission["GLOBAL_PERMISSION_UNSPECIFIED"] = 0] = "GLOBAL_PERMISSION_UNSPECIFIED";
    /** REPLICATION_CLIENT - Enables use of the `SHOW MASTER STATUS`, `SHOW SLAVE STATUS`, and `SHOW BINARY LOGS` statements. */
    GlobalPermission[GlobalPermission["REPLICATION_CLIENT"] = 1] = "REPLICATION_CLIENT";
    /**
     * REPLICATION_SLAVE - Enables the account to request updates that have been made to databases on the master server,
     * using the `SHOW SLAVE HOSTS`, `SHOW RELAYLOG EVENTS` and `SHOW BINLOG EVENTS` statements.
     */
    GlobalPermission[GlobalPermission["REPLICATION_SLAVE"] = 2] = "REPLICATION_SLAVE";
    /**
     * PROCESS - Enables display of information about the the statements currently being performed by sessions (the set of threads executing within the server).
     *
     * The privilege enables use of `SHOW PROCESSLIST` or `mysqladmin` processlist to see threads belonging to other users.
     * You can always see your own threads. The `PROCESS` privilege also enables use of `SHOW ENGINE`.
     */
    GlobalPermission[GlobalPermission["PROCESS"] = 3] = "PROCESS";
    /** FLUSH_OPTIMIZER_COSTS - Enables use of the `FLUSH OPTIMIZER_COSTS` statement. */
    GlobalPermission[GlobalPermission["FLUSH_OPTIMIZER_COSTS"] = 4] = "FLUSH_OPTIMIZER_COSTS";
    /**
     * SHOW_ROUTINE - Enables a user to access definitions and properties of all stored routines (stored procedures and functions), even those for which the user is not named as the routine DEFINER.
     * This access includes:
     * The contents of the Information Schema `ROUTINES` table.
     * The `SHOW CREATE FUNCTION` and `SHOW CREATE PROCEDURE` statements.
     * The `SHOW FUNCTION CODE` and `SHOW PROCEDURE CODE` statements.
     * The SHOW `FUNCTION STATUS` and `SHOW PROCEDURE STATUS` statements.
     */
    GlobalPermission[GlobalPermission["SHOW_ROUTINE"] = 5] = "SHOW_ROUTINE";
    GlobalPermission[GlobalPermission["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GlobalPermission = exports.GlobalPermission || (exports.GlobalPermission = {}));
function globalPermissionFromJSON(object) {
    switch (object) {
        case 0:
        case "GLOBAL_PERMISSION_UNSPECIFIED":
            return GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED;
        case 1:
        case "REPLICATION_CLIENT":
            return GlobalPermission.REPLICATION_CLIENT;
        case 2:
        case "REPLICATION_SLAVE":
            return GlobalPermission.REPLICATION_SLAVE;
        case 3:
        case "PROCESS":
            return GlobalPermission.PROCESS;
        case 4:
        case "FLUSH_OPTIMIZER_COSTS":
            return GlobalPermission.FLUSH_OPTIMIZER_COSTS;
        case 5:
        case "SHOW_ROUTINE":
            return GlobalPermission.SHOW_ROUTINE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GlobalPermission.UNRECOGNIZED;
    }
}
exports.globalPermissionFromJSON = globalPermissionFromJSON;
function globalPermissionToJSON(object) {
    switch (object) {
        case GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED:
            return "GLOBAL_PERMISSION_UNSPECIFIED";
        case GlobalPermission.REPLICATION_CLIENT:
            return "REPLICATION_CLIENT";
        case GlobalPermission.REPLICATION_SLAVE:
            return "REPLICATION_SLAVE";
        case GlobalPermission.PROCESS:
            return "PROCESS";
        case GlobalPermission.FLUSH_OPTIMIZER_COSTS:
            return "FLUSH_OPTIMIZER_COSTS";
        case GlobalPermission.SHOW_ROUTINE:
            return "SHOW_ROUTINE";
        default:
            return "UNKNOWN";
    }
}
exports.globalPermissionToJSON = globalPermissionToJSON;
var AuthPlugin;
(function (AuthPlugin) {
    AuthPlugin[AuthPlugin["AUTH_PLUGIN_UNSPECIFIED"] = 0] = "AUTH_PLUGIN_UNSPECIFIED";
    /** MYSQL_NATIVE_PASSWORD - Use [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["MYSQL_NATIVE_PASSWORD"] = 1] = "MYSQL_NATIVE_PASSWORD";
    /** CACHING_SHA2_PASSWORD - Use [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["CACHING_SHA2_PASSWORD"] = 2] = "CACHING_SHA2_PASSWORD";
    /** SHA256_PASSWORD - Use [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["SHA256_PASSWORD"] = 3] = "SHA256_PASSWORD";
    AuthPlugin[AuthPlugin["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthPlugin = exports.AuthPlugin || (exports.AuthPlugin = {}));
function authPluginFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTH_PLUGIN_UNSPECIFIED":
            return AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
        case 1:
        case "MYSQL_NATIVE_PASSWORD":
            return AuthPlugin.MYSQL_NATIVE_PASSWORD;
        case 2:
        case "CACHING_SHA2_PASSWORD":
            return AuthPlugin.CACHING_SHA2_PASSWORD;
        case 3:
        case "SHA256_PASSWORD":
            return AuthPlugin.SHA256_PASSWORD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthPlugin.UNRECOGNIZED;
    }
}
exports.authPluginFromJSON = authPluginFromJSON;
function authPluginToJSON(object) {
    switch (object) {
        case AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
            return "AUTH_PLUGIN_UNSPECIFIED";
        case AuthPlugin.MYSQL_NATIVE_PASSWORD:
            return "MYSQL_NATIVE_PASSWORD";
        case AuthPlugin.CACHING_SHA2_PASSWORD:
            return "CACHING_SHA2_PASSWORD";
        case AuthPlugin.SHA256_PASSWORD:
            return "SHA256_PASSWORD";
        default:
            return "UNKNOWN";
    }
}
exports.authPluginToJSON = authPluginToJSON;
var Permission_Privilege;
(function (Permission_Privilege) {
    Permission_Privilege[Permission_Privilege["PRIVILEGE_UNSPECIFIED"] = 0] = "PRIVILEGE_UNSPECIFIED";
    /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
    Permission_Privilege[Permission_Privilege["ALL_PRIVILEGES"] = 1] = "ALL_PRIVILEGES";
    /** ALTER - Altering tables. */
    Permission_Privilege[Permission_Privilege["ALTER"] = 2] = "ALTER";
    /** ALTER_ROUTINE - Altering stored routines and functions. */
    Permission_Privilege[Permission_Privilege["ALTER_ROUTINE"] = 3] = "ALTER_ROUTINE";
    /** CREATE - Creating tables or indexes. */
    Permission_Privilege[Permission_Privilege["CREATE"] = 4] = "CREATE";
    /** CREATE_ROUTINE - Creating stored routines. */
    Permission_Privilege[Permission_Privilege["CREATE_ROUTINE"] = 5] = "CREATE_ROUTINE";
    /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
    Permission_Privilege[Permission_Privilege["CREATE_TEMPORARY_TABLES"] = 6] = "CREATE_TEMPORARY_TABLES";
    /** CREATE_VIEW - Creating views. */
    Permission_Privilege[Permission_Privilege["CREATE_VIEW"] = 7] = "CREATE_VIEW";
    /** DELETE - Deleting tables. */
    Permission_Privilege[Permission_Privilege["DELETE"] = 8] = "DELETE";
    /** DROP - Removing tables or views. */
    Permission_Privilege[Permission_Privilege["DROP"] = 9] = "DROP";
    /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
    Permission_Privilege[Permission_Privilege["EVENT"] = 10] = "EVENT";
    /** EXECUTE - Executing stored routines. */
    Permission_Privilege[Permission_Privilege["EXECUTE"] = 11] = "EXECUTE";
    /** INDEX - Creating and removing indexes. */
    Permission_Privilege[Permission_Privilege["INDEX"] = 12] = "INDEX";
    /** INSERT - Inserting rows into the database. */
    Permission_Privilege[Permission_Privilege["INSERT"] = 13] = "INSERT";
    /** LOCK_TABLES - Using `LOCK TABLES` statement for tables available with `SELECT` privilege. */
    Permission_Privilege[Permission_Privilege["LOCK_TABLES"] = 14] = "LOCK_TABLES";
    /**
     * SELECT - Selecting rows from tables.
     *
     * Some `SELECT` statements can be allowed without the `SELECT` privilege. All statements that read column values require the `SELECT` privilege.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_select) for details.
     */
    Permission_Privilege[Permission_Privilege["SELECT"] = 15] = "SELECT";
    /** SHOW_VIEW - Using the `SHOW CREATE VIEW` statement. Also needed for views used with `EXPLAIN`. */
    Permission_Privilege[Permission_Privilege["SHOW_VIEW"] = 16] = "SHOW_VIEW";
    /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
    Permission_Privilege[Permission_Privilege["TRIGGER"] = 17] = "TRIGGER";
    /** UPDATE - Updating rows in the database. */
    Permission_Privilege[Permission_Privilege["UPDATE"] = 18] = "UPDATE";
    /** REFERENCES - Creation of a foreign key constraint for the parent table. */
    Permission_Privilege[Permission_Privilege["REFERENCES"] = 19] = "REFERENCES";
    Permission_Privilege[Permission_Privilege["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_Privilege = exports.Permission_Privilege || (exports.Permission_Privilege = {}));
function permission_PrivilegeFromJSON(object) {
    switch (object) {
        case 0:
        case "PRIVILEGE_UNSPECIFIED":
            return Permission_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case "ALL_PRIVILEGES":
            return Permission_Privilege.ALL_PRIVILEGES;
        case 2:
        case "ALTER":
            return Permission_Privilege.ALTER;
        case 3:
        case "ALTER_ROUTINE":
            return Permission_Privilege.ALTER_ROUTINE;
        case 4:
        case "CREATE":
            return Permission_Privilege.CREATE;
        case 5:
        case "CREATE_ROUTINE":
            return Permission_Privilege.CREATE_ROUTINE;
        case 6:
        case "CREATE_TEMPORARY_TABLES":
            return Permission_Privilege.CREATE_TEMPORARY_TABLES;
        case 7:
        case "CREATE_VIEW":
            return Permission_Privilege.CREATE_VIEW;
        case 8:
        case "DELETE":
            return Permission_Privilege.DELETE;
        case 9:
        case "DROP":
            return Permission_Privilege.DROP;
        case 10:
        case "EVENT":
            return Permission_Privilege.EVENT;
        case 11:
        case "EXECUTE":
            return Permission_Privilege.EXECUTE;
        case 12:
        case "INDEX":
            return Permission_Privilege.INDEX;
        case 13:
        case "INSERT":
            return Permission_Privilege.INSERT;
        case 14:
        case "LOCK_TABLES":
            return Permission_Privilege.LOCK_TABLES;
        case 15:
        case "SELECT":
            return Permission_Privilege.SELECT;
        case 16:
        case "SHOW_VIEW":
            return Permission_Privilege.SHOW_VIEW;
        case 17:
        case "TRIGGER":
            return Permission_Privilege.TRIGGER;
        case 18:
        case "UPDATE":
            return Permission_Privilege.UPDATE;
        case 19:
        case "REFERENCES":
            return Permission_Privilege.REFERENCES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Permission_Privilege.UNRECOGNIZED;
    }
}
exports.permission_PrivilegeFromJSON = permission_PrivilegeFromJSON;
function permission_PrivilegeToJSON(object) {
    switch (object) {
        case Permission_Privilege.PRIVILEGE_UNSPECIFIED:
            return "PRIVILEGE_UNSPECIFIED";
        case Permission_Privilege.ALL_PRIVILEGES:
            return "ALL_PRIVILEGES";
        case Permission_Privilege.ALTER:
            return "ALTER";
        case Permission_Privilege.ALTER_ROUTINE:
            return "ALTER_ROUTINE";
        case Permission_Privilege.CREATE:
            return "CREATE";
        case Permission_Privilege.CREATE_ROUTINE:
            return "CREATE_ROUTINE";
        case Permission_Privilege.CREATE_TEMPORARY_TABLES:
            return "CREATE_TEMPORARY_TABLES";
        case Permission_Privilege.CREATE_VIEW:
            return "CREATE_VIEW";
        case Permission_Privilege.DELETE:
            return "DELETE";
        case Permission_Privilege.DROP:
            return "DROP";
        case Permission_Privilege.EVENT:
            return "EVENT";
        case Permission_Privilege.EXECUTE:
            return "EXECUTE";
        case Permission_Privilege.INDEX:
            return "INDEX";
        case Permission_Privilege.INSERT:
            return "INSERT";
        case Permission_Privilege.LOCK_TABLES:
            return "LOCK_TABLES";
        case Permission_Privilege.SELECT:
            return "SELECT";
        case Permission_Privilege.SHOW_VIEW:
            return "SHOW_VIEW";
        case Permission_Privilege.TRIGGER:
            return "TRIGGER";
        case Permission_Privilege.UPDATE:
            return "UPDATE";
        case Permission_Privilege.REFERENCES:
            return "REFERENCES";
        default:
            return "UNKNOWN";
    }
}
exports.permission_PrivilegeToJSON = permission_PrivilegeToJSON;
const baseUser = {
    $type: "yandex.cloud.mdb.mysql.v1.User",
    name: "",
    clusterId: "",
    globalPermissions: 0,
    authenticationPlugin: 0,
};
exports.User = {
    $type: "yandex.cloud.mdb.mysql.v1.User",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.globalPermissions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.connectionLimits !== undefined) {
            exports.ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
        }
        if (message.authenticationPlugin !== 0) {
            writer.uint32(48).int32(message.authenticationPlugin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUser);
        message.permissions = [];
        message.globalPermissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.globalPermissions.push(reader.int32());
                        }
                    }
                    else {
                        message.globalPermissions.push(reader.int32());
                    }
                    break;
                case 5:
                    message.connectionLimits = exports.ConnectionLimits.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.authenticationPlugin = reader.int32();
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
        const message = Object.assign({}, baseUser);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.globalPermissions = ((_b = object.globalPermissions) !== null && _b !== void 0 ? _b : []).map((e) => globalPermissionFromJSON(e));
        message.connectionLimits =
            object.connectionLimits !== undefined && object.connectionLimits !== null
                ? exports.ConnectionLimits.fromJSON(object.connectionLimits)
                : undefined;
        message.authenticationPlugin =
            object.authenticationPlugin !== undefined &&
                object.authenticationPlugin !== null
                ? authPluginFromJSON(object.authenticationPlugin)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        if (message.globalPermissions) {
            obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
        }
        else {
            obj.globalPermissions = [];
        }
        message.connectionLimits !== undefined &&
            (obj.connectionLimits = message.connectionLimits
                ? exports.ConnectionLimits.toJSON(message.connectionLimits)
                : undefined);
        message.authenticationPlugin !== undefined &&
            (obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUser);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.globalPermissions = ((_d = object.globalPermissions) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.connectionLimits =
            object.connectionLimits !== undefined && object.connectionLimits !== null
                ? exports.ConnectionLimits.fromPartial(object.connectionLimits)
                : undefined;
        message.authenticationPlugin = (_e = object.authenticationPlugin) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const basePermission = {
    $type: "yandex.cloud.mdb.mysql.v1.Permission",
    databaseName: "",
    roles: 0,
};
exports.Permission = {
    $type: "yandex.cloud.mdb.mysql.v1.Permission",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== "") {
            writer.uint32(10).string(message.databaseName);
        }
        writer.uint32(18).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermission);
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, basePermission);
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.roles = ((_a = object.roles) !== null && _a !== void 0 ? _a : []).map((e) => permission_PrivilegeFromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        if (message.roles) {
            obj.roles = message.roles.map((e) => permission_PrivilegeToJSON(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePermission);
        message.databaseName = (_a = object.databaseName) !== null && _a !== void 0 ? _a : "";
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
const baseConnectionLimits = {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits",
};
exports.ConnectionLimits = {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxQuestionsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxQuestionsPerHour,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxUpdatesPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUpdatesPerHour,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxConnectionsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxConnectionsPerHour,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxUserConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUserConnections,
            }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionLimits);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxQuestionsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxUpdatesPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxConnectionsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxUserConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionLimits);
        message.maxQuestionsPerHour =
            object.maxQuestionsPerHour !== undefined &&
                object.maxQuestionsPerHour !== null
                ? Number(object.maxQuestionsPerHour)
                : undefined;
        message.maxUpdatesPerHour =
            object.maxUpdatesPerHour !== undefined &&
                object.maxUpdatesPerHour !== null
                ? Number(object.maxUpdatesPerHour)
                : undefined;
        message.maxConnectionsPerHour =
            object.maxConnectionsPerHour !== undefined &&
                object.maxConnectionsPerHour !== null
                ? Number(object.maxConnectionsPerHour)
                : undefined;
        message.maxUserConnections =
            object.maxUserConnections !== undefined &&
                object.maxUserConnections !== null
                ? Number(object.maxUserConnections)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxQuestionsPerHour !== undefined &&
            (obj.maxQuestionsPerHour = message.maxQuestionsPerHour);
        message.maxUpdatesPerHour !== undefined &&
            (obj.maxUpdatesPerHour = message.maxUpdatesPerHour);
        message.maxConnectionsPerHour !== undefined &&
            (obj.maxConnectionsPerHour = message.maxConnectionsPerHour);
        message.maxUserConnections !== undefined &&
            (obj.maxUserConnections = message.maxUserConnections);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseConnectionLimits);
        message.maxQuestionsPerHour = (_a = object.maxQuestionsPerHour) !== null && _a !== void 0 ? _a : undefined;
        message.maxUpdatesPerHour = (_b = object.maxUpdatesPerHour) !== null && _b !== void 0 ? _b : undefined;
        message.maxConnectionsPerHour = (_c = object.maxConnectionsPerHour) !== null && _c !== void 0 ? _c : undefined;
        message.maxUserConnections = (_d = object.maxUserConnections) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionLimits.$type, exports.ConnectionLimits);
const baseUserSpec = {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec",
    name: "",
    password: "",
    globalPermissions: 0,
    authenticationPlugin: 0,
};
exports.UserSpec = {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.globalPermissions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.connectionLimits !== undefined) {
            exports.ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
        }
        if (message.authenticationPlugin !== 0) {
            writer.uint32(48).int32(message.authenticationPlugin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSpec);
        message.permissions = [];
        message.globalPermissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.globalPermissions.push(reader.int32());
                        }
                    }
                    else {
                        message.globalPermissions.push(reader.int32());
                    }
                    break;
                case 5:
                    message.connectionLimits = exports.ConnectionLimits.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.authenticationPlugin = reader.int32();
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
        const message = Object.assign({}, baseUserSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.globalPermissions = ((_b = object.globalPermissions) !== null && _b !== void 0 ? _b : []).map((e) => globalPermissionFromJSON(e));
        message.connectionLimits =
            object.connectionLimits !== undefined && object.connectionLimits !== null
                ? exports.ConnectionLimits.fromJSON(object.connectionLimits)
                : undefined;
        message.authenticationPlugin =
            object.authenticationPlugin !== undefined &&
                object.authenticationPlugin !== null
                ? authPluginFromJSON(object.authenticationPlugin)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        if (message.globalPermissions) {
            obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
        }
        else {
            obj.globalPermissions = [];
        }
        message.connectionLimits !== undefined &&
            (obj.connectionLimits = message.connectionLimits
                ? exports.ConnectionLimits.toJSON(message.connectionLimits)
                : undefined);
        message.authenticationPlugin !== undefined &&
            (obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUserSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.globalPermissions = ((_d = object.globalPermissions) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.connectionLimits =
            object.connectionLimits !== undefined && object.connectionLimits !== null
                ? exports.ConnectionLimits.fromPartial(object.connectionLimits)
                : undefined;
        message.authenticationPlugin = (_e = object.authenticationPlugin) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
