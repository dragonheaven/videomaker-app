
const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());
Object.defineProperty(exports, '__esModule', { value: true });
exports.TimelineTimeChangedEvent = void 0;
const timelineBaseEvent_1 = require('./timelineBaseEvent');
const timelineEventSource_1 = require('../../enums/timelineEventSource');

const TimelineTimeChangedEvent = /** @class */ (function (_super) {
  __extends(TimelineTimeChangedEvent, _super);
  function TimelineTimeChangedEvent() {
    const _this = _super !== null && _super.apply(this, arguments) || this;
    /**
         * new value to be set.
         */
    _this.val = 0;
    /**
         * previous value.
         */
    _this.prevVal = 0;
    _this.source = timelineEventSource_1.TimelineEventSource.User;
    return _this;
  }
  return TimelineTimeChangedEvent;
}(timelineBaseEvent_1.TimelineBaseEvent));
exports.TimelineTimeChangedEvent = TimelineTimeChangedEvent;
// # sourceMappingURL=timelineTimeChangedEvent.js.map
