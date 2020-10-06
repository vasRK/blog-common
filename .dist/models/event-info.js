"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventInfo = /** @class */ (function () {
    function EventInfo(type, eventData) {
        this.type = type;
        this.eventData = eventData;
    }
    return EventInfo;
}());
exports.EventInfo = EventInfo;
var EventType;
(function (EventType) {
    EventType[EventType["PostCreated"] = 1] = "PostCreated";
    EventType[EventType["CommentCreate"] = 2] = "CommentCreate";
})(EventType = exports.EventType || (exports.EventType = {}));
//# sourceMappingURL=event-info.js.map