/// <reference types="node" />
/**
 * The simplest logger class, with a minimal set of logging methods and the most simple output to the console.
 */
export declare class SimpleLogger implements SimpleLogger.Logger {
    fatal: SimpleLogger.LogFn;
    error: SimpleLogger.LogFn;
    warn: SimpleLogger.LogFn;
    info: SimpleLogger.LogFn;
    debug: SimpleLogger.LogFn;
    trace: SimpleLogger.LogFn;
    readonly prefix?: string;
    readonly showTimestamp: boolean;
    readonly showLevel: boolean;
    constructor(options?: {
        /**
         * Level down to which to log messages. Default is *info*.
         */
        level?: SimpleLogger.LogLevel;
        /**
         * Prefix that gets added to a message, default undefined
         */
        prefix?: string;
        /**
         * Whether to add the date and time to the message. Default is true.
         */
        showTimestamp?: boolean;
        /**
         * Whether to add the message level. Default is true.
         */
        showLevel?: boolean;
        /**
         * Environment variable with logging level, which if specified contains the level of
         * logging - *error*, *warn*, *info*, *debug*, *trace*. If not specified, the value of
         * level parameter is used.  If a non-existing level value is specified, all levels are logged.
         */
        envKey?: string;
    });
}
export declare namespace SimpleLogger {
    interface LogFn {
        (obj: unknown, msg?: string, ...args: unknown[]): void;
        (msg: string, ...args: unknown[]): void;
    }
    /**
     * The simplest interface, containing only the necessary methods used in the project.
     * Therefore, *fatal* and *trace* methods are omitted.
     */
    interface Logger {
        fatal: LogFn;
        error: LogFn;
        warn: LogFn;
        info: LogFn;
        debug: LogFn;
        trace: LogFn;
    }
    enum LogLevel {
        fatal = "fatal",
        error = "error",
        warn = "warn",
        info = "info",
        debug = "debug",
        trace = "trace"
    }
}
/**
 * **Only for unit tests purposes**.
 */
export declare const setMockConsole: (mockConsole?: Console) => void;
