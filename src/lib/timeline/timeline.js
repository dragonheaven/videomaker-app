"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var timelineEventsEmitter_1 = require("./timelineEventsEmitter");
var timelineUtils_1 = require("./utils/timelineUtils");
var timelineCursorType_1 = require("./enums/timelineCursorType");
var timelineKeyframeShape_1 = require("./enums/timelineKeyframeShape");
var timelineStyleUtils_1 = require("./utils/timelineStyleUtils");
var timelineElementType_1 = require("./enums/timelineElementType");
var timelineEvents_1 = require("./enums/timelineEvents");
var timelineCapShape_1 = require("./enums/timelineCapShape");
var timelineInteractionMode_1 = require("./enums/timelineInteractionMode");
var timelineSelectedEvent_1 = require("./utils/events/timelineSelectedEvent");
var timelineClickEvent_1 = require("./utils/events/timelineClickEvent");
var timelineDragEvent_1 = require("./utils/events/timelineDragEvent");
var defaults_1 = require("./settings/defaults");
var timelineEventSource_1 = require("./enums/timelineEventSource");
var timelineTimeChangedEvent_1 = require("./utils/events/timelineTimeChangedEvent");
var timelineSelectionMode_1 = require("./enums/timelineSelectionMode");
var timelineKeyframeChangedEvent_1 = require("./utils/events/timelineKeyframeChangedEvent");
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    /**
     * Create TimelineView instance
     * @param options TimelineView settings.
     * @param model TimelineView model.
     */
    function Timeline(options, model) {
        if (options === void 0) { options = null; }
        if (model === void 0) { model = null; }
        var _this = _super.call(this) || this;
        /**
         * component container.
         */
        _this._container = null;
        /**
         * Dynamically generated event.
         */
        _this._canvas = null;
        /**
         * Dynamically generated scroll container.
         */
        _this._scrollContainer = null;
        /**
         * Dynamically generated virtual scroll content.
         */
        _this._scrollContent = null;
        /**
         * Rendering context
         */
        _this._ctx = null;
        /**
         * Components settings
         */
        _this._options = null;
        /**
         * Drag start position.
         */
        _this._startPos = null;
        /**
         * Drag scroll started position.
         */
        _this._scrollStartPos = { x: 0, y: 0 };
        _this._currentPos = null;
        _this._selectionRect = null;
        _this._selectionRectEnabled = false;
        _this._drag = null;
        _this._startedDragWithCtrl = false;
        _this._startedDragWithShiftKey = false;
        _this._clickTimeout = 0;
        _this._lastClickTime = 0;
        _this._lastClickPoint = null;
        _this._consts = defaults_1.defaultTimelineConsts;
        _this._clickAllowed = false;
        /**
         * scroll finished timer reference.
         */
        _this._scrollFinishedTimerRef = null;
        _this._val = 0;
        _this._pixelRatio = 1;
        _this._currentZoom = 0;
        _this._intervalRef = null;
        _this._autoPanLastActionDate = 0;
        _this._isPanStarted = false;
        _this._interactionMode = timelineInteractionMode_1.TimelineInteractionMode.Selection;
        _this._lastUsedArgs = null;
        _this._model = null;
        _this._handleKeyUp = function (event) {
            if (_this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                _this._setZoomCursor(event);
            }
        };
        _this._handleKeyDown = function (event) {
            if (_this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                _this._setZoomCursor(event);
            }
        };
        _this._handleBlurEvent = function () {
            _this._cleanUpSelection();
        };
        _this._handleWindowResizeEvent = function () {
            // Rescale and redraw
            _this.rescale();
            _this.redraw();
        };
        _this._handleScrollEvent = function (args) {
            _this._clearScrollFinishedTimer();
            // Set a timeout to run event 'scrolling end'.
            _this._scrollFinishedTimerRef = setTimeout(function () {
                if (!_this._isPanStarted) {
                    if (_this._scrollFinishedTimerRef) {
                        clearTimeout(_this._scrollFinishedTimerRef);
                        _this._scrollFinishedTimerRef = null;
                    }
                    _this.rescale();
                    _this.redraw();
                }
            }, _this._consts.scrollFinishedTimeoutMs);
            _this.redraw();
            _this._emitScrollEvent(args);
        };
        _this._handleWheelEvent = function (event) {
            if (_this._controlKeyPressed(event)) {
                event.preventDefault();
                var mousePos = Math.max(0, _this._getMousePos(_this._canvas, event).x || 0);
                _this._zoom(timelineUtils_1.TimelineUtils.sign(event.deltaY), _this._options.zoomSpeed, mousePos);
            }
            else {
                _this._scrollContainer.scrollTop += event.deltaY;
                event.preventDefault();
            }
        };
        /**
         * @param args
         */
        _this._handleMouseDownEvent = function (args) {
            var isDoubleClick = Date.now() - _this._lastClickTime < _this._consts.doubleClickTimeoutMs;
            // Prevent drag of the canvas if canvas is selected as text:
            timelineUtils_1.TimelineUtils.clearBrowserSelection();
            _this._startPos = _this._trackMousePos(_this._canvas, args);
            if (!_this._startPos) {
                return;
            }
            // Don't allow to perform double click if mouse was moved to far.
            if (_this._lastClickPoint && _this._startPos && timelineUtils_1.TimelineUtils.getDistance(_this._lastClickPoint.x, _this._lastClickPoint.y, _this._startPos.x, _this._startPos.y) > _this._consts.clickThreshold) {
                isDoubleClick = false;
            }
            _this._lastClickPoint = _this._startPos;
            _this._scrollStartPos = {
                x: _this._scrollContainer.scrollLeft,
                y: _this._scrollContainer.scrollTop,
            };
            _this._clickAllowed = true;
            var elements = _this.elementFromPoint(_this._startPos, Math.max(2, _this._startPos.radius));
            var target = _this._findDraggable(elements, _this._startPos.val);
            var event = new timelineClickEvent_1.TimelineClickEvent();
            event.pos = _this._startPos;
            event.val = _this._startPos.val;
            event.originalVal = _this._startPos.originalVal;
            event.snapVal = _this._startPos.snapVal;
            event.args = args;
            // all elements under the click:
            event.elements = elements;
            // target element.
            event.target = target;
            if (isDoubleClick) {
                _super.prototype.emit.call(_this, timelineEvents_1.TimelineEvents.DoubleClick, event);
                return;
            }
            _super.prototype.emit.call(_this, timelineEvents_1.TimelineEvents.MouseDown, event);
            _this._clickTimeout = Date.now();
            _this._lastClickTime = Date.now();
            if (event.isPrevented()) {
                // Mouse up will be also prevented
                _this._cleanUpSelection();
                return;
            }
            _this._currentPos = _this._startPos;
            // Select keyframes on mouse down
            if (target && _this._interactionMode !== timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                _this._drag = {
                    changed: false,
                    target: _this._setElementDragState(target, target.val),
                    val: target.val,
                    type: target.type,
                    elements: [],
                };
                if (target.type === timelineElementType_1.TimelineElementType.Keyframe) {
                    _this._startedDragWithCtrl = _this._controlKeyPressed(args);
                    _this._startedDragWithShiftKey = args.shiftKey;
                    // get all related selected keyframes if we are selecting one.
                    if (!target.keyframe.selected && !_this._controlKeyPressed(args)) {
                        _this._selectInternal(target.keyframe);
                    }
                    // Allow to drag all selected keyframes on a screen
                    _this._drag.elements = _this.getSelectedElements().map(function (element) {
                        return _this._setElementDragState(element, element.val);
                    });
                }
                else if (target.type === timelineElementType_1.TimelineElementType.Group) {
                    var keyframes = _this._drag.target.keyframes;
                    if (keyframes && Array.isArray(keyframes)) {
                        _this._drag.elements = keyframes.map(function (keyframe) {
                            return _this._setElementDragState(_this._convertToElement(_this._drag.target.row, keyframe), keyframe.val);
                        });
                    }
                }
                else {
                    _this._drag.elements = [_this._drag.target];
                }
            }
            _this.redraw();
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this._handleMouseMoveEvent = function (args) {
            if (!args) {
                args = _this._lastUsedArgs;
            }
            else {
                _this._lastUsedArgs = args;
            }
            if (!args) {
                return;
            }
            var isTouch = args.changedTouches && args.changedTouches.length > 0;
            _this._currentPos = _this._trackMousePos(_this._canvas, args);
            if (!_this._isPanStarted && _this._selectionRect && _this._clickTimeoutIsOver()) {
                // TODO: implement selection by rect
                _this._selectionRectEnabled = _this._interactionMode !== timelineInteractionMode_1.TimelineInteractionMode.Zoom;
            }
            else {
                _this._selectionRectEnabled = false;
            }
            args = args;
            var isLeftClicked = _this.isLeftButtonClicked(args);
            if (_this._startPos) {
                if (isLeftClicked || isTouch) {
                    if (_this._drag && !_this._startedDragWithCtrl) {
                        var convertedVal = _this._currentPos.val;
                        if (_this._drag.type === timelineElementType_1.TimelineElementType.Timeline) {
                            _this._setTimeInternal(convertedVal, timelineEventSource_1.TimelineEventSource.User);
                        }
                        else if ((_this._drag.type == timelineElementType_1.TimelineElementType.Keyframe || _this._drag.type == timelineElementType_1.TimelineElementType.Group) && _this._drag.elements) {
                            var offset = Math.floor(convertedVal - _this._drag.val);
                            var movedOffset = _this._moveElements(offset, _this._drag.elements, timelineEventSource_1.TimelineEventSource.User);
                            if (movedOffset !== 0) {
                                if (!_this._drag.changed) {
                                    _this._drag.prevVal = _this._drag.val;
                                    var eventArgs = _this._emitDragStartedEvent();
                                    if (eventArgs.isPrevented()) {
                                        // Cleanup drag here, so drag finished will be ignored.
                                        _this._drag = null;
                                        _this._cleanUpSelection();
                                        return;
                                    }
                                }
                                _this._drag.changed = true;
                                _this._drag.val += offset;
                                _this._emitDragEvent();
                            }
                        }
                    }
                    if (_this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Pan && !_this._drag) {
                        _this._isPanStarted = true;
                        _this._setCursor(timelineCursorType_1.TimelineCursorType.Grabbing);
                        // Track scroll by drag.
                        _this._scrollByPan(_this._startPos, _this._currentPos, _this._scrollStartPos);
                    }
                    else {
                        // Track scroll by mouse or touch out of the area.
                        _this._scrollBySelectionOutOfBounds(_this._currentPos);
                    }
                    _this.redraw();
                }
                else {
                    // Fallback. Cancel mouse move when focus was lost and mouse down is still counted.
                    _this._cleanUpSelection();
                    _this.redraw();
                }
            }
            else if (!isTouch) {
                var elements = _this.elementFromPoint(_this._currentPos, Math.max(2, _this._currentPos.radius));
                var target = _this._findDraggable(elements, _this._currentPos.val);
                if (_this._isPanStarted || _this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Pan) {
                    if (isLeftClicked) {
                        _this._setCursor(timelineCursorType_1.TimelineCursorType.Grabbing);
                    }
                    else {
                        _this._setCursor(timelineCursorType_1.TimelineCursorType.Grab);
                    }
                }
                else {
                    if (_this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                        _this._setZoomCursor(args);
                        return;
                    }
                    else {
                        _this._setCursor(timelineCursorType_1.TimelineCursorType.Default);
                    }
                }
                if (target) {
                    var cursor = null;
                    if (target.type === timelineElementType_1.TimelineElementType.Group) {
                        cursor = cursor || timelineCursorType_1.TimelineCursorType.EWResize;
                    }
                    else if (target.type == timelineElementType_1.TimelineElementType.Keyframe) {
                        cursor = cursor || timelineCursorType_1.TimelineCursorType.Pointer;
                    }
                    else if (target.type == timelineElementType_1.TimelineElementType.Timeline) {
                        cursor = cursor || timelineCursorType_1.TimelineCursorType.EWResize;
                    }
                    if (cursor) {
                        _this._setCursor(cursor);
                    }
                }
            }
            if (isTouch) {
                args.preventDefault();
            }
        };
        _this._handleMouseUpEvent = function (args) {
            if (_this._startPos) {
                //window.releaseCapture();
                var pos = _this._trackMousePos(_this._canvas, args);
                // Click detection.
                if (_this._clickAllowed || !_this._clickTimeoutIsOver() || (_this._drag && (_this._startedDragWithCtrl || _this._startedDragWithShiftKey))) {
                    if (_this._options && _this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                        var direction = _this._controlKeyPressed(args) ? 1 : -1;
                        var mousePos = Math.max(0, _this._getMousePos(_this._canvas, args).x || 0);
                        _this._zoom(direction, _this._options.zoomSpeed, mousePos);
                    }
                    else {
                        _this._performClick(pos, _this._drag);
                    }
                }
                else if (!_this._drag && _this._selectionRect && _this._selectionRectEnabled) {
                    if (_this._interactionMode === timelineInteractionMode_1.TimelineInteractionMode.Zoom) {
                        if (_this._selectionRect.width > 20) {
                            // TODO: implement zoom by screen rect.
                        }
                    }
                    else {
                        var keyframes = _this._getKeyframesByRectangle(_this._selectionRect);
                        var selectionMode = args.shiftKey ? timelineSelectionMode_1.TimelineSelectionMode.Append : timelineSelectionMode_1.TimelineSelectionMode.Normal;
                        _this.select(keyframes, selectionMode);
                    }
                }
                _this._cleanUpSelection();
                _this.redraw();
            }
        };
        /**
         * Redraw parts of the component in the specific order.
         */
        _this._redrawInternal = function () {
            if (!_this._ctx) {
                return;
            }
            // Rescale when animation is played out of the bounds.
            if (_this.valToPx(_this._val) > _this._scrollContainer.scrollWidth) {
                _this.rescale();
                if (!_this._isPanStarted && _this._drag && _this._drag.type !== timelineElementType_1.TimelineElementType.Timeline) {
                    _this.scrollLeft();
                }
            }
            _this._renderBackground();
            _this._renderRows();
            // Render after rows
            _this._renderHeaderBackground();
            _this._renderTicks();
            _this._renderKeyframes();
            _this._renderSelectionRect();
            _this._renderTimeline();
        };
        // Allow to create instance without an error to perform tests.
        if (options || model) {
            _this.initialize(options, model);
        }
        return _this;
    }
    /**
     * Initialize TimelineView
     * @param options TimelineView settings.
     * @param model TimelineView model.
     */
    Timeline.prototype.initialize = function (options, model) {
        this._model = model;
        if (!options || !options.id) {
            throw new Error("Element cannot be empty. Should be string or DOM element.");
        }
        this._generateContainers(options.id);
        this._options = this._setOptions(options);
        this._subscribeOnEvents();
        this.rescale();
        this.redraw();
    };
    /**
     * Generate component html.
     * @param id container.
     */
    Timeline.prototype._generateContainers = function (id) {
        if (id instanceof HTMLElement) {
            this._container = id;
        }
        else {
            this._container = document.getElementById(id);
        }
        if (!this._container) {
            throw new Error("Element cannot be empty. Should be string or DOM element.");
        }
        this._scrollContainer = document.createElement('div');
        this._scrollContent = document.createElement('div');
        this._canvas = document.createElement('canvas');
        if (!this._canvas || !this._canvas.getContext) {
            console.log('Cannot initialize canvas context.');
            return null;
        }
        this._container.style.position = 'relative';
        // Generate size container:
        this._canvas.style.cssText =
            'image-rendering: -moz-crisp-edges;' +
                'image-rendering: -webkit-crisp-edges;' +
                'image-rendering: pixelated;' +
                'image-rendering: crisp-edges;' +
                'user-select: none;' +
                '-webkit-user-select: none;' +
                '-khtml-user-select: none;' +
                '-moz-user-select: none;' +
                '-o-user-select: none;' +
                'user-select: none;' +
                'touch-action: none;' +
                'position: relative;' +
                '-webkit-user-drag: none;' +
                '-khtml-user-drag: none;' +
                '-moz-user-drag: none;' +
                '-o-user-drag: none;' +
                'user-drag: none;' +
                'padding: inherit';
        this._scrollContainer.style.cssText = 'overflow: scroll;' + 'position: absolute;' + 'width:  100%;' + 'height:  100%;';
        this._scrollContent.style.width = this._scrollContent.style.height = '100%';
        // add the text node to the created div
        this._scrollContainer.appendChild(this._scrollContent);
        this._container.appendChild(this._scrollContainer);
        var scrollBarWidth = this._scrollContainer.offsetWidth - this._scrollContent.clientWidth;
        // Calculate current browser scrollbar size and add offset for the canvas
        this._canvas.style.width = this._canvas.style.height = 'calc(100% -' + (scrollBarWidth || 17) + 'px)';
        this._container.appendChild(this._canvas);
        this._ctx = this._canvas.getContext('2d');
    };
    /**
     * Subscribe current component on the related events.
     */
    Timeline.prototype._subscribeOnEvents = function () {
        this._container.addEventListener('wheel', this._handleWheelEvent);
        if (this._scrollContainer) {
            this._scrollContainer.addEventListener('scroll', this._handleScrollEvent);
        }
        document.addEventListener('keyup', this._handleKeyUp, false);
        document.addEventListener('keydown', this._handleKeyDown, false);
        window.addEventListener('blur', this._handleBlurEvent, false);
        window.addEventListener('resize', this._handleWindowResizeEvent, false);
        this._canvas.addEventListener('touchstart', this._handleMouseDownEvent, false);
        this._canvas.addEventListener('mousedown', this._handleMouseDownEvent, false);
        window.addEventListener('mousemove', this._handleMouseMoveEvent, false);
        window.addEventListener('touchmove', this._handleMouseMoveEvent, false);
        window.addEventListener('mouseup', this._handleMouseUpEvent, false);
        window.addEventListener('touchend', this._handleMouseUpEvent, false);
    };
    Timeline.prototype.dispose = function () {
        // Unsubscribe all events
        this.offAll();
        this._container = null;
        this._canvas = null;
        this._scrollContainer = null;
        this._scrollContent = null;
        this._ctx = null;
        this._cleanUpSelection();
        this._container.removeEventListener('wheel', this._handleWheelEvent);
        if (this._scrollContainer) {
            this._scrollContainer.removeEventListener('scroll', this._handleScrollEvent);
        }
        window.removeEventListener('blur', this._handleBlurEvent);
        window.removeEventListener('resize', this._handleWindowResizeEvent);
        document.removeEventListener('keydown', this._handleKeyDown);
        document.removeEventListener('keyup', this._handleKeyUp);
        this._canvas.removeEventListener('touchstart', this._handleMouseDownEvent);
        this._canvas.removeEventListener('mousedown', this._handleMouseDownEvent);
        window.removeEventListener('mousemove', this._handleMouseMoveEvent);
        window.removeEventListener('touchmove', this._handleMouseMoveEvent);
        window.removeEventListener('mouseup', this._handleMouseUpEvent);
        window.removeEventListener('touchend', this._handleMouseUpEvent);
        // Stop times
        this._stopAutoPan();
        this._clearScrollFinishedTimer();
    };
    Timeline.prototype._setZoomCursor = function (e) {
        if (this._controlKeyPressed(e)) {
            this._setCursor(timelineCursorType_1.TimelineCursorType.ZoomOut);
        }
        else {
            this._setCursor(timelineCursorType_1.TimelineCursorType.ZoomIn);
        }
    };
    Timeline.prototype._clearScrollFinishedTimer = function () {
        if (this._scrollFinishedTimerRef) {
            clearTimeout(this._scrollFinishedTimerRef);
            this._scrollFinishedTimerRef = null;
        }
    };
    Timeline.prototype._controlKeyPressed = function (e) {
        if (!this._options || this._options.controlKeyIsMetaKey === undefined) {
            return e.metaKey || e.ctrlKey;
        }
        return this._options.controlKeyIsMetaKey || this._options.controlKeyIsMetaKey ? e.metaKey : e.ctrlKey;
    };
    Timeline.prototype._zoom = function (direction, speed, x) {
        if (speed > 0 && speed <= 1) {
            var deltaSpeed = timelineUtils_1.TimelineUtils.getDistance(this._width() / 2, x) * 0.2;
            x = x + deltaSpeed;
            var diff = this._width() / x;
            var val = this._fromScreen(x);
            var zoom = direction * this._currentZoom * speed;
            //this._options.zoom
            this._currentZoom = this._setZoom(this._currentZoom + zoom);
            // Get only after zoom is set
            var zoomCenter = this.valToPx(val);
            var newScrollLeft = Math.round(zoomCenter - this._width() / diff);
            if (newScrollLeft <= 0) {
                newScrollLeft = 0;
            }
            this._rescaleInternal(newScrollLeft + this._width(), null, 'zoom');
            if (this._scrollContainer.scrollLeft != newScrollLeft) {
                // Scroll event will redraw the screen.
                this._scrollContainer.scrollLeft = newScrollLeft;
            }
            this.redraw();
        }
    };
    /**
     * Zoom in
     * @param speed value from 0 to 1
     */
    Timeline.prototype.zoomIn = function (speed) {
        if (speed === void 0) { speed = this._options.zoomSpeed; }
        this._zoom(1, speed, this._scrollContainer.clientWidth / 2);
    };
    /**
     * Zoom out.
     * @param speed value from 0 to 1
     */
    Timeline.prototype.zoomOut = function (speed) {
        if (speed === void 0) { speed = this._options.zoomSpeed; }
        this._zoom(-1, speed, this._scrollContainer.clientWidth / 2);
    };
    /**
     * Set direct zoom value.
     * @param zoom zoom value to set. percent 0-1 and etc.
     * @param min min zoom.
     * @param max max zoom.
     * @return normalized value.
     */
    Timeline.prototype._setZoom = function (zoom, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        min = timelineUtils_1.TimelineUtils.isNumber(min) ? min : this._options ? this._options.zoomMin : null;
        max = timelineUtils_1.TimelineUtils.isNumber(max) ? max : this._options ? this._options.zoomMax : null;
        if (timelineUtils_1.TimelineUtils.isNumber(zoom)) {
            zoom = timelineUtils_1.TimelineUtils.keepInBounds(zoom, min, max);
            zoom = zoom || 1;
            this._currentZoom = zoom;
            return zoom;
        }
        return zoom;
    };
    /**
     * Set direct zoom value.
     * @public
     * @param zoom zoom value to set. percent 0-1 and etc.
     * @return normalized value.
     */
    Timeline.prototype.setZoom = function (zoom) {
        var prevZoom = this.getZoom();
        if (prevZoom !== zoom) {
            var zoomSet = this._setZoom(zoom);
            if (prevZoom != zoomSet) {
                this.rescale();
                this.redraw();
                return zoomSet;
            }
        }
        return prevZoom;
    };
    /**
     * Get current zoom level.
     */
    Timeline.prototype.getZoom = function () {
        if (timelineUtils_1.TimelineUtils.isNumber(this._currentZoom)) {
            return this._currentZoom || 1;
        }
        return 1;
    };
    Timeline.prototype._setElementDragState = function (element, val) {
        var state = element;
        state.prevVal = state.val;
        if (state.startedVal === undefined || state.startedVal === null) {
            state.startedVal = val;
        }
        if (state.prevVal === undefined || state.prevVal === null) {
            state.prevVal = val;
        }
        state.val = val;
        return state;
    };
    Timeline.prototype.isLeftButtonClicked = function (args) {
        return !!args && args.buttons == 1;
    };
    /**
     * Move elements
     * @param offset vector to move elements along.
     * @param elements Element to move.
     * @returns real moved value.
     */
    Timeline.prototype._moveElements = function (offset, elements, source) {
        var _this = this;
        if (source === void 0) { source = timelineEventSource_1.TimelineEventSource.Programmatically; }
        if (!elements) {
            return;
        }
        var isChanged = false;
        if (Math.abs(offset) > 0) {
            // Find drag min and max bounds:
            var bounds_1 = { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER };
            bounds_1 = timelineUtils_1.TimelineUtils.setMinMax(bounds_1, this._options);
            elements.forEach(function (p) {
                // find allowed bounds for the draggable items.
                // find for each row and keyframe separately.
                var currentBounds = timelineUtils_1.TimelineUtils.setMinMax(timelineUtils_1.TimelineUtils.setMinMax({ min: bounds_1.min, max: bounds_1.max }, p.keyframe), p.row);
                var expectedKeyframeValue = _this._options && _this._options.snapAllKeyframesOnMove ? _this.snapVal(p.keyframe.val) : p.keyframe.val;
                var newPosition = expectedKeyframeValue + offset;
                if (timelineUtils_1.TimelineUtils.isNumber(currentBounds.min) && newPosition < currentBounds.min) {
                    // Return to the bounds:
                    offset = offset + timelineUtils_1.TimelineUtils.getDistance(currentBounds.min, newPosition);
                }
                if (timelineUtils_1.TimelineUtils.isNumber(currentBounds.max) && newPosition > currentBounds.max) {
                    // Return to the bounds:
                    offset = offset - timelineUtils_1.TimelineUtils.getDistance(currentBounds.max, newPosition);
                }
            });
            if (Math.abs(offset) > 0) {
                // don't allow to move less than zero.
                elements.forEach(function (element) {
                    var prevVal = element.keyframe.val;
                    var toSet = prevVal + offset;
                    var newValue = _this._setKeyframePos(element, toSet, source);
                    isChanged = newValue !== prevVal;
                });
            }
            if (isChanged) {
                return offset;
            }
        }
        return 0;
    };
    /**
     * client height.
     */
    Timeline.prototype._height = function () {
        if (this._canvas) {
            return this._canvas.clientHeight;
        }
        return 0;
    };
    /**
     * Client width;
     */
    Timeline.prototype._width = function () {
        if (this._canvas) {
            return this._canvas.clientWidth;
        }
        return 0;
    };
    /**
     * Convert virtual calculation results to keyframes
     */
    Timeline.prototype._mapKeyframes = function (array) {
        var results = [];
        if (!array) {
            return results;
        }
        for (var i = 0; i < array.length; i++) {
            results.push(array[i].model || array[i].keyframe);
        }
        return results;
    };
    /**
     * Get all keyframes under the screen rectangle.
     * @param screenRect screen coordinates to get keyframes.
     */
    Timeline.prototype._getKeyframesByRectangle = function (screenRect) {
        var keyframesModels = [];
        this._forEachKeyframe(function (calcKeyframe) {
            if (timelineUtils_1.TimelineUtils.isOverlap(calcKeyframe.size.x, calcKeyframe.size.y, screenRect)) {
                keyframesModels.push(calcKeyframe.model);
            }
        });
        return keyframesModels;
    };
    Timeline.prototype._performClick = function (pos, drag) {
        var isChanged = false;
        if (drag && drag.type === timelineElementType_1.TimelineElementType.Keyframe) {
            var mode = timelineSelectionMode_1.TimelineSelectionMode.Normal;
            if ((this._startedDragWithCtrl && this._controlKeyPressed(pos.args)) || (this._startedDragWithShiftKey && pos.args.shiftKey)) {
                if (this._controlKeyPressed(pos.args)) {
                    mode = timelineSelectionMode_1.TimelineSelectionMode.Revert;
                }
            }
            // Reverse selected keyframe selection by a click:
            isChanged = this._selectInternal(this._drag.target.keyframe, mode).selectionChanged || isChanged;
            if (pos.args.shiftKey) {
                // Set current timeline position if it's not a drag or selection rect small or fast click.
                isChanged = this._setTimeInternal(pos.val, timelineEventSource_1.TimelineEventSource.User) || isChanged;
            }
        }
        else {
            // deselect keyframes if any:
            isChanged = this._selectInternal(null).selectionChanged || isChanged;
            // change timeline pos:
            // Set current timeline position if it's not a drag or selection rect small or fast click.
            isChanged = this._setTimeInternal(pos.val, timelineEventSource_1.TimelineEventSource.User) || isChanged;
        }
        return isChanged;
    };
    /**
     * Set keyframe value.
     * @param keyframe
     * @param value
     * @return set value.
     */
    Timeline.prototype._setKeyframePos = function (element, value, source) {
        if (source === void 0) { source = timelineEventSource_1.TimelineEventSource.Programmatically; }
        if (!element || !element.keyframe) {
            return value;
        }
        value = Math.floor(value);
        if (element.keyframe && element.keyframe.val != value) {
            element.prevVal = element.val;
            element.val = value;
            element.keyframe.val = value;
            var event_1 = this._emitKeyframeChanged(element, source);
            if (event_1.isPrevented()) {
                element.val = event_1.prevVal;
                element.keyframe.val = event_1.prevVal;
            }
            return value;
        }
        return value;
    };
    /**
     * @param cursor to set.
     */
    Timeline.prototype._setCursor = function (cursor) {
        if (this._canvas.style.cursor != cursor) {
            this._canvas.style.cursor = cursor;
        }
    };
    /**
     * Set pan mode
     * @param isPan
     */
    Timeline.prototype.setInteractionMode = function (mode) {
        if (this._interactionMode != mode) {
            this._interactionMode = mode;
            // Avoid any conflicts with other modes:
            this._cleanUpSelection();
        }
    };
    /**
     * Get current interaction mode.
     */
    Timeline.prototype.getInteractionMode = function () {
        return this._interactionMode;
    };
    Timeline.prototype._convertToElement = function (row, keyframe) {
        var data = {
            type: timelineElementType_1.TimelineElementType.Keyframe,
            val: keyframe.val,
            keyframe: keyframe,
            row: row,
        };
        return data;
    };
    Timeline.prototype.getSelectedKeyframes = function () {
        return this._mapKeyframes(this.getSelectedElements());
    };
    Timeline.prototype.getSelectedElements = function () {
        var _this = this;
        var selected = [];
        this._forEachKeyframe(function (keyframe) {
            if (keyframe && keyframe.model.selected) {
                selected.push(_this._convertToElement(keyframe.parentRow.model, keyframe.model));
            }
            return;
        });
        return selected;
    };
    Timeline.prototype.getAllKeyframes = function () {
        var selected = [];
        this._forEachKeyframe(function (keyframe) {
            selected.push(keyframe.model);
        });
        return selected;
    };
    Timeline.prototype.selectAllKeyframes = function () {
        return this.select(this.getAllKeyframes(), timelineSelectionMode_1.TimelineSelectionMode.Normal);
    };
    Timeline.prototype.deselectAll = function () {
        return this.select(null);
    };
    Timeline.prototype._changeNodeState = function (state, node, value) {
        if (node.selected !== value) {
            var selectable = typeof node.selectable === 'boolean' ? node.selectable : true;
            if (!value || (value && selectable)) {
                node.selected = value;
                state.changed.push(node);
                return true;
            }
        }
        return false;
    };
    Timeline.prototype.select = function (nodes, mode) {
        if (mode === void 0) { mode = timelineSelectionMode_1.TimelineSelectionMode.Normal; }
        var results = this._selectInternal(nodes, mode);
        if (results.selectionChanged) {
            this.redraw();
        }
        return results;
    };
    /**
     * Select keyframes
     * @param nodes keyframe or list of the keyframes to be selected.
     * @param mode selection mode.
     */
    Timeline.prototype._selectInternal = function (nodes, mode) {
        var _this = this;
        if (mode === void 0) { mode = timelineSelectionMode_1.TimelineSelectionMode.Normal; }
        if (!nodes) {
            nodes = [];
        }
        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }
        var state = {
            selectionChanged: false,
            selected: this.getSelectedKeyframes(),
            changed: [],
        };
        var nodesArray = nodes;
        //const state = this.selectedSubject.getValue();
        this.getSelectedElements();
        if (nodesArray && mode === timelineSelectionMode_1.TimelineSelectionMode.Append) {
            nodes.forEach(function (node) {
                var changed = _this._changeNodeState(state, node, true);
                if (changed && node.selected) {
                    state.selected.push(node);
                }
            });
        }
        else if (nodesArray && mode === timelineSelectionMode_1.TimelineSelectionMode.Revert) {
            nodes.forEach(function (node) {
                if (state.selected.indexOf(node) >= 0) {
                    _this._changeNodeState(state, node, false);
                    timelineUtils_1.TimelineUtils.deleteElement(state.selected, node);
                }
                else {
                    _this._changeNodeState(state, node, true);
                    if (node.selected) {
                        state.selected.push(node);
                    }
                }
            });
        }
        else if (mode === timelineSelectionMode_1.TimelineSelectionMode.Normal) {
            var selectedItems_1 = [];
            if (nodes) {
                nodes.forEach(function (node) {
                    _this._changeNodeState(state, node, true);
                    if (node.selected) {
                        selectedItems_1.push(node);
                    }
                });
            }
            state.selected.forEach(function (node) {
                var exists = nodesArray.indexOf(node) >= 0;
                // Deselect
                if (!exists) {
                    _this._changeNodeState(state, node, false);
                }
            });
            if (state.changed.length > 0) {
                if (selectedItems_1) {
                    state.selected = selectedItems_1;
                }
                else {
                    state.selected.length = 0;
                }
            }
        }
        if (state.changed.length > 0) {
            state.selectionChanged = true;
            this._emitKeyframesSelected(state);
        }
        return state;
    };
    /**
     * foreach visible keyframe.
     */
    Timeline.prototype._forEachKeyframe = function (callback) {
        if (!callback) {
            return;
        }
        if (!this._model) {
            return;
        }
        var calculatedModel = this._calculateModel();
        if (!calculatedModel) {
            return;
        }
        calculatedModel.rows.forEach(function (calcRow) {
            if (!calcRow) {
                return;
            }
            var nextRow = true;
            calcRow.keyframes.forEach(function (keyframe, keyframeIndex) {
                if (keyframe) {
                    callback(keyframe, keyframeIndex, nextRow);
                }
                nextRow = false;
            });
        });
    };
    Timeline.prototype._trackMousePos = function (canvas, mouseArgs) {
        var pos = this._getMousePos(canvas, mouseArgs);
        pos.originalVal = this._mousePosToVal(pos.x, false);
        pos.snapVal = this._mousePosToVal(pos.x, true);
        pos.val = pos.originalVal;
        if (this._options && this._options.snapEnabled) {
            pos.val = pos.snapVal;
        }
        if (this._startPos) {
            if (!this._selectionRect) {
                this._selectionRect = {};
            }
            // get the pos with the virtualization:
            var x = Math.floor(this._startPos.x + (this._scrollStartPos.x - this.getScrollLeft()));
            var y = Math.floor(this._startPos.y + (this._scrollStartPos.y - this.getScrollTop()));
            this._selectionRect.x = Math.min(x, pos.x);
            this._selectionRect.y = Math.min(y, pos.y);
            this._selectionRect.width = Math.max(x, pos.x) - this._selectionRect.x;
            this._selectionRect.height = Math.max(y, pos.y) - this._selectionRect.y;
            // Once mouse was moved outside of the bounds it's not a click anymore
            if (this._clickAllowed) {
                this._clickAllowed = this._selectionRect.height <= this._consts.clickThreshold && this._selectionRect.width <= this._consts.clickThreshold;
            }
        }
        return pos;
    };
    Timeline.prototype._cleanUpSelection = function () {
        this._emitDragFinishedEvent();
        this._startPos = null;
        this._drag = null;
        this._startedDragWithCtrl = false;
        this._startedDragWithShiftKey = false;
        this._selectionRect = null;
        this._clickTimeout = null;
        this._scrollStartPos = null;
        this._isPanStarted = false;
        this._clickAllowed = false;
        this._stopAutoPan();
    };
    /**
     * Check whether click timeout is over.
     */
    Timeline.prototype._clickTimeoutIsOver = function () {
        // Duration before the selection can be tracked.
        if (this._clickTimeout && Date.now() - this._clickTimeout > this._consts.clickDetectionMs) {
            return true;
        }
        return false;
    };
    /**
     * Automatically pan. Scroll canvas when selection is made and mouse outside of the bounds.
     */
    Timeline.prototype._startAutoPan = function () {
        var _this = this;
        if (this._consts.autoPanSpeed) {
            if (!this._intervalRef) {
                // Repeat move calls to
                this._intervalRef = setInterval(function () {
                    _this._handleMouseMoveEvent(null);
                }, this._consts.autoPanSpeed);
            }
        }
    };
    /**
     * Stop current running auto pan
     */
    Timeline.prototype._stopAutoPan = function () {
        if (this._intervalRef) {
            clearInterval(this._intervalRef);
            this._intervalRef = null;
        }
        this._autoPanLastActionDate = null;
    };
    /**
     * Check whether auto pan should be slowed down a bit.
     */
    Timeline.prototype._checkUpdateSpeedTooFast = function () {
        // Slow down updated a bit.
        if (this._autoPanLastActionDate && Date.now() - this._autoPanLastActionDate <= 10) {
            return true;
        }
        this._autoPanLastActionDate = Date.now();
        return false;
    };
    Timeline.prototype._scrollByPan = function (start, pos, scrollStartPos) {
        if (!start || !pos) {
            return;
        }
        var offsetX = Math.round(start.x - pos.x);
        var newLeft = scrollStartPos.x + offsetX;
        if (offsetX > 0) {
            this._rescaleInternal(newLeft + this._width());
        }
        if (offsetX > 0 && newLeft + this._width() >= this._scrollContainer.scrollWidth - 5) {
            this._scrollContainer.scrollLeft = this._scrollContainer.scrollWidth;
        }
        else {
            this._scrollContainer.scrollLeft = newLeft;
        }
        this._scrollContainer.scrollTop = Math.round(scrollStartPos.y + start.y - pos.y);
    };
    Timeline.prototype._scrollBySelectionOutOfBounds = function (pos) {
        var x = pos.x;
        var y = pos.y;
        var isChanged = false;
        var speedX = 0;
        var speedY = 0;
        // Small offset to start auto pan earlier.
        var bounds = this._consts.autoPanByScrollPadding;
        var isLeft = x <= bounds;
        var isRight = x >= this._width() - bounds;
        var isTop = y <= bounds;
        var isBottom = y >= this._height() - bounds;
        var newWidth = null;
        var newHeight = null;
        if (isLeft || isRight || isTop || isBottom) {
            // Auto move init
            this._startAutoPan();
            if (this._checkUpdateSpeedTooFast()) {
                return false;
            }
            var scrollSpeedMultiplier = isNaN(this._consts.scrollByDragSpeed) ? 1 : this._consts.scrollByDragSpeed;
            if (isLeft) {
                // Get normalized speed.
                speedX = -timelineUtils_1.TimelineUtils.getDistance(x, bounds) * scrollSpeedMultiplier;
            }
            else if (isRight) {
                // Get normalized speed:
                speedX = timelineUtils_1.TimelineUtils.getDistance(x, this._width() - bounds) * scrollSpeedMultiplier;
                newWidth = this.getScrollLeft() + this._width() + speedX;
            }
            if (isTop) {
                // Get normalized speed.
                speedY = (-timelineUtils_1.TimelineUtils.getDistance(x, bounds) * scrollSpeedMultiplier) / 4;
            }
            else if (isBottom) {
                // Get normalized speed:
                speedY = (timelineUtils_1.TimelineUtils.getDistance(x, this._height() - bounds) * scrollSpeedMultiplier) / 4;
                newHeight = this._scrollContainer.scrollTop + this._height();
            }
        }
        else {
            this._stopAutoPan();
        }
        if (newWidth || newHeight) {
            this._rescaleInternal(newWidth, newHeight, 'scrollBySelection');
        }
        if (Math.abs(speedX) > 0) {
            this._scrollContainer.scrollLeft += speedX;
            isChanged = true;
        }
        if (Math.abs(speedY) > 0) {
            this._scrollContainer.scrollTop += speedY;
            isChanged = true;
        }
        return isChanged;
    };
    /**
     * Convert screen pixel to value.
     */
    Timeline.prototype.pxToVal = function (px) {
        if (!this._options) {
            return px;
        }
        var min = this._options.min;
        if (!timelineUtils_1.TimelineUtils.isNumber(min)) {
            min = 0;
        }
        min *= this._currentZoom || 1;
        var steps = this._options.stepVal * this._currentZoom || 1;
        var val = min + (px / this._options.stepPx) * steps;
        return val;
    };
    /**
     * Convert value to local screen component coordinates.
     */
    Timeline.prototype._toScreenPx = function (val) {
        return this.valToPx(val) - this.getScrollLeft() + this._leftMargin();
    };
    /**
     * Convert screen local coordinates to a global value info.
     */
    Timeline.prototype._fromScreen = function (px) {
        return this.pxToVal(this.getScrollLeft() + px - this._leftMargin());
    };
    /**
     * Convert area value to global screen pixel coordinates.
     */
    Timeline.prototype.valToPx = function (val) {
        if (!this._options) {
            return val;
        }
        var min = this._options.min;
        if (!timelineUtils_1.TimelineUtils.isNumber(min)) {
            min = 0;
        }
        min *= this._currentZoom || 1;
        var steps = this._options.stepVal * this._currentZoom || 1;
        return (-min + val) * (this._options.stepPx / steps);
    };
    /**
     * Snap a value to a nearest grid point.
     */
    Timeline.prototype.snapVal = function (val) {
        // Snap a value if configured.
        if (this._options && this._options.snapEnabled && this._options.snapStep) {
            var stops = this._options.snapStep;
            var step = val / stops;
            var stepsFit = Math.round(step);
            var minSteps = Math.abs(this._options.min) / this._options.snapStep;
            var minOffset = timelineUtils_1.TimelineUtils.sign(this._options.min) * (minSteps - Math.floor(minSteps)) * this._options.snapStep;
            val = Math.round(minOffset) + Math.round(stepsFit * stops);
        }
        val = timelineUtils_1.TimelineUtils.keepInBounds(val, this._options.min, this._options.max);
        return val;
    };
    Timeline.prototype._mousePosToVal = function (x, snapEnabled) {
        if (snapEnabled === void 0) { snapEnabled = false; }
        var mousePos = Math.min(x, this._width());
        var convertedVal = this._fromScreen(mousePos);
        convertedVal = Math.round(convertedVal);
        if (snapEnabled) {
            convertedVal = this.snapVal(convertedVal);
        }
        return convertedVal;
    };
    /**
     * Format line gauge text.
     * Default formatting is HMS
     * @param ms milliseconds to convert.
     * @param isSeconds whether seconds are passed.
     */
    Timeline.prototype._formatUnitsText = function (ms, isSeconds) {
        if (isSeconds === void 0) { isSeconds = false; }
        var sign = timelineUtils_1.TimelineUtils.sign(ms) < 0 ? '-' : '';
        ms = Math.abs(ms);
        // 1- Convert to seconds:
        var seconds = ms / 1000;
        if (isSeconds) {
            seconds = ms;
        }
        var year = Math.floor(seconds / (365 * 86400));
        seconds = seconds % (365 * 86400);
        var days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;
        // 2- Extract hours:
        var hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        // 3- Extract minutes:
        var minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
        // 4- Keep only seconds not extracted to minutes:
        seconds = seconds % 60;
        var str = '';
        if (year) {
            str += year + ':';
        }
        if (days) {
            str += days + ':';
        }
        if (hours) {
            str += hours + ':';
        }
        if (minutes) {
            str += minutes + ':';
        }
        if (!isNaN(seconds)) {
            str += seconds;
        }
        return sign + str;
    };
    /**
     * Left padding of the timeline.
     */
    Timeline.prototype._leftMargin = function () {
        if (!this._options) {
            return 0;
        }
        return this._options.leftMargin || 0;
    };
    Timeline.prototype._renderTicks = function () {
        var rulerActive = !!this._ctx && !!this._options && !!this._ctx.canvas && this._ctx.canvas.clientWidth > 0 && this._ctx.canvas.clientHeight > 0 && this._options.stepPx;
        if (!rulerActive) {
            return;
        }
        var screenWidth = this._width() - this._leftMargin();
        var from = this.pxToVal(this.getScrollLeft());
        var to = this.pxToVal(this.getScrollLeft() + screenWidth);
        if (isNaN(from) || isNaN(to) || from === to) {
            return;
        }
        if (to < from) {
            var wasToVal = to;
            to = from;
            from = wasToVal;
        }
        var valDistance = timelineUtils_1.TimelineUtils.getDistance(from, to);
        if (valDistance <= 0) {
            return;
        }
        // Find the nearest 'beautiful' step for a gauge.
        // 'beautiful' step should be dividable by 1/2/5/10!
        var step = timelineUtils_1.TimelineUtils.findGoodStep(valDistance / (screenWidth / this._options.stepPx));
        var smallStep = timelineUtils_1.TimelineUtils.findGoodStep(valDistance / (screenWidth / this._options.stepSmallPx));
        // Find beautiful start point:
        var fromVal = Math.floor(from / step) * step;
        // Find a beautiful end point:
        var toVal = Math.ceil(to / step) * step + step;
        if (!timelineUtils_1.TimelineUtils.isNumber(step) || step <= 0 || Math.abs(toVal - fromVal) === 0) {
            return;
        }
        var lastTextStart = 0;
        this._ctx.save();
        var headerHeight = timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options);
        var tickHeight = headerHeight / 2;
        var smallTickHeight = headerHeight / 1.3;
        for (var i = fromVal; i <= toVal; i += step) {
            // local
            var sharpPos = this._getSharp(this._toScreenPx(i));
            this._ctx.save();
            this._ctx.beginPath();
            this._ctx.setLineDash([4]);
            this._ctx.lineWidth = 1;
            this._ctx.strokeStyle = this._options.tickColor;
            timelineUtils_1.TimelineUtils.drawLine(this._ctx, sharpPos, tickHeight, sharpPos, headerHeight);
            this._ctx.stroke();
            this._ctx.fillStyle = this._options.labelsColor;
            if (this._options.font) {
                this._ctx.font = this._options.font;
            }
            var text = this._formatUnitsText(i);
            var textSize = this._ctx.measureText(text);
            var textX = sharpPos - textSize.width / 2;
            // skip text render if there is no space for it.
            if (isNaN(lastTextStart) || lastTextStart <= textX) {
                lastTextStart = textX + textSize.width;
                this._ctx.fillText(text, textX, 10);
            }
            this._ctx.restore();
            if (!timelineUtils_1.TimelineUtils.isNumber(smallStep) || smallStep <= 0) {
                continue;
            }
            // Draw small steps
            for (var x = i + smallStep; x < i + step; x += smallStep) {
                // local
                var nextSharpPos = this._getSharp(this._toScreenPx(x));
                this._ctx.beginPath();
                this._ctx.lineWidth = this._pixelRatio;
                this._ctx.strokeStyle = this._options.tickColor;
                timelineUtils_1.TimelineUtils.drawLine(this._ctx, nextSharpPos, smallTickHeight, nextSharpPos, headerHeight);
                this._ctx.stroke();
            }
        }
        this._ctx.restore();
    };
    /**
     * calculate virtual mode. Determine screen positions for the elements.
     */
    Timeline.prototype._calculateModel = function () {
        var _this = this;
        var toReturn = {
            rows: [],
            size: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            min: null,
            max: null,
            keyframes: [],
        };
        if (!this._model) {
            return toReturn;
        }
        var rows = this._model.rows;
        if (!rows || !Array.isArray(rows) || rows.length <= 0) {
            return toReturn;
        }
        var rowAbsoluteHeight = timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options);
        rows.forEach(function (row, index) {
            if (!row || row.hidden) {
                return;
            }
            // draw with scroll virtualization:
            var rowHeight = timelineStyleUtils_1.TimelineStyleUtils.getRowHeight(row, _this._options);
            var marginBottom = timelineStyleUtils_1.TimelineStyleUtils.getRowMarginBottom(row, _this._options);
            var currentRowY = rowAbsoluteHeight - (_this._scrollContainer ? _this._scrollContainer.scrollTop : 0);
            rowAbsoluteHeight += rowHeight + marginBottom;
            if (index == 0) {
                toReturn.size.y = currentRowY;
            }
            toReturn.size.height = Math.max(rowAbsoluteHeight + rowHeight, toReturn.size.height);
            var calcRow = {
                size: { x: 0, y: currentRowY, width: _this._canvas ? _this._width() : 0, height: rowHeight },
                marginBottom: marginBottom,
                model: row,
                min: null,
                max: null,
                groups: [],
                keyframes: [],
            };
            toReturn.rows.push(calcRow);
            if (!row.keyframes || !row.keyframes.forEach || row.keyframes.length <= 0) {
                return;
            }
            // Get min and max ms to draw keyframe rows:
            if (row && row.keyframes) {
                row.keyframes.forEach(function (keyframe) {
                    if (keyframe && !isNaN(keyframe.val) && !keyframe.hidden) {
                        var currentGroup = null;
                        for (var i = 0; i < calcRow.groups.length; i++) {
                            var existingGroup = calcRow.groups[i];
                            if (keyframe.group === existingGroup.group) {
                                currentGroup = existingGroup;
                                break;
                            }
                        }
                        if (!currentGroup) {
                            currentGroup = {
                                min: null,
                                max: null,
                                group: keyframe.group,
                                keyframes: [],
                            };
                            calcRow.groups.push(currentGroup);
                        }
                        var keyframeSize = _this._getKeyframePosition(keyframe, calcRow);
                        var calcKeyframe = {
                            model: keyframe,
                            parentRow: calcRow,
                            parentGroup: currentGroup,
                            size: keyframeSize,
                        };
                        var min = currentGroup.min == null ? keyframe.val : Math.min(keyframe.val, currentGroup.min);
                        var max = currentGroup.max == null ? keyframe.val : Math.max(keyframe.val, currentGroup.max);
                        if (!isNaN(min)) {
                            currentGroup.min = min;
                        }
                        if (!isNaN(max)) {
                            currentGroup.max = max;
                        }
                        calcRow.keyframes.push(calcKeyframe);
                        currentGroup.keyframes.push(calcKeyframe);
                        toReturn.keyframes.push(calcKeyframe);
                    }
                });
            }
            calcRow.groups.forEach(function (group) {
                // Extend row min max bounds by a group bounds:
                timelineUtils_1.TimelineUtils.setMinMax(calcRow, group, true);
                // get group screen coords
                var groupRect = _this._getKeyframesGroupSize(row, calcRow.size.y, group.min, group.max);
                group.size = groupRect;
            });
            // Extend screen bounds by a current calculation:
            timelineUtils_1.TimelineUtils.setMinMax(toReturn, calcRow, true);
        });
        if (timelineUtils_1.TimelineUtils.isNumber(toReturn.max)) {
            toReturn.size.width = this.valToPx(toReturn.max);
        }
        return toReturn;
    };
    Timeline.prototype._renderRows = function () {
        var _this = this;
        var data = this._calculateModel();
        if (data && data.rows) {
            this._ctx.save();
            data.rows.forEach(function (rowCalc) {
                if (!rowCalc) {
                    return;
                }
                _this._ctx.fillStyle = timelineStyleUtils_1.TimelineStyleUtils.getRowFillColor(rowCalc.model, _this._options);
                //this._ctx.fillRect(data.areaRect.x, data.areaRect.y, data.areaRect.w, data.areaRect.h);
                // Note: bounds used instead of the clip while clip is slow!
                var bounds = _this._cutBounds(rowCalc.size);
                if (bounds) {
                    _this._ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
                }
                var keyframeLaneColor = timelineStyleUtils_1.TimelineStyleUtils.groupFillColor(rowCalc.model, _this._options);
                if (!rowCalc.groups) {
                    return;
                }
                rowCalc.groups.forEach(function (group) {
                    // get the bounds on a canvas
                    var rectBounds = _this._cutBounds(group.size);
                    if (rectBounds) {
                        _this._ctx.fillStyle = keyframeLaneColor;
                        _this._ctx.fillRect(rectBounds.x, rectBounds.y, rectBounds.width, rectBounds.height);
                    }
                });
            });
            this._ctx.restore();
        }
    };
    /**
     * Method is used for the optimization.
     * Only visible part should be rendered.
     */
    Timeline.prototype._cutBounds = function (rect) {
        if (!rect) {
            return null;
        }
        // default bounds: minX, maxX, minY, maxY
        var minX = 0, maxX = this._width(), minY = timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options), maxY = this._width();
        if (timelineUtils_1.TimelineUtils.isRectOverlap(rect, {
            x: minX,
            y: minY,
            width: timelineUtils_1.TimelineUtils.getDistance(minX, maxX),
            height: timelineUtils_1.TimelineUtils.getDistance(minY, maxY),
        })) {
            var y = Math.max(rect.y, minY);
            var x = Math.max(rect.x, minX);
            var offsetW = rect.x - x;
            var offsetH = rect.y - y;
            return {
                height: rect.height + offsetH,
                width: rect.width + offsetW,
                x: x,
                y: y,
                overlapY: Math.abs(offsetH) > 0,
                overlapX: Math.abs(offsetW) > 0,
            };
        }
        return null;
    };
    /**
     * get keyframe group screen rect coordinates.
     * @param row
     * @param rowY row screen coords y position
     */
    Timeline.prototype._getKeyframesGroupSize = function (row, rowY, minValue, maxValue) {
        var groupHeight = timelineStyleUtils_1.TimelineStyleUtils.rowGroupHeight(row, this._options);
        var height = timelineStyleUtils_1.TimelineStyleUtils.getRowHeight(row, this._options);
        if ((!groupHeight && groupHeight !== 0) || isNaN(groupHeight) || groupHeight == 'auto') {
            groupHeight = Math.floor(height * 0.7);
        }
        if (groupHeight > height) {
            groupHeight = height;
        }
        var margin = height - groupHeight;
        // draw keyframes rows.
        var xMin = this._toScreenPx(minValue); // local
        var xMax = this._toScreenPx(maxValue); // local
        return {
            x: xMin,
            y: rowY + Math.floor(margin / 2),
            height: groupHeight,
            width: timelineUtils_1.TimelineUtils.getDistance(xMin, xMax),
        };
    };
    Timeline.prototype._getKeyframePosition = function (keyframe, rowCalculated) {
        if (!keyframe) {
            console.log('keyframe should be defined.');
            return null;
        }
        var val = keyframe.val;
        if (isNaN(val)) {
            return null;
        }
        var rowSize = rowCalculated.size;
        // get center of the lane:
        var y = rowSize.y + rowSize.height / 2;
        var height = timelineStyleUtils_1.TimelineStyleUtils.getKeyframeStyle(keyframe, rowCalculated.model, this._options, 'height', 'auto');
        var width = timelineStyleUtils_1.TimelineStyleUtils.getKeyframeStyle(keyframe, rowCalculated.model, this._options, 'width', 'auto');
        if (height == 'auto') {
            height = rowSize.height / 3;
        }
        if (width == 'auto') {
            width = height;
        }
        if (height > 0) {
            if (!isNaN(val)) {
                var toReturn = {
                    x: Math.floor(this._toScreenPx(val)),
                    y: Math.floor(y),
                    height: height,
                    width: width,
                };
                return toReturn;
            }
        }
        return null;
    };
    Timeline.prototype._renderKeyframes = function () {
        var _this = this;
        this._forEachKeyframe(function (calcKeyframe) {
            var row = calcKeyframe.parentRow.model;
            var pos = calcKeyframe.size;
            var keyframe = calcKeyframe.model;
            if (pos) {
                var x = _this._getSharp(pos.x);
                var y = pos.y;
                var bounds = _this._cutBounds({
                    x: x - pos.width / 2,
                    y: y - pos.height / 2,
                    width: pos.width,
                    height: pos.height,
                });
                if (!bounds) {
                    return;
                }
                _this._ctx.save();
                // Performance FIX: use clip only  when we are in the collision! Clip is slow!
                // Other keyframes should be hidden by bounds check.
                if (bounds && bounds.overlapY) {
                    _this._ctx.beginPath();
                    _this._ctx.rect(0, timelineStyleUtils_1.TimelineStyleUtils.headerHeight(_this._options), _this._width(), _this._width());
                    _this._ctx.clip();
                }
                var shape = timelineStyleUtils_1.TimelineStyleUtils.keyframeShape(keyframe, row, _this._options);
                if (shape === timelineKeyframeShape_1.TimelineKeyframeShape.None) {
                    return;
                }
                var keyframeColor = keyframe.selected ? timelineStyleUtils_1.TimelineStyleUtils.keyframeSelectedFillColor(keyframe, row, _this._options) : timelineStyleUtils_1.TimelineStyleUtils.keyframeFillColor(keyframe, row, _this._options);
                var border = timelineStyleUtils_1.TimelineStyleUtils.keyframeStrokeThickness(keyframe, row, _this._options);
                var strokeColor = border > 0 ? (keyframe.selected ? timelineStyleUtils_1.TimelineStyleUtils.keyframeSelectedStrokeColor(keyframe, row, _this._options) : timelineStyleUtils_1.TimelineStyleUtils.keyframeStrokeColor(keyframe, row, _this._options)) : '';
                if (shape == timelineKeyframeShape_1.TimelineKeyframeShape.Rhomb) {
                    _this._ctx.beginPath();
                    _this._ctx.translate(x, y);
                    _this._ctx.rotate((45 * Math.PI) / 180);
                    if (border > 0 && strokeColor) {
                        _this._ctx.fillStyle = strokeColor;
                        _this._ctx.rect(-pos.width / 2, -pos.height / 2, pos.width, pos.height);
                        _this._ctx.fill();
                    }
                    _this._ctx.fillStyle = keyframeColor;
                    // draw main keyframe data with offset.
                    _this._ctx.translate(border, border);
                    _this._ctx.rect(-pos.width / 2, -pos.height / 2, pos.width - border * 2, pos.height - border * 2);
                    _this._ctx.fill();
                }
                else if (shape == timelineKeyframeShape_1.TimelineKeyframeShape.Circle) {
                    _this._ctx.beginPath();
                    if (border > 0 && strokeColor) {
                        _this._ctx.fillStyle = strokeColor;
                        _this._ctx.arc(x, y, pos.height, 0, 2 * Math.PI);
                    }
                    _this._ctx.fillStyle = keyframeColor;
                    _this._ctx.arc(x, y, pos.height - border, 0, 2 * Math.PI);
                    _this._ctx.fill();
                }
                else if (shape == timelineKeyframeShape_1.TimelineKeyframeShape.Rect) {
                    _this._ctx.beginPath();
                    y = y - pos.height / 2;
                    x = x - pos.width / 2;
                    if (border > 0 && strokeColor) {
                        _this._ctx.fillStyle = strokeColor;
                        _this._ctx.rect(x, y, pos.width, pos.height);
                        _this._ctx.fill();
                    }
                    _this._ctx.fillStyle = keyframeColor;
                    _this._ctx.rect(x + border, y + border, pos.width - border, pos.height - border);
                    _this._ctx.fill();
                }
                _this._ctx.restore();
            }
            return;
        });
    };
    Timeline.prototype._renderSelectionRect = function () {
        if (this._drag) {
            return;
        }
        this._ctx.save();
        var thickness = 1;
        if (this._selectionRect && this._selectionRectEnabled) {
            this._ctx.setLineDash([4]);
            this._ctx.lineWidth = this._pixelRatio;
            this._ctx.strokeStyle = this._options.selectionColor;
            this._ctx.strokeRect(this._getSharp(this._selectionRect.x, thickness), this._getSharp(this._selectionRect.y, thickness), Math.floor(this._selectionRect.width), Math.floor(this._selectionRect.height));
        }
        this._ctx.restore();
    };
    Timeline.prototype._renderBackground = function () {
        if (this._options.fillColor) {
            this._ctx.save();
            this._ctx.beginPath();
            this._ctx.rect(0, 0, this._width(), this._height());
            this._ctx.fillStyle = this._options.fillColor;
            this._ctx.fill();
            this._ctx.restore();
        }
        else {
            // Clear if bg not set.
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }
    };
    Timeline.prototype._renderTimeline = function () {
        if (!this._ctx || !this._options || !this._options.timelineStyle) {
            return;
        }
        var style = this._options.timelineStyle;
        this._ctx.save();
        var thickness = style.width || 1;
        this._ctx.lineWidth = thickness * this._pixelRatio;
        var timeLinePos = this._getSharp(this._toScreenPx(this._val), thickness);
        this._ctx.strokeStyle = style.strokeColor;
        this._ctx.fillStyle = style.fillColor;
        var y = style.marginTop;
        this._ctx.beginPath();
        timelineUtils_1.TimelineUtils.drawLine(this._ctx, timeLinePos, y, timeLinePos, this._height());
        this._ctx.stroke();
        if (style.capHeight && style.capWidth) {
            var rectSize = style.capWidth;
            var capHeight = style.capHeight;
            if (style.capType === timelineCapShape_1.TimelineCapShape.Triangle) {
                this._ctx.beginPath();
                this._ctx.moveTo(timeLinePos - rectSize / 2, y);
                this._ctx.lineTo(timeLinePos + rectSize / 2, y);
                this._ctx.lineTo(timeLinePos, capHeight);
                this._ctx.closePath();
                this._ctx.stroke();
            }
            else if (style.capType === timelineCapShape_1.TimelineCapShape.Rect) {
                this._ctx.fillRect(timeLinePos - rectSize / 2, y, rectSize, capHeight);
                this._ctx.fill();
            }
        }
        this._ctx.restore();
    };
    Timeline.prototype._renderHeaderBackground = function () {
        if (!this._ctx || !this._options) {
            return;
        }
        if (timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options)) {
            this._ctx.save();
            // draw ticks background
            this._ctx.lineWidth = this._pixelRatio;
            if (this._options.headerFillColor) {
                // draw ticks background
                this._ctx.lineWidth = this._pixelRatio;
                // draw header background
                this._ctx.fillStyle = this._options.headerFillColor;
                this._ctx.fillRect(0, 0, this._width(), timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options));
            }
            else {
                this._ctx.clearRect(0, 0, this._width(), timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options));
            }
            this._ctx.restore();
        }
    };
    Timeline.prototype.redraw = function () {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(this._redrawInternal);
        }
        else {
            this._redrawInternal();
        }
    };
    /**
     * perform scroll to max left.
     */
    Timeline.prototype.scrollLeft = function () {
        if (this._scrollContainer.scrollLeft != this._scrollContainer.scrollWidth) {
            this._scrollContainer.scrollLeft = this._scrollContainer.scrollWidth;
        }
    };
    /**
     * Get row by y coordinate.
     * @param posY y screen coordinate.
     */
    Timeline.prototype.getRowByY = function (posY) {
        var model = this._calculateModel();
        if (model && model.rows) {
            for (var i = 0; i < model.rows.length; i++) {
                var row = model.rows[i].size;
                if (row && row.y >= posY && posY <= row.y + row.height) {
                    return row;
                }
            }
        }
        return null;
    };
    /**
     * Find sharp pixel position
     */
    Timeline.prototype._getSharp = function (pos, thickness) {
        if (thickness === void 0) { thickness = 1; }
        pos = Math.round(pos);
        if (thickness % 2 == 0) {
            return pos;
        }
        return pos + this._pixelRatio / 2;
    };
    /**
     * Get current time:
     */
    Timeline.prototype.getTime = function () {
        return this._val;
    };
    /**
     * Set current time internal
     * @param val value.
     * @param source event source.
     */
    Timeline.prototype._setTimeInternal = function (val, source) {
        if (source === void 0) { source = timelineEventSource_1.TimelineEventSource.Programmatically; }
        val = Math.round(val);
        if (val < this._options.min) {
            val = this._options.min;
        }
        if (this._val != val) {
            var prevVal = this._val;
            var timelineEvent = new timelineTimeChangedEvent_1.TimelineTimeChangedEvent();
            timelineEvent.val = val;
            timelineEvent.prevVal = prevVal;
            timelineEvent.source = source;
            this._val = val;
            this.emit(timelineEvents_1.TimelineEvents.TimeChanged, timelineEvent);
            if (timelineEvent.isPrevented()) {
                this._val = prevVal;
                return false;
            }
            return true;
        }
        return false;
    };
    Timeline.prototype.setTime = function (val) {
        // don't allow to change time during drag:
        if (this._drag && this._drag.type === timelineElementType_1.TimelineElementType.Timeline) {
            return false;
        }
        var isChanged = this._setTimeInternal(val, timelineEventSource_1.TimelineEventSource.SetTimeMethod);
        if (isChanged) {
            this.rescale();
            this.redraw();
        }
        return isChanged;
    };
    Timeline.prototype.getOptions = function () {
        return this._options;
    };
    Timeline.prototype.setScrollLeft = function (value) {
        if (this._scrollContainer) {
            this._scrollContainer.scrollLeft = value;
        }
    };
    Timeline.prototype.setScrollTop = function (value) {
        if (this._scrollContainer) {
            this._scrollContainer.scrollTop = value;
        }
    };
    Timeline.prototype.getScrollLeft = function () {
        return this._scrollContainer ? this._scrollContainer.scrollLeft : 0;
    };
    Timeline.prototype.getScrollTop = function () {
        return this._scrollContainer ? this._scrollContainer.scrollTop : 0;
    };
    /**
     * Set options and render the component.
     * Options will be merged with the defaults and control invalidated
     */
    Timeline.prototype.setOptions = function (toSet) {
        this._options = this._setOptions(toSet);
        this.rescale();
        this.redraw();
        // Merged options:
        return this._options;
    };
    Timeline.prototype._setOptions = function (toSet) {
        this._options = this._mergeOptions(toSet);
        // Normalize and validate spans per value.
        this._options.snapStep = timelineUtils_1.TimelineUtils.keepInBounds(this._options.snapStep, 0, this._options.stepVal);
        this._currentZoom = this._setZoom(this._options.zoom, this._options.zoomMin, this._options.zoomMax);
        this._options.min = timelineUtils_1.TimelineUtils.isNumber(this._options.min) ? this._options.min : 0;
        this._options.max = timelineUtils_1.TimelineUtils.isNumber(this._options.max) ? this._options.max : Number.MAX_VALUE;
        if (this._scrollContainer) {
            var classList = this._scrollContainer.classList;
            if (this._options.scrollContainerClass && classList.contains(this._options.scrollContainerClass)) {
                classList.add(this._options.scrollContainerClass);
            }
            if (this._options.fillColor) {
                this._scrollContainer.style.background = this._options.fillColor;
            }
        }
        return this._options;
    };
    Timeline.prototype.getModel = function () {
        return this._model;
    };
    /**
     * Set model and redraw application.
     * @param data
     */
    Timeline.prototype.setModel = function (data) {
        this._model = data;
        this.rescale();
        this.redraw();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Timeline.prototype._getMousePos = function (canvas, e) {
        var radius = 1;
        var clientX = 0;
        var clientY = 0;
        if (e.changedTouches && e.changedTouches.length > 0) {
            // TODO: implement better touch support
            var touch = e.changedTouches[0];
            clientX = touch.clientX;
            clientY = touch.clientY;
            radius = Math.max(radius, touch.radiusX, touch.radiusY);
        }
        else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / this._pixelRatio / rect.width, // relationship bitmap vs. element for X
        scaleY = canvas.height / this._pixelRatio / rect.height; // relationship bitmap vs. element for Y
        var x = (clientX - rect.left) * scaleX;
        var y = (clientY - rect.top) * scaleY;
        // scale mouse coordinates after they have been adjusted to be relative to element
        return {
            x: x,
            y: y,
            radius: radius,
            args: e,
        };
    };
    /**
     * Apply container div size to the container on changes detected.
     */
    Timeline.prototype._updateCanvasScale = function () {
        if (!this._scrollContainer || !this._ctx) {
            console.log('control should be initialized first');
            return;
        }
        var changed = false;
        var width = this._scrollContainer.clientWidth * this._pixelRatio;
        var height = this._scrollContainer.clientHeight * this._pixelRatio;
        if (Math.floor(width) != Math.floor(this._ctx.canvas.width)) {
            this._ctx.canvas.width = width;
            changed = true;
        }
        if (Math.floor(height) != Math.floor(this._ctx.canvas.height)) {
            this._ctx.canvas.height = height;
            changed = true;
        }
        if (changed) {
            this._ctx.setTransform(this._pixelRatio, 0, 0, this._pixelRatio, 0, 0);
        }
        return changed;
    };
    /**
     * Rescale and update size of the container.
     */
    Timeline.prototype.rescale = function () {
        this._rescaleInternal();
    };
    Timeline.prototype._rescaleInternal = function (newWidth, newHeight, scrollMode) {
        if (newWidth === void 0) { newWidth = null; }
        if (newHeight === void 0) { newHeight = null; }
        if (scrollMode === void 0) { scrollMode = 'default'; }
        this._updateCanvasScale();
        var data = this._calculateModel();
        if (data && data.size) {
            var additionalOffset = this._options.stepPx;
            newWidth = newWidth || 0;
            // not less than current timeline position
            var timelineGlobalPos = this.valToPx(this._val);
            var timelinePos = 0;
            if (timelineGlobalPos > this._width()) {
                if (scrollMode == 'scrollBySelection') {
                    timelinePos = Math.floor(timelineGlobalPos + this._width() + (this._options.stepPx || 0));
                }
                else {
                    timelinePos = Math.floor(timelineGlobalPos + this._width() / 1.5);
                }
            }
            var keyframeW = data.size.width + this._leftMargin() + additionalOffset;
            newWidth = Math.max(newWidth,
            // keyframes size
            keyframeW,
            // not less than current scroll position
            this.getScrollLeft() + this._width(), timelinePos);
            var minWidthPx = Math.floor(newWidth) + 'px';
            if (minWidthPx != this._scrollContent.style.minWidth) {
                this._scrollContent.style.minWidth = minWidthPx;
            }
            newHeight = Math.max(Math.floor(data.size.height + this._height() * 0.2), this._scrollContainer.scrollTop + this._height() - 1, Math.round(newHeight || 0));
            var h = newHeight + 'px';
            if (this._scrollContent.style.minHeight != h) {
                this._scrollContent.style.minHeight = h;
            }
        }
    };
    /**
     * get draggable element.
     * Filter elements and get first element by a priority.
     * @param Array
     * @param val current mouse value
     */
    Timeline.prototype._findDraggable = function (elements, val) {
        var _this = this;
        if (val === void 0) { val = null; }
        // filter and sort: TimelineView, individual keyframes, groups (distance).
        var getPriority = function (type) {
            if (type === timelineElementType_1.TimelineElementType.Timeline) {
                return 1;
            }
            else if (type === timelineElementType_1.TimelineElementType.Keyframe) {
                return 2;
            }
            else if (type === timelineElementType_1.TimelineElementType.Group) {
                return 3;
            }
            return -1;
        };
        var filteredElements = elements.filter(function (element) {
            if (!element) {
                return false;
            }
            if (element.type === timelineElementType_1.TimelineElementType.Keyframe) {
                if (!timelineStyleUtils_1.TimelineStyleUtils.keyframeDraggable(element.keyframe, element.row, _this._options)) {
                    return false;
                }
            }
            else if (element.type === timelineElementType_1.TimelineElementType.Group) {
                if (!timelineStyleUtils_1.TimelineStyleUtils.groupDraggable(element.row, _this._options)) {
                    return false;
                }
            }
            else if (element.type === timelineElementType_1.TimelineElementType.Row) {
                return false;
            }
            return true;
        });
        var sorted = filteredElements.sort(function (a, b) {
            var prioA = getPriority(a.type);
            var prioB = getPriority(b.type);
            if (prioA === prioB) {
                if (val === null) {
                    return 0;
                }
                // Sort by distance
                prioA = timelineUtils_1.TimelineUtils.getDistance(a.val, val);
                prioB = timelineUtils_1.TimelineUtils.getDistance(b.val, val);
                if (prioA === prioB) {
                    return 0;
                }
                return prioA < prioB ? 1 : -1;
            }
            return prioA < prioB ? 1 : -1;
        });
        if (sorted.length > 0) {
            return sorted[sorted.length - 1];
        }
        return null;
    };
    /**
     * get all clickable elements by a screen point.
     */
    Timeline.prototype.elementFromPoint = function (pos, clickRadius) {
        var _this = this;
        if (clickRadius === void 0) { clickRadius = 2; }
        clickRadius = Math.max(clickRadius, 1);
        var toReturn = [];
        if (!pos) {
            return toReturn;
        }
        var headerHeight = timelineStyleUtils_1.TimelineStyleUtils.headerHeight(this._options);
        // Check whether we can drag timeline.
        var timeLinePos = this._toScreenPx(this._val);
        var width = 0;
        if (this._options && this._options.timelineStyle) {
            var timelineStyle = this._options.timelineStyle;
            width = Math.max((timelineStyle.width || 1) * this._pixelRatio, (timelineStyle.capWidth || 0) * this._pixelRatio || 1) + clickRadius;
        }
        // Allow to select timeline only by half of a header to allow select by a selector top most keyframes row.
        if (pos.y <= headerHeight * 0.5 || (pos.x >= timeLinePos - width / 2 && pos.x <= timeLinePos + width / 2)) {
            toReturn.push({
                val: this._val,
                type: timelineElementType_1.TimelineElementType.Timeline,
            });
        }
        var snap = this._options.snapEnabled;
        if (pos.y >= headerHeight && this._options.keyframesDraggable) {
            this._forEachKeyframe(function (calcKeyframe, index, isNextRow) {
                // Check keyframes group overlap
                if (isNextRow) {
                    var rowOverlapped = timelineUtils_1.TimelineUtils.isOverlap(pos.x, pos.y, calcKeyframe.parentRow.size);
                    if (rowOverlapped) {
                        var row = {
                            val: _this._mousePosToVal(pos.x, snap),
                            keyframes: calcKeyframe.parentRow.model.keyframes,
                            type: timelineElementType_1.TimelineElementType.Row,
                            row: calcKeyframe.parentRow.model,
                        };
                        toReturn.push(row);
                    }
                    if (calcKeyframe.parentRow.groups) {
                        calcKeyframe.parentRow.groups.forEach(function (group) {
                            var keyframesGroupOverlapped = timelineUtils_1.TimelineUtils.isOverlap(pos.x, pos.y, group.size);
                            if (keyframesGroupOverlapped) {
                                var keyframesModels = _this._mapKeyframes(group.keyframes);
                                var groupElement = {
                                    val: _this._mousePosToVal(pos.x, snap),
                                    type: timelineElementType_1.TimelineElementType.Group,
                                    group: group,
                                    row: calcKeyframe.parentRow.model,
                                    keyframes: keyframesModels,
                                };
                                var snapped = _this.snapVal(group.min);
                                // get snapped mouse pos based on a min value.
                                groupElement.val += group.min - snapped;
                                toReturn.push(groupElement);
                            }
                        });
                    }
                }
                var keyframePos = calcKeyframe.size;
                if (keyframePos) {
                    var dist = timelineUtils_1.TimelineUtils.getDistance(keyframePos.x, keyframePos.y, pos.x, pos.y);
                    if (dist <= keyframePos.height + clickRadius) {
                        toReturn.push({
                            keyframe: calcKeyframe.model,
                            keyframes: [calcKeyframe.model],
                            val: calcKeyframe.model.val,
                            row: calcKeyframe.parentRow.model,
                            type: timelineElementType_1.TimelineElementType.Keyframe,
                        });
                    }
                }
                return;
            });
        }
        return toReturn;
    };
    /**
     * Merge options with the defaults.
     */
    Timeline.prototype._mergeOptions = function (from) {
        from = from || {};
        // Apply incoming options to default. (override default)
        // Deep clone default options:
        var to = JSON.parse(JSON.stringify(defaults_1.defaultTimelineOptions));
        // Merge options with the default.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var mergeOptionsDeep = function (to, from) {
            if (!to || !from) {
                return;
            }
            // eslint-disable-next-line prefer-const
            for (var key in from) {
                if (Object.prototype.hasOwnProperty.call(from, key)) {
                    if (from[key] !== undefined) {
                        if (typeof from[key] === 'object') {
                            if (!to[key]) {
                                to[key] = from[key];
                            }
                            else {
                                mergeOptionsDeep(to[key], from[key]);
                            }
                        }
                        else {
                            to[key] = from[key];
                        }
                    }
                }
            }
        };
        mergeOptionsDeep(to, from);
        return to;
    };
    /**
     * Subscribe on time changed.
     */
    Timeline.prototype.onTimeChanged = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.TimeChanged, callback);
    };
    /**
     * Subscribe on drag started event.
     */
    Timeline.prototype.onDragStarted = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.DragStarted, callback);
    };
    /**
     * Subscribe on drag event.
     */
    Timeline.prototype.onDrag = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.Drag, callback);
    };
    /**
     * Subscribe on drag finished event.
     */
    Timeline.prototype.onDragFinished = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.DragFinished, callback);
    };
    /**
     * Subscribe on double click.
     */
    Timeline.prototype.onDoubleClick = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.DoubleClick, callback);
    };
    /**
     * Subscribe on keyframe changed event.
     */
    Timeline.prototype.onKeyframeChanged = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.KeyframeChanged, callback);
    };
    /**
     * Subscribe on drag finished event.
     */
    Timeline.prototype.onMouseDown = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.MouseDown, callback);
    };
    Timeline.prototype.onSelected = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.Selected, callback);
    };
    /**
     * Subscribe on scroll event
     */
    Timeline.prototype.onScroll = function (callback) {
        this.on(timelineEvents_1.TimelineEvents.Scroll, callback);
    };
    Timeline.prototype._emitScrollEvent = function (args) {
        var scrollEvent = {
            args: args,
            scrollLeft: this.getScrollLeft(),
            scrollTop: this.getScrollTop(),
            scrollHeight: this._scrollContainer.scrollHeight,
            scrollWidth: this._scrollContainer.scrollWidth,
        };
        _super.prototype.emit.call(this, timelineEvents_1.TimelineEvents.Scroll, scrollEvent);
        return scrollEvent;
    };
    Timeline.prototype._emitKeyframeChanged = function (element, source) {
        if (source === void 0) { source = timelineEventSource_1.TimelineEventSource.Programmatically; }
        var args = new timelineKeyframeChangedEvent_1.TimelineKeyframeChangedEvent();
        args.val = element.val;
        args.prevVal = element.prevVal;
        args.target = element;
        args.source = source;
        this.emit(timelineEvents_1.TimelineEvents.KeyframeChanged, args);
        return args;
    };
    Timeline.prototype._emitDragStartedEvent = function () {
        var args = this._getDragEventArgs();
        this.emit(timelineEvents_1.TimelineEvents.DragStarted, args);
        if (args.isPrevented()) {
            this._preventDrag(args, this._drag, true);
        }
        return args;
    };
    Timeline.prototype._emitDragFinishedEvent = function () {
        if (this._drag && this._drag.changed) {
            var args = this._getDragEventArgs();
            this.emit(timelineEvents_1.TimelineEvents.DragFinished, args);
            if (args.isPrevented()) {
                this._preventDrag(args, this._drag, true);
            }
            return args;
        }
        return null;
    };
    Timeline.prototype._preventDrag = function (dragArgs, data, toStart) {
        var _this = this;
        if (toStart === void 0) { toStart = false; }
        if (dragArgs.elements) {
            dragArgs.elements.forEach(function (element) {
                var toSet = toStart ? element.startedVal : element.prevVal;
                _this._setKeyframePos(element, toSet);
            });
        }
        data.val = data.prevVal;
        dragArgs.val = dragArgs.prevVal;
    };
    Timeline.prototype._emitDragEvent = function () {
        if (!this._drag) {
            return null;
        }
        var args = this._getDragEventArgs();
        this.emit(timelineEvents_1.TimelineEvents.Drag, args);
        if (args.isPrevented()) {
            this._preventDrag(args, this._drag, false);
        }
        return args;
    };
    Timeline.prototype._emitKeyframesSelected = function (state) {
        var args = new timelineSelectedEvent_1.TimelineSelectedEvent();
        args.selected = state.selected;
        args.changed = state.changed;
        this.emit(timelineEvents_1.TimelineEvents.Selected, args);
        return args;
    };
    Timeline.prototype._getDragEventArgs = function () {
        var draggableArguments = new timelineDragEvent_1.TimelineDragEvent();
        if (!this._drag) {
            return draggableArguments;
        }
        draggableArguments.val = this._currentPos.val;
        draggableArguments.originalVal = this._currentPos.originalVal;
        draggableArguments.snapVal = this._currentPos.snapVal;
        draggableArguments.pos = this._currentPos;
        draggableArguments.elements = this._drag.elements;
        draggableArguments.target = this._drag.target;
        return draggableArguments;
    };
    return Timeline;
}(timelineEventsEmitter_1.TimelineEventsEmitter));
exports.Timeline = Timeline;
//# sourceMappingURL=timeline.js.map
