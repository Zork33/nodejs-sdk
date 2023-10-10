"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeTimersFixture = void 0;
/**
 * Guarantees that once the time has arrived, all functions called from setTimeout() will be finished by the time
 * await fakeTimersFixture.advanceTimer(...) ends.  It is important if an async function is passed to setTimeout().
 */
class FakeTimersFixture {
    constructor() {
        this.timeouts = [];
    }
    setup() {
        jest.useFakeTimers();
        // @ts-ignore
        this.prevSetTimeout = global.setTimeout;
        // adds to this.timesouts array the handlers for which the time has come. so whould be possible to make sure that all handlers,
        // including asynchronous handlers, will be completed - see below.
        // @ts-ignore
        global.setTimeout = (handler, timeout, ...args) => {
            var _a;
            return (_a = this.prevSetTimeout) === null || _a === void 0 ? void 0 : _a.call(this, () => {
                this.timeouts.push(handler(...args)); // call the handler only when the fake timer comes to necessary point if time
            }, timeout);
        };
    }
    advanceTimer(msToRun) {
        return __awaiter(this, void 0, void 0, function* () {
            jest.advanceTimersByTime(msToRun);
            // this additional logic ensures that by the end of advanceTimer(), all handlers including asynchronous
            // handlers on timers will be completed
            // eslint-disable-next-line @typescript-eslint/ban-types
            yield Promise.all(this.timeouts);
            this.timeouts.length = 0;
        });
    }
    dispose() {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        global.setTimeout = this.prevSetTimeout;
        jest.useRealTimers();
    }
}
exports.FakeTimersFixture = FakeTimersFixture;
