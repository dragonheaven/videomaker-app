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


  (lib.zxcdasdf = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#838B98").s().p("EhniAMSIAA4jMDPFAAAIAAYjg");
    this.shape.setTransform(662.65, 78.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1325.3, 157.2);


  (lib.zasxzas = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#F3C89D").s().p("AhSglIgmAMQAChIA3hQIC3BKQhMD9hhAcQg/gQAijHg");
    this.shape.setTransform(43.05, 151.35);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AnMhxIE2hmIAlgMQgiDIA/AQQBigcBMj+IAZAKIAHgUIC6g9ICZHYIsQEBg");
    this.shape_1.setTransform(46.1, 170.35);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#48546C").s().p("AjcJ3IgUgIICqoJIA3ppQAYjDB4AGQBtAaADCqIg8KFIi4IuIghAKg");
    this.shape_2.setTransform(58.75, 70.4645);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 92.2, 206.9);


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
    this._text = new cjs.Text("DEVELOPMENT", "70px 'Lato'", "#FFFFFF");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 86;
    this._text.lineWidth = 570;
    this._text.parent = this;
    this._text.setTransform(286.8, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 573.7, 112), null);


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
    this._text = new cjs.Text("DESIGN", "bold 90px 'Lato Black'", "#F4C35A");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 110;
    this._text.lineWidth = 570;
    this._text.parent = this;
    this._text.setTransform(286.8, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 573.7, 112), null);


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
    this.shape.graphics.f("#969DAD").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
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


  (lib.qwewq = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#7B848B").s().p("AinCoQhGhGAAhiQAAhhBGhHQA+g+BVgGIAUgBQAbAAAZAFQBCAOAyAyQBGBHAABhQAABihGBGQhGBGhiAAQhhAAhGhGg");
    this.shape.setTransform(197.2, 171.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#A0B1D0").s().p("AiVJmIgFgIQlesBLInSQAlgNAMAlQAcDugfDYIgXgIQhGBGAaBlIAfAKQhUE3jiEfIgFAFQgLAIgKAAQgPAAgQgTgAhSA3QiSAhBNFRIAFAMQASAlAjgdIAHgGQC5jahSiLQgdgegpAAQgOAAgPADgAhLjAQgfAfAAAsQAAAsAfAfQAfAfAsAAQArAAAfgfQAfgfAAgsQAAgsgfgfQgfgfgrAAQgsAAgfAfgAALlYQgcBLBRAoQBBAhA2hFIALj8g");
    this.shape_1.setTransform(43.0218, 63.3066);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#8191A0").s().p("Ag9BZQgIgFgHgIQgfgfgBgtQABgHABgJQAEgiAagaQAggfAsAAQAtAAAgAfQAfAgAAAsQABAZgLAVQgHAQgOAOIgPANQgbAUgjgBQgiABgbgUgAglglQgOANgCARIgBAHQABAXAQAPIAHAHQANAKARgBQASABAOgKIAGgHQAHgGAFgJQAEgLAAgMQABgVgRgQQgPgRgXABQgWgBgPARg");
    this.shape_2.setTransform(126.6, 82.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#7B848B").s().p("ABhKgIAAs1IAbAAIAAM1gAhmk6IgVABIBXlmIBNARIhbFZQgZgFgbAAg");
    this.shape_3.setTransform(207.525, 179.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#98B4C2").s().p("AytQhIAAh7INZAAIDq3CIAAhJIBwAAQAbATAjAAQAjAAAbgTIBzAAIAABJID2XCIHkAAIAaAAIDFAAIAAB7gAkGOmIKVAAIghjTIpRAAgAjVJ+IHPAAImlj2gAFeJvIgljnIl0AAgAhVE5IGBAAIgpj+gAiZEZIFMjxIkkAAgAhigsIExAAIkKjrgADnhwIgdi3IioAAgAgomJIDiAAIgXiTIizAAgAOXmHIhOgSIgugKIALgqIp/jDQAKgVAAgZQAAgtggggQgggggtAAQgtAAgfAgQgZAagFAiIn/icIgfgJQgahnBGhFIAXAHIVIGyIAfhMICoAmIhLEPgAAlqSIgHgGQgQgQAAgWIABgJQACgRANgNQAQgQAWAAQAXAAAQAQQAQAQAAAXQAAAMgFALQgEAIgHAHIgHAGQgOAKgSAAQgRAAgOgKg");
    this.shape_4.setTransform(119.775, 153.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#86838A").s().p("Ag+MvIAAgkIAQAAIAAgdIAdAAIAA4cIAkAAIAAYcIAcAAIAAAdIARAAIAAAkg");
    this.shape_5.setTransform(19.75, 165);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 239.6, 258.8);


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


  (lib.qweerr = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#404952").s().p("AiZg6IGSgNIABgLIACCfInxAGQgeh4B6gVg");
    this.shape.setTransform(28.6049, 380.875);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#46546F").s().p("AkkvRII/gUQAjDXhdBXIgraFIgBALImSANg");
    this.shape_1.setTransform(35.4054, 275.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#F3C89D").s().p("AgXB1QhlATgVAQIABifQgHhNCAgqQC1hugWDdIAKCzQhRhBhYASg");
    this.shape_2.setTransform(39.575, 12.7895);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#545F7D").s().p("AlMg6QAbneDfi/QAUgQBlgTQBYgSBSBBQAKAIALAKQBaBVALDtIACHBIgdKgIo/AUIgyABg");
    this.shape_3.setTransform(33.3, 100.7883);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -3.6, 66.6, 392.8);


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
    this.shape.graphics.f("#5C5F66").s().p("AoELXIACAAIAAmfIhqqRQjRkRBUhqQDxieDxg/QBnB4CggIQCxgSBXheQDxA/DxCeQBUBqjRERIhqKRIAAGfIACAAIAABpIABAAIAABdImvAJIgui9IguC/In/AKg");
    this.shape.setTransform(77, 129.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#50535A").s().p("AoFDHIAAjGIH/gJIAvi+IAtC9IGvgJIAADZg");
    this.shape_1.setTransform(77.05, 224.1125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AkHgSIApg+QALgPALAFIAEAGQAiByCbgNQCYgRA0hUIAEgGQALgFALAPIApA+QhXBcixASIgUABQiTAAhghvg");
    this.shape_2.setTransform(77, 37.0485);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#EEC7A6").s().p("AjEBbIACiMQgDiRC6ABIALAAIAMAAQC6gCgDCSIACCMQg0BWiYAQIgfABQh/AAgfhng");
    this.shape_3.setTransform(77, 19.4291);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154, 244.1);


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
    this.shape.graphics.f("#5C5F66").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


  (lib.asdsasda = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#585A57").s().p("ADDC1QhLgjgciHQALh7hVgPQhYAFABCKIhfgFQgfiKhng/QErAeEkgNQAbE2hiA2QgOgDgNgHg");
    this.shape.setTransform(43.9666, 58.425);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#F3C89D").s().p("Ag2DhQkAAVAtneIAsAEQBoA/AfCLIBeAFQgCiLBagFQBUAPgLB8QAcCGBLAjQhUBWh7AEIgdAAQgzAAgngIg");
    this.shape_1.setTransform(36.2067, 62.2321);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#F4C35A").s().p("Ak9COQgIkNELg0IAGABQBrgRBjAhQC8BsgcDqQhRAFhQAAQjyAAjkgrg");
    this.shape_2.setTransform(42.4624, 18.5219);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E5AE38").s().p("Aj0AXIgsgFIhWgKIgEAAQgOgOARgNIBigRIAAgHQEuA5FJgSQAcAAAEAqIgmACQhZAEhZAAQjNAAjRgVg");
    this.shape_3.setTransform(38.5413, 37.0715);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 77.1, 85.6);


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
    this.shape.graphics.f("#5C5F66").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
    this.shape.setTransform(14.691, 39.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
    this.shape_1.setTransform(15.9958, 97.875);

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
    this.instance.setTransform(91.95, -84.75, 1, 1, 0, 0, 0, 42.9, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_6
    this.instance_1 = new lib.body001("synched", 0);
    this.instance_1.setTransform(90.4, 144, 1, 1, 0, 0, 0, 77, 207.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_2
    this.instance_2 = new lib.arm001("synched", 0);
    this.instance_2.setTransform(166.5, 81.9, 1, 1, 0, 0, 180, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({
      regY: 56.4,
      skewX: 5.0294,
      skewY: 185.0294,
      x: 161.9,
      y: 130
    }, 0).wait(1).to({skewX: 20.1176, skewY: 200.1176, x: 148.6, y: 127.25}, 0).wait(1).to({
      skewX: 45.2645,
      skewY: 225.2645,
      x: 129.35,
      y: 115.9
    }, 0).wait(1).to({skewX: 80.4703, skewY: 260.4703, x: 113.85, y: 89.95}, 0).wait(1).to({
      regY: 8.2,
      skewX: 125.7348,
      skewY: 305.7348,
      x: 158.65,
      y: 81.95
    }, 0).wait(1).to({
      regY: 8.1,
      rotation: 178.7549,
      skewX: 0,
      skewY: 360,
      x: 165.7,
      y: 76.85
    }, 0).wait(1).to({regY: 56.4, rotation: 195.0479, x: 187.8, y: 26.65}, 0).wait(1).to({
      rotation: 206.6857,
      x: 203.8,
      y: 27.5
    }, 0).wait(1).to({rotation: 213.6684, x: 212.95, y: 28.95}, 0).wait(1).to({
      regY: 8.1,
      rotation: 215.9959,
      x: 187.6,
      y: 68.65
    }, 0).wait(1).to({
      regY: 56.4,
      scaleX: 0.9999,
      scaleY: 0.9999,
      rotation: 214.8367,
      x: 214.7,
      y: 29.3
    }, 0).wait(1).to({
      scaleX: 0.9994,
      scaleY: 0.9994,
      rotation: 211.3588,
      x: 210.75,
      y: 28.75
    }, 0).wait(1).to({
      regY: 8.1,
      scaleX: 0.9987,
      scaleY: 0.9987,
      rotation: 205.5624,
      x: 183.15,
      y: 71.65
    }, 0).wait(13).to({startPosition: 0}, 0).to({
      scaleX: 0.9972,
      scaleY: 0.9972,
      rotation: 211.3103,
      x: 225.45,
      y: 30.65
    }, 8, cjs.Ease.get(-1)).to({
      scaleX: 0.9987,
      scaleY: 0.9987,
      rotation: 216.2923,
      x: 222.8,
      y: -33.65
    }, 7, cjs.Ease.get(1)).wait(16).to({startPosition: 0}, 0).to({
      scaleX: 0.997,
      scaleY: 0.997,
      rotation: 224.6131,
      x: 227.15,
      y: -7.15
    }, 7, cjs.Ease.get(-1)).to({
      regY: 8,
      scaleX: 0.9987,
      scaleY: 0.9987,
      rotation: 234.0513,
      x: 232.3,
      y: 23.2
    }, 8, cjs.Ease.get(1)).wait(74).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_3
    this.instance_3 = new lib.bicep001("synched", 0);
    this.instance_3.setTransform(160.25, 7.1, 1, 1, 0, 0, 180, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      skewX: 0.2294,
      skewY: 180.2294,
      x: 162.25,
      y: 42.35
    }, 0).wait(1).to({skewX: 0.9175, skewY: 180.9175, x: 161.8, y: 42.3}, 0).wait(1).to({
      skewX: 2.0643,
      skewY: 182.0643,
      x: 161.05
    }, 0).wait(1).to({skewX: 3.6699, skewY: 183.6699, x: 160, y: 42.2}, 0).wait(1).to({
      regX: 20.7,
      regY: 14.5,
      skewX: 5.7343,
      skewY: 185.7343,
      x: 159.95,
      y: 6.9
    }, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      skewX: -1.7298,
      skewY: 178.2702,
      x: 162.8,
      y: 41.8
    }, 0).wait(1).to({skewX: -7.5351, skewY: 172.4649, x: 166.05, y: 41.1}, 0).wait(1).to({
      skewX: -11.6818,
      skewY: 168.3182,
      x: 168.35,
      y: 40.4
    }, 0).wait(1).to({skewX: -14.1698, skewY: 165.8302, x: 169.65, y: 39.95}, 0).wait(1).to({
      regX: 20.7,
      regY: 14.5,
      skewX: -14.9992,
      skewY: 165.0008,
      x: 158.9,
      y: 6.2
    }, 0).wait(1).to({
      regX: 18.5,
      regY: 49.7,
      scaleX: 0.9999,
      scaleY: 0.9999,
      skewX: -14.5893,
      skewY: 165.4107,
      x: 169.85,
      y: 39.75
    }, 0).wait(1).to({
      scaleX: 0.9997,
      scaleY: 0.9997,
      skewX: -13.3597,
      skewY: 166.6403,
      x: 169.15,
      y: 39.95
    }, 0).wait(1).to({
      regX: 20.7,
      regY: 14.5,
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: -11.3104,
      skewY: 168.6896,
      x: 158.85,
      y: 6.2
    }, 0).wait(13).to({startPosition: 0}, 0).to({
      scaleX: 0.9982,
      scaleY: 0.9982,
      skewX: -67.4252,
      skewY: 112.5748,
      x: 158.8,
      y: 6.25
    }, 8, cjs.Ease.get(-1)).to({
      scaleX: 0.9994,
      scaleY: 0.9994,
      skewX: -116.3092,
      skewY: 63.6908,
      x: 158.9
    }, 7, cjs.Ease.get(1)).wait(16).to({startPosition: 0}, 0).to({
      scaleX: 0.999,
      scaleY: 0.999,
      skewX: -95.2669,
      skewY: 84.7331
    }, 7, cjs.Ease.get(-1)).to({
      scaleX: 0.9993,
      scaleY: 0.9993,
      skewX: -71.31,
      skewY: 108.69
    }, 8, cjs.Ease.get(1)).wait(74).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_4
    this.instance_4 = new lib.arm001("synched", 0);
    this.instance_4.setTransform(14.8, 81.9, 1, 1, 0, 0, 0, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_5
    this.instance_5 = new lib.bicep001("synched", 0);
    this.instance_5.setTransform(21.05, 7.1, 1, 1, 0, 0, 0, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_7
    this.instance_6 = new lib.upleg001("synched", 0);
    this.instance_6.setTransform(116.05, 169.65, 1, 1, 0, 0, 0, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_8
    this.instance_7 = new lib.leg001("synched", 0);
    this.instance_7.setTransform(116.65, 286.5, 1, 1, 0, 0, 0, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_9
    this.instance_8 = new lib.upleg001("synched", 0);
    this.instance_8.setTransform(64.75, 169.65, 1, 1, 0, 0, 180, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_10
    this.instance_9 = new lib.leg001("synched", 0);
    this.instance_9.setTransform(64.15, 286.5, 1, 1, 0, 0, 180, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(171).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -147.7, 319.6, 548.3);


  (lib.asdsaw = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.asdsasda("synched", 0);
    this.instance.setTransform(36.6, 0.35, 1, 1, 0, 0, 0, 45.2, 76.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({startPosition: 0}, 0).to({
      regY: 76.7,
      scaleX: 0.9997,
      scaleY: 0.9997,
      rotation: 5.2905,
      x: 36.65,
      y: 0.4
    }, 6, cjs.Ease.get(-1)).to({
      regY: 76.6,
      scaleX: 1,
      scaleY: 1,
      rotation: 11.7099,
      x: 36.6,
      y: 0.3
    }, 7, cjs.Ease.get(1)).wait(24).to({startPosition: 0}, 0).to({
      regY: 76.7,
      scaleX: 0.9997,
      scaleY: 0.9997,
      rotation: 5.2695,
      y: 0.4
    }, 6, cjs.Ease.get(-1)).to({
      regY: 76.6,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      y: 0.35
    }, 5, cjs.Ease.get(1)).wait(85).to({startPosition: 0}, 0).to({_off: true}, 1).wait(79));

    // Layer_3
    this.instance_1 = new lib.zasxzas("synched", 0);
    this.instance_1.setTransform(39.7, 56, 1, 1, 0, 0, 0, 69.2, 15.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({startPosition: 0}, 0).to({
      regY: 15.2,
      rotation: -7.2425,
      y: 56.1
    }, 13).wait(102).to({startPosition: 0}, 0).to({_off: true}, 1).wait(79));

    // Layer_1
    this.instance_2 = new lib.qweerr("synched", 0);
    this.instance_2.setTransform(33.3, 194.6, 1, 1, 0, 0, 0, 33.3, 194.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({startPosition: 0}, 0).to({_off: true}, 1).wait(79));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-29.5, -76.3, 113, 465.5);


  (lib.asdsasd = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.qwewq("synched", 0);
    this.instance.setTransform(250.6, 150.7, 0.8631, 0.8631, 0, 0, 180, 111.8, 129.4);
    this.instance.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 42.21, 45.99, 56.07, 0)];
    this.instance.cache(-2, -2, 244, 263);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#434959").ss(2, 1, 1).p("AaFp7ID9AAIAAj4Ij9AAgAeClpIj9AAIAAkSAeClpIDkAAIAAEIIgGAAIAADdIjeAAIAAByIj9AAIAAhyIjzAAIAAjdIAAkIIAAkSIDzAAAeCp7IAAESAeCp7IDkAAIAAESAaFB8IAAjdID9AAIAADdgEAhggBhIjeAAIAAkIAaFhhIjzAAAWSlpIDzAAIAAEIA9TnAIAAl6IFLAAIAAC6IAAE7IAADKIFFAAIAAE6IlFAAIlLAAIkSAAIAAk6IESAAIAAlFIFLFFIAAE6IAAK1IlLAAIAAq1IAAk6IFLAAA4IqAIGtAAEghlgB7IESE6Arik7IsmgK");
    this.shape.setTransform(239.925, 111.1);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}, {t: this.instance}]}).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("EgoMAWtMAAAgtZMBQZAAAMAAAAtZg");
    this.shape_1.setTransform(257.275, 145.275);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 514.6, 290.6);


  (lib.asdsa = function (mode, startPosition, loop, reversed) {
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
    var mask_graphics_20 = new cjs.Graphics().p("AEQaDMAAAg0FICQAAMAAAA0Fg");
    var mask_graphics_21 = new cjs.Graphics().p("ADyaDMAAAg0FIC4AAMAAAA0Fg");
    var mask_graphics_22 = new cjs.Graphics().p("ACYaDMAAAg0FIEwAAMAAAA0Fg");
    var mask_graphics_23 = new cjs.Graphics().p("AACaDMAAAg0FIH4AAMAAAA0Fg");
    var mask_graphics_24 = new cjs.Graphics().p("AjPaDMAAAg0FIMPAAMAAAA0Fg");
    var mask_graphics_25 = new cjs.Graphics().p("AndaDMAAAg0FIR3AAMAAAA0Fg");
    var mask_graphics_26 = new cjs.Graphics().p("AsXaDMAAAg0FIYvAAMAAAA0Fg");
    var mask_graphics_27 = new cjs.Graphics().p("AwaaDMAAAg0FMAg1AAAMAAAA0Fg");
    var mask_graphics_28 = new cjs.Graphics().p("A1GaDMAAAg0FMAqNAAAMAAAA0Fg");
    var mask_graphics_29 = new cjs.Graphics().p("A52aDMAAAg0FMAztAAAMAAAA0Fg");
    var mask_graphics_30 = new cjs.Graphics().p("A+GaDMAAAg0FMA8NAAAMAAAA0Fg");
    var mask_graphics_31 = new cjs.Graphics().p("Egh2AaDMAAAg0FMBDtAAAMAAAA0Fg");
    var mask_graphics_32 = new cjs.Graphics().p("EglGAaDMAAAg0FMBKNAAAMAAAA0Fg");
    var mask_graphics_33 = new cjs.Graphics().p("Egn2AaDMAAAg0FMBPtAAAMAAAA0Fg");
    var mask_graphics_34 = new cjs.Graphics().p("EgqGAaDMAAAg0FMBUNAAAMAAAA0Fg");
    var mask_graphics_35 = new cjs.Graphics().p("Egr2AaDMAAAg0FMBXtAAAMAAAA0Fg");
    var mask_graphics_36 = new cjs.Graphics().p("EgtGAaDMAAAg0FMBaNAAAMAAAA0Fg");
    var mask_graphics_37 = new cjs.Graphics().p("Egt2AaDMAAAg0FMBbtAAAMAAAA0Fg");
    var mask_graphics_38 = new cjs.Graphics().p("EguGAaDMAAAg0FMBcNAAAMAAAA0Fg");

    this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0}).wait(20).to({
      graphics: mask_graphics_20,
      x: 41.5989,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_21, x: 42.5982, y: 157.1}).wait(1).to({
      graphics: mask_graphics_22,
      x: 45.5962,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_23, x: 50.5928, y: 157.1}).wait(1).to({
      graphics: mask_graphics_24,
      x: 57.5881,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_25, x: 66.582, y: 157.1}).wait(1).to({
      graphics: mask_graphics_26,
      x: 75.9887,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_27, x: 75.985, y: 157.1}).wait(1).to({
      graphics: mask_graphics_28,
      x: 75.9807,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_29, x: 75.9749, y: 157.1}).wait(1).to({
      graphics: mask_graphics_30,
      x: 75.9697,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_31, x: 75.965, y: 157.1}).wait(1).to({
      graphics: mask_graphics_32,
      x: 75.9611,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_33, x: 75.9577, y: 157.1}).wait(1).to({
      graphics: mask_graphics_34,
      x: 75.9549,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_35, x: 75.9528, y: 157.1}).wait(1).to({
      graphics: mask_graphics_36,
      x: 75.9512,
      y: 157.1
    }).wait(1).to({graphics: mask_graphics_37, x: 75.9503, y: 157.1}).wait(1).to({
      graphics: mask_graphics_38,
      x: 76,
      y: 157.1
    }).wait(87));

    // Layer_2
    this.instance = new lib.asdsasd("synched", 0);
    this.instance.setTransform(73.55, 162.4, 1, 1, 0, 0, 0, 257.2, 145.2);
    this.instance._off = true;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off: false}, 0).wait(18).to({startPosition: 0}, 0).wait(87));

    // Layer_3 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_0 = new cjs.Graphics().p("A7JBJIAAkmMA2TAAAIAAEmg");
    var mask_1_graphics_1 = new cjs.Graphics().p("A7JEjIAApFMA2TAAAIAAJFg");
    var mask_1_graphics_2 = new cjs.Graphics().p("A7JGxIAAthMA2TAAAIAANhg");
    var mask_1_graphics_3 = new cjs.Graphics().p("A7JJAIAAx/MA2TAAAIAAR/g");
    var mask_1_graphics_4 = new cjs.Graphics().p("A7JLPIAA2dMA2TAAAIAAWdg");
    var mask_1_graphics_5 = new cjs.Graphics().p("A7JNeIAA67MA2TAAAIAAa7g");
    var mask_1_graphics_6 = new cjs.Graphics().p("A7JPtIAA/ZMA2TAAAIAAfZg");
    var mask_1_graphics_7 = new cjs.Graphics().p("A7JR8MAAAgj3MA2TAAAMAAAAj3g");
    var mask_1_graphics_8 = new cjs.Graphics().p("A7JUKMAAAgoTMA2TAAAMAAAAoTg");
    var mask_1_graphics_9 = new cjs.Graphics().p("A7JWZMAAAgsxMA2TAAAMAAAAsxg");
    var mask_1_graphics_10 = new cjs.Graphics().p("A7JYoMAAAgxPMA2TAAAMAAAAxPg");
    var mask_1_graphics_11 = new cjs.Graphics().p("A7Ja3MAAAg1tMA2TAAAMAAAA1tg");
    var mask_1_graphics_12 = new cjs.Graphics().p("A7JdGMAAAg6LMA2TAAAMAAAA6Lg");
    var mask_1_graphics_13 = new cjs.Graphics().p("A7JfVMAAAg+pMA2TAAAMAAAA+pg");
    var mask_1_graphics_14 = new cjs.Graphics().p("EgbJAhjMAAAhDFMA2TAAAMAAABDFg");
    var mask_1_graphics_15 = new cjs.Graphics().p("EgbJAjyMAAAhHjMA2TAAAMAAABHjg");
    var mask_1_graphics_16 = new cjs.Graphics().p("EgbJAmBMAAAhMBMA2TAAAMAAABMBg");
    var mask_1_graphics_17 = new cjs.Graphics().p("EgbJAoQMAAAhQfMA2TAAAMAAABQfg");
    var mask_1_graphics_18 = new cjs.Graphics().p("EgbJAqfMAAAhU9MA2TAAAMAAABU9g");
    var mask_1_graphics_19 = new cjs.Graphics().p("EgbJAstMAAAhZZMA2TAAAMAAABZZg");

    this.timeline.addTween(cjs.Tween.get(mask_1).to({
      graphics: mask_1_graphics_0,
      x: 51.075,
      y: -22.225
    }).wait(1).to({graphics: mask_1_graphics_1, x: 51.075, y: -14.6126}).wait(1).to({
      graphics: mask_1_graphics_2,
      x: 51.075,
      y: 0.4492
    }).wait(1).to({graphics: mask_1_graphics_3, x: 51.075, y: 15.511}).wait(1).to({
      graphics: mask_1_graphics_4,
      x: 51.075,
      y: 30.5728
    }).wait(1).to({graphics: mask_1_graphics_5, x: 51.075, y: 45.6346}).wait(1).to({
      graphics: mask_1_graphics_6,
      x: 51.075,
      y: 60.6964
    }).wait(1).to({graphics: mask_1_graphics_7, x: 51.075, y: 75.7583}).wait(1).to({
      graphics: mask_1_graphics_8,
      x: 51.075,
      y: 90.8201
    }).wait(1).to({graphics: mask_1_graphics_9, x: 51.075, y: 105.8819}).wait(1).to({
      graphics: mask_1_graphics_10,
      x: 51.075,
      y: 120.9437
    }).wait(1).to({graphics: mask_1_graphics_11, x: 51.075, y: 136.0055}).wait(1).to({
      graphics: mask_1_graphics_12,
      x: 51.075,
      y: 151.0673
    }).wait(1).to({graphics: mask_1_graphics_13, x: 51.075, y: 166.1291}).wait(1).to({
      graphics: mask_1_graphics_14,
      x: 51.075,
      y: 181.1909
    }).wait(1).to({graphics: mask_1_graphics_15, x: 51.075, y: 196.2528}).wait(1).to({
      graphics: mask_1_graphics_16,
      x: 51.075,
      y: 211.3146
    }).wait(1).to({graphics: mask_1_graphics_17, x: 51.075, y: 226.3764}).wait(1).to({
      graphics: mask_1_graphics_18,
      x: 51.075,
      y: 241.4382
    }).wait(1).to({graphics: mask_1_graphics_19, x: 51.075, y: 256.95}).wait(106));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#434959").ss(8, 1, 1).p("EgALgoHIAAF2MALrBKZEgLfAnLMALUhJcMAAABIc");
    this.shape.setTransform(73.625, 256.775);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#434959").ss(8, 1, 1).p("EgALgoHIAAF2MALrBKZEgALgiRMAAABIcEgLfAnLMALUhJc");
    this.shape_1.setTransform(73.625, 256.775);

    var maskedShapeInstanceList = [this.shape, this.shape_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 19).wait(106));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-183.6, -4, 514.5, 521.6);


  (lib.fx1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.asdsaw("synched", 0);
    this.instance.setTransform(157.6, 775.3, 1, 1, 0, 0, 0, 33.3, 194.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off: false}, 0).to({
      y: 217.3,
      startPosition: 11
    }, 11, cjs.Ease.get(1)).to({y: 233.3, startPosition: 15}, 4, cjs.Ease.get(-1)).to({
      y: 253.3,
      startPosition: 20
    }, 5, cjs.Ease.get(1)).wait(128).to({startPosition: 148}, 0).to({_off: true}, 1).wait(27));

    // Layer_2
    this.instance_1 = new lib.char001("synched", 0, false);
    this.instance_1.setTransform(-237.55, 964.85, 0.8549, 0.8549, 0, 0, 0, 89.2, 398.8);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off: false}, 0).to({
      y: 406.85,
      startPosition: 11
    }, 11, cjs.Ease.get(1)).to({y: 422.85, startPosition: 15}, 4, cjs.Ease.get(-1)).to({
      y: 442.85,
      startPosition: 20
    }, 5, cjs.Ease.get(1)).wait(124).to({startPosition: 144}, 0).to({_off: true}, 1).wait(27));

    // Layer_3
    this.instance_2 = new lib.asdsa("synched", 0, false);
    this.instance_2.setTransform(-72.35, 157.9, 1, 1, 0, 0, 0, 73.6, 256.8);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off: false}, 0).wait(183).to({startPosition: 124}, 0).to({_off: true}, 1).wait(27));

    // Layer_4
    this.instance_3 = new lib.zxcdasdf("synched", 0);
    this.instance_3.setTransform(199.3, 568.65, 1, 1, 0, 0, 0, 662.6, 78.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y: 467.85}, 14, cjs.Ease.get(1)).wait(180).to({startPosition: 0}, 0).to({_off: true}, 1).wait(27));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-463.3, -102.9, 1325.3, 1072.8);


// stage content:
  (lib.IndustryCompany2 = function (mode, startPosition, loop, reversed) {
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
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(179).to({alpha: 1}, 0).to({
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
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(171).to({alpha: 1}, 0).to({
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
    }, 16, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(167).to({alpha: 1}, 0).to({
      regY: 360,
      scaleY: 1.8378,
      skewX: -32.689,
      y: 359.95
    }, 17, cjs.Ease.get(1)).wait(9));

    // fx
    this.instance = new lib.fx1("synched", 0);
    this.instance.setTransform(651.8, 374.8, 1, 1, 0, 0, 0, 206.6, 134.4);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off: false}, 0).to({_off: true}, 195).wait(1));

    // Layer_11 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("AiFbbIAA3xMBoLAAAIAAXxg");
    var mask_graphics_98 = new cjs.Graphics().p("AiFbbIAA3xMBoLAAAIAAXxg");
    var mask_graphics_109 = new cjs.Graphics().p("AiFbbIAA3xMBoLAAAIAAXxg");
    var mask_graphics_118 = new cjs.Graphics().p("AiFbbIAA3xMBoLAAAIAAXxg");

    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: 653.425,
      y: 175.475
    }).wait(98).to({graphics: mask_graphics_98, x: 653.425, y: 175.475}).wait(11).to({
      graphics: mask_graphics_109,
      x: 653.425,
      y: 175.475
    }).wait(9).to({graphics: mask_graphics_118, x: 653.425, y: 175.475}).wait(104));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = "text1";
    this.text1.setTransform(961.55, 304.55, 1, 1, 0, 0, 0, 286.8, 56);
    this.text1.alpha = 0;

    var maskedShapeInstanceList = [this.text1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(98).to({
      y: 428.75,
      alpha: 1
    }, 0).to({y: 268.55}, 11, cjs.Ease.get(1)).to({y: 286.55}, 5, cjs.Ease.get(-1)).to({y: 304.55}, 4, cjs.Ease.get(1)).wait(104));

    // Layer_23 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_0 = new cjs.Graphics().p("EgCFAn7IAA5BMBoLAAAIAAZBg");
    var mask_1_graphics_98 = new cjs.Graphics().p("EgCFAn7IAA5BMBoLAAAIAAZBg");
    var mask_1_graphics_109 = new cjs.Graphics().p("EgCFAn7IAA5BMBoLAAAIAAZBg");
    var mask_1_graphics_118 = new cjs.Graphics().p("EgCFAn7IAA5BMBoLAAAIAAZBg");

    this.timeline.addTween(cjs.Tween.get(mask_1).to({
      graphics: mask_1_graphics_0,
      x: 653.425,
      y: 255.525
    }).wait(98).to({graphics: mask_1_graphics_98, x: 653.425, y: 255.525}).wait(11).to({
      graphics: mask_1_graphics_109,
      x: 653.425,
      y: 255.525
    }).wait(9).to({graphics: mask_1_graphics_118, x: 653.425, y: 255.525}).wait(104));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = "text2";
    this.text2.setTransform(961.55, 397.25, 1, 1, 0, 0, 0, 286.8, 56);
    this.text2.alpha = 0;

    var maskedShapeInstanceList = [this.text2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(98).to({
      y: 318.05,
      alpha: 1
    }, 0).to({y: 433.25}, 11, cjs.Ease.get(1)).to({y: 413.25}, 5, cjs.Ease.get(-1)).to({y: 397.25}, 4, cjs.Ease.get(1)).wait(104));

    // shape11
    this.shape11 = new lib.shape11();
    this.shape11.name = "shape11";
    this.shape11.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape11).wait(222));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1, 1, 1, 3, true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
    this.shape.setTransform(640, 360);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
    this.shape_1.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(222));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(228, -286.8, 1464, 1653.7);
// library properties:
  lib.properties = {
    id: '441BD5AE041140A19DF6684DB1B9C553',
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
  an.compositions['441BD5AE041140A19DF6684DB1B9C553'] = {
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