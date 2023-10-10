import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlHostConfig14 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig14";
    /** in milliseconds. */
    recoveryMinApplyDelay?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    tempFileLimit?: number;
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    constraintExclusion: PostgresqlHostConfig14_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: PostgresqlHostConfig14_ForceParallelMode;
    clientMinMessages: PostgresqlHostConfig14_LogLevel;
    logMinMessages: PostgresqlHostConfig14_LogLevel;
    logMinErrorStatement: PostgresqlHostConfig14_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: PostgresqlHostConfig14_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: PostgresqlHostConfig14_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: PostgresqlHostConfig14_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: PostgresqlHostConfig14_ByteaOutput;
    xmlbinary: PostgresqlHostConfig14_XmlBinary;
    xmloption: PostgresqlHostConfig14_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: PostgresqlHostConfig14_BackslashQuote;
    defaultWithOids?: boolean;
    escapeStringWarning?: boolean;
    loCompatPrivileges?: boolean;
    quoteAllIdentifiers?: boolean;
    standardConformingStrings?: boolean;
    synchronizeSeqscans?: boolean;
    transformNullEquals?: boolean;
    exitOnError?: boolean;
    seqPageCost?: number;
    randomPageCost?: number;
    enableBitmapscan?: boolean;
    enableHashagg?: boolean;
    enableHashjoin?: boolean;
    enableIndexscan?: boolean;
    enableIndexonlyscan?: boolean;
    enableMaterial?: boolean;
    enableMergejoin?: boolean;
    enableNestloop?: boolean;
    enableSeqscan?: boolean;
    enableSort?: boolean;
    enableTidscan?: boolean;
    maxParallelWorkers?: number;
    maxParallelWorkersPerGather?: number;
    timezone: string;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
}
export declare enum PostgresqlHostConfig14_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_BackslashQuoteFromJSON(object: any): PostgresqlHostConfig14_BackslashQuote;
export declare function postgresqlHostConfig14_BackslashQuoteToJSON(object: PostgresqlHostConfig14_BackslashQuote): string;
export declare enum PostgresqlHostConfig14_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_ByteaOutputFromJSON(object: any): PostgresqlHostConfig14_ByteaOutput;
export declare function postgresqlHostConfig14_ByteaOutputToJSON(object: PostgresqlHostConfig14_ByteaOutput): string;
export declare enum PostgresqlHostConfig14_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_ConstraintExclusionFromJSON(object: any): PostgresqlHostConfig14_ConstraintExclusion;
export declare function postgresqlHostConfig14_ConstraintExclusionToJSON(object: PostgresqlHostConfig14_ConstraintExclusion): string;
export declare enum PostgresqlHostConfig14_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_ForceParallelModeFromJSON(object: any): PostgresqlHostConfig14_ForceParallelMode;
export declare function postgresqlHostConfig14_ForceParallelModeToJSON(object: PostgresqlHostConfig14_ForceParallelMode): string;
export declare enum PostgresqlHostConfig14_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_LogErrorVerbosityFromJSON(object: any): PostgresqlHostConfig14_LogErrorVerbosity;
export declare function postgresqlHostConfig14_LogErrorVerbosityToJSON(object: PostgresqlHostConfig14_LogErrorVerbosity): string;
export declare enum PostgresqlHostConfig14_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG5 = 1,
    LOG_LEVEL_DEBUG4 = 2,
    LOG_LEVEL_DEBUG3 = 3,
    LOG_LEVEL_DEBUG2 = 4,
    LOG_LEVEL_DEBUG1 = 5,
    LOG_LEVEL_LOG = 6,
    LOG_LEVEL_NOTICE = 7,
    LOG_LEVEL_WARNING = 8,
    LOG_LEVEL_ERROR = 9,
    LOG_LEVEL_FATAL = 10,
    LOG_LEVEL_PANIC = 11,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_LogLevelFromJSON(object: any): PostgresqlHostConfig14_LogLevel;
export declare function postgresqlHostConfig14_LogLevelToJSON(object: PostgresqlHostConfig14_LogLevel): string;
export declare enum PostgresqlHostConfig14_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_LogStatementFromJSON(object: any): PostgresqlHostConfig14_LogStatement;
export declare function postgresqlHostConfig14_LogStatementToJSON(object: PostgresqlHostConfig14_LogStatement): string;
export declare enum PostgresqlHostConfig14_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_TransactionIsolationFromJSON(object: any): PostgresqlHostConfig14_TransactionIsolation;
export declare function postgresqlHostConfig14_TransactionIsolationToJSON(object: PostgresqlHostConfig14_TransactionIsolation): string;
export declare enum PostgresqlHostConfig14_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_XmlBinaryFromJSON(object: any): PostgresqlHostConfig14_XmlBinary;
export declare function postgresqlHostConfig14_XmlBinaryToJSON(object: PostgresqlHostConfig14_XmlBinary): string;
export declare enum PostgresqlHostConfig14_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig14_XmlOptionFromJSON(object: any): PostgresqlHostConfig14_XmlOption;
export declare function postgresqlHostConfig14_XmlOptionToJSON(object: PostgresqlHostConfig14_XmlOption): string;
export declare const PostgresqlHostConfig14: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig14";
    encode(message: PostgresqlHostConfig14, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlHostConfig14;
    fromJSON(object: any): PostgresqlHostConfig14;
    toJSON(message: PostgresqlHostConfig14): unknown;
    fromPartial<I extends {
        timezone?: string | undefined;
        logStatement?: PostgresqlHostConfig14_LogStatement | undefined;
        logErrorVerbosity?: PostgresqlHostConfig14_LogErrorVerbosity | undefined;
        constraintExclusion?: PostgresqlHostConfig14_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlHostConfig14_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlHostConfig14_LogLevel | undefined;
        logMinMessages?: PostgresqlHostConfig14_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlHostConfig14_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlHostConfig14_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlHostConfig14_ByteaOutput | undefined;
        xmlbinary?: PostgresqlHostConfig14_XmlBinary | undefined;
        xmloption?: PostgresqlHostConfig14_XmlOption | undefined;
        backslashQuote?: PostgresqlHostConfig14_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        tempFileLimit?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        cursorTupleFraction?: number | undefined;
        fromCollapseLimit?: number | undefined;
        joinCollapseLimit?: number | undefined;
        logMinDurationStatement?: number | undefined;
        logCheckpoints?: boolean | undefined;
        logConnections?: boolean | undefined;
        logDisconnections?: boolean | undefined;
        logDuration?: boolean | undefined;
        logLockWaits?: boolean | undefined;
        logTempFiles?: number | undefined;
        rowSecurity?: boolean | undefined;
        statementTimeout?: number | undefined;
        lockTimeout?: number | undefined;
        idleInTransactionSessionTimeout?: number | undefined;
        ginPendingListLimit?: number | undefined;
        deadlockTimeout?: number | undefined;
        maxLocksPerTransaction?: number | undefined;
        maxPredLocksPerTransaction?: number | undefined;
        arrayNulls?: boolean | undefined;
        defaultWithOids?: boolean | undefined;
        escapeStringWarning?: boolean | undefined;
        loCompatPrivileges?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        enableBitmapscan?: boolean | undefined;
        enableHashagg?: boolean | undefined;
        enableHashjoin?: boolean | undefined;
        enableIndexscan?: boolean | undefined;
        enableIndexonlyscan?: boolean | undefined;
        enableMaterial?: boolean | undefined;
        enableMergejoin?: boolean | undefined;
        enableNestloop?: boolean | undefined;
        enableSeqscan?: boolean | undefined;
        enableSort?: boolean | undefined;
        enableTidscan?: boolean | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        recoveryMinApplyDelay?: number | undefined;
    } & {
        timezone?: string | undefined;
        logStatement?: PostgresqlHostConfig14_LogStatement | undefined;
        logErrorVerbosity?: PostgresqlHostConfig14_LogErrorVerbosity | undefined;
        constraintExclusion?: PostgresqlHostConfig14_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlHostConfig14_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlHostConfig14_LogLevel | undefined;
        logMinMessages?: PostgresqlHostConfig14_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlHostConfig14_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlHostConfig14_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlHostConfig14_ByteaOutput | undefined;
        xmlbinary?: PostgresqlHostConfig14_XmlBinary | undefined;
        xmloption?: PostgresqlHostConfig14_XmlOption | undefined;
        backslashQuote?: PostgresqlHostConfig14_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        tempFileLimit?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        cursorTupleFraction?: number | undefined;
        fromCollapseLimit?: number | undefined;
        joinCollapseLimit?: number | undefined;
        logMinDurationStatement?: number | undefined;
        logCheckpoints?: boolean | undefined;
        logConnections?: boolean | undefined;
        logDisconnections?: boolean | undefined;
        logDuration?: boolean | undefined;
        logLockWaits?: boolean | undefined;
        logTempFiles?: number | undefined;
        rowSecurity?: boolean | undefined;
        statementTimeout?: number | undefined;
        lockTimeout?: number | undefined;
        idleInTransactionSessionTimeout?: number | undefined;
        ginPendingListLimit?: number | undefined;
        deadlockTimeout?: number | undefined;
        maxLocksPerTransaction?: number | undefined;
        maxPredLocksPerTransaction?: number | undefined;
        arrayNulls?: boolean | undefined;
        defaultWithOids?: boolean | undefined;
        escapeStringWarning?: boolean | undefined;
        loCompatPrivileges?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        enableBitmapscan?: boolean | undefined;
        enableHashagg?: boolean | undefined;
        enableHashjoin?: boolean | undefined;
        enableIndexscan?: boolean | undefined;
        enableIndexonlyscan?: boolean | undefined;
        enableMaterial?: boolean | undefined;
        enableMergejoin?: boolean | undefined;
        enableNestloop?: boolean | undefined;
        enableSeqscan?: boolean | undefined;
        enableSort?: boolean | undefined;
        enableTidscan?: boolean | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        recoveryMinApplyDelay?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timezone" | "logStatement" | "logErrorVerbosity" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "tempFileLimit" | "backendFlushAfter" | "oldSnapshotThreshold" | "maxStandbyStreamingDelay" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "effectiveIoConcurrency" | "effectiveCacheSize" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "recoveryMinApplyDelay">, never>>(object: I): PostgresqlHostConfig14;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
