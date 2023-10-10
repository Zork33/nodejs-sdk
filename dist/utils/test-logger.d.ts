/// <reference types="jest" />
import { SimpleLogger } from './simple-logger';
export declare const buildTestLogger: () => {
    testLogger: {
        fatal: SimpleLogger.LogFn;
        error: SimpleLogger.LogFn;
        warn: SimpleLogger.LogFn;
        info: SimpleLogger.LogFn;
        debug: SimpleLogger.LogFn;
        trace: SimpleLogger.LogFn;
    };
    testLoggerFn: jest.Mock<any, any>;
};
