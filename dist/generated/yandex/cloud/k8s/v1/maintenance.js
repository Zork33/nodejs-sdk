"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyMaintenanceWindow = exports.DaysOfWeekMaintenanceWindow = exports.DailyMaintenanceWindow = exports.AnytimeMaintenanceWindow = exports.MaintenanceWindow = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timeofday_1 = require("../../../../google/type/timeofday");
const duration_1 = require("../../../../google/protobuf/duration");
const dayofweek_1 = require("../../../../google/type/dayofweek");
exports.protobufPackage = "yandex.cloud.k8s.v1";
const baseMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow",
};
exports.MaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.anytime !== undefined) {
            exports.AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
        }
        if (message.dailyMaintenanceWindow !== undefined) {
            exports.DailyMaintenanceWindow.encode(message.dailyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            exports.WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMaintenanceWindow);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anytime = exports.AnytimeMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dailyMaintenanceWindow = exports.DailyMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.weeklyMaintenanceWindow = exports.WeeklyMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMaintenanceWindow);
        message.anytime =
            object.anytime !== undefined && object.anytime !== null
                ? exports.AnytimeMaintenanceWindow.fromJSON(object.anytime)
                : undefined;
        message.dailyMaintenanceWindow =
            object.dailyMaintenanceWindow !== undefined &&
                object.dailyMaintenanceWindow !== null
                ? exports.DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow)
                : undefined;
        message.weeklyMaintenanceWindow =
            object.weeklyMaintenanceWindow !== undefined &&
                object.weeklyMaintenanceWindow !== null
                ? exports.WeeklyMaintenanceWindow.fromJSON(object.weeklyMaintenanceWindow)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.anytime !== undefined &&
            (obj.anytime = message.anytime
                ? exports.AnytimeMaintenanceWindow.toJSON(message.anytime)
                : undefined);
        message.dailyMaintenanceWindow !== undefined &&
            (obj.dailyMaintenanceWindow = message.dailyMaintenanceWindow
                ? exports.DailyMaintenanceWindow.toJSON(message.dailyMaintenanceWindow)
                : undefined);
        message.weeklyMaintenanceWindow !== undefined &&
            (obj.weeklyMaintenanceWindow = message.weeklyMaintenanceWindow
                ? exports.WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMaintenanceWindow);
        message.anytime =
            object.anytime !== undefined && object.anytime !== null
                ? exports.AnytimeMaintenanceWindow.fromPartial(object.anytime)
                : undefined;
        message.dailyMaintenanceWindow =
            object.dailyMaintenanceWindow !== undefined &&
                object.dailyMaintenanceWindow !== null
                ? exports.DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow)
                : undefined;
        message.weeklyMaintenanceWindow =
            object.weeklyMaintenanceWindow !== undefined &&
                object.weeklyMaintenanceWindow !== null
                ? exports.WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MaintenanceWindow.$type, exports.MaintenanceWindow);
const baseAnytimeMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow",
};
exports.AnytimeMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnytimeMaintenanceWindow);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseAnytimeMaintenanceWindow);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseAnytimeMaintenanceWindow);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AnytimeMaintenanceWindow.$type, exports.AnytimeMaintenanceWindow);
const baseDailyMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow",
};
exports.DailyMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDailyMaintenanceWindow);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDailyMaintenanceWindow);
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? timeofday_1.TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDailyMaintenanceWindow);
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DailyMaintenanceWindow.$type, exports.DailyMaintenanceWindow);
const baseDaysOfWeekMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow",
    days: 0,
};
exports.DaysOfWeekMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.startTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDaysOfWeekMaintenanceWindow);
        message.days = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.days.push(reader.int32());
                        }
                    }
                    else {
                        message.days.push(reader.int32());
                    }
                    break;
                case 2:
                    message.startTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseDaysOfWeekMaintenanceWindow);
        message.days = ((_a = object.days) !== null && _a !== void 0 ? _a : []).map((e) => (0, dayofweek_1.dayOfWeekFromJSON)(e));
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => (0, dayofweek_1.dayOfWeekToJSON)(e));
        }
        else {
            obj.days = [];
        }
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? timeofday_1.TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDaysOfWeekMaintenanceWindow);
        message.days = ((_a = object.days) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DaysOfWeekMaintenanceWindow.$type, exports.DaysOfWeekMaintenanceWindow);
const baseWeeklyMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow",
};
exports.WeeklyMaintenanceWindow = {
    $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.daysOfWeek) {
            exports.DaysOfWeekMaintenanceWindow.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWeeklyMaintenanceWindow);
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(exports.DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseWeeklyMaintenanceWindow);
        message.daysOfWeek = ((_a = object.daysOfWeek) !== null && _a !== void 0 ? _a : []).map((e) => exports.DaysOfWeekMaintenanceWindow.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? exports.DaysOfWeekMaintenanceWindow.toJSON(e) : undefined);
        }
        else {
            obj.daysOfWeek = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseWeeklyMaintenanceWindow);
        message.daysOfWeek =
            ((_a = object.daysOfWeek) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DaysOfWeekMaintenanceWindow.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WeeklyMaintenanceWindow.$type, exports.WeeklyMaintenanceWindow);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
