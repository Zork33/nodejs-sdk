"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresqlHostConfig14 = exports.postgresqlHostConfig14_XmlOptionToJSON = exports.postgresqlHostConfig14_XmlOptionFromJSON = exports.PostgresqlHostConfig14_XmlOption = exports.postgresqlHostConfig14_XmlBinaryToJSON = exports.postgresqlHostConfig14_XmlBinaryFromJSON = exports.PostgresqlHostConfig14_XmlBinary = exports.postgresqlHostConfig14_TransactionIsolationToJSON = exports.postgresqlHostConfig14_TransactionIsolationFromJSON = exports.PostgresqlHostConfig14_TransactionIsolation = exports.postgresqlHostConfig14_LogStatementToJSON = exports.postgresqlHostConfig14_LogStatementFromJSON = exports.PostgresqlHostConfig14_LogStatement = exports.postgresqlHostConfig14_LogLevelToJSON = exports.postgresqlHostConfig14_LogLevelFromJSON = exports.PostgresqlHostConfig14_LogLevel = exports.postgresqlHostConfig14_LogErrorVerbosityToJSON = exports.postgresqlHostConfig14_LogErrorVerbosityFromJSON = exports.PostgresqlHostConfig14_LogErrorVerbosity = exports.postgresqlHostConfig14_ForceParallelModeToJSON = exports.postgresqlHostConfig14_ForceParallelModeFromJSON = exports.PostgresqlHostConfig14_ForceParallelMode = exports.postgresqlHostConfig14_ConstraintExclusionToJSON = exports.postgresqlHostConfig14_ConstraintExclusionFromJSON = exports.PostgresqlHostConfig14_ConstraintExclusion = exports.postgresqlHostConfig14_ByteaOutputToJSON = exports.postgresqlHostConfig14_ByteaOutputFromJSON = exports.PostgresqlHostConfig14_ByteaOutput = exports.postgresqlHostConfig14_BackslashQuoteToJSON = exports.postgresqlHostConfig14_BackslashQuoteFromJSON = exports.PostgresqlHostConfig14_BackslashQuote = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
var PostgresqlHostConfig14_BackslashQuote;
(function (PostgresqlHostConfig14_BackslashQuote) {
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    PostgresqlHostConfig14_BackslashQuote[PostgresqlHostConfig14_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_BackslashQuote = exports.PostgresqlHostConfig14_BackslashQuote || (exports.PostgresqlHostConfig14_BackslashQuote = {}));
function postgresqlHostConfig14_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKSLASH_QUOTE_UNSPECIFIED":
            return PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case "BACKSLASH_QUOTE":
            return PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case "BACKSLASH_QUOTE_ON":
            return PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case "BACKSLASH_QUOTE_OFF":
            return PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case "BACKSLASH_QUOTE_SAFE_ENCODING":
            return PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_BackslashQuoteFromJSON = postgresqlHostConfig14_BackslashQuoteFromJSON;
function postgresqlHostConfig14_BackslashQuoteToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return "BACKSLASH_QUOTE_UNSPECIFIED";
        case PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE:
            return "BACKSLASH_QUOTE";
        case PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_ON:
            return "BACKSLASH_QUOTE_ON";
        case PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return "BACKSLASH_QUOTE_OFF";
        case PostgresqlHostConfig14_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return "BACKSLASH_QUOTE_SAFE_ENCODING";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_BackslashQuoteToJSON = postgresqlHostConfig14_BackslashQuoteToJSON;
var PostgresqlHostConfig14_ByteaOutput;
(function (PostgresqlHostConfig14_ByteaOutput) {
    PostgresqlHostConfig14_ByteaOutput[PostgresqlHostConfig14_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    PostgresqlHostConfig14_ByteaOutput[PostgresqlHostConfig14_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    PostgresqlHostConfig14_ByteaOutput[PostgresqlHostConfig14_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    PostgresqlHostConfig14_ByteaOutput[PostgresqlHostConfig14_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_ByteaOutput = exports.PostgresqlHostConfig14_ByteaOutput || (exports.PostgresqlHostConfig14_ByteaOutput = {}));
function postgresqlHostConfig14_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case "BYTEA_OUTPUT_UNSPECIFIED":
            return PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case "BYTEA_OUTPUT_HEX":
            return PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case "BYTEA_OUTPUT_ESCAPED":
            return PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_ByteaOutputFromJSON = postgresqlHostConfig14_ByteaOutputFromJSON;
function postgresqlHostConfig14_ByteaOutputToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return "BYTEA_OUTPUT_UNSPECIFIED";
        case PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_HEX:
            return "BYTEA_OUTPUT_HEX";
        case PostgresqlHostConfig14_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return "BYTEA_OUTPUT_ESCAPED";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_ByteaOutputToJSON = postgresqlHostConfig14_ByteaOutputToJSON;
var PostgresqlHostConfig14_ConstraintExclusion;
(function (PostgresqlHostConfig14_ConstraintExclusion) {
    PostgresqlHostConfig14_ConstraintExclusion[PostgresqlHostConfig14_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    PostgresqlHostConfig14_ConstraintExclusion[PostgresqlHostConfig14_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    PostgresqlHostConfig14_ConstraintExclusion[PostgresqlHostConfig14_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    PostgresqlHostConfig14_ConstraintExclusion[PostgresqlHostConfig14_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    PostgresqlHostConfig14_ConstraintExclusion[PostgresqlHostConfig14_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_ConstraintExclusion = exports.PostgresqlHostConfig14_ConstraintExclusion || (exports.PostgresqlHostConfig14_ConstraintExclusion = {}));
function postgresqlHostConfig14_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
            return PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case "CONSTRAINT_EXCLUSION_ON":
            return PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case "CONSTRAINT_EXCLUSION_OFF":
            return PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case "CONSTRAINT_EXCLUSION_PARTITION":
            return PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_ConstraintExclusionFromJSON = postgresqlHostConfig14_ConstraintExclusionFromJSON;
function postgresqlHostConfig14_ConstraintExclusionToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
        case PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return "CONSTRAINT_EXCLUSION_ON";
        case PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return "CONSTRAINT_EXCLUSION_OFF";
        case PostgresqlHostConfig14_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return "CONSTRAINT_EXCLUSION_PARTITION";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_ConstraintExclusionToJSON = postgresqlHostConfig14_ConstraintExclusionToJSON;
var PostgresqlHostConfig14_ForceParallelMode;
(function (PostgresqlHostConfig14_ForceParallelMode) {
    PostgresqlHostConfig14_ForceParallelMode[PostgresqlHostConfig14_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    PostgresqlHostConfig14_ForceParallelMode[PostgresqlHostConfig14_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    PostgresqlHostConfig14_ForceParallelMode[PostgresqlHostConfig14_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    PostgresqlHostConfig14_ForceParallelMode[PostgresqlHostConfig14_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    PostgresqlHostConfig14_ForceParallelMode[PostgresqlHostConfig14_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_ForceParallelMode = exports.PostgresqlHostConfig14_ForceParallelMode || (exports.PostgresqlHostConfig14_ForceParallelMode = {}));
function postgresqlHostConfig14_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORCE_PARALLEL_MODE_UNSPECIFIED":
            return PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case "FORCE_PARALLEL_MODE_ON":
            return PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case "FORCE_PARALLEL_MODE_OFF":
            return PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case "FORCE_PARALLEL_MODE_REGRESS":
            return PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_ForceParallelModeFromJSON = postgresqlHostConfig14_ForceParallelModeFromJSON;
function postgresqlHostConfig14_ForceParallelModeToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return "FORCE_PARALLEL_MODE_UNSPECIFIED";
        case PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return "FORCE_PARALLEL_MODE_ON";
        case PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return "FORCE_PARALLEL_MODE_OFF";
        case PostgresqlHostConfig14_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return "FORCE_PARALLEL_MODE_REGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_ForceParallelModeToJSON = postgresqlHostConfig14_ForceParallelModeToJSON;
var PostgresqlHostConfig14_LogErrorVerbosity;
(function (PostgresqlHostConfig14_LogErrorVerbosity) {
    PostgresqlHostConfig14_LogErrorVerbosity[PostgresqlHostConfig14_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    PostgresqlHostConfig14_LogErrorVerbosity[PostgresqlHostConfig14_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    PostgresqlHostConfig14_LogErrorVerbosity[PostgresqlHostConfig14_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    PostgresqlHostConfig14_LogErrorVerbosity[PostgresqlHostConfig14_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    PostgresqlHostConfig14_LogErrorVerbosity[PostgresqlHostConfig14_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_LogErrorVerbosity = exports.PostgresqlHostConfig14_LogErrorVerbosity || (exports.PostgresqlHostConfig14_LogErrorVerbosity = {}));
function postgresqlHostConfig14_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
            return PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case "LOG_ERROR_VERBOSITY_TERSE":
            return PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case "LOG_ERROR_VERBOSITY_DEFAULT":
            return PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case "LOG_ERROR_VERBOSITY_VERBOSE":
            return PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_LogErrorVerbosityFromJSON = postgresqlHostConfig14_LogErrorVerbosityFromJSON;
function postgresqlHostConfig14_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
        case PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return "LOG_ERROR_VERBOSITY_TERSE";
        case PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return "LOG_ERROR_VERBOSITY_DEFAULT";
        case PostgresqlHostConfig14_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return "LOG_ERROR_VERBOSITY_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_LogErrorVerbosityToJSON = postgresqlHostConfig14_LogErrorVerbosityToJSON;
var PostgresqlHostConfig14_LogLevel;
(function (PostgresqlHostConfig14_LogLevel) {
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    PostgresqlHostConfig14_LogLevel[PostgresqlHostConfig14_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_LogLevel = exports.PostgresqlHostConfig14_LogLevel || (exports.PostgresqlHostConfig14_LogLevel = {}));
function postgresqlHostConfig14_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "LOG_LEVEL_DEBUG5":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case "LOG_LEVEL_DEBUG4":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case "LOG_LEVEL_DEBUG3":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case "LOG_LEVEL_DEBUG2":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case "LOG_LEVEL_DEBUG1":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case "LOG_LEVEL_LOG":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case "LOG_LEVEL_NOTICE":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case "LOG_LEVEL_WARNING":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case "LOG_LEVEL_ERROR":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case "LOG_LEVEL_FATAL":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case "LOG_LEVEL_PANIC":
            return PostgresqlHostConfig14_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_LogLevelFromJSON = postgresqlHostConfig14_LogLevelFromJSON;
function postgresqlHostConfig14_LogLevelToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG5:
            return "LOG_LEVEL_DEBUG5";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG4:
            return "LOG_LEVEL_DEBUG4";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG3:
            return "LOG_LEVEL_DEBUG3";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG2:
            return "LOG_LEVEL_DEBUG2";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_DEBUG1:
            return "LOG_LEVEL_DEBUG1";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_LOG:
            return "LOG_LEVEL_LOG";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_NOTICE:
            return "LOG_LEVEL_NOTICE";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_WARNING:
            return "LOG_LEVEL_WARNING";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_ERROR:
            return "LOG_LEVEL_ERROR";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_FATAL:
            return "LOG_LEVEL_FATAL";
        case PostgresqlHostConfig14_LogLevel.LOG_LEVEL_PANIC:
            return "LOG_LEVEL_PANIC";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_LogLevelToJSON = postgresqlHostConfig14_LogLevelToJSON;
var PostgresqlHostConfig14_LogStatement;
(function (PostgresqlHostConfig14_LogStatement) {
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    PostgresqlHostConfig14_LogStatement[PostgresqlHostConfig14_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_LogStatement = exports.PostgresqlHostConfig14_LogStatement || (exports.PostgresqlHostConfig14_LogStatement = {}));
function postgresqlHostConfig14_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_LogStatementFromJSON = postgresqlHostConfig14_LogStatementFromJSON;
function postgresqlHostConfig14_LogStatementToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case PostgresqlHostConfig14_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_LogStatementToJSON = postgresqlHostConfig14_LogStatementToJSON;
var PostgresqlHostConfig14_TransactionIsolation;
(function (PostgresqlHostConfig14_TransactionIsolation) {
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    PostgresqlHostConfig14_TransactionIsolation[PostgresqlHostConfig14_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_TransactionIsolation = exports.PostgresqlHostConfig14_TransactionIsolation || (exports.PostgresqlHostConfig14_TransactionIsolation = {}));
function postgresqlHostConfig14_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_TransactionIsolationFromJSON = postgresqlHostConfig14_TransactionIsolationFromJSON;
function postgresqlHostConfig14_TransactionIsolationToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case PostgresqlHostConfig14_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_TransactionIsolationToJSON = postgresqlHostConfig14_TransactionIsolationToJSON;
var PostgresqlHostConfig14_XmlBinary;
(function (PostgresqlHostConfig14_XmlBinary) {
    PostgresqlHostConfig14_XmlBinary[PostgresqlHostConfig14_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    PostgresqlHostConfig14_XmlBinary[PostgresqlHostConfig14_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    PostgresqlHostConfig14_XmlBinary[PostgresqlHostConfig14_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    PostgresqlHostConfig14_XmlBinary[PostgresqlHostConfig14_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_XmlBinary = exports.PostgresqlHostConfig14_XmlBinary || (exports.PostgresqlHostConfig14_XmlBinary = {}));
function postgresqlHostConfig14_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_BINARY_UNSPECIFIED":
            return PostgresqlHostConfig14_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case "XML_BINARY_BASE64":
            return PostgresqlHostConfig14_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case "XML_BINARY_HEX":
            return PostgresqlHostConfig14_XmlBinary.XML_BINARY_HEX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_XmlBinaryFromJSON = postgresqlHostConfig14_XmlBinaryFromJSON;
function postgresqlHostConfig14_XmlBinaryToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_XmlBinary.XML_BINARY_UNSPECIFIED:
            return "XML_BINARY_UNSPECIFIED";
        case PostgresqlHostConfig14_XmlBinary.XML_BINARY_BASE64:
            return "XML_BINARY_BASE64";
        case PostgresqlHostConfig14_XmlBinary.XML_BINARY_HEX:
            return "XML_BINARY_HEX";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_XmlBinaryToJSON = postgresqlHostConfig14_XmlBinaryToJSON;
var PostgresqlHostConfig14_XmlOption;
(function (PostgresqlHostConfig14_XmlOption) {
    PostgresqlHostConfig14_XmlOption[PostgresqlHostConfig14_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    PostgresqlHostConfig14_XmlOption[PostgresqlHostConfig14_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    PostgresqlHostConfig14_XmlOption[PostgresqlHostConfig14_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    PostgresqlHostConfig14_XmlOption[PostgresqlHostConfig14_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlHostConfig14_XmlOption = exports.PostgresqlHostConfig14_XmlOption || (exports.PostgresqlHostConfig14_XmlOption = {}));
function postgresqlHostConfig14_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_OPTION_UNSPECIFIED":
            return PostgresqlHostConfig14_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case "XML_OPTION_DOCUMENT":
            return PostgresqlHostConfig14_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case "XML_OPTION_CONTENT":
            return PostgresqlHostConfig14_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlHostConfig14_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlHostConfig14_XmlOptionFromJSON = postgresqlHostConfig14_XmlOptionFromJSON;
function postgresqlHostConfig14_XmlOptionToJSON(object) {
    switch (object) {
        case PostgresqlHostConfig14_XmlOption.XML_OPTION_UNSPECIFIED:
            return "XML_OPTION_UNSPECIFIED";
        case PostgresqlHostConfig14_XmlOption.XML_OPTION_DOCUMENT:
            return "XML_OPTION_DOCUMENT";
        case PostgresqlHostConfig14_XmlOption.XML_OPTION_CONTENT:
            return "XML_OPTION_CONTENT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlHostConfig14_XmlOptionToJSON = postgresqlHostConfig14_XmlOptionToJSON;
const basePostgresqlHostConfig14 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig14",
    constraintExclusion: 0,
    forceParallelMode: 0,
    clientMinMessages: 0,
    logMinMessages: 0,
    logMinErrorStatement: 0,
    logErrorVerbosity: 0,
    logStatement: 0,
    searchPath: "",
    defaultTransactionIsolation: 0,
    byteaOutput: 0,
    xmlbinary: 0,
    xmloption: 0,
    backslashQuote: 0,
    timezone: "",
};
exports.PostgresqlHostConfig14 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig14",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.recoveryMinApplyDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.recoveryMinApplyDelay,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.sharedBuffers }, writer.uint32(18).fork()).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempBuffers }, writer.uint32(26).fork()).ldelim();
        }
        if (message.workMem !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.workMem }, writer.uint32(34).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempFileLimit }, writer.uint32(42).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backendFlushAfter,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.oldSnapshotThreshold,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStandbyStreamingDelay,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(72).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.cursorTupleFraction,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fromCollapseLimit,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.joinCollapseLimit,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(104).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(112).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(120).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(128).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationStatement,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logCheckpoints }, writer.uint32(146).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logConnections }, writer.uint32(154).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logDisconnections,
            }, writer.uint32(162).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration }, writer.uint32(170).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(176).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits }, writer.uint32(186).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(192).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logTempFiles }, writer.uint32(202).fork()).ldelim();
        }
        if (message.searchPath !== "") {
            writer.uint32(210).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity }, writer.uint32(218).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(224).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.statementTimeout,
            }, writer.uint32(234).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout }, writer.uint32(242).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.idleInTransactionSessionTimeout,
            }, writer.uint32(250).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(256).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(264).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(272).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.ginPendingListLimit,
            }, writer.uint32(282).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deadlockTimeout,
            }, writer.uint32(290).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxLocksPerTransaction,
            }, writer.uint32(298).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPredLocksPerTransaction,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls }, writer.uint32(314).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(320).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.defaultWithOids }, writer.uint32(330).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.escapeStringWarning,
            }, writer.uint32(338).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.loCompatPrivileges,
            }, writer.uint32(346).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.quoteAllIdentifiers,
            }, writer.uint32(362).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.standardConformingStrings,
            }, writer.uint32(370).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.synchronizeSeqscans,
            }, writer.uint32(378).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.transformNullEquals,
            }, writer.uint32(386).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError }, writer.uint32(394).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.seqPageCost }, writer.uint32(402).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.randomPageCost,
            }, writer.uint32(410).fork()).ldelim();
        }
        if (message.enableBitmapscan !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableBitmapscan,
            }, writer.uint32(434).fork()).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashagg }, writer.uint32(442).fork()).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashjoin }, writer.uint32(450).fork()).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableIndexscan }, writer.uint32(458).fork()).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableIndexonlyscan,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableMaterial }, writer.uint32(474).fork()).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableMergejoin }, writer.uint32(482).fork()).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableNestloop }, writer.uint32(490).fork()).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSeqscan }, writer.uint32(498).fork()).ldelim();
        }
        if (message.enableSort !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSort }, writer.uint32(506).fork()).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableTidscan }, writer.uint32(514).fork()).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxParallelWorkers,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxParallelWorkersPerGather,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.timezone !== "") {
            writer.uint32(538).string(message.timezone);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveIoConcurrency,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveCacheSize,
            }, writer.uint32(554).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlHostConfig14);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recoveryMinApplyDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.sharedBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.tempBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.workMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.backendFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.oldSnapshotThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStandbyStreamingDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.constraintExclusion = reader.int32();
                    break;
                case 10:
                    message.cursorTupleFraction = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.fromCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.joinCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.forceParallelMode = reader.int32();
                    break;
                case 14:
                    message.clientMinMessages = reader.int32();
                    break;
                case 15:
                    message.logMinMessages = reader.int32();
                    break;
                case 16:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 17:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.logCheckpoints = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.logConnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.logDisconnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.logDuration = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 23:
                    message.logLockWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.logStatement = reader.int32();
                    break;
                case 25:
                    message.logTempFiles = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.searchPath = reader.string();
                    break;
                case 27:
                    message.rowSecurity = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 29:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.byteaOutput = reader.int32();
                    break;
                case 33:
                    message.xmlbinary = reader.int32();
                    break;
                case 34:
                    message.xmloption = reader.int32();
                    break;
                case 35:
                    message.ginPendingListLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.deadlockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.maxLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.maxPredLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.arrayNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.backslashQuote = reader.int32();
                    break;
                case 41:
                    message.defaultWithOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.escapeStringWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.loCompatPrivileges = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.quoteAllIdentifiers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.standardConformingStrings = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.synchronizeSeqscans = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.transformNullEquals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.exitOnError = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.seqPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.randomPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.enableBitmapscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.enableHashagg = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.enableHashjoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.enableIndexscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.enableIndexonlyscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.enableMaterial = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.enableMergejoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 61:
                    message.enableNestloop = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.enableSeqscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.enableSort = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.enableTidscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.maxParallelWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.maxParallelWorkersPerGather = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.timezone = reader.string();
                    break;
                case 68:
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.effectiveCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresqlHostConfig14);
        message.recoveryMinApplyDelay =
            object.recoveryMinApplyDelay !== undefined &&
                object.recoveryMinApplyDelay !== null
                ? Number(object.recoveryMinApplyDelay)
                : undefined;
        message.sharedBuffers =
            object.sharedBuffers !== undefined && object.sharedBuffers !== null
                ? Number(object.sharedBuffers)
                : undefined;
        message.tempBuffers =
            object.tempBuffers !== undefined && object.tempBuffers !== null
                ? Number(object.tempBuffers)
                : undefined;
        message.workMem =
            object.workMem !== undefined && object.workMem !== null
                ? Number(object.workMem)
                : undefined;
        message.tempFileLimit =
            object.tempFileLimit !== undefined && object.tempFileLimit !== null
                ? Number(object.tempFileLimit)
                : undefined;
        message.backendFlushAfter =
            object.backendFlushAfter !== undefined &&
                object.backendFlushAfter !== null
                ? Number(object.backendFlushAfter)
                : undefined;
        message.oldSnapshotThreshold =
            object.oldSnapshotThreshold !== undefined &&
                object.oldSnapshotThreshold !== null
                ? Number(object.oldSnapshotThreshold)
                : undefined;
        message.maxStandbyStreamingDelay =
            object.maxStandbyStreamingDelay !== undefined &&
                object.maxStandbyStreamingDelay !== null
                ? Number(object.maxStandbyStreamingDelay)
                : undefined;
        message.constraintExclusion =
            object.constraintExclusion !== undefined &&
                object.constraintExclusion !== null
                ? postgresqlHostConfig14_ConstraintExclusionFromJSON(object.constraintExclusion)
                : 0;
        message.cursorTupleFraction =
            object.cursorTupleFraction !== undefined &&
                object.cursorTupleFraction !== null
                ? Number(object.cursorTupleFraction)
                : undefined;
        message.fromCollapseLimit =
            object.fromCollapseLimit !== undefined &&
                object.fromCollapseLimit !== null
                ? Number(object.fromCollapseLimit)
                : undefined;
        message.joinCollapseLimit =
            object.joinCollapseLimit !== undefined &&
                object.joinCollapseLimit !== null
                ? Number(object.joinCollapseLimit)
                : undefined;
        message.forceParallelMode =
            object.forceParallelMode !== undefined &&
                object.forceParallelMode !== null
                ? postgresqlHostConfig14_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined &&
                object.clientMinMessages !== null
                ? postgresqlHostConfig14_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlHostConfig14_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined &&
                object.logMinErrorStatement !== null
                ? postgresqlHostConfig14_LogLevelFromJSON(object.logMinErrorStatement)
                : 0;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined &&
                object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.logCheckpoints =
            object.logCheckpoints !== undefined && object.logCheckpoints !== null
                ? Boolean(object.logCheckpoints)
                : undefined;
        message.logConnections =
            object.logConnections !== undefined && object.logConnections !== null
                ? Boolean(object.logConnections)
                : undefined;
        message.logDisconnections =
            object.logDisconnections !== undefined &&
                object.logDisconnections !== null
                ? Boolean(object.logDisconnections)
                : undefined;
        message.logDuration =
            object.logDuration !== undefined && object.logDuration !== null
                ? Boolean(object.logDuration)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined &&
                object.logErrorVerbosity !== null
                ? postgresqlHostConfig14_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlHostConfig14_LogStatementFromJSON(object.logStatement)
                : 0;
        message.logTempFiles =
            object.logTempFiles !== undefined && object.logTempFiles !== null
                ? Number(object.logTempFiles)
                : undefined;
        message.searchPath =
            object.searchPath !== undefined && object.searchPath !== null
                ? String(object.searchPath)
                : "";
        message.rowSecurity =
            object.rowSecurity !== undefined && object.rowSecurity !== null
                ? Boolean(object.rowSecurity)
                : undefined;
        message.defaultTransactionIsolation =
            object.defaultTransactionIsolation !== undefined &&
                object.defaultTransactionIsolation !== null
                ? postgresqlHostConfig14_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
                : 0;
        message.statementTimeout =
            object.statementTimeout !== undefined && object.statementTimeout !== null
                ? Number(object.statementTimeout)
                : undefined;
        message.lockTimeout =
            object.lockTimeout !== undefined && object.lockTimeout !== null
                ? Number(object.lockTimeout)
                : undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout !== undefined &&
                object.idleInTransactionSessionTimeout !== null
                ? Number(object.idleInTransactionSessionTimeout)
                : undefined;
        message.byteaOutput =
            object.byteaOutput !== undefined && object.byteaOutput !== null
                ? postgresqlHostConfig14_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlHostConfig14_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlHostConfig14_XmlOptionFromJSON(object.xmloption)
                : 0;
        message.ginPendingListLimit =
            object.ginPendingListLimit !== undefined &&
                object.ginPendingListLimit !== null
                ? Number(object.ginPendingListLimit)
                : undefined;
        message.deadlockTimeout =
            object.deadlockTimeout !== undefined && object.deadlockTimeout !== null
                ? Number(object.deadlockTimeout)
                : undefined;
        message.maxLocksPerTransaction =
            object.maxLocksPerTransaction !== undefined &&
                object.maxLocksPerTransaction !== null
                ? Number(object.maxLocksPerTransaction)
                : undefined;
        message.maxPredLocksPerTransaction =
            object.maxPredLocksPerTransaction !== undefined &&
                object.maxPredLocksPerTransaction !== null
                ? Number(object.maxPredLocksPerTransaction)
                : undefined;
        message.arrayNulls =
            object.arrayNulls !== undefined && object.arrayNulls !== null
                ? Boolean(object.arrayNulls)
                : undefined;
        message.backslashQuote =
            object.backslashQuote !== undefined && object.backslashQuote !== null
                ? postgresqlHostConfig14_BackslashQuoteFromJSON(object.backslashQuote)
                : 0;
        message.defaultWithOids =
            object.defaultWithOids !== undefined && object.defaultWithOids !== null
                ? Boolean(object.defaultWithOids)
                : undefined;
        message.escapeStringWarning =
            object.escapeStringWarning !== undefined &&
                object.escapeStringWarning !== null
                ? Boolean(object.escapeStringWarning)
                : undefined;
        message.loCompatPrivileges =
            object.loCompatPrivileges !== undefined &&
                object.loCompatPrivileges !== null
                ? Boolean(object.loCompatPrivileges)
                : undefined;
        message.quoteAllIdentifiers =
            object.quoteAllIdentifiers !== undefined &&
                object.quoteAllIdentifiers !== null
                ? Boolean(object.quoteAllIdentifiers)
                : undefined;
        message.standardConformingStrings =
            object.standardConformingStrings !== undefined &&
                object.standardConformingStrings !== null
                ? Boolean(object.standardConformingStrings)
                : undefined;
        message.synchronizeSeqscans =
            object.synchronizeSeqscans !== undefined &&
                object.synchronizeSeqscans !== null
                ? Boolean(object.synchronizeSeqscans)
                : undefined;
        message.transformNullEquals =
            object.transformNullEquals !== undefined &&
                object.transformNullEquals !== null
                ? Boolean(object.transformNullEquals)
                : undefined;
        message.exitOnError =
            object.exitOnError !== undefined && object.exitOnError !== null
                ? Boolean(object.exitOnError)
                : undefined;
        message.seqPageCost =
            object.seqPageCost !== undefined && object.seqPageCost !== null
                ? Number(object.seqPageCost)
                : undefined;
        message.randomPageCost =
            object.randomPageCost !== undefined && object.randomPageCost !== null
                ? Number(object.randomPageCost)
                : undefined;
        message.enableBitmapscan =
            object.enableBitmapscan !== undefined && object.enableBitmapscan !== null
                ? Boolean(object.enableBitmapscan)
                : undefined;
        message.enableHashagg =
            object.enableHashagg !== undefined && object.enableHashagg !== null
                ? Boolean(object.enableHashagg)
                : undefined;
        message.enableHashjoin =
            object.enableHashjoin !== undefined && object.enableHashjoin !== null
                ? Boolean(object.enableHashjoin)
                : undefined;
        message.enableIndexscan =
            object.enableIndexscan !== undefined && object.enableIndexscan !== null
                ? Boolean(object.enableIndexscan)
                : undefined;
        message.enableIndexonlyscan =
            object.enableIndexonlyscan !== undefined &&
                object.enableIndexonlyscan !== null
                ? Boolean(object.enableIndexonlyscan)
                : undefined;
        message.enableMaterial =
            object.enableMaterial !== undefined && object.enableMaterial !== null
                ? Boolean(object.enableMaterial)
                : undefined;
        message.enableMergejoin =
            object.enableMergejoin !== undefined && object.enableMergejoin !== null
                ? Boolean(object.enableMergejoin)
                : undefined;
        message.enableNestloop =
            object.enableNestloop !== undefined && object.enableNestloop !== null
                ? Boolean(object.enableNestloop)
                : undefined;
        message.enableSeqscan =
            object.enableSeqscan !== undefined && object.enableSeqscan !== null
                ? Boolean(object.enableSeqscan)
                : undefined;
        message.enableSort =
            object.enableSort !== undefined && object.enableSort !== null
                ? Boolean(object.enableSort)
                : undefined;
        message.enableTidscan =
            object.enableTidscan !== undefined && object.enableTidscan !== null
                ? Boolean(object.enableTidscan)
                : undefined;
        message.maxParallelWorkers =
            object.maxParallelWorkers !== undefined &&
                object.maxParallelWorkers !== null
                ? Number(object.maxParallelWorkers)
                : undefined;
        message.maxParallelWorkersPerGather =
            object.maxParallelWorkersPerGather !== undefined &&
                object.maxParallelWorkersPerGather !== null
                ? Number(object.maxParallelWorkersPerGather)
                : undefined;
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : "";
        message.effectiveIoConcurrency =
            object.effectiveIoConcurrency !== undefined &&
                object.effectiveIoConcurrency !== null
                ? Number(object.effectiveIoConcurrency)
                : undefined;
        message.effectiveCacheSize =
            object.effectiveCacheSize !== undefined &&
                object.effectiveCacheSize !== null
                ? Number(object.effectiveCacheSize)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.recoveryMinApplyDelay !== undefined &&
            (obj.recoveryMinApplyDelay = message.recoveryMinApplyDelay);
        message.sharedBuffers !== undefined &&
            (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined &&
            (obj.tempBuffers = message.tempBuffers);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.backendFlushAfter !== undefined &&
            (obj.backendFlushAfter = message.backendFlushAfter);
        message.oldSnapshotThreshold !== undefined &&
            (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
        message.maxStandbyStreamingDelay !== undefined &&
            (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
        message.constraintExclusion !== undefined &&
            (obj.constraintExclusion =
                postgresqlHostConfig14_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlHostConfig14_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlHostConfig14_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlHostConfig14_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlHostConfig14_LogLevelToJSON(message.logMinErrorStatement));
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.logCheckpoints !== undefined &&
            (obj.logCheckpoints = message.logCheckpoints);
        message.logConnections !== undefined &&
            (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logDuration !== undefined &&
            (obj.logDuration = message.logDuration);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = postgresqlHostConfig14_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlHostConfig14_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlHostConfig14_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlHostConfig14_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlHostConfig14_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlHostConfig14_XmlOptionToJSON(message.xmloption));
        message.ginPendingListLimit !== undefined &&
            (obj.ginPendingListLimit = message.ginPendingListLimit);
        message.deadlockTimeout !== undefined &&
            (obj.deadlockTimeout = message.deadlockTimeout);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.maxPredLocksPerTransaction !== undefined &&
            (obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction);
        message.arrayNulls !== undefined && (obj.arrayNulls = message.arrayNulls);
        message.backslashQuote !== undefined &&
            (obj.backslashQuote = postgresqlHostConfig14_BackslashQuoteToJSON(message.backslashQuote));
        message.defaultWithOids !== undefined &&
            (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.quoteAllIdentifiers !== undefined &&
            (obj.quoteAllIdentifiers = message.quoteAllIdentifiers);
        message.standardConformingStrings !== undefined &&
            (obj.standardConformingStrings = message.standardConformingStrings);
        message.synchronizeSeqscans !== undefined &&
            (obj.synchronizeSeqscans = message.synchronizeSeqscans);
        message.transformNullEquals !== undefined &&
            (obj.transformNullEquals = message.transformNullEquals);
        message.exitOnError !== undefined &&
            (obj.exitOnError = message.exitOnError);
        message.seqPageCost !== undefined &&
            (obj.seqPageCost = message.seqPageCost);
        message.randomPageCost !== undefined &&
            (obj.randomPageCost = message.randomPageCost);
        message.enableBitmapscan !== undefined &&
            (obj.enableBitmapscan = message.enableBitmapscan);
        message.enableHashagg !== undefined &&
            (obj.enableHashagg = message.enableHashagg);
        message.enableHashjoin !== undefined &&
            (obj.enableHashjoin = message.enableHashjoin);
        message.enableIndexscan !== undefined &&
            (obj.enableIndexscan = message.enableIndexscan);
        message.enableIndexonlyscan !== undefined &&
            (obj.enableIndexonlyscan = message.enableIndexonlyscan);
        message.enableMaterial !== undefined &&
            (obj.enableMaterial = message.enableMaterial);
        message.enableMergejoin !== undefined &&
            (obj.enableMergejoin = message.enableMergejoin);
        message.enableNestloop !== undefined &&
            (obj.enableNestloop = message.enableNestloop);
        message.enableSeqscan !== undefined &&
            (obj.enableSeqscan = message.enableSeqscan);
        message.enableSort !== undefined && (obj.enableSort = message.enableSort);
        message.enableTidscan !== undefined &&
            (obj.enableTidscan = message.enableTidscan);
        message.maxParallelWorkers !== undefined &&
            (obj.maxParallelWorkers = message.maxParallelWorkers);
        message.maxParallelWorkersPerGather !== undefined &&
            (obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41;
        const message = Object.assign({}, basePostgresqlHostConfig14);
        message.recoveryMinApplyDelay = (_a = object.recoveryMinApplyDelay) !== null && _a !== void 0 ? _a : undefined;
        message.sharedBuffers = (_b = object.sharedBuffers) !== null && _b !== void 0 ? _b : undefined;
        message.tempBuffers = (_c = object.tempBuffers) !== null && _c !== void 0 ? _c : undefined;
        message.workMem = (_d = object.workMem) !== null && _d !== void 0 ? _d : undefined;
        message.tempFileLimit = (_e = object.tempFileLimit) !== null && _e !== void 0 ? _e : undefined;
        message.backendFlushAfter = (_f = object.backendFlushAfter) !== null && _f !== void 0 ? _f : undefined;
        message.oldSnapshotThreshold = (_g = object.oldSnapshotThreshold) !== null && _g !== void 0 ? _g : undefined;
        message.maxStandbyStreamingDelay =
            (_h = object.maxStandbyStreamingDelay) !== null && _h !== void 0 ? _h : undefined;
        message.constraintExclusion = (_j = object.constraintExclusion) !== null && _j !== void 0 ? _j : 0;
        message.cursorTupleFraction = (_k = object.cursorTupleFraction) !== null && _k !== void 0 ? _k : undefined;
        message.fromCollapseLimit = (_l = object.fromCollapseLimit) !== null && _l !== void 0 ? _l : undefined;
        message.joinCollapseLimit = (_m = object.joinCollapseLimit) !== null && _m !== void 0 ? _m : undefined;
        message.forceParallelMode = (_o = object.forceParallelMode) !== null && _o !== void 0 ? _o : 0;
        message.clientMinMessages = (_p = object.clientMinMessages) !== null && _p !== void 0 ? _p : 0;
        message.logMinMessages = (_q = object.logMinMessages) !== null && _q !== void 0 ? _q : 0;
        message.logMinErrorStatement = (_r = object.logMinErrorStatement) !== null && _r !== void 0 ? _r : 0;
        message.logMinDurationStatement =
            (_s = object.logMinDurationStatement) !== null && _s !== void 0 ? _s : undefined;
        message.logCheckpoints = (_t = object.logCheckpoints) !== null && _t !== void 0 ? _t : undefined;
        message.logConnections = (_u = object.logConnections) !== null && _u !== void 0 ? _u : undefined;
        message.logDisconnections = (_v = object.logDisconnections) !== null && _v !== void 0 ? _v : undefined;
        message.logDuration = (_w = object.logDuration) !== null && _w !== void 0 ? _w : undefined;
        message.logErrorVerbosity = (_x = object.logErrorVerbosity) !== null && _x !== void 0 ? _x : 0;
        message.logLockWaits = (_y = object.logLockWaits) !== null && _y !== void 0 ? _y : undefined;
        message.logStatement = (_z = object.logStatement) !== null && _z !== void 0 ? _z : 0;
        message.logTempFiles = (_0 = object.logTempFiles) !== null && _0 !== void 0 ? _0 : undefined;
        message.searchPath = (_1 = object.searchPath) !== null && _1 !== void 0 ? _1 : "";
        message.rowSecurity = (_2 = object.rowSecurity) !== null && _2 !== void 0 ? _2 : undefined;
        message.defaultTransactionIsolation =
            (_3 = object.defaultTransactionIsolation) !== null && _3 !== void 0 ? _3 : 0;
        message.statementTimeout = (_4 = object.statementTimeout) !== null && _4 !== void 0 ? _4 : undefined;
        message.lockTimeout = (_5 = object.lockTimeout) !== null && _5 !== void 0 ? _5 : undefined;
        message.idleInTransactionSessionTimeout =
            (_6 = object.idleInTransactionSessionTimeout) !== null && _6 !== void 0 ? _6 : undefined;
        message.byteaOutput = (_7 = object.byteaOutput) !== null && _7 !== void 0 ? _7 : 0;
        message.xmlbinary = (_8 = object.xmlbinary) !== null && _8 !== void 0 ? _8 : 0;
        message.xmloption = (_9 = object.xmloption) !== null && _9 !== void 0 ? _9 : 0;
        message.ginPendingListLimit = (_10 = object.ginPendingListLimit) !== null && _10 !== void 0 ? _10 : undefined;
        message.deadlockTimeout = (_11 = object.deadlockTimeout) !== null && _11 !== void 0 ? _11 : undefined;
        message.maxLocksPerTransaction = (_12 = object.maxLocksPerTransaction) !== null && _12 !== void 0 ? _12 : undefined;
        message.maxPredLocksPerTransaction =
            (_13 = object.maxPredLocksPerTransaction) !== null && _13 !== void 0 ? _13 : undefined;
        message.arrayNulls = (_14 = object.arrayNulls) !== null && _14 !== void 0 ? _14 : undefined;
        message.backslashQuote = (_15 = object.backslashQuote) !== null && _15 !== void 0 ? _15 : 0;
        message.defaultWithOids = (_16 = object.defaultWithOids) !== null && _16 !== void 0 ? _16 : undefined;
        message.escapeStringWarning = (_17 = object.escapeStringWarning) !== null && _17 !== void 0 ? _17 : undefined;
        message.loCompatPrivileges = (_18 = object.loCompatPrivileges) !== null && _18 !== void 0 ? _18 : undefined;
        message.quoteAllIdentifiers = (_19 = object.quoteAllIdentifiers) !== null && _19 !== void 0 ? _19 : undefined;
        message.standardConformingStrings =
            (_20 = object.standardConformingStrings) !== null && _20 !== void 0 ? _20 : undefined;
        message.synchronizeSeqscans = (_21 = object.synchronizeSeqscans) !== null && _21 !== void 0 ? _21 : undefined;
        message.transformNullEquals = (_22 = object.transformNullEquals) !== null && _22 !== void 0 ? _22 : undefined;
        message.exitOnError = (_23 = object.exitOnError) !== null && _23 !== void 0 ? _23 : undefined;
        message.seqPageCost = (_24 = object.seqPageCost) !== null && _24 !== void 0 ? _24 : undefined;
        message.randomPageCost = (_25 = object.randomPageCost) !== null && _25 !== void 0 ? _25 : undefined;
        message.enableBitmapscan = (_26 = object.enableBitmapscan) !== null && _26 !== void 0 ? _26 : undefined;
        message.enableHashagg = (_27 = object.enableHashagg) !== null && _27 !== void 0 ? _27 : undefined;
        message.enableHashjoin = (_28 = object.enableHashjoin) !== null && _28 !== void 0 ? _28 : undefined;
        message.enableIndexscan = (_29 = object.enableIndexscan) !== null && _29 !== void 0 ? _29 : undefined;
        message.enableIndexonlyscan = (_30 = object.enableIndexonlyscan) !== null && _30 !== void 0 ? _30 : undefined;
        message.enableMaterial = (_31 = object.enableMaterial) !== null && _31 !== void 0 ? _31 : undefined;
        message.enableMergejoin = (_32 = object.enableMergejoin) !== null && _32 !== void 0 ? _32 : undefined;
        message.enableNestloop = (_33 = object.enableNestloop) !== null && _33 !== void 0 ? _33 : undefined;
        message.enableSeqscan = (_34 = object.enableSeqscan) !== null && _34 !== void 0 ? _34 : undefined;
        message.enableSort = (_35 = object.enableSort) !== null && _35 !== void 0 ? _35 : undefined;
        message.enableTidscan = (_36 = object.enableTidscan) !== null && _36 !== void 0 ? _36 : undefined;
        message.maxParallelWorkers = (_37 = object.maxParallelWorkers) !== null && _37 !== void 0 ? _37 : undefined;
        message.maxParallelWorkersPerGather =
            (_38 = object.maxParallelWorkersPerGather) !== null && _38 !== void 0 ? _38 : undefined;
        message.timezone = (_39 = object.timezone) !== null && _39 !== void 0 ? _39 : "";
        message.effectiveIoConcurrency = (_40 = object.effectiveIoConcurrency) !== null && _40 !== void 0 ? _40 : undefined;
        message.effectiveCacheSize = (_41 = object.effectiveCacheSize) !== null && _41 !== void 0 ? _41 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresqlHostConfig14.$type, exports.PostgresqlHostConfig14);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
