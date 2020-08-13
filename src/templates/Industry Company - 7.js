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


  (lib.upleg001b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#4F545A").s().p("AgMLwQjWgagRirIAAxQQAAi0DcgVQD4gZASDHIABAEIAARlQgTDJjEAAQgUAAgVgCg");
    this.shape.setTransform(24.3749, 75.3934);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 48.8, 150.8);


  (lib.upleg001 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#50535A").s().p("AgMLwQjWgagRirIAAxQQAAi0DcgVQD4gZASDHIABAEIAARlQgTDJjEAAQgUAAgVgCg");
    this.shape.setTransform(24.3749, 75.3934);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 48.8, 150.8);


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
    this._text = new cjs.Text("INTERACTION", "bold 70px 'Lato'", "#F4B533");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 86;
    this._text.lineWidth = 623;
    this._text.parent = this;
    this._text.setTransform(313.65, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 627.4, 160), null);


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
    this._text = new cjs.Text("TEAM", "bold 130px 'Lato'", "#FFFFFF");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 158;
    this._text.lineWidth = 623;
    this._text.parent = this;
    this._text.setTransform(313.65, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 627.4, 160), null);


  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
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
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#EEC7A6").s().p("AP0BcQgzgPgIg1QAAgyBAgJIBbgFQgngNAFgbQACgSAmAAIBeAAQBSBvhhB3IgRABQhJAAhbgpgAyoBjQhhh3BShwIBeAAQAmABACARQAFAcgnAMIBbAFQBAAJAAA0QgIA0gzAOQhbAphJAAIgRAAg");
    this.shape.setTransform(114.6207, 64.3794);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AyHJ3IAAztMAkPAAAIAATtg");
    this.shape_1.setTransform(116, 63.125);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-9.9, 0, 249.1, 126.3);


  (lib.shape13content = function (mode, startPosition, loop, reversed) {
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

  }).prototype = getMCSymbolPrototype(lib.shape13content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape12content = function (mode, startPosition, loop, reversed) {
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

  }).prototype = getMCSymbolPrototype(lib.shape12content, new cjs.Rectangle(0, 0, 1280, 720), null);


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
    this.shape.graphics.f("#ACB4C1").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
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


  (lib.shape1content = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#959DAA").s().p("EhnVAKXIAA0tMDOrAAAIAAUtg");
    this.shape.setTransform(661.425, 66.275);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape1content, new cjs.Rectangle(0, 0, 1322.9, 132.6), null);


  (lib.qwq23b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#57565B").s().p("AgJGFQibgGieidQgxgogShSQgDgPAJhbQAIhbAyhUQAlhAAHgFIgBgBQA+hNA1gcQBBgkAtABIAxAAIAGAAIANgBIAHABQBWgBBUAqQBiAxA7B+QAyCCgFBuQgBAZgFAZQgcBWgOALQiyCtikAAIgJAAg");
    this.shape.setTransform(42.0074, 38.8186);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(3, 0, 78.1, 77.7);


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
    this.shape.graphics.f("#F4C35A").s().p("AilHtQjRhNhlgKQHXhHH9BSQheAKhnAnQiZA8iGAAQhiAAhYghgAjzoNQBnDsggItIoOAAQg4AAglAIQAIqaIciHgAKvEMInyAAQgaoLBikOQIZBOgGLPQgtgJg8AFg");
    this.shape.setTransform(87.0789, 63.3506);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#E4AD36").s().p("AtvHAQgKhCBYgUQAlgJA3AAIIPAAQAfothnjsIgLgYQD0imEZCmIgJAYQhjEPAbIKIHxAAQA9gFAsAKQBDANAfAvQAVB2iHAFQh+g2iQAQQn+hTnWBIQiwgQhrBHIgQABQhVAAgKhkg");
    this.shape_1.setTransform(88.1496, 54.8295);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 176.3, 116);


  (lib.qq23b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#FDD6AF").s().p("Ag2GjQkYg2g/kgQgygTAJhnQADgYALgNQAQgUAlAFQAdjBCih1QA9geAsAqQBYBXBShXQAzgpA8AZQCbBXAUDiQAegCAOASQAMANACAYQAJBngyATQg/EgkZA2QgRACgSAAIgSAAIgTAAQgSAAgSgCg");
    this.shape.setTransform(42.9, 33.9801);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.1, -8.1, 88, 84.19999999999999);


  (lib.neck2 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#F9CCA5").s().p("AAHE9Qh1gzgOjpIgBgDIgSj4QCGi/CNC0IALDrQAGE4h/AAIgPgBg");
    this.shape.setTransform(14.3603, 31.7385);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 28.7, 63.5);


  (lib.leg0012 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5F5D62").s().p("Ai7BCIADiDICwAAIAOAAQCsAHAKB8g");
    this.shape.setTransform(17.575, 121.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFD6AE").s().p("AijLqIAI0KQAOjGChgDQCkAYgXC3IiVUEg");
    this.shape_1.setTransform(15.4411, 40.75);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.2, -33.8, 37.6, 162.39999999999998);


  (lib.leg001b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#333333").s().p("AkCBgIgBiaQDbhKDUBKQBlAXgPCDg");
    this.shape.setTransform(28.022, 119.225);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#4F545A").s().p("AjeI2IgTtYIgChyQADieDjgDQD+gNADC5IgkO/QjThKjbBKg");
    this.shape_1.setTransform(24.375, 56.6572);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 54, 128.9);


  (lib.leg001 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#48474D").s().p("AkCBgIgBiaQDbhKDUBKQBlAXgPCDg");
    this.shape.setTransform(28.022, 119.225);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#50535A").s().p("AjeI2IgTtYIgChyQADieDjgDQD+gNADC5IgkO/QjThKjbBKg");
    this.shape_1.setTransform(24.375, 56.6572);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 54, 128.9);


  (lib.head0022 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#FDD6AF").s().p("AgwFxQkSg3gtkXQgFg/AFhUQFjhlDpidQBXAjAoCMQAbCYgFBZQgoENkRA2QgRACgSAAIgRAAIgTAAQgRgBgRgBg");
    this.shape.setTransform(37.0393, 37.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 74.1, 74.2);


  (lib.hair0012 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#333333").s().p("AnliBQAAh6AchWQBdkzFOg4QFPAFB4FJQAUBHAJBbIArOEIvhAFg");
    this.shape.setTransform(49.7, 70.125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 99.4, 140.3);


  (lib.glaces2b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("rgba(125,154,184,0.302)").s().p("AC5BbQhJgDgJgOQgigsgPg0IgDgJQAAgGABgFIACgHQAJgRAbgLIAFgBQBQgSBNAKQAaADAYAHQAOAFAGANQAFAJABAMQAJAlgQAsIgHAPQgEAIgFAGIgCADQgmAPg7AAIgVAAgAktBOIgEgFQgFgGgEgHIgGgPQgQgsAJglQAAgNAFgJQAGgMAOgGQAZgGAZgDQBOgKBQARIAEACQAcAKAIARIADAHQABAGgBAGIgCAJQgQA0giArQgIAOhHABIgLAAQhAAAgsgLg");
    this.shape.setTransform(39.8032, 12.4434);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#314053").s().p("AkRBqQgZgDgTgNQgNgLgJgYQgOgxgFgsIgBgBQgGgPgLgEIgDgBQgJgVAPgRQCAgQB6AGQA3AGAlAUIAgAAIADAAIAegBQAlgUA3gFQB2gGBxAQIAGABIADAAIADABQAQAQgCAPQgEAFgBAAIgDAAQgJAIgEAMQgGAsgNAyQgKAagJAGQgUAOgcADQhFAIhCgHQgfgEgPgSQgqgugXg/IgmAAIgTABQgXA/gqAuQgPARgfAFQggAEggAAQgjAAgkgEgABghRIgEABQgcALgIARIgDAHQgBAFABAGIACAJQAPA0AiAsQAJAOBJADQBJADAtgSIADgDQAFgGADgIIAHgPQAQgrgJgmQAAgMgFgJQgHgNgNgFQgZgHgZgDQgcgEgcAAQgyAAg0AMgAj6hYQgZADgZAGQgPAGgGAMQgEAJgBANQgJAmARArIAGAPQADAHAFAGIAEAFQAwAMBHgBQBHgBAJgOQAigrAPg0IADgJQABgGgCgGIgCgHQgIgRgdgKIgEgCQgzgLgyAAQgcAAgcAEg");
    this.shape_1.setTransform(39.6932, 12.7044);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(1.4, 1.8, 76.6, 21.9);


  (lib.body00122 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5B6066").s().p("ABmKpIoHgCQBikGglkXIAAgEQh8iGAjixQAHg4gbg+IhGiDQhTh2CPg4QA/ggA+gVQA5gTA5gJQAlB+BSCxQBSCxAqBVQCAkXArhuQArhuARhCQA6AKAVAIIAjAOQA9AVA/AgQCPA3hSB3IhHCCQgLAZgFAXIgEAdQgCAUADASQAHAiAAAgIgDA8QgCAxgcAwQgXAwgoArIgBAFQgkEUBiEFIk9ADIAAgBg");
    this.shape.setTransform(78.3981, 106.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("Ah1AzQhSiwgmh+QABgvBlgOQABBYBeA4IAwD3IAhj3QBZg4AJhVQBiALABAvQgRBCgrBuQgrBtiBEXQgphVhSixg");
    this.shape_1.setTransform(78.425, 63.95);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(21.8, 32.7, 113.3, 142.39999999999998);


  (lib.body001b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#4D5150").s().p("AgdAdQgMgLAAgSQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAASgMALQgNANgRAAQgQAAgNgNg");
    this.shape.setTransform(76.6, 183);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#4D5150").s().p("AgdAdQgMgLAAgSQAAgRAMgMQANgMAQAAQARAAANAMQAMAMAAARQAAASgMALQgNANgRAAQgQAAgNgNg");
    this.shape_1.setTransform(76.6, 160.35);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#5F6064").s().p("AAbO9IgojLIg8DLIm7gCIAAkGIACAAIAAmeIhqqSQjRkRBUhpQDNiHDNhCQg/CSARCfIB8ANIhNBbQEPEQA2FTQB8lFDckZIgjhhIBQgUQACiSgfiSQDFBCDGCCQBUBpjRERIhqKSIAAGeIACAAIAABqIABAAIAACgg");
    this.shape_2.setTransform(77, 133.0375);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#4D5150").s().p("AlMhfIBNhbIh7gNQgRifA+iRIAogMIDQJnIBbERIBikiIDJpVIAwAPQAfCSgBCSIhQAUIAjBhQjcEYh9FGQg2lUkPkPg");
    this.shape_3.setTransform(76.7622, 87.6125);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#AE6E6F").s().p("AheB4IAglWIgEgJQgMgZAAgeQAAgsAXgeIAFgFQATgWAagDIAIgBQAYAAATAQIAOAPQAZAeAAAsQgBAogVAfIAgE9IhhEig");
    this.shape_4.setTransform(77.65, 85.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#4F545A").s().p("AoFCyIAAibIG8ACIA7jKIApDKIHqACIAACXg");
    this.shape_5.setTransform(77.05, 226.2375);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AkrkvIAhgJIClFWIAmhEIAFAJIggFWgABDgWIAcA0ICmlWIAnALIjKJUg");
    this.shape_6.setTransform(77.3, 66.375);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#EEC7A6").s().p("AjEAnIACiLQgDiSC6ABIALAAIAMAAQC6gBgDCSIACCLIiQDEQgTgQgZAAIgJABQgYADgUAXg");
    this.shape_7.setTransform(77, 24.5742);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FAFAFA").s().p("ABGCbQAVgeAAgpQAAgrgYgfIgOgOICQjEIAEgGQALgEALAPIApA9IimFWgAkHiGIApg9QALgPALAEIAEAGICYDOIgEAEQgYAfAAArQAAAeAMAZIgmBFg");
    this.shape_8.setTransform(77, 48.5981);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154, 244.1);


  (lib.body001copy = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#676C72").s().p("Am3MeIhutgQhMmWDQkBQBehIDiAEIDEAAIB7AFQB8ADBIA8QDQEBhMGWIhuNgg");
    this.shape.setTransform(78.4243, 247.8643);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(21.4, 168.1, 114.1, 159.6);


  (lib.body001 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5F6160").s().p("Ah4BMIAAiXIDxAAIAACXgAhJAvICTAAIAAhdIiTAAg");
    this.shape.setTransform(77.275, 207.575);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#535552").s().p("AoEA1IAAhpIACAAIQFAAIACAAIAABpg");
    this.shape_1.setTransform(77, 207.625);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#50535A").s().p("AoFCcIAAk3IQJAAIABAAIAAE3g");
    this.shape_2.setTransform(77.05, 228.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AoCNEIAAmeIhqqSQjRkRBUhpQDxifDxg+IClFXIAmhGIAFAJIhjQcIClDDICji+IhowaIAcA2ICmlXQDxA+DxCfQBUBpjRERIhqKSIAAGeg");
    this.shape_3.setTransform(77, 118.725);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FACA68").s().p("AikICIBjwcIgFgJQgLgZAAgeQAAgsAXgeIAEgFQAUgWAZgDIAJgBQAYAAATAQIAOAPQAYAeAAAsQAAAogVAfIBpQZIijC+g");
    this.shape_4.setTransform(77.975, 117.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#EEC7A6").s().p("AjEAnIACiLQgDiSC6ABIALAAIAMAAQC6gBgDCSIACCLIiQDEQgTgQgZAAIgJABQgYADgUAXg");
    this.shape_5.setTransform(77, 24.5742);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FAFAFA").s().p("ABGCbQAVgeAAgpQAAgrgYgfIgOgOICQjEIAEgGQALgEALAPIApA9IimFWgAkHiGIApg9QALgPALAEIAEAGICYDOIgEAEQgYAfAAArQAAAeAMAZIgmBFg");
    this.shape_6.setTransform(77, 48.5981);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154, 244.1);


  (lib.bicep0012 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5B6066").s().p("AhtH8QhEgNABhQQAAgQAEgTIBTnkQAThfAPhcQARhhAxhAQAmgwAfgIQARgDAVAEQAVAEAFAGQAlAMgEBHQgFBHgOA8QgNA7gGAgIiPJ9QgVA/g4ACIgFAAQgLAAgMgCg");
    this.shape.setTransform(29.1974, 45.8818);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(11.5, -5.1, 35.4, 102);


  (lib.bicep001b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5F6064").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


  (lib.bicep001 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#FFFFFF").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


  (lib.arm0012 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5B6066").s().p("AiLjPQgMiGA5gaQAWgPAiABQABABAEAAQADAAAKAEIAGACQAxAaAJAtIBiKdQhHgjhMAzg");
    this.shape.setTransform(26.0485, 31.8097);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEC7A6").s().p("Ag9CZQg8h8AIjbQBOgzBGAjQAyBPAdCDQAFAwgSAFQgaAKgSgxIAHBzQAABSg0AGQg0gEgVhAg");
    this.shape_1.setTransform(36.7831, 89.0645);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(11.9, -6.3, 36.4, 117.5);


  (lib.arm001b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#5F6064").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
    this.shape.setTransform(14.691, 39.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
    this.shape_1.setTransform(15.9958, 97.875);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.1, -2.7, 29.6, 118.2);


  (lib.arm001 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
    this.shape.setTransform(15.9958, 97.875);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
    this.shape_1.setTransform(14.691, 39.1);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.1, -2.7, 29.6, 118.2);


  (lib.shape13 = function (mode, startPosition, loop, reversed) {
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
    this._shape = new lib.shape13content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape13, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.shape12 = function (mode, startPosition, loop, reversed) {
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
    this._shape = new lib.shape12content();
    this._shape.name = "_shape";
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape12, new cjs.Rectangle(0, 0, 1280, 720), null);


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


  (lib.shape1 = function (mode, startPosition, loop, reversed) {
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
    this._shape = new lib.shape1content();
    this._shape.name = "_shape";
    this._shape.setTransform(661.4, 66.2, 1, 1, 0, 0, 0, 661.4, 66.2);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape1, new cjs.Rectangle(0, 0, 1322.9, 132.6), null);


  (lib.head0012 = function (mode, startPosition, loop, reversed) {
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

    // Layer_4
    this.instance = new lib.qwertyu("synched", 0);
    this.instance.setTransform(43, 15.35, 0.5715, 0.5715, 0, 0, 0, 88.2, 57.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({startPosition: 0}, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).wait(117));

    // Layer_1
    this.instance_1 = new lib.head0022("synched", 0);
    this.instance_1.setTransform(42.6, 63.65, 1, 1, 0, 0, 0, 37.1, 37.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({startPosition: 0}, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).wait(117));

    // Layer_2
    this.instance_2 = new lib.neck2("synched", 0);
    this.instance_2.setTransform(42.55, 111.45, 1, 1, 0, 0, 0, 14.3, 31.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({startPosition: 0}, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).wait(117));

    // Layer_3
    this.instance_3 = new lib.hair0012("synched", 0);
    this.instance_3.setTransform(43.9, 38.35, 1, 1, 0, 0, 0, 49.7, 38.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({startPosition: 0}, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).wait(6).to({startPosition: 0}, 0).to({
      scaleY: 1.0035,
      skewX: -4.7486,
      x: 47.1
    }, 7, cjs.Ease.get(1)).to({
      regX: 49.8,
      scaleY: 1.002,
      skewX: -1.2941,
      x: 45,
      y: 38.3
    }, 3, cjs.Ease.get(-1)).to({
      regX: 49.7,
      scaleY: 1.0005,
      skewX: 1.8991,
      x: 42.65,
      y: 38.35
    }, 3, cjs.Ease.get(1)).to({scaleY: 1.0003, skewX: -1.2666, x: 44.75}, 4).to({
      scaleY: 1,
      skewX: 0,
      x: 43.9
    }, 5, cjs.Ease.get(1)).wait(89));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-10.4, -17.7, 115.60000000000001, 160.89999999999998);


  (lib.head001b = function (mode, startPosition, loop, reversed) {
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

    // Layer_4
    this.instance = new lib.qwertyu("synched", 0);
    this.instance.setTransform(43.6, 11.1, 0.5444, 0.5444, 0, 0, 0, 88.2, 57.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({startPosition: 0}, 0).to({_off: true}, 1).wait(159));

    // Layer_3
    this.instance_1 = new lib.glaces2b("synched", 0);
    this.instance_1.setTransform(43.85, 49.55, 1, 1, 0, 0, 0, 39.8, 11);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({startPosition: 0}, 0).to({_off: true}, 1).wait(159));

    // Layer_1
    this.instance_2 = new lib.qq23b("synched", 0);
    this.instance_2.setTransform(42.9, 59.05, 1, 1, 0, 0, 0, 42.9, 38.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({startPosition: 0}, 0).to({_off: true}, 1).wait(159));

    // Layer_2
    this.instance_3 = new lib.qwq23b("synched", 0);
    this.instance_3.setTransform(42.95, 23.3, 1.0898, 1, 0, 0, 0, 41.8, 23.3);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({startPosition: 0}, 0).to({_off: true}, 1).wait(159));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.4, -20.4, 96, 117.5);


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
    this.shape.graphics.f("#FDD6AF").s().p("Ag0F8QkRg2g+kfQgxgTAKhnQABgYALgNIAJgLQAAisB4guIA8gVQGYgUA+ANQAWgDAUARQBaAmAMC2QAGgBATAYQAMANACAYQAJBngxATQg+EfkRA2QgRACgSAAIgRAAIgTABQgRgBgRgCg");
    this.shape.setTransform(42.9, 58.7505);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.4, -14.4, 91.9, 111.5);


  (lib.char0012 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.arm0012("synched", 0);
    this.instance.setTransform(166.5, 81.9, 1, 1, 0, 0, 180, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 20.6,
      regY: 4.6,
      skewX: 2.7401,
      skewY: 182.7401,
      x: 195.4,
      y: 100.05
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regX: 20.7,
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: 1.5058,
      skewY: 181.5058,
      x: 179.85,
      y: 90.4
    }, 4, cjs.Ease.get(-1)).to({
      regY: 4.5,
      scaleX: 1,
      scaleY: 1,
      skewX: -8.2483,
      skewY: 171.7517,
      x: 149.5,
      y: 82.15
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_3
    this.instance_1 = new lib.bicep0012("synched", 0);
    this.instance_1.setTransform(160.25, 7.1, 1, 1, 0, 0, 180, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 39.3,
      regY: 3.1,
      skewX: -19.2143,
      skewY: 160.7857,
      x: 150.25,
      y: 28.25
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regY: 3,
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: -10.5506,
      skewY: 169.4494,
      x: 146.4,
      y: 13.65
    }, 4, cjs.Ease.get(-1)).to({
      regX: 39.2,
      regY: 3.1,
      scaleX: 1,
      scaleY: 1,
      skewX: 7.4549,
      skewY: 187.4549,
      x: 141.75,
      y: -4.35
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_4
    this.instance_2 = new lib.arm0012("synched", 0);
    this.instance_2.setTransform(14.8, 81.9, 1, 1, 0, 0, 0, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 20.7,
      regY: 3,
      rotation: 29.9467,
      x: -8,
      y: 81.1
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regX: 20.6,
      scaleX: 0.9991,
      scaleY: 0.9991,
      rotation: 16.5499,
      x: 4.8,
      y: 79.15
    }, 4, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      rotation: 8.2483,
      x: 35.05,
      y: 82.6
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_5
    this.instance_3 = new lib.bicep0012("synched", 0);
    this.instance_3.setTransform(21.05, 7.1, 1, 1, 0, 0, 0, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 38.4,
      regY: 3.9,
      rotation: 29.9467,
      x: 47.6,
      y: 20.5
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9991,
      scaleY: 0.9991,
      rotation: 16.5499,
      x: 43.75,
      y: 9.95
    }, 4, cjs.Ease.get(-1)).to({
      regX: 38.5,
      regY: 3.7,
      scaleX: 1,
      scaleY: 1,
      rotation: -10.2103,
      x: 38.85,
      y: -3.65
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_13
    this.instance_4 = new lib.body00122("synched", 0);
    this.instance_4.setTransform(90.4, 144, 1, 1, 0, 0, 0, 77, 207.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regY: 165.5,
      scaleY: 1.0211,
      rotation: 4.7378,
      x: 90.15,
      y: 132.65
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.5331,
      x: 90.35,
      y: 117.5
    }, 4, cjs.Ease.get(-1)).to({scaleX: 1, scaleY: 1, rotation: 0, x: 90.4, y: 102}, 5, cjs.Ease.get(1)).wait(120));

    // Layer_6
    this.instance_5 = new lib.body001copy("synched", 0);
    this.instance_5.setTransform(90.4, 144, 1, 1, 0, 0, 0, 77, 207.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regY: 207.4,
      scaleX: 1.0671,
      scaleY: 0.9113,
      x: 90.35,
      y: 169.8
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regY: 207.5,
      scaleX: 1.0969,
      scaleY: 0.9507,
      x: 90.4,
      y: 158.35
    }, 4, cjs.Ease.get(-1)).to({scaleX: 1, scaleY: 1, y: 144}, 5, cjs.Ease.get(1)).wait(120));

    // Layer_1
    this.instance_6 = new lib.head0012("synched", 0);
    this.instance_6.setTransform(91.95, -84.75, 1, 1, 0, 0, 0, 42.9, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({startPosition: 18}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      rotation: 4.7379,
      x: 107.35,
      y: -56.05,
      startPosition: 86
    }, 0).wait(8).to({startPosition: 94}, 0).to({_off: true}, 1).wait(2).to({
      _off: false,
      startPosition: 78
    }, 0).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.5331,
      x: 100.5,
      y: -68.8,
      startPosition: 82
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 91.95,
      y: -84.75,
      startPosition: 87
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_8
    this.instance_7 = new lib.leg0012("synched", 0);
    this.instance_7.setTransform(116.65, 286.5, 1, 1, 0, 0, 0, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 15.5,
      regY: -17.9,
      scaleY: 0.9581,
      skewX: 6.9657,
      x: 126,
      y: 261
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({
      _off: false,
      regX: 15.6,
      x: 126.1
    }, 0).to({regX: 15.9, scaleY: 0.979, skewX: 4.8046, x: 121.45, y: 257.75}, 4, cjs.Ease.get(-1)).to({
      regX: 15.8,
      regY: -18,
      scaleY: 1,
      skewX: 0,
      x: 109.25,
      y: 253.7
    }, 5, cjs.Ease.get(1)).wait(120));

    // Layer_10
    this.instance_8 = new lib.leg0012("synched", 0);
    this.instance_8.setTransform(64.15, 286.5, 1, 1, 0, 0, 180, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({startPosition: 0}, 0).to({_off: true}, 1).wait(48).to({
      _off: false,
      regX: 15.8,
      regY: -16.1,
      scaleY: 1.0049,
      skewX: -5.6261,
      x: 57.25,
      y: 255.6
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleY: 1.0044,
      skewX: -4.0264,
      x: 61.05
    }, 4, cjs.Ease.get(-1)).to({scaleY: 1, skewX: 0, x: 71.55}, 5, cjs.Ease.get(1)).wait(120));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-50.4, -151, 255.5, 551.6);


  (lib.char001b = function (mode, startPosition, loop, reversed) {
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

    // Layer_11
    this.instance = new lib.Symbol1("synched", 0);
    this.instance.setTransform(91, 89.65, 0.0873, 1, 0, 0, 0, 116.2, 63.1);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off: false}, 0).to({
      regX: 116,
      scaleX: 1
    }, 14, cjs.Ease.get(1)).wait(91));

    // Layer_1
    this.instance_1 = new lib.head001b("synched", 0);
    this.instance_1.setTransform(91.95, -84.75, 1, 1, 0, 0, 0, 42.9, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({startPosition: 21}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      rotation: 5.4751,
      x: 113.75,
      y: -83.55,
      startPosition: 0
    }, 0).wait(8).to({startPosition: 8}, 0).to({_off: true}, 1).wait(2).to({
      _off: false,
      startPosition: 0
    }, 0).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.8097,
      x: 103.85,
      y: -84.1
    }, 4, cjs.Ease.get(-1)).to({scaleX: 1, scaleY: 1, rotation: 0, x: 91.95, y: -84.75}, 5, cjs.Ease.get(1)).wait(114));

    // Layer_2
    this.instance_2 = new lib.arm001b("synched", 0);
    this.instance_2.setTransform(166.5, 81.9, 1, 1, 0, 0, 180, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      regX: 14.6,
      regY: 8.2,
      skewX: 2.4671,
      skewY: 182.4671,
      x: 204.2,
      y: 82.7
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      skewX: 1.274,
      skewY: 181.274,
      x: 187.05,
      y: 82.45
    }, 4, cjs.Ease.get(-1)).to({
      regX: 14.7,
      regY: 8.1,
      skewX: 0,
      skewY: 180,
      x: 166.5,
      y: 81.9
    }, 5, cjs.Ease.get(1)).wait(4).to({startPosition: 0}, 0).to({
      regY: 8.2,
      skewX: 55.4944,
      skewY: 235.4944,
      x: 190.9,
      y: 73.2
    }, 8, cjs.Ease.get(-1)).wait(102));

    // Layer_3
    this.instance_3 = new lib.bicep001b("synched", 0);
    this.instance_3.setTransform(160.25, 7.1, 1, 1, 0, 0, 180, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      regY: 14.6,
      skewX: -19.7206,
      skewY: 160.2794,
      x: 173,
      y: 14.45
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regY: 14.5,
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: -10.7585,
      skewY: 169.2415,
      x: 167.25,
      y: 11.05
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 180,
      x: 160.25,
      y: 7.1
    }, 5, cjs.Ease.get(1)).wait(4).to({startPosition: 0}, 0).to({
      skewX: -20.9898,
      skewY: 159.0102
    }, 8, cjs.Ease.get(-1)).wait(102));

    // Layer_4
    this.instance_4 = new lib.arm001b("synched", 0);
    this.instance_4.setTransform(14.8, 81.9, 1, 1, 0, 0, 0, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      regX: 14.8,
      rotation: 8.2335,
      x: 6.4,
      y: 70.65
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 4.3109,
      x: 10.25,
      y: 75.75
    }, 4, cjs.Ease.get(-1)).to({
      regX: 14.7,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 14.8,
      y: 81.9
    }, 5, cjs.Ease.get(1)).wait(4).to({startPosition: 0}, 0).to({
      rotation: -53.6963,
      x: 3.45,
      y: 76.8
    }, 8, cjs.Ease.get(-1)).wait(102));

    // Layer_5
    this.instance_5 = new lib.bicep001b("synched", 0);
    this.instance_5.setTransform(21.05, 7.1, 1, 1, 0, 0, 0, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      regX: 20.6,
      rotation: 16.9327,
      x: 34.05,
      y: 0.9
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9995,
      scaleY: 0.9995,
      rotation: 9.0641,
      x: 28.15,
      y: 3.75
    }, 4, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 21.05,
      y: 7.1
    }, 5, cjs.Ease.get(1)).wait(4).to({startPosition: 0}, 0).to({
      rotation: 9.4951,
      x: 21
    }, 8, cjs.Ease.get(-1)).wait(102));

    // Layer_6
    this.instance_6 = new lib.body001b("synched", 0);
    this.instance_6.setTransform(90.4, 144, 1, 1, 0, 0, 0, 77, 207.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      rotation: 5.4751
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regY: 207.4,
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.8097,
      y: 143.9
    }, 4, cjs.Ease.get(-1)).to({regY: 207.5, scaleX: 1, scaleY: 1, rotation: 0, y: 144}, 5, cjs.Ease.get(1)).wait(114));

    // Layer_7
    this.instance_7 = new lib.upleg001b("synched", 0);
    this.instance_7.setTransform(116.05, 169.65, 1, 1, 0, 0, 0, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      rotation: -20.4812,
      y: 155.3
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regX: 22.5,
      scaleX: 0.9994,
      scaleY: 0.9994,
      rotation: -11.0493,
      x: 115.95,
      y: 161.8
    }, 4, cjs.Ease.get(-1)).to({
      regX: 22.6,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 116.05,
      y: 169.65
    }, 5, cjs.Ease.get(1)).wait(114));

    // Layer_8
    this.instance_8 = new lib.leg001b("synched", 0);
    this.instance_8.setTransform(116.65, 286.5, 1, 1, 0, 0, 0, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      rotation: 29.9992,
      x: 159.3,
      y: 262.5
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9991,
      scaleY: 0.9991,
      rotation: 16.2932,
      x: 139.9,
      y: 273.4
    }, 4, cjs.Ease.get(-1)).to({scaleX: 1, scaleY: 1, rotation: 0, x: 116.65, y: 286.5}, 5, cjs.Ease.get(1)).wait(114));

    // Layer_9
    this.instance_9 = new lib.upleg001b("synched", 0);
    this.instance_9.setTransform(64.75, 169.65, 1, 1, 0, 0, 180, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      regY: 10.9,
      skewX: 29.9992,
      skewY: 209.9992,
      x: 70.8,
      y: 159.9
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      regY: 11,
      scaleX: 0.9991,
      scaleY: 0.9991,
      skewX: 16.2932,
      skewY: 196.2932,
      x: 68.05,
      y: 164.4
    }, 4, cjs.Ease.get(-1)).to({
      regY: 10.8,
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 180,
      x: 64.75,
      y: 169.65
    }, 5, cjs.Ease.get(1)).wait(114));

    // Layer_10
    this.instance_10 = new lib.leg001b("synched", 0);
    this.instance_10.setTransform(64.15, 286.5, 1, 1, 0, 0, 180, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({startPosition: 0}, 0).to({_off: true}, 1).wait(45).to({
      _off: false,
      skewX: -22.2453,
      skewY: 157.7547,
      x: 12.4,
      y: 261.75
    }, 0).wait(8).to({startPosition: 0}, 0).to({_off: true}, 1).wait(2).to({_off: false}, 0).to({
      scaleX: 0.9993,
      scaleY: 0.9993,
      skewX: -12.0417,
      skewY: 167.9583,
      x: 35.9,
      y: 273
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 180,
      x: 64.15,
      y: 286.5
    }, 5, cjs.Ease.get(1)).wait(114));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-34.9, -153.6, 253.70000000000002, 554.2);


  (lib.char001 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.head001("synched", 0);
    this.instance.setTransform(113.75, -83.55, 1, 1, 5.4751, 0, 0, 42.9, 48.5);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 42.5,
      regY: 41.3,
      rotation: 5.3085,
      x: 113.4,
      y: -90.8
    }, 0).wait(1).to({rotation: 4.8088, x: 111.5, y: -90.9}, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 3.9758,
      x: 108.3,
      y: -91.1
    }, 0).wait(1).to({
      regX: 42.9,
      regY: 48.5,
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.8097,
      x: 103.85,
      y: -84.1
    }, 0).wait(1).to({
      regX: 42.5,
      regY: 41.3,
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 1.7982,
      x: 99.35,
      y: -91.5
    }, 0).wait(1).to({scaleX: 1, scaleY: 1, rotation: 1.0115, x: 95.95, y: -91.65}, 0).wait(1).to({
      rotation: 0.4496,
      x: 93.5,
      y: -91.75
    }, 0).wait(1).to({rotation: 0.1124, x: 92, y: -91.85}, 0).wait(1).to({
      regX: 42.9,
      regY: 48.5,
      rotation: 0,
      x: 91.95,
      y: -84.75
    }, 0).wait(114));

    // Layer_2
    this.instance_1 = new lib.arm001("synched", 0);
    this.instance_1.setTransform(204.2, 82.7, 1, 1, 0, 2.4671, -177.5329, 14.6, 8.2);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 14.7,
      regY: 56.4,
      skewX: 2.3925,
      skewY: -177.6075,
      x: 201,
      y: 130.85
    }, 0).wait(1).to({skewX: 2.1688, skewY: -177.8312, x: 197.95, y: 130.75}, 0).wait(1).to({
      skewX: 1.796,
      skewY: -178.204,
      x: 192.95,
      y: 130.7
    }, 0).wait(1).to({
      regX: 14.6,
      regY: 8.2,
      skewX: 1.274,
      skewY: -178.726,
      x: 187.05,
      y: 82.45
    }, 0).wait(1).to({
      regX: 14.7,
      regY: 56.4,
      skewX: 0.8153,
      skewY: -179.1847,
      x: 178.85,
      y: 130.4
    }, 0).wait(1).to({skewX: 0.4586, skewY: -179.5414, x: 173.4, y: 130.3}, 0).wait(1).to({
      skewX: 0.2038,
      skewY: -179.7962,
      x: 169.5,
      y: 130.15
    }, 0).wait(1).to({skewX: 0.051, skewY: -179.949, x: 167.15, y: 130.1}, 0).wait(1).to({
      regY: 8.1,
      skewX: 0,
      skewY: -180,
      x: 166.5,
      y: 81.9
    }, 0).wait(114));

    // Layer_3
    this.instance_2 = new lib.bicep001("synched", 0);
    this.instance_2.setTransform(173, 14.45, 1, 1, 0, -19.7206, 160.2794, 20.7, 14.6);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      skewX: -19.1605,
      skewY: 160.8395,
      x: 186.2,
      y: 46.65
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      skewX: -17.4801,
      skewY: 162.5199,
      x: 184.15,
      y: 46.45
    }, 0).wait(1).to({
      scaleX: 0.9997,
      scaleY: 0.9997,
      skewX: -14.6794,
      skewY: 165.3206,
      x: 180.7,
      y: 45.95
    }, 0).wait(1).to({
      regX: 20.7,
      regY: 14.5,
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: -10.7585,
      skewY: 169.2415,
      x: 167.25,
      y: 11.05
    }, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      scaleX: 0.9996,
      scaleY: 0.9996,
      skewX: -6.8855,
      skewY: 173.1145,
      x: 171.1,
      y: 44.3
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      skewX: -3.8731,
      skewY: 176.1269,
      x: 167.35,
      y: 43.5
    }, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: -1.7214,
      skewY: 178.2786,
      x: 164.65,
      y: 42.85
    }, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      skewX: -0.4303,
      skewY: 179.5697,
      x: 163,
      y: 42.5
    }, 0).wait(1).to({regX: 20.7, regY: 14.5, skewX: 0, skewY: 180, x: 160.25, y: 7.1}, 0).wait(114));

    // Layer_4
    this.instance_3 = new lib.arm001("synched", 0);
    this.instance_3.setTransform(6.4, 70.65, 1, 1, 8.2335, 0, 0, 14.8, 8.1);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 14.7,
      regY: 56.4,
      rotation: 7.9883,
      x: -0.15,
      y: 118.8
    }, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 7.2528,
      x: 1.25,
      y: 119.8
    }, 0).wait(1).to({rotation: 6.027, x: 3.45, y: 121.55}, 0).wait(1).to({
      regX: 14.8,
      regY: 8.1,
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 4.3109,
      x: 10.25,
      y: 75.75
    }, 0).wait(1).to({regX: 14.7, regY: 56.4, rotation: 2.759, x: 9.5, y: 126.25}, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 1.5519,
      x: 11.75,
      y: 127.95
    }, 0).wait(1).to({scaleX: 1, scaleY: 1, rotation: 0.6897, x: 13.4, y: 129.25}, 0).wait(1).to({
      rotation: 0.1724,
      x: 14.4,
      y: 130
    }, 0).wait(1).to({regY: 8.1, rotation: 0, x: 14.8, y: 81.9}, 0).wait(114));

    // Layer_5
    this.instance_4 = new lib.bicep001("synched", 0);
    this.instance_4.setTransform(34.05, 0.9, 1, 1, 16.9327, 0, 0, 20.6, 14.5);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      rotation: 16.4409,
      x: 21.7,
      y: 34.3
    }, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 14.9656,
      x: 21.4,
      y: 35.15
    }, 0).wait(1).to({scaleX: 0.9997, scaleY: 0.9997, rotation: 12.5066, x: 21.05, y: 36.45}, 0).wait(1).to({
      regX: 20.6,
      regY: 14.5,
      scaleX: 0.9995,
      scaleY: 0.9995,
      rotation: 9.0641,
      x: 28.15,
      y: 3.75
    }, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      scaleX: 0.9997,
      scaleY: 0.9997,
      rotation: 5.801,
      x: 19.95,
      y: 39.8
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 3.2631,
      x: 19.4,
      y: 40.9
    }, 0).wait(1).to({scaleX: 0.9999, scaleY: 0.9999, rotation: 1.4503, x: 19.15, y: 41.7}, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      rotation: 0.3626,
      x: 18.95,
      y: 42.15
    }, 0).wait(1).to({regX: 20.7, regY: 14.5, rotation: 0, x: 21.05, y: 7.1}, 0).wait(114));

    // Layer_6
    this.instance_5 = new lib.body001("synched", 0);
    this.instance_5.setTransform(90.4, 144, 1, 1, 5.4751, 0, 0, 77, 207.5);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regY: 122,
      rotation: 5.3085,
      x: 98.25,
      y: 58.9
    }, 0).wait(1).to({rotation: 4.8088, x: 97.55, y: 58.8}, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 3.9758,
      x: 96.3,
      y: 58.75
    }, 0).wait(1).to({
      regY: 207.4,
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 2.8097,
      x: 90.4,
      y: 143.9
    }, 0).wait(1).to({
      regY: 122,
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 1.7982,
      x: 93,
      y: 58.65
    }, 0).wait(1).to({scaleX: 1, scaleY: 1, rotation: 1.0115, x: 91.9, y: 58.55}, 0).wait(1).to({
      rotation: 0.4496,
      x: 91.05,
      y: 58.6
    }, 0).wait(1).to({rotation: 0.1124, x: 90.55}, 0).wait(1).to({
      regY: 207.5,
      rotation: 0,
      x: 90.4,
      y: 144
    }, 0).wait(114));

    // Layer_7
    this.instance_6 = new lib.upleg001("synched", 0);
    this.instance_6.setTransform(116.05, 155.3, 1, 1, -20.4812, 0, 0, 22.6, 10.8);
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 24.4,
      regY: 75.4,
      rotation: -19.8917,
      x: 139.7,
      y: 215.8
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: -18.1233,
      x: 137.85,
      y: 217.7
    }, 0).wait(1).to({
      scaleX: 0.9997,
      scaleY: 0.9997,
      rotation: -15.1758,
      x: 134.7,
      y: 220.75
    }, 0).wait(1).to({
      regX: 22.5,
      regY: 10.8,
      scaleX: 0.9994,
      scaleY: 0.9994,
      rotation: -11.0493,
      x: 115.95,
      y: 161.8
    }, 0).wait(1).to({
      regX: 24.4,
      regY: 75.4,
      scaleX: 0.9996,
      scaleY: 0.9996,
      rotation: -7.0716,
      x: 125.8,
      y: 228.45
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: -3.9778,
      x: 122.4,
      y: 231.1
    }, 0).wait(1).to({scaleX: 0.9999, scaleY: 0.9999, rotation: -1.7679, x: 119.9, y: 232.9}, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -0.442,
      x: 118.4,
      y: 233.95
    }, 0).wait(1).to({regX: 22.6, regY: 10.8, rotation: 0, x: 116.05, y: 169.65}, 0).wait(114));

    // Layer_8
    this.instance_7 = new lib.leg001("synched", 0);
    this.instance_7.setTransform(159.3, 262.5, 1, 1, 29.9992, 0, 0, 23.2, 14.8);
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 27,
      regY: 64.4,
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 29.1426,
      x: 137.25,
      y: 308.35
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      rotation: 26.5727,
      x: 135.65,
      y: 311.25
    }, 0).wait(1).to({
      scaleX: 0.9995,
      scaleY: 0.9995,
      rotation: 22.2896,
      x: 133.05,
      y: 315.95
    }, 0).wait(1).to({
      regX: 23.2,
      regY: 14.8,
      scaleX: 0.9991,
      scaleY: 0.9991,
      rotation: 16.2932,
      x: 139.9,
      y: 273.4
    }, 0).wait(1).to({
      regX: 27,
      regY: 64.4,
      scaleX: 0.9994,
      scaleY: 0.9994,
      rotation: 10.4277,
      x: 126.3,
      y: 327.55
    }, 0).wait(1).to({
      scaleX: 0.9997,
      scaleY: 0.9997,
      rotation: 5.8656,
      x: 123.7,
      y: 331.45
    }, 0).wait(1).to({scaleX: 0.9999, scaleY: 0.9999, rotation: 2.6069, x: 121.85, y: 334.05}, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      rotation: 0.6517,
      x: 120.8,
      y: 335.55
    }, 0).wait(1).to({regX: 23.2, regY: 14.8, rotation: 0, x: 116.65, y: 286.5}, 0).wait(114));

    // Layer_9
    this.instance_8 = new lib.upleg001("synched", 0);
    this.instance_8.setTransform(70.8, 159.9, 1, 1, 0, 29.9992, -150.0008, 22.6, 10.9);
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 24.4,
      regY: 75.4,
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: 29.1426,
      skewY: -150.8574,
      x: 37.65,
      y: 215.6
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      skewX: 26.5727,
      skewY: -153.4273,
      x: 39.65,
      y: 217.85
    }, 0).wait(1).to({
      scaleX: 0.9995,
      scaleY: 0.9995,
      skewX: 22.2896,
      skewY: -157.7104,
      x: 43.1,
      y: 221.35
    }, 0).wait(1).to({
      regX: 22.6,
      regY: 11,
      scaleX: 0.9991,
      scaleY: 0.9991,
      skewX: 16.2932,
      skewY: -163.7068,
      x: 68.05,
      y: 164.4
    }, 0).wait(1).to({
      regX: 24.4,
      regY: 75.4,
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: 10.4277,
      skewY: -169.5723,
      x: 53.4,
      y: 229.3
    }, 0).wait(1).to({
      scaleX: 0.9997,
      scaleY: 0.9997,
      skewX: 5.8656,
      skewY: -174.1344,
      x: 57.6,
      y: 231.65
    }, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: 2.6069,
      skewY: -177.3931,
      x: 60.55,
      y: 233.1
    }, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 0.6517,
      skewY: -179.3483,
      x: 62.4,
      y: 233.85
    }, 0).wait(1).to({regX: 22.6, regY: 10.8, skewX: 0, skewY: -180, x: 64.75, y: 169.65}, 0).wait(114));

    // Layer_10
    this.instance_9 = new lib.leg001("synched", 0);
    this.instance_9.setTransform(12.4, 261.75, 1, 1, 0, -22.2453, 157.7547, 23.2, 14.8);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off: false}, 0).wait(11).to({startPosition: 0}, 0).wait(1).to({
      regX: 27,
      regY: 64.4,
      skewX: -21.6075,
      skewY: 158.3925,
      x: 28.55,
      y: 309.9
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      skewX: -19.6944,
      skewY: 160.3056,
      x: 31.35,
      y: 312.5
    }, 0).wait(1).to({
      scaleX: 0.9996,
      scaleY: 0.9996,
      skewX: -16.5058,
      skewY: 163.4942,
      x: 35.95,
      y: 316.65
    }, 0).wait(1).to({
      regX: 23.2,
      regY: 14.8,
      scaleX: 0.9993,
      scaleY: 0.9993,
      skewX: -12.0417,
      skewY: 167.9583,
      x: 35.9,
      y: 273
    }, 0).wait(1).to({
      regX: 27,
      regY: 64.4,
      scaleX: 0.9996,
      scaleY: 0.9996,
      skewX: -7.7067,
      skewY: 172.2933,
      x: 48.9,
      y: 327.45
    }, 0).wait(1).to({
      scaleX: 0.9998,
      scaleY: 0.9998,
      skewX: -4.335,
      skewY: 175.665,
      x: 53.9,
      y: 331.35
    }, 0).wait(1).to({
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: -1.9267,
      skewY: 178.0733,
      x: 57.45,
      y: 333.95
    }, 0).wait(1).to({
      scaleX: 1,
      scaleY: 1,
      skewX: -0.4817,
      skewY: 179.5183,
      x: 59.6,
      y: 335.55
    }, 0).wait(1).to({regX: 23.2, regY: 14.8, skewX: 0, skewY: 180, x: 64.15, y: 286.5}, 0).wait(114));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.5, -147.7, 234.3, 548.3);


// stage content:
  (lib.IndustryCompany7 = function (mode, startPosition, loop, reversed) {
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
    this.shape10.setTransform(639.95, 359.95, 1.2811, 1.8473, 0, -32.689, 147.3118, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape10).wait(6).to({x: 640}, 0).to({
      regY: 359.8,
      scaleY: 0.0511,
      x: 640.05,
      y: 360
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(147).to({alpha: 1}, 0).to({
      regY: 360,
      scaleY: 1.8473,
      x: 640,
      y: 359.95
    }, 17, cjs.Ease.get(1)).wait(3));

    // shape12
    this.shape12 = new lib.shape12();
    this.shape12.name = "shape12";
    this.shape12.setTransform(640, 360, 1.2811, 1.8615, 0, -32.6892, 147.3118, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape12).wait(10).to({
      regY: 358.9,
      scaleY: 0.0307,
      skewX: -32.6941,
      y: 359.95
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(139).to({alpha: 1}, 0).to({
      regY: 360,
      scaleY: 1.8615,
      skewX: -32.6892,
      y: 360
    }, 17, cjs.Ease.get(1)).wait(7));

    // shape13
    this.shape13 = new lib.shape13();
    this.shape13.name = "shape13";
    this.shape13.setTransform(640, 359.95, 1.2811, 1.8378, 0, -32.689, 147.3118, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape13).wait(12).to({
      regY: 358.4,
      scaleY: 0.0508,
      skewX: -32.6877,
      y: 359.85
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(135).to({alpha: 1}, 0).to({
      regY: 360,
      scaleY: 1.8378,
      skewX: -32.689,
      y: 359.95
    }, 17, cjs.Ease.get(1)).wait(9));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = "text1";
    this.text1.setTransform(947.3, 291.95, 1, 1, 0, 0, 0, 313.7, 80);
    this.text1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(72).to({y: 604.45}, 0).to({
      y: 254.45,
      alpha: 1
    }, 10, cjs.Ease.get(1)).to({y: 273.2}, 5, cjs.Ease.get(-1)).to({y: 291.95}, 5, cjs.Ease.get(1)).wait(98));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = "text2";
    this.text2.setTransform(947.3, 416.95, 1, 1, 0, 0, 0, 313.7, 80);
    this.text2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(75).to({y: 729.45}, 0).to({
      y: 379.45,
      alpha: 1
    }, 10, cjs.Ease.get(1)).to({y: 398.2}, 5, cjs.Ease.get(-1)).to({y: 416.95}, 5, cjs.Ease.get(1)).wait(95));

    // char_idn
    this.instance = new lib.char001b("synched", 67);
    this.instance.setTransform(393.25, 1268, 0.982, 0.982, 0, 0, 0, 89.1, 398.8);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off: false}, 0).to({
      y: 634.5,
      startPosition: 78
    }, 9, cjs.Ease.get(1)).to({y: 645.35, startPosition: 82}, 4, cjs.Ease.get(-1)).to({
      y: 658.85,
      startPosition: 87
    }, 5, cjs.Ease.get(1)).to({_off: true}, 136).wait(1));

    // char_idn
    this.instance_1 = new lib.char0012("synched", 67);
    this.instance_1.setTransform(567.55, 1196.5, 0.8907, 0.8907, 0, 0, 0, 89.2, 398.8);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off: false}, 0).to({
      regY: 398.7,
      y: 621.85,
      startPosition: 78
    }, 9, cjs.Ease.get(1)).to({regY: 398.8, y: 631.75, startPosition: 82}, 4, cjs.Ease.get(-1)).to({
      y: 644,
      startPosition: 87
    }, 5, cjs.Ease.get(1)).to({_off: true}, 139).wait(1));

    // char_idn
    this.instance_2 = new lib.char001("synched", 67, false);
    this.instance_2.setTransform(206.7, 1166.75, 0.8556, 0.8556, 0, 0, 0, 89.2, 398.8);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off: false}, 0).to({
      y: 614.25,
      startPosition: 76
    }, 9, cjs.Ease.get(1)).to({y: 623.85, startPosition: 80}, 4, cjs.Ease.get(-1)).to({
      regY: 398.9,
      y: 636,
      startPosition: 85
    }, 5, cjs.Ease.get(1)).to({_off: true}, 142).wait(1));

    // shape1
    this.shape1 = new lib.shape1();
    this.shape1.name = "shape1";
    this.shape1.setTransform(639.9, 688.5, 1, 1, 0, 0, 0, 661.4, 66.2);
    this.shape1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.shape1).wait(19).to({
      y: 788.5,
      alpha: 1
    }, 0).to({y: 688.5}, 16, cjs.Ease.get(1)).wait(155));

    // shape11
    this.shape11 = new lib.shape11();
    this.shape11.name = "shape11";
    this.shape11.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape11).wait(190));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1, 1, 1, 3, true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
    this.shape.setTransform(640, 360);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
    this.shape_1.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(190));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(228, -286.8, 1464, 1653.7);
// library properties:
  lib.properties = {
    id: 'C906F3D7FCB4405FBA2CEE79EB6520B1',
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
    cjs.Stage.call(this, canvas);
  }).prototype = p = new cjs.Stage();

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
  an.compositions['C906F3D7FCB4405FBA2CEE79EB6520B1'] = {
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