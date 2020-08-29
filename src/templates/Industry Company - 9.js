let stage = {}, exportRoot = {};
export default (function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
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


(lib.upleg001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#495271").s().p("AgMLwQjWgagRirIAAxQQAAi0DcgVQD4gZASDHIABAEIAARlQgTDJjEAAQgUAAgVgCg");
	this.shape.setTransform(24.3749,75.3934);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,150.8);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._text = new cjs.Text("DEPOSITS", "bold 80px 'Lato Black'", "#FFFFFF");
	this._text.name = "_text";
	this._text.textAlign = "center";
	this._text.lineHeight = 98;
	this._text.lineWidth = 822;
	this._text.parent = this;
	this._text.setTransform(412.95,2);

	this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,826,100), null);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._text = new cjs.Text("MANAGING OUR", "bold 70px 'Lato'", "#F4C35A");
	this._text.name = "_text";
	this._text.textAlign = "center";
	this._text.lineHeight = 86;
	this._text.lineWidth = 822;
	this._text.parent = this;
	this._text.setTransform(412.95,2);

	this.timeline.addTween(cjs.Tween.get(this._text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,826,88), null);


(lib.Symbol3asdsa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#475556").s().p("AgcAdQgMgMAAgRQAAgEABgFQADgLAIgIQAMgMAQAAQARAAAMAMQAIAIADALIABAJQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape.setTransform(65.125,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C161").s().p("AjbCjIAAi+IAAg3IB2AAQAHgcAVgWQAfgfAsAAQArAAAfAfQAWAWAHAcIByAAIAAA3IAAC+gAgbhVQgIAIgDALQgBAFAAAFQAAARAMAMQANAMAQAAQAQAAAMgMQAMgMAAgRIgBgKQgCgLgJgIQgMgMgQAAQgQAAgNAMg");
	this.shape_1.setTransform(65,16.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DAEBF").s().p("AoyOmQhkgBAAhjIAA6CQAAhlBkABIFLAAIAAC/IG2AAIAAi/IFkAAQBkgBAABlIAAaCQAABjhkABg");
	this.shape_2.setTransform(66.275,106.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.6,200.3);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4BD62").s().p("AGnJZIAAqsImQAAIAAkLIDgAAIFhAAIAAD3IF1AAIAAj3IDFAAIFuAAIAAO3gA3/JZIAAyxIEHAAIEHAAIAAEEIEwAAIAAkEIGJAAICMAAIAAIFIiWAAIm4AAIAAKsg");
	this.shape.setTransform(167.475,133.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8E8E9").s().p("AkwLBIAAidICWAAICCAAIAACdgAJqIRIAAj4IF1AAIAAD4gAveEjIAAkEIEvAAIAAEEgAJqjxIAAi3IDLAAIAAC3gAt6oIIAAi4IDRAAIAAC4g");
	this.shape_1.setTransform(165.65,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EECB71").s().p("ArGPJIAAqtIG4AAIAACdIEXAAIAAidIBCAAIGQAAIAAKtgAQBARIl2AAIlhAAIAArBIFhAAIAAC3IDMAAIAAi3IFvAAIAALBgAqOjoIkvAAIkIAAIAArgIFtAAIAAC4IDRAAIAAi4IGDAAIAALgg");
	this.shape_2.setTransform(162.3,96.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F6972").s().p("A6EDLIAAhjID/AAIAAjKIj0AAIAAhoICAAAIMFAAIShAAIRZAAIB/AAIAABoIlhAAIAADKIFhAAIAABjgADBBoILTAAIAAjKIrTAAgAv7BoIMzAAIAAjKIszAAg");
	this.shape_3.setTransform(166.875,214.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333.8,234.4);


(lib.Symbol1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAmQgBAlAbAbQAbAbAmAAIEJAAQAmAAAagbQAbgbAAglQAAgmgbgaQgagagmAAIkJAAQgmAAgbAagAItgBQgbAaAAAmQAAAlAbAbQAbAbAmAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgaglAAIkJAAQgmAAgbAagAjAgBQgaAagBAmQABAlAaAbQAbAbAlAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgaglAAIkJAAQglAAgbAagAuugBQgbAaABAmQgBAlAbAbQAbAbAmAAIEJAAQAmAAAagbQAbgbAAglQAAgmgbgaQgagagmAAIkJAAQgmAAgbAagA6cgBQgbAaAAAmQAAAlAbAbQAbAbAmAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgaglAAIkJAAQgmAAgbAag");
	this.shape.setTransform(274.5,514.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagagmgBIkJAAQgmABgbAagAItgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQgmABgbAagAjAgBQgaAagBAlQABAmAaAaQAbAbAlAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQglABgbAagAuugBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagagmgBIkJAAQgmABgbAagA6cgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQgmABgbAag");
	this.shape_1.setTransform(274.5,284.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagagmgBIkJAAQgmABgbAagAItgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQgmABgbAagAjAgBQgaAagBAlQABAmAaAaQAbAbAlAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQglABgbAagAuugBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagagmgBIkJAAQgmABgbAagA6cgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgaglgBIkJAAQgmABgbAag");
	this.shape_2.setTransform(274.5,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#797F8F").s().p("EAktAqvMAAAhVdICEAAMAAABVdgEAfPAqvMAAAhVdICEAAMAAABVdgEghSAqvMAAAhVdICEAAMAAABVdgEgmwAqvMAAAhVdICEAAMAAABVdg");
	this.shape_3.setTransform(275.45,309.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,549,583.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4BD62").s().p("Ar0HcIAAu3IDgAAIFhAAIAAD3IF1AAIAAj3IDEAAIFuAAIAAO3g");
	this.shape.setTransform(350.45,442.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EECB71").s().p("AEJFhIl0AAIliAAIAArBIFiAAIAAC3IDKAAIAAi3IFvAAIAALBg");
	this.shape_1.setTransform(343.3,359.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8E8E9").s().p("Ai6HdIAAj3IF1AAIAAD3gAi6kkIAAi4IDLAAIAAC4g");
	this.shape_2.setTransform(351.125,371.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4BD62").s().p("ApaITIAAwmIDpAAIDpAAIAADnIELAAIAAjnIFcAAIB8AAIAAQmg");
	this.shape_3.setTransform(141.95,436.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiIG5IAAjmIELAAIAADmgAgvkWIAAiiIC4AAIAACig");
	this.shape_4.setTransform(141.975,362.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EECB71").s().p("ABNFGIkMAAIjpAAIAAqLIFDAAIAACiIC4AAIAAiiIFVAAIAAKLg");
	this.shape_5.setTransform(147.4,351.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAmQgBAlAbAbQAbAbAmAAIEJAAQAmAAAagbQAbgbAAglQAAgmgbgaQgagbgmAAIkJAAQgmAAgbAbgAItgBQgbAaAAAmQAAAlAbAbQAbAbAmAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgbglAAIkJAAQgmAAgbAbgAjAgBQgaAagBAmQABAlAaAbQAbAbAlAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgbglAAIkJAAQglAAgbAbgAuugBQgbAaABAmQgBAlAbAbQAbAbAmAAIEJAAQAmAAAagbQAbgbAAglQAAgmgbgaQgagbgmAAIkJAAQgmAAgbAbgA6cgBQgbAaAAAmQAAAlAbAbQAbAbAmAAIEJAAQAlAAAbgbQAbgbAAglQAAgmgbgaQgbgbglAAIkJAAQgmAAgbAbg");
	this.shape_6.setTransform(274.5,514.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagbgmABIkJAAQgmgBgbAbgAItgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQgmgBgbAbgAjAgBQgaAagBAlQABAmAaAaQAbAbAlAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQglgBgbAbgAuugBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagbgmABIkJAAQgmgBgbAbgA6cgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQgmgBgbAbg");
	this.shape_7.setTransform(274.5,284.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#797F8F").s().p("Egq4ADyIAAnjMBVxAAAIAAHjgAUbgBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagbgmABIkJAAQgmgBgbAbgAItgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQgmgBgbAbgAjAgBQgaAagBAlQABAmAaAaQAbAbAlAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQglgBgbAbgAuugBQgbAaABAlQgBAmAbAaQAbAbAmAAIEJAAQAmAAAagbQAbgaAAgmQAAglgbgaQgagbgmABIkJAAQgmgBgbAbgA6cgBQgbAaAAAlQAAAmAbAaQAbAbAmAAIEJAAQAlAAAbgbQAbgaAAgmQAAglgbgaQgbgbglABIkJAAQgmgBgbAbg");
	this.shape_8.setTransform(274.5,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#797F8F").s().p("EAktAtLMAAAhaVICEAAMAAABaVgEAfPAtLMAAAhaVICEAAMAAABaVgEghSAtLMAAAhaVICEAAMAAABaVgEgmwAtLMAAAhaVICEAAMAAABaVg");
	this.shape_9.setTransform(275.45,325.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,549,614.6);


(lib.shape13content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBC5E").s().p("EgACBshUguDgABggjgfyUggigfyAABgs8UAABgs9AgkgfyUAglgfxAuCAAAUAuDAABAgiAfyUAgjAfzgABAs8UgACAs8ggkAfyUggkAfxguAAAAIgCAAg");
	this.shape.setTransform(641.575,359.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape13content, new cjs.Rectangle(-69.8,-335.1,1422.8,1388.9), null);


(lib.shape12content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgACBm3UgrpgABge2geJUge1geHAAAgqmUAACgqmAe3geJUAe4geHAroAAAUArpAACAe1AeHUAe2AeJgABAqmUgABAqmge3AeIUge3AeGgrnAABIgCAAg");
	this.shape.setTransform(641.5584,359.3235,1.0551,1.0551);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape12content, new cjs.Rectangle(-69.8,-335.1,1422.8,1388.9), null);


(lib.shape11content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8C1CA").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape11content, new cjs.Rectangle(0,0,1280,720), null);


(lib.shape10content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787F91").s().p("EgACBshUguDAAAggjgfzUggigfzAABgs7UAABgs9AgkgfyUAglgfyAuCAABUAuDAABAgiAfyUAgjAfzgABAs7UgABAs9gglAfxUggjAfyguBAAAIgCAAg");
	this.shape.setTransform(641.575,359.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape10content, new cjs.Rectangle(-69.8,-335.1,1422.8,1389), null);


(lib.shape1content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C95A6").s().p("EhngAKZIAA0xMDPBAAAIAAUxg");
	this.shape.setTransform(662.475,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape1content, new cjs.Rectangle(0,0,1325,133), null);


(lib.qwertyu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C35A").s().p("AilHtQjRhNhlgKQHXhHH9BSQheAKhnAnQiZA8iGAAQhiAAhYghgAjzoNQBnDsggItIoOAAQg4AAglAIQAIqaIciHgAKvEMInyAAQgaoLBikOQIZBOgGLPQgtgJg8AFg");
	this.shape.setTransform(87.0789,63.3506);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4AD36").s().p("AtvHAQgKhCBYgUQAlgJA3AAIIPAAQAfothnjsIgLgYQD0imEZCmIgJAYQhjEPAbIKIHxAAQA9gFAsAKQBDANAfAvQAVB2iHAFQh+g2iQAQQn+hTnWBIQiwgQhrBHIgQABQhVAAgKhkg");
	this.shape_1.setTransform(88.1496,54.8295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,116);


(lib.leg001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#495271").s().p("AjeI2IgTtYIgChyQADieDjgDQD+gNADC5IgkO/QjThKjbBKg");
	this.shape.setTransform(24.375,56.6572);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48474D").s().p("AkCBgIgBiaQDbhKDUBKQBlAXgPCDg");
	this.shape_1.setTransform(28.022,119.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,128.9);


(lib.body001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C35A").s().p("AH7pOQB4A3B3BPQBUBpjRERIhqKSIAACrQhjqlBbqYgAoCJEIhqqSQjRkRBUhpQCAhVCAg5QCVJWiuLVgAjkhJIg4pXIA4gQIAGgCIAAgxQALgPALAFIAEAGQA7AgBkAMQCAAFBqgxIAEgGQALgFALAPIAAA+IAAAAQA8AIArALIhLJJQjggyj/Ayg");
	this.shape.setTransform(77,102.9231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#495271").s().p("AoFQSIAAmhIACAAIAAkOQCvrUiVpWQBIggBJgYIA7gSIA4JWQEAgxDfAxIBLpIQAZAGAUAHQBEAXBFAgQhcKYBkKlIAADzIABAAIAABqIABAAIAAE3g");
	this.shape_1.setTransform(77.05,139.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEC7A6").s().p("AglClQhkgNg7ggIACiLQgDiSC6ABIALAAIAMAAQC6gBgDCSIACCLQhiAthzAAIgVAAg");
	this.shape_2.setTransform(77,16.4925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,244.1);


(lib.bicep001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C35A").s().p("Ag1HxQiLgDAIiKIAtoTQAMheAFhYQAQhGBLg2QA/gjBQAuQBQAtgIB6IhLLAQgXBgiCAAIgJAAg");
	this.shape.setTransform(18.5078,49.737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,99.5);


(lib.arm001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C35A").s().p("AB4GiIjfgGIgMgBIgfqdQgMiaCVgGQCiAHgFCPIgRKug");
	this.shape.setTransform(14.691,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEC7A6").s().p("AhIBlQguiBACiTIDfAHIALCMQgBAwgRADQgcAGgMgxIgFBzQgJBRgzAAQg1gJgOhCg");
	this.shape_1.setTransform(15.9958,97.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-2.7,29.6,118.2);


(lib._123 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#475556").s().p("AgcAdQgMgMAAgRQAAgEABgFQADgLAIgIQAMgMAQAAQARAAAMAMQAIAIADALIABAJQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape.setTransform(65.125,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C161").s().p("AjbCjIAAi+IAAg3IB2AAQAHgcAVgWQAfgfAsAAQArAAAfAfQAWAWAHAcIByAAIAAA3IAAC+gAgbhVQgIAIgDALQgBAFAAAFQAAARAMAMQANAMAQAAQAQAAAMgMQAMgMAAgRIgBgKQgCgLgJgIQgMgMgQAAQgQAAgNAMg");
	this.shape_1.setTransform(65,16.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DAEBF").s().p("AoyOmQhkgBAAhjIAA6CQAAhlBkABIFLAAIAAC/IG2AAIAAi/IFkAAQBkgBAABlIAAaCQAABjhkABg");
	this.shape_2.setTransform(66.275,106.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.6,200.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(301.75,410.15,0.3899,0.3899,0,0,0,166.8,234.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:234.4,scaleX:1.124,scaleY:1.124,x:301.7,y:410.1},12,cjs.Ease.get(1)).to({scaleX:1.062,scaleY:1.062,y:410.15},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:410.1},5,cjs.Ease.get(1)).wait(130).to({startPosition:0},0).to({_off:true},1).wait(24));

	// Layer_2
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(-104.05,399.3,0.34,0.34,0,0,0,274.4,614.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:274.5,scaleX:1.1044,scaleY:1.1044},12,cjs.Ease.get(1)).to({scaleX:1.0522,scaleY:1.0522,x:-104.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-104.05},5,cjs.Ease.get(1)).wait(135).to({startPosition:0},0).to({_off:true},1).wait(24));

	// Layer_3
	this.instance_2 = new lib.Symbol1copy("synched",0);
	this.instance_2.setTransform(535.95,388.2,0.283,0.283,0,0,0,274.5,583.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1363,scaleY:1.1363},12,cjs.Ease.get(1)).to({scaleX:1.0682,scaleY:1.0682,y:388.25},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:388.2},5,cjs.Ease.get(1)).wait(139).to({startPosition:0},0).to({_off:true},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.2,-279.4,1255.1,689.5999999999999);


(lib.shape13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._shape = new lib.shape13content();
	this._shape.name = "_shape";
	this._shape.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape13, new cjs.Rectangle(-69.8,-335.1,1422.8,1388.9), null);


(lib.shape12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._shape = new lib.shape12content();
	this._shape.name = "_shape";
	this._shape.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape12, new cjs.Rectangle(-69.8,-335.1,1422.8,1388.9), null);


(lib.shape11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._shape = new lib.shape11content();
	this._shape.name = "_shape";
	this._shape.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape11, new cjs.Rectangle(0,0,1280,720), null);


(lib.shape10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._shape = new lib.shape10content();
	this._shape.name = "_shape";
	this._shape.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape10, new cjs.Rectangle(-69.8,-335.1,1422.8,1389), null);


(lib.shape1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this._shape = new lib.shape1content();
	this._shape.name = "_shape";
	this._shape.setTransform(662.5,66.5,1,1,0,0,0,662.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this._shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape1, new cjs.Rectangle(0,0,1325,133), null);


(lib.head001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.qwertyu("synched",0);
	this.instance.setTransform(42.55,13.65,0.5216,0.5216,0,0,0,88.2,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606165").s().p("AEwDAQAAhYgTgDQAgAAABgGQAWhTg5g+QgWglhcAfQhcAeBfDMQgTAAhfgjQAeAgAmArQlnhbhQgiIAHCWQgKAUgZgFQgXhWgGAGQgegNgOASQgQiABHiSQBAhwBjgsQBegoBhAFIAFAAIAGAAQBhgFBeAoQBiAsBBBwQBHCSgRCAQgSgZgoATQgHAagGBRIgBAAQglAAgBhcgAhPA3QACgFAEgEQA3g2hThRQAEAyASBeg");
	this.shape.setTransform(42.9,28.3983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD6AF").s().p("Ag0GCQkRg2g+kgQgxgSAKhoQABgXALgOQAOgRAeANQAGgGAXBWQAZAFAKgUIgHiXQBQAiFnBcQgmgrgeggQBfAjATAAQhfjNBcgeQBcgfAWAlQA5A/gWBTQgBAGggAAQATADAABXQABBeAmgBQAGhRAHgaQAogTASAYQAMAOACAXQAJBogxASQg+EgkRA2QgRACgSAAIgRAAIgTAAQgRAAgRgCgAhlmDQBTBRg3A3QgEAEgCAFQgShfgEgyg");
	this.shape_1.setTransform(42.9,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-16.5,91.9,113.6);


(lib.char001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head001("synched",0);
	this.instance.setTransform(113.75,-83.55,1,1,5.4751,0,0,42.9,48.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.9998,scaleY:0.9998,rotation:2.8097,x:103.85,y:-84.1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:91.95,y:-84.75},5,cjs.Ease.get(1)).wait(60).to({regY:86.5,y:-46.75},0).to({scaleX:0.9998,scaleY:0.9998,rotation:2.7738,y:-46.7},7,cjs.Ease.get(-1)).to({regX:43,scaleX:1,scaleY:1,rotation:5.6903,x:92,y:-46.8},7,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_4
	this.instance_1 = new lib.arm001("synched",0);
	this.instance_1.setTransform(6.4,70.65,1,1,8.2335,0,0,14.8,8.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.9998,scaleY:0.9998,rotation:4.3109,x:10.25,y:75.75},4,cjs.Ease.get(-1)).to({regX:14.7,scaleX:1,scaleY:1,rotation:0,x:14.8,y:81.9},5,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({scaleX:0.9985,scaleY:0.9985,rotation:-33.8642,x:7.65,y:80},6,cjs.Ease.get(-1)).to({regY:8.2,scaleX:1,scaleY:1,rotation:-67.9453,x:0.4,y:78.1},6,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({regY:8.1,scaleX:0.9994,scaleY:0.9994,rotation:-80.4338,x:-5.8,y:76.65},7,cjs.Ease.get(-1)).to({regY:8.2,scaleX:1,scaleY:1,rotation:-92.5608,x:-12.1,y:75.25},7,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_5
	this.instance_2 = new lib.bicep001("synched",0);
	this.instance_2.setTransform(34.05,0.9,1,1,16.9327,0,0,20.6,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.9995,scaleY:0.9995,rotation:9.0641,x:28.15,y:3.75},4,cjs.Ease.get(-1)).to({regX:20.7,scaleX:1,scaleY:1,rotation:0,x:21.05,y:7.1},5,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({scaleX:0.9997,scaleY:0.9997,rotation:5.0314,y:7.15},6,cjs.Ease.get(-1)).to({regY:14.6,scaleX:1,scaleY:1,rotation:10.2405,x:21},6,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({regX:20.6,regY:14.5,scaleX:0.9992,scaleY:0.9992,rotation:14.5398,x:20.9,y:7},7,cjs.Ease.get(-1)).to({regX:20.7,scaleX:1,scaleY:1,rotation:18.9857,x:21.05,y:7.1},7,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_11
	this.instance_3 = new lib._123("synched",0);
	this.instance_3.setTransform(113.9,97,0.1194,0.1194,14.997,0,0,66.3,100.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol3asdsa("synched",0);
	this.instance_4.setTransform(113.9,97,0.4531,0.4531,14.9985,0,0,66.2,100.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({regX:66.2,scaleX:0.5254,scaleY:0.5254,rotation:14.9993,x:114},7,cjs.Ease.get(1)).to({scaleX:0.4531,scaleY:0.4531,rotation:14.9985,x:113.9},7,cjs.Ease.get(1)).to({_off:true},17).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140).to({_off:false},0).to({regX:66.1,scaleX:0.453,scaleY:0.453,rotation:4.2929,x:106.7,y:71.3},7,cjs.Ease.get(-1)).to({regY:100,scaleX:0.4531,scaleY:0.4531,rotation:-6.1618,x:99.55,y:45.5},7,cjs.Ease.get(1)).wait(54).to({rotation:-6.1618},0).to({_off:true},1).wait(88));

	// Layer_2
	this.instance_5 = new lib.arm001("synched",0);
	this.instance_5.setTransform(204.2,82.7,1,1,0,2.4671,-177.5329,14.6,8.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({skewX:1.274,skewY:-178.726,x:187.05,y:82.45},4,cjs.Ease.get(-1)).to({regX:14.7,regY:8.1,skewX:0,skewY:-180,x:166.5,y:81.9},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_3
	this.instance_6 = new lib.bicep001("synched",0);
	this.instance_6.setTransform(173,14.45,1,1,0,-19.7206,160.2794,20.7,14.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({regY:14.5,scaleX:0.9994,scaleY:0.9994,skewX:-10.7585,skewY:169.2415,x:167.25,y:11.05},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:160.25,y:7.1},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_6
	this.instance_7 = new lib.body001("synched",0);
	this.instance_7.setTransform(90.4,144,1,1,5.4751,0,0,77,207.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({regY:207.4,scaleX:0.9998,scaleY:0.9998,rotation:2.8097,y:143.9},4,cjs.Ease.get(-1)).to({regY:207.5,scaleX:1,scaleY:1,rotation:0,y:144},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_7
	this.instance_8 = new lib.upleg001("synched",0);
	this.instance_8.setTransform(116.05,155.3,1,1,-20.4812,0,0,22.6,10.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({regX:22.5,scaleX:0.9994,scaleY:0.9994,rotation:-11.0493,x:115.95,y:161.8},4,cjs.Ease.get(-1)).to({regX:22.6,scaleX:1,scaleY:1,rotation:0,x:116.05,y:169.65},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_8
	this.instance_9 = new lib.leg001("synched",0);
	this.instance_9.setTransform(159.3,262.5,1,1,29.9992,0,0,23.2,14.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.9991,scaleY:0.9991,rotation:16.2932,x:139.9,y:273.4},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:116.65,y:286.5},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_9
	this.instance_10 = new lib.upleg001("synched",0);
	this.instance_10.setTransform(70.8,159.9,1,1,0,29.9992,-150.0008,22.6,10.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({regY:11,scaleX:0.9991,scaleY:0.9991,skewX:16.2932,skewY:-163.7068,x:68.05,y:164.4},4,cjs.Ease.get(-1)).to({regY:10.8,scaleX:1,scaleY:1,skewX:0,skewY:-180,x:64.75,y:169.65},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	// Layer_10
	this.instance_11 = new lib.leg001("synched",0);
	this.instance_11.setTransform(12.4,261.75,1,1,0,-22.2453,157.7547,23.2,14.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67).to({_off:false},0).wait(8).to({startPosition:0},0).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.9993,scaleY:0.9993,skewX:-12.0417,skewY:167.9583,x:35.9,y:273},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:64.15,y:286.5},5,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-149.8,241.8,550.4000000000001);


// stage content:
(lib.IndustryCompany9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape10
	this.shape10 = new lib.shape10();
	this.shape10.name = "shape10";
	this.shape10.setTransform(639.95,360,1.0607,1.0865,-0.0241,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape10).wait(9).to({regY:360.1,scaleY:0.5154,rotation:-0.0509,x:2059.45,y:359.65},16,cjs.Ease.get(-1)).wait(1).to({x:-756.55,alpha:0},0).wait(157).to({regY:360.2,scaleY:0.3229,rotation:0,skewX:-0.0812,skewY:-0.0041,x:2031.95,y:359.45,alpha:1},0).to({regY:360,scaleY:1.0865,rotation:-0.0241,skewX:0,skewY:0,x:639.95,y:360},16,cjs.Ease.get(1)).wait(3));

	// shape12
	this.shape12 = new lib.shape12();
	this.shape12.name = "shape12";
	this.shape12.setTransform(639.95,360,1.0607,1.0948,-0.0248,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape12).wait(13).to({regY:360.1,scaleY:0.5194,rotation:-0.0522,x:2059.45,y:359.6},16,cjs.Ease.get(-1)).wait(1).to({x:-756.55,alpha:0},0).wait(149).to({regY:360.2,scaleY:0.3254,rotation:0,skewX:-0.0833,skewY:-0.0041,x:2031.95,y:359.45,alpha:1},0).to({regY:360,scaleY:1.0948,rotation:-0.0248,skewX:0,skewY:0,x:639.95,y:360},16,cjs.Ease.get(1)).wait(7));

	// shape13
	this.shape13 = new lib.shape13();
	this.shape13.name = "shape13";
	this.shape13.setTransform(640,360.05,1.0607,1.0809,-0.0243,0,0,640,360.1);

	this.timeline.addTween(cjs.Tween.get(this.shape13).wait(15).to({scaleY:0.5128,rotation:-0.0512,x:2059.5,y:359.65},16,cjs.Ease.get(-1)).wait(1).to({x:-756.5,alpha:0},0).wait(145).to({regY:360.2,scaleY:0.3212,rotation:0,skewX:-0.0816,skewY:-0.0041,x:2032,y:359.45,alpha:1},0).to({regY:360.1,scaleY:1.0809,rotation:-0.0243,skewX:0,skewY:0,x:640,y:360.05},16,cjs.Ease.get(1)).wait(9));

	// text1
	this.text1 = new lib.text1();
	this.text1.name = "text1";
	this.text1.setTransform(639.95,126.3,1,1,0,0,0,412.9,44);
	this.text1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(89).to({y:-113.7,alpha:1},0).to({y:158.3},10,cjs.Ease.get(1)).to({y:142.3},5,cjs.Ease.get(-1)).to({y:126.3},5,cjs.Ease.get(1)).wait(93));

	// text2
	this.text2 = new lib.text2();
	this.text2.name = "text2";
	this.text2.setTransform(639.95,207.5,1,1,0,0,0,412.9,50);
	this.text2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(86).to({y:-32.5,alpha:1},0).to({y:239.5},10,cjs.Ease.get(1)).to({y:223.5},5,cjs.Ease.get(-1)).to({y:207.5},5,cjs.Ease.get(1)).wait(96));

	// char_idn
	this.instance = new lib.char001("synched",67);
	this.instance.setTransform(1027.85,1149,0.787,0.787,0,0,0,89.2,398.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({regY:398.9,y:641.4,startPosition:78},9,cjs.Ease.get(1)).to({regY:398.7,y:650,startPosition:82},4,cjs.Ease.get(-1)).to({regY:398.8,y:660.85,startPosition:87,loop:false},5,cjs.Ease.get(1)).to({_off:true},122).wait(1));

	// fx
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(627.5,368.25,1,1,0,0,0,199.6,126.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({_off:true},162).wait(1));

	// shape1
	this.shape1 = new lib.shape1();
	this.shape1.name = "shape1";
	this.shape1.setTransform(638.75,683.85,1,1,0,0,0,662.5,66.5);
	this.shape1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.shape1).wait(28).to({y:795.85,alpha:1},0).to({y:683.85},14,cjs.Ease.get(1)).wait(160));

	// shape11
	this.shape11 = new lib.shape11();
	this.shape11.name = "shape11";
	this.shape11.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape11).wait(202));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(202));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-869.7,-41.3,3685.8,1174.7);
// library properties:
lib.properties = {
	id: 'D60EE02ED5124D8A9C8650326BBB0105',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D60EE02ED5124D8A9C8650326BBB0105'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})
;