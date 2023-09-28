import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
/**
 * A ClickHouse User resource. For more information, see
 * the [Developer's guide](/docs/managed-clickhouse/concepts).
 */
export interface User {
    $type: "yandex.cloud.mdb.clickhouse.v1.User";
    /** Name of the ClickHouse user. */
    name: string;
    /** ID of the ClickHouse cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    settings?: UserSettings;
    /** Set of quotas assigned to the user. */
    quotas: UserQuota[];
}
export interface Permission {
    $type: "yandex.cloud.mdb.clickhouse.v1.Permission";
    /** Name of the database that the permission grants access to. */
    databaseName: string;
}
export interface UserSpec {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec";
    /** Name of the ClickHouse user. */
    name: string;
    /** Password of the ClickHouse user. */
    password: string;
    /** Set of permissions to grant to the user. If not set, it's granted permissions to access all databases. */
    permissions: Permission[];
    settings?: UserSettings;
    /** Set of quotas assigned to the user. */
    quotas: UserQuota[];
}
/**
 * ClickHouse user settings. Supported settings are a limited subset of all settings
 * described in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/).
 */
export interface UserSettings {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings";
    /**
     * Restricts permissions for non-DDL queries. To restrict permissions for DDL queries, use [allow_ddl] instead.
     * * **0** (default)-no restrictions.
     * * **1**-only read data queries are allowed.
     * * **2**-read data and change settings queries are allowed.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_readonly).
     */
    readonly?: number;
    /**
     * Determines whether DDL queries are allowed (e.g., **CREATE**, **ALTER**, **RENAME**, etc).
     *
     * Default value: **true**.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_allow_ddl).
     */
    allowDdl?: boolean;
    /**
     * Enables or disables write quorum for ClickHouse cluster.
     * If the value is less than **2**, then write quorum is disabled, otherwise it is enabled.
     *
     * When used, write quorum guarantees that ClickHouse has written data to the quorum of **insert_quorum** replicas with no errors until the [insert_quorum_timeout] expires.
     * All replicas in the quorum are in the consistent state, meaning that they contain linearized data from the previous **INSERT** queries.
     * Employ write quorum, if you need the guarantees that the written data would not be lost in case of one or more replicas failure.
     *
     * You can use [select_sequential_consistency] setting to read the data written with write quorum.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum).
     */
    insertQuorum?: number;
    /**
     * Connection timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **10000**, 10 seconds).
     */
    connectTimeout?: number;
    /**
     * Receive timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
     */
    receiveTimeout?: number;
    /**
     * Send timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
     */
    sendTimeout?: number;
    /**
     * Quorum write timeout in milliseconds.
     *
     * If the write quorum is enabled in the cluster, this timeout expires and some data is not written to the [insert_quorum] replicas, then ClickHouse will abort the execution of **INSERT** query and return an error.
     * In this case, the client must send the query again to write the data block into the same or another replica.
     *
     * Minimum value: **1000**, 1 second (default: **60000**, 1 minute).
     */
    insertQuorumTimeout?: number;
    /**
     * Determines the behavior of **SELECT** queries from the replicated table: if enabled, ClickHouse will terminate a query with error message in case the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
     *
     * Default value: **false** (sequential consistency is disabled).
     */
    selectSequentialConsistency?: boolean;
    /**
     * Max replica delay in milliseconds. If a replica lags more than the set value, this replica is not used and becomes a stale one.
     *
     * Minimum value: **1000**, 1 second (default: **300000**, 300 seconds or 5 minutes).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_replica_delay_for_distributed_queries).
     */
    maxReplicaDelayForDistributedQueries?: number;
    /**
     * Enables or disables query forcing to a stale replica in case the actual data is unavailable.
     * If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
     * This setting can be used when doing **SELECT** query from a distributed table that points to replicated tables.
     *
     * Default value: **true** (query forcing is enabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-fallback_to_stale_replicas_for_distributed_queries).
     */
    fallbackToStaleReplicasForDistributedQueries?: boolean;
    /**
     * Wait mode for asynchronous actions in **ALTER** queries on replicated tables:
     *
     * * **0**-do not wait for replicas.
     * * **1**-only wait for own execution (default).
     * * **2**-wait for all replicas.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries).
     */
    replicationAlterPartitionsSync?: number;
    /**
     * Determine the behavior of distributed subqueries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#distributed-product-mode).
     */
    distributedProductMode: UserSettings_DistributedProductMode;
    /**
     * Enables of disables memory saving mode when doing distributed aggregation.
     *
     * When ClickHouse works with a distributed query, external aggregation is done on remote servers.
     * Enable this setting to achieve a smaller memory footprint on the server that sourced such a distributed query.
     *
     * Default value: **false** (memory saving mode is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
     */
    distributedAggregationMemoryEfficient?: boolean;
    /** Timeout for DDL queries, in milliseconds. */
    distributedDdlTaskTimeout?: number;
    /**
     * Enables or disables silent skipping of unavailable shards.
     *
     * A shard is considered unavailable if all its replicas are also unavailable.
     *
     * Default value: **false** (silent skipping is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-skip_unavailable_shards).
     */
    skipUnavailableShards?: boolean;
    /**
     * Enables or disables query compilation.
     * If you execute a lot of structurally identical queries, then enable this setting.
     * As a result, such queries may be executed faster due to use of queries' compiled parts.
     *
     * Use this setting in combination with [min_count_to_compile] setting.
     *
     * Default value: **false** (compilation is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#compile).
     */
    compile?: boolean;
    /**
     * How many structurally identical queries ClickHouse has to encounter before they are compiled.
     *
     * Minimum value: **0** (default: **3**).
     *
     * For the **0** value compilation is synchronous: a query waits for compilation process to complete prior to continuing execution.
     * It is recommended to set this value only for testing purposes.
     *
     * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
     * When a compiled part of query is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#min-count-to-compile).
     */
    minCountToCompile?: number;
    /**
     * Enables or disables expression compilation.
     * If you execute a lot of queries that contain identical expressions, then enable this setting.
     * As a result, such queries may be executed faster due to use of compiled expressions.
     *
     * Use this setting in combination with [min_count_to_compile_expression] setting.
     *
     * Default value: **false** (expression compilation is disabled).
     */
    compileExpressions?: boolean;
    /**
     * How many identical expressions ClickHouse has to encounter before they are compiled.
     *
     * Minimum value: **0** (default: **3**).
     *
     * For the **0** value compilation is synchronous: a query waits for expression compilation process to complete prior to continuing execution.
     * It is recommended to set this value only for testing purposes.
     *
     * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
     * When a compiled expression is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
     */
    minCountToCompileExpression?: number;
    /**
     * The maximum block size for reading.
     *
     * Data in ClickHouse is organized and processed by blocks (block is a set of columns' parts).
     * The internal processing cycles for a single block are efficient enough, but there are noticeable expenditures on each block.
     *
     * This setting is a recommendation for size of block (in a count of rows) that should be loaded from tables.
     *
     * Value must be greater than **0** (default: **65536**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_block_size).
     */
    maxBlockSize?: number;
    /**
     * Limits the minimum number of rows in a block to be inserted in a table by **INSERT** query.
     * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
     *
     * Minimal value: **0**, block squashing is disabled (default: **1048576**).
     */
    minInsertBlockSizeRows?: number;
    /**
     * Limits the minimum number of bytes in a block to be inserted in a table by **INSERT** query.
     * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
     *
     * Minimal value: **0**, block squashing is disabled (default: **268435456**, 256 MB).
     */
    minInsertBlockSizeBytes?: number;
    /**
     * Allows to form blocks of the specified size (in bytes) when inserting data in a table.
     * This setting has effect only if server is creating such blocks by itself.
     *
     * Value must be greater than **0** (default: **1048576**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_insert_block_size).
     */
    maxInsertBlockSize?: number;
    /**
     * Limits the minimum number of bytes to enable unbuffered direct reads from disk (Direct I/O).
     *
     * By default, ClickHouse does not read data directly from disk, but relies on the filesystem and its cache instead.
     * Such reading strategy is effective when the data volume is small.
     * If the amount of the data to read is huge, it is more effective to read directly from the disk, bypassing the filesystem cache.
     *
     * If the total amount of the data to read is greater than the value of this setting, then ClickHouse will fetch this data directly from the disk.
     *
     * Minimal value and default value: **0**, Direct I/O is disabled.
     */
    minBytesToUseDirectIo?: number;
    /**
     * Determines whether to use the cache of uncompressed blocks, or not.
     * Using this cache can significantly reduce latency and increase the throughput when a huge amount of small queries is to be processed.
     * Enable this setting for the users who instantiates small queries frequently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (uncompressed cache is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-use_uncompressed_cache).
     */
    useUncompressedCache?: boolean;
    /**
     * Limits the maximum size in rows of the request that can use the cache of uncompressed data. The cache is not used for requests larger
     * than the specified value.
     *
     * Use this setting in combination with [use_uncompressed_cache] setting.
     *
     * Value must be greater than **0** (default: **128x8192**).
     */
    mergeTreeMaxRowsToUseCache?: number;
    /**
     * Limits the maximum size in bytes of the request that can use the cache of uncompressed data. The cache is not used for requests larger
     * than the specified value.
     *
     * Use this setting in combination with [use_uncompressed_cache] setting.
     *
     * Value must be greater than **0** (default: **192x10x1024x1024**).
     */
    mergeTreeMaxBytesToUseCache?: number;
    /**
     * Limits the minimum number of rows to be read from a file to enable concurrent read.
     * If the number of rows to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Value must be greater than **0** (default: **20x8192**).
     */
    mergeTreeMinRowsForConcurrentRead?: number;
    /**
     * Limits the number of bytes to be read from a file to enable concurrent read.
     * If the number of bytes to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Value must be greater than **0** (default: **24x10x1024x1024**).
     */
    mergeTreeMinBytesForConcurrentRead?: number;
    /**
     * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **GROUP BY** operation, should be flushed to disk to limit the RAM comsumption.
     *
     * By default, aggregation is done by employing hash table that resides in RAM.
     * A query can result in aggregation of huge data volumes that can lead to memory exhaustion and abortion of the query (see the [max_memory_usage] setting).
     * For such queries, you can use this setting to force ClickHouse to do flushing and complete aggregation successfully.
     *
     * Minimal value and default value: **0**, **GROUP BY** in the external memory is disabled.
     *
     * When using aggregation in external memory, it is recommended to set the value of this setting twice as low as the [max_memory_usage] setting value (by default, the maximum memory usage is limited to ten gigabytes).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
     *
     * See also: the [distributed_aggregation_memory_efficient] setting.
     */
    maxBytesBeforeExternalGroupBy?: number;
    /** This setting is equivalent of the [max_bytes_before_external_group_by] setting, except for it is for sort operation (**ORDER BY**), not aggregation. */
    maxBytesBeforeExternalSort?: number;
    /**
     * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
     *
     * Minimal value: **0**, threshold is not set (default: **10000**).
     */
    groupByTwoLevelThreshold?: number;
    /**
     * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
     *
     * Minimal value: **0**, threshold is not set (default: **100000000**).
     */
    groupByTwoLevelThresholdBytes?: number;
    /**
     * Sets the priority of a query.
     *
     * * **0**-priority is not used.
     * * **1**-the highest priority.
     * * and so on. The higher the number, the lower a query's priority.
     *
     * This setting should be set up for each query individually.
     *
     * If ClickHouse is working with the high-priority queries, and a low-priority query enters, then the low-priority query is paused until higher-priority queries are completed.
     *
     * Minimal value and default value: **0**, priority is not used.
     */
    priority?: number;
    /**
     * Limits the maximum number of threads to process the request (setting does not take threads that read data from remote servers into account).
     *
     * This setting applies to threads that perform the same stages of the query processing pipeline in parallel.
     *
     * Minimal value and default value: **0** (the thread number is calculated automatically based on the number of physical CPU cores, no HyperThreading cores are taken into account).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads).
     */
    maxThreads?: number;
    /**
     * Limits the maximum memory usage (in bytes) for processing of a single user's query on a single server.
     * This setting does not take server's free RAM amount or total RAM amount into account.
     *
     * This limitation is enforced for any user's single query on a single server.
     *
     * Minimal value: **0**, no limitation is set.
     * Value that is set in the ClickHouse default config file: **10737418240** (10 GB).
     *
     * If you use [max_bytes_before_external_group_by] or [max_bytes_before_external_sort] setting, then it is recommended to set their values twice as low as [max_memory_usage] setting value.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#settings_max_memory_usage).
     */
    maxMemoryUsage?: number;
    /**
     * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server.
     * This setting does not take server's free RAM amount or total RAM amount into account.
     *
     * This limitation is enforced for all queries that belong to one user and run simultaneously on a single server.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxMemoryUsageForUser?: number;
    /**
     * The maximum speed of data exchange over the network in bytes per second for a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxNetworkBandwidth?: number;
    /**
     * The maximum speed of data exchange over the network in bytes per second for all concurrently running user queries.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxNetworkBandwidthForUser?: number;
    /**
     * If enabled, query is not executed if the ClickHouse can't use index by date.
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by date).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-force_index_by_date).
     */
    forceIndexByDate?: boolean;
    /**
     * If enabled, query is not executed if the ClickHouse can't use index by primary key.
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by primary key).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#force-primary-key).
     */
    forcePrimaryKey?: boolean;
    /**
     * Limits the maximum number of rows that can be read from a table when running a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-rows-to-read).
     */
    maxRowsToRead?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToRead?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while reading the data.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    readOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of unique keys received from aggregation function.
     * This setting helps to reduce RAM consumption while doing aggregation.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToGroupBy?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing aggregation.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     * * **any**-perform approximate **GROUP BY** operation by continuing aggregation for the keys that got into the set, but don't add new keys to the set.
     */
    groupByOverflowMode: UserSettings_GroupByOverflowMode;
    /**
     * Limits the maximum number of rows that can be read from a table for sorting.
     * This setting helps to reduce RAM consumption.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToSort?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
     * This setting helps to reduce RAM consumption.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToSort?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while sorting.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    sortOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the number of rows in the result.
     * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxResultRows?: number;
    /**
     * Limits the number of bytes in the result.
     * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxResultBytes?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while forming result.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    resultOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of different rows when using **DISTINCT**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsInDistinct?: number;
    /** Limits the maximum size of a hash table in bytes (uncompressed data) when using **DISTINCT**. */
    maxBytesInDistinct?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing **DISCTINCT**.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    distinctOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToTransfer?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary
     * table when using **GLOBAL IN**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToTransfer?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing transfers.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    transferOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum query execution time in milliseconds.
     * At this moment, this limitation is not checked when passing one of the sorting stages, as well as merging and finalizing aggregation funictions.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxExecutionTime?: number;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) of execution time.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    timeoutOverflowMode: UserSettings_OverflowMode;
    /** Limit on the number of rows in the set resulting from the execution of the IN section. */
    maxRowsInSet?: number;
    /** Limit on the number of bytes in the set resulting from the execution of the IN section. */
    maxBytesInSet?: number;
    /**
     * Determine the behavior on exceeding max_rows_in_set or max_bytes_in_set limit.
     * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
     */
    setOverflowMode: UserSettings_OverflowMode;
    /** Limit on maximum size of the hash table for JOIN, in rows. */
    maxRowsInJoin?: number;
    /** Limit on maximum size of the hash table for JOIN, in bytes. */
    maxBytesInJoin?: number;
    /**
     * Determine the behavior on exceeding max_rows_in_join or max_bytes_in_join limit.
     * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
     */
    joinOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of columns that can be read from a table in a single query.
     * If the query requires to read more columns to complete, then it will be aborted.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxColumnsToRead?: number;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxTemporaryColumns?: number;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxTemporaryNonConstColumns?: number;
    /**
     * Limits the size of the part of a query that can be transferred to RAM for parsing with the SQL parser, in bytes.
     *
     * Value must be greater than **0** (default: **262144**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_query_size).
     */
    maxQuerySize?: number;
    /**
     * Limits the maximum depth of query syntax tree.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous depth.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * For example, the **SELECT *** query may result in more complex and deeper syntax tree, compared to the **SELECT ... WHERE ...** query, containing constraints and conditions, in the most cases.
     * A user can be forced to construct more optimized queries, if this setting is used.
     *
     * Value must be greater than **0** (default: **1000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-depth).
     */
    maxAstDepth?: number;
    /**
     * Limits the maximum size of query syntax tree in number of nodes.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Value must be greater than **0** (default: **50000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-elements).
     */
    maxAstElements?: number;
    /**
     * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Value must be greater than **0** (default: **500000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     */
    maxExpandedAstElements?: number;
    /** Minimal execution speed in rows per second. */
    minExecutionSpeed?: number;
    /** Minimal execution speed in bytes per second. */
    minExecutionSpeedBytes?: number;
    /** Aggregate function to use for implementation of count(DISTINCT ...). */
    countDistinctImplementation: UserSettings_CountDistinctImplementation;
    /**
     * Enables or disables SQL parser if the fast stream parser cannot parse the data.
     *
     * Enable this setting, if the data that you want to insert into a table contains SQL expressions.
     *
     * For example, the stream parser is unable to parse a value that contains **now()** expression; therefore an **INSERT** query for this value will fail and no data will be inserted into a table.
     * With enabled SQL parser, this expression is parsed correctly: the **now()** expression will be parsed as SQL function, interpreted, and the current date and time will be inserted into the table as a result.
     *
     * This setting has effect only if you use [Values](https://clickhouse.com/docs/en/interfaces/formats/#data-format-values) format when inserting data.
     *
     * Default value: **true** (SQL parser is enabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-input_format_values_interpret_expressions).
     */
    inputFormatValuesInterpretExpressions?: boolean;
    /**
     * Enables or disables replacing omitted input values with default values of the respective columns when performing **INSERT** queries.
     *
     * Default value: **true** (replacing is enabled).
     */
    inputFormatDefaultsForOmittedFields?: boolean;
    /**
     * Enables quoting of 64-bit integers in JSON output format.
     *
     * If this setting is enabled, then 64-bit integers (**UInt64** and **Int64**) will be quoted when written to JSON output in order to maintain compatibility with the most of the JavaScript engines.
     * Otherwise, such integers will not be quoted.
     *
     * Default value: **false** (quoting 64-bit integers is disabled).
     */
    outputFormatJsonQuote64bitIntegers?: boolean;
    /**
     * Enables special floating-point values (**+nan**, **-nan**, **+inf** and **-inf**) in JSON output format.
     *
     * Default value: **false** (special values do not present in output).
     */
    outputFormatJsonQuoteDenormals?: boolean;
    /**
     * Determines whether to use LowCardinality type in Native format.
     *
     * * **true** (default)-yes, use.
     * * **false**-convert LowCardinality columns to regular columns when doing **SELECT**, and convert regular columns to LowCardinality when doing **INSERT**.
     *
     * LowCardinality columns (aka sparse columns) store data in more effective way, compared to regular columns, by using hash tables.
     * If data to insert suits this storage format, ClickHouse will place them into LowCardinality column.
     *
     * If you use a third-party ClickHouse client that can't work with LowCardinality columns, then this client will not be able to correctly interpret the result of the query that asks for data stored in LowCardinality column.
     * Disable this setting to convert LowCardinality column to regular column when creating the result, so such clients will be able to process the result.
     *
     * Official ClickHouse client works with LowCardinality columns out-of-the-box.
     *
     * Default value: **true** (LowCardinality columns are used in Native format).
     */
    lowCardinalityAllowInNativeFormat?: boolean;
    /**
     * Enables returning of empty result when aggregating without keys (with **GROUP BY** operation absent) on empty set (e.g., **SELECT count(*) FROM table WHERE 0**).
     *
     * * **true**-ClickHouse will return an empty result for such queries.
     * * **false** (default)-ClickHouse will return a single-line result consisting of **NULL** values for aggregation functions, in accordance with SQL standard.
     */
    emptyResultForAggregationByEmptySet?: boolean;
    joinedSubqueryRequiresAlias?: boolean;
    joinUseNulls?: boolean;
    transformNullIn?: boolean;
    /**
     * HTTP connection timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1000**, 1 second).
     */
    httpConnectionTimeout?: number;
    /**
     * HTTP receive timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
     */
    httpReceiveTimeout?: number;
    /**
     * HTTP send timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
     */
    httpSendTimeout?: number;
    /**
     * Enables or disables data compression in HTTP responses.
     *
     * By default, ClickHouse stores data compressed. When executing a query, its result is uncompressed.
     * Use this setting to command ClickHouse to compress the result when sending it via HTTP.
     *
     * Enable this setting and add the **Accept-Encoding: <compression method>** HTTP header in a HTTP request to force compression of HTTP response from ClickHouse.
     *
     * ClickHouse support the following compression methods: **gzip**, **br** and **deflate**.
     *
     * Default value: **false** (compression is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/interfaces/http/).
     */
    enableHttpCompression?: boolean;
    /**
     * Enables progress notifications using **X-ClickHouse-Progress** HTTP header.
     *
     * Default value: **false** (notifications disabled).
     */
    sendProgressInHttpHeaders?: boolean;
    /**
     * Minimum interval between progress notifications with **X-ClickHouse-Progress** HTTP header, in milliseconds.
     *
     * Value must be greater than **0** (default: **100**).
     */
    httpHeadersProgressInterval?: number;
    /**
     * Adds CORS header in HTTP responses.
     *
     * Default value: **false** (header is not added).
     */
    addHttpCorsHeader?: boolean;
    /** Quota accounting mode. Possible values: QUOTA_MODE_DEFAULT, QUOTA_MODE_KEYED and QUOTA_MODE_KEYED_BY_IP. */
    quotaMode: UserSettings_QuotaMode;
}
export declare enum UserSettings_OverflowMode {
    OVERFLOW_MODE_UNSPECIFIED = 0,
    OVERFLOW_MODE_THROW = 1,
    OVERFLOW_MODE_BREAK = 2,
    UNRECOGNIZED = -1
}
export declare function userSettings_OverflowModeFromJSON(object: any): UserSettings_OverflowMode;
export declare function userSettings_OverflowModeToJSON(object: UserSettings_OverflowMode): string;
export declare enum UserSettings_GroupByOverflowMode {
    GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
    GROUP_BY_OVERFLOW_MODE_THROW = 1,
    GROUP_BY_OVERFLOW_MODE_BREAK = 2,
    GROUP_BY_OVERFLOW_MODE_ANY = 3,
    UNRECOGNIZED = -1
}
export declare function userSettings_GroupByOverflowModeFromJSON(object: any): UserSettings_GroupByOverflowMode;
export declare function userSettings_GroupByOverflowModeToJSON(object: UserSettings_GroupByOverflowMode): string;
export declare enum UserSettings_DistributedProductMode {
    DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
    /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
    DISTRIBUTED_PRODUCT_MODE_DENY = 1,
    /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
    DISTRIBUTED_PRODUCT_MODE_LOCAL = 2,
    /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
    DISTRIBUTED_PRODUCT_MODE_GLOBAL = 3,
    /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
    DISTRIBUTED_PRODUCT_MODE_ALLOW = 4,
    UNRECOGNIZED = -1
}
export declare function userSettings_DistributedProductModeFromJSON(object: any): UserSettings_DistributedProductMode;
export declare function userSettings_DistributedProductModeToJSON(object: UserSettings_DistributedProductMode): string;
export declare enum UserSettings_QuotaMode {
    QUOTA_MODE_UNSPECIFIED = 0,
    QUOTA_MODE_DEFAULT = 1,
    QUOTA_MODE_KEYED = 2,
    QUOTA_MODE_KEYED_BY_IP = 3,
    UNRECOGNIZED = -1
}
export declare function userSettings_QuotaModeFromJSON(object: any): UserSettings_QuotaMode;
export declare function userSettings_QuotaModeToJSON(object: UserSettings_QuotaMode): string;
export declare enum UserSettings_CountDistinctImplementation {
    COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
    UNRECOGNIZED = -1
}
export declare function userSettings_CountDistinctImplementationFromJSON(object: any): UserSettings_CountDistinctImplementation;
export declare function userSettings_CountDistinctImplementationToJSON(object: UserSettings_CountDistinctImplementation): string;
/**
 * ClickHouse quota representation. Each quota associated with an user and limits it resource usage for an interval.
 * See in-depth description [ClickHouse documentation](https://clickhouse.com/docs/en/operations/quotas/).
 */
export interface UserQuota {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota";
    /**
     * Duration of interval for quota in milliseconds.
     * Minimal value is 1 second.
     */
    intervalDuration?: number;
    /**
     * The total number of queries.
     * 0 - unlimited.
     */
    queries?: number;
    /**
     * The number of queries that threw exception.
     * 0 - unlimited.
     */
    errors?: number;
    /**
     * The total number of rows given as the result..
     * 0 - unlimited.
     */
    resultRows?: number;
    /**
     * The total number of source rows read from tables for running the query, on all remote servers.
     * 0 - unlimited.
     */
    readRows?: number;
    /**
     * The total query execution time, in milliseconds (wall time).
     * 0 - unlimited.
     */
    executionTime?: number;
}
export declare const User: {
    $type: "yandex.cloud.mdb.clickhouse.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        settings?: {
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } | undefined;
        permissions?: {
            databaseName?: string | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
        quotas?: {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        settings?: ({
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } & {
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "priority" | "readonly" | "allowDdl" | "insertQuorum" | "connectTimeout" | "receiveTimeout" | "sendTimeout" | "insertQuorumTimeout" | "selectSequentialConsistency" | "maxReplicaDelayForDistributedQueries" | "fallbackToStaleReplicasForDistributedQueries" | "replicationAlterPartitionsSync" | "distributedProductMode" | "distributedAggregationMemoryEfficient" | "distributedDdlTaskTimeout" | "skipUnavailableShards" | "compile" | "minCountToCompile" | "compileExpressions" | "minCountToCompileExpression" | "maxBlockSize" | "minInsertBlockSizeRows" | "minInsertBlockSizeBytes" | "maxInsertBlockSize" | "minBytesToUseDirectIo" | "useUncompressedCache" | "mergeTreeMaxRowsToUseCache" | "mergeTreeMaxBytesToUseCache" | "mergeTreeMinRowsForConcurrentRead" | "mergeTreeMinBytesForConcurrentRead" | "maxBytesBeforeExternalGroupBy" | "maxBytesBeforeExternalSort" | "groupByTwoLevelThreshold" | "groupByTwoLevelThresholdBytes" | "maxThreads" | "maxMemoryUsage" | "maxMemoryUsageForUser" | "maxNetworkBandwidth" | "maxNetworkBandwidthForUser" | "forceIndexByDate" | "forcePrimaryKey" | "maxRowsToRead" | "maxBytesToRead" | "readOverflowMode" | "maxRowsToGroupBy" | "groupByOverflowMode" | "maxRowsToSort" | "maxBytesToSort" | "sortOverflowMode" | "maxResultRows" | "maxResultBytes" | "resultOverflowMode" | "maxRowsInDistinct" | "maxBytesInDistinct" | "distinctOverflowMode" | "maxRowsToTransfer" | "maxBytesToTransfer" | "transferOverflowMode" | "maxExecutionTime" | "timeoutOverflowMode" | "maxRowsInSet" | "maxBytesInSet" | "setOverflowMode" | "maxRowsInJoin" | "maxBytesInJoin" | "joinOverflowMode" | "maxColumnsToRead" | "maxTemporaryColumns" | "maxTemporaryNonConstColumns" | "maxQuerySize" | "maxAstDepth" | "maxAstElements" | "maxExpandedAstElements" | "minExecutionSpeed" | "minExecutionSpeedBytes" | "countDistinctImplementation" | "inputFormatValuesInterpretExpressions" | "inputFormatDefaultsForOmittedFields" | "outputFormatJsonQuote64bitIntegers" | "outputFormatJsonQuoteDenormals" | "lowCardinalityAllowInNativeFormat" | "emptyResultForAggregationByEmptySet" | "joinedSubqueryRequiresAlias" | "joinUseNulls" | "transformNullIn" | "httpConnectionTimeout" | "httpReceiveTimeout" | "httpSendTimeout" | "enableHttpCompression" | "sendProgressInHttpHeaders" | "httpHeadersProgressInterval" | "addHttpCorsHeader" | "quotaMode">, never>) | undefined;
        permissions?: ({
            databaseName?: string | undefined;
        }[] & ({
            databaseName?: string | undefined;
        } & {
            databaseName?: string | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
        quotas?: ({
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[] & ({
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        } & {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        } & Record<Exclude<keyof I["quotas"][number], "$type" | "queries" | "errors" | "intervalDuration" | "resultRows" | "readRows" | "executionTime">, never>)[] & Record<Exclude<keyof I["quotas"], "$type" | keyof {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "settings" | "permissions" | "clusterId" | "quotas">, never>>(object: I): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
    } & {
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName">, never>>(object: I): Permission;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        settings?: {
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } | undefined;
        permissions?: {
            databaseName?: string | undefined;
        }[] | undefined;
        password?: string | undefined;
        quotas?: {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        settings?: ({
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } & {
            priority?: number | undefined;
            readonly?: number | undefined;
            allowDdl?: boolean | undefined;
            insertQuorum?: number | undefined;
            connectTimeout?: number | undefined;
            receiveTimeout?: number | undefined;
            sendTimeout?: number | undefined;
            insertQuorumTimeout?: number | undefined;
            selectSequentialConsistency?: boolean | undefined;
            maxReplicaDelayForDistributedQueries?: number | undefined;
            fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
            replicationAlterPartitionsSync?: number | undefined;
            distributedProductMode?: UserSettings_DistributedProductMode | undefined;
            distributedAggregationMemoryEfficient?: boolean | undefined;
            distributedDdlTaskTimeout?: number | undefined;
            skipUnavailableShards?: boolean | undefined;
            compile?: boolean | undefined;
            minCountToCompile?: number | undefined;
            compileExpressions?: boolean | undefined;
            minCountToCompileExpression?: number | undefined;
            maxBlockSize?: number | undefined;
            minInsertBlockSizeRows?: number | undefined;
            minInsertBlockSizeBytes?: number | undefined;
            maxInsertBlockSize?: number | undefined;
            minBytesToUseDirectIo?: number | undefined;
            useUncompressedCache?: boolean | undefined;
            mergeTreeMaxRowsToUseCache?: number | undefined;
            mergeTreeMaxBytesToUseCache?: number | undefined;
            mergeTreeMinRowsForConcurrentRead?: number | undefined;
            mergeTreeMinBytesForConcurrentRead?: number | undefined;
            maxBytesBeforeExternalGroupBy?: number | undefined;
            maxBytesBeforeExternalSort?: number | undefined;
            groupByTwoLevelThreshold?: number | undefined;
            groupByTwoLevelThresholdBytes?: number | undefined;
            maxThreads?: number | undefined;
            maxMemoryUsage?: number | undefined;
            maxMemoryUsageForUser?: number | undefined;
            maxNetworkBandwidth?: number | undefined;
            maxNetworkBandwidthForUser?: number | undefined;
            forceIndexByDate?: boolean | undefined;
            forcePrimaryKey?: boolean | undefined;
            maxRowsToRead?: number | undefined;
            maxBytesToRead?: number | undefined;
            readOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToGroupBy?: number | undefined;
            groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
            maxRowsToSort?: number | undefined;
            maxBytesToSort?: number | undefined;
            sortOverflowMode?: UserSettings_OverflowMode | undefined;
            maxResultRows?: number | undefined;
            maxResultBytes?: number | undefined;
            resultOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInDistinct?: number | undefined;
            maxBytesInDistinct?: number | undefined;
            distinctOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsToTransfer?: number | undefined;
            maxBytesToTransfer?: number | undefined;
            transferOverflowMode?: UserSettings_OverflowMode | undefined;
            maxExecutionTime?: number | undefined;
            timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInSet?: number | undefined;
            maxBytesInSet?: number | undefined;
            setOverflowMode?: UserSettings_OverflowMode | undefined;
            maxRowsInJoin?: number | undefined;
            maxBytesInJoin?: number | undefined;
            joinOverflowMode?: UserSettings_OverflowMode | undefined;
            maxColumnsToRead?: number | undefined;
            maxTemporaryColumns?: number | undefined;
            maxTemporaryNonConstColumns?: number | undefined;
            maxQuerySize?: number | undefined;
            maxAstDepth?: number | undefined;
            maxAstElements?: number | undefined;
            maxExpandedAstElements?: number | undefined;
            minExecutionSpeed?: number | undefined;
            minExecutionSpeedBytes?: number | undefined;
            countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
            inputFormatValuesInterpretExpressions?: boolean | undefined;
            inputFormatDefaultsForOmittedFields?: boolean | undefined;
            outputFormatJsonQuote64bitIntegers?: boolean | undefined;
            outputFormatJsonQuoteDenormals?: boolean | undefined;
            lowCardinalityAllowInNativeFormat?: boolean | undefined;
            emptyResultForAggregationByEmptySet?: boolean | undefined;
            joinedSubqueryRequiresAlias?: boolean | undefined;
            joinUseNulls?: boolean | undefined;
            transformNullIn?: boolean | undefined;
            httpConnectionTimeout?: number | undefined;
            httpReceiveTimeout?: number | undefined;
            httpSendTimeout?: number | undefined;
            enableHttpCompression?: boolean | undefined;
            sendProgressInHttpHeaders?: boolean | undefined;
            httpHeadersProgressInterval?: number | undefined;
            addHttpCorsHeader?: boolean | undefined;
            quotaMode?: UserSettings_QuotaMode | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "priority" | "readonly" | "allowDdl" | "insertQuorum" | "connectTimeout" | "receiveTimeout" | "sendTimeout" | "insertQuorumTimeout" | "selectSequentialConsistency" | "maxReplicaDelayForDistributedQueries" | "fallbackToStaleReplicasForDistributedQueries" | "replicationAlterPartitionsSync" | "distributedProductMode" | "distributedAggregationMemoryEfficient" | "distributedDdlTaskTimeout" | "skipUnavailableShards" | "compile" | "minCountToCompile" | "compileExpressions" | "minCountToCompileExpression" | "maxBlockSize" | "minInsertBlockSizeRows" | "minInsertBlockSizeBytes" | "maxInsertBlockSize" | "minBytesToUseDirectIo" | "useUncompressedCache" | "mergeTreeMaxRowsToUseCache" | "mergeTreeMaxBytesToUseCache" | "mergeTreeMinRowsForConcurrentRead" | "mergeTreeMinBytesForConcurrentRead" | "maxBytesBeforeExternalGroupBy" | "maxBytesBeforeExternalSort" | "groupByTwoLevelThreshold" | "groupByTwoLevelThresholdBytes" | "maxThreads" | "maxMemoryUsage" | "maxMemoryUsageForUser" | "maxNetworkBandwidth" | "maxNetworkBandwidthForUser" | "forceIndexByDate" | "forcePrimaryKey" | "maxRowsToRead" | "maxBytesToRead" | "readOverflowMode" | "maxRowsToGroupBy" | "groupByOverflowMode" | "maxRowsToSort" | "maxBytesToSort" | "sortOverflowMode" | "maxResultRows" | "maxResultBytes" | "resultOverflowMode" | "maxRowsInDistinct" | "maxBytesInDistinct" | "distinctOverflowMode" | "maxRowsToTransfer" | "maxBytesToTransfer" | "transferOverflowMode" | "maxExecutionTime" | "timeoutOverflowMode" | "maxRowsInSet" | "maxBytesInSet" | "setOverflowMode" | "maxRowsInJoin" | "maxBytesInJoin" | "joinOverflowMode" | "maxColumnsToRead" | "maxTemporaryColumns" | "maxTemporaryNonConstColumns" | "maxQuerySize" | "maxAstDepth" | "maxAstElements" | "maxExpandedAstElements" | "minExecutionSpeed" | "minExecutionSpeedBytes" | "countDistinctImplementation" | "inputFormatValuesInterpretExpressions" | "inputFormatDefaultsForOmittedFields" | "outputFormatJsonQuote64bitIntegers" | "outputFormatJsonQuoteDenormals" | "lowCardinalityAllowInNativeFormat" | "emptyResultForAggregationByEmptySet" | "joinedSubqueryRequiresAlias" | "joinUseNulls" | "transformNullIn" | "httpConnectionTimeout" | "httpReceiveTimeout" | "httpSendTimeout" | "enableHttpCompression" | "sendProgressInHttpHeaders" | "httpHeadersProgressInterval" | "addHttpCorsHeader" | "quotaMode">, never>) | undefined;
        permissions?: ({
            databaseName?: string | undefined;
        }[] & ({
            databaseName?: string | undefined;
        } & {
            databaseName?: string | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
        }[]>, never>) | undefined;
        password?: string | undefined;
        quotas?: ({
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[] & ({
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        } & {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        } & Record<Exclude<keyof I["quotas"][number], "$type" | "queries" | "errors" | "intervalDuration" | "resultRows" | "readRows" | "executionTime">, never>)[] & Record<Exclude<keyof I["quotas"], "$type" | keyof {
            queries?: number | undefined;
            errors?: number | undefined;
            intervalDuration?: number | undefined;
            resultRows?: number | undefined;
            readRows?: number | undefined;
            executionTime?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "settings" | "permissions" | "password" | "quotas">, never>>(object: I): UserSpec;
};
export declare const UserSettings: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings";
    encode(message: UserSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSettings;
    fromJSON(object: any): UserSettings;
    toJSON(message: UserSettings): unknown;
    fromPartial<I extends {
        priority?: number | undefined;
        readonly?: number | undefined;
        allowDdl?: boolean | undefined;
        insertQuorum?: number | undefined;
        connectTimeout?: number | undefined;
        receiveTimeout?: number | undefined;
        sendTimeout?: number | undefined;
        insertQuorumTimeout?: number | undefined;
        selectSequentialConsistency?: boolean | undefined;
        maxReplicaDelayForDistributedQueries?: number | undefined;
        fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
        replicationAlterPartitionsSync?: number | undefined;
        distributedProductMode?: UserSettings_DistributedProductMode | undefined;
        distributedAggregationMemoryEfficient?: boolean | undefined;
        distributedDdlTaskTimeout?: number | undefined;
        skipUnavailableShards?: boolean | undefined;
        compile?: boolean | undefined;
        minCountToCompile?: number | undefined;
        compileExpressions?: boolean | undefined;
        minCountToCompileExpression?: number | undefined;
        maxBlockSize?: number | undefined;
        minInsertBlockSizeRows?: number | undefined;
        minInsertBlockSizeBytes?: number | undefined;
        maxInsertBlockSize?: number | undefined;
        minBytesToUseDirectIo?: number | undefined;
        useUncompressedCache?: boolean | undefined;
        mergeTreeMaxRowsToUseCache?: number | undefined;
        mergeTreeMaxBytesToUseCache?: number | undefined;
        mergeTreeMinRowsForConcurrentRead?: number | undefined;
        mergeTreeMinBytesForConcurrentRead?: number | undefined;
        maxBytesBeforeExternalGroupBy?: number | undefined;
        maxBytesBeforeExternalSort?: number | undefined;
        groupByTwoLevelThreshold?: number | undefined;
        groupByTwoLevelThresholdBytes?: number | undefined;
        maxThreads?: number | undefined;
        maxMemoryUsage?: number | undefined;
        maxMemoryUsageForUser?: number | undefined;
        maxNetworkBandwidth?: number | undefined;
        maxNetworkBandwidthForUser?: number | undefined;
        forceIndexByDate?: boolean | undefined;
        forcePrimaryKey?: boolean | undefined;
        maxRowsToRead?: number | undefined;
        maxBytesToRead?: number | undefined;
        readOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsToGroupBy?: number | undefined;
        groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
        maxRowsToSort?: number | undefined;
        maxBytesToSort?: number | undefined;
        sortOverflowMode?: UserSettings_OverflowMode | undefined;
        maxResultRows?: number | undefined;
        maxResultBytes?: number | undefined;
        resultOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInDistinct?: number | undefined;
        maxBytesInDistinct?: number | undefined;
        distinctOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsToTransfer?: number | undefined;
        maxBytesToTransfer?: number | undefined;
        transferOverflowMode?: UserSettings_OverflowMode | undefined;
        maxExecutionTime?: number | undefined;
        timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInSet?: number | undefined;
        maxBytesInSet?: number | undefined;
        setOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInJoin?: number | undefined;
        maxBytesInJoin?: number | undefined;
        joinOverflowMode?: UserSettings_OverflowMode | undefined;
        maxColumnsToRead?: number | undefined;
        maxTemporaryColumns?: number | undefined;
        maxTemporaryNonConstColumns?: number | undefined;
        maxQuerySize?: number | undefined;
        maxAstDepth?: number | undefined;
        maxAstElements?: number | undefined;
        maxExpandedAstElements?: number | undefined;
        minExecutionSpeed?: number | undefined;
        minExecutionSpeedBytes?: number | undefined;
        countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
        inputFormatValuesInterpretExpressions?: boolean | undefined;
        inputFormatDefaultsForOmittedFields?: boolean | undefined;
        outputFormatJsonQuote64bitIntegers?: boolean | undefined;
        outputFormatJsonQuoteDenormals?: boolean | undefined;
        lowCardinalityAllowInNativeFormat?: boolean | undefined;
        emptyResultForAggregationByEmptySet?: boolean | undefined;
        joinedSubqueryRequiresAlias?: boolean | undefined;
        joinUseNulls?: boolean | undefined;
        transformNullIn?: boolean | undefined;
        httpConnectionTimeout?: number | undefined;
        httpReceiveTimeout?: number | undefined;
        httpSendTimeout?: number | undefined;
        enableHttpCompression?: boolean | undefined;
        sendProgressInHttpHeaders?: boolean | undefined;
        httpHeadersProgressInterval?: number | undefined;
        addHttpCorsHeader?: boolean | undefined;
        quotaMode?: UserSettings_QuotaMode | undefined;
    } & {
        priority?: number | undefined;
        readonly?: number | undefined;
        allowDdl?: boolean | undefined;
        insertQuorum?: number | undefined;
        connectTimeout?: number | undefined;
        receiveTimeout?: number | undefined;
        sendTimeout?: number | undefined;
        insertQuorumTimeout?: number | undefined;
        selectSequentialConsistency?: boolean | undefined;
        maxReplicaDelayForDistributedQueries?: number | undefined;
        fallbackToStaleReplicasForDistributedQueries?: boolean | undefined;
        replicationAlterPartitionsSync?: number | undefined;
        distributedProductMode?: UserSettings_DistributedProductMode | undefined;
        distributedAggregationMemoryEfficient?: boolean | undefined;
        distributedDdlTaskTimeout?: number | undefined;
        skipUnavailableShards?: boolean | undefined;
        compile?: boolean | undefined;
        minCountToCompile?: number | undefined;
        compileExpressions?: boolean | undefined;
        minCountToCompileExpression?: number | undefined;
        maxBlockSize?: number | undefined;
        minInsertBlockSizeRows?: number | undefined;
        minInsertBlockSizeBytes?: number | undefined;
        maxInsertBlockSize?: number | undefined;
        minBytesToUseDirectIo?: number | undefined;
        useUncompressedCache?: boolean | undefined;
        mergeTreeMaxRowsToUseCache?: number | undefined;
        mergeTreeMaxBytesToUseCache?: number | undefined;
        mergeTreeMinRowsForConcurrentRead?: number | undefined;
        mergeTreeMinBytesForConcurrentRead?: number | undefined;
        maxBytesBeforeExternalGroupBy?: number | undefined;
        maxBytesBeforeExternalSort?: number | undefined;
        groupByTwoLevelThreshold?: number | undefined;
        groupByTwoLevelThresholdBytes?: number | undefined;
        maxThreads?: number | undefined;
        maxMemoryUsage?: number | undefined;
        maxMemoryUsageForUser?: number | undefined;
        maxNetworkBandwidth?: number | undefined;
        maxNetworkBandwidthForUser?: number | undefined;
        forceIndexByDate?: boolean | undefined;
        forcePrimaryKey?: boolean | undefined;
        maxRowsToRead?: number | undefined;
        maxBytesToRead?: number | undefined;
        readOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsToGroupBy?: number | undefined;
        groupByOverflowMode?: UserSettings_GroupByOverflowMode | undefined;
        maxRowsToSort?: number | undefined;
        maxBytesToSort?: number | undefined;
        sortOverflowMode?: UserSettings_OverflowMode | undefined;
        maxResultRows?: number | undefined;
        maxResultBytes?: number | undefined;
        resultOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInDistinct?: number | undefined;
        maxBytesInDistinct?: number | undefined;
        distinctOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsToTransfer?: number | undefined;
        maxBytesToTransfer?: number | undefined;
        transferOverflowMode?: UserSettings_OverflowMode | undefined;
        maxExecutionTime?: number | undefined;
        timeoutOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInSet?: number | undefined;
        maxBytesInSet?: number | undefined;
        setOverflowMode?: UserSettings_OverflowMode | undefined;
        maxRowsInJoin?: number | undefined;
        maxBytesInJoin?: number | undefined;
        joinOverflowMode?: UserSettings_OverflowMode | undefined;
        maxColumnsToRead?: number | undefined;
        maxTemporaryColumns?: number | undefined;
        maxTemporaryNonConstColumns?: number | undefined;
        maxQuerySize?: number | undefined;
        maxAstDepth?: number | undefined;
        maxAstElements?: number | undefined;
        maxExpandedAstElements?: number | undefined;
        minExecutionSpeed?: number | undefined;
        minExecutionSpeedBytes?: number | undefined;
        countDistinctImplementation?: UserSettings_CountDistinctImplementation | undefined;
        inputFormatValuesInterpretExpressions?: boolean | undefined;
        inputFormatDefaultsForOmittedFields?: boolean | undefined;
        outputFormatJsonQuote64bitIntegers?: boolean | undefined;
        outputFormatJsonQuoteDenormals?: boolean | undefined;
        lowCardinalityAllowInNativeFormat?: boolean | undefined;
        emptyResultForAggregationByEmptySet?: boolean | undefined;
        joinedSubqueryRequiresAlias?: boolean | undefined;
        joinUseNulls?: boolean | undefined;
        transformNullIn?: boolean | undefined;
        httpConnectionTimeout?: number | undefined;
        httpReceiveTimeout?: number | undefined;
        httpSendTimeout?: number | undefined;
        enableHttpCompression?: boolean | undefined;
        sendProgressInHttpHeaders?: boolean | undefined;
        httpHeadersProgressInterval?: number | undefined;
        addHttpCorsHeader?: boolean | undefined;
        quotaMode?: UserSettings_QuotaMode | undefined;
    } & Record<Exclude<keyof I, "$type" | "priority" | "readonly" | "allowDdl" | "insertQuorum" | "connectTimeout" | "receiveTimeout" | "sendTimeout" | "insertQuorumTimeout" | "selectSequentialConsistency" | "maxReplicaDelayForDistributedQueries" | "fallbackToStaleReplicasForDistributedQueries" | "replicationAlterPartitionsSync" | "distributedProductMode" | "distributedAggregationMemoryEfficient" | "distributedDdlTaskTimeout" | "skipUnavailableShards" | "compile" | "minCountToCompile" | "compileExpressions" | "minCountToCompileExpression" | "maxBlockSize" | "minInsertBlockSizeRows" | "minInsertBlockSizeBytes" | "maxInsertBlockSize" | "minBytesToUseDirectIo" | "useUncompressedCache" | "mergeTreeMaxRowsToUseCache" | "mergeTreeMaxBytesToUseCache" | "mergeTreeMinRowsForConcurrentRead" | "mergeTreeMinBytesForConcurrentRead" | "maxBytesBeforeExternalGroupBy" | "maxBytesBeforeExternalSort" | "groupByTwoLevelThreshold" | "groupByTwoLevelThresholdBytes" | "maxThreads" | "maxMemoryUsage" | "maxMemoryUsageForUser" | "maxNetworkBandwidth" | "maxNetworkBandwidthForUser" | "forceIndexByDate" | "forcePrimaryKey" | "maxRowsToRead" | "maxBytesToRead" | "readOverflowMode" | "maxRowsToGroupBy" | "groupByOverflowMode" | "maxRowsToSort" | "maxBytesToSort" | "sortOverflowMode" | "maxResultRows" | "maxResultBytes" | "resultOverflowMode" | "maxRowsInDistinct" | "maxBytesInDistinct" | "distinctOverflowMode" | "maxRowsToTransfer" | "maxBytesToTransfer" | "transferOverflowMode" | "maxExecutionTime" | "timeoutOverflowMode" | "maxRowsInSet" | "maxBytesInSet" | "setOverflowMode" | "maxRowsInJoin" | "maxBytesInJoin" | "joinOverflowMode" | "maxColumnsToRead" | "maxTemporaryColumns" | "maxTemporaryNonConstColumns" | "maxQuerySize" | "maxAstDepth" | "maxAstElements" | "maxExpandedAstElements" | "minExecutionSpeed" | "minExecutionSpeedBytes" | "countDistinctImplementation" | "inputFormatValuesInterpretExpressions" | "inputFormatDefaultsForOmittedFields" | "outputFormatJsonQuote64bitIntegers" | "outputFormatJsonQuoteDenormals" | "lowCardinalityAllowInNativeFormat" | "emptyResultForAggregationByEmptySet" | "joinedSubqueryRequiresAlias" | "joinUseNulls" | "transformNullIn" | "httpConnectionTimeout" | "httpReceiveTimeout" | "httpSendTimeout" | "enableHttpCompression" | "sendProgressInHttpHeaders" | "httpHeadersProgressInterval" | "addHttpCorsHeader" | "quotaMode">, never>>(object: I): UserSettings;
};
export declare const UserQuota: {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota";
    encode(message: UserQuota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserQuota;
    fromJSON(object: any): UserQuota;
    toJSON(message: UserQuota): unknown;
    fromPartial<I extends {
        queries?: number | undefined;
        errors?: number | undefined;
        intervalDuration?: number | undefined;
        resultRows?: number | undefined;
        readRows?: number | undefined;
        executionTime?: number | undefined;
    } & {
        queries?: number | undefined;
        errors?: number | undefined;
        intervalDuration?: number | undefined;
        resultRows?: number | undefined;
        readRows?: number | undefined;
        executionTime?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "queries" | "errors" | "intervalDuration" | "resultRows" | "readRows" | "executionTime">, never>>(object: I): UserQuota;
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
