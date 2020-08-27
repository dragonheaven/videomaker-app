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
      loop = false;
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
    this._text = new cjs.Text("AGREEMENT", "bold 80px 'Lato'", "#FFFFFF");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 98;
    this._text.lineWidth = 718;
    this._text.parent = this;
    this._text.setTransform(360.8, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 721.7, 124), null);


  (lib.text1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this._text = new cjs.Text("BUSINESS", "bold 100px 'Lato'", "#F4C35A");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 122;
    this._text.lineWidth = 718;
    this._text.parent = this;
    this._text.setTransform(360.8, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 721.7, 124), null);


  (lib.shape11content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
      loop = false;
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
      loop = false;
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
      loop = false;
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


  (lib.shape1content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#838B98").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
    this.shape.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape1content, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.qweerr = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#F4C35A").s().p("AhQIwQhVhzgdlMQgdlMgEhjQgEhkA3hNQA4hMBtgRQBsgRBLBMQBMBNgaEFQgaEFhgEvQhGDbg+AAQgZAAgXggg");
    this.shape.setTransform(36.7807, 88.966);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#404952").s().p("AiZg6IGSgNIABgLIACCfInxAGQgeh4B6gVg");
    this.shape_1.setTransform(28.6049, 380.875);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#46546F").s().p("AkkvRII/gUQAjDXhdBXIgraFIgBALImSANg");
    this.shape_2.setTransform(35.4054, 275.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#F3C89D").s().p("AgXB1QhlATgVAQIABifQgHhNCAgqQC1hugWDdIAKCzQhRhBhYASg");
    this.shape_3.setTransform(39.575, 12.7895);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#545F7D").s().p("AlMg6QAbneDfi/QAUgQBlgTQBYgSBSBBQAKAIALAKQBaBVALDtIACHBIgdKgIo/AUIgyABgAAXrCQhsAQg4BNQg3BNAEBjQAEBkAdFMQAdFMBVBzQBUB0BfkvQBgkuAbkGQAZkGhLhMQg9g+hVAAQgSAAgUADg");
    this.shape_4.setTransform(33.3, 100.7883);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -3.6, 66.6, 392.8);


  (lib.l3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#FEBB6C").s().p("AiOEFQhQAAgQg/ICfAAIATgBICMABQBkAAAAhfIAAhUIigAAIhSAAIg4AAIAAg6IA9AAIBNAAICgAAIAAg2QAAhfhkAAIiZAAIinAAQANhIBVAAIEbAAQBUAAANBIQADANAAAPIAAFBQAAAUgEAQQgQBAhQAAg");
    this.shape.setTransform(65.925, 195.075);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#43464D").s().p("ApUDBIpYAAQhkABAAhfIAAjEQAAhfBkgBIJWAAICoAAQBdADAABdIAAA2IhOAAQgEgOgMgLQgUgUgdAAQgcAAgUAUQgVAUAAAdQAAAbAVAVQAUAUAcAAQAdAAAUgUQAGgHAFgHIBTAAIAABUQAABVhRAIIgTABgAJlDAIAAmBIJOAAQBeADAABdIAADEQAABVhRAIgAh4DAQAEgPAAgVIAAlAQAAgPgDgOIIoAAIAAGBg");
    this.shape_1.setTransform(101.7, 195.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FEBB6C").s().p("AiOEFQhQAAgQg/ICfAAIATgBICMABQBkAAAAhfIAAhUIigAAIhSAAIg4AAIAAg6IA9AAIBNAAICgAAIAAg2QAAhfhkAAIiZAAIinAAQANhIBVAAIEbAAQBUAAANBIQADANAAAPIAAFBQAAAUgEAQQgQBAhQAAg");
    this.shape_2.setTransform(65.925, 26.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#43464D").s().p("ApUDBIpYAAQhkAAAAheIAAjFQAAhfBkAAIJWAAICoAAQBdAEAABbIAAA3IhOAAQgEgNgMgMQgUgUgdAAQgcAAgUAUQgVAUAAAdQAAAcAVATQAUAVAcAAQAdAAAUgVQAGgGAFgHIBTAAIAABUQAABVhRAIIgTABgAJlDAIAAmBIJOAAQBeAEAABbIAADFQAABVhRAIgAh4DAQAEgPAAgVIAAlAQAAgQgDgNIIoAAIAAGBg");
    this.shape_3.setTransform(101.7, 26.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    // Layer_2
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#525659").s().p("AzfZpMAAAgzRMAm/AAAMAAAAzRg");
    this.shape_4.setTransform(100.575, 111.175);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AixJGQhkABAAhlIAAgwQARApA6AAIEiAAQBSAAAAhRIAAsSQAAhShSAAIkiAAQg6AAgRAqIAAgyQAAhjBkAAIFjAAQBkAAAABjIAAPEQAABlhkgBg");
    this.shape_5.setTransform(234.2, 113.05);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_5}, {t: this.shape_4}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-28, -52.9, 290, 328.2);


  (lib.bicep001copy = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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


  (lib.bicep001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#F4C35A").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


  (lib.asdsasda = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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


  (lib.arm001copy = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).to({state: []}, 1).wait(2));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5, -2.7, 122.7, 125.4);


  (lib.arm001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#F4C35A").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
    this.shape.setTransform(14.691, 39.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
    this.shape_1.setTransform(15.9958, 97.875);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).to({state: []}, 1).wait(2));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5, -2.7, 122.7, 125.4);


  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.shape.graphics.f("#EEC7A6").s().p("Ag7BmIAAhKQgMAzgcgHQgRgDgBgxIALiLIDfgHQACCMgdBmQghALgfAAQgtAAgogZg");
    this.shape.setTransform(69.156, 290.3949);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_3
    this.instance = new lib.l3("synched", 0);
    this.instance.setTransform(41.35, 364.25, 0.3408, 0.3408, -90, 0, 0, 57.2, 26.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AkUBoQBHijCXhGIARgHQCKgYCKgVIAaAgQASAHAQANQiuAJicAoQitBXheCvQAIglAOgpg");
    this.shape_1.setTransform(43.875, 121.1125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3C3F44").s().p("AkeA/QgahlBcgYIBJAAIGuAGIACAFQAMAogHBKg");
    this.shape_2.setTransform(40.3106, 516.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#51545D").s().p("AD1QUImvgGMgBWggjIIhgDMgAaAgxIgCgFg");
    this.shape_3.setTransform(44.175, 406.875);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#5C5F66").s().p("AltPLIgGqsIAXt1QACgdAGgfQBeivCthXQCcgoCtgKQA6AvARCCQAgH3AJH+IgDLrIiHABIoiADg");
    this.shape_4.setTransform(48.1, 205.1875);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FCCE9D").s().p("AgYDYQhvgRhShSQhmhmgNioQgJhxAvhKIEyC9QgFh4BjgGQAjAAAZAUQBHA6grBfIACADQBCB6BJAUQgQAdgXAZIAADCQiKAWiLAXIgRAIg");
    this.shape_5.setTransform(38.1843, 74);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#4B4D4C").s().p("AB4D4IgCgDQAqhfhHg6QgYgUgkAAQhhAGAFB4Ik0i+QhWiAC1ijQDvijDPBXQBJAoATBJQCWAjgNEmQgPDlh+BPQhIgUhCh7g");
    this.shape_6.setTransform(45.832, 39.0475);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(4.7, 0, 121.6, 523.3);


  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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

    // Layer_3
    this.instance = new lib.asdsasda("synched", 0);
    this.instance.setTransform(64.2, 83.25, 1.1984, 1.1984, 0, 0, 180, 45.2, 76.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_2
    this.instance_1 = new lib.qweerr("synched", 0);
    this.instance_1.setTransform(65.25, 515.2, 1.1344, 1.1344, 0, 0, 180, 33.2, 389.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(26, -8.5, 92.4, 523.7);


  (lib.shape11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
      loop = false;
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
      loop = false;
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
      loop = false;
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


  (lib.shape1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shape1, new cjs.Rectangle(0, 0, 1280, 720), null);


  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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
    this.instance = new lib.arm001("single", 0);
    this.instance.setTransform(-230.3, 198.9, 1, 1, 0, 0, 0, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({
      x: 52.6,
      y: 207.9
    }, 14, cjs.Ease.get(1)).wait(25).to({startPosition: 0}, 0).to({
      regY: 8.2,
      scaleX: 0.9985,
      scaleY: 0.9985,
      rotation: -33.5871,
      x: 66.8,
      y: 203.7
    }, 6, cjs.Ease.get(-1)).to({
      regY: 8.1,
      scaleX: 1,
      scaleY: 1,
      rotation: -67.2331,
      x: 95,
      y: 200.65
    }, 6, cjs.Ease.get(1)).wait(10).to({startPosition: 0}, 0).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -63.4013,
      x: 99.65,
      y: 200.5
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -59.2703,
      x: 104.3,
      y: 200.4
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -62.6934,
      x: 100.3,
      y: 200.5
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -67.2331,
      x: 95,
      y: 200.65
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -63.4013,
      x: 99.65,
      y: 200.5
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -59.2703,
      x: 104.3,
      y: 200.4
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -62.6934,
      x: 100.3,
      y: 200.5
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -67.2331,
      x: 95,
      y: 200.65
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -63.4013,
      x: 99.65,
      y: 200.5
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -59.2703,
      x: 104.3,
      y: 200.4
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      rotation: -62.6934,
      x: 100.3,
      y: 200.5
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -67.2331,
      x: 95,
      y: 200.65
    }, 4, cjs.Ease.get(1)).wait(3).to({startPosition: 0}, 0).to({
      scaleX: 0.9984,
      scaleY: 0.9984,
      rotation: -36.1158,
      x: 75.4,
      y: 204.05
    }, 6, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 52.6,
      y: 207.9
    }, 7, cjs.Ease.get(1)).wait(39).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    // Layer_3
    this.instance_1 = new lib.bicep001("synched", 0);
    this.instance_1.setTransform(-224.05, 124.1, 1, 1, 0, 0, 0, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
      x: 58.85,
      y: 133.1
    }, 14, cjs.Ease.get(1)).wait(25).to({startPosition: 0}, 0).to({
      scaleX: 0.9994,
      scaleY: 0.9994,
      rotation: -11.0363,
      x: 58.5,
      y: 130.4
    }, 6, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -32.9505,
      x: 59.8,
      y: 135.25
    }, 6, cjs.Ease.get(1)).wait(10).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      rotation: -35.0781,
      x: 60.7,
      y: 135.2
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -37.1796,
      x: 61.75
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 20.6,
      scaleX: 0.9984,
      scaleY: 0.9984,
      rotation: -35.3417,
      x: 60.85
    }, 3, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      rotation: -32.9505,
      x: 59.8,
      y: 135.25
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      rotation: -35.0781,
      x: 60.7,
      y: 135.2
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -37.1796,
      x: 61.75
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 20.6,
      scaleX: 0.9984,
      scaleY: 0.9984,
      rotation: -35.3417,
      x: 60.85
    }, 3, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      rotation: -32.9505,
      x: 59.8,
      y: 135.25
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      rotation: -35.0781,
      x: 60.7,
      y: 135.2
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      rotation: -37.1796,
      x: 61.75
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 20.6,
      scaleX: 0.9984,
      scaleY: 0.9984,
      rotation: -35.3417,
      x: 60.85
    }, 3, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      rotation: -32.9505,
      x: 59.8,
      y: 135.25
    }, 4, cjs.Ease.get(1)).wait(3).to({startPosition: 0}, 0).to({
      regY: 14.6,
      scaleX: 0.9991,
      scaleY: 0.9991,
      rotation: -17.5765,
      x: 59.35,
      y: 134.3
    }, 6, cjs.Ease.get(-1)).to({
      regY: 14.5,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      x: 58.85,
      y: 133.1
    }, 7, cjs.Ease.get(1)).wait(39).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    // Layer_1
    this.instance_2 = new lib.Symbol1("synched", 0);
    this.instance_2.setTransform(-227, 261.65, 1, 1, 0, 0, 0, 61, 257.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x: 61}, 14, cjs.Ease.get(1)).wait(98).to({startPosition: 0}, 0).wait(52).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    // Layer_2
    this.instance_3 = new lib.Symbol2("synched", 0);
    this.instance_3.setTransform(292.35, 869.6, 1, 1, 0, 0, 0, 42.9, 261.6);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off: false}, 0).to({y: 261.6}, 14, cjs.Ease.get(1)).wait(92).to({startPosition: 0}, 0).wait(52).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    // Layer_6
    this.instance_4 = new lib.arm001copy("single", 0);
    this.instance_4.setTransform(307.3, 806.9, 1, 1, 0, 0, 180, 14.7, 8.1);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off: false}, 0).to({y: 198.9}, 14, cjs.Ease.get(1)).wait(25).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.3079,
      skewY: 212.3079,
      x: 283.8,
      y: 196.65
    }, 7, cjs.Ease.get(-1)).to({
      regX: 14.6,
      scaleX: 1,
      scaleY: 1,
      skewX: 64.5364,
      skewY: 244.5364,
      x: 260.3,
      y: 194.45
    }, 7, cjs.Ease.get(1)).wait(2).to({startPosition: 0}, 0).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 60.4359,
      skewY: 240.4359,
      x: 255.6,
      y: 196.1
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 56.3141,
      skewY: 236.3141,
      x: 250.85,
      y: 197.6
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 14.7,
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 59.912,
      skewY: 239.912,
      x: 254.9,
      y: 196.15
    }, 3, cjs.Ease.get(-1)).to({
      regX: 14.6,
      scaleX: 1,
      scaleY: 1,
      skewX: 64.5364,
      skewY: 244.5364,
      x: 260.3,
      y: 194.45
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 60.4359,
      skewY: 240.4359,
      x: 255.6,
      y: 196.1
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 56.3141,
      skewY: 236.3141,
      x: 250.85,
      y: 197.6
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 14.7,
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 59.912,
      skewY: 239.912,
      x: 254.9,
      y: 196.15
    }, 3, cjs.Ease.get(-1)).to({
      regX: 14.6,
      scaleX: 1,
      scaleY: 1,
      skewX: 64.5364,
      skewY: 244.5364,
      x: 260.3,
      y: 194.45
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 60.4359,
      skewY: 240.4359,
      x: 255.6,
      y: 196.1
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 56.3141,
      skewY: 236.3141,
      x: 250.85,
      y: 197.6
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      regX: 14.7,
      scaleX: 0.9986,
      scaleY: 0.9986,
      skewX: 59.912,
      skewY: 239.912,
      x: 254.9,
      y: 196.15
    }, 3, cjs.Ease.get(-1)).to({
      regX: 14.6,
      scaleX: 1,
      scaleY: 1,
      skewX: 64.5364,
      skewY: 244.5364,
      x: 260.3,
      y: 194.45
    }, 4, cjs.Ease.get(1)).wait(3).to({startPosition: 0}, 0).wait(5).to({startPosition: 0}, 0).to({
      regX: 14.7,
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 30.0763,
      skewY: 210.0763,
      x: 285.3,
      y: 196.8
    }, 8, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 180,
      x: 307.3,
      y: 198.9
    }, 7, cjs.Ease.get(1)).wait(32).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    // Layer_5
    this.instance_5 = new lib.bicep001copy("synched", 0);
    this.instance_5.setTransform(301.05, 732.1, 1, 1, 0, 0, 180, 20.7, 14.5);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off: false}, 0).to({y: 124.1}, 14, cjs.Ease.get(1)).wait(25).to({startPosition: 0}, 0).to({
      regX: 20.6,
      scaleX: 0.9992,
      scaleY: 0.9992,
      skewX: 15.0717,
      skewY: 195.0717,
      x: 297,
      y: 127
    }, 7, cjs.Ease.get(-1)).to({
      regX: 20.7,
      scaleX: 1,
      scaleY: 1,
      skewX: 30.469,
      skewY: 210.469,
      x: 292.7,
      y: 129.85
    }, 7, cjs.Ease.get(1)).wait(2).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.5761,
      skewY: 212.5761,
      y: 129.8
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 34.7042,
      skewY: 214.7042,
      x: 292.75,
      y: 129.85
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.8403,
      skewY: 212.8403,
      x: 292.7
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 30.469,
      skewY: 210.469
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.5761,
      skewY: 212.5761,
      y: 129.8
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 34.7042,
      skewY: 214.7042,
      x: 292.75,
      y: 129.85
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.8403,
      skewY: 212.8403,
      x: 292.7
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 30.469,
      skewY: 210.469
    }, 4, cjs.Ease.get(1)).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.5761,
      skewY: 212.5761,
      y: 129.8
    }, 4, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 34.7042,
      skewY: 214.7042,
      x: 292.75,
      y: 129.85
    }, 4, cjs.Ease.get(1)).wait(1).to({startPosition: 0}, 0).to({
      scaleX: 0.9985,
      scaleY: 0.9985,
      skewX: 32.8403,
      skewY: 212.8403,
      x: 292.7
    }, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      skewX: 30.469,
      skewY: 210.469
    }, 4, cjs.Ease.get(1)).wait(3).to({startPosition: 0}, 0).wait(5).to({startPosition: 0}, 0).to({
      regY: 14.6,
      scaleX: 0.9992,
      scaleY: 0.9992,
      skewX: 14.0657,
      skewY: 194.0657,
      x: 297.25,
      y: 126.9
    }, 8, cjs.Ease.get(-1)).to({
      regY: 14.5,
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 180,
      x: 301.05,
      y: 124.1
    }, 7, cjs.Ease.get(1)).wait(32).to({startPosition: 0}, 0).to({_off: true}, 1).wait(144));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-262, -4.4, 637.7, 1135.7);


// stage content:
  (lib.IndustryCompany5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
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

    this.timeline.addTween(cjs.Tween.get(this.shape10).wait(9).to({
      regY: 359.9,
      scaleX: 0.1189,
      scaleY: 0.1189
    }, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(147).to({
      scaleX: 0.1402,
      scaleY: 0.1402,
      alpha: 1
    }, 0).to({regY: 360, scaleX: 1, scaleY: 1}, 16, cjs.Ease.get(1)).wait(3));

    // shape9
    this.shape9 = new lib.shape9();
    this.shape9.name = "shape9";
    this.shape9.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape9).wait(12).to({
      regY: 359.9,
      scaleX: 0.1189,
      scaleY: 0.1189
    }, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(140).to({
      scaleX: 0.1402,
      scaleY: 0.1402,
      alpha: 1
    }, 0).to({regY: 360, scaleX: 1, scaleY: 1}, 16, cjs.Ease.get(1)).wait(7));

    // shape8
    this.shape8 = new lib.shape8();
    this.shape8.name = "shape8";
    this.shape8.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape8).wait(14).to({
      regY: 359.9,
      scaleX: 0.1189,
      scaleY: 0.1189
    }, 13, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(136).to({
      scaleX: 0.1402,
      scaleY: 0.1402,
      alpha: 1
    }, 0).to({regY: 360, scaleX: 1, scaleY: 1}, 16, cjs.Ease.get(1)).wait(9));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = "text1";
    this.text1.setTransform(885.45, 291.5, 1, 1, 0, 0, 0, 360.8, 62);
    this.text1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(54).to({
      scaleX: 0.2806,
      scaleY: 0.2806,
      alpha: 1
    }, 0).to({scaleX: 1.1909, scaleY: 1.1909}, 8, cjs.Ease.get(1)).to({
      regX: 360.9,
      scaleX: 1.0301,
      scaleY: 1.0301,
      x: 885.55,
      y: 291.45
    }, 3, cjs.Ease.get(-1)).to({
      regX: 360.8,
      scaleX: 0.8694,
      scaleY: 0.8694,
      x: 885.45,
      y: 291.5
    }, 3, cjs.Ease.get(1)).to({scaleX: 0.9254, scaleY: 0.9254, x: 885.5}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      x: 885.45
    }, 4, cjs.Ease.get(1)).wait(114));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = "text2";
    this.text2.setTransform(885.45, 400.45, 1, 1, 0, 0, 0, 360.8, 62);
    this.text2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(65).to({
      scaleX: 0.3621,
      scaleY: 0.3621,
      alpha: 1
    }, 0).to({scaleX: 1.1855, scaleY: 1.1855}, 8, cjs.Ease.get(1)).to({
      regX: 360.9,
      scaleX: 1.0275,
      scaleY: 1.0275,
      x: 885.5
    }, 3, cjs.Ease.get(-1)).to({
      regX: 360.8,
      scaleX: 0.8693,
      scaleY: 0.8693,
      x: 885.45
    }, 3, cjs.Ease.get(1)).to({scaleX: 0.9253, scaleY: 0.9253}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1
    }, 4, cjs.Ease.get(1)).wait(103));

    // vhasr
    this.instance = new lib.Symbol3("synched", 0);
    this.instance.setTransform(328.95, 372.05, 1, 1, 0, 0, 0, 167.6, 261.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off: false}, 0).to({_off: true}, 165).wait(1));

    // shape1
    this.shape1 = new lib.shape1();
    this.shape1.name = "shape1";
    this.shape1.setTransform(640, 671.55, 1, 0.1347, 0, 0, 0, 640, 360.2);
    this.shape1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.shape1).wait(23).to({
      y: 770.75,
      alpha: 1
    }, 0).to({y: 671.55}, 12, cjs.Ease.get(1)).wait(154));

    // shape11
    this.shape11 = new lib.shape11();
    this.shape11.name = "shape11";
    this.shape11.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape11).wait(189));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1, 1, 1, 3, true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
    this.shape.setTransform(640, 360);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
    this.shape_1.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(189));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(539.3, 360, 775.9000000000001, 881.8);
// library properties:
  lib.properties = {
    id: '2CBA161C92F24CED945969F0CC8C6B81',
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
  an.compositions['2CBA161C92F24CED945969F0CC8C6B81'] = {
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
