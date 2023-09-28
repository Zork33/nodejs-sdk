"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka_user = exports.kafka_topic_service = exports.kafka_topic = exports.kafka_resource_preset_service = exports.kafka_resource_preset = exports.kafka_maintenance = exports.kafka_connector_service = exports.kafka_connector = exports.kafka_common = exports.kafka_cluster_service = exports.kafka_cluster = exports.greenplum_resource_preset_service = exports.greenplum_resource_preset = exports.greenplum_maintenance = exports.greenplum_host = exports.greenplum_config = exports.greenplum_cluster_service = exports.greenplum_cluster = exports.greenplum_backup_service = exports.greenplum_backup = exports.elasticsearch_user_service = exports.elasticsearch_user = exports.elasticsearch_resource_preset_service = exports.elasticsearch_resource_preset = exports.elasticsearch_maintenance = exports.elasticsearch_extension_service = exports.elasticsearch_extension = exports.elasticsearch_cluster_service = exports.elasticsearch_cluster = exports.elasticsearch_backup_service = exports.elasticsearch_backup = exports.elasticsearch_auth_service = exports.elasticsearch_auth = exports.clickhouse_versions_service = exports.clickhouse_version = exports.clickhouse_user_service = exports.clickhouse_user = exports.clickhouse_resource_preset_service = exports.clickhouse_resource_preset = exports.clickhouse_ml_model_service = exports.clickhouse_ml_model = exports.clickhouse_maintenance = exports.clickhouse_format_schema_service = exports.clickhouse_format_schema = exports.clickhouse_database_service = exports.clickhouse_database = exports.clickhouse_cluster_service = exports.clickhouse_cluster = exports.clickhouse_backup_service = exports.clickhouse_backup = void 0;
exports.sqlserver_user = exports.sqlserver_resource_preset_service = exports.sqlserver_resource_preset = exports.sqlserver_database_service = exports.sqlserver_database = exports.sqlserver_cluster_service = exports.sqlserver_cluster = exports.sqlserver_backup_service = exports.sqlserver_backup = exports.redis_resource_preset_service = exports.redis_resource_preset = exports.redis_maintenance = exports.redis_cluster_service = exports.redis_cluster = exports.redis_backup_service = exports.redis_backup = exports.postgresql_user_service = exports.postgresql_user = exports.postgresql_resource_preset_service = exports.postgresql_resource_preset = exports.postgresql_maintenance = exports.postgresql_database_service = exports.postgresql_database = exports.postgresql_cluster_service = exports.postgresql_cluster = exports.postgresql_backup_service = exports.postgresql_backup = exports.mysql_user_service = exports.mysql_user = exports.mysql_resource_preset_service = exports.mysql_resource_preset = exports.mysql_maintenance = exports.mysql_database_service = exports.mysql_database = exports.mysql_cluster_service = exports.mysql_cluster = exports.mysql_backup_service = exports.mysql_backup = exports.mongodb_user_service = exports.mongodb_user = exports.mongodb_resource_preset_service = exports.mongodb_resource_preset = exports.mongodb_maintenance = exports.mongodb_database_service = exports.mongodb_database = exports.mongodb_cluster_service = exports.mongodb_cluster = exports.mongodb_backup_service = exports.mongodb_backup = exports.kafka_user_service = void 0;
exports.sqlserver_sqlserver2019 = exports.sqlserver_sqlserver2017 = exports.sqlserver_sqlserver2016sp2 = exports.redis_redis7_0 = exports.redis_redis6_2 = exports.redis_redis6_0 = exports.redis_redis5_0 = exports.postgresql_postgresql9_6 = exports.postgresql_postgresql14_1c = exports.postgresql_postgresql14 = exports.postgresql_postgresql13_1c = exports.postgresql_postgresql13 = exports.postgresql_postgresql12_1c = exports.postgresql_postgresql12 = exports.postgresql_postgresql11_1c = exports.postgresql_postgresql11 = exports.postgresql_postgresql10_1c = exports.postgresql_postgresql10 = exports.postgresql_host9_6 = exports.postgresql_host14_1c = exports.postgresql_host14 = exports.postgresql_host13_1c = exports.postgresql_host13 = exports.postgresql_host12_1c = exports.postgresql_host12 = exports.postgresql_host11_1c = exports.postgresql_host11 = exports.postgresql_host10_1c = exports.postgresql_host10 = exports.mysql_mysql8_0 = exports.mysql_mysql5_7 = exports.mongodb_mongodb6_0_enterprise = exports.mongodb_mongodb6_0 = exports.mongodb_mongodb5_0_enterprise = exports.mongodb_mongodb5_0 = exports.mongodb_mongodb4_4_enterprise = exports.mongodb_mongodb4_4 = exports.mongodb_mongodb4_2 = exports.mongodb_mongodb4_0 = exports.mongodb_mongodb3_6 = exports.elasticsearch = exports.clickhouse = exports.sqlserver_user_service = void 0;
exports.clickhouse_backup = __importStar(require("./clickhouse/v1/backup"));
exports.clickhouse_backup_service = __importStar(require("./clickhouse/v1/backup_service"));
exports.clickhouse_cluster = __importStar(require("./clickhouse/v1/cluster"));
exports.clickhouse_cluster_service = __importStar(require("./clickhouse/v1/cluster_service"));
exports.clickhouse_database = __importStar(require("./clickhouse/v1/database"));
exports.clickhouse_database_service = __importStar(require("./clickhouse/v1/database_service"));
exports.clickhouse_format_schema = __importStar(require("./clickhouse/v1/format_schema"));
exports.clickhouse_format_schema_service = __importStar(require("./clickhouse/v1/format_schema_service"));
exports.clickhouse_maintenance = __importStar(require("./clickhouse/v1/maintenance"));
exports.clickhouse_ml_model = __importStar(require("./clickhouse/v1/ml_model"));
exports.clickhouse_ml_model_service = __importStar(require("./clickhouse/v1/ml_model_service"));
exports.clickhouse_resource_preset = __importStar(require("./clickhouse/v1/resource_preset"));
exports.clickhouse_resource_preset_service = __importStar(require("./clickhouse/v1/resource_preset_service"));
exports.clickhouse_user = __importStar(require("./clickhouse/v1/user"));
exports.clickhouse_user_service = __importStar(require("./clickhouse/v1/user_service"));
exports.clickhouse_version = __importStar(require("./clickhouse/v1/version"));
exports.clickhouse_versions_service = __importStar(require("./clickhouse/v1/versions_service"));
exports.elasticsearch_auth = __importStar(require("./elasticsearch/v1/auth"));
exports.elasticsearch_auth_service = __importStar(require("./elasticsearch/v1/auth_service"));
exports.elasticsearch_backup = __importStar(require("./elasticsearch/v1/backup"));
exports.elasticsearch_backup_service = __importStar(require("./elasticsearch/v1/backup_service"));
exports.elasticsearch_cluster = __importStar(require("./elasticsearch/v1/cluster"));
exports.elasticsearch_cluster_service = __importStar(require("./elasticsearch/v1/cluster_service"));
exports.elasticsearch_extension = __importStar(require("./elasticsearch/v1/extension"));
exports.elasticsearch_extension_service = __importStar(require("./elasticsearch/v1/extension_service"));
exports.elasticsearch_maintenance = __importStar(require("./elasticsearch/v1/maintenance"));
exports.elasticsearch_resource_preset = __importStar(require("./elasticsearch/v1/resource_preset"));
exports.elasticsearch_resource_preset_service = __importStar(require("./elasticsearch/v1/resource_preset_service"));
exports.elasticsearch_user = __importStar(require("./elasticsearch/v1/user"));
exports.elasticsearch_user_service = __importStar(require("./elasticsearch/v1/user_service"));
exports.greenplum_backup = __importStar(require("./greenplum/v1/backup"));
exports.greenplum_backup_service = __importStar(require("./greenplum/v1/backup_service"));
exports.greenplum_cluster = __importStar(require("./greenplum/v1/cluster"));
exports.greenplum_cluster_service = __importStar(require("./greenplum/v1/cluster_service"));
exports.greenplum_config = __importStar(require("./greenplum/v1/config"));
exports.greenplum_host = __importStar(require("./greenplum/v1/host"));
exports.greenplum_maintenance = __importStar(require("./greenplum/v1/maintenance"));
exports.greenplum_resource_preset = __importStar(require("./greenplum/v1/resource_preset"));
exports.greenplum_resource_preset_service = __importStar(require("./greenplum/v1/resource_preset_service"));
exports.kafka_cluster = __importStar(require("./kafka/v1/cluster"));
exports.kafka_cluster_service = __importStar(require("./kafka/v1/cluster_service"));
exports.kafka_common = __importStar(require("./kafka/v1/common"));
exports.kafka_connector = __importStar(require("./kafka/v1/connector"));
exports.kafka_connector_service = __importStar(require("./kafka/v1/connector_service"));
exports.kafka_maintenance = __importStar(require("./kafka/v1/maintenance"));
exports.kafka_resource_preset = __importStar(require("./kafka/v1/resource_preset"));
exports.kafka_resource_preset_service = __importStar(require("./kafka/v1/resource_preset_service"));
exports.kafka_topic = __importStar(require("./kafka/v1/topic"));
exports.kafka_topic_service = __importStar(require("./kafka/v1/topic_service"));
exports.kafka_user = __importStar(require("./kafka/v1/user"));
exports.kafka_user_service = __importStar(require("./kafka/v1/user_service"));
exports.mongodb_backup = __importStar(require("./mongodb/v1/backup"));
exports.mongodb_backup_service = __importStar(require("./mongodb/v1/backup_service"));
exports.mongodb_cluster = __importStar(require("./mongodb/v1/cluster"));
exports.mongodb_cluster_service = __importStar(require("./mongodb/v1/cluster_service"));
exports.mongodb_database = __importStar(require("./mongodb/v1/database"));
exports.mongodb_database_service = __importStar(require("./mongodb/v1/database_service"));
exports.mongodb_maintenance = __importStar(require("./mongodb/v1/maintenance"));
exports.mongodb_resource_preset = __importStar(require("./mongodb/v1/resource_preset"));
exports.mongodb_resource_preset_service = __importStar(require("./mongodb/v1/resource_preset_service"));
exports.mongodb_user = __importStar(require("./mongodb/v1/user"));
exports.mongodb_user_service = __importStar(require("./mongodb/v1/user_service"));
exports.mysql_backup = __importStar(require("./mysql/v1/backup"));
exports.mysql_backup_service = __importStar(require("./mysql/v1/backup_service"));
exports.mysql_cluster = __importStar(require("./mysql/v1/cluster"));
exports.mysql_cluster_service = __importStar(require("./mysql/v1/cluster_service"));
exports.mysql_database = __importStar(require("./mysql/v1/database"));
exports.mysql_database_service = __importStar(require("./mysql/v1/database_service"));
exports.mysql_maintenance = __importStar(require("./mysql/v1/maintenance"));
exports.mysql_resource_preset = __importStar(require("./mysql/v1/resource_preset"));
exports.mysql_resource_preset_service = __importStar(require("./mysql/v1/resource_preset_service"));
exports.mysql_user = __importStar(require("./mysql/v1/user"));
exports.mysql_user_service = __importStar(require("./mysql/v1/user_service"));
exports.postgresql_backup = __importStar(require("./postgresql/v1/backup"));
exports.postgresql_backup_service = __importStar(require("./postgresql/v1/backup_service"));
exports.postgresql_cluster = __importStar(require("./postgresql/v1/cluster"));
exports.postgresql_cluster_service = __importStar(require("./postgresql/v1/cluster_service"));
exports.postgresql_database = __importStar(require("./postgresql/v1/database"));
exports.postgresql_database_service = __importStar(require("./postgresql/v1/database_service"));
exports.postgresql_maintenance = __importStar(require("./postgresql/v1/maintenance"));
exports.postgresql_resource_preset = __importStar(require("./postgresql/v1/resource_preset"));
exports.postgresql_resource_preset_service = __importStar(require("./postgresql/v1/resource_preset_service"));
exports.postgresql_user = __importStar(require("./postgresql/v1/user"));
exports.postgresql_user_service = __importStar(require("./postgresql/v1/user_service"));
exports.redis_backup = __importStar(require("./redis/v1/backup"));
exports.redis_backup_service = __importStar(require("./redis/v1/backup_service"));
exports.redis_cluster = __importStar(require("./redis/v1/cluster"));
exports.redis_cluster_service = __importStar(require("./redis/v1/cluster_service"));
exports.redis_maintenance = __importStar(require("./redis/v1/maintenance"));
exports.redis_resource_preset = __importStar(require("./redis/v1/resource_preset"));
exports.redis_resource_preset_service = __importStar(require("./redis/v1/resource_preset_service"));
exports.sqlserver_backup = __importStar(require("./sqlserver/v1/backup"));
exports.sqlserver_backup_service = __importStar(require("./sqlserver/v1/backup_service"));
exports.sqlserver_cluster = __importStar(require("./sqlserver/v1/cluster"));
exports.sqlserver_cluster_service = __importStar(require("./sqlserver/v1/cluster_service"));
exports.sqlserver_database = __importStar(require("./sqlserver/v1/database"));
exports.sqlserver_database_service = __importStar(require("./sqlserver/v1/database_service"));
exports.sqlserver_resource_preset = __importStar(require("./sqlserver/v1/resource_preset"));
exports.sqlserver_resource_preset_service = __importStar(require("./sqlserver/v1/resource_preset_service"));
exports.sqlserver_user = __importStar(require("./sqlserver/v1/user"));
exports.sqlserver_user_service = __importStar(require("./sqlserver/v1/user_service"));
exports.clickhouse = __importStar(require("./clickhouse/v1/config/clickhouse"));
exports.elasticsearch = __importStar(require("./elasticsearch/v1/config/elasticsearch"));
exports.mongodb_mongodb3_6 = __importStar(require("./mongodb/v1/config/mongodb3_6"));
exports.mongodb_mongodb4_0 = __importStar(require("./mongodb/v1/config/mongodb4_0"));
exports.mongodb_mongodb4_2 = __importStar(require("./mongodb/v1/config/mongodb4_2"));
exports.mongodb_mongodb4_4 = __importStar(require("./mongodb/v1/config/mongodb4_4"));
exports.mongodb_mongodb4_4_enterprise = __importStar(require("./mongodb/v1/config/mongodb4_4_enterprise"));
exports.mongodb_mongodb5_0 = __importStar(require("./mongodb/v1/config/mongodb5_0"));
exports.mongodb_mongodb5_0_enterprise = __importStar(require("./mongodb/v1/config/mongodb5_0_enterprise"));
exports.mongodb_mongodb6_0 = __importStar(require("./mongodb/v1/config/mongodb6_0"));
exports.mongodb_mongodb6_0_enterprise = __importStar(require("./mongodb/v1/config/mongodb6_0_enterprise"));
exports.mysql_mysql5_7 = __importStar(require("./mysql/v1/config/mysql5_7"));
exports.mysql_mysql8_0 = __importStar(require("./mysql/v1/config/mysql8_0"));
exports.postgresql_host10 = __importStar(require("./postgresql/v1/config/host10"));
exports.postgresql_host10_1c = __importStar(require("./postgresql/v1/config/host10_1c"));
exports.postgresql_host11 = __importStar(require("./postgresql/v1/config/host11"));
exports.postgresql_host11_1c = __importStar(require("./postgresql/v1/config/host11_1c"));
exports.postgresql_host12 = __importStar(require("./postgresql/v1/config/host12"));
exports.postgresql_host12_1c = __importStar(require("./postgresql/v1/config/host12_1c"));
exports.postgresql_host13 = __importStar(require("./postgresql/v1/config/host13"));
exports.postgresql_host13_1c = __importStar(require("./postgresql/v1/config/host13_1c"));
exports.postgresql_host14 = __importStar(require("./postgresql/v1/config/host14"));
exports.postgresql_host14_1c = __importStar(require("./postgresql/v1/config/host14_1c"));
exports.postgresql_host9_6 = __importStar(require("./postgresql/v1/config/host9_6"));
exports.postgresql_postgresql10 = __importStar(require("./postgresql/v1/config/postgresql10"));
exports.postgresql_postgresql10_1c = __importStar(require("./postgresql/v1/config/postgresql10_1c"));
exports.postgresql_postgresql11 = __importStar(require("./postgresql/v1/config/postgresql11"));
exports.postgresql_postgresql11_1c = __importStar(require("./postgresql/v1/config/postgresql11_1c"));
exports.postgresql_postgresql12 = __importStar(require("./postgresql/v1/config/postgresql12"));
exports.postgresql_postgresql12_1c = __importStar(require("./postgresql/v1/config/postgresql12_1c"));
exports.postgresql_postgresql13 = __importStar(require("./postgresql/v1/config/postgresql13"));
exports.postgresql_postgresql13_1c = __importStar(require("./postgresql/v1/config/postgresql13_1c"));
exports.postgresql_postgresql14 = __importStar(require("./postgresql/v1/config/postgresql14"));
exports.postgresql_postgresql14_1c = __importStar(require("./postgresql/v1/config/postgresql14_1c"));
exports.postgresql_postgresql9_6 = __importStar(require("./postgresql/v1/config/postgresql9_6"));
exports.redis_redis5_0 = __importStar(require("./redis/v1/config/redis5_0"));
exports.redis_redis6_0 = __importStar(require("./redis/v1/config/redis6_0"));
exports.redis_redis6_2 = __importStar(require("./redis/v1/config/redis6_2"));
exports.redis_redis7_0 = __importStar(require("./redis/v1/config/redis7_0"));
exports.sqlserver_sqlserver2016sp2 = __importStar(require("./sqlserver/v1/config/sqlserver2016sp2"));
exports.sqlserver_sqlserver2017 = __importStar(require("./sqlserver/v1/config/sqlserver2017"));
exports.sqlserver_sqlserver2019 = __importStar(require("./sqlserver/v1/config/sqlserver2019"));
