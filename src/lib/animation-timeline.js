let define;
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports.timelineModule = factory();
  else root.timelineModule = factory();
}(window, () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		const ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 18);
    /** *** */ }([
    /* 0 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 1 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 2 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 3 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 4 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 5 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 6 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 7 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 8 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 9 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 10 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 11 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 12 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 13 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 14 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 15 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 16 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 17 */
    /** */ (function (module, exports) {


      /** */ }),
    /* 18 */
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'Timeline', () => /* reexport */ timeline_Timeline);
      __webpack_require__.d(__webpack_exports__, 'TimelineModel', () => /* reexport */ timelineModel.TimelineModel);
      __webpack_require__.d(__webpack_exports__, 'TimelineRow', () => /* reexport */ timelineRow.TimelineRow);
      __webpack_require__.d(__webpack_exports__, 'TimelineKeyframe', () => /* reexport */ timelineKeyframe.TimelineKeyframe);
      __webpack_require__.d(__webpack_exports__, 'TimelineEventsEmitter', () => /* reexport */ TimelineEventsEmitter);
      __webpack_require__.d(__webpack_exports__, 'TimelineConsts', () => /* reexport */ timelineConsts.TimelineConsts);
      __webpack_require__.d(__webpack_exports__, 'TimelineRanged', () => /* reexport */ timelineRanged.TimelineRanged);
      __webpack_require__.d(__webpack_exports__, 'TimelineOptions', () => /* reexport */ timelineOptions.TimelineOptions);
      __webpack_require__.d(__webpack_exports__, 'TimelineKeyframeStyle', () => /* reexport */ timelineKeyframeStyle.TimelineKeyframeStyle);
      __webpack_require__.d(__webpack_exports__, 'TimelineRowStyle', () => /* reexport */ timelineRowStyle.TimelineRowStyle);
      __webpack_require__.d(__webpack_exports__, 'TimelineStyle', () => /* reexport */ styles_timelineStyle.TimelineStyle);
      __webpack_require__.d(__webpack_exports__, 'TimelineStyleUtils', () => /* reexport */ timelineStyleUtils_TimelineStyleUtils);
      __webpack_require__.d(__webpack_exports__, 'TimelineUtils', () => /* reexport */ TimelineUtils);
      __webpack_require__.d(__webpack_exports__, 'TimelineElement', () => /* reexport */ timelineElement.TimelineElement);
      __webpack_require__.d(__webpack_exports__, 'Selectable', () => /* reexport */ selectable.Selectable);
      __webpack_require__.d(__webpack_exports__, 'TimelineCutBoundsRectResults', () => /* reexport */ timelineCutBoundsRectResults.TimelineCutBoundsRectResults);
      __webpack_require__.d(__webpack_exports__, 'TimelineSelectionResults', () => /* reexport */ timelineSelectionResults.TimelineSelectionResults);
      __webpack_require__.d(__webpack_exports__, 'TimelineValues', () => /* reexport */ timelineValues.TimelineValues);
      __webpack_require__.d(__webpack_exports__, 'TimelineMouseData', () => /* reexport */ timelineMouseData.TimelineMouseData);
      __webpack_require__.d(__webpack_exports__, 'TimelineElementDragState', () => /* reexport */ timelineDraggableData.TimelineElementDragState);
      __webpack_require__.d(__webpack_exports__, 'TimelineDraggableData', () => /* reexport */ timelineDraggableData.TimelineDraggableData);
      __webpack_require__.d(__webpack_exports__, 'TimelineModelCalcResults', () => /* reexport */ timelineModelCalcResults.TimelineModelCalcResults);
      __webpack_require__.d(__webpack_exports__, 'TimelineCalculatedRow', () => /* reexport */ timelineModelCalcResults.TimelineCalculatedRow);
      __webpack_require__.d(__webpack_exports__, 'TimelineCalculatedGroup', () => /* reexport */ timelineModelCalcResults.TimelineCalculatedGroup);
      __webpack_require__.d(__webpack_exports__, 'TimelineCalculated', () => /* reexport */ timelineModelCalcResults.TimelineCalculated);
      __webpack_require__.d(__webpack_exports__, 'TimelineCalculatedKeyframe', () => /* reexport */ timelineModelCalcResults.TimelineCalculatedKeyframe);
      __webpack_require__.d(__webpack_exports__, 'TimelineKeyframeChangedEvent', () => /* reexport */ TimelineKeyframeChangedEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineTimeChangedEvent', () => /* reexport */ timelineTimeChangedEvent_TimelineTimeChangedEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineSelectedEvent', () => /* reexport */ TimelineSelectedEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineScrollEvent', () => /* reexport */ timelineScrollEvent.TimelineScrollEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineClickEvent', () => /* reexport */ TimelineClickEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineDragEvent', () => /* reexport */ TimelineDragEvent);
      __webpack_require__.d(__webpack_exports__, 'TimelineEvents', () => /* reexport */ TimelineEvents);
      __webpack_require__.d(__webpack_exports__, 'TimelineKeyframeShape', () => /* reexport */ TimelineKeyframeShape);
      __webpack_require__.d(__webpack_exports__, 'TimelineInteractionMode', () => /* reexport */ TimelineInteractionMode);
      __webpack_require__.d(__webpack_exports__, 'TimelineElementType', () => /* reexport */ TimelineElementType);
      __webpack_require__.d(__webpack_exports__, 'TimelineCursorType', () => /* reexport */ TimelineCursorType);
      __webpack_require__.d(__webpack_exports__, 'TimelineCapShape', () => /* reexport */ TimelineCapShape);
      __webpack_require__.d(__webpack_exports__, 'TimelineEventSource', () => /* reexport */ TimelineEventSource);
      __webpack_require__.d(__webpack_exports__, 'TimelineSelectionMode', () => /* reexport */ TimelineSelectionMode);
      __webpack_require__.d(__webpack_exports__, 'defaultTimelineOptions', () => /* reexport */ defaultTimelineOptions);
      __webpack_require__.d(__webpack_exports__, 'defaultTimelineKeyframeStyle', () => /* reexport */ defaultTimelineKeyframeStyle);
      __webpack_require__.d(__webpack_exports__, 'defaultTimelineRowStyle', () => /* reexport */ defaultTimelineRowStyle);
      __webpack_require__.d(__webpack_exports__, 'defaultTimelineStyle', () => /* reexport */ defaultTimelineStyle);
      __webpack_require__.d(__webpack_exports__, 'defaultTimelineConsts', () => /* reexport */ defaultTimelineConsts);

      // CONCATENATED MODULE: ./src/timelineEventsEmitter.ts
      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      var TimelineEventsEmitter = /* #__PURE__ */(function () {
        function TimelineEventsEmitter() {
          _classCallCheck(this, TimelineEventsEmitter);

          _defineProperty(this, '_subscriptions', []);
        }

        _createClass(TimelineEventsEmitter, [{
          key: 'on',
          // on event.
          value: function on(topic, callback) {
            if (!callback) {
              return;
            }

            this._subscriptions.push({
              topic,
              callback,
            });
          },
          /**
     * Remove an event from the subscriptions list.
     */

        }, {
          key: 'off',
          value: function off(topic, callback) {
            this._subscriptions = this._subscriptions.filter((event) => event && event.callback != callback && event.topic != topic);
          },
          /**
     * Unsubscribe all
     */

        }, {
          key: 'offAll',
          value: function offAll() {
            this._subscriptions.length = 0;
          }, // emit event.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

        }, {
          key: 'emit',
          value: function emit(topic, args) {
            this._subscriptions.forEach((event) => {
              if (event && event.topic == topic && event.callback) {
                event.callback(args);
              }
            });
          },
        }]);

        return TimelineEventsEmitter;
      }());
      // CONCATENATED MODULE: ./src/utils/timelineUtils.ts
      function timelineUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineUtils_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function timelineUtils_createClass(Constructor, protoProps, staticProps) { if (protoProps) timelineUtils_defineProperties(Constructor.prototype, protoProps); if (staticProps) timelineUtils_defineProperties(Constructor, staticProps); return Constructor; }

      const denominators = [1, 2, 5, 10];
      var TimelineUtils = /* #__PURE__ */(function () {
        function TimelineUtils() {
          timelineUtils_classCallCheck(this, TimelineUtils);
        }

        timelineUtils_createClass(TimelineUtils, null, [{
          key: 'drawLine',
          value: function drawLine(ctx, x1, y1, x2, y2) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          },
          /**
     * Check is valid number.
     */

        }, {
          key: 'isNumber',
          value: function isNumber(val) {
            if (typeof val === 'number' && !isNaN(val) && Number.isFinite(val)) {
              return true;
            }

            return false;
          },
        }, {
          key: 'deleteElement',
          value: function deleteElement(array, element) {
            const index = array.indexOf(element);

            if (index !== -1) {
              return array.splice(index, 1);
            }

            return array;
          },
          /**
     * Check rectangle overlap.
     */

        }, {
          key: 'isOverlap',
          value: function isOverlap(x, y, rectangle) {
            if (!rectangle) {
              return false;
            }

            if (rectangle.x <= x && rectangle.x + rectangle.width >= x && rectangle.y <= y && rectangle.y + rectangle.height >= y) {
              return true;
            }

            return false;
          },
          /**
     * Find beautiful step for the header line gauge.
     */

        }, {
          key: 'findGoodStep',
          value: function findGoodStep(originalStep) {
            const divisionCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (originalStep <= 0 || isNaN(originalStep) || !Number.isFinite(originalStep)) {
              return originalStep;
            }

            let step = originalStep;
            let lastDistance = null;
            const pow = TimelineUtils.getPowArgument(originalStep);

            for (let i = 0; i < denominators.length; i++) {
              const denominator = denominators[i];
              const calculatedStep = denominator * Math.pow(10, pow);

              if (divisionCheck && divisionCheck % calculatedStep != 0) {
                continue;
              }

              const distance = TimelineUtils.getDistance(originalStep, calculatedStep);

              if (distance == 0 || distance <= 0.1 && pow > 0) {
                lastDistance = distance;
                step = calculatedStep;
                break;
              } else if (!lastDistance || lastDistance > distance) {
                lastDistance = distance;
                step = calculatedStep;
              }
            }

            return step;
          },
          /**
     * Keep value in min, max bounds.
     */

        }, {
          key: 'keepInBounds',
          value: function keepInBounds(value) {
            const min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            const max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (TimelineUtils.isNumber(value)) {
              if (TimelineUtils.isNumber(min)) {
                value = Math.max(value, min);
              }

              if (TimelineUtils.isNumber(max)) {
                value = Math.min(value, max);
              }
            }

            return value;
          },
        }, {
          key: 'setMinMax',
          value: function setMinMax(to, from) {
            const shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!from || !to) {
              return to;
            }

            const fromMin = Math.min(from.getMin ? from.getMin() : from.min, from.min);
            const toMin = Math.min(to.getMin ? to.getMin() : to.min, to.min);
            const isFromMinNumber = TimelineUtils.isNumber(fromMin);
            const isToMinNumber = TimelineUtils.isNumber(toMin); // get absolute min and max bounds:

            if (isFromMinNumber && isToMinNumber) {
              to.min = shrink ? Math.min(fromMin, toMin) : Math.max(fromMin, toMin);
            } else if (isFromMinNumber) {
              to.min = fromMin;
            }

            const fromMax = Math.min(from.getMax && from.getMax ? from.getMax() : from.max, from.max);
            const toMax = Math.min(to.getMax ? to.getMax() : to.max, to.max);
            const isFromMaxNumber = TimelineUtils.isNumber(fromMax);
            const isToMaxNumber = TimelineUtils.isNumber(toMax);

            if (isFromMaxNumber && isToMaxNumber) {
              to.max = shrink ? Math.max(fromMax, toMax) : Math.min(fromMax, toMax);
            } else if (isFromMaxNumber) {
              to.max = fromMax;
            }

            return to;
          },
        }, {
          key: 'isRectOverlap',
          value: function isRectOverlap(rect, rect2) {
            if (!rect || !rect2) {
              console.log('Rectangles cannot be empty');
              return false;
            } // If one rectangle is on left side of other


            if (rect.x > rect2.x + rect2.width || rect2.x > rect.x + rect.width) {
              return true;
            } // If one rectangle is above other


            if (rect.y < rect2.y + rect2.height || rect2.y < rect.y + rect.height) {
              return true;
            }

            return false;
          },
        }, {
          key: 'getDistance',
          value: function getDistance(x1, y1, x2, y2) {
            if (x2 != undefined && y2 != undefined) {
              return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }
            return Math.abs(x1 - y1);
          },
        }, {
          key: 'sign',
          value: function sign(p) {
            return p >= 0 ? 1 : -1;
          },
        }, {
          key: 'clearBrowserSelection',
          value: function clearBrowserSelection() {
            if (!window) {
              return;
            }

            if (window.getSelection) {
              window.getSelection().removeAllRanges();
            } else {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const doc = window.document;

              if (doc.selection) {
                doc.selection.empty();
              }
            }
          },
        }, {
          key: 'getPowArgument',
          value: function getPowArgument(toCheck) {
            if (!toCheck || toCheck === 0 || !isFinite(toCheck)) {
              return 1;
            } // some optimization for numbers:


            if (toCheck >= 10 && toCheck < 100) {
              return 1;
            } if (toCheck >= 100 && toCheck < 1000) {
              return 2;
            } if (toCheck >= 1000 && toCheck < 10000) {
              return 3;
            }

            toCheck = Math.abs(toCheck);
            var category = 0;
            var s = this.sign(toCheck);

            if (toCheck > 1) {
              while (toCheck >= 1) {
                toCheck = Math.floor(toCheck / 10.0);
                category++;
              }

              return s * category - 1;
            } if (toCheck > 0.0) {
              // Get number of zeros before the number.
              var zerosCount = Math.floor(Math.log(toCheck) / Math.log(10) + 1) - 1;
              return zerosCount;
            }
            return 1;
    },
        }]);

        return TimelineUtils;
      }());
      // CONCATENATED MODULE: ./src/enums/timelineCursorType.ts
      let TimelineCursorType;

      (function (TimelineCursorType) {
        TimelineCursorType.Alias = 'alias';
        TimelineCursorType.AllScroll = 'all-scroll';
        TimelineCursorType.Auto = 'auto';
        TimelineCursorType.Cell = 'cell';
        TimelineCursorType.ContextMenu = 'context-menu';
        TimelineCursorType.ColResize = 'col-resize';
        TimelineCursorType.Copy = 'copy';
        TimelineCursorType.Crosshair = 'crosshair';
        TimelineCursorType.Default = 'default';
        TimelineCursorType.EResize = 'e-resize';
        TimelineCursorType.EWResize = 'ew-resize';
        TimelineCursorType.Grab = 'grab';
        TimelineCursorType.Grabbing = 'grabbing';
        TimelineCursorType.Help = 'help';
        TimelineCursorType.Move = 'move';
        TimelineCursorType.NResize = 'n-resize';
        TimelineCursorType.NEResize = 'ne-resize';
        TimelineCursorType.NESWResize = 'nesw-resize';
        TimelineCursorType.NSResize = 'ns-resize';
        TimelineCursorType.NWResize = 'nw-resize';
        TimelineCursorType.NWSEResize = 'nwse-resize';
        TimelineCursorType.NoDrop = 'no-drop';
        TimelineCursorType.None = 'none';
        TimelineCursorType.NotAllowed = 'not-allowed';
        TimelineCursorType.Pointer = 'pointer';
        TimelineCursorType.Progress = 'progress';
        TimelineCursorType.RowResize = 'row-resize';
        TimelineCursorType.SResize = 's-resize';
        TimelineCursorType.SEResize = 'se-resize';
        TimelineCursorType.SWResize = 'sw-resize';
        TimelineCursorType.Text = 'text';
        TimelineCursorType.WResize = 'w-resize';
        TimelineCursorType.Wait = 'wait';
        TimelineCursorType.ZoomIn = 'zoom-in';
        TimelineCursorType.ZoomOut = 'zoom-out';
      }(TimelineCursorType || (TimelineCursorType = {})));
      // CONCATENATED MODULE: ./src/enums/timelineKeyframeShape.ts
      let TimelineKeyframeShape;

      (function (TimelineKeyframeShape) {
        TimelineKeyframeShape.None = 'none';
        TimelineKeyframeShape.Rhomb = 'rhomb';
        TimelineKeyframeShape.Circle = 'circle';
        TimelineKeyframeShape.Rect = 'rect';
      }(TimelineKeyframeShape || (TimelineKeyframeShape = {})));
      // CONCATENATED MODULE: ./src/utils/timelineStyleUtils.ts
      function timelineStyleUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineStyleUtils_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function timelineStyleUtils_createClass(Constructor, protoProps, staticProps) { if (protoProps) timelineStyleUtils_defineProperties(Constructor.prototype, protoProps); if (staticProps) timelineStyleUtils_defineProperties(Constructor, staticProps); return Constructor; }

      /* eslint-disable @typescript-eslint/no-explicit-any */

      var timelineStyleUtils_TimelineStyleUtils = /* #__PURE__ */(function () {
        function TimelineStyleUtils() {
          timelineStyleUtils_classCallCheck(this, TimelineStyleUtils);
        }

        timelineStyleUtils_createClass(TimelineStyleUtils, null, [{
          key: 'getKeyframeStyle',

          /**
     * Get keyframe style from a keyframe, than from a row, than from a global settings.
     * @param keyframe keyframe to get style for.
     * @param row keyframe row.
     * @param propertyName property to get.
     * @param defaultValue default value to return
     * @param reverseOrder reverse styling order: global, row, keyframe
     */
          value: function getKeyframeStyle(keyframeStyle, rowStyle, options, propertyName, defaultValue) {
            const reverseOrder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            // Don't spawn new array for the normal order.
            let styles = null;

            if (keyframeStyle) {
              const style = keyframeStyle;

              if (style[propertyName] !== undefined) {
                const value = style[propertyName];

                if (!reverseOrder) {
                  return value;
                }

                styles = styles || [];
                styles.push(value);
              }
            }

            if (rowStyle && rowStyle.keyframesStyle) {
              const _style = rowStyle.keyframesStyle;

              if (_style[propertyName] !== undefined) {
                const _value = _style[propertyName];

                if (!reverseOrder) {
                  return _value;
                }

                styles = styles || [];
                styles.push(_value);
              }
            }

            const globalRowStyle = options ? options.rowsStyle : null;

            if (globalRowStyle && globalRowStyle.keyframesStyle) {
              const _style2 = globalRowStyle.keyframesStyle;

              if (_style2[propertyName] !== undefined) {
                const _value2 = _style2[propertyName];

                if (!reverseOrder) {
                  return _value2;
                }

                styles = styles || [];
                styles.push(_value2);
              }
            }

            return reverseOrder && styles && styles.length > 0 ? styles[styles.length - 1] : defaultValue;
          },
          /**
     * Get row style from default settings or overrides by a row settings.
     */

        }, {
          key: 'getRowStyle',
          value: function getRowStyle(rowStyle, options, propertyName, defaultValue) {
            const reverseOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            // Don't spawn new array for the normal order.
            let styles = null;

            if (rowStyle) {
              const style = rowStyle;

              if (style[propertyName] !== undefined) {
                const results = style[propertyName];

                if (!reverseOrder) {
                  return results;
                }

                styles = styles || [];
                styles.push(results);
              }
            }

            const globalRowStyle = options ? options.rowsStyle : null;

            if (globalRowStyle) {
              const _style3 = globalRowStyle;

              if (_style3[propertyName] !== undefined) {
                const _results = _style3[propertyName];

                if (!reverseOrder) {
                  return _results;
                }

                styles = styles || [];
                styles.push(_results);
              }
            }

            return reverseOrder && styles && styles.length > 0 ? styles[styles.length - 1] : defaultValue;
          },
        }, {
          key: 'keyframeShape',
          value: function keyframeShape(keyframe, rowStyle, options) {
            const shape = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'shape', TimelineKeyframeShape.Rhomb);
            return shape;
          },
        }, {
          key: 'keyframeFillColor',
          value: function keyframeFillColor(keyframe, rowStyle, options) {
            const color = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'fillColor', 'DarkOrange');
            return color;
          },
        }, {
          key: 'keyframeSelectedFillColor',
          value: function keyframeSelectedFillColor(keyframe, rowStyle, options) {
            const color = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'selectedFillColor', 'red');
            return color;
          },
        }, {
          key: 'keyframeStrokeThickness',
          value: function keyframeStrokeThickness(keyframe, rowStyle, options) {
            return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'strokeThickness', 0.2, false);
          },
        }, {
          key: 'keyframeStrokeColor',
          value: function keyframeStrokeColor(keyframe, rowStyle, options) {
            return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'strokeColor', 'Black', false);
          },
        }, {
          key: 'keyframeSelectedStrokeColor',
          value: function keyframeSelectedStrokeColor(keyframe, rowStyle, options) {
            return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'selectedStrokeColor', 'Black', false);
          },
          /**
     * Get current row height from styling
     */

        }, {
          key: 'getRowHeight',
          value: function getRowHeight(rowStyle, options) {
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'height', 24);
          },
        }, {
          key: 'rowGroupHeight',
          value: function rowGroupHeight(rowStyle, options) {
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupHeight', 'auto');
          },
        }, {
          key: 'groupFillColor',
          value: function groupFillColor(rowStyle, options) {
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupFillColor');
          },
        }, {
          key: 'getRowMarginBottom',
          value: function getRowMarginBottom(rowStyle, options) {
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'marginBottom', 0);
          },
        }, {
          key: 'getRowFillColor',
          value: function getRowFillColor(rowStyle, options) {
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'fillColor', '#252526');
          },
        }, {
          key: 'headerHeight',
          value: function headerHeight(options) {
            return options ? options.headerHeight : false || 30;
          },
        }, {
          key: 'keyframeDraggable',
          value: function keyframeDraggable(keyframe, rowStyle, options) {
            const defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'draggable', defaultValue, false);
          },
        }, {
          key: 'groupDraggable',
          value: function groupDraggable(rowStyle, options) {
            const defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupDraggable', defaultValue, false);
          },
        }]);

        return TimelineStyleUtils;
      }());
      // CONCATENATED MODULE: ./src/enums/timelineElementType.ts
      let TimelineElementType;

      (function (TimelineElementType) {
        TimelineElementType.Timeline = 'timeline';
        TimelineElementType.Keyframe = 'keyframe';
        TimelineElementType.Group = 'group';
        TimelineElementType.Row = 'row';
      }(TimelineElementType || (TimelineElementType = {})));
      // CONCATENATED MODULE: ./src/enums/timelineEvents.ts
      let TimelineEvents;

      (function (TimelineEvents) {
        TimelineEvents.Selected = 'selected';
        TimelineEvents.TimeChanged = 'timechanged';
        TimelineEvents.KeyframeChanged = 'keyframeChanged';
        TimelineEvents.DragStarted = 'dragStarted';
        TimelineEvents.Drag = 'drag';
        TimelineEvents.DragFinished = 'dragFinished';
        TimelineEvents.Scroll = 'scroll';
        TimelineEvents.DoubleClick = 'doubleClick';
        TimelineEvents.MouseDown = 'mouseDown';
      }(TimelineEvents || (TimelineEvents = {})));
      // CONCATENATED MODULE: ./src/enums/timelineCapShape.ts
      let TimelineCapShape;

      (function (TimelineCapShape) {
        TimelineCapShape.None = 'none';
        TimelineCapShape.Triangle = 'triangle';
        TimelineCapShape.Rect = 'rect';
      }(TimelineCapShape || (TimelineCapShape = {})));
      // CONCATENATED MODULE: ./src/enums/timelineInteractionMode.ts
      let TimelineInteractionMode;

      (function (TimelineInteractionMode) {
        TimelineInteractionMode.Selection = 'selection';
        TimelineInteractionMode.Pan = 'pan';
        TimelineInteractionMode.Zoom = 'zoom';
      }(TimelineInteractionMode || (TimelineInteractionMode = {})));
      // CONCATENATED MODULE: ./src/utils/events/timelineBaseEvent.ts
      function timelineBaseEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineBaseEvent_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function timelineBaseEvent_createClass(Constructor, protoProps, staticProps) { if (protoProps) timelineBaseEvent_defineProperties(Constructor.prototype, protoProps); if (staticProps) timelineBaseEvent_defineProperties(Constructor, staticProps); return Constructor; }

      function timelineBaseEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      const TimelineBaseEvent = /* #__PURE__ */(function () {
        function TimelineBaseEvent() {
          timelineBaseEvent_classCallCheck(this, TimelineBaseEvent);

          timelineBaseEvent_defineProperty(this, '_prevented', false);
        }

        timelineBaseEvent_createClass(TimelineBaseEvent, [{
          key: 'preventDefault',

          /**
     * Prevent default click logic.
     */
          value: function preventDefault() {
            this._prevented = true;
          },
        }, {
          key: 'isPrevented',
          value: function isPrevented() {
            return this._prevented;
          },
        }]);

        return TimelineBaseEvent;
      }());
      // CONCATENATED MODULE: ./src/utils/events/timelineSelectedEvent.ts
      function _typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
      }

      function timelineSelectedEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper(Derived) {
        const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () {
          const Super = _getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      function timelineSelectedEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }


      var TimelineSelectedEvent = /* #__PURE__ */(function (_TimelineBaseEvent) {
        _inherits(TimelineSelectedEvent, _TimelineBaseEvent);

        const _super = _createSuper(TimelineSelectedEvent);

        function TimelineSelectedEvent() {
          let _this;

          timelineSelectedEvent_classCallCheck(this, TimelineSelectedEvent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          timelineSelectedEvent_defineProperty(_assertThisInitialized(_this), 'selected', []);

          timelineSelectedEvent_defineProperty(_assertThisInitialized(_this), 'changed', []);

          return _this;
        }

        return TimelineSelectedEvent;
      }(TimelineBaseEvent));
      // CONCATENATED MODULE: ./src/utils/events/timelineClickEvent.ts
      function timelineClickEvent_typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { timelineClickEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { timelineClickEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return timelineClickEvent_typeof(obj);
      }

      function timelineClickEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineClickEvent_inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timelineClickEvent_setPrototypeOf(subClass, superClass); }

      function timelineClickEvent_setPrototypeOf(o, p) { timelineClickEvent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timelineClickEvent_setPrototypeOf(o, p); }

      function timelineClickEvent_createSuper(Derived) {
        const hasNativeReflectConstruct = timelineClickEvent_isNativeReflectConstruct(); return function () {
          const Super = timelineClickEvent_getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = timelineClickEvent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return timelineClickEvent_possibleConstructorReturn(this, result);
        };
      }

      function timelineClickEvent_possibleConstructorReturn(self, call) { if (call && (timelineClickEvent_typeof(call) === 'object' || typeof call === 'function')) { return call; } return timelineClickEvent_assertThisInitialized(self); }

      function timelineClickEvent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function timelineClickEvent_isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function timelineClickEvent_getPrototypeOf(o) { timelineClickEvent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timelineClickEvent_getPrototypeOf(o); }

      function timelineClickEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }


      var TimelineClickEvent = /* #__PURE__ */(function (_TimelineBaseEvent) {
        timelineClickEvent_inherits(TimelineClickEvent, _TimelineBaseEvent);

        const _super = timelineClickEvent_createSuper(TimelineClickEvent);

        function TimelineClickEvent() {
          let _this;

          timelineClickEvent_classCallCheck(this, TimelineClickEvent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'args', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'pos', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'elements', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'target', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'val', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'snapVal', void 0);

          timelineClickEvent_defineProperty(timelineClickEvent_assertThisInitialized(_this), 'originalVal', void 0);

          return _this;
        }

        return TimelineClickEvent;
      }(TimelineBaseEvent));
      // CONCATENATED MODULE: ./src/utils/events/timelineDragEvent.ts
      function timelineDragEvent_typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { timelineDragEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { timelineDragEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return timelineDragEvent_typeof(obj);
      }

      function timelineDragEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineDragEvent_inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timelineDragEvent_setPrototypeOf(subClass, superClass); }

      function timelineDragEvent_setPrototypeOf(o, p) { timelineDragEvent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timelineDragEvent_setPrototypeOf(o, p); }

      function timelineDragEvent_createSuper(Derived) {
        const hasNativeReflectConstruct = timelineDragEvent_isNativeReflectConstruct(); return function () {
          const Super = timelineDragEvent_getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = timelineDragEvent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return timelineDragEvent_possibleConstructorReturn(this, result);
        };
      }

      function timelineDragEvent_possibleConstructorReturn(self, call) { if (call && (timelineDragEvent_typeof(call) === 'object' || typeof call === 'function')) { return call; } return timelineDragEvent_assertThisInitialized(self); }

      function timelineDragEvent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function timelineDragEvent_isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function timelineDragEvent_getPrototypeOf(o) { timelineDragEvent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timelineDragEvent_getPrototypeOf(o); }

      function timelineDragEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }


      var TimelineDragEvent = /* #__PURE__ */(function (_TimelineBaseEvent) {
        timelineDragEvent_inherits(TimelineDragEvent, _TimelineBaseEvent);

        const _super = timelineDragEvent_createSuper(TimelineDragEvent);

        function TimelineDragEvent() {
          let _this;

          timelineDragEvent_classCallCheck(this, TimelineDragEvent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'args', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'pos', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'elements', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'target', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'val', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'prevVal', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'snapVal', void 0);

          timelineDragEvent_defineProperty(timelineDragEvent_assertThisInitialized(_this), 'originalVal', void 0);

          return _this;
        }

        return TimelineDragEvent;
      }(TimelineBaseEvent));
      // CONCATENATED MODULE: ./src/settings/defaults.ts


      var defaultTimelineStyle = {
        width: 2,
        marginTop: 15,
        capWidth: 4,
        capHeight: 10,

        /**
   * Draw timeline rectangular cap.
   */
        capType: TimelineCapShape.Rect,
        strokeColor: 'DarkOrange',
        fillColor: 'DarkOrange',
      };
      var defaultTimelineKeyframeStyle = {
        /**
   * keyframe fill color.
   */
        fillColor: 'DarkOrange',
        shape: TimelineKeyframeShape.Rhomb,

        /**
   * Selected keyframe fill color.
   */
        selectedFillColor: 'red',
        strokeColor: 'black',
        selectedStrokeColor: 'black',
        strokeThickness: 0.2,
        draggable: true,
      };
      var defaultTimelineRowStyle = {
        /**
   * Row height in pixels.
   */
        height: 24,
        marginBottom: 2,
        fillColor: '#252526',

        /**
   * Keyframes group color
   */
        groupFillColor: '#094771',
        groupHeight: 'auto',
        keyframesStyle: defaultTimelineKeyframeStyle,
      };
      var defaultTimelineOptions = {
        /**
   *  Snap all selected keyframes as a bundle during the drag.
   */
        snapAllKeyframesOnMove: false,

        /**
   * Check whether snapping is enabled.
   */
        snapEnabled: true,
        timelineStyle: defaultTimelineStyle,

        /**
   * approximate step for the timeline in pixels for 1 second
   */
        stepPx: 120,

        /**
   * Number of units that should fit into one stepPx. (1 second by a default)
   */
        stepVal: 1000,
        stepSmallPx: 30,

        /**
   * Snap step in units. from 0 to stepVal
   */
        snapStep: 200,

        /**
   * additional left margin in pixels to start the line gauge from.
   */
        leftMargin: 25,
        headerFillColor: '#101011',
        fillColor: '#101011',
        labelsColor: '#D5D5D5',

        /**
   * Header gauge tick color.
   */
        tickColor: '#D5D5D5',

        /**
   * Selection rectangle color.
   */
        selectionColor: 'White',

        /**
   * Default rows style.
   * Can be overridden by setting style individually for each row.
   */
        rowsStyle: defaultTimelineRowStyle,

        /**
   * Header height in pixels
   */
        headerHeight: 30,
        font: '11px sans-serif',

        /**
   * Default zoom level = 1. where screen pixels are equals to the corresponding stepVal stepPx.
   */
        zoom: 1,

        /**
   * Default zoom speed.
   */
        zoomSpeed: 0.1,

        /**
   * Max zoom value.
   */
        zoomMin: 0.1,

        /**
   * Min zoom value.
   */
        zoomMax: 8,

        /**
   * Set this to true in a MAC OS environment: The Meta key will be used instead of the Ctrl key.
   */
        controlKeyIsMetaKey: false,

        /**
   * Access the scroll container via this class for e.g. scroll bar styling.
   */
        scrollContainerClass: 'scroll-container',

        /**
   * keyframes group is draggable.
   */
        groupsDraggable: true,

        /**
   * keyframes group is draggable.
   */
        keyframesDraggable: true,
        min: 0,
        max: Number.MAX_VALUE,
      };
      var defaultTimelineConsts = {
        /**
   * Auto pan speed.
   */
        autoPanSpeed: 50,

        /**
   * scroll speed when mouse drag is used (from 0 to 1)
   */
        scrollByDragSpeed: 0.12,

        /**
   * Determine whether item was clicked.
   */
        clickDetectionMs: 120,

        /**
   * Timeout to detect double click.
   */
        doubleClickTimeoutMs: 400,

        /**
   * Time in ms used to refresh scrollbars when pan is finished.
   */
        scrollFinishedTimeoutMs: 500,

        /**
   * Auto pan padding
   */
        autoPanByScrollPadding: 10,

        /**
   * Click threshold
   */
        clickThreshold: 3,
      };
      // CONCATENATED MODULE: ./src/enums/timelineEventSource.ts
      let TimelineEventSource;

      (function (TimelineEventSource) {
        TimelineEventSource.User = 'user';
        TimelineEventSource.Programmatically = 'programmatically';
        TimelineEventSource.SetTimeMethod = 'setTimeMethod';
      }(TimelineEventSource || (TimelineEventSource = {})));
      // CONCATENATED MODULE: ./src/utils/events/timelineTimeChangedEvent.ts
      function timelineTimeChangedEvent_typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { timelineTimeChangedEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { timelineTimeChangedEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return timelineTimeChangedEvent_typeof(obj);
      }

      function timelineTimeChangedEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineTimeChangedEvent_inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timelineTimeChangedEvent_setPrototypeOf(subClass, superClass); }

      function timelineTimeChangedEvent_setPrototypeOf(o, p) { timelineTimeChangedEvent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timelineTimeChangedEvent_setPrototypeOf(o, p); }

      function timelineTimeChangedEvent_createSuper(Derived) {
        const hasNativeReflectConstruct = timelineTimeChangedEvent_isNativeReflectConstruct(); return function () {
          const Super = timelineTimeChangedEvent_getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = timelineTimeChangedEvent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return timelineTimeChangedEvent_possibleConstructorReturn(this, result);
        };
      }

      function timelineTimeChangedEvent_possibleConstructorReturn(self, call) { if (call && (timelineTimeChangedEvent_typeof(call) === 'object' || typeof call === 'function')) { return call; } return timelineTimeChangedEvent_assertThisInitialized(self); }

      function timelineTimeChangedEvent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function timelineTimeChangedEvent_isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function timelineTimeChangedEvent_getPrototypeOf(o) { timelineTimeChangedEvent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timelineTimeChangedEvent_getPrototypeOf(o); }

      function timelineTimeChangedEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }


      var timelineTimeChangedEvent_TimelineTimeChangedEvent = /* #__PURE__ */(function (_TimelineBaseEvent) {
        timelineTimeChangedEvent_inherits(TimelineTimeChangedEvent, _TimelineBaseEvent);

        const _super = timelineTimeChangedEvent_createSuper(TimelineTimeChangedEvent);

        function TimelineTimeChangedEvent() {
          let _this;

          timelineTimeChangedEvent_classCallCheck(this, TimelineTimeChangedEvent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          timelineTimeChangedEvent_defineProperty(timelineTimeChangedEvent_assertThisInitialized(_this), 'val', 0);

          timelineTimeChangedEvent_defineProperty(timelineTimeChangedEvent_assertThisInitialized(_this), 'prevVal', 0);

          timelineTimeChangedEvent_defineProperty(timelineTimeChangedEvent_assertThisInitialized(_this), 'source', TimelineEventSource.User);

          return _this;
        }

        return TimelineTimeChangedEvent;
      }(TimelineBaseEvent));
      // CONCATENATED MODULE: ./src/enums/timelineSelectionMode.ts
      /**
 * TimelineView selection mode.
 */
      let TimelineSelectionMode;

      (function (TimelineSelectionMode) {
        TimelineSelectionMode.Normal = 'normal';
        TimelineSelectionMode.Append = 'append';
        TimelineSelectionMode.Revert = 'revert';
      }(TimelineSelectionMode || (TimelineSelectionMode = {})));
      // CONCATENATED MODULE: ./src/utils/events/timelineKeyframeChangedEvent.ts
      function timelineKeyframeChangedEvent_typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { timelineKeyframeChangedEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { timelineKeyframeChangedEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return timelineKeyframeChangedEvent_typeof(obj);
      }

      function timelineKeyframeChangedEvent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timelineKeyframeChangedEvent_inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timelineKeyframeChangedEvent_setPrototypeOf(subClass, superClass); }

      function timelineKeyframeChangedEvent_setPrototypeOf(o, p) { timelineKeyframeChangedEvent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timelineKeyframeChangedEvent_setPrototypeOf(o, p); }

      function timelineKeyframeChangedEvent_createSuper(Derived) {
        const hasNativeReflectConstruct = timelineKeyframeChangedEvent_isNativeReflectConstruct(); return function () {
          const Super = timelineKeyframeChangedEvent_getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = timelineKeyframeChangedEvent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return timelineKeyframeChangedEvent_possibleConstructorReturn(this, result);
        };
      }

      function timelineKeyframeChangedEvent_possibleConstructorReturn(self, call) { if (call && (timelineKeyframeChangedEvent_typeof(call) === 'object' || typeof call === 'function')) { return call; } return timelineKeyframeChangedEvent_assertThisInitialized(self); }

      function timelineKeyframeChangedEvent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function timelineKeyframeChangedEvent_isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function timelineKeyframeChangedEvent_getPrototypeOf(o) { timelineKeyframeChangedEvent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timelineKeyframeChangedEvent_getPrototypeOf(o); }

      function timelineKeyframeChangedEvent_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }


      var TimelineKeyframeChangedEvent = /* #__PURE__ */(function (_TimelineBaseEvent) {
        timelineKeyframeChangedEvent_inherits(TimelineKeyframeChangedEvent, _TimelineBaseEvent);

        const _super = timelineKeyframeChangedEvent_createSuper(TimelineKeyframeChangedEvent);

        function TimelineKeyframeChangedEvent() {
          let _this;

          timelineKeyframeChangedEvent_classCallCheck(this, TimelineKeyframeChangedEvent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          timelineKeyframeChangedEvent_defineProperty(timelineKeyframeChangedEvent_assertThisInitialized(_this), 'val', void 0);

          timelineKeyframeChangedEvent_defineProperty(timelineKeyframeChangedEvent_assertThisInitialized(_this), 'prevVal', void 0);

          timelineKeyframeChangedEvent_defineProperty(timelineKeyframeChangedEvent_assertThisInitialized(_this), 'target', void 0);

          timelineKeyframeChangedEvent_defineProperty(timelineKeyframeChangedEvent_assertThisInitialized(_this), 'source', void 0);

          return _this;
        }

        return TimelineKeyframeChangedEvent;
      }(TimelineBaseEvent));
      // CONCATENATED MODULE: ./src/timeline.ts
      function timeline_typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { timeline_typeof = function _typeof(obj) { return typeof obj; }; } else { timeline_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return timeline_typeof(obj);
      }

      function timeline_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function timeline_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function timeline_createClass(Constructor, protoProps, staticProps) { if (protoProps) timeline_defineProperties(Constructor.prototype, protoProps); if (staticProps) timeline_defineProperties(Constructor, staticProps); return Constructor; }

      function timeline_inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timeline_setPrototypeOf(subClass, superClass); }

      function timeline_setPrototypeOf(o, p) { timeline_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timeline_setPrototypeOf(o, p); }

      function timeline_createSuper(Derived) {
        const hasNativeReflectConstruct = timeline_isNativeReflectConstruct(); return function () {
          const Super = timeline_getPrototypeOf(Derived); let
            result; if (hasNativeReflectConstruct) { const NewTarget = timeline_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return timeline_possibleConstructorReturn(this, result);
        };
      }

      function timeline_possibleConstructorReturn(self, call) { if (call && (timeline_typeof(call) === 'object' || typeof call === 'function')) { return call; } return timeline_assertThisInitialized(self); }

      function timeline_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function timeline_isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); return true; } catch (e) { return false; } }

      function _get(target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { const base = _superPropBase(target, property); if (!base) return; const desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

      function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = timeline_getPrototypeOf(object); if (object === null) break; } return object; }

      function timeline_getPrototypeOf(o) { timeline_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timeline_getPrototypeOf(o); }

      function timeline_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      /* eslint-disable @typescript-eslint/no-explicit-any */


      var timeline_Timeline = /* #__PURE__ */(function (_TimelineEventsEmitte) {
        timeline_inherits(Timeline, _TimelineEventsEmitte);

        const _super = timeline_createSuper(Timeline);

        /**
   * component container.
   */

        /**
   * Dynamically generated event.
   */

        /**
   * Dynamically generated scroll container.
   */

        /**
   * Dynamically generated virtual scroll content.
   */

        /**
   * Rendering context
   */

        /**
   * Components settings
   */

        /**
   * Drag start position.
   */

        /**
   * Drag scroll started position.
   */

        /**
   * scroll finished timer reference.
   */

        /**
   * Create TimelineView instance
   * @param options TimelineView settings.
   * @param model TimelineView model.
   */
        function Timeline() {
          let _thisSuper; let _thisSuper2; let
            _this;

          const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          const model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          timeline_classCallCheck(this, Timeline);

          _this = _super.call(this); // Allow to create instance without an error to perform tests.

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_container', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_canvas', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_scrollContainer', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_scrollContent', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_ctx', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_options', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_startPos', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_scrollStartPos', {
            x: 0,
            y: 0,
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_currentPos', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_selectionRect', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_selectionRectEnabled', false);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_drag', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_startedDragWithCtrl', false);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_startedDragWithShiftKey', false);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_clickTimeout', 0);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_lastClickTime', 0);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_lastClickPoint', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_consts', defaultTimelineConsts);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_clickAllowed', false);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_scrollFinishedTimerRef', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_val', 0);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_pixelRatio', 1);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_currentZoom', 0);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_intervalRef', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_autoPanLastActionDate', 0);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_isPanStarted', false);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_interactionMode', TimelineInteractionMode.Selection);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_lastUsedArgs', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_model', null);

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleKeyUp', (event) => {
            if (_this._interactionMode === TimelineInteractionMode.Zoom) {
              _this._setZoomCursor(event);
            }
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleKeyDown', (event) => {
            if (_this._interactionMode === TimelineInteractionMode.Zoom) {
              _this._setZoomCursor(event);
            }
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleBlurEvent', () => {
            _this._cleanUpSelection();
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleWindowResizeEvent', () => {
            // Rescale and redraw
            _this.rescale();

            _this.redraw();
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleScrollEvent', (args) => {
            _this._clearScrollFinishedTimer(); // Set a timeout to run event 'scrolling end'.


            _this._scrollFinishedTimerRef = setTimeout(() => {
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
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleWheelEvent', (event) => {
            if (_this._controlKeyPressed(event)) {
              event.preventDefault();
              const mousePos = Math.max(0, _this._getMousePos(_this._canvas, event).x || 0);

              _this._zoom(TimelineUtils.sign(event.deltaY), _this._options.zoomSpeed, mousePos);
            } else {
              _this._scrollContainer.scrollTop += event.deltaY;
              event.preventDefault();
            }
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleMouseDownEvent', (args) => {
            let isDoubleClick = Date.now() - _this._lastClickTime < _this._consts.doubleClickTimeoutMs; // Prevent drag of the canvas if canvas is selected as text:


            TimelineUtils.clearBrowserSelection();
            _this._startPos = _this._trackMousePos(_this._canvas, args);

            if (!_this._startPos) {
              return;
            } // Don't allow to perform double click if mouse was moved to far.


            if (_this._lastClickPoint && _this._startPos && TimelineUtils.getDistance(_this._lastClickPoint.x, _this._lastClickPoint.y, _this._startPos.x, _this._startPos.y) > _this._consts.clickThreshold) {
              isDoubleClick = false;
            }

            _this._lastClickPoint = _this._startPos;
            _this._scrollStartPos = {
              x: _this._scrollContainer.scrollLeft,
              y: _this._scrollContainer.scrollTop,
            };
            _this._clickAllowed = true;

            const elements = _this.elementFromPoint(_this._startPos, Math.max(2, _this._startPos.radius));

            const target = _this._findDraggable(elements, _this._startPos.val);

            const event = new TimelineClickEvent();
            event.pos = _this._startPos;
            event.val = _this._startPos.val;
            event.originalVal = _this._startPos.originalVal;
            event.snapVal = _this._startPos.snapVal;
            event.args = args; // all elements under the click:

            event.elements = elements; // target element.

            event.target = target;

            if (isDoubleClick) {
              _get((_thisSuper = timeline_assertThisInitialized(_this), timeline_getPrototypeOf(Timeline.prototype)), 'emit', _thisSuper).call(_thisSuper, TimelineEvents.DoubleClick, event);

              return;
            }

            _get((_thisSuper2 = timeline_assertThisInitialized(_this), timeline_getPrototypeOf(Timeline.prototype)), 'emit', _thisSuper2).call(_thisSuper2, TimelineEvents.MouseDown, event);

            _this._clickTimeout = Date.now();
            _this._lastClickTime = Date.now();

            if (event.isPrevented()) {
              // Mouse up will be also prevented
              _this._cleanUpSelection();

              return;
            }

            _this._currentPos = _this._startPos; // Select keyframes on mouse down

            if (target && _this._interactionMode !== TimelineInteractionMode.Zoom) {
              _this._drag = {
                changed: false,
                target: _this._setElementDragState(target, target.val),
                val: target.val,
                type: target.type,
                elements: [],
              };

              if (target.type === TimelineElementType.Keyframe) {
                _this._startedDragWithCtrl = _this._controlKeyPressed(args);
                _this._startedDragWithShiftKey = args.shiftKey; // get all related selected keyframes if we are selecting one.

                if (!target.keyframe.selected && !_this._controlKeyPressed(args)) {
                  _this._selectInternal(target.keyframe);
                } // Allow to drag all selected keyframes on a screen


                _this._drag.elements = _this.getSelectedElements().map((element) => _this._setElementDragState(element, element.val));
              } else if (target.type === TimelineElementType.Group) {
                const { keyframes } = _this._drag.target;

                if (keyframes && Array.isArray(keyframes)) {
                  _this._drag.elements = keyframes.map((keyframe) => _this._setElementDragState(_this._convertToElement(_this._drag.target.row, keyframe), keyframe.val));
                }
              } else {
                _this._drag.elements = [_this._drag.target];
              }
            }

            _this.redraw();
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleMouseMoveEvent', (args) => {
            if (!args) {
              args = _this._lastUsedArgs;
            } else {
              _this._lastUsedArgs = args;
            }

            if (!args) {
              return;
            }

            const isTouch = args.changedTouches && args.changedTouches.length > 0;
            _this._currentPos = _this._trackMousePos(_this._canvas, args);

            if (!_this._isPanStarted && _this._selectionRect && _this._clickTimeoutIsOver()) {
              // TODO: implement selection by rect
              _this._selectionRectEnabled = _this._interactionMode !== TimelineInteractionMode.Zoom;
            } else {
              _this._selectionRectEnabled = false;
            }

            args = args;

            const isLeftClicked = _this.isLeftButtonClicked(args);

            if (_this._startPos) {
              if (isLeftClicked || isTouch) {
                if (_this._drag && !_this._startedDragWithCtrl) {
                  const convertedVal = _this._currentPos.val;

                  if (_this._drag.type === TimelineElementType.Timeline) {
                    _this._setTimeInternal(convertedVal, TimelineEventSource.User);
                  } else if ((_this._drag.type == TimelineElementType.Keyframe || _this._drag.type == TimelineElementType.Group) && _this._drag.elements) {
                    const offset = Math.floor(convertedVal - _this._drag.val);

                    const movedOffset = _this._moveElements(offset, _this._drag.elements, TimelineEventSource.User);

                    if (movedOffset !== 0) {
                      if (!_this._drag.changed) {
                        _this._drag.prevVal = _this._drag.val;

                        const _eventArgs = _this._emitDragStartedEvent();

                        if (_eventArgs.isPrevented()) {
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

                if (_this._interactionMode === TimelineInteractionMode.Pan && !_this._drag) {
                  _this._isPanStarted = true;

                  _this._setCursor(TimelineCursorType.Grabbing); // Track scroll by drag.


                  _this._scrollByPan(_this._startPos, _this._currentPos, _this._scrollStartPos);
                } else {
                  // Track scroll by mouse or touch out of the area.
                  _this._scrollBySelectionOutOfBounds(_this._currentPos);
                }

                _this.redraw();
              } else {
                // Fallback. Cancel mouse move when focus was lost and mouse down is still counted.
                _this._cleanUpSelection();

                _this.redraw();
              }
            } else if (!isTouch) {
              const elements = _this.elementFromPoint(_this._currentPos, Math.max(2, _this._currentPos.radius));

              const target = _this._findDraggable(elements, _this._currentPos.val);

              if (_this._isPanStarted || _this._interactionMode === TimelineInteractionMode.Pan) {
                if (isLeftClicked) {
                  _this._setCursor(TimelineCursorType.Grabbing);
                } else {
                  _this._setCursor(TimelineCursorType.Grab);
                }
              } else {
                if (_this._interactionMode === TimelineInteractionMode.Zoom) {
                  _this._setZoomCursor(args);

                  return;
                }
                _this._setCursor(TimelineCursorType.Default);
              }

              if (target) {
                let cursor = null;

                if (target.type === TimelineElementType.Group) {
                  cursor = cursor || TimelineCursorType.EWResize;
                } else if (target.type == TimelineElementType.Keyframe) {
                  cursor = cursor || TimelineCursorType.Pointer;
                } else if (target.type == TimelineElementType.Timeline) {
                  cursor = cursor || TimelineCursorType.EWResize;
                }

                if (cursor) {
                  _this._setCursor(cursor);
                }
              }
            }

            if (isTouch) {
              args.preventDefault();
            }
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_handleMouseUpEvent', (args) => {
            if (_this._startPos) {
              // window.releaseCapture();
              const pos = _this._trackMousePos(_this._canvas, args); // Click detection.


              if (_this._clickAllowed || !_this._clickTimeoutIsOver() || _this._drag && (_this._startedDragWithCtrl || _this._startedDragWithShiftKey)) {
                if (_this._options && _this._interactionMode === TimelineInteractionMode.Zoom) {
                  const direction = _this._controlKeyPressed(args) ? 1 : -1;
                  const mousePos = Math.max(0, _this._getMousePos(_this._canvas, args).x || 0);

                  _this._zoom(direction, _this._options.zoomSpeed, mousePos);
                } else {
                  _this._performClick(pos, _this._drag);
                }
              } else if (!_this._drag && _this._selectionRect && _this._selectionRectEnabled) {
                if (_this._interactionMode === TimelineInteractionMode.Zoom) {
                  if (_this._selectionRect.width > 20) { // TODO: implement zoom by screen rect.
                  }
                } else {
                  const keyframes = _this._getKeyframesByRectangle(_this._selectionRect);

                  const selectionMode = args.shiftKey ? TimelineSelectionMode.Append : TimelineSelectionMode.Normal;

                  _this.select(keyframes, selectionMode);
                }
              }

              _this._cleanUpSelection();

              _this.redraw();
            }
          });

          timeline_defineProperty(timeline_assertThisInitialized(_this), '_redrawInternal', () => {
            if (!_this._ctx) {
              return;
            } // Rescale when animation is played out of the bounds.


            if (_this.valToPx(_this._val) > _this._scrollContainer.scrollWidth) {
              _this.rescale();

              if (!_this._isPanStarted && _this._drag && _this._drag.type !== TimelineElementType.Timeline) {
                _this.scrollLeft();
              }
            }

            _this._renderBackground();

            _this._renderRows(); // Render after rows


            _this._renderHeaderBackground();

            _this._renderTicks();

            _this._renderKeyframes();

            _this._renderSelectionRect();

            _this._renderTimeline();
          });

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


        timeline_createClass(Timeline, [{
          key: 'initialize',
          value: function initialize(options, model) {
            this._model = model;

            if (!options || !options.id) {
              throw new Error('Element cannot be empty. Should be string or DOM element.');
            }

            this._generateContainers(options.id);

            this._options = this._setOptions(options);

            this._subscribeOnEvents();

            this.rescale();
            this.redraw();
          },
          /**
     * Generate component html.
     * @param id container.
     */

        }, {
          key: '_generateContainers',
          value: function _generateContainers(id) {
            if (id instanceof HTMLElement) {
              this._container = id;
            } else {
              this._container = document.getElementById(id);
            }

            if (!this._container) {
              throw new Error('Element cannot be empty. Should be string or DOM element.');
            }

            this._scrollContainer = document.createElement('div');
            this._scrollContent = document.createElement('div');
            this._canvas = document.createElement('canvas');

            if (!this._canvas || !this._canvas.getContext) {
              console.log('Cannot initialize canvas context.');
              return null;
            }

            this._container.style.position = 'relative'; // Generate size container:

            this._canvas.style.cssText = 'image-rendering: -moz-crisp-edges;' + 'image-rendering: -webkit-crisp-edges;' + 'image-rendering: pixelated;' + 'image-rendering: crisp-edges;' + 'user-select: none;' + '-webkit-user-select: none;' + '-khtml-user-select: none;' + '-moz-user-select: none;' + '-o-user-select: none;' + 'user-select: none;' + 'touch-action: none;' + 'position: relative;' + '-webkit-user-drag: none;' + '-khtml-user-drag: none;' + '-moz-user-drag: none;' + '-o-user-drag: none;' + 'user-drag: none;' + 'padding: inherit';
            this._scrollContainer.style.cssText = 'overflow: scroll;' + 'position: absolute;' + 'width:  100%;' + 'height:  100%;';
            this._scrollContent.style.width = this._scrollContent.style.height = '100%'; // add the text node to the created div

            this._scrollContainer.appendChild(this._scrollContent);

            this._container.appendChild(this._scrollContainer);

            const scrollBarWidth = this._scrollContainer.offsetWidth - this._scrollContent.clientWidth; // Calculate current browser scrollbar size and add offset for the canvas

            this._canvas.style.width = this._canvas.style.height = `calc(100% -${scrollBarWidth || 17}px)`;

            this._container.appendChild(this._canvas);

            this._ctx = this._canvas.getContext('2d');
          },
          /**
     * Subscribe current component on the related events.
     */

        }, {
          key: '_subscribeOnEvents',
          value: function _subscribeOnEvents() {
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
          },
        }, {
          key: 'dispose',
          value: function dispose() {
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
            window.removeEventListener('touchend', this._handleMouseUpEvent); // Stop times

            this._stopAutoPan();

            this._clearScrollFinishedTimer();
          },
        }, {
          key: '_setZoomCursor',
          value: function _setZoomCursor(e) {
            if (this._controlKeyPressed(e)) {
              this._setCursor(TimelineCursorType.ZoomOut);
            } else {
              this._setCursor(TimelineCursorType.ZoomIn);
            }
          },
        }, {
          key: '_clearScrollFinishedTimer',
          value: function _clearScrollFinishedTimer() {
            if (this._scrollFinishedTimerRef) {
              clearTimeout(this._scrollFinishedTimerRef);
              this._scrollFinishedTimerRef = null;
            }
          },
        }, {
          key: '_controlKeyPressed',
          value: function _controlKeyPressed(e) {
            if (!this._options || this._options.controlKeyIsMetaKey === undefined) {
              return e.metaKey || e.ctrlKey;
            }

            return this._options.controlKeyIsMetaKey || this._options.controlKeyIsMetaKey ? e.metaKey : e.ctrlKey;
          },
        }, {
          key: '_zoom',
          value: function _zoom(direction, speed, x) {
            if (speed > 0 && speed <= 1) {
              const deltaSpeed = TimelineUtils.getDistance(this._width() / 2, x) * 0.2;
              x += deltaSpeed;
              const diff = this._width() / x;

              const val = this._fromScreen(x);

              const zoom = direction * this._currentZoom * speed; // this._options.zoom

              this._currentZoom = this._setZoom(this._currentZoom + zoom); // Get only after zoom is set

              const zoomCenter = this.valToPx(val);
              let newScrollLeft = Math.round(zoomCenter - this._width() / diff);

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
          },
          /**
     * Zoom in
     * @param speed value from 0 to 1
     */

        }, {
          key: 'zoomIn',
          value: function zoomIn() {
            const speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.zoomSpeed;

            this._zoom(1, speed, this._scrollContainer.clientWidth / 2);
          },
          /**
     * Zoom out.
     * @param speed value from 0 to 1
     */

        }, {
          key: 'zoomOut',
          value: function zoomOut() {
            const speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.zoomSpeed;

            this._zoom(-1, speed, this._scrollContainer.clientWidth / 2);
          },
          /**
     * Set direct zoom value.
     * @param zoom zoom value to set. percent 0-1 and etc.
     * @param min min zoom.
     * @param max max zoom.
     * @return normalized value.
     */

        }, {
          key: '_setZoom',
          value: function _setZoom(zoom) {
            let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            let max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            min = TimelineUtils.isNumber(min) ? min : this._options ? this._options.zoomMin : null;
            max = TimelineUtils.isNumber(max) ? max : this._options ? this._options.zoomMax : null;

            if (TimelineUtils.isNumber(zoom)) {
              zoom = TimelineUtils.keepInBounds(zoom, min, max);
              zoom = zoom || 1;
              this._currentZoom = zoom;
              return zoom;
            }

            return zoom;
          },
          /**
     * Set direct zoom value.
     * @public
     * @param zoom zoom value to set. percent 0-1 and etc.
     * @return normalized value.
     */

        }, {
          key: 'setZoom',
          value: function setZoom(zoom) {
            const prevZoom = this.getZoom();

            if (prevZoom !== zoom) {
              const zoomSet = this._setZoom(zoom);

              if (prevZoom != zoomSet) {
                this.rescale();
                this.redraw();
                return zoomSet;
              }
            }

            return prevZoom;
          },
          /**
     * Get current zoom level.
     */

        }, {
          key: 'getZoom',
          value: function getZoom() {
            if (TimelineUtils.isNumber(this._currentZoom)) {
              return this._currentZoom || 1;
            }

            return 1;
          },
          /**
     * @param args
     */

        }, {
          key: '_setElementDragState',
          value: function _setElementDragState(element, val) {
            const state = element;
            state.prevVal = state.val;

            if (state.startedVal === undefined || state.startedVal === null) {
              state.startedVal = val;
            }

            if (state.prevVal === undefined || state.prevVal === null) {
              state.prevVal = val;
            }

            state.val = val;
            return state;
          },
        }, {
          key: 'isLeftButtonClicked',
          value: function isLeftButtonClicked(args) {
            return !!args && args.buttons == 1;
          }, // eslint-disable-next-line @typescript-eslint/no-explicit-any

        }, {
          key: '_moveElements',

          /**
     * Move elements
     * @param offset vector to move elements along.
     * @param elements Element to move.
     * @returns real moved value.
     */
          value: function _moveElements(offset, elements) {
            const _this2 = this;

            const source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TimelineEventSource.Programmatically;

            if (!elements) {
              return;
            }

            let isChanged = false;

            if (Math.abs(offset) > 0) {
              // Find drag min and max bounds:
              let bounds = {
                min: Number.MIN_SAFE_INTEGER,
                max: Number.MAX_SAFE_INTEGER,
              };
              bounds = TimelineUtils.setMinMax(bounds, this._options);
              elements.forEach((p) => {
                // find allowed bounds for the draggable items.
                // find for each row and keyframe separately.
                const currentBounds = TimelineUtils.setMinMax(TimelineUtils.setMinMax({
                  min: bounds.min,
                  max: bounds.max,
                }, p.keyframe), p.row);
                const expectedKeyframeValue = _this2._options && _this2._options.snapAllKeyframesOnMove ? _this2.snapVal(p.keyframe.val) : p.keyframe.val;
                const newPosition = expectedKeyframeValue + offset;

                if (TimelineUtils.isNumber(currentBounds.min) && newPosition < currentBounds.min) {
                  // Return to the bounds:
                  offset += TimelineUtils.getDistance(currentBounds.min, newPosition);
                }

                if (TimelineUtils.isNumber(currentBounds.max) && newPosition > currentBounds.max) {
                  // Return to the bounds:
                  offset -= TimelineUtils.getDistance(currentBounds.max, newPosition);
                }
              });

              if (Math.abs(offset) > 0) {
                // don't allow to move less than zero.
                elements.forEach((element) => {
                  const prevVal = element.keyframe.val;
                  const toSet = prevVal + offset;

                  const newValue = _this2._setKeyframePos(element, toSet, source);

                  isChanged = newValue !== prevVal;
                });
              }

              if (isChanged) {
                return offset;
              }
            }

            return 0;
          },
        }, {
          key: '_height',

          /**
     * client height.
     */
          value: function _height() {
            if (this._canvas) {
              return this._canvas.clientHeight;
            }

            return 0;
          },
          /**
     * Client width;
     */

        }, {
          key: '_width',
          value: function _width() {
            if (this._canvas) {
              return this._canvas.clientWidth;
            }

            return 0;
          },
          /**
     * Convert virtual calculation results to keyframes
     */

        }, {
          key: '_mapKeyframes',
          value: function _mapKeyframes(array) {
            const results = [];

            if (!array) {
              return results;
            }

            for (let i = 0; i < array.length; i++) {
              results.push(array[i].model || array[i].keyframe);
            }

            return results;
          },
          /**
     * Get all keyframes under the screen rectangle.
     * @param screenRect screen coordinates to get keyframes.
     */

        }, {
          key: '_getKeyframesByRectangle',
          value: function _getKeyframesByRectangle(screenRect) {
            const keyframesModels = [];

            this._forEachKeyframe((calcKeyframe) => {
              if (TimelineUtils.isOverlap(calcKeyframe.size.x, calcKeyframe.size.y, screenRect)) {
                keyframesModels.push(calcKeyframe.model);
              }
            });

            return keyframesModels;
          },
        }, {
          key: '_performClick',
          value: function _performClick(pos, drag) {
            let isChanged = false;

            if (drag && drag.type === TimelineElementType.Keyframe) {
              let mode = TimelineSelectionMode.Normal;

              if (this._startedDragWithCtrl && this._controlKeyPressed(pos.args) || this._startedDragWithShiftKey && pos.args.shiftKey) {
                if (this._controlKeyPressed(pos.args)) {
                  mode = TimelineSelectionMode.Revert;
                }
              } // Reverse selected keyframe selection by a click:


              isChanged = this._selectInternal(this._drag.target.keyframe, mode).selectionChanged || isChanged;

              if (pos.args.shiftKey) {
                // Set current timeline position if it's not a drag or selection rect small or fast click.
                isChanged = this._setTimeInternal(pos.val, TimelineEventSource.User) || isChanged;
              }
            } else {
              // deselect keyframes if any:
              isChanged = this._selectInternal(null).selectionChanged || isChanged; // change timeline pos:
              // Set current timeline position if it's not a drag or selection rect small or fast click.

              isChanged = this._setTimeInternal(pos.val, TimelineEventSource.User) || isChanged;
            }

            return isChanged;
          },
          /**
     * Set keyframe value.
     * @param keyframe
     * @param value
     * @return set value.
     */

        }, {
          key: '_setKeyframePos',
          value: function _setKeyframePos(element, value) {
            const source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TimelineEventSource.Programmatically;

            if (!element || !element.keyframe) {
              return value;
            }

            value = Math.floor(value);

            if (element.keyframe && element.keyframe.val != value) {
              element.prevVal = element.val;
              element.val = value;
              element.keyframe.val = value;

              const event = this._emitKeyframeChanged(element, source);

              if (event.isPrevented()) {
                element.val = event.prevVal;
                element.keyframe.val = event.prevVal;
              }

              return value;
            }

            return value;
          },
          /**
     * @param cursor to set.
     */

        }, {
          key: '_setCursor',
          value: function _setCursor(cursor) {
            if (this._canvas.style.cursor != cursor) {
              this._canvas.style.cursor = cursor;
            }
          },
          /**
     * Set pan mode
     * @param isPan
     */

        }, {
          key: 'setInteractionMode',
          value: function setInteractionMode(mode) {
            if (this._interactionMode != mode) {
              this._interactionMode = mode; // Avoid any conflicts with other modes:

              this._cleanUpSelection();
            }
          },
          /**
     * Get current interaction mode.
     */

        }, {
          key: 'getInteractionMode',
          value: function getInteractionMode() {
            return this._interactionMode;
          },
        }, {
          key: '_convertToElement',
          value: function _convertToElement(row, keyframe) {
            const data = {
              type: TimelineElementType.Keyframe,
              val: keyframe.val,
              keyframe,
              row,
            };
            return data;
          },
        }, {
          key: 'getSelectedKeyframes',
          value: function getSelectedKeyframes() {
            return this._mapKeyframes(this.getSelectedElements());
          },
        }, {
          key: 'getSelectedElements',
          value: function getSelectedElements() {
            const _this3 = this;

            const selected = [];

            this._forEachKeyframe((keyframe) => {
              if (keyframe && keyframe.model.selected) {
                selected.push(_this3._convertToElement(keyframe.parentRow.model, keyframe.model));
              }
            });

            return selected;
          },
        }, {
          key: 'getAllKeyframes',
          value: function getAllKeyframes() {
            const selected = [];

            this._forEachKeyframe((keyframe) => {
              selected.push(keyframe.model);
            });

            return selected;
          },
        }, {
          key: 'selectAllKeyframes',
          value: function selectAllKeyframes() {
            return this.select(this.getAllKeyframes(), TimelineSelectionMode.Normal);
          },
        }, {
          key: 'deselectAll',
          value: function deselectAll() {
            return this.select(null);
          },
        }, {
          key: '_changeNodeState',
          value: function _changeNodeState(state, node, value) {
            if (node.selected !== value) {
              const selectable = typeof node.selectable === 'boolean' ? node.selectable : true;

              if (!value || value && selectable) {
                node.selected = value;
                state.changed.push(node);
                return true;
              }
            }

            return false;
          },
        }, {
          key: 'select',
          value: function select(nodes) {
            const mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TimelineSelectionMode.Normal;

            const results = this._selectInternal(nodes, mode);

            if (results.selectionChanged) {
              this.redraw();
            }

            return results;
          },
          /**
     * Select keyframes
     * @param nodes keyframe or list of the keyframes to be selected.
     * @param mode selection mode.
     */

        }, {
          key: '_selectInternal',
          value: function _selectInternal(nodes) {
            const _this4 = this;

            const mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TimelineSelectionMode.Normal;

            if (!nodes) {
              nodes = [];
            }

            if (!Array.isArray(nodes)) {
              nodes = [nodes];
            }

            const state = {
              selectionChanged: false,
              selected: this.getSelectedKeyframes(),
              changed: [],
            };
            const nodesArray = nodes; // const state = this.selectedSubject.getValue();

            this.getSelectedElements();

            if (nodesArray && mode === TimelineSelectionMode.Append) {
              nodes.forEach((node) => {
                const changed = _this4._changeNodeState(state, node, true);

                if (changed && node.selected) {
                  state.selected.push(node);
                }
              });
            } else if (nodesArray && mode === TimelineSelectionMode.Revert) {
              nodes.forEach((node) => {
                if (state.selected.indexOf(node) >= 0) {
                  _this4._changeNodeState(state, node, false);

                  TimelineUtils.deleteElement(state.selected, node);
                } else {
                  _this4._changeNodeState(state, node, true);

                  if (node.selected) {
                    state.selected.push(node);
                  }
                }
              });
            } else if (mode === TimelineSelectionMode.Normal) {
              const selectedItems = [];

              if (nodes) {
                nodes.forEach((node) => {
                  _this4._changeNodeState(state, node, true);

                  if (node.selected) {
                    selectedItems.push(node);
                  }
                });
              }

              state.selected.forEach((node) => {
                const exists = nodesArray.indexOf(node) >= 0; // Deselect

                if (!exists) {
                  _this4._changeNodeState(state, node, false);
                }
              });

              if (state.changed.length > 0) {
                if (selectedItems) {
                  state.selected = selectedItems;
                } else {
                  state.selected.length = 0;
                }
              }
            }

            if (state.changed.length > 0) {
              state.selectionChanged = true;

              this._emitKeyframesSelected(state);
            }

            return state;
          },
          /**
     * foreach visible keyframe.
     */

        }, {
          key: '_forEachKeyframe',
          value: function _forEachKeyframe(callback) {
            if (!callback) {
              return;
            }

            if (!this._model) {
              return;
            }

            const calculatedModel = this._calculateModel();

            if (!calculatedModel) {
              return;
            }

            calculatedModel.rows.forEach((calcRow) => {
              if (!calcRow) {
                return;
              }

              let nextRow = true;
              calcRow.keyframes.forEach((keyframe, keyframeIndex) => {
                if (keyframe) {
                  callback(keyframe, keyframeIndex, nextRow);
                }

                nextRow = false;
              });
            });
          },
        }, {
          key: '_trackMousePos',
          value: function _trackMousePos(canvas, mouseArgs) {
            const pos = this._getMousePos(canvas, mouseArgs);

            pos.originalVal = this._mousePosToVal(pos.x, false);
            pos.snapVal = this._mousePosToVal(pos.x, true);
            pos.val = pos.originalVal;

            if (this._options && this._options.snapEnabled) {
              pos.val = pos.snapVal;
            }

            if (this._startPos) {
              if (!this._selectionRect) {
                this._selectionRect = {};
              } // get the pos with the virtualization:


              const x = Math.floor(this._startPos.x + (this._scrollStartPos.x - this.getScrollLeft()));
              const y = Math.floor(this._startPos.y + (this._scrollStartPos.y - this.getScrollTop()));
              this._selectionRect.x = Math.min(x, pos.x);
              this._selectionRect.y = Math.min(y, pos.y);
              this._selectionRect.width = Math.max(x, pos.x) - this._selectionRect.x;
              this._selectionRect.height = Math.max(y, pos.y) - this._selectionRect.y; // Once mouse was moved outside of the bounds it's not a click anymore

              if (this._clickAllowed) {
                this._clickAllowed = this._selectionRect.height <= this._consts.clickThreshold && this._selectionRect.width <= this._consts.clickThreshold;
              }
            }

            return pos;
          },
        }, {
          key: '_cleanUpSelection',
          value: function _cleanUpSelection() {
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
          },
          /**
     * Check whether click timeout is over.
     */

        }, {
          key: '_clickTimeoutIsOver',
          value: function _clickTimeoutIsOver() {
            // Duration before the selection can be tracked.
            if (this._clickTimeout && Date.now() - this._clickTimeout > this._consts.clickDetectionMs) {
              return true;
            }

            return false;
          },
          /**
     * Automatically pan. Scroll canvas when selection is made and mouse outside of the bounds.
     */

        }, {
          key: '_startAutoPan',
          value: function _startAutoPan() {
            const _this5 = this;

            if (this._consts.autoPanSpeed) {
              if (!this._intervalRef) {
                // Repeat move calls to
                this._intervalRef = setInterval(() => {
                  _this5._handleMouseMoveEvent(null);
                }, this._consts.autoPanSpeed);
              }
            }
          },
          /**
     * Stop current running auto pan
     */

        }, {
          key: '_stopAutoPan',
          value: function _stopAutoPan() {
            if (this._intervalRef) {
              clearInterval(this._intervalRef);
              this._intervalRef = null;
            }

            this._autoPanLastActionDate = null;
          },
          /**
     * Check whether auto pan should be slowed down a bit.
     */

        }, {
          key: '_checkUpdateSpeedTooFast',
          value: function _checkUpdateSpeedTooFast() {
            // Slow down updated a bit.
            if (this._autoPanLastActionDate && Date.now() - this._autoPanLastActionDate <= 10) {
              return true;
            }

            this._autoPanLastActionDate = Date.now();
            return false;
          },
        }, {
          key: '_scrollByPan',
          value: function _scrollByPan(start, pos, scrollStartPos) {
            if (!start || !pos) {
              return;
            }

            const offsetX = Math.round(start.x - pos.x);
            const newLeft = scrollStartPos.x + offsetX;

            if (offsetX > 0) {
              this._rescaleInternal(newLeft + this._width());
            }

            if (offsetX > 0 && newLeft + this._width() >= this._scrollContainer.scrollWidth - 5) {
              this._scrollContainer.scrollLeft = this._scrollContainer.scrollWidth;
            } else {
              this._scrollContainer.scrollLeft = newLeft;
            }

            this._scrollContainer.scrollTop = Math.round(scrollStartPos.y + start.y - pos.y);
          },
        }, {
          key: '_scrollBySelectionOutOfBounds',
          value: function _scrollBySelectionOutOfBounds(pos) {
            const { x } = pos;
            const { y } = pos;
            let isChanged = false;
            let speedX = 0;
            let speedY = 0; // Small offset to start auto pan earlier.

            const bounds = this._consts.autoPanByScrollPadding;
            const isLeft = x <= bounds;
            const isRight = x >= this._width() - bounds;
            const isTop = y <= bounds;
            const isBottom = y >= this._height() - bounds;
            let newWidth = null;
            let newHeight = null;

            if (isLeft || isRight || isTop || isBottom) {
              // Auto move init
              this._startAutoPan();

              if (this._checkUpdateSpeedTooFast()) {
                return false;
              }

              const scrollSpeedMultiplier = isNaN(this._consts.scrollByDragSpeed) ? 1 : this._consts.scrollByDragSpeed;

              if (isLeft) {
                // Get normalized speed.
                speedX = -TimelineUtils.getDistance(x, bounds) * scrollSpeedMultiplier;
              } else if (isRight) {
                // Get normalized speed:
                speedX = TimelineUtils.getDistance(x, this._width() - bounds) * scrollSpeedMultiplier;
                newWidth = this.getScrollLeft() + this._width() + speedX;
              }

              if (isTop) {
                // Get normalized speed.
                speedY = -TimelineUtils.getDistance(x, bounds) * scrollSpeedMultiplier / 4;
              } else if (isBottom) {
                // Get normalized speed:
                speedY = TimelineUtils.getDistance(x, this._height() - bounds) * scrollSpeedMultiplier / 4;
                newHeight = this._scrollContainer.scrollTop + this._height();
              }
            } else {
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
          },
          /**
     * Convert screen pixel to value.
     */

        }, {
          key: 'pxToVal',
          value: function pxToVal(px) {
            if (!this._options) {
              return px;
            }

            let { min } = this._options;

            if (!TimelineUtils.isNumber(min)) {
              min = 0;
            }

            min *= this._currentZoom || 1;
            const steps = this._options.stepVal * this._currentZoom || 1;
            const val = min + px / this._options.stepPx * steps;
            return val;
          },
          /**
     * Convert value to local screen component coordinates.
     */

        }, {
          key: '_toScreenPx',
          value: function _toScreenPx(val) {
            return this.valToPx(val) - this.getScrollLeft() + this._leftMargin();
          },
          /**
     * Convert screen local coordinates to a global value info.
     */

        }, {
          key: '_fromScreen',
          value: function _fromScreen(px) {
            return this.pxToVal(this.getScrollLeft() + px - this._leftMargin());
          },
          /**
     * Convert area value to global screen pixel coordinates.
     */

        }, {
          key: 'valToPx',
          value: function valToPx(val) {
            if (!this._options) {
              return val;
            }

            let { min } = this._options;

            if (!TimelineUtils.isNumber(min)) {
              min = 0;
            }

            min *= this._currentZoom || 1;
            const steps = this._options.stepVal * this._currentZoom || 1;
            return (-min + val) * (this._options.stepPx / steps);
          },
          /**
     * Snap a value to a nearest grid point.
     */

        }, {
          key: 'snapVal',
          value: function snapVal(val) {
            // Snap a value if configured.
            if (this._options && this._options.snapEnabled && this._options.snapStep) {
              const stops = this._options.snapStep;
              const step = val / stops;
              const stepsFit = Math.round(step);

              const minSteps = Math.abs(this._options.min) / this._options.snapStep;

              const minOffset = TimelineUtils.sign(this._options.min) * (minSteps - Math.floor(minSteps)) * this._options.snapStep;

              val = Math.round(minOffset) + Math.round(stepsFit * stops);
            }

            val = TimelineUtils.keepInBounds(val, this._options.min, this._options.max);
            return val;
          },
        }, {
          key: '_mousePosToVal',
          value: function _mousePosToVal(x) {
            const snapEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            const mousePos = Math.min(x, this._width());

            let convertedVal = this._fromScreen(mousePos);

            convertedVal = Math.round(convertedVal);

            if (snapEnabled) {
              convertedVal = this.snapVal(convertedVal);
            }

            return convertedVal;
          },
          /**
     * Format line gauge text.
     * Default formatting is HMS
     * @param ms milliseconds to convert.
     * @param isSeconds whether seconds are passed.
     */

        }, {
          key: '_formatUnitsText',
          value: function _formatUnitsText(ms) {
            const isSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            const sign = TimelineUtils.sign(ms) < 0 ? '-' : '';
            ms = Math.abs(ms); // 1- Convert to seconds:

            let seconds = ms / 1000;

            if (isSeconds) {
              seconds = ms;
            }

            const year = Math.floor(seconds / (365 * 86400));
            seconds %= (365 * 86400);
            const days = Math.floor(seconds / 86400);
            seconds %= 86400; // 2- Extract hours:

            const hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour

            seconds %= 3600; // seconds remaining after extracting hours
            // 3- Extract minutes:

            const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
            // 4- Keep only seconds not extracted to minutes:

            seconds %= 60;
            let str = '';

            if (year) {
              str += `${year}:`;
            }

            if (days) {
              str += `${days}:`;
            }

            if (hours) {
              str += `${hours}:`;
            }

            if (minutes) {
              str += `${minutes}:`;
            }

            if (!isNaN(seconds)) {
              str += seconds;
            }

            return sign + str;
          },
          /**
     * Left padding of the timeline.
     */

        }, {
          key: '_leftMargin',
          value: function _leftMargin() {
            if (!this._options) {
              return 0;
            }

            return this._options.leftMargin || 0;
          },
        }, {
          key: '_renderTicks',
          value: function _renderTicks() {
            const rulerActive = !!this._ctx && !!this._options && !!this._ctx.canvas && this._ctx.canvas.clientWidth > 0 && this._ctx.canvas.clientHeight > 0 && this._options.stepPx;

            if (!rulerActive) {
              return;
            }

            const screenWidth = this._width() - this._leftMargin();

            let from = this.pxToVal(this.getScrollLeft());
            let to = this.pxToVal(this.getScrollLeft() + screenWidth);

            if (isNaN(from) || isNaN(to) || from === to) {
              return;
            }

            if (to < from) {
              const wasToVal = to;
              to = from;
              from = wasToVal;
            }

            const valDistance = TimelineUtils.getDistance(from, to);

            if (valDistance <= 0) {
              return;
            } // Find the nearest 'beautiful' step for a gauge.
            // 'beautiful' step should be dividable by 1/2/5/10!


            const step = TimelineUtils.findGoodStep(valDistance / (screenWidth / this._options.stepPx));
            const smallStep = TimelineUtils.findGoodStep(valDistance / (screenWidth / this._options.stepSmallPx)); // Find beautiful start point:

            const fromVal = Math.floor(from / step) * step; // Find a beautiful end point:

            const toVal = Math.ceil(to / step) * step + step;

            if (!TimelineUtils.isNumber(step) || step <= 0 || Math.abs(toVal - fromVal) === 0) {
              return;
            }

            let lastTextStart = 0;

            this._ctx.save();

            const headerHeight = timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options);
            const tickHeight = headerHeight / 2;
            const smallTickHeight = headerHeight / 1.3;

            for (let i = fromVal; i <= toVal; i += step) {
              // local
              const sharpPos = this._getSharp(this._toScreenPx(i));

              this._ctx.save();

              this._ctx.beginPath();

              this._ctx.setLineDash([4]);

              this._ctx.lineWidth = 1;
              this._ctx.strokeStyle = this._options.tickColor;
              TimelineUtils.drawLine(this._ctx, sharpPos, tickHeight, sharpPos, headerHeight);

              this._ctx.stroke();

              this._ctx.fillStyle = this._options.labelsColor;

              if (this._options.font) {
                this._ctx.font = this._options.font;
              }

              const text = this._formatUnitsText(i);

              const textSize = this._ctx.measureText(text);

              const textX = sharpPos - textSize.width / 2; // skip text render if there is no space for it.

              if (isNaN(lastTextStart) || lastTextStart <= textX) {
                lastTextStart = textX + textSize.width;

                this._ctx.fillText(text, textX, 10);
              }

              this._ctx.restore();

              if (!TimelineUtils.isNumber(smallStep) || smallStep <= 0) {
                continue;
              } // Draw small steps


              for (let x = i + smallStep; x < i + step; x += smallStep) {
                // local
                const nextSharpPos = this._getSharp(this._toScreenPx(x));

                this._ctx.beginPath();

                this._ctx.lineWidth = this._pixelRatio;
                this._ctx.strokeStyle = this._options.tickColor;
                TimelineUtils.drawLine(this._ctx, nextSharpPos, smallTickHeight, nextSharpPos, headerHeight);

                this._ctx.stroke();
              }
            }

            this._ctx.restore();
          },
          /**
     * calculate virtual mode. Determine screen positions for the elements.
     */

        }, {
          key: '_calculateModel',
          value: function _calculateModel() {
            const _this6 = this;

            const toReturn = {
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

            const { rows } = this._model;

            if (!rows || !Array.isArray(rows) || rows.length <= 0) {
              return toReturn;
            }

            let rowAbsoluteHeight = timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options);
            rows.forEach((row, index) => {
              if (!row || row.hidden) {
                return;
              } // draw with scroll virtualization:


              const rowHeight = timelineStyleUtils_TimelineStyleUtils.getRowHeight(row, _this6._options);
              const marginBottom = timelineStyleUtils_TimelineStyleUtils.getRowMarginBottom(row, _this6._options);
              const currentRowY = rowAbsoluteHeight - (_this6._scrollContainer ? _this6._scrollContainer.scrollTop : 0);
              rowAbsoluteHeight += rowHeight + marginBottom;

              if (index == 0) {
                toReturn.size.y = currentRowY;
              }

              toReturn.size.height = Math.max(rowAbsoluteHeight + rowHeight, toReturn.size.height);
              const calcRow = {
                size: {
                  x: 0,
                  y: currentRowY,
                  width: _this6._canvas ? _this6._width() : 0,
                  height: rowHeight,
                },
                marginBottom,
                model: row,
                min: null,
                max: null,
                groups: [],
                keyframes: [],
              };
              toReturn.rows.push(calcRow);

              if (!row.keyframes || !row.keyframes.forEach || row.keyframes.length <= 0) {
                return;
              } // Get min and max ms to draw keyframe rows:


              if (row && row.keyframes) {
                row.keyframes.forEach((keyframe) => {
                  if (keyframe && !isNaN(keyframe.val) && !keyframe.hidden) {
                    let currentGroup = null;

                    for (let i = 0; i < calcRow.groups.length; i++) {
                      const existingGroup = calcRow.groups[i];

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

                    const keyframeSize = _this6._getKeyframePosition(keyframe, calcRow);

                    const calcKeyframe = {
                      model: keyframe,
                      parentRow: calcRow,
                      parentGroup: currentGroup,
                      size: keyframeSize,
                    };
                    const min = currentGroup.min == null ? keyframe.val : Math.min(keyframe.val, currentGroup.min);
                    const max = currentGroup.max == null ? keyframe.val : Math.max(keyframe.val, currentGroup.max);

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

              calcRow.groups.forEach((group) => {
                // Extend row min max bounds by a group bounds:
                TimelineUtils.setMinMax(calcRow, group, true); // get group screen coords

                const groupRect = _this6._getKeyframesGroupSize(row, calcRow.size.y, group.min, group.max);

                group.size = groupRect;
              }); // Extend screen bounds by a current calculation:

              TimelineUtils.setMinMax(toReturn, calcRow, true);
            });

            if (TimelineUtils.isNumber(toReturn.max)) {
              toReturn.size.width = this.valToPx(toReturn.max);
            }

            return toReturn;
          },
        }, {
          key: '_renderRows',
          value: function _renderRows() {
            const _this7 = this;

            const data = this._calculateModel();

            if (data && data.rows) {
              this._ctx.save();

              data.rows.forEach((rowCalc) => {
                if (!rowCalc) {
                  return;
                }

                _this7._ctx.fillStyle = timelineStyleUtils_TimelineStyleUtils.getRowFillColor(rowCalc.model, _this7._options); // this._ctx.fillRect(data.areaRect.x, data.areaRect.y, data.areaRect.w, data.areaRect.h);
                // Note: bounds used instead of the clip while clip is slow!

                const bounds = _this7._cutBounds(rowCalc.size);

                if (bounds) {
                  _this7._ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
                }

                const keyframeLaneColor = timelineStyleUtils_TimelineStyleUtils.groupFillColor(rowCalc.model, _this7._options);

                if (!rowCalc.groups) {
                  return;
                }

                rowCalc.groups.forEach((group) => {
                  // get the bounds on a canvas
                  const rectBounds = _this7._cutBounds(group.size);

                  if (rectBounds) {
                    _this7._ctx.fillStyle = keyframeLaneColor;

                    _this7._ctx.fillRect(rectBounds.x, rectBounds.y, rectBounds.width, rectBounds.height);
                  }
                });
              });

              this._ctx.restore();
            }
          },
          /**
     * Method is used for the optimization.
     * Only visible part should be rendered.
     */

        }, {
          key: '_cutBounds',
          value: function _cutBounds(rect) {
            if (!rect) {
              return null;
            } // default bounds: minX, maxX, minY, maxY


            const minX = 0;
            const maxX = this._width();
            const minY = timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options);
            const maxY = this._width();

            if (TimelineUtils.isRectOverlap(rect, {
              x: minX,
              y: minY,
              width: TimelineUtils.getDistance(minX, maxX),
              height: TimelineUtils.getDistance(minY, maxY),
            })) {
              const y = Math.max(rect.y, minY);
              const x = Math.max(rect.x, minX);
              const offsetW = rect.x - x;
              const offsetH = rect.y - y;
              return {
                height: rect.height + offsetH,
                width: rect.width + offsetW,
                x,
                y,
                overlapY: Math.abs(offsetH) > 0,
                overlapX: Math.abs(offsetW) > 0,
              };
            }

            return null;
          },
          /**
     * get keyframe group screen rect coordinates.
     * @param row
     * @param rowY row screen coords y position
     */

        }, {
          key: '_getKeyframesGroupSize',
          value: function _getKeyframesGroupSize(row, rowY, minValue, maxValue) {
            let groupHeight = timelineStyleUtils_TimelineStyleUtils.rowGroupHeight(row, this._options);
            const height = timelineStyleUtils_TimelineStyleUtils.getRowHeight(row, this._options);

            if (!groupHeight && groupHeight !== 0 || isNaN(groupHeight) || groupHeight == 'auto') {
              groupHeight = Math.floor(height * 0.7);
            }

            if (groupHeight > height) {
              groupHeight = height;
            }

            const margin = height - groupHeight; // draw keyframes rows.

            const xMin = this._toScreenPx(minValue); // local


            const xMax = this._toScreenPx(maxValue); // local


            return {
              x: xMin,
              y: rowY + Math.floor(margin / 2),
              height: groupHeight,
              width: TimelineUtils.getDistance(xMin, xMax),
            };
          },
        }, {
          key: '_getKeyframePosition',
          value: function _getKeyframePosition(keyframe, rowCalculated) {
            if (!keyframe) {
              console.log('keyframe should be defined.');
              return null;
            }

            const { val } = keyframe;

            if (isNaN(val)) {
              return null;
            }

            const rowSize = rowCalculated.size; // get center of the lane:

            const y = rowSize.y + rowSize.height / 2;
            let height = timelineStyleUtils_TimelineStyleUtils.getKeyframeStyle(keyframe, rowCalculated.model, this._options, 'height', 'auto');
            let width = timelineStyleUtils_TimelineStyleUtils.getKeyframeStyle(keyframe, rowCalculated.model, this._options, 'width', 'auto');

            if (height == 'auto') {
              height = rowSize.height / 3;
            }

            if (width == 'auto') {
              width = height;
            }

            if (height > 0) {
              if (!isNaN(val)) {
                const toReturn = {
                  x: Math.floor(this._toScreenPx(val)),
                  // local
                  y: Math.floor(y),
                  height,
                  width,
                };
                return toReturn;
              }
            }

            return null;
          },
        }, {
          key: '_renderKeyframes',
          value: function _renderKeyframes() {
            const _this8 = this;

            this._forEachKeyframe((calcKeyframe) => {
              const row = calcKeyframe.parentRow.model;
              const pos = calcKeyframe.size;
              const keyframe = calcKeyframe.model;

              if (pos) {
                let x = _this8._getSharp(pos.x);

                let { y } = pos;

                const bounds = _this8._cutBounds({
                  x: x - pos.width / 2,
                  y: y - pos.height / 2,
                  width: pos.width,
                  height: pos.height,
                });

                if (!bounds) {
                  return;
                }

                _this8._ctx.save(); // Performance FIX: use clip only  when we are in the collision! Clip is slow!
                // Other keyframes should be hidden by bounds check.


                if (bounds && bounds.overlapY) {
                  _this8._ctx.beginPath();

                  _this8._ctx.rect(0, timelineStyleUtils_TimelineStyleUtils.headerHeight(_this8._options), _this8._width(), _this8._width());

                  _this8._ctx.clip();
                }

                const shape = timelineStyleUtils_TimelineStyleUtils.keyframeShape(keyframe, row, _this8._options);

                if (shape === TimelineKeyframeShape.None) {
                  return;
                }

                const keyframeColor = keyframe.selected ? timelineStyleUtils_TimelineStyleUtils.keyframeSelectedFillColor(keyframe, row, _this8._options) : timelineStyleUtils_TimelineStyleUtils.keyframeFillColor(keyframe, row, _this8._options);
                const border = timelineStyleUtils_TimelineStyleUtils.keyframeStrokeThickness(keyframe, row, _this8._options);
                const strokeColor = border > 0 ? keyframe.selected ? timelineStyleUtils_TimelineStyleUtils.keyframeSelectedStrokeColor(keyframe, row, _this8._options) : timelineStyleUtils_TimelineStyleUtils.keyframeStrokeColor(keyframe, row, _this8._options) : '';

                if (shape == TimelineKeyframeShape.Rhomb) {
                  _this8._ctx.beginPath();

                  _this8._ctx.translate(x, y);

                  _this8._ctx.rotate(45 * Math.PI / 180);

                  if (border > 0 && strokeColor) {
                    _this8._ctx.fillStyle = strokeColor;

                    _this8._ctx.rect(-pos.width / 2, -pos.height / 2, pos.width, pos.height);

                    _this8._ctx.fill();
                  }

                  _this8._ctx.fillStyle = keyframeColor; // draw main keyframe data with offset.

                  _this8._ctx.translate(border, border);

                  _this8._ctx.rect(-pos.width / 2, -pos.height / 2, pos.width - border * 2, pos.height - border * 2);

                  _this8._ctx.fill();
                } else if (shape == TimelineKeyframeShape.Circle) {
                  _this8._ctx.beginPath();

                  if (border > 0 && strokeColor) {
                    _this8._ctx.fillStyle = strokeColor;

                    _this8._ctx.arc(x, y, pos.height, 0, 2 * Math.PI);
                  }

                  _this8._ctx.fillStyle = keyframeColor;

                  _this8._ctx.arc(x, y, pos.height - border, 0, 2 * Math.PI);

                  _this8._ctx.fill();
                } else if (shape == TimelineKeyframeShape.Rect) {
                  _this8._ctx.beginPath();

                  y -= pos.height / 2;
                  x -= pos.width / 2;

                  if (border > 0 && strokeColor) {
                    _this8._ctx.fillStyle = strokeColor;

                    _this8._ctx.rect(x, y, pos.width, pos.height);

                    _this8._ctx.fill();
                  }

                  _this8._ctx.fillStyle = keyframeColor;

                  _this8._ctx.rect(x + border, y + border, pos.width - border, pos.height - border);

                  _this8._ctx.fill();
                }

                _this8._ctx.restore();
              }
            });
          },
        }, {
          key: '_renderSelectionRect',
          value: function _renderSelectionRect() {
            if (this._drag) {
              return;
            }

            this._ctx.save();

            const thickness = 1;

            if (this._selectionRect && this._selectionRectEnabled) {
              this._ctx.setLineDash([4]);

              this._ctx.lineWidth = this._pixelRatio;
              this._ctx.strokeStyle = this._options.selectionColor;

              this._ctx.strokeRect(this._getSharp(this._selectionRect.x, thickness), this._getSharp(this._selectionRect.y, thickness), Math.floor(this._selectionRect.width), Math.floor(this._selectionRect.height));
            }

            this._ctx.restore();
          },
        }, {
          key: '_renderBackground',
          value: function _renderBackground() {
            if (this._options.fillColor) {
              this._ctx.save();

              this._ctx.beginPath();

              this._ctx.rect(0, 0, this._width(), this._height());

              this._ctx.fillStyle = this._options.fillColor;

              this._ctx.fill();

              this._ctx.restore();
            } else {
              // Clear if bg not set.
              this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            }
          },
        }, {
          key: '_renderTimeline',
          value: function _renderTimeline() {
            if (!this._ctx || !this._options || !this._options.timelineStyle) {
              return;
            }

            const style = this._options.timelineStyle;

            this._ctx.save();

            const thickness = style.width || 1;
            this._ctx.lineWidth = thickness * this._pixelRatio;

            const timeLinePos = this._getSharp(this._toScreenPx(this._val), thickness);

            this._ctx.strokeStyle = style.strokeColor;
            this._ctx.fillStyle = style.fillColor;
            const y = style.marginTop;

            this._ctx.beginPath();

            TimelineUtils.drawLine(this._ctx, timeLinePos, y, timeLinePos, this._height());

            this._ctx.stroke();

            if (style.capHeight && style.capWidth) {
              const rectSize = style.capWidth;
              const { capHeight } = style;

              if (style.capType === TimelineCapShape.Triangle) {
                this._ctx.beginPath();

                this._ctx.moveTo(timeLinePos - rectSize / 2, y);

                this._ctx.lineTo(timeLinePos + rectSize / 2, y);

                this._ctx.lineTo(timeLinePos, capHeight);

                this._ctx.closePath();

                this._ctx.stroke();
              } else if (style.capType === TimelineCapShape.Rect) {
                this._ctx.fillRect(timeLinePos - rectSize / 2, y, rectSize, capHeight);

                this._ctx.fill();
              }
            }

            this._ctx.restore();
          },
        }, {
          key: '_renderHeaderBackground',
          value: function _renderHeaderBackground() {
            if (!this._ctx || !this._options) {
              return;
            }

            if (timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options)) {
              this._ctx.save(); // draw ticks background


              this._ctx.lineWidth = this._pixelRatio;

              if (this._options.headerFillColor) {
                // draw ticks background
                this._ctx.lineWidth = this._pixelRatio; // draw header background

                this._ctx.fillStyle = this._options.headerFillColor;

                this._ctx.fillRect(0, 0, this._width(), timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options));
              } else {
                this._ctx.clearRect(0, 0, this._width(), timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options));
              }

              this._ctx.restore();
            }
          },
        }, {
          key: 'redraw',
          value: function redraw() {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(this._redrawInternal);
            } else {
              this._redrawInternal();
            }
          },
          /**
     * perform scroll to max left.
     */

        }, {
          key: 'scrollLeft',
          value: function scrollLeft() {
            if (this._scrollContainer.scrollLeft != this._scrollContainer.scrollWidth) {
              this._scrollContainer.scrollLeft = this._scrollContainer.scrollWidth;
            }
          },
          /**
     * Redraw parts of the component in the specific order.
     */

        }, {
          key: 'getRowByY',

          /**
     * Get row by y coordinate.
     * @param posY y screen coordinate.
     */
          value: function getRowByY(posY) {
            const model = this._calculateModel();

            if (model && model.rows) {
              for (let i = 0; i < model.rows.length; i++) {
                const row = model.rows[i].size;

                if (row && row.y >= posY && posY <= row.y + row.height) {
                  return row;
                }
              }
            }

            return null;
          },
          /**
     * Find sharp pixel position
     */

        }, {
          key: '_getSharp',
          value: function _getSharp(pos) {
            const thickness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            pos = Math.round(pos);

            if (thickness % 2 == 0) {
              return pos;
            }

            return pos + this._pixelRatio / 2;
          },
          /**
     * Get current time:
     */

        }, {
          key: 'getTime',
          value: function getTime() {
            return this._val;
          },
          /**
     * Set current time internal
     * @param val value.
     * @param source event source.
     */

        }, {
          key: '_setTimeInternal',
          value: function _setTimeInternal(val) {
            const source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TimelineEventSource.Programmatically;
            val = Math.round(val);

            if (val < this._options.min) {
              val = this._options.min;
            }

            if (this._val != val) {
              const prevVal = this._val;
              const timelineEvent = new timelineTimeChangedEvent_TimelineTimeChangedEvent();
              timelineEvent.val = val;
              timelineEvent.prevVal = prevVal;
              timelineEvent.source = source;
              this._val = val;
              this.emit(TimelineEvents.TimeChanged, timelineEvent);

              if (timelineEvent.isPrevented()) {
                this._val = prevVal;
                return false;
              }

              return true;
            }

            return false;
          },
        }, {
          key: 'setTime',
          value: function setTime(val) {
            // don't allow to change time during drag:
            if (this._drag && this._drag.type === TimelineElementType.Timeline) {
              return false;
            }

            const isChanged = this._setTimeInternal(val, TimelineEventSource.SetTimeMethod);

            if (isChanged) {
              this.rescale();
              this.redraw();
            }

            return isChanged;
          },
        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this._options;
          },
        }, {
          key: 'setScrollLeft',
          value: function setScrollLeft(value) {
            if (this._scrollContainer) {
              this._scrollContainer.scrollLeft = value;
            }
          },
        }, {
          key: 'setScrollTop',
          value: function setScrollTop(value) {
            if (this._scrollContainer) {
              this._scrollContainer.scrollTop = value;
            }
          },
        }, {
          key: 'getScrollLeft',
          value: function getScrollLeft() {
            return this._scrollContainer ? this._scrollContainer.scrollLeft : 0;
          },
        }, {
          key: 'getScrollTop',
          value: function getScrollTop() {
            return this._scrollContainer ? this._scrollContainer.scrollTop : 0;
          },
          /**
     * Set options and render the component.
     * Options will be merged with the defaults and control invalidated
     */

        }, {
          key: 'setOptions',
          value: function setOptions(toSet) {
            this._options = this._setOptions(toSet);
            this.rescale();
            this.redraw(); // Merged options:

            return this._options;
          },
        }, {
          key: '_setOptions',
          value: function _setOptions(toSet) {
            this._options = this._mergeOptions(toSet); // Normalize and validate spans per value.

            this._options.snapStep = TimelineUtils.keepInBounds(this._options.snapStep, 0, this._options.stepVal);
            this._currentZoom = this._setZoom(this._options.zoom, this._options.zoomMin, this._options.zoomMax);
            this._options.min = TimelineUtils.isNumber(this._options.min) ? this._options.min : 0;
            this._options.max = TimelineUtils.isNumber(this._options.max) ? this._options.max : Number.MAX_VALUE;

            if (this._scrollContainer) {
              const { classList } = this._scrollContainer;

              if (this._options.scrollContainerClass && classList.contains(this._options.scrollContainerClass)) {
                classList.add(this._options.scrollContainerClass);
              }

              if (this._options.fillColor) {
                this._scrollContainer.style.background = this._options.fillColor;
              }
            }

            return this._options;
          },
        }, {
          key: 'getModel',
          value: function getModel() {
            return this._model;
          },
          /**
     * Set model and redraw application.
     * @param data
     */

        }, {
          key: 'setModel',
          value: function setModel(data) {
            this._model = data;
            this.rescale();
            this.redraw();
          }, // eslint-disable-next-line @typescript-eslint/no-explicit-any

        }, {
          key: '_getMousePos',
          value: function _getMousePos(canvas, e) {
            let radius = 1;
            let clientX = 0;
            let clientY = 0;

            if (e.changedTouches && e.changedTouches.length > 0) {
              // TODO: implement better touch support
              const touch = e.changedTouches[0];
              clientX = touch.clientX;
              clientY = touch.clientY;
              radius = Math.max(radius, touch.radiusX, touch.radiusY);
            } else {
              clientX = e.clientX;
              clientY = e.clientY;
            }

            const rect = canvas.getBoundingClientRect();
            // abs. size of element
            const scaleX = canvas.width / this._pixelRatio / rect.width;
            // relationship bitmap vs. element for X
            const scaleY = canvas.height / this._pixelRatio / rect.height; // relationship bitmap vs. element for Y

            const x = (clientX - rect.left) * scaleX;
            const y = (clientY - rect.top) * scaleY; // scale mouse coordinates after they have been adjusted to be relative to element

            return {
              x,
              y,
              radius,
              args: e,
            };
          },
          /**
     * Apply container div size to the container on changes detected.
     */

        }, {
          key: '_updateCanvasScale',
          value: function _updateCanvasScale() {
            if (!this._scrollContainer || !this._ctx) {
              console.log('control should be initialized first');
              return;
            }

            let changed = false;
            const width = this._scrollContainer.clientWidth * this._pixelRatio;
            const height = this._scrollContainer.clientHeight * this._pixelRatio;

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
          },
          /**
     * Rescale and update size of the container.
     */

        }, {
          key: 'rescale',
          value: function rescale() {
            this._rescaleInternal();
          },
        }, {
          key: '_rescaleInternal',
          value: function _rescaleInternal() {
            let newWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let newHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            const scrollMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

            this._updateCanvasScale();

            const data = this._calculateModel();

            if (data && data.size) {
              const additionalOffset = this._options.stepPx;
              newWidth = newWidth || 0; // not less than current timeline position

              const timelineGlobalPos = this.valToPx(this._val);
              let timelinePos = 0;

              if (timelineGlobalPos > this._width()) {
                if (scrollMode == 'scrollBySelection') {
                  timelinePos = Math.floor(timelineGlobalPos + this._width() + (this._options.stepPx || 0));
                } else {
                  timelinePos = Math.floor(timelineGlobalPos + this._width() / 1.5);
                }
              }

              const keyframeW = data.size.width + this._leftMargin() + additionalOffset;
              newWidth = Math.max(newWidth, // keyframes size
                keyframeW, // not less than current scroll position
                this.getScrollLeft() + this._width(), timelinePos);
              const minWidthPx = `${Math.floor(newWidth)}px`;

              if (minWidthPx != this._scrollContent.style.minWidth) {
                this._scrollContent.style.minWidth = minWidthPx;
              }

              newHeight = Math.max(Math.floor(data.size.height + this._height() * 0.2), this._scrollContainer.scrollTop + this._height() - 1, Math.round(newHeight || 0));
              const h = `${newHeight}px`;

              if (this._scrollContent.style.minHeight != h) {
                this._scrollContent.style.minHeight = h;
              }
            }
          },
          /**
     * get draggable element.
     * Filter elements and get first element by a priority.
     * @param Array
     * @param val current mouse value
     */

        }, {
          key: '_findDraggable',
          value: function _findDraggable(elements) {
            const _this9 = this;

            const val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            // filter and sort: TimelineView, individual keyframes, groups (distance).
            const getPriority = function getPriority(type) {
              if (type === TimelineElementType.Timeline) {
                return 1;
              } if (type === TimelineElementType.Keyframe) {
                return 2;
              } if (type === TimelineElementType.Group) {
                return 3;
              }

              return -1;
            };

            const filteredElements = elements.filter((element) => {
              if (!element) {
                return false;
              }

              if (element.type === TimelineElementType.Keyframe) {
                if (!timelineStyleUtils_TimelineStyleUtils.keyframeDraggable(element.keyframe, element.row, _this9._options)) {
                  return false;
                }
              } else if (element.type === TimelineElementType.Group) {
                if (!timelineStyleUtils_TimelineStyleUtils.groupDraggable(element.row, _this9._options)) {
                  return false;
                }
              } else if (element.type === TimelineElementType.Row) {
                return false;
              }

              return true;
            });
            const sorted = filteredElements.sort((a, b) => {
              let prioA = getPriority(a.type);
              let prioB = getPriority(b.type);

              if (prioA === prioB) {
                if (val === null) {
                  return 0;
                } // Sort by distance


                prioA = TimelineUtils.getDistance(a.val, val);
                prioB = TimelineUtils.getDistance(b.val, val);

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
          },
          /**
     * get all clickable elements by a screen point.
     */

        }, {
          key: 'elementFromPoint',
          value: function elementFromPoint(pos) {
            const _this10 = this;

            let clickRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            clickRadius = Math.max(clickRadius, 1);
            const toReturn = [];

            if (!pos) {
              return toReturn;
            }

            const headerHeight = timelineStyleUtils_TimelineStyleUtils.headerHeight(this._options); // Check whether we can drag timeline.

            const timeLinePos = this._toScreenPx(this._val);

            let width = 0;

            if (this._options && this._options.timelineStyle) {
              const { timelineStyle } = this._options;
              width = Math.max((timelineStyle.width || 1) * this._pixelRatio, (timelineStyle.capWidth || 0) * this._pixelRatio || 1) + clickRadius;
            } // Allow to select timeline only by half of a header to allow select by a selector top most keyframes row.


            if (pos.y <= headerHeight * 0.5 || pos.x >= timeLinePos - width / 2 && pos.x <= timeLinePos + width / 2) {
              toReturn.push({
                val: this._val,
                type: TimelineElementType.Timeline,
              });
            }

            const snap = this._options.snapEnabled;

            if (pos.y >= headerHeight && this._options.keyframesDraggable) {
              this._forEachKeyframe((calcKeyframe, index, isNextRow) => {
                // Check keyframes group overlap
                if (isNextRow) {
                  const rowOverlapped = TimelineUtils.isOverlap(pos.x, pos.y, calcKeyframe.parentRow.size);

                  if (rowOverlapped) {
                    const row = {
                      val: _this10._mousePosToVal(pos.x, snap),
                      keyframes: calcKeyframe.parentRow.model.keyframes,
                      type: TimelineElementType.Row,
                      row: calcKeyframe.parentRow.model,
                    };
                    toReturn.push(row);
                  }

                  if (calcKeyframe.parentRow.groups) {
                    calcKeyframe.parentRow.groups.forEach((group) => {
                      let keyframesGroupOverlapped = TimelineUtils.isOverlap(pos.x, pos.y, group.size);

                      if (keyframesGroupOverlapped) {
                        let keyframesModels = _this10._mapKeyframes(group.keyframes);

                        let groupElement = {
                          val: _this10._mousePosToVal(pos.x, snap),
                          type: TimelineElementType.Group,
                          group,
                          row: calcKeyframe.parentRow.model,
                          keyframes: keyframesModels,
                        };

                        let snapped = _this10.snapVal(group.min); // get snapped mouse pos based on a min value.


                        groupElement.val += group.min - snapped;
                        toReturn.push(groupElement);
                      }
                    });
                  }
                }

                const keyframePos = calcKeyframe.size;

                if (keyframePos) {
                  const dist = TimelineUtils.getDistance(keyframePos.x, keyframePos.y, pos.x, pos.y);

                  if (dist <= keyframePos.height + clickRadius) {
                    toReturn.push({
                      keyframe: calcKeyframe.model,
                      keyframes: [calcKeyframe.model],
                      val: calcKeyframe.model.val,
                      row: calcKeyframe.parentRow.model,
                      type: TimelineElementType.Keyframe,
                    });
                  }
                }
              });
            }

            return toReturn;
          },
          /**
     * Merge options with the defaults.
     */

        }, {
          key: '_mergeOptions',
          value: function _mergeOptions(from) {
            from = from || {}; // Apply incoming options to default. (override default)
            // Deep clone default options:

            const to = JSON.parse(JSON.stringify(defaultTimelineOptions)); // Merge options with the default.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any

            const mergeOptionsDeep = function mergeOptionsDeep(to, from) {
              if (!to || !from) {
                return;
              } // eslint-disable-next-line prefer-const


              for (const key in from) {
                if (Object.prototype.hasOwnProperty.call(from, key)) {
                  if (from[key] !== undefined) {
                    if (timeline_typeof(from[key]) === 'object') {
                      if (!to[key]) {
                        to[key] = from[key];
                      } else {
                        mergeOptionsDeep(to[key], from[key]);
                      }
                    } else {
                      to[key] = from[key];
                    }
                  }
                }
              }
            };

            mergeOptionsDeep(to, from);
            return to;
          },
          /**
     * Subscribe on time changed.
     */

        }, {
          key: 'onTimeChanged',
          value: function onTimeChanged(callback) {
            this.on(TimelineEvents.TimeChanged, callback);
          },
          /**
     * Subscribe on drag started event.
     */

        }, {
          key: 'onDragStarted',
          value: function onDragStarted(callback) {
            this.on(TimelineEvents.DragStarted, callback);
          },
          /**
     * Subscribe on drag event.
     */

        }, {
          key: 'onDrag',
          value: function onDrag(callback) {
            this.on(TimelineEvents.Drag, callback);
          },
          /**
     * Subscribe on drag finished event.
     */

        }, {
          key: 'onDragFinished',
          value: function onDragFinished(callback) {
            this.on(TimelineEvents.DragFinished, callback);
          },
          /**
     * Subscribe on double click.
     */

        }, {
          key: 'onDoubleClick',
          value: function onDoubleClick(callback) {
            this.on(TimelineEvents.DoubleClick, callback);
          },
          /**
     * Subscribe on keyframe changed event.
     */

        }, {
          key: 'onKeyframeChanged',
          value: function onKeyframeChanged(callback) {
            this.on(TimelineEvents.KeyframeChanged, callback);
          },
          /**
     * Subscribe on drag finished event.
     */

        }, {
          key: 'onMouseDown',
          value: function onMouseDown(callback) {
            this.on(TimelineEvents.MouseDown, callback);
          },
        }, {
          key: 'onSelected',
          value: function onSelected(callback) {
            this.on(TimelineEvents.Selected, callback);
          },
          /**
     * Subscribe on scroll event
     */

        }, {
          key: 'onScroll',
          value: function onScroll(callback) {
            this.on(TimelineEvents.Scroll, callback);
          },
        }, {
          key: '_emitScrollEvent',
          value: function _emitScrollEvent(args) {
            const scrollEvent = {
              args,
              scrollLeft: this.getScrollLeft(),
              scrollTop: this.getScrollTop(),
              scrollHeight: this._scrollContainer.scrollHeight,
              scrollWidth: this._scrollContainer.scrollWidth,
            };

            _get(timeline_getPrototypeOf(Timeline.prototype), 'emit', this).call(this, TimelineEvents.Scroll, scrollEvent);

            return scrollEvent;
          },
        }, {
          key: '_emitKeyframeChanged',
          value: function _emitKeyframeChanged(element) {
            const source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TimelineEventSource.Programmatically;
            const args = new TimelineKeyframeChangedEvent();
            args.val = element.val;
            args.prevVal = element.prevVal;
            args.target = element;
            args.source = source;
            this.emit(TimelineEvents.KeyframeChanged, args);
            return args;
          },
        }, {
          key: '_emitDragStartedEvent',
          value: function _emitDragStartedEvent() {
            const args = this._getDragEventArgs();

            this.emit(TimelineEvents.DragStarted, args);

            if (args.isPrevented()) {
              this._preventDrag(args, this._drag, true);
            }

            return args;
          },
        }, {
          key: '_emitDragFinishedEvent',
          value: function _emitDragFinishedEvent() {
            if (this._drag && this._drag.changed) {
              const args = this._getDragEventArgs();

              this.emit(TimelineEvents.DragFinished, args);

              if (args.isPrevented()) {
                this._preventDrag(args, this._drag, true);
              }

              return args;
            }

            return null;
          },
        }, {
          key: '_preventDrag',
          value: function _preventDrag(dragArgs, data) {
            const _this11 = this;

            const toStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (dragArgs.elements) {
              dragArgs.elements.forEach((element) => {
                const toSet = toStart ? element.startedVal : element.prevVal;

                _this11._setKeyframePos(element, toSet);
              });
            }

            data.val = data.prevVal;
            dragArgs.val = dragArgs.prevVal;
          },
        }, {
          key: '_emitDragEvent',
          value: function _emitDragEvent() {
            if (!this._drag) {
              return null;
            }

            const args = this._getDragEventArgs();

            this.emit(TimelineEvents.Drag, args);

            if (args.isPrevented()) {
              this._preventDrag(args, this._drag, false);
            }

            return args;
          },
        }, {
          key: '_emitKeyframesSelected',
          value: function _emitKeyframesSelected(state) {
            const args = new TimelineSelectedEvent();
            args.selected = state.selected;
            args.changed = state.changed;
            this.emit(TimelineEvents.Selected, args);
            return args;
          },
        }, {
          key: '_getDragEventArgs',
          value: function _getDragEventArgs() {
            const draggableArguments = new TimelineDragEvent();

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
          },
        }]);

        return Timeline;
      }(TimelineEventsEmitter));
      // EXTERNAL MODULE: ./src/timelineModel.ts
      var timelineModel = __webpack_require__(2);

      // EXTERNAL MODULE: ./src/timelineRow.ts
      var timelineRow = __webpack_require__(3);

      // EXTERNAL MODULE: ./src/timelineKeyframe.ts
      var timelineKeyframe = __webpack_require__(4);

      // EXTERNAL MODULE: ./src/settings/timelineConsts.ts
      var timelineConsts = __webpack_require__(5);

      // EXTERNAL MODULE: ./src/timelineRanged.ts
      var timelineRanged = __webpack_require__(6);

      // EXTERNAL MODULE: ./src/settings/timelineOptions.ts
      var timelineOptions = __webpack_require__(7);

      // EXTERNAL MODULE: ./src/settings/styles/timelineKeyframeStyle.ts
      var timelineKeyframeStyle = __webpack_require__(8);

      // EXTERNAL MODULE: ./src/settings/styles/timelineRowStyle.ts
      var timelineRowStyle = __webpack_require__(9);

      // EXTERNAL MODULE: ./src/settings/styles/timelineStyle.ts
      var styles_timelineStyle = __webpack_require__(10);

      // EXTERNAL MODULE: ./src/utils/timelineElement.ts
      var timelineElement = __webpack_require__(11);

      // EXTERNAL MODULE: ./src/utils/selectable.ts
      var selectable = __webpack_require__(12);

      // EXTERNAL MODULE: ./src/utils/timelineCutBoundsRectResults.ts
      var timelineCutBoundsRectResults = __webpack_require__(13);

      // EXTERNAL MODULE: ./src/utils/timelineSelectionResults.ts
      var timelineSelectionResults = __webpack_require__(14);

      // EXTERNAL MODULE: ./src/utils/timelineValues.ts
      var timelineValues = __webpack_require__(15);

      // EXTERNAL MODULE: ./src/utils/timelineMouseData.ts
      var timelineMouseData = __webpack_require__(16);

      // EXTERNAL MODULE: ./src/utils/timelineDraggableData.ts
      var timelineDraggableData = __webpack_require__(1);

      // EXTERNAL MODULE: ./src/utils/timelineModelCalcResults.ts
      var timelineModelCalcResults = __webpack_require__(0);

      // EXTERNAL MODULE: ./src/utils/events/timelineScrollEvent.ts
      var timelineScrollEvent = __webpack_require__(17);

      // CONCATENATED MODULE: ./src/animation-timeline.ts
      // bundle entry point


      // @public styles


      // @private helper containers.


      // @private virtual model


      // @public events


      // @public enums


      // @private defaults are exposed:
      /** */ }),
    /** *** */ ]))));
