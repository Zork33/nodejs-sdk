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
 * await fakeTimersFixture.advance(...) ends.  It is important if an async function is passed to setTimeout().
 */
class FakeTimersFixture {
    constructor() {
        this.timeouts = [];
    }
    setup() {
        jest.useFakeTimers();
        // @ts-ignore
        this.prevSetTimeout = global.setTimeout;
        // @ts-ignore
        global.setTimeout = (handler, timeout, ...args) => this.prevSetTimeout(() => {
            this.timeouts.push(handler(...args));
        }, timeout);
    }
    advanceTimer(msToRun) {
        return __awaiter(this, void 0, void 0, function* () {
            jest.advanceTimersByTime(msToRun);
            yield Promise.all(this.timeouts);
            this.timeouts.length = 0;
        });
    }
    dispose() {
        // @ts-ignore
        global.setTimeout = this.prevSetTimeout;
        jest.useRealTimers();
    }
}
exports.FakeTimersFixture = FakeTimersFixture;
