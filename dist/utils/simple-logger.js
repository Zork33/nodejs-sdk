"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMockConsole = exports.SimpleLogger = void 0;
const DEFAULT_ENV_KEY = 'LOG_LEVEL';
const DEFAULT_LEVEL = 'info';
const silentLogFn = () => { };
const simpleLogFnBuilder = (level) => {
    const LEVEL = level.toUpperCase();
    return function log(objOrMsg, ...args) {
        const prefix = [];
        if (this.showTimestamp) {
            prefix.push(new Date().toISOString());
        }
        if (this.showLevel) {
            prefix.push(LEVEL);
        }
        if (this.prefix) {
            prefix.push(this.prefix);
        }
        const prefixStr = prefix.length === 0 ? '' : `[${prefix.join(' ')}] `;
        if (typeof objOrMsg === 'object') {
            if (typeof args[0] !== 'string') {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                consoleOrMock[level](prefix.length > 0 ? `${prefixStr.slice(0, -1)} %o` : '%o', objOrMsg);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                consoleOrMock[level](`${prefixStr}%o ${args[0]}`, ...args.splice(1), objOrMsg);
            }
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            consoleOrMock[level](`${prefixStr}${objOrMsg}`, ...args);
        }
    };
};
/**
 * The simplest logger class, with a minimal set of logging methods and the most simple output to the console.
 */
// eslint-disable-next-line import/export
class SimpleLogger {
    constructor(options = {}) {
        var _a;
        this.error = silentLogFn;
        this.warn = silentLogFn;
        this.info = silentLogFn;
        this.debug = silentLogFn;
        this.trace = silentLogFn;
        let { level, 
        // eslint-disable-next-line prefer-const
        prefix, 
        // eslint-disable-next-line prefer-const
        showTimestamp, 
        // eslint-disable-next-line prefer-const
        showLevel, } = options;
        if (prefix)
            this.prefix = prefix;
        this.showTimestamp = showTimestamp !== null && showTimestamp !== void 0 ? showTimestamp : false;
        this.showLevel = showLevel !== null && showLevel !== void 0 ? showLevel : false;
        const envKey = (_a = options.envKey) !== null && _a !== void 0 ? _a : DEFAULT_ENV_KEY;
        const envLevel = process.env[envKey];
        // @ts-ignore
        level = envLevel !== undefined ? SimpleLogger.LogLevel[envLevel] : level !== null && level !== void 0 ? level : SimpleLogger.LogLevel[DEFAULT_LEVEL];
        for (const lvl of Object.values(SimpleLogger.LogLevel)) {
            // @ts-ignore
            this[lvl] = simpleLogFnBuilder(lvl);
            if (lvl === level)
                break;
        }
    }
}
exports.SimpleLogger = SimpleLogger;
// eslint-disable-next-line @typescript-eslint/no-namespace,import/export
(function (SimpleLogger) {
    let LogLevel;
    (function (LogLevel) {
        LogLevel["error"] = "error";
        LogLevel["warn"] = "warn";
        LogLevel["info"] = "info";
        LogLevel["debug"] = "debug";
        LogLevel["trace"] = "trace";
    })(LogLevel = SimpleLogger.LogLevel || (SimpleLogger.LogLevel = {}));
})(SimpleLogger = exports.SimpleLogger || (exports.SimpleLogger = {}));
/**
 * For unit tests purposes.
 */
let consoleOrMock = console;
/**
 * **Only for unit tests purposes**.
 */
const setMockConsole = (mockConsole = console) => {
    consoleOrMock = mockConsole;
};
exports.setMockConsole = setMockConsole;
