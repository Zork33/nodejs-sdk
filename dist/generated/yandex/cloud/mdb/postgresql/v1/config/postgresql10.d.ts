import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface PostgresqlConfig10 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10";
    maxConnections?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    maxPreparedTransactions?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    maintenanceWorkMem?: number;
    replacementSortTuples?: number;
    /** in bytes. */
    autovacuumWorkMem?: number;
    /** in bytes. */
    tempFileLimit?: number;
    /** in milliseconds. */
    vacuumCostDelay?: number;
    vacuumCostPageHit?: number;
    vacuumCostPageMiss?: number;
    vacuumCostPageDirty?: number;
    vacuumCostLimit?: number;
    /** in milliseconds. */
    bgwriterDelay?: number;
    bgwriterLruMaxpages?: number;
    bgwriterLruMultiplier?: number;
    bgwriterFlushAfter?: number;
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    walLevel: PostgresqlConfig10_WalLevel;
    synchronousCommit: PostgresqlConfig10_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout?: number;
    checkpointCompletionTarget?: number;
    checkpointFlushAfter?: number;
    /** in bytes. */
    maxWalSize?: number;
    /** in bytes. */
    minWalSize?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    defaultStatisticsTarget?: number;
    constraintExclusion: PostgresqlConfig10_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: PostgresqlConfig10_ForceParallelMode;
    clientMinMessages: PostgresqlConfig10_LogLevel;
    logMinMessages: PostgresqlConfig10_LogLevel;
    logMinErrorStatement: PostgresqlConfig10_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: PostgresqlConfig10_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: PostgresqlConfig10_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: PostgresqlConfig10_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: PostgresqlConfig10_ByteaOutput;
    xmlbinary: PostgresqlConfig10_XmlBinary;
    xmloption: PostgresqlConfig10_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: PostgresqlConfig10_BackslashQuote;
    defaultWithOids?: boolean;
    escapeStringWarning?: boolean;
    loCompatPrivileges?: boolean;
    operatorPrecedenceWarning?: boolean;
    quoteAllIdentifiers?: boolean;
    standardConformingStrings?: boolean;
    synchronizeSeqscans?: boolean;
    transformNullEquals?: boolean;
    exitOnError?: boolean;
    seqPageCost?: number;
    randomPageCost?: number;
    autovacuumMaxWorkers?: number;
    autovacuumVacuumCostDelay?: number;
    autovacuumVacuumCostLimit?: number;
    /** in milliseconds. */
    autovacuumNaptime?: number;
    /** in milliseconds. */
    archiveTimeout?: number;
    trackActivityQuerySize?: number;
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
    maxWorkerProcesses?: number;
    maxParallelWorkers?: number;
    maxParallelWorkersPerGather?: number;
    autovacuumVacuumScaleFactor?: number;
    autovacuumAnalyzeScaleFactor?: number;
    defaultTransactionReadOnly?: boolean;
    timezone: string;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
    sharedPreloadLibraries: PostgresqlConfig10_SharedPreloadLibraries[];
    /** in milliseconds. */
    autoExplainLogMinDuration?: number;
    autoExplainLogAnalyze?: boolean;
    autoExplainLogBuffers?: boolean;
    autoExplainLogTiming?: boolean;
    autoExplainLogTriggers?: boolean;
    autoExplainLogVerbose?: boolean;
    autoExplainLogNestedStatements?: boolean;
    autoExplainSampleRate?: number;
    pgHintPlanEnableHint?: boolean;
    pgHintPlanEnableHintTable?: boolean;
    pgHintPlanDebugPrint: PostgresqlConfig10_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: PostgresqlConfig10_LogLevel;
    pgQualstatsEnabled?: boolean;
    pgQualstatsTrackConstants?: boolean;
    pgQualstatsMax?: number;
    pgQualstatsResolveOids?: boolean;
    pgQualstatsSampleRate?: number;
    /** in bytes. */
    maxStackDepth?: number;
    /** enable Genetic Query Optimizer, by default is on */
    geqo?: boolean;
    /** The number of tables to use geqo, default is 12 */
    geqoThreshold?: number;
    /** tradeoff between planning time and query plan quality, default is 5 */
    geqoEffort?: number;
    /** initial value of the random number generator used by GEQO */
    geqoSeed?: number;
}
export declare enum PostgresqlConfig10_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_WalLevelFromJSON(object: any): PostgresqlConfig10_WalLevel;
export declare function postgresqlConfig10_WalLevelToJSON(object: PostgresqlConfig10_WalLevel): string;
export declare enum PostgresqlConfig10_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_SynchronousCommitFromJSON(object: any): PostgresqlConfig10_SynchronousCommit;
export declare function postgresqlConfig10_SynchronousCommitToJSON(object: PostgresqlConfig10_SynchronousCommit): string;
export declare enum PostgresqlConfig10_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_ConstraintExclusionFromJSON(object: any): PostgresqlConfig10_ConstraintExclusion;
export declare function postgresqlConfig10_ConstraintExclusionToJSON(object: PostgresqlConfig10_ConstraintExclusion): string;
export declare enum PostgresqlConfig10_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_ForceParallelModeFromJSON(object: any): PostgresqlConfig10_ForceParallelMode;
export declare function postgresqlConfig10_ForceParallelModeToJSON(object: PostgresqlConfig10_ForceParallelMode): string;
export declare enum PostgresqlConfig10_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig10_LogErrorVerbosity;
export declare function postgresqlConfig10_LogErrorVerbosityToJSON(object: PostgresqlConfig10_LogErrorVerbosity): string;
export declare enum PostgresqlConfig10_LogLevel {
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
export declare function postgresqlConfig10_LogLevelFromJSON(object: any): PostgresqlConfig10_LogLevel;
export declare function postgresqlConfig10_LogLevelToJSON(object: PostgresqlConfig10_LogLevel): string;
export declare enum PostgresqlConfig10_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_LogStatementFromJSON(object: any): PostgresqlConfig10_LogStatement;
export declare function postgresqlConfig10_LogStatementToJSON(object: PostgresqlConfig10_LogStatement): string;
export declare enum PostgresqlConfig10_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_TransactionIsolationFromJSON(object: any): PostgresqlConfig10_TransactionIsolation;
export declare function postgresqlConfig10_TransactionIsolationToJSON(object: PostgresqlConfig10_TransactionIsolation): string;
export declare enum PostgresqlConfig10_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_ByteaOutputFromJSON(object: any): PostgresqlConfig10_ByteaOutput;
export declare function postgresqlConfig10_ByteaOutputToJSON(object: PostgresqlConfig10_ByteaOutput): string;
export declare enum PostgresqlConfig10_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_XmlBinaryFromJSON(object: any): PostgresqlConfig10_XmlBinary;
export declare function postgresqlConfig10_XmlBinaryToJSON(object: PostgresqlConfig10_XmlBinary): string;
export declare enum PostgresqlConfig10_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_XmlOptionFromJSON(object: any): PostgresqlConfig10_XmlOption;
export declare function postgresqlConfig10_XmlOptionToJSON(object: PostgresqlConfig10_XmlOption): string;
export declare enum PostgresqlConfig10_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_BackslashQuoteFromJSON(object: any): PostgresqlConfig10_BackslashQuote;
export declare function postgresqlConfig10_BackslashQuoteToJSON(object: PostgresqlConfig10_BackslashQuote): string;
export declare enum PostgresqlConfig10_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_PgHintPlanDebugPrintFromJSON(object: any): PostgresqlConfig10_PgHintPlanDebugPrint;
export declare function postgresqlConfig10_PgHintPlanDebugPrintToJSON(object: PostgresqlConfig10_PgHintPlanDebugPrint): string;
export declare enum PostgresqlConfig10_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    SHARED_PRELOAD_LIBRARIES_TIMESCALEDB = 3,
    SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS = 4,
    SHARED_PRELOAD_LIBRARIES_PG_CRON = 5,
    SHARED_PRELOAD_LIBRARIES_PGLOGICAL = 6,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig10_SharedPreloadLibrariesFromJSON(object: any): PostgresqlConfig10_SharedPreloadLibraries;
export declare function postgresqlConfig10_SharedPreloadLibrariesToJSON(object: PostgresqlConfig10_SharedPreloadLibraries): string;
export interface PostgresqlConfigSet10 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10";
    /**
     * Effective settings for a PostgreSQL 10 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: PostgresqlConfig10;
    /** User-defined settings for a PostgreSQL 10 cluster. */
    userConfig?: PostgresqlConfig10;
    /** Default configuration for a PostgreSQL 10 cluster. */
    defaultConfig?: PostgresqlConfig10;
}
export declare const PostgresqlConfig10: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10";
    encode(message: PostgresqlConfig10, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfig10;
    fromJSON(object: any): PostgresqlConfig10;
    toJSON(message: PostgresqlConfig10): unknown;
    fromPartial<I extends {
        timezone?: string | undefined;
        maxConnections?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        logStatement?: PostgresqlConfig10_LogStatement | undefined;
        walLevel?: PostgresqlConfig10_WalLevel | undefined;
        synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
        constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
        logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
        logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
        xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
        xmloption?: PostgresqlConfig10_XmlOption | undefined;
        backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        maintenanceWorkMem?: number | undefined;
        replacementSortTuples?: number | undefined;
        autovacuumWorkMem?: number | undefined;
        tempFileLimit?: number | undefined;
        vacuumCostDelay?: number | undefined;
        vacuumCostPageHit?: number | undefined;
        vacuumCostPageMiss?: number | undefined;
        vacuumCostPageDirty?: number | undefined;
        vacuumCostLimit?: number | undefined;
        bgwriterDelay?: number | undefined;
        bgwriterLruMaxpages?: number | undefined;
        bgwriterLruMultiplier?: number | undefined;
        bgwriterFlushAfter?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        checkpointTimeout?: number | undefined;
        checkpointCompletionTarget?: number | undefined;
        checkpointFlushAfter?: number | undefined;
        maxWalSize?: number | undefined;
        minWalSize?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        defaultStatisticsTarget?: number | undefined;
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
        operatorPrecedenceWarning?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        autovacuumMaxWorkers?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumNaptime?: number | undefined;
        archiveTimeout?: number | undefined;
        trackActivityQuerySize?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
        pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
        pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
        maxWorkerProcesses?: number | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumAnalyzeScaleFactor?: number | undefined;
        defaultTransactionReadOnly?: boolean | undefined;
        autoExplainLogMinDuration?: number | undefined;
        autoExplainLogAnalyze?: boolean | undefined;
        autoExplainLogBuffers?: boolean | undefined;
        autoExplainLogTiming?: boolean | undefined;
        autoExplainLogTriggers?: boolean | undefined;
        autoExplainLogVerbose?: boolean | undefined;
        autoExplainLogNestedStatements?: boolean | undefined;
        autoExplainSampleRate?: number | undefined;
        pgHintPlanEnableHint?: boolean | undefined;
        pgHintPlanEnableHintTable?: boolean | undefined;
        pgQualstatsEnabled?: boolean | undefined;
        pgQualstatsTrackConstants?: boolean | undefined;
        pgQualstatsMax?: number | undefined;
        pgQualstatsResolveOids?: boolean | undefined;
        pgQualstatsSampleRate?: number | undefined;
        maxStackDepth?: number | undefined;
        geqo?: boolean | undefined;
        geqoThreshold?: number | undefined;
        geqoEffort?: number | undefined;
        geqoSeed?: number | undefined;
    } & {
        timezone?: string | undefined;
        maxConnections?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        logStatement?: PostgresqlConfig10_LogStatement | undefined;
        walLevel?: PostgresqlConfig10_WalLevel | undefined;
        synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
        constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
        logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
        logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
        xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
        xmloption?: PostgresqlConfig10_XmlOption | undefined;
        backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        maintenanceWorkMem?: number | undefined;
        replacementSortTuples?: number | undefined;
        autovacuumWorkMem?: number | undefined;
        tempFileLimit?: number | undefined;
        vacuumCostDelay?: number | undefined;
        vacuumCostPageHit?: number | undefined;
        vacuumCostPageMiss?: number | undefined;
        vacuumCostPageDirty?: number | undefined;
        vacuumCostLimit?: number | undefined;
        bgwriterDelay?: number | undefined;
        bgwriterLruMaxpages?: number | undefined;
        bgwriterLruMultiplier?: number | undefined;
        bgwriterFlushAfter?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        checkpointTimeout?: number | undefined;
        checkpointCompletionTarget?: number | undefined;
        checkpointFlushAfter?: number | undefined;
        maxWalSize?: number | undefined;
        minWalSize?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        defaultStatisticsTarget?: number | undefined;
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
        operatorPrecedenceWarning?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        autovacuumMaxWorkers?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumNaptime?: number | undefined;
        archiveTimeout?: number | undefined;
        trackActivityQuerySize?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        sharedPreloadLibraries?: (PostgresqlConfig10_SharedPreloadLibraries[] & PostgresqlConfig10_SharedPreloadLibraries[] & Record<Exclude<keyof I["sharedPreloadLibraries"], "$type" | keyof PostgresqlConfig10_SharedPreloadLibraries[]>, never>) | undefined;
        pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
        pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
        maxWorkerProcesses?: number | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumAnalyzeScaleFactor?: number | undefined;
        defaultTransactionReadOnly?: boolean | undefined;
        autoExplainLogMinDuration?: number | undefined;
        autoExplainLogAnalyze?: boolean | undefined;
        autoExplainLogBuffers?: boolean | undefined;
        autoExplainLogTiming?: boolean | undefined;
        autoExplainLogTriggers?: boolean | undefined;
        autoExplainLogVerbose?: boolean | undefined;
        autoExplainLogNestedStatements?: boolean | undefined;
        autoExplainSampleRate?: number | undefined;
        pgHintPlanEnableHint?: boolean | undefined;
        pgHintPlanEnableHintTable?: boolean | undefined;
        pgQualstatsEnabled?: boolean | undefined;
        pgQualstatsTrackConstants?: boolean | undefined;
        pgQualstatsMax?: number | undefined;
        pgQualstatsResolveOids?: boolean | undefined;
        pgQualstatsSampleRate?: number | undefined;
        maxStackDepth?: number | undefined;
        geqo?: boolean | undefined;
        geqoThreshold?: number | undefined;
        geqoEffort?: number | undefined;
        geqoSeed?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timezone" | "maxConnections" | "maxPreparedTransactions" | "logStatement" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "logErrorVerbosity" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize" | "sharedPreloadLibraries" | "pgHintPlanDebugPrint" | "pgHintPlanMessageLevel" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxWorkerProcesses" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "autovacuumVacuumScaleFactor" | "autovacuumAnalyzeScaleFactor" | "defaultTransactionReadOnly" | "autoExplainLogMinDuration" | "autoExplainLogAnalyze" | "autoExplainLogBuffers" | "autoExplainLogTiming" | "autoExplainLogTriggers" | "autoExplainLogVerbose" | "autoExplainLogNestedStatements" | "autoExplainSampleRate" | "pgHintPlanEnableHint" | "pgHintPlanEnableHintTable" | "pgQualstatsEnabled" | "pgQualstatsTrackConstants" | "pgQualstatsMax" | "pgQualstatsResolveOids" | "pgQualstatsSampleRate" | "maxStackDepth" | "geqo" | "geqoThreshold" | "geqoEffort" | "geqoSeed">, never>>(object: I): PostgresqlConfig10;
};
export declare const PostgresqlConfigSet10: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10";
    encode(message: PostgresqlConfigSet10, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfigSet10;
    fromJSON(object: any): PostgresqlConfigSet10;
    toJSON(message: PostgresqlConfigSet10): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } | undefined;
        userConfig?: {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } | undefined;
        defaultConfig?: {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: (PostgresqlConfig10_SharedPreloadLibraries[] & PostgresqlConfig10_SharedPreloadLibraries[] & Record<Exclude<keyof I["effectiveConfig"]["sharedPreloadLibraries"], "$type" | keyof PostgresqlConfig10_SharedPreloadLibraries[]>, never>) | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "timezone" | "maxConnections" | "maxPreparedTransactions" | "logStatement" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "logErrorVerbosity" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize" | "sharedPreloadLibraries" | "pgHintPlanDebugPrint" | "pgHintPlanMessageLevel" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxWorkerProcesses" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "autovacuumVacuumScaleFactor" | "autovacuumAnalyzeScaleFactor" | "defaultTransactionReadOnly" | "autoExplainLogMinDuration" | "autoExplainLogAnalyze" | "autoExplainLogBuffers" | "autoExplainLogTiming" | "autoExplainLogTriggers" | "autoExplainLogVerbose" | "autoExplainLogNestedStatements" | "autoExplainSampleRate" | "pgHintPlanEnableHint" | "pgHintPlanEnableHintTable" | "pgQualstatsEnabled" | "pgQualstatsTrackConstants" | "pgQualstatsMax" | "pgQualstatsResolveOids" | "pgQualstatsSampleRate" | "maxStackDepth" | "geqo" | "geqoThreshold" | "geqoEffort" | "geqoSeed">, never>) | undefined;
        userConfig?: ({
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: (PostgresqlConfig10_SharedPreloadLibraries[] & PostgresqlConfig10_SharedPreloadLibraries[] & Record<Exclude<keyof I["userConfig"]["sharedPreloadLibraries"], "$type" | keyof PostgresqlConfig10_SharedPreloadLibraries[]>, never>) | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "timezone" | "maxConnections" | "maxPreparedTransactions" | "logStatement" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "logErrorVerbosity" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize" | "sharedPreloadLibraries" | "pgHintPlanDebugPrint" | "pgHintPlanMessageLevel" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxWorkerProcesses" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "autovacuumVacuumScaleFactor" | "autovacuumAnalyzeScaleFactor" | "defaultTransactionReadOnly" | "autoExplainLogMinDuration" | "autoExplainLogAnalyze" | "autoExplainLogBuffers" | "autoExplainLogTiming" | "autoExplainLogTriggers" | "autoExplainLogVerbose" | "autoExplainLogNestedStatements" | "autoExplainSampleRate" | "pgHintPlanEnableHint" | "pgHintPlanEnableHintTable" | "pgQualstatsEnabled" | "pgQualstatsTrackConstants" | "pgQualstatsMax" | "pgQualstatsResolveOids" | "pgQualstatsSampleRate" | "maxStackDepth" | "geqo" | "geqoThreshold" | "geqoEffort" | "geqoSeed">, never>) | undefined;
        defaultConfig?: ({
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: PostgresqlConfig10_SharedPreloadLibraries[] | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & {
            timezone?: string | undefined;
            maxConnections?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            logStatement?: PostgresqlConfig10_LogStatement | undefined;
            walLevel?: PostgresqlConfig10_WalLevel | undefined;
            synchronousCommit?: PostgresqlConfig10_SynchronousCommit | undefined;
            constraintExclusion?: PostgresqlConfig10_ConstraintExclusion | undefined;
            forceParallelMode?: PostgresqlConfig10_ForceParallelMode | undefined;
            clientMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinMessages?: PostgresqlConfig10_LogLevel | undefined;
            logMinErrorStatement?: PostgresqlConfig10_LogLevel | undefined;
            logErrorVerbosity?: PostgresqlConfig10_LogErrorVerbosity | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: PostgresqlConfig10_TransactionIsolation | undefined;
            byteaOutput?: PostgresqlConfig10_ByteaOutput | undefined;
            xmlbinary?: PostgresqlConfig10_XmlBinary | undefined;
            xmloption?: PostgresqlConfig10_XmlOption | undefined;
            backslashQuote?: PostgresqlConfig10_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            operatorPrecedenceWarning?: boolean | undefined;
            quoteAllIdentifiers?: boolean | undefined;
            standardConformingStrings?: boolean | undefined;
            synchronizeSeqscans?: boolean | undefined;
            transformNullEquals?: boolean | undefined;
            exitOnError?: boolean | undefined;
            seqPageCost?: number | undefined;
            randomPageCost?: number | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
            sharedPreloadLibraries?: (PostgresqlConfig10_SharedPreloadLibraries[] & PostgresqlConfig10_SharedPreloadLibraries[] & Record<Exclude<keyof I["defaultConfig"]["sharedPreloadLibraries"], "$type" | keyof PostgresqlConfig10_SharedPreloadLibraries[]>, never>) | undefined;
            pgHintPlanDebugPrint?: PostgresqlConfig10_PgHintPlanDebugPrint | undefined;
            pgHintPlanMessageLevel?: PostgresqlConfig10_LogLevel | undefined;
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
            maxWorkerProcesses?: number | undefined;
            maxParallelWorkers?: number | undefined;
            maxParallelWorkersPerGather?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumAnalyzeScaleFactor?: number | undefined;
            defaultTransactionReadOnly?: boolean | undefined;
            autoExplainLogMinDuration?: number | undefined;
            autoExplainLogAnalyze?: boolean | undefined;
            autoExplainLogBuffers?: boolean | undefined;
            autoExplainLogTiming?: boolean | undefined;
            autoExplainLogTriggers?: boolean | undefined;
            autoExplainLogVerbose?: boolean | undefined;
            autoExplainLogNestedStatements?: boolean | undefined;
            autoExplainSampleRate?: number | undefined;
            pgHintPlanEnableHint?: boolean | undefined;
            pgHintPlanEnableHintTable?: boolean | undefined;
            pgQualstatsEnabled?: boolean | undefined;
            pgQualstatsTrackConstants?: boolean | undefined;
            pgQualstatsMax?: number | undefined;
            pgQualstatsResolveOids?: boolean | undefined;
            pgQualstatsSampleRate?: number | undefined;
            maxStackDepth?: number | undefined;
            geqo?: boolean | undefined;
            geqoThreshold?: number | undefined;
            geqoEffort?: number | undefined;
            geqoSeed?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "timezone" | "maxConnections" | "maxPreparedTransactions" | "logStatement" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "logErrorVerbosity" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize" | "sharedPreloadLibraries" | "pgHintPlanDebugPrint" | "pgHintPlanMessageLevel" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxWorkerProcesses" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "autovacuumVacuumScaleFactor" | "autovacuumAnalyzeScaleFactor" | "defaultTransactionReadOnly" | "autoExplainLogMinDuration" | "autoExplainLogAnalyze" | "autoExplainLogBuffers" | "autoExplainLogTiming" | "autoExplainLogTriggers" | "autoExplainLogVerbose" | "autoExplainLogNestedStatements" | "autoExplainSampleRate" | "pgHintPlanEnableHint" | "pgHintPlanEnableHintTable" | "pgQualstatsEnabled" | "pgQualstatsTrackConstants" | "pgQualstatsMax" | "pgQualstatsResolveOids" | "pgQualstatsSampleRate" | "maxStackDepth" | "geqo" | "geqoThreshold" | "geqoEffort" | "geqoSeed">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): PostgresqlConfigSet10;
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
