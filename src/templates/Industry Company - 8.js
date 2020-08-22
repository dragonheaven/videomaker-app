const stage = {}; const
  exportRoot = {};

const template = (function (cjs, an) {
  let p; // shortcut to reference prototypes
  const lib = {};
  const ss = {};
  const img = {};
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
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    const clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    const prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.upleg001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#495271').s().p('AgMLwQjWgagRirIAAxQQAAi0DcgVQD4gZASDHIABAEIAARlQgTDJjEAAQgUAAgVgCg');
    this.shape.setTransform(24.3749, 75.3934);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 48.8, 150.8);


  (lib.text2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._text = new cjs.Text('WORKFLOWS', "bold 70px 'Lato'", '#F4C35A');
    this._text.name = '_text';
    this._text.textAlign = 'center';
    this._text.lineHeight = 86;
    this._text.lineWidth = 634;
    this._text.parent = this;
    this._text.setTransform(318.95, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0, 0, 638, 107), null);


  (lib.text1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._text = new cjs.Text('MAINTENANCE', "bold 70px 'Lato'", '#828991');
    this._text.name = '_text';
    this._text.textAlign = 'center';
    this._text.lineHeight = 86;
    this._text.lineWidth = 634;
    this._text.parent = this;
    this._text.setTransform(318.95, 2);

    this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0, 0, 638, 107), null);


  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#475556').s().p('AgcAdQgMgMAAgRQAAgEABgFQADgLAIgIQAMgMAQAAQARAAAMAMQAIAIADALIABAJQAAARgMAMQgMAMgRAAQgQAAgMgMg');
    this.shape.setTransform(65.125, 10.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#F6C161').s().p('AjbCjIAAi+IAAg3IB2AAQAHgcAVgWQAfgfAsAAQArAAAfAfQAWAWAHAcIByAAIAAA3IAAC+gAgbhVQgIAIgDALQgBAFAAAFQAAARAMAMQANAMAQAAQAQAAAMgMQAMgMAAgRIgBgKQgCgLgJgIQgMgMgQAAQgQAAgNAMg');
    this.shape_1.setTransform(65, 16.35);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#8DAEBF').s().p('AoyOmQhkgBAAhjIAA6CQAAhlBkABIFLAAIAAC/IG2AAIAAi/IFkAAQBkgBAABlIAAaCQAABjhkABg');
    this.shape_2.setTransform(66.275, 106.9);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 132.6, 200.3);


  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#C5818C').s().p('AgFHSQgUgBgPgPQgPgOAAgVIAAs+QAAgUAPgPQAPgPAUAAIALAAQAUAAAPAPQAPAPAAAUIAAM+QAAAVgPAOQgPAPgUABg');
    this.shape.setTransform(343.6, 617.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#AFAFAF').s().p('AgNDKQgVAAgPgOQgPgPAAgUIAAkxQAAgUAPgPQAPgPAVAAIAcAAQAUAAAPAPQAOAPAAAUIAAExQAAAUgOAPQgPAOgUAAg');
    this.shape_1.setTransform(336.8, 617.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#C5818C').s().p('AgFHRQgVAAgOgPQgPgOAAgVIAAs+QAAgUAPgPQAOgOAVAAIALAAQAVAAAPAOQAOAPAAAUIAAM+QAAAVgOAOQgPAPgVAAg');
    this.shape_2.setTransform(371.9, 341.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#AFAFAF').s().p('AgODLQgUAAgPgPQgPgPAAgVIAAkwQAAgUAPgPQAPgOAUAAIAcAAQAVAAAOAOQAPAPABAUIAAEwQgBAVgPAPQgOAPgVAAg');
    this.shape_3.setTransform(365.1, 341.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#C5818C').s().p('AgFHSQgUgBgQgPQgOgOAAgVIAAs+QAAgUAOgPQAQgPAUAAIALAAQAUAAAPAPQAPAPAAAUIAAM+QAAAVgPAOQgPAPgUABg');
    this.shape_4.setTransform(142.8, 488.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#AFAFAF').s().p('AgNDKQgVAAgOgOQgPgPgBgUIAAkxQABgUAPgPQAOgPAVAAIAcAAQAUAAAPAPQAOAPAAAUIAAExQAAAUgOAPQgPAOgUAAg');
    this.shape_5.setTransform(149.6, 488.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#7D8393').s().p('AggAhIgEgEQgKgMAAgRQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAARgLAMIgDAEQgOAOgTAAQgSAAgOgOg');
    this.shape_6.setTransform(32.075, 457.85);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#BD8785').s().p('ABoCOQAdgkAAgwQAAg2gngmQgngng3AAQg2AAgnAnQgnAmAAA2QAAAwAdAkIhOAAQgSgmAAguQAAhSA7g6QA6g7BSAAQBTAAA7A7QA6A6AABSQAAAugRAmg');
    this.shape_7.setTransform(32.075, 452);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('Ai1C2QhLhMAAhqQAAhqBLhLQBMhLBpAAQBqAABMBLQBLBLAABqQAABqhLBMQhMBLhqAAQhpAAhMhLgABehdQAnAnAAA2QAAAwgdAkIBPAAQARgmAAguQAAhSg6g6Qg7g7hTAAQhSAAg6A7Qg7A6AABSQAAAuASAmIBOAAQgdgkAAgwQAAg2AngnQAngnA2AAQA3AAAnAngAggggQgOAOAAASQAAARAKANIAEADQAOAOASAAQATAAAOgOIADgDQALgNAAgRQAAgSgOgOQgOgOgTAAQgSAAgOAOg');
    this.shape_8.setTransform(32.075, 457.825);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#8F9CAF').s().p('AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAi1i1QhLBMAABpQAABqBLBMQBLBLBqAAQBqAABMhLQBKhMAAhqQAAhphKhMQhMhKhqAAQhqAAhLBKg');
    this.shape_9.setTransform(32.1, 457.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#8F9CAF').s().p('AiYBBQgUAAgPgPQgPgPABgVIAAgcQgBgUAPgPQAPgPAUAAIEwAAQAVAAAPAPQAPAPAAAUIAAAcQAAAVgPAPQgPAPgVAAg');
    this.shape_10.setTransform(397.75, 76.05);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#8F9CAF').s().p('AgNDLQgVAAgOgPQgQgPAAgVIAAkwQAAgUAQgPQAOgOAVAAIAbAAQAVAAAPAOQAOAPABAUIAAEwQgBAVgOAPQgPAPgVAAg');
    this.shape_11.setTransform(310.9, 174.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#8F9CAF').s().p('AgODLQgUAAgPgPQgOgPAAgVIAAkwQAAgUAOgPQAPgOAUAAIAcAAQAVAAAPAOQAPAPAAAUIAAEwQAAAVgPAPQgPAPgVAAg');
    this.shape_12.setTransform(182.5, 174.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#8F9CAF').s().p('AiYBAQgUAAgPgOQgPgPAAgUIAAgcQAAgVAPgOQAPgPAUAAIExAAQAUAAAPAPQAOAOAAAVIAAAcQAAAUgOAPQgPAOgUAAg');
    this.shape_13.setTransform(97.65, 618.35);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#8F9CAF').s().p('AgODKQgUAAgPgOQgPgPABgUIAAkxQgBgUAPgPQAPgPAUAAIAdAAQAUAAAPAPQAOAPAAAUIAAExQAAAUgOAPQgPAOgUAAg');
    this.shape_14.setTransform(67.95, 551.1);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#8F9CAF').s().p('AgODKQgUAAgPgOQgPgPABgUIAAkwQgBgVAPgPQAPgPAUAAIAdAAQAUAAAPAPQAOAPAAAVIAAEwQAAAUgOAPQgPAOgUAAg');
    this.shape_15.setTransform(67.95, 379.55);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#8F9CAF').s().p('AiYBAQgUAAgPgPQgPgOAAgVIAAgcQAAgUAPgPQAPgOAUAAIExAAQAUAAAPAOQAOAPAAAUIAAAcQAAAVgOAOQgPAPgUAAg');
    this.shape_16.setTransform(97.65, 306.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#8F9CAF').s().p('AnvBGQgWAAgQgPQgQgOAAgVIAAgnQAAgVAQgPQAQgOAWAAIPfAAQAWAAAQAOQAQAPAAAVIAAAnQAAAVgQAOQgQAPgWAAg');
    this.shape_17.setTransform(251.825, 526.125);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f('#8F9CAF').s().p('AnvBGQgWAAgQgPQgQgOAAgVIAAgnQAAgVAQgPQAQgOAWAAIPfAAQAWAAAQAOQAQAPAAAVIAAAnQAAAVgQAOQgQAPgWAAg');
    this.shape_18.setTransform(251.825, 451.375);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f('#8F9CAF').s().p('AnMBGQgVAAgPgPQgOgOAAgVIAAgnQAAgVAOgPQAPgOAVAAIOZAAQAVAAAOAOQAPAPAAAVIAAAnQAAAVgPAOQgOAPgVAAg');
    this.shape_19.setTransform(251.825, 243.375);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s('#828A97').ss(20, 1, 1).p('EAdVg3OIAATlQhEGxnUApI+RAAQntAvgnHcIAAYDIAAMjIpLAAAxofMInZAAQkNAUgGjAIAA1CQAijZDTgGIH3AAIRdAAIE3AAAxoQiIAAOqEgRoA3PIAA4D');
    this.shape_20.setTransform(211.175, 353.45);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f('#828A97').s().p('EgHSAkNIAA/uIpWAAIAAkcIJWAAIAAu1IE3AAIk3AAIAA1aIM3AAIAANrILDAAIAAEHIrDAAMAAAAnHIG4AAIAAEIIm4AAIAALYg');
    this.shape_21.setTransform(256.7, 473.625);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    // Layer_2
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f('#B8C1CA').s().p('AjjWZMAAAgsxIHHAAMAAAAsxg');
    this.shape_22.setTransform(251.525, 134.05);

    this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -10, 418, 726.9);


  (lib.shape13content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FEBC5E').s().p('EgACBshUguDgABggjgfyUggigfyAABgs8UAABgs9AgkgfyUAglgfxAuCAAAUAuDAABAgiAfyUAgjAfzgABAs8UgACAs8ggkAfyUggkAfxguAAAAIgCAAg');
    this.shape.setTransform(641.575, 359.325);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape13content, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1388.9), null);


  (lib.shape12content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('EgACBm3UgrpgABge2geJUge1geHAAAgqmUAACgqmAe3geJUAe4geHAroAAAUArpAACAe1AeHUAe2AeJgABAqmUgABAqmge3AeIUge3AeGgrnAABIgCAAg');
    this.shape.setTransform(641.5584, 359.3235, 1.0551, 1.0551);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape12content, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1388.9), null);


  (lib.shape11content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FAF6F5').s().p('Ehj/A4QMAAAhwfMDH/AAAMAAABwfg');
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
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#787F91').s().p('EgACBshUguDAAAggjgfzUggigfzAABgs7UAABgs9AgkgfyUAglgfyAuCAABUAuDAABAgiAfyUAgjAfzgABAs7UgABAs9gglAfxUggjAfyguBAAAIgCAAg');
    this.shape.setTransform(641.575, 359.35);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape10content, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1389), null);


  (lib.shape1content = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E8E8E8').s().p('EhngAKZIAA0xMDPBAAAIAAUxg');
    this.shape.setTransform(662.475, 66.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape1content, new cjs.Rectangle(0, 0, 1325, 133), null);


  (lib.qwertyu = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#F4C35A').s().p('AilHtQjRhNhlgKQHXhHH9BSQheAKhnAnQiZA8iGAAQhiAAhYghgAjzoNQBnDsggItIoOAAQg4AAglAIQAIqaIciHgAKvEMInyAAQgaoLBikOQIZBOgGLPQgtgJg8AFg');
    this.shape.setTransform(87.0789, 63.3506);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#E4AD36').s().p('AtvHAQgKhCBYgUQAlgJA3AAIIPAAQAfothnjsIgLgYQD0imEZCmIgJAYQhjEPAbIKIHxAAQA9gFAsAKQBDANAfAvQAVB2iHAFQh+g2iQAQQn+hTnWBIQiwgQhrBHIgQABQhVAAgKhkg');
    this.shape_1.setTransform(88.1496, 54.8295);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 176.3, 116);


  (lib.leg001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#495271').s().p('AjeI2IgTtYIgChyQADieDjgDQD+gNADC5IgkO/QjThKjbBKg');
    this.shape.setTransform(24.375, 56.6572);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#48474D').s().p('AkCBgIgBiaQDbhKDUBKQBlAXgPCDg');
    this.shape_1.setTransform(28.022, 119.225);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 54, 128.9);


  (lib.body001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#3D455F').s().p('AgEQ5IgCiRIgBhSIgBhkIgChjIgP27IjIjOIAGgCIAAgxQAKgPALAFIAFAGQA6AgBlAMQB/AFBrgxIAEgGQALgFAKAPIAAA+IABAAIjEDDIAGW7IABBjIAABkIAABSIAACRg');
    this.shape.setTransform(76.725, 135.9231);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#495271').s().p('AAjQaIgBiRIHkAAIAACRgAoEQaIAAiRIH7AAIACCRgAoELTIH5AAIABBkIn6ACgAAiLTIHjAAIAAAQIABAAIAABSInkACgAoCDbIhqqSQjRkRBUhpQDJiEDJhCQAmgMBNgWIDJDOIAPW7In2ADgAAbtLIDEjDQBeANA1ATQC8BBC8B8QBUBpjRERIhqKSIAAGSInhADgADRkaIECAAIAAhWIkCAAg');
    this.shape_1.setTransform(77, 139.0375);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAiJ9IgBhSIHkgCIAABUgAoFJ9IAAhRIH7gBIABBSgAAhHHIAAhjIHigDIAAAMIABAAIAABagAoFHHIAAhaIACAAIAAgGIH2gDIABBjgADRomIAAhWIEBAAIAABWg');
    this.shape_2.setTransform(77.05, 165.85);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#EEC7A6').s().p('AglClQhkgNg7ggIACiLQgDiSC6ABIALAAIAMAAQC6gBgDCSIACCLQhiAthzAAIgVAAg');
    this.shape_3.setTransform(77, 16.4925);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154, 244.1);


  (lib.bicep001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#495271').s().p('Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg');
    this.shape.setTransform(18.5078, 49.737);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37, 99.5);


  (lib.arm001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#495271').s().p('AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug');
    this.shape.setTransform(14.691, 39.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#EEC7A6').s().p('AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg');
    this.shape_1.setTransform(15.9958, 97.875);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.1, -2.7, 29.6, 118.2);


  (lib._123 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#475556').s().p('AgcAdQgMgMAAgRQAAgEABgFQADgLAIgIQAMgMAQAAQARAAAMAMQAIAIADALIABAJQAAARgMAMQgMAMgRAAQgQAAgMgMg');
    this.shape.setTransform(65.125, 10.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#F6C161').s().p('AjbCjIAAi+IAAg3IB2AAQAHgcAVgWQAfgfAsAAQArAAAfAfQAWAWAHAcIByAAIAAA3IAAC+gAgbhVQgIAIgDALQgBAFAAAFQAAARAMAMQANAMAQAAQAQAAAMgMQAMgMAAgRIgBgKQgCgLgJgIQgMgMgQAAQgQAAgNAMg');
    this.shape_1.setTransform(65, 16.35);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#8DAEBF').s().p('AoyOmQhkgBAAhjIAA6CQAAhlBkABIFLAAIAAC/IG2AAIAAi/IFkAAQBkgBAABlIAAaCQAABjhkABg');
    this.shape_2.setTransform(66.275, 106.9);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 132.6, 200.3);


  (lib.shape13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape13content();
    this._shape.name = '_shape';
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape13, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1388.9), null);


  (lib.shape12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape12content();
    this._shape.name = '_shape';
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape12, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1388.9), null);


  (lib.shape11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape11content();
    this._shape.name = '_shape';
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
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape10content();
    this._shape.name = '_shape';
    this._shape.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape10, new cjs.Rectangle(-69.8, -335.1, 1422.8, 1389), null);


  (lib.shape1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this._shape = new lib.shape1content();
    this._shape.name = '_shape';
    this._shape.setTransform(662.5, 66.5, 1, 1, 0, 0, 0, 662.5, 66.5);

    this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shape1, new cjs.Rectangle(0, 0, 1325, 133), null);


  (lib.head001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.qwertyu('synched', 0);
    this.instance.setTransform(42.55, 13.65, 0.5216, 0.5216, 0, 0, 0, 88.2, 57.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#606165').s().p('AEwDAQAAhYgTgDQAgAAABgGQAWhTg5g+QgWglhcAfQhcAeBfDMQgTAAhfgjQAeAgAmArQlnhbhQgiIAHCWQgKAUgZgFQgXhWgGAGQgegNgOASQgQiABHiSQBAhwBjgsQBegoBhAFIAFAAIAGAAQBhgFBeAoQBiAsBBBwQBHCSgRCAQgSgZgoATQgHAagGBRIgBAAQglAAgBhcgAhPA3QACgFAEgEQA3g2hThRQAEAyASBeg');
    this.shape.setTransform(42.9, 28.3983);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FDD6AF').s().p('Ag0GCQkRg2g+kgQgxgSAKhoQABgXALgOQAOgRAeANQAGgGAXBWQAZAFAKgUIgHiXQBQAiFnBcQgmgrgeggQBfAjATAAQhfjNBcgeQBcgfAWAlQA5A/gWBTQgBAGggAAQATADAABXQABBeAmgBQAGhRAHgaQAogTASAYQAMAOACAXQAJBogxASQg+EgkRA2QgRACgSAAIgRAAIgTAAQgRAAgRgCgAhlmDQBTBRg3A3QgEAEgCAFQgShfgEgyg');
    this.shape_1.setTransform(42.9, 58.2);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.4, -16.5, 91.9, 113.6);


  (lib.char001 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.head001('synched', 0);
    this.instance.setTransform(113.75, -83.55, 1, 1, 5.4751, 0, 0, 42.9, 48.5);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        scaleX: 0.9998,
        scaleY: 0.9998,
        rotation: 2.8097,
        x: 103.85,
        y: -84.1,
      }, 4, cjs.Ease.get(-1))
      .to({
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 91.95,
        y: -84.75,
      }, 5, cjs.Ease.get(1))
      .wait(60)
      .to({ regY: 86.5, y: -46.75 }, 0)
      .to({
        scaleX: 0.9998,
        scaleY: 0.9998,
        rotation: 2.7738,
        y: -46.7,
      }, 7, cjs.Ease.get(-1))
      .to({
        regX: 43,
        scaleX: 1,
        scaleY: 1,
        rotation: 5.6903,
        x: 92,
        y: -46.8,
      }, 7, cjs.Ease.get(1))
      .wait(38)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_4
    this.instance_1 = new lib.arm001('synched', 0);
    this.instance_1.setTransform(6.4, 70.65, 1, 1, 8.2335, 0, 0, 14.8, 8.1);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        scaleX: 0.9998,
        scaleY: 0.9998,
        rotation: 4.3109,
        x: 10.25,
        y: 75.75,
      }, 4, cjs.Ease.get(-1))
      .to({
        regX: 14.7,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 14.8,
        y: 81.9,
      }, 5, cjs.Ease.get(1))
      .wait(12)
      .to({ startPosition: 0 }, 0)
      .to({
        scaleX: 0.9985,
        scaleY: 0.9985,
        rotation: -33.8642,
        x: 7.65,
        y: 80,
      }, 6, cjs.Ease.get(-1))
      .to({
        regY: 8.2,
        scaleX: 1,
        scaleY: 1,
        rotation: -67.9453,
        x: 0.4,
        y: 78.1,
      }, 6, cjs.Ease.get(1))
      .wait(29)
      .to({ startPosition: 0 }, 0)
      .to({
        regY: 8.1,
        scaleX: 0.9994,
        scaleY: 0.9994,
        rotation: -80.4338,
        x: -5.8,
        y: 76.65,
      }, 7, cjs.Ease.get(-1))
      .to({
        regY: 8.2,
        scaleX: 1,
        scaleY: 1,
        rotation: -92.5608,
        x: -12.1,
        y: 75.25,
      }, 7, cjs.Ease.get(1))
      .wait(45)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_5
    this.instance_2 = new lib.bicep001('synched', 0);
    this.instance_2.setTransform(34.05, 0.9, 1, 1, 16.9327, 0, 0, 20.6, 14.5);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        scaleX: 0.9995,
        scaleY: 0.9995,
        rotation: 9.0641,
        x: 28.15,
        y: 3.75,
      }, 4, cjs.Ease.get(-1))
      .to({
        regX: 20.7,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 21.05,
        y: 7.1,
      }, 5, cjs.Ease.get(1))
      .wait(12)
      .to({ startPosition: 0 }, 0)
      .to({
        scaleX: 0.9997,
        scaleY: 0.9997,
        rotation: 5.0314,
        y: 7.15,
      }, 6, cjs.Ease.get(-1))
      .to({
        regY: 14.6,
        scaleX: 1,
        scaleY: 1,
        rotation: 10.2405,
        x: 21,
      }, 6, cjs.Ease.get(1))
      .wait(29)
      .to({ startPosition: 0 }, 0)
      .to({
        regX: 20.6,
        regY: 14.5,
        scaleX: 0.9992,
        scaleY: 0.9992,
        rotation: 14.5398,
        x: 20.9,
        y: 7,
      }, 7, cjs.Ease.get(-1))
      .to({
        regX: 20.7,
        scaleX: 1,
        scaleY: 1,
        rotation: 18.9857,
        x: 21.05,
        y: 7.1,
      }, 7, cjs.Ease.get(1))
      .wait(45)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_11
    this.instance_3 = new lib._123('synched', 0);
    this.instance_3.setTransform(113.9, 97, 0.1194, 0.1194, 14.997, 0, 0, 66.3, 100.2);
    this.instance_3._off = true;

    this.instance_4 = new lib.Symbol3('synched', 0);
    this.instance_4.setTransform(113.9, 97, 0.4531, 0.4531, 14.9985, 0, 0, 66.2, 100.2);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({ _off: false }, 0).to({
      regX: 66.2,
      scaleX: 0.5254,
      scaleY: 0.5254,
      rotation: 14.9993,
      x: 114,
    }, 7, cjs.Ease.get(1))
      .to({
        scaleX: 0.4531,
        scaleY: 0.4531,
        rotation: 14.9985,
        x: 113.9,
      }, 7, cjs.Ease.get(1))
      .to({ _off: true }, 17)
      .wait(157));
    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140).to({ _off: false }, 0).to({
      regX: 66.1,
      scaleX: 0.453,
      scaleY: 0.453,
      rotation: 4.2929,
      x: 106.7,
      y: 71.3,
    }, 7, cjs.Ease.get(-1))
      .to({
        regY: 100,
        scaleX: 0.4531,
        scaleY: 0.4531,
        rotation: -6.1618,
        x: 99.55,
        y: 45.5,
      }, 7, cjs.Ease.get(1))
      .wait(45)
      .to({ rotation: -6.1618 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_2
    this.instance_5 = new lib.arm001('synched', 0);
    this.instance_5.setTransform(204.2, 82.7, 1, 1, 0, 2.4671, -177.5329, 14.6, 8.2);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        skewX: 1.274,
        skewY: -178.726,
        x: 187.05,
        y: 82.45,
      }, 4, cjs.Ease.get(-1))
      .to({
        regX: 14.7,
        regY: 8.1,
        skewX: 0,
        skewY: -180,
        x: 166.5,
        y: 81.9,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_3
    this.instance_6 = new lib.bicep001('synched', 0);
    this.instance_6.setTransform(173, 14.45, 1, 1, 0, -19.7206, 160.2794, 20.7, 14.6);
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        regY: 14.5,
        scaleX: 0.9994,
        scaleY: 0.9994,
        skewX: -10.7585,
        skewY: 169.2415,
        x: 167.25,
        y: 11.05,
      }, 4, cjs.Ease.get(-1))
      .to({
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: 180,
        x: 160.25,
        y: 7.1,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_6
    this.instance_7 = new lib.body001('synched', 0);
    this.instance_7.setTransform(90.4, 144, 1, 1, 5.4751, 0, 0, 77, 207.5);
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        regY: 207.4,
        scaleX: 0.9998,
        scaleY: 0.9998,
        rotation: 2.8097,
        y: 143.9,
      }, 4, cjs.Ease.get(-1))
      .to({
        regY: 207.5,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        y: 144,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_7
    this.instance_8 = new lib.upleg001('synched', 0);
    this.instance_8.setTransform(116.05, 155.3, 1, 1, -20.4812, 0, 0, 22.6, 10.8);
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        regX: 22.5,
        scaleX: 0.9994,
        scaleY: 0.9994,
        rotation: -11.0493,
        x: 115.95,
        y: 161.8,
      }, 4, cjs.Ease.get(-1))
      .to({
        regX: 22.6,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 116.05,
        y: 169.65,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_8
    this.instance_9 = new lib.leg001('synched', 0);
    this.instance_9.setTransform(159.3, 262.5, 1, 1, 29.9992, 0, 0, 23.2, 14.8);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        scaleX: 0.9991,
        scaleY: 0.9991,
        rotation: 16.2932,
        x: 139.9,
        y: 273.4,
      }, 4, cjs.Ease.get(-1))
      .to({
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 116.65,
        y: 286.5,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_9
    this.instance_10 = new lib.upleg001('synched', 0);
    this.instance_10.setTransform(70.8, 159.9, 1, 1, 0, 29.9992, -150.0008, 22.6, 10.9);
    this.instance_10._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        regY: 11,
        scaleX: 0.9991,
        scaleY: 0.9991,
        skewX: 16.2932,
        skewY: -163.7068,
        x: 68.05,
        y: 164.4,
      }, 4, cjs.Ease.get(-1))
      .to({
        regY: 10.8,
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: -180,
        x: 64.75,
        y: 169.65,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    // Layer_10
    this.instance_11 = new lib.leg001('synched', 0);
    this.instance_11.setTransform(12.4, 261.75, 1, 1, 0, -22.2453, 157.7547, 23.2, 14.8);
    this.instance_11._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67).to({ _off: false }, 0).wait(8)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(2)
      .to({ _off: false }, 0)
      .to({
        scaleX: 0.9993,
        scaleY: 0.9993,
        skewX: -12.0417,
        skewY: 167.9583,
        x: 35.9,
        y: 273,
      }, 4, cjs.Ease.get(-1))
      .to({
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: 180,
        x: 64.15,
        y: 286.5,
      }, 5, cjs.Ease.get(1))
      .wait(112)
      .to({ startPosition: 0 }, 0)
      .to({ _off: true }, 1)
      .wait(97));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-23, -149.8, 241.8, 550.4000000000001);


  // stage content:
  (lib.IndustryCompany8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    const props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // shape10
    this.shape10 = new lib.shape10();
    this.shape10.name = 'shape10';
    this.shape10.setTransform(639.95, 360, 1.0607, 1.0865, -0.0241, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape10).wait(9).to({
      regY: 360.1,
      scaleY: 0.5154,
      rotation: -0.0509,
      x: -756.55,
      y: 359.65,
    }, 16, cjs.Ease.get(-1)).wait(1)
      .to({ alpha: 0 }, 0)
      .wait(141)
      .to({
        regY: 360.2,
        scaleY: 0.3229,
        rotation: 0,
        skewX: -0.0812,
        skewY: -0.0041,
        x: -752.05,
        y: 359.45,
        alpha: 1,
      }, 0)
      .to({
        regY: 360,
        scaleY: 1.0865,
        rotation: -0.0241,
        skewX: 0,
        skewY: 0,
        x: 639.95,
        y: 360,
      }, 16, cjs.Ease.get(1))
      .wait(3));

    // shape12
    this.shape12 = new lib.shape12();
    this.shape12.name = 'shape12';
    this.shape12.setTransform(639.95, 360, 1.0607, 1.0948, -0.0248, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape12).wait(14).to({
      regY: 360.1,
      scaleY: 0.5194,
      rotation: -0.0522,
      x: -756.55,
      y: 359.6,
    }, 16, cjs.Ease.get(-1)).wait(1)
      .to({ alpha: 0 }, 0)
      .wait(132)
      .to({
        regY: 360.2,
        scaleY: 0.3254,
        rotation: 0,
        skewX: -0.0833,
        skewY: -0.0041,
        x: -752.05,
        y: 359.45,
        alpha: 1,
      }, 0)
      .to({
        regY: 360,
        scaleY: 1.0948,
        rotation: -0.0248,
        skewX: 0,
        skewY: 0,
        x: 639.95,
        y: 360,
      }, 16, cjs.Ease.get(1))
      .wait(7));

    // shape13
    this.shape13 = new lib.shape13();
    this.shape13.name = 'shape13';
    this.shape13.setTransform(640, 360.05, 1.0607, 1.0809, -0.0243, 0, 0, 640, 360.1);

    this.timeline.addTween(cjs.Tween.get(this.shape13).wait(16).to({
      scaleY: 0.5128,
      rotation: -0.0512,
      x: -756.5,
      y: 359.65,
    }, 16, cjs.Ease.get(-1)).wait(1)
      .to({ alpha: 0 }, 0)
      .wait(128)
      .to({
        regY: 360.2,
        scaleY: 0.3212,
        rotation: 0,
        skewX: -0.0816,
        skewY: -0.0041,
        x: -752,
        y: 359.45,
        alpha: 1,
      }, 0)
      .to({
        regY: 360.1,
        scaleY: 1.0809,
        rotation: -0.0243,
        skewX: 0,
        skewY: 0,
        x: 640,
        y: 360.05,
      }, 16, cjs.Ease.get(1))
      .wait(9));

    // mask_idn (mask)
    const mask = new cjs.Shape();
    mask._off = true;
    const mask_graphics_0 = new cjs.Graphics().p('Eg3vAa2MAAAgnNMBvfAAAMAAAAnNg');
    const mask_graphics_76 = new cjs.Graphics().p('Eg3vAa2MAAAgnNMBvfAAAMAAAAnNg');
    const mask_graphics_85 = new cjs.Graphics().p('Eg3vAa2MAAAgnNMBvfAAAMAAAAnNg');
    const mask_graphics_95 = new cjs.Graphics().p('Eg3vAa2MAAAgnNMBvfAAAMAAAAnNg');

    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: mask_graphics_0,
      x: 336.575,
      y: 171.775,
    }).wait(76).to({ graphics: mask_graphics_76, x: 336.575, y: 171.775 })
      .wait(9)
      .to({
        graphics: mask_graphics_85,
        x: 336.575,
        y: 171.775,
      })
      .wait(10)
      .to({ graphics: mask_graphics_95, x: 336.575, y: 171.775 })
      .wait(91));

    // text1
    this.text1 = new lib.text1();
    this.text1.name = 'text1';
    this.text1.setTransform(320.5, 314.35, 1, 1, 0, 0, 0, 318.9, 53.5);
    this.text1.alpha = 0;

    var maskedShapeInstanceList = [this.text1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.text1).wait(76).to({
      y: 389.35,
      alpha: 1,
    }, 0).to({ y: 289.35 }, 9, cjs.Ease.get(1))
      .to({ y: 301.85 }, 5, cjs.Ease.get(-1))
      .to({ y: 314.35 }, 5, cjs.Ease.get(1))
      .wait(91));

    // mask_idn (mask)
    const mask_1 = new cjs.Shape();
    mask_1._off = true;
    const mask_1_graphics_0 = new cjs.Graphics().p('Eg3vAzAMAAAgwVMBvfAAAMAAAAwVg');
    const mask_1_graphics_76 = new cjs.Graphics().p('Eg3vAzAMAAAgwVMBvfAAAMAAAAwVg');
    const mask_1_graphics_85 = new cjs.Graphics().p('Eg3vAzAMAAAgwVMBvfAAAMAAAAwVg');
    const mask_1_graphics_95 = new cjs.Graphics().p('Eg3vAzAMAAAgwVMBvfAAAMAAAAwVg');

    this.timeline.addTween(cjs.Tween.get(mask_1).to({
      graphics: mask_1_graphics_0,
      x: 336.575,
      y: 326.425,
    }).wait(76).to({ graphics: mask_1_graphics_76, x: 336.575, y: 326.425 })
      .wait(9)
      .to({
        graphics: mask_1_graphics_85,
        x: 336.575,
        y: 326.425,
      })
      .wait(10)
      .to({ graphics: mask_1_graphics_95, x: 336.575, y: 326.425 })
      .wait(91));

    // text2
    this.text2 = new lib.text2();
    this.text2.name = 'text2';
    this.text2.setTransform(320.5, 387.35, 1, 1, 0, 0, 0, 318.9, 53.5);
    this.text2.alpha = 0;

    var maskedShapeInstanceList = [this.text2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.text2).wait(76).to({
      y: 324.85,
      alpha: 1,
    }, 0).to({ y: 412.35 }, 9, cjs.Ease.get(1))
      .to({ y: 399.85 }, 5, cjs.Ease.get(-1))
      .to({ y: 387.35 }, 5, cjs.Ease.get(1))
      .wait(91));

    // char_idn
    this.instance = new lib.char001('synched', 67);
    this.instance.setTransform(719.15, 1223.15, 0.9431, 0.9431, 0, 0, 0, 89.1, 398.8);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({ _off: false }, 0).to({
      y: 614.75,
      startPosition: 78,
    }, 9, cjs.Ease.get(1))
      .to({ y: 625.15, startPosition: 82 }, 4, cjs.Ease.get(-1))
      .to({
        y: 638.15,
        startPosition: 87,
        loop: false,
      }, 5, cjs.Ease.get(1))
      .to({ _off: true }, 113)
      .wait(1));

    // fx
    this.instance_1 = new lib.Symbol1('synched', 0);
    this.instance_1.setTransform(1059.45, 657.95, 0.1136, 0.1136, 0, 0, 0, 209, 707.1);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({ _off: false }, 0).to({
      regY: 706.9,
      scaleX: 1.1392,
      scaleY: 1.1392,
    }, 10, cjs.Ease.get(1))
      .to({ scaleX: 1.0696, scaleY: 1.0696 }, 5, cjs.Ease.get(-1))
      .to({
        scaleX: 1,
        scaleY: 1,
      }, 5, cjs.Ease.get(1))
      .to({ _off: true }, 126)
      .wait(1));

    // shape1
    this.shape1 = new lib.shape1();
    this.shape1.name = 'shape1';
    this.shape1.setTransform(638.75, 683.85, 1, 1, 0, 0, 0, 662.5, 66.5);
    this.shape1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.shape1).wait(28).to({
      y: 795.85,
      alpha: 1,
    }, 0).to({ y: 683.85 }, 14, cjs.Ease.get(1))
      .wait(144));

    // shape11
    this.shape11 = new lib.shape11();
    this.shape11.name = 'shape11';
    this.shape11.setTransform(640, 360, 1, 1, 0, 0, 0, 640, 360);

    this.timeline.addTween(cjs.Tween.get(this.shape11).wait(186));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('rgba(0,0,0,0)').ss(1, 1, 1, 3, true).p('Ehljg5zMDLHAAAMAAABznMjLHAAAg');
    this.shape.setTransform(640, 360);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#999999').s().p('EhljA50MAAAhznMDLHAAAMAAABzng');
    this.shape_1.setTransform(640, 360);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(186));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-869.7, -41.3, 2266.3, 1245.7);
  // library properties:
  lib.properties = {
    id: '4CEA097BB65F4C65ADE6258A19F4C05B',
    width: 1280,
    height: 720,
    fps: 24,
    color: '#999999',
    opacity: 1.00,
    manifest: [],
    preloads: [],
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
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
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
      for (let i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['4CEA097BB65F4C65ADE6258A19F4C05B'] = {
    getStage() {
      return exportRoot.stage;
    },
    getLibrary() {
      return lib;
    },
    getSpriteSheet() {
      return ss;
    },
    getImages() {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (let j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      const stageChild = stage.getChildAt(0);
      if (!stageChild.paused) {
        stageChild.syncStreamSounds();
      }
    }
  };
});

export default template;
