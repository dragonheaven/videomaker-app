
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
exports.TimelineSelectedEvent = void 0;
const timelineBaseEvent_1 = require('./timelineBaseEvent');

const TimelineSelectedEvent = /** @class */ (function (_super) {
  __extends(TimelineSelectedEvent, _super);
  function TimelineSelectedEvent() {
    const _this = _super !== null && _super.apply(this, arguments) || this;
    _this.selected = [];
    _this.changed = [];
    return _this;
  }
  return TimelineSelectedEvent;
}(timelineBaseEvent_1.TimelineBaseEvent));
exports.TimelineSelectedEvent = TimelineSelectedEvent;
// # sourceMappingURL=timelineSelectedEvent.js.map
