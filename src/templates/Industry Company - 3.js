let stage = {}, exportRoot = {};

const template = (function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];


  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    }
  }).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.text2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._text = new cjs.Text("PROCESS", "bold 100px 'Lato Black'", "#FFFFFF");
    this._text.name = "_text";
    this._text.lineHeight = 122;
    this._text.lineWidth = 626;
    this._text.parent = this;
    this._text.setTransform(2, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 629.6, 124), null);


  (lib.text1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._text = new cjs.Text("TECHNOLOGICAL", "bold 55px 'Lato'", "#7C8491");
    this._text.name = "_text";
    this._text.lineHeight = 68;
    this._text.lineWidth = 626;
    this._text.parent = this;
    this._text.setTransform(2, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 629.6, 88), null);


  (lib.Symbol11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#909DB0").s().p("ADEA1IgvAAIkkAAIgvAAIglAAIAAhpIHHAAIAABpg");
    this.shape.setTransform(623.075, 55.35);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#56606A").s().p("ACSCmIAAlLIAwAAIAAFLgAjBCmIAAlLIAwAAIAAFLg");
    this.shape_1.setTransform(623.325, 77.225);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#56606A").s().p("ACSCmIAAlLIAwAAIAAFLgAjBCmIAAlLIAwAAIAAFLg");
    this.shape_2.setTransform(565.325, 77.225);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#909DB0").s().p("ADEA1IgvAAIkkAAIgvAAIglAAIAAhpIHHAAIAABpg");
    this.shape_3.setTransform(565.075, 55.35);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#909DB0").s().p("AhIBYIAAivICRAAIAACvg");
    this.shape_4.setTransform(635.275, 28.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#909DB0").s().p("AhIBYIAAivICRAAIAACvg");
    this.shape_5.setTransform(608.575, 28.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#909DB0").s().p("AhIBYIAAivICRAAIAACvg");
    this.shape_6.setTransform(580.525, 28.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#909DB0").s().p("AhIBYIAAivICRAAIAACvg");
    this.shape_7.setTransform(550.725, 28.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#A09E9F").ss(2, 1, 1).p("AAGiHIAAgyAAAjLQBVAAA7A7QA8A8AABUQAABUg8A8Qg7A8hVAAQhTAAg8g8Qg8g8AAhUQAAhUA8g8QA8g7BTAAgAAagPQADAFABAHQABADgBADQgCAGgEAGQgDAEgEACQgDACgEABQgCAAgBAAQgJABgHgEQgBgBgCgBQgEgEgCgGQgCgEgBgEQAAgIAEgHQABgBABgCIABgBQAGgIAKgBQABAAADAAQAEABAEABQADACAEACQABABABABQACACABACgAASgMIAGgCIABAAIABgBAADCKIAAAuAiYAAIgnAAACdhDIiDA0ACDAKIA4AA");
    this.shape_8.setTransform(146.7, 47.8);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#949CA9").s().p("AgRAPQgHgHAAgIIgBgDIAAAAQAAgLAIgHIAAgBIgBAIQAAAGADAGQACACADADIAHAGIABAAQAFAEAHAAIAAAAIAAAAIABAAIACgBIADAAIAIgDIgIADIgDAAIgCABIgBAAIAAAAIAAAAQgHAAgFgEIgBAAQAEACAGAAIAHAAIAEgCIAIgFIgCAFIgFAGIgDADQgHAEgJAAQgKAAgHgHg");
    this.shape_9.setTransform(146.05, 49);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#A09E9F").s().p("AgHASIgHgFQgDgDgCgEQgDgFAAgGIABgHIAGgEQgDAFAAAHIAAADIACAIQACAFAFAEIACACIgCgCQgFgEgCgFIgCgIIAAgDQAAgHADgFQAGgDAGAAQAKAAAIAHQAGAGABAHIAAAFIAAAHIgIAFIgEACIgHAAQgFAAgFgCgAgPgQIAAAAg");
    this.shape_10.setTransform(146.45, 48.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#FAFDFF").s().p("AiQCQQg7g8AAhUQAAhTA7g9QA9g7BTAAQBUAAA8A7QA8A9AABTQAABUg8A8Qg8A8hUAAQhTAAg9g8gAADC5IAAgvgAgRgVQgFAFgBAGIAAABQgIAHAAAKIAAAAIABAEQAAAIAHAHQAHAHALAAQAIAAAHgEIADgDIAEgGQAEgCADgEQAFgGABgFIAAgEIAAgDQgBgGgEgFICEg1IiEA1IgCgFIgCgCIgHgEIAHAEIACACIACAFQAEAFABAGIAAADIAAAEQgBAFgFAGQgDAEgEACIACgFIABgBQAHgHAAgKQAAgHgDgFIAAAAIABAAIgBAAIAAAAIgEgHIgGgEQgGgDgHAAQgKAAgIAHgAC6ALIg3AAgAiYAAIgnAAgAAFiHIAAgxgAAYgOgAAZgOIAAAAg");
    this.shape_11.setTransform(146.7, 47.8);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#A09E9F").ss(2, 1, 1).p("AAFiHIAAgyACQiQQA8A8AABUQAABUg8A8Qg8A8hUAAQhUAAg8g8Qg7g8AAhUQAAhUA7g8QA8g7BUAAQBUAAA8A7gAiYAAIgnAAACDAKIA3AAAAIAXQgFAEgGABQgEAAgEAAQgGgCgFgEQgHgFgCgJQAAgCgBgCQgBgKAHgIQAEgEAFgDQAEgBAFgBQAKgBAIAHIAAAAQAIAHABAKQABACgBACQAAAIgFAGQgBACgBABQgCACgCAAgAAEAQIADAGIABABIACAGIAyB9AADCKIAAAu");
    this.shape_12.setTransform(92.15, 47.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#949CA9").s().p("AgRAPQgHgHAAgIIgBgDIAAAAQACAIAHAFQAGAFAGAAIAEABIACAAQAHgBAFgEIACAGQgGAFgKAAQgKAAgHgHgAAOALIAEgCQAEgCAEgDQgCAGgFAFIgDACgAgEAPQgGAAgGgFQgHgFgCgIQABgLAHgHIAAgBIAAAIQAAAGACAGQACACADADQAIAIAKAAIAGgBIAEgBIgEACIAAgBIAAABQgFAEgHABIgCAAIgEgBgAAOALgAASAJIAAAAgAgZgDIAAAAg");
    this.shape_13.setTransform(91.5, 49);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#A09E9F").s().p("AgOANQgDgDgCgEQgCgFAAgGIAAgHQAIgHAKAAQAKAAAIAHQAGAGABAHQAAAIgGAHIgCACIACgCQAGgHAAgIIABAFIgBAHQgEADgEACIgEABIgDgGIADAGIgGABQgKAAgIgHgAAKATgAAWABIAAAAg");
    this.shape_14.setTransform(91.9, 48.075);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FAFDFF").s().p("AiQCQQg7g8AAhUQAAhTA7g9QA9g7BTAAQBUAAA8A7QA8A9AABTQAABUg8A8Qg8A8hUAAQhTAAg9g8gAADC5IAAgvgAA8CbIgyh+gAgRgVQgFAFgBAGIAAABQgIAHAAAKIAAAAIABAEQAAAIAHAHQAHAHALAAQAIAAAHgFIADgCQAFgFABgGIAAgBQAIgHAAgKQAAgLgIgIQgHgHgLAAQgKAAgIAHgAC6ALIg3AAgAgfAFIAAADIAAgDIgBgEQAAgIAGgGQAEgFAFgDQgFADgEAFQgGAGAAAIIABAEgAiYAAIgnAAgAAGiHIAAgxg");
    this.shape_15.setTransform(92.15, 47.8);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f().s("#A09E9F").ss(2, 1, 1).p("AAAjLQBVAAA7A7QA8A8AABUQAABUg8A8Qg7A8hVAAQhTAAg8g8Qg8g8AAhUQAAhUA8g8QA8g7BTAAgAgVAJQgDgFAAgGQAAgEABgEQACgGAFgEQAHgIAKAAQALAAAIAIQAHAHAAALQAAAKgHAHQgBABAAAAQgHAHgLAAQgKAAgHgIQgDgCgCgEIgKADIh9AkAgVAJIAIgDAiYAAIgnAAAADCKIAAAuAAGiHIAAgyACDAKIA4AA");
    this.shape_16.setTransform(42.3, 46.45);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#A09E9F").s().p("AgOANIgFgHIAIgCIgIACQgDgFAAgGIABgHQAIgHAKAAQAKAAAIAHQAHAIAAAKIgBAHQgHAHgLAAQgKAAgHgHg");
    this.shape_17.setTransform(42.05, 46.725);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#949CA9").s().p("AgRAPQgGgGgBgJIAJgCIgJACIgBgDQAAgKAIgIIAAgBIgBAIQAAAHADAFIAFAFQAHAIAKAAQALAAAHgHQgBAGgFAFQgIAHgLAAQgKAAgHgHg");
    this.shape_18.setTransform(41.65, 47.65);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#FAFDFF").s().p("AiQCQQg7g8AAhUQAAhTA7g9QA9g7BTAAQBUAAA8A7QA8A9AABTQAABUg8A8Qg8A8hUAAQhTAAg9g8gAADC5IAAgvgAicAwIB9gkQABAJAHAGQAHAHALAAQAKAAAIgHQAEgFACgGIABgBQAHgHAAgKQAAgLgHgHQgIgIgLAAQgKAAgIAIQgEAEgCAGIAAABQgIAIAAAJIAAAEgAC6ALIg3AAgAiYAAIgnAAgAAGiHIAAgxg");
    this.shape_19.setTransform(42.3, 46.45);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#949CA9").s().p("AjSA5IAAhxIGlAAIAABxg");
    this.shape_20.setTransform(144.275, 83.35);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#949CA9").s().p("AjSA5IAAhxIGlAAIAABxg");
    this.shape_21.setTransform(92.275, 83.35);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#949CA9").s().p("AjSA5IAAhxIGlAAIAABxg");
    this.shape_22.setTransform(42.275, 83.35);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_23.setTransform(201.1, 80.075);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_24.setTransform(201.1, 72.075);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_25.setTransform(201.1, 64.075);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_26.setTransform(201.1, 56.075);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_27.setTransform(201.1, 46.075);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#86878C").s().p("AiEAbIAAg1IEJAAIAAA1g");
    this.shape_28.setTransform(201.1, 38.075);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#ECF3FD").s().p("AjMEkIAApHIGZAAIAAJHg");
    this.shape_29.setTransform(200.7, 58.4);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#666D77").s().p("EAngAMpQhkAAAAhkIAA1dMhMrAAAIAARwQAABlhkAAIh6AAQhkAAAAhlIAAzrQAAgLABgKMBXiAAAIAAAIIAAXlQAABkhkAAg");
    this.shape_30.setTransform(331.575, 200.65);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#6B7380").s().p("EAr5AJXMhXiAAAImfAAQhkAAAAhkIAAvlQAAhkBkAAMBkRAAAQBkAAAABkIAAPlQAABkhkAAgA3iEVIGaAAIAApGImaAAg");
    this.shape_31.setTransform(330.9, 59.875);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_31}, {t: this.shape_30}, {t: this.shape_29}, {t: this.shape_28}, {t: this.shape_27}, {t: this.shape_26}, {t: this.shape_25}, {t: this.shape_24}, {t: this.shape_23}, {t: this.shape_22}, {t: this.shape_21}, {t: this.shape_20}, {t: this.shape_19}, {t: this.shape_18}, {t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 661.8, 281.6);


  (lib.Symbol10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#525F7F").s().p("Ao1LuQhKAAg1g1Qg1g0AAhLIAAxzQAAhLA1g1QA1g0BKAAIABAAQBKAAA1A0QA1A1AABLIAANkIN2lPQBFgbBEAfQBEAfAaBEIABABQAaBFgeBEQgfBFhFAaIwqGVIgPAFQgwAohBAAg");
    this.shape.setTransform(74.591, 75.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 149.2, 150.1);


  (lib.Symbol8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E5B75F").s().p("EAnPAHaIAAuzISaAAIAAOzgAJjHaIAAuzISaAAIAAOzgA0IHaIAAuzISaAAIAAOzgEg5oAHaIAAuzISaAAIAAOzg");
    this.shape.setTransform(368.875, 47.425);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 737.8, 94.9);


  (lib.shape11content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#B8C1CA").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
    this.shape.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape11content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape10content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#787F91").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
    this.shape.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape10content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape9content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
    this.shape.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape9content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape8content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FEBC5E").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
    this.shape.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape8content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.qwertyu = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F4C35A").s().p("AjzmQQBnDsggItIoOAAQg4AAglAIQAIqaIciHgAKvGJInyAAQgaoLBikOQIZBOgGLPQgtgJg8AFg");
    this.shape.setTransform(87.0789, 50.875);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#E4AD36").s().p("AtvHAQgKhCBYgUQAlgJA3AAIIPAAQAfothnjsIgLgYQD0imEZCmIgJAYQhjEPAbIKIHxAAQA9gFAsAKQBDANAfAvQAVB2iHAFQh+g2iQAQIvUgLQiwgQhrBHIgQABQhVAAgKhkg");
    this.shape_1.setTransform(88.1496, 54.8295);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 176.3, 109.7);


  (lib.Symbol7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("EgqTAQpIAA/4QAAhZBdAAMBRtAAAQBdAAAABZIAAf4g");
    var mask_graphics_155 = new cjs.Graphics().p("EgqTAQpIAA/4QAAhZBdAAMBRtAAAQBdAAAABZIAAf4g");

    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: 289.85,
      y: 126.725
    }).wait(155).to({graphics: mask_graphics_155, x: 289.85, y: 126.725}).wait(1).to({
      graphics: null,
      x: 0,
      y: 0
    }).wait(158));

    // Layer_3
    this.instance = new lib.Symbol8("synched", 0);
    this.instance.setTransform(-345.9, 185.9, 1, 1, 0, 0, 0, 368.9, 47.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 192.9}, 155).to({_off: true}, 1).wait(158));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#757B89").ss(4, 1, 1).p("AAjAkQgOAOgVAAQgTAAgPgOQgOgPAAgVQAAgTAOgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAPgAEIAAQAABthOBNQhNBOhtAAQhsAAhNhOQhNhNAAhtQAAhsBNhNQBNhNBsAAQBtAABNBNQBOBNAABsg");
    this.shape.setTransform(366.2, 273.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#757B89").ss(4, 1, 1).p("Ai5i5QBNhNBsAAQBtAABNBNQBOBNAABsQAABthOBNQhNBOhtAAQhsAAhNhOQhOhNAAhtQAAhsBOhNgAAyAAQAAAVgPAPQgOAOgVAAQgTAAgPgOQgOgPAAgVQAAgTAOgPQAPgOATAAQAVAAAOAOQAPAPAAATg");
    this.shape_1.setTransform(499.2, 273.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#757B89").ss(4, 1, 1).p("AgigiQAOgOAUAAQAUAAAPAOQAPAPAAATQAAAVgPAPQgPAOgUAAQgUAAgOgOQgPgPAAgVQAAgTAPgPgAAAkGQBtAABNBNQBNBNAABsQAABthNBNQhNBOhtAAQhsAAhOhOQhNhNAAhtQAAhsBNhNQBOhNBsAAg");
    this.shape_2.setTransform(67.2, 273.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#757B89").ss(4, 1, 1).p("AEIAAQAABthOBNQhNBOhtAAQhsAAhNhOQhNhNAAhtQAAhsBNhNQBNhNBsAAQBtAABNBNQBOBNAABsgAAjAkQgOAOgVAAQgTAAgPgOQgOgPAAgVQAAgTAOgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAPg");
    this.shape_3.setTransform(200.2, 273.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#B9BFCB").s().p("EgqTAEkIAApIMBUnAAAIAAJIg");
    this.shape_4.setTransform(289.85, 273.55);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#7C8290").s().p("AfeGdIqNAAMgmjAAAIqMAAIu1AAIAAiCMBUnAAAIAACCgEgqTgEtIAAhvMBUnAAAIAABvg");
    this.shape_5.setTransform(289.85, 274.525);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#7B818F").s().p("Ego2ADnQhdAAAAhZIAAg9ISIAAIAAinIjTAAIAAiQIKMAAIAACQIjeAAIAACnMAtUAAAIAAinIjTAAIAAiQIKNAAIAACQIjfAAIAACnIOVAAIAAA9QAABZhdAAg");
    this.shape_6.setTransform(289.85, 338.925);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FAF6F5").s().p("Ab/ZiIAAioIDfAAIAAiQIK2AAIAAE4gA0wZiIAAioIDeAAIAAiQMAmjAAAIAACQIDTAAIAACogEgqTAZiIAAk4IO1AAIAACQIDTAAIAACogEgqTAHxIAA/5QAAhZBdAAMBRtAAAQBdAAAABZIAAf5g");
    this.shape_7.setTransform(289.85, 183.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#6C7079").s().p("EgruAd3QhjAAgBhkMAAAg4lQABhkBjAAMBXdAAAQBjAAAABkMAAAA4lQAABkhjAAgEgqTgZTIAAf5IAABuIAAJJIAACCIAAE4IAAA9QAABaBdAAMBRtAAAQBdAAAAhaIAAg9IAAk4IAAiCIAApJIAAhuIAA/5QAAhZhdAAMhRtAAAQhdAAAABZg");
    this.shape_8.setTransform(289.85, 191.1);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#757B89").ss(4, 1, 1).p("AEIAAQAABthOBNQhNBOhtAAQhsAAhNhOQhNhNAAhtQAAhsBNhNQBNhNBsAAQBtAABNBNQBOBNAABsgAAjAkQgOAOgVAAQgTAAgPgOQgOgPAAgVQAAgTAOgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAPg");
    this.shape_9.setTransform(200.2, 273.9);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {
        t: this.shape_3,
        p: {x: 200.2}
      }, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]
    }).to({
      state: [{t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_9}, {t: this.shape_2}, {t: this.shape_1}, {
        t: this.shape_3,
        p: {x: 366.2}
      }]
    }, 155).to({state: []}, 1).wait(158));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 579.7, 382.2);


  (lib.shape11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape11content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape11, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape10content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape10, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape9content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape9, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape8content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape8, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.head001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.qwertyu("synched", 0);
    this.instance.setTransform(42.55, 15.75, 0.5216, 0.5216, 0, 0, 0, 88.2, 57.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#514B51").s().p("AAAFQQjngEiDjKIgKgOIgHgeIgBgBQgVhVAEhUIAAAAIAAgEIAAgEQADilB1gtIA8gVQGYgUA+ANQAWgDAUARQBWAkAPCmIAAAEQAIB9gRBrQiZDWjhAAIgJAAg");
    this.shape.setTransform(42.1235, 54.0927);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FDD6AF").s().p("Ag0EMQkDgzg6j2QCCDJDnAFQDnAFCcjbQARhqgIh+IABANQAHgBASAYQAMANACAYQAJBogxATIgJAkQhGD+kAAzQgRACgSAAIgRAAIgSAAQgSAAgRgCgAmqjEQACgYALgNIAIgKQgDBVAUBVQgwgUAKhng");
    this.shape_1.setTransform(42.8999, 70.025);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.4, -14.4, 91.9, 111.5);


  (lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_6
    this.instance = new lib.head001("synched", 0);
    this.instance.setTransform(124.85, 87.15, 1.4817, 1.4817, 0, 0, 0, 42.9, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5D666F").s().p("AQeISIAAgEIAAwPQAXgIAbAAQA+AAArAsQAsAsAAA9IAAL4QAAA+gsAsQgrAsg+AAQgbgBgXgHgAyvHJQg1g1AAhNIAAqoQAAhMA1g2QA2g1BMgBQAOAAANACIAAQUQgNACgOAAQhMAAg2g2g");
    this.shape.setTransform(125.325, 449.85);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#7C8799").s().p("AtQSZQjIAAAAjIIAAgQIAAwUIAAt9QAAjIDIAAIBLAAIY7AAIAbAAQDIAAAADIIAAOSIAAQPIAAAEQgCDEjGAAg");
    this.shape_1.setTransform(125.875, 404.725);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#EFC9A4").s().p("AkfhhII/AAIAAC1Io/AOg");
    this.shape_2.setTransform(127.125, 160.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#525F7F").s().p("AsUJOIgSu5QD2icEJg4IAFAAII/gOIIKD1IAAOmg");
    this.shape_3.setTransform(127.425, 228);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(135));

    // Layer_3
    this.instance_1 = new lib.Symbol10("synched", 0);
    this.instance_1.setTransform(201.85, 206.45, 1, 1.074, 0, -24.0513, 155.949, 13.9, 16.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({startPosition: 0}, 0).to({
      regX: 14,
      scaleX: 0.999,
      scaleY: 1.0729,
      skewX: -19.5353,
      skewY: 160.4643,
      x: 201.7,
      y: 206.55
    }, 6, cjs.Ease.get(-1)).to({
      regX: 13.9,
      scaleX: 1,
      scaleY: 1.074,
      skewX: -15.0624,
      skewY: 164.9383,
      x: 201.85,
      y: 206.5
    }, 6, cjs.Ease.get(1)).wait(20).to({startPosition: 0}, 0).to({
      regX: 14,
      scaleX: 0.9985,
      scaleY: 1.0725,
      skewX: -30.0867,
      skewY: 149.9108,
      x: 201.75,
      y: 206.55
    }, 6, cjs.Ease.get(-1)).to({
      regX: 13.8,
      scaleX: 1,
      scaleY: 1.074,
      skewX: -42.7431,
      skewY: 137.2571,
      x: 201.85,
      y: 206.45
    }, 5, cjs.Ease.get(1)).wait(30).to({startPosition: 0}, 0).to({
      regX: 13.9,
      skewX: -24.0513,
      skewY: 155.949
    }, 11).wait(24));

    // Layer_2
    this.instance_2 = new lib.Symbol10("synched", 0);
    this.instance_2.setTransform(50.15, 210.55, 1, 1.074, 24.0513, 0, 0, 15.5, 20.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({startPosition: 0}, 0).to({
      scaleX: 0.9989,
      scaleY: 1.0729,
      rotation: 19.8186,
      x: 50.25
    }, 6, cjs.Ease.get(-1)).to({
      regX: 15.6,
      scaleX: 1,
      scaleY: 1.074,
      rotation: 15.8223,
      y: 210.6
    }, 6, cjs.Ease.get(1)).wait(38).to({startPosition: 0}, 0).to({
      scaleX: 0.9987,
      scaleY: 1.0726,
      rotation: 26.0427,
      x: 50.2,
      y: 210.65
    }, 6, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1.074,
      rotation: 34.5245,
      x: 50.25,
      y: 210.6
    }, 5, cjs.Ease.get(1)).wait(31).to({startPosition: 0}, 0).to({
      regX: 15.5,
      rotation: 24.0513,
      x: 50.15,
      y: 210.55
    }, 11).wait(14));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-34.2, -6.1, 335.59999999999997, 528.6);


  (lib.Symbol12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Symbol9("synched", 0);
    this.instance.setTransform(310.55, 762.45, 1, 1, 0, 0, 0, 125.3, 261.2);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off: false}, 0).to({
      y: 294.45,
      startPosition: 10
    }, 10, cjs.Ease.get(1)).to({y: 315.7, startPosition: 16}, 6, cjs.Ease.get(-1)).to({
      y: 333.45,
      startPosition: 19
    }, 5, cjs.Ease.get(1)).wait(113).to({startPosition: 132}, 0).to({_off: true}, 1).wait(4));

    // Layer_2
    this.instance_1 = new lib.Symbol11("synched", 0);
    this.instance_1.setTransform(242.3, 357.5, 0.7358, 0.7358, 0, 0, 0, 330.9, 63.4);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off: false}, 0).to({
      scaleX: 1.1831,
      scaleY: 1.1831
    }, 7, cjs.Ease.get(1)).to({
      scaleX: 1,
      scaleY: 1
    }, 8, cjs.Ease.get(1)).wait(126).to({startPosition: 0}, 0).to({_off: true}, 1).wait(4));

    // Layer_3
    this.instance_2 = new lib.Symbol7("synched", 0);
    this.instance_2.setTransform(239.55, 52.05, 0.1768, 0.1768, 0, 0, 0, 289.9, 191.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
      regY: 191.1,
      scaleX: 1.129,
      scaleY: 1.129,
      x: 239.6,
      startPosition: 10
    }, 10, cjs.Ease.get(1)).to({scaleX: 0.911, scaleY: 0.911, startPosition: 16}, 6).to({
      scaleX: 1,
      scaleY: 1,
      startPosition: 24
    }, 8, cjs.Ease.get(1)).wait(127).to({startPosition: 151}, 0).to({_off: true}, 1).wait(4));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-149.2, -163.7, 783, 1187.4);


// stage content:
  (lib.IndustryCompany3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // shape10
    this.shape10 = new lib.shape10();
    this.shape10.name = "shape10";
    this.shape10.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape10).wait(8).to({x: 1931.5}, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(136).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(4));

    // shape9
    this.shape9 = new lib.shape9();
    this.shape9.name = "shape9";
    this.shape9.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape9).wait(14).to({x: 1931.5}, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(127).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(7));

    // shape8
    this.shape8 = new lib.shape8();
    this.shape8.name = "shape8";
    this.shape8.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape8).wait(16).to({x: 1931.5}, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(122).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(10));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = "text1";
    this.text1.setTransform(1057.55, 333.9, 1, 1, 0, 0, 0, 314.8, 44);
    this.text1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(58).to({
      x: 1593.05,
      alpha: 1
    }, 0).to({x: 994.55}, 8, cjs.Ease.get(1)).to({x: 1026.05}, 4, cjs.Ease.get(-1)).to({x: 1057.55}, 4, cjs.Ease.get(1)).wait(103));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = "text2";
    this.text2.setTransform(1057.55, 380.65, 1, 1, 0, 0, 0, 314.8, 44);
    this.text2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(64).to({
      x: 1593.05,
      alpha: 1
    }, 0).to({x: 994.55}, 8, cjs.Ease.get(1)).to({x: 1026.05}, 4, cjs.Ease.get(-1)).to({x: 1057.55}, 4, cjs.Ease.get(1)).wait(97));

    // fx
    this.instance = new lib.Symbol12("synched", 0);
    this.instance.setTransform(371.35, 426.15, 1, 1, 0, 0, 0, 242.4, 217.2);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off: false}, 0).wait(152));

    // shape11
    this.shape11 = new lib.shape11();
    this.shape11.name = "shape11";
    this.shape11.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape11).wait(177));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1, 1, 1, 3, true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
    this.shape.setTransform(640, 360);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
    this.shape_1.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(177));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-651.5, 360, 3223, 872.7);
// library properties:
  lib.properties = {
    id: 'D7636992DA5B4E3C88720F0AB686B167',
    width: 1280,
    height: 720,
    fps: 24,
    color: "#999999",
    opacity: 1.00,
    manifest: [],
    preloads: []
  };


// bootstrap callback support:

  (lib.Stage = function (canvas) {
    window.createjs.Stage.call(this, canvas);
  }).prototype = p = new window.createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  };
  p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  };

  p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['D7636992DA5B4E3C88720F0AB686B167'] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused) {
        stageChild.syncStreamSounds();
      }
    }
  }


});

export default template;