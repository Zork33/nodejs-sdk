"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postgresqlhostconfig96 = exports.postgresqlhostconfig96_BackslashQuoteToJSON = exports.postgresqlhostconfig96_BackslashQuoteFromJSON = exports.Postgresqlhostconfig96_BackslashQuote = exports.postgresqlhostconfig96_XmlOptionToJSON = exports.postgresqlhostconfig96_XmlOptionFromJSON = exports.Postgresqlhostconfig96_XmlOption = exports.postgresqlhostconfig96_XmlBinaryToJSON = exports.postgresqlhostconfig96_XmlBinaryFromJSON = exports.Postgresqlhostconfig96_XmlBinary = exports.postgresqlhostconfig96_ByteaOutputToJSON = exports.postgresqlhostconfig96_ByteaOutputFromJSON = exports.Postgresqlhostconfig96_ByteaOutput = exports.postgresqlhostconfig96_TransactionIsolationToJSON = exports.postgresqlhostconfig96_TransactionIsolationFromJSON = exports.Postgresqlhostconfig96_TransactionIsolation = exports.postgresqlhostconfig96_LogStatementToJSON = exports.postgresqlhostconfig96_LogStatementFromJSON = exports.Postgresqlhostconfig96_LogStatement = exports.postgresqlhostconfig96_LogErrorVerbosityToJSON = exports.postgresqlhostconfig96_LogErrorVerbosityFromJSON = exports.Postgresqlhostconfig96_LogErrorVerbosity = exports.postgresqlhostconfig96_LogLevelToJSON = exports.postgresqlhostconfig96_LogLevelFromJSON = exports.Postgresqlhostconfig96_LogLevel = exports.postgresqlhostconfig96_ForceParallelModeToJSON = exports.postgresqlhostconfig96_ForceParallelModeFromJSON = exports.Postgresqlhostconfig96_ForceParallelMode = exports.postgresqlhostconfig96_ConstraintExclusionToJSON = exports.postgresqlhostconfig96_ConstraintExclusionFromJSON = exports.Postgresqlhostconfig96_ConstraintExclusion = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
var Postgresqlhostconfig96_ConstraintExclusion;
(function (Postgresqlhostconfig96_ConstraintExclusion) {
    Postgresqlhostconfig96_ConstraintExclusion[Postgresqlhostconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    Postgresqlhostconfig96_ConstraintExclusion[Postgresqlhostconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    Postgresqlhostconfig96_ConstraintExclusion[Postgresqlhostconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    Postgresqlhostconfig96_ConstraintExclusion[Postgresqlhostconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    Postgresqlhostconfig96_ConstraintExclusion[Postgresqlhostconfig96_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_ConstraintExclusion = exports.Postgresqlhostconfig96_ConstraintExclusion || (exports.Postgresqlhostconfig96_ConstraintExclusion = {}));
function postgresqlhostconfig96_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case "CONSTRAINT_EXCLUSION_ON":
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case "CONSTRAINT_EXCLUSION_OFF":
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case "CONSTRAINT_EXCLUSION_PARTITION":
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_ConstraintExclusionFromJSON = postgresqlhostconfig96_ConstraintExclusionFromJSON;
function postgresqlhostconfig96_ConstraintExclusionToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return "CONSTRAINT_EXCLUSION_ON";
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return "CONSTRAINT_EXCLUSION_OFF";
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return "CONSTRAINT_EXCLUSION_PARTITION";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_ConstraintExclusionToJSON = postgresqlhostconfig96_ConstraintExclusionToJSON;
var Postgresqlhostconfig96_ForceParallelMode;
(function (Postgresqlhostconfig96_ForceParallelMode) {
    Postgresqlhostconfig96_ForceParallelMode[Postgresqlhostconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    Postgresqlhostconfig96_ForceParallelMode[Postgresqlhostconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    Postgresqlhostconfig96_ForceParallelMode[Postgresqlhostconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    Postgresqlhostconfig96_ForceParallelMode[Postgresqlhostconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    Postgresqlhostconfig96_ForceParallelMode[Postgresqlhostconfig96_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_ForceParallelMode = exports.Postgresqlhostconfig96_ForceParallelMode || (exports.Postgresqlhostconfig96_ForceParallelMode = {}));
function postgresqlhostconfig96_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORCE_PARALLEL_MODE_UNSPECIFIED":
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case "FORCE_PARALLEL_MODE_ON":
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case "FORCE_PARALLEL_MODE_OFF":
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case "FORCE_PARALLEL_MODE_REGRESS":
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_ForceParallelModeFromJSON = postgresqlhostconfig96_ForceParallelModeFromJSON;
function postgresqlhostconfig96_ForceParallelModeToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return "FORCE_PARALLEL_MODE_UNSPECIFIED";
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return "FORCE_PARALLEL_MODE_ON";
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return "FORCE_PARALLEL_MODE_OFF";
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return "FORCE_PARALLEL_MODE_REGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_ForceParallelModeToJSON = postgresqlhostconfig96_ForceParallelModeToJSON;
var Postgresqlhostconfig96_LogLevel;
(function (Postgresqlhostconfig96_LogLevel) {
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    Postgresqlhostconfig96_LogLevel[Postgresqlhostconfig96_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_LogLevel = exports.Postgresqlhostconfig96_LogLevel || (exports.Postgresqlhostconfig96_LogLevel = {}));
function postgresqlhostconfig96_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "LOG_LEVEL_DEBUG5":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case "LOG_LEVEL_DEBUG4":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case "LOG_LEVEL_DEBUG3":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case "LOG_LEVEL_DEBUG2":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case "LOG_LEVEL_DEBUG1":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case "LOG_LEVEL_LOG":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case "LOG_LEVEL_NOTICE":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case "LOG_LEVEL_WARNING":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case "LOG_LEVEL_ERROR":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case "LOG_LEVEL_FATAL":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case "LOG_LEVEL_PANIC":
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_LogLevelFromJSON = postgresqlhostconfig96_LogLevelFromJSON;
function postgresqlhostconfig96_LogLevelToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG5:
            return "LOG_LEVEL_DEBUG5";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG4:
            return "LOG_LEVEL_DEBUG4";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG3:
            return "LOG_LEVEL_DEBUG3";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG2:
            return "LOG_LEVEL_DEBUG2";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG1:
            return "LOG_LEVEL_DEBUG1";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_LOG:
            return "LOG_LEVEL_LOG";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_NOTICE:
            return "LOG_LEVEL_NOTICE";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_WARNING:
            return "LOG_LEVEL_WARNING";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_ERROR:
            return "LOG_LEVEL_ERROR";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_FATAL:
            return "LOG_LEVEL_FATAL";
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_PANIC:
            return "LOG_LEVEL_PANIC";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_LogLevelToJSON = postgresqlhostconfig96_LogLevelToJSON;
var Postgresqlhostconfig96_LogErrorVerbosity;
(function (Postgresqlhostconfig96_LogErrorVerbosity) {
    Postgresqlhostconfig96_LogErrorVerbosity[Postgresqlhostconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    Postgresqlhostconfig96_LogErrorVerbosity[Postgresqlhostconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    Postgresqlhostconfig96_LogErrorVerbosity[Postgresqlhostconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    Postgresqlhostconfig96_LogErrorVerbosity[Postgresqlhostconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    Postgresqlhostconfig96_LogErrorVerbosity[Postgresqlhostconfig96_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_LogErrorVerbosity = exports.Postgresqlhostconfig96_LogErrorVerbosity || (exports.Postgresqlhostconfig96_LogErrorVerbosity = {}));
function postgresqlhostconfig96_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case "LOG_ERROR_VERBOSITY_TERSE":
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case "LOG_ERROR_VERBOSITY_DEFAULT":
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case "LOG_ERROR_VERBOSITY_VERBOSE":
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_LogErrorVerbosityFromJSON = postgresqlhostconfig96_LogErrorVerbosityFromJSON;
function postgresqlhostconfig96_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return "LOG_ERROR_VERBOSITY_TERSE";
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return "LOG_ERROR_VERBOSITY_DEFAULT";
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return "LOG_ERROR_VERBOSITY_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_LogErrorVerbosityToJSON = postgresqlhostconfig96_LogErrorVerbosityToJSON;
var Postgresqlhostconfig96_LogStatement;
(function (Postgresqlhostconfig96_LogStatement) {
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    Postgresqlhostconfig96_LogStatement[Postgresqlhostconfig96_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_LogStatement = exports.Postgresqlhostconfig96_LogStatement || (exports.Postgresqlhostconfig96_LogStatement = {}));
function postgresqlhostconfig96_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_LogStatementFromJSON = postgresqlhostconfig96_LogStatementFromJSON;
function postgresqlhostconfig96_LogStatementToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_LogStatementToJSON = postgresqlhostconfig96_LogStatementToJSON;
var Postgresqlhostconfig96_TransactionIsolation;
(function (Postgresqlhostconfig96_TransactionIsolation) {
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    Postgresqlhostconfig96_TransactionIsolation[Postgresqlhostconfig96_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_TransactionIsolation = exports.Postgresqlhostconfig96_TransactionIsolation || (exports.Postgresqlhostconfig96_TransactionIsolation = {}));
function postgresqlhostconfig96_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_TransactionIsolationFromJSON = postgresqlhostconfig96_TransactionIsolationFromJSON;
function postgresqlhostconfig96_TransactionIsolationToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_TransactionIsolationToJSON = postgresqlhostconfig96_TransactionIsolationToJSON;
var Postgresqlhostconfig96_ByteaOutput;
(function (Postgresqlhostconfig96_ByteaOutput) {
    Postgresqlhostconfig96_ByteaOutput[Postgresqlhostconfig96_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    Postgresqlhostconfig96_ByteaOutput[Postgresqlhostconfig96_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    Postgresqlhostconfig96_ByteaOutput[Postgresqlhostconfig96_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    Postgresqlhostconfig96_ByteaOutput[Postgresqlhostconfig96_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_ByteaOutput = exports.Postgresqlhostconfig96_ByteaOutput || (exports.Postgresqlhostconfig96_ByteaOutput = {}));
function postgresqlhostconfig96_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case "BYTEA_OUTPUT_UNSPECIFIED":
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case "BYTEA_OUTPUT_HEX":
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case "BYTEA_OUTPUT_ESCAPED":
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_ByteaOutputFromJSON = postgresqlhostconfig96_ByteaOutputFromJSON;
function postgresqlhostconfig96_ByteaOutputToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return "BYTEA_OUTPUT_UNSPECIFIED";
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
            return "BYTEA_OUTPUT_HEX";
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return "BYTEA_OUTPUT_ESCAPED";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_ByteaOutputToJSON = postgresqlhostconfig96_ByteaOutputToJSON;
var Postgresqlhostconfig96_XmlBinary;
(function (Postgresqlhostconfig96_XmlBinary) {
    Postgresqlhostconfig96_XmlBinary[Postgresqlhostconfig96_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    Postgresqlhostconfig96_XmlBinary[Postgresqlhostconfig96_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    Postgresqlhostconfig96_XmlBinary[Postgresqlhostconfig96_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    Postgresqlhostconfig96_XmlBinary[Postgresqlhostconfig96_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_XmlBinary = exports.Postgresqlhostconfig96_XmlBinary || (exports.Postgresqlhostconfig96_XmlBinary = {}));
function postgresqlhostconfig96_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_BINARY_UNSPECIFIED":
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case "XML_BINARY_BASE64":
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case "XML_BINARY_HEX":
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_HEX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_XmlBinaryFromJSON = postgresqlhostconfig96_XmlBinaryFromJSON;
function postgresqlhostconfig96_XmlBinaryToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
            return "XML_BINARY_UNSPECIFIED";
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_BASE64:
            return "XML_BINARY_BASE64";
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_HEX:
            return "XML_BINARY_HEX";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_XmlBinaryToJSON = postgresqlhostconfig96_XmlBinaryToJSON;
var Postgresqlhostconfig96_XmlOption;
(function (Postgresqlhostconfig96_XmlOption) {
    Postgresqlhostconfig96_XmlOption[Postgresqlhostconfig96_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    Postgresqlhostconfig96_XmlOption[Postgresqlhostconfig96_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    Postgresqlhostconfig96_XmlOption[Postgresqlhostconfig96_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    Postgresqlhostconfig96_XmlOption[Postgresqlhostconfig96_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_XmlOption = exports.Postgresqlhostconfig96_XmlOption || (exports.Postgresqlhostconfig96_XmlOption = {}));
function postgresqlhostconfig96_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_OPTION_UNSPECIFIED":
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case "XML_OPTION_DOCUMENT":
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case "XML_OPTION_CONTENT":
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_XmlOptionFromJSON = postgresqlhostconfig96_XmlOptionFromJSON;
function postgresqlhostconfig96_XmlOptionToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_UNSPECIFIED:
            return "XML_OPTION_UNSPECIFIED";
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_DOCUMENT:
            return "XML_OPTION_DOCUMENT";
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_CONTENT:
            return "XML_OPTION_CONTENT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_XmlOptionToJSON = postgresqlhostconfig96_XmlOptionToJSON;
var Postgresqlhostconfig96_BackslashQuote;
(function (Postgresqlhostconfig96_BackslashQuote) {
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    Postgresqlhostconfig96_BackslashQuote[Postgresqlhostconfig96_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlhostconfig96_BackslashQuote = exports.Postgresqlhostconfig96_BackslashQuote || (exports.Postgresqlhostconfig96_BackslashQuote = {}));
function postgresqlhostconfig96_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKSLASH_QUOTE_UNSPECIFIED":
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case "BACKSLASH_QUOTE":
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case "BACKSLASH_QUOTE_ON":
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case "BACKSLASH_QUOTE_OFF":
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case "BACKSLASH_QUOTE_SAFE_ENCODING":
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlhostconfig96_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlhostconfig96_BackslashQuoteFromJSON = postgresqlhostconfig96_BackslashQuoteFromJSON;
function postgresqlhostconfig96_BackslashQuoteToJSON(object) {
    switch (object) {
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return "BACKSLASH_QUOTE_UNSPECIFIED";
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE:
            return "BACKSLASH_QUOTE";
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
            return "BACKSLASH_QUOTE_ON";
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return "BACKSLASH_QUOTE_OFF";
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return "BACKSLASH_QUOTE_SAFE_ENCODING";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlhostconfig96_BackslashQuoteToJSON = postgresqlhostconfig96_BackslashQuoteToJSON;
const basePostgresqlhostconfig96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6",
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
};
exports.Postgresqlhostconfig96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6",
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
        if (message.replacementSortTuples !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replacementSortTuples,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempFileLimit }, writer.uint32(50).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backendFlushAfter,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.oldSnapshotThreshold,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStandbyStreamingDelay,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(80).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.cursorTupleFraction,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fromCollapseLimit,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.joinCollapseLimit,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(112).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(120).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(128).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(136).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationStatement,
            }, writer.uint32(146).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logCheckpoints }, writer.uint32(154).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logConnections }, writer.uint32(162).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logDisconnections,
            }, writer.uint32(170).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration }, writer.uint32(178).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(184).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits }, writer.uint32(194).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(200).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logTempFiles }, writer.uint32(210).fork()).ldelim();
        }
        if (message.searchPath !== "") {
            writer.uint32(218).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity }, writer.uint32(226).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(232).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.statementTimeout,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout }, writer.uint32(250).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.idleInTransactionSessionTimeout,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(264).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(272).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(280).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.ginPendingListLimit,
            }, writer.uint32(290).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deadlockTimeout,
            }, writer.uint32(298).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxLocksPerTransaction,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPredLocksPerTransaction,
            }, writer.uint32(314).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls }, writer.uint32(322).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(328).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.defaultWithOids }, writer.uint32(338).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.escapeStringWarning,
            }, writer.uint32(346).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.loCompatPrivileges,
            }, writer.uint32(354).fork()).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.operatorPrecedenceWarning,
            }, writer.uint32(362).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.quoteAllIdentifiers,
            }, writer.uint32(370).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.standardConformingStrings,
            }, writer.uint32(378).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.synchronizeSeqscans,
            }, writer.uint32(386).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.transformNullEquals,
            }, writer.uint32(394).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError }, writer.uint32(402).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.seqPageCost }, writer.uint32(410).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.randomPageCost,
            }, writer.uint32(418).fork()).ldelim();
        }
        if (message.sqlInheritance !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.sqlInheritance }, writer.uint32(426).fork()).ldelim();
        }
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveIoConcurrency,
            }, writer.uint32(434).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveCacheSize,
            }, writer.uint32(442).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlhostconfig96);
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
                    message.replacementSortTuples = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.backendFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.oldSnapshotThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.maxStandbyStreamingDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.constraintExclusion = reader.int32();
                    break;
                case 11:
                    message.cursorTupleFraction = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.fromCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.joinCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.forceParallelMode = reader.int32();
                    break;
                case 15:
                    message.clientMinMessages = reader.int32();
                    break;
                case 16:
                    message.logMinMessages = reader.int32();
                    break;
                case 17:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 18:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.logCheckpoints = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.logConnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.logDisconnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.logDuration = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 24:
                    message.logLockWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.logStatement = reader.int32();
                    break;
                case 26:
                    message.logTempFiles = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.searchPath = reader.string();
                    break;
                case 28:
                    message.rowSecurity = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 30:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.byteaOutput = reader.int32();
                    break;
                case 34:
                    message.xmlbinary = reader.int32();
                    break;
                case 35:
                    message.xmloption = reader.int32();
                    break;
                case 36:
                    message.ginPendingListLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.deadlockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.maxLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.maxPredLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.arrayNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.backslashQuote = reader.int32();
                    break;
                case 42:
                    message.defaultWithOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.escapeStringWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.loCompatPrivileges = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.operatorPrecedenceWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.quoteAllIdentifiers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.standardConformingStrings = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.synchronizeSeqscans = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.transformNullEquals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.exitOnError = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.seqPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.randomPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.sqlInheritance = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
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
        const message = Object.assign({}, basePostgresqlhostconfig96);
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
        message.replacementSortTuples =
            object.replacementSortTuples !== undefined &&
                object.replacementSortTuples !== null
                ? Number(object.replacementSortTuples)
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
                ? postgresqlhostconfig96_ConstraintExclusionFromJSON(object.constraintExclusion)
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
                ? postgresqlhostconfig96_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined &&
                object.clientMinMessages !== null
                ? postgresqlhostconfig96_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlhostconfig96_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined &&
                object.logMinErrorStatement !== null
                ? postgresqlhostconfig96_LogLevelFromJSON(object.logMinErrorStatement)
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
                ? postgresqlhostconfig96_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlhostconfig96_LogStatementFromJSON(object.logStatement)
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
                ? postgresqlhostconfig96_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
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
                ? postgresqlhostconfig96_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlhostconfig96_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlhostconfig96_XmlOptionFromJSON(object.xmloption)
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
                ? postgresqlhostconfig96_BackslashQuoteFromJSON(object.backslashQuote)
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
        message.operatorPrecedenceWarning =
            object.operatorPrecedenceWarning !== undefined &&
                object.operatorPrecedenceWarning !== null
                ? Boolean(object.operatorPrecedenceWarning)
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
        message.sqlInheritance =
            object.sqlInheritance !== undefined && object.sqlInheritance !== null
                ? Boolean(object.sqlInheritance)
                : undefined;
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
        message.replacementSortTuples !== undefined &&
            (obj.replacementSortTuples = message.replacementSortTuples);
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
                postgresqlhostconfig96_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlhostconfig96_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlhostconfig96_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlhostconfig96_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlhostconfig96_LogLevelToJSON(message.logMinErrorStatement));
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
            (obj.logErrorVerbosity = postgresqlhostconfig96_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlhostconfig96_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlhostconfig96_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlhostconfig96_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlhostconfig96_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlhostconfig96_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlhostconfig96_BackslashQuoteToJSON(message.backslashQuote));
        message.defaultWithOids !== undefined &&
            (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.operatorPrecedenceWarning !== undefined &&
            (obj.operatorPrecedenceWarning = message.operatorPrecedenceWarning);
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
        message.sqlInheritance !== undefined &&
            (obj.sqlInheritance = message.sqlInheritance);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
        const message = Object.assign({}, basePostgresqlhostconfig96);
        message.recoveryMinApplyDelay = (_a = object.recoveryMinApplyDelay) !== null && _a !== void 0 ? _a : undefined;
        message.sharedBuffers = (_b = object.sharedBuffers) !== null && _b !== void 0 ? _b : undefined;
        message.tempBuffers = (_c = object.tempBuffers) !== null && _c !== void 0 ? _c : undefined;
        message.workMem = (_d = object.workMem) !== null && _d !== void 0 ? _d : undefined;
        message.replacementSortTuples = (_e = object.replacementSortTuples) !== null && _e !== void 0 ? _e : undefined;
        message.tempFileLimit = (_f = object.tempFileLimit) !== null && _f !== void 0 ? _f : undefined;
        message.backendFlushAfter = (_g = object.backendFlushAfter) !== null && _g !== void 0 ? _g : undefined;
        message.oldSnapshotThreshold = (_h = object.oldSnapshotThreshold) !== null && _h !== void 0 ? _h : undefined;
        message.maxStandbyStreamingDelay =
            (_j = object.maxStandbyStreamingDelay) !== null && _j !== void 0 ? _j : undefined;
        message.constraintExclusion = (_k = object.constraintExclusion) !== null && _k !== void 0 ? _k : 0;
        message.cursorTupleFraction = (_l = object.cursorTupleFraction) !== null && _l !== void 0 ? _l : undefined;
        message.fromCollapseLimit = (_m = object.fromCollapseLimit) !== null && _m !== void 0 ? _m : undefined;
        message.joinCollapseLimit = (_o = object.joinCollapseLimit) !== null && _o !== void 0 ? _o : undefined;
        message.forceParallelMode = (_p = object.forceParallelMode) !== null && _p !== void 0 ? _p : 0;
        message.clientMinMessages = (_q = object.clientMinMessages) !== null && _q !== void 0 ? _q : 0;
        message.logMinMessages = (_r = object.logMinMessages) !== null && _r !== void 0 ? _r : 0;
        message.logMinErrorStatement = (_s = object.logMinErrorStatement) !== null && _s !== void 0 ? _s : 0;
        message.logMinDurationStatement =
            (_t = object.logMinDurationStatement) !== null && _t !== void 0 ? _t : undefined;
        message.logCheckpoints = (_u = object.logCheckpoints) !== null && _u !== void 0 ? _u : undefined;
        message.logConnections = (_v = object.logConnections) !== null && _v !== void 0 ? _v : undefined;
        message.logDisconnections = (_w = object.logDisconnections) !== null && _w !== void 0 ? _w : undefined;
        message.logDuration = (_x = object.logDuration) !== null && _x !== void 0 ? _x : undefined;
        message.logErrorVerbosity = (_y = object.logErrorVerbosity) !== null && _y !== void 0 ? _y : 0;
        message.logLockWaits = (_z = object.logLockWaits) !== null && _z !== void 0 ? _z : undefined;
        message.logStatement = (_0 = object.logStatement) !== null && _0 !== void 0 ? _0 : 0;
        message.logTempFiles = (_1 = object.logTempFiles) !== null && _1 !== void 0 ? _1 : undefined;
        message.searchPath = (_2 = object.searchPath) !== null && _2 !== void 0 ? _2 : "";
        message.rowSecurity = (_3 = object.rowSecurity) !== null && _3 !== void 0 ? _3 : undefined;
        message.defaultTransactionIsolation =
            (_4 = object.defaultTransactionIsolation) !== null && _4 !== void 0 ? _4 : 0;
        message.statementTimeout = (_5 = object.statementTimeout) !== null && _5 !== void 0 ? _5 : undefined;
        message.lockTimeout = (_6 = object.lockTimeout) !== null && _6 !== void 0 ? _6 : undefined;
        message.idleInTransactionSessionTimeout =
            (_7 = object.idleInTransactionSessionTimeout) !== null && _7 !== void 0 ? _7 : undefined;
        message.byteaOutput = (_8 = object.byteaOutput) !== null && _8 !== void 0 ? _8 : 0;
        message.xmlbinary = (_9 = object.xmlbinary) !== null && _9 !== void 0 ? _9 : 0;
        message.xmloption = (_10 = object.xmloption) !== null && _10 !== void 0 ? _10 : 0;
        message.ginPendingListLimit = (_11 = object.ginPendingListLimit) !== null && _11 !== void 0 ? _11 : undefined;
        message.deadlockTimeout = (_12 = object.deadlockTimeout) !== null && _12 !== void 0 ? _12 : undefined;
        message.maxLocksPerTransaction = (_13 = object.maxLocksPerTransaction) !== null && _13 !== void 0 ? _13 : undefined;
        message.maxPredLocksPerTransaction =
            (_14 = object.maxPredLocksPerTransaction) !== null && _14 !== void 0 ? _14 : undefined;
        message.arrayNulls = (_15 = object.arrayNulls) !== null && _15 !== void 0 ? _15 : undefined;
        message.backslashQuote = (_16 = object.backslashQuote) !== null && _16 !== void 0 ? _16 : 0;
        message.defaultWithOids = (_17 = object.defaultWithOids) !== null && _17 !== void 0 ? _17 : undefined;
        message.escapeStringWarning = (_18 = object.escapeStringWarning) !== null && _18 !== void 0 ? _18 : undefined;
        message.loCompatPrivileges = (_19 = object.loCompatPrivileges) !== null && _19 !== void 0 ? _19 : undefined;
        message.operatorPrecedenceWarning =
            (_20 = object.operatorPrecedenceWarning) !== null && _20 !== void 0 ? _20 : undefined;
        message.quoteAllIdentifiers = (_21 = object.quoteAllIdentifiers) !== null && _21 !== void 0 ? _21 : undefined;
        message.standardConformingStrings =
            (_22 = object.standardConformingStrings) !== null && _22 !== void 0 ? _22 : undefined;
        message.synchronizeSeqscans = (_23 = object.synchronizeSeqscans) !== null && _23 !== void 0 ? _23 : undefined;
        message.transformNullEquals = (_24 = object.transformNullEquals) !== null && _24 !== void 0 ? _24 : undefined;
        message.exitOnError = (_25 = object.exitOnError) !== null && _25 !== void 0 ? _25 : undefined;
        message.seqPageCost = (_26 = object.seqPageCost) !== null && _26 !== void 0 ? _26 : undefined;
        message.randomPageCost = (_27 = object.randomPageCost) !== null && _27 !== void 0 ? _27 : undefined;
        message.sqlInheritance = (_28 = object.sqlInheritance) !== null && _28 !== void 0 ? _28 : undefined;
        message.effectiveIoConcurrency = (_29 = object.effectiveIoConcurrency) !== null && _29 !== void 0 ? _29 : undefined;
        message.effectiveCacheSize = (_30 = object.effectiveCacheSize) !== null && _30 !== void 0 ? _30 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Postgresqlhostconfig96.$type, exports.Postgresqlhostconfig96);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
