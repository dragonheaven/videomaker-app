
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
exports.TimelineKeyframeChangedEvent = void 0;
const timelineBaseEvent_1 = require('./timelineBaseEvent');

const TimelineKeyframeChangedEvent = /** @class */ (function (_super) {
  __extends(TimelineKeyframeChangedEvent, _super);
  function TimelineKeyframeChangedEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return TimelineKeyframeChangedEvent;
}(timelineBaseEvent_1.TimelineBaseEvent));
exports.TimelineKeyframeChangedEvent = TimelineKeyframeChangedEvent;
// # sourceMappingURL=timelineKeyframeChangedEvent.js.map