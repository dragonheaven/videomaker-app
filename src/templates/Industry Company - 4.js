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
    this.shape.graphics.f("#48536F").s().p("AgMLwQjWgagRirIAAxQQAAi0DcgVQD4gZASDHIABAEIAARlQgTDJjEAAQgUAAgVgCg");
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
    this._text = new cjs.Text("PRODUCTION", "bold 70px 'Lato Black'", "#F4C35A");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 86;
    this._text.lineWidth = 575;
    this._text.parent = this;
    this._text.setTransform(289.25, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 578.5, 110.4), null);


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
    this._text = new cjs.Text("CONTROL OF", "bold 70px 'Lato Black'", "#9294A3");
    this._text.name = "_text";
    this._text.textAlign = "center";
    this._text.lineHeight = 86;
    this._text.lineWidth = 575;
    this._text.parent = this;
    this._text.setTransform(289.25, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 578.5, 110.4), null);


  (lib.Symbol15 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#E8E8E8").s().p("EhtlANgIAA6/MDbLAAAIAAa/g");
    this.shape.setTransform(701.375, 86.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1402.8, 172.8);


  (lib.Symbol13 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#E8E8E8").s().p("EAQwApEImavVQjLA2kNAPIh7N/IiUAAIigt/QjbgNirgpImgPBIh3AAIA60QQhGhLgnhdMAAAg0cQCUlXNBhXIIAAAQNJB0BlE6MAAAA0cQgoBYhDBHIAvUeg");
    this.shape.setTransform(121.775, 262.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 243.6, 525.5);


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
    this.shape.graphics.f("#FAF6F5").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
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
    this.shape.graphics.f("#48536F").s().p("AjeI2IgTtYIgChyQADieDjgDQD+gNADC5IgkO/QjThKjbBKg");
    this.shape.setTransform(24.375, 56.6572);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#48474D").s().p("AkCBgIgBiaQDbhKDUBKQBlAXgPCDg");
    this.shape_1.setTransform(28.022, 119.225);

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
    this.shape.graphics.f("#48536F").s().p("AoFDHIAAjGIH/gJIAvi+IAtC9IGvgJIAADZg");
    this.shape.setTransform(77.05, 224.1125);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#52607D").s().p("AoELXIACAAIAAmfIhqqRQjRkRBUhqQDxieDxg/QBnB4CggIQCxgSBXheQDxA/DxCeQBUBqjRERIhqKRIAAGfIACAAIAABpIABAAIAABdImvAJIgui9IguC/In/AKg");
    this.shape_1.setTransform(77, 129.675);

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
    this.shape.graphics.f("#52607D").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


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

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#9A9EA7").s().p("AXoNwIAAj0IAuAAICGAAIBAAAIAAAsIAACLIAAA9gA7bNeIAAjnIAuAAICGAAIAzAAIAAAtIAAB7IAAA/gAacpPIiGAAIguAAIAAhSIAAiQIAAg+IDsAAIAABIIAAB7IAABdgA4npPIiGAAIguAAIAAkVIDnAAIAAAzIAACQIAABSg");
    this.shape.setTransform(175.575, 87.975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#B2B9C3").s().p("APqLwIAAiLIG4AAIAACLgEgjlALbIAAh7IHoAAIAAB7gAMkI5IAAzLICGAAIAATLgEgmfAIzIAAzFICGAAIAATFgEAkfABGIAAs1ICBAAIAAM1gAuAiVIAApQICGAAIAAJQg");
    this.shape_1.setTransform(250.95, 94.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#B8B9BE").s().p("A6PBIIiGAAI1mAAIAAiPMAvdAAAIAACPgAYKA9IiAAAI09AAIAAh6MAwvAAAIAAB6g");
    this.shape_2.setTransform(342.675, 13.375);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 662.3, 176);


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
    this.shape.graphics.f("#52607D").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
    this.shape.setTransform(14.691, 39.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
    this.shape_1.setTransform(15.9958, 97.875);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.1, -2.7, 29.6, 118.2);


  (lib._12321 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#DEE4F2").s().p("AlRFSQiMiMAAjGQAAjFCMiMQCMiMDFAAQDGAACMCMQCMCMAADFQAADGiMCMQiMCMjGAAQjFAAiMiMgAjfFFQBhBFB+AAQBMAABBgZQiLhmgNimQgigGgYgXQiSBmgICXgABHBHQgJAJgLAHQAdCjCPBMQAdgVAbgaQBzh0AAijIgBgcQh4CCi+gtIgMAOgAlyiFQgXA/AABGQABCYBjBuQA6jACIhKQAAgSAHgQQhehgiZAAIgfABgABMhAQATAVAEAbQCyAjBfiXQgdhRhAhAQhNhNhhgaQAnDQhEBsgAgiheQAQgFASAAQBBhNg5jZIgIAAQiiAAhzB0QgfAegWAiQAVgCAUAAQCXAABoB5g");
    this.shape.setTransform(124.5, 324.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#8B8F9B").s().p("Ag3HAIigt/QB3AGCEgBQBdgBBXgEIh7N/g");
    this.shape_1.setTransform(119.15, 479.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#959CAE").s().p("AQ0KPImZvUQjLA2kOAPQhXAEhdABQiEABh3gGQjbgNirgpImgPBIh2AAIA50QQCPCcESBOQEaBPGjgFQHygDEvh4QC8hKBwh4IAvUdg");
    this.shape_2.setTransform(121.35, 460.025);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#A8B1C2").s().p("AqzcyQkShNiPicQhGhLgnheMAAAg0cMAmDAAAMAAAA0cQgoBYhDBIQhwB3i8BLQkvB4nyACIgxABQmDAAkJhLg");
    this.shape_3.setTransform(121.775, 234.5649);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#949DAE").s().p("AzBDXQCUlWNBhXIIAAAQNJB0BlE5g");
    this.shape_4.setTransform(121.775, 21.45);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 243.6, 525.5);


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

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_6
    this.instance_1 = new lib.body001("synched", 0);
    this.instance_1.setTransform(90.4, 144, 1, 1, 0, 0, 0, 77, 207.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

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
    }, 8, cjs.Ease.get(1)).wait(53).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

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
    }, 8, cjs.Ease.get(1)).wait(53).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_4
    this.instance_4 = new lib.arm001("synched", 0);
    this.instance_4.setTransform(14.8, 81.9, 1, 1, 0, 0, 0, 14.7, 8.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_5
    this.instance_5 = new lib.bicep001("synched", 0);
    this.instance_5.setTransform(21.05, 7.1, 1, 1, 0, 0, 0, 20.7, 14.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_7
    this.instance_6 = new lib.upleg001("synched", 0);
    this.instance_6.setTransform(116.05, 169.65, 1, 1, 0, 0, 0, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_8
    this.instance_7 = new lib.leg001("synched", 0);
    this.instance_7.setTransform(116.65, 286.5, 1, 1, 0, 0, 0, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_9
    this.instance_8 = new lib.upleg001("synched", 0);
    this.instance_8.setTransform(64.75, 169.65, 1, 1, 0, 0, 180, 22.6, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    // Layer_10
    this.instance_9 = new lib.leg001("synched", 0);
    this.instance_9.setTransform(64.15, 286.5, 1, 1, 0, 0, 180, 23.2, 14.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150).to({startPosition: 0}, 0).to({_off: true}, 1).wait(50));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -147.7, 319.6, 548.3);


  (lib.Symbol14 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.char001("synched", 0, false);
    this.instance.setTransform(562.65, 951.3, 0.7622, 0.7622, 0, 0, 0, 89.1, 398.8);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off: false}, 0).to({
      y: 436.8,
      startPosition: 9
    }, 9, cjs.Ease.get(1)).to({y: 461.3, startPosition: 13}, 4, cjs.Ease.get(-1)).to({
      y: 485.8,
      startPosition: 17
    }, 4, cjs.Ease.get(1)).wait(104).to({startPosition: 121}, 0).to({_off: true}, 1).wait(29));

    // Layer_2
    this.instance_1 = new lib._12321("synched", 0);
    this.instance_1.setTransform(460.15, 441.5, 0.2131, 0.2131, 0, 0, 0, 121.8, 525.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off: false}, 0).to({
      scaleX: 1.1683,
      scaleY: 1.1683,
      x: 460.2
    }, 9, cjs.Ease.get(1)).to({scaleX: 1.0962, scaleY: 1.0962, x: 460.15}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      x: 460.2
    }, 4, cjs.Ease.get(1)).wait(121).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_3
    this.instance_2 = new lib._12321("synched", 0);
    this.instance_2.setTransform(786.4, 446.5, 0.1524, 0.1524, 0, 0, 0, 121.8, 530.6);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off: false}, 0).to({
      regY: 530.5,
      scaleX: 1.1574,
      scaleY: 1.1574,
      x: 786.45
    }, 9, cjs.Ease.get(1)).to({scaleX: 1.0899, scaleY: 1.0899, y: 446.45}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1,
      y: 446.5
    }, 4, cjs.Ease.get(1)).wait(117).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_5
    this.instance_3 = new lib.Symbol13("synched", 0);
    this.instance_3.setTransform(41.45, 445.25, 0.1672, 0.1672, 0, 0, 0, 126.8, 529.4);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off: false}, 0).to({
      regY: 529.2,
      scaleX: 1.1346,
      scaleY: 1.1346,
      y: 445.2
    }, 9, cjs.Ease.get(1)).to({scaleX: 1.0769, scaleY: 1.0769}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1
    }, 4, cjs.Ease.get(1)).wait(112).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_6
    this.instance_4 = new lib.Symbol13("synched", 0);
    this.instance_4.setTransform(-276.1, 445.2, 0.1326, 0.1326, 0, 0, 0, 121.8, 529.2);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off: false}, 0).to({
      scaleX: 1.1207,
      scaleY: 1.1207,
      x: -276.05
    }, 9, cjs.Ease.get(1)).to({scaleX: 1.0689, scaleY: 1.0689}, 3, cjs.Ease.get(-1)).to({
      scaleX: 1,
      scaleY: 1
    }, 4, cjs.Ease.get(1)).wait(106).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_4
    this.instance_5 = new lib.asdsa("synched", 0);
    this.instance_5.setTransform(628.75, -283, 1, 1, 0, 0, 0, 331.1, 88);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off: false}, 0).to({y: -62.5}, 10, cjs.Ease.get(1)).wait(118).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    // Layer_7
    this.instance_6 = new lib.Symbol15("synched", 0);
    this.instance_6.setTransform(286.7, 617.95, 1, 1, 0, 0, 0, 701.4, 86.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y: 519.95}, 14, cjs.Ease.get(1)).wait(133).to({startPosition: 0}, 0).to({_off: true}, 1).wait(29));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-414.7, -371, 1402.8, 1323.6);


// stage content:
  (lib.IndustryCompany4 = function (mode, startPosition, loop, reversed) {
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

    this.timeline.addTween(cjs.Tween.get(this.shape10).wait(8).to({x: -658.5}, 15, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(134).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(4));

    // shape9
    this.shape9 = new lib.shape9();
    this.shape9.name = "shape9";
    this.shape9.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape9).wait(12).to({x: -658.5}, 15, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(127).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(7));

    // shape8
    this.shape8 = new lib.shape8();
    this.shape8.name = "shape8";
    this.shape8.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape8).wait(14).to({x: -658.5}, 15, cjs.Ease.get(-1)).wait(1).to({alpha: 0}, 0).wait(122).to({
      x: -651.5,
      alpha: 1
    }, 0).to({x: 640}, 15, cjs.Ease.get(1)).wait(10));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = "text1";
    this.text1.setTransform(299.8, 310.75, 1, 1, 0, 0, 0, 289.2, 55.1);
    this.text1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(75).to({
      x: -288.2,
      alpha: 1
    }, 0).to({x: 348.8}, 10, cjs.Ease.get(1)).to({x: 321.6}, 5, cjs.Ease.get(-1)).to({x: 299.8}, 4, cjs.Ease.get(1)).wait(83));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = "text2";
    this.text2.setTransform(299.8, 376.5, 1, 1, 0, 0, 0, 289.2, 55.1);
    this.text2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(77).to({
      x: -288.2,
      alpha: 1
    }, 0).to({x: 348.8}, 10, cjs.Ease.get(1)).to({x: 321.6}, 5, cjs.Ease.get(-1)).to({x: 299.8}, 4, cjs.Ease.get(1)).wait(81));

    // fx
    this.instance = new lib.Symbol14("synched", 0);
    this.instance.setTransform(682.5, 358.85, 1, 1, 0, 0, 0, 343.2, 157.8);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off: false}, 0).to({_off: true}, 148).wait(1));

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
  p.nominalBounds = new cjs.Rectangle(-658.5, 190.1, 1985.9, 963.6);
// library properties:
  lib.properties = {
    id: '6F1788A2839D42BDBA2032B564A344DD',
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
  an.compositions['6F1788A2839D42BDBA2032B564A344DD'] = {
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