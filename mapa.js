(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mapa_atlas_", frames: [[1254,1704,23,21],[0,1793,1022,668],[1002,0,1022,668],[1024,2463,772,515],[1024,1793,1022,668],[1254,670,772,515],[1024,2980,772,515],[1254,1187,772,515],[0,0,1000,1000],[0,1002,1252,789],[0,2463,1022,668],[1254,1727,23,21],[1254,1750,23,21],[0,3133,772,515],[774,3497,256,253]]}
];


// symbols:



(lib.boton = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CIMA = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DALARAN = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DARNASSUS = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EL_EXODAR = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ENTRAÑAS = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.FORJAZ = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LUNARGENTA = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LUPA = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapa_mundo = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ORGRIMMAR = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.press = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sobre = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.VENTORMENTA = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.VOLVER = function() {
	this.spriteSheet = ss["mapa_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.VOLVER_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.VOLVER();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.586,0.593);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoRISQjcjcAAk2QAAk2DcjcQDbjbE2AAQE2AADcDbQDcDcAAE2QAAE2jcDcQjcDck2AAQk2AAjbjcg");
	this.shape.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.FORJAZ();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,515);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ENTRAÑAS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,515);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.LUNARGENTA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,515);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.DALARAN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1022,668);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ORGRIMMAR();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1022,668);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.VENTORMENTA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,515);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CIMA();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.196,0.196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,130.7);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.DARNASSUS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,515);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.EL_EXODAR();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.209,0.209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.2,139.4);


(lib.LUPA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.LUPA();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.05,0.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj5j5IHzAAIAAHzInzAAg");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.05,scaleY:0.05,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.07,scaleY:0.07,x:-10,y:-10}}]},1).to({state:[{t:this.instance,p:{scaleX:0.07,scaleY:0.07,x:-10,y:-10}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.FONDO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapa_mundo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FONDO, new cjs.Rectangle(0,0,1252,789), null);


(lib.VENTORMENTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.instance_1 = new lib.sobre();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(172.5,177.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_1.setTransform(161.5,177.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_2.setTransform(150.5,177.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_3.setTransform(139.5,177.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_4.setTransform(128.5,177.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_5.setTransform(117.5,177.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_6.setTransform(106.5,176.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_7.setTransform(227.5,153.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIAEgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_8.setTransform(216.5,153.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033CC").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_9.setTransform(205.5,153.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_10.setTransform(194.5,153.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_11.setTransform(183.5,153.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_12.setTransform(161.5,153.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_13.setTransform(150.5,153.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_14.setTransform(139.5,153.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_15.setTransform(128.5,153.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_16.setTransform(117.5,153.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_17.setTransform(106.5,153.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_18.setTransform(282.5,130);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_19.setTransform(271.5,130);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_20.setTransform(260.5,130);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0033CC").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_21.setTransform(249.5,130);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_22.setTransform(238.5,130);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_23.setTransform(227.5,130);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033CC").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_24.setTransform(216.5,130);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_25.setTransform(205.5,129.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_26.setTransform(172.5,130);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_27.setTransform(161.5,130);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_28.setTransform(150.5,130);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_29.setTransform(139.5,130);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_30.setTransform(128.5,130);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_31.setTransform(117.5,130);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_32.setTransform(106.5,129.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_33.setTransform(282.5,106.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_34.setTransform(271.5,106.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_35.setTransform(260.5,106.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_36.setTransform(249.5,106.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_37.setTransform(238.5,106.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_38.setTransform(227.5,106.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgDAFQgDAGgGADQgFADgGAAgAgSA3IAZAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgZAAg");
	this.shape_39.setTransform(216.5,106.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_40.setTransform(205.5,105.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_41.setTransform(183.5,106.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_42.setTransform(172.5,106.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_43.setTransform(161.5,106.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_44.setTransform(150.5,106.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_45.setTransform(139.5,106.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_46.setTransform(128.5,106.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033CC").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_47.setTransform(117.5,106.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_48.setTransform(106.5,105.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_49.setTransform(84.5,109.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033CC").s().p("AgdBsIAAgSIAJAAIANgBQAGgBABgCQADgDACgEIABgJIAAiLIgBgGIgEgHIgEgFQgCgCgEAAIgUAAIAAgSIASAAQAIAAAHADQAIADAFAFQAGAGADAHQAEAHAAAIIAACLQAAAJgEAHQgDAGgGAFQgFAEgJADQgIADgKAAg");
	this.shape_50.setTransform(73.5,107.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_51.setTransform(62.5,106.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0033CC").s().p("AAPBsQgJAAgIgDQgIgDgGgEQgHgFgCgGQgEgHAAgJIAAiLQAAgIAEgHQADgHAGgGQAFgFAIgDQAHgDAIAAIASAAIAAASIgUAAQgDAAgDACIgEAFIgDAHIgCAGIAACLIABAJQABAEADADQADACAFABIANABIAJAAIAAASg");
	this.shape_52.setTransform(51.5,107.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_53.setTransform(40.5,106.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg6BwIA6AAIAAASg");
	this.shape_54.setTransform(29.5,106.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_55.setTransform(18.5,106.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0033CC").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_56.setTransform(7.5,106.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_57.setTransform(194.5,82.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_58.setTransform(183.5,82.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_59.setTransform(172.5,82.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_60.setTransform(161.5,82.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_61.setTransform(150.5,82.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_62.setTransform(139.5,82.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_63.setTransform(117.5,85.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_64.setTransform(106.5,82.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_65.setTransform(95.5,82.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_66.setTransform(84.5,82.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_67.setTransform(73.5,82.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_68.setTransform(62.5,82.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0033CC").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_69.setTransform(51.5,82.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0033CC").s().p("AgrBJIAAiRIBXAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_70.setTransform(40.5,82.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0033CC").s().p("AgvBJIAAiRIBAAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAEAJIADAKIACAKQgBAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQAMAAAAgWQABgLgEgGQgDgGgGAAIgZAAg");
	this.shape_71.setTransform(29.5,82.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIAEgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_72.setTransform(18.5,82.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_73.setTransform(7.5,82.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgBgHQgDgIAAgIIAAhBQAAgIADgHQABgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAFAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgFAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_74.setTransform(194.5,59.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAFADQAFADAEAGQADAFACAIQADAHAAAIIAABBQAAAIgDAIQgCAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_75.setTransform(183.5,59.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgBgIAAgIIAAhBQAAgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_76.setTransform(172.5,59.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033CC").s().p("AgQAMIAAgXIAhAAIAAAXg");
	this.shape_77.setTransform(161.5,65.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIgBgIIAAhBQABgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAEAFADAIQABAHABAIIAABBQgBAIgBAIQgDAHgEAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgDACg");
	this.shape_78.setTransform(150.5,59.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033CC").s().p("AguBJIAAgsQAAgIACgIQABgHAEgFQAEgFAEgDQAFgDAHAAIAaAAQAGAAADgGQAEgGAAgKQAAgJgEgGQgDgHgGAAIgnAAIAAgSIAzAAQAGAAAGADQAEAEAEAFQAEAGACAHQACAIAAAIQAAAIgCAIQgCAHgEAFQgEAEgEADQgGADgGAAIgaAAQgMAAAAAWIAAAaIBCAAIAAASg");
	this.shape_79.setTransform(139.5,59.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033CC").s().p("AguBJIAAgsQAAgIACgIQACgHADgFQAEgFAFgDQAEgDAHAAIAaAAQAGAAADgGQAEgGAAgKQAAgJgEgGQgDgHgGAAIgnAAIAAgSIAzAAQAGAAAGADQAFAEADAFQADAGADAHQABAIAAAIQAAAIgBAIQgDAHgDAFQgDAEgFADQgGADgGAAIgbAAQgLAAAAAWIAAAaIBCAAIAAASg");
	this.shape_80.setTransform(128.5,59.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_81.setTransform(106.5,62.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_82.setTransform(95.5,59.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0033CC").s().p("AgTBWQgGAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgFADgHAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_83.setTransform(84.5,57.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_84.setTransform(73.5,59.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0033CC").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAGAAIA6AAIAAASIgtAAQgDAAgDACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQADACADAAIAtAAIAAASg");
	this.shape_85.setTransform(62.5,59.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_86.setTransform(51.5,59.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_87.setTransform(40.5,59.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0033CC").s().p("AgvBJIAAiRIBAAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAEAJIADAKIACAKQgBAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQAMAAAAgWQABgLgEgGQgDgGgGAAIgZAAg");
	this.shape_88.setTransform(29.5,59.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIAEgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_89.setTransform(18.5,59.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFAEQAFAEAEAGQAEAGACAJQABAIAAAJQAAAKgBAIQgCAIgEAFQgEAGgFADQgFADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_90.setTransform(7.5,59.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_91.setTransform(205.5,35.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBdAAIAAAPIg8BwIA8AAIAAASg");
	this.shape_92.setTransform(194.5,35.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_93.setTransform(183.5,35.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_94.setTransform(172.5,35.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_95.setTransform(161.5,35.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_96.setTransform(150.5,35.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_97.setTransform(139.5,35.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_98.setTransform(117.5,38.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_99.setTransform(106.5,35.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0033CC").s().p("AgTBWQgGAAgGgDQgEgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgEADgHAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQADAAACgBIAFgFQABgDABgEIABgIIAAhBIgBgJQgBgEgBgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_100.setTransform(95.5,34.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_101.setTransform(84.5,35.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0033CC").s().p("AgPBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAGgDAFAAIA6AAIAAASIgtAAQgDAAgDACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQADACADAAIAtAAIAAASg");
	this.shape_102.setTransform(73.5,35.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_103.setTransform(62.5,35.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_104.setTransform(51.5,35.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_105.setTransform(40.5,35.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_106.setTransform(29.5,35.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0033CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_107.setTransform(18.5,35.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_108.setTransform(7.5,35.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_109.setTransform(200.1,12);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_110.setTransform(189.1,12);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_111.setTransform(178.1,12);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_112.setTransform(167.1,12);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_113.setTransform(156.1,12);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0033CC").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_114.setTransform(145.1,12);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_115.setTransform(134.1,12);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_116.setTransform(123.1,12);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_117.setTransform(112.1,12);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_118.setTransform(101.1,12);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0033CC").s().p("AgRBJIgfiRIAbAAIAUB0IACAAIAWh0IAaAAIghCRg");
	this.shape_119.setTransform(90.1,12);

	this.instance_2 = new lib.Símbolo4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(145.1,96.8,0.376,0.376,0,0,0,386,257.6);
	this.instance_2.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 127.5, 127.5, 0)];
	this.instance_2.cache(-2,-2,776,519);

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.ORGRIMMAR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape.setTransform(55.4,198.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_1.setTransform(44.4,198.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_2.setTransform(33.3,198.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_3.setTransform(22.3,198.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_4.setTransform(11.4,198.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_5.setTransform(0.3,198.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_6.setTransform(-21.6,198.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_7.setTransform(-32.6,198.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_8.setTransform(-54.7,198.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_9.setTransform(-65.6,198.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_10.setTransform(-76.6,198.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_11.setTransform(-87.7,198.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_12.setTransform(-98.6,198.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_13.setTransform(-109.6,197.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_14.setTransform(-32.7,174.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_15.setTransform(-43.7,174.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_16.setTransform(-54.6,174.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_17.setTransform(-65.7,174.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_18.setTransform(-76.6,174.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_19.setTransform(-87.6,174.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_20.setTransform(-98.7,174.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_21.setTransform(-109.6,174.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_22.setTransform(99.3,151);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_23.setTransform(88.4,151);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_24.setTransform(77.4,151);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_25.setTransform(66.4,151);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_26.setTransform(55.3,151);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_27.setTransform(44.4,151);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_28.setTransform(33.3,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_29.setTransform(22.4,151);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgdAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQAAALgFAIQgEAIgJAEIAIADQADACACAEQADADABAEQABAFABAGIAAAugAgRgHIAYAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgYAAg");
	this.shape_30.setTransform(11.4,151);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_31.setTransform(0.4,150.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_32.setTransform(-43.7,151);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_33.setTransform(-54.6,151);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQACAFgBAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_34.setTransform(-65.6,151);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_35.setTransform(-76.7,151);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_36.setTransform(-87.6,151);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_37.setTransform(-98.6,151);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_38.setTransform(-109.6,150.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_39.setTransform(66.3,127.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_40.setTransform(55.3,127.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_41.setTransform(44.3,127.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_42.setTransform(33.4,127.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_43.setTransform(22.4,127.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_44.setTransform(11.4,127.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_45.setTransform(0.4,126.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_46.setTransform(-54.7,127.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_47.setTransform(-65.6,127.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgCAAgDACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQADACACAAIAuAAIAAASg");
	this.shape_48.setTransform(-76.6,127.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgdAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQAAALgFAIQgEAIgJAEIAIADQADACACAEQADADABAEQABAFABAGIAAAugAgRgHIAYAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgYAAg");
	this.shape_49.setTransform(-87.6,127.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_50.setTransform(-98.6,127.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_51.setTransform(-109.6,126.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgPAsIAAgYIAgAAIAAAYgAgPgTIAAgYIAgAAIAAAYg");
	this.shape_52.setTransform(-131.6,130.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdBsIAAgSIAJAAIAOgBQAEgBADgCQADgDAAgEIABgJIAAiKIgBgIIgDgGIgEgFQgDgCgDAAIgUAAIAAgSIARAAQAJAAAHADQAIADAFAGQAGAFADAHQAEAHAAAIIAACLQAAAJgEAGQgDAIgGAEQgGAEgIADQgHADgKAAg");
	this.shape_53.setTransform(-142.6,128.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_54.setTransform(-153.7,127.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAQBsQgKAAgIgDQgIgDgHgEQgFgEgEgIQgDgGAAgJIAAiLQAAgIADgHQAEgHAFgFQAHgGAHgDQAHgDAIAAIASAAIAAASIgUAAQgEAAgCACIgEAFIgDAGIgCAIIAACKIACAJQABAEACADQACACAGABIANABIAJAAIAAASg");
	this.shape_55.setTransform(-164.6,128.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_56.setTransform(-175.6,127.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBdAAIAAAPIg8BwIA8AAIAAASg");
	this.shape_57.setTransform(-186.6,127.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_58.setTransform(-197.6,127.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_59.setTransform(-208.6,127.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_60.setTransform(0.3,103.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_61.setTransform(-10.6,103.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_62.setTransform(-21.7,103.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_63.setTransform(-32.6,103.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgSBJIgeiRIAbAAIAUB0IACAAIAWh0IAaAAIghCRg");
	this.shape_64.setTransform(-43.6,103.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_65.setTransform(-54.7,103.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOBJIAAg1IgkhcIAeAAIAUBGIAAAAIAVhGIAeAAIglBcIAAA1g");
	this.shape_66.setTransform(-65.6,103.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_67.setTransform(-76.7,103.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_68.setTransform(-98.6,106.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_69.setTransform(-109.6,103.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_70.setTransform(-120.6,103.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_71.setTransform(-131.7,103.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_72.setTransform(-142.6,103.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_73.setTransform(-153.7,103.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQACAFgBAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_74.setTransform(-164.6,103.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_75.setTransform(-175.6,103.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgvBJIAAiRIBAAAQAGAAAGADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAEAJIAEAKIABAKQAAAJgCAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQAOAAAAgWQAAgLgEgGQgDgGgHAAIgYAAg");
	this.shape_76.setTransform(-186.6,103.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_77.setTransform(-197.6,103.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_78.setTransform(-208.7,103.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgBgIAAgIIAAhBQAAgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgEAFIgCAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_79.setTransform(-10.6,80.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFABAIQACAHAAAIIAABBQAAAIgCAIQgBAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_80.setTransform(-21.6,80.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIgBgIIAAhBQABgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAEAFADAIQABAHAAAIIAABBQAAAIgBAIQgDAHgEAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgDACg");
	this.shape_81.setTransform(-32.6,80.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgPAMIAAgXIAfAAIAAAXg");
	this.shape_82.setTransform(-43.6,86.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgvBJIAAgSIA2AAQADAAADgDIAEgGIACgKIACgLQgBgLgDgHQgCgGgHAAIg3AAIAAhJIBTAAIAAASIg4AAIAAAmIAoAAQAGAAAGADQAEADAEAGQADAFACAIQACAHABAIQgBAKgCAIIgFAQQgFAGgEAFQgGAEgGAAg");
	this.shape_83.setTransform(-54.6,80.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgRBJQgHAAgGgCQgGgCgDgEQgEgEgCgHQgBgGAAgLIAAhJQAAgLABgGQACgHAEgEQADgEAGgCQAGgCAHAAIAvAAIAAATIgmAAQgGAAgDAEQgCAEAAALIAAASIArAAQALAAAGAIQAGAIAAANIAAAYQAAALgCAGQgBAHgDAEQgEAEgGACQgFACgJAAgAgTAjIABAKIABAGIAEADIAFABIARAAQAGAAACgDQADgEAAgJIAAgZQAAgNgGAAIghAAg");
	this.shape_84.setTransform(-65.6,80.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgtBJIAAgSIAhAAIAAhsIgVAAIAAgTIAwAAIAAB/IAfAAIAAASg");
	this.shape_85.setTransform(-76.6,80.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgQAsIAAgYIAgAAIAAAYgAgQgTIAAgYIAgAAIAAAYg");
	this.shape_86.setTransform(-109.6,83.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_87.setTransform(-120.7,80.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTBWQgGAAgGgDQgEgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgEADgHAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQADAAACgBIAFgFQABgDABgEIABgIIAAhBIgBgJQgBgEgBgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_88.setTransform(-131.6,78.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBXAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_89.setTransform(-142.6,80.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAGgDAGAAIA5AAIAAASIgtAAQgDAAgDACIgEAFIgCAHIgCAIIAABBIACAIIACAHIAEAFQADACADAAIAtAAIAAASg");
	this.shape_90.setTransform(-153.6,80.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_91.setTransform(-164.6,80.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_92.setTransform(-175.7,80.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgvBJIAAiRIBAAAQAGAAAGADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAEAJIAEAKIABAKQAAAJgCAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQAOAAAAgWQAAgLgEgGQgDgGgHAAIgYAAg");
	this.shape_93.setTransform(-186.6,80.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_94.setTransform(-197.6,80.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIAAAJQAAAKgCAIQgCAIgDAFQgDAGgFADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_95.setTransform(-208.6,80.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_96.setTransform(-32.6,56.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQAEAFABAIQADAHAAAIIAABBQAAAJgDAHQgBAHgEAFQgEAGgEADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQACgDABgEIABgIIAAhBIgBgIQgBgEgCgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_97.setTransform(-43.6,56.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_98.setTransform(-54.6,56.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_99.setTransform(-65.6,56.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_100.setTransform(-76.6,56.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_101.setTransform(-98.6,59.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_102.setTransform(-109.7,56.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADABADAAIAPAAQAEAAABgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_103.setTransform(-120.6,55.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_104.setTransform(-131.6,56.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_105.setTransform(-142.6,56.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_106.setTransform(-153.6,56.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_107.setTransform(-164.6,56.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_108.setTransform(-175.7,56.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_109.setTransform(-186.6,56.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_110.setTransform(-197.6,56.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_111.setTransform(-208.6,56.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_112.setTransform(-10.5,33);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_113.setTransform(-21.5,33);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_114.setTransform(-32.6,33);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_115.setTransform(-43.6,33);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_116.setTransform(-54.5,33);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_117.setTransform(-65.5,33);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_118.setTransform(-76.6,33);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_119.setTransform(-87.5,33);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_120.setTransform(-98.5,33);

	this.instance_1 = new lib.Símbolo5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.3,126.7,0.316,0.316,0,0,0,511.3,334.2);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 0, 0)];
	this.instance_1.cache(-2,-2,1026,672);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.LUNARGENTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(-51.7,153.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_1.setTransform(-62.7,153.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_2.setTransform(-73.7,153.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_3.setTransform(-84.7,153.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_4.setTransform(-95.7,153.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_5.setTransform(-106.7,153.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_6.setTransform(-150.7,153.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_7.setTransform(-161.7,153.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_8.setTransform(-172.7,153.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_9.setTransform(-183.7,153.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_10.setTransform(-194.7,153.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_11.setTransform(-205.7,153.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_12.setTransform(-216.7,153.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_13.setTransform(-7.7,130);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_14.setTransform(-18.7,130);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQAEAFABAIQADAHAAAIIAABBQAAAJgDAHQgBAHgEAFQgEAGgEADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQACgDABgEIABgIIAAhBIgBgIQgBgEgCgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_15.setTransform(-29.7,130);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_16.setTransform(-40.7,130);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_17.setTransform(-51.7,130);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_18.setTransform(-62.7,130);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_19.setTransform(-73.7,130);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_20.setTransform(-84.7,130);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_21.setTransform(-95.7,130);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_22.setTransform(-106.7,129.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_23.setTransform(-150.7,130);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_24.setTransform(-161.7,130);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgdAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQAAALgFAIQgEAIgJAEIAIADQADACACAEQADADABAEQABAFABAGIAAAugAgRgHIAYAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgYAAg");
	this.shape_25.setTransform(-172.7,130);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_26.setTransform(-183.7,130);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_27.setTransform(-194.7,130);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_28.setTransform(-205.7,130);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_29.setTransform(-216.7,129.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_30.setTransform(-51.7,106.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_31.setTransform(-62.7,106.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_32.setTransform(-73.7,106.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_33.setTransform(-84.7,106.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_34.setTransform(-95.7,106.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_35.setTransform(-106.7,106.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_36.setTransform(-128.7,106.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgDAFQgDAGgFADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQACgDABgEIABgIIAAhBIgBgIQgBgEgCgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_37.setTransform(-139.7,106.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_38.setTransform(-161.7,106.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_39.setTransform(-172.7,106.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_40.setTransform(-183.7,106.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_41.setTransform(-194.7,106.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_42.setTransform(-205.7,106.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_43.setTransform(-216.7,105.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAsIAAgYIAgAAIAAAYgAgQgTIAAgYIAgAAIAAAYg");
	this.shape_44.setTransform(-238.7,109.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdBsIAAgSIAJAAIANgBQAGgBABgCQADgDACgEIABgJIAAiLIgBgGIgEgHIgEgFQgCgCgEAAIgUAAIAAgSIASAAQAIAAAHADQAIADAFAFQAGAGADAHQAEAHAAAIIAACLQAAAJgEAHQgCAGgHAFQgFAEgJADQgIADgKAAg");
	this.shape_45.setTransform(-249.7,107.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_46.setTransform(-260.7,106.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPBsQgJAAgIgDQgIgDgGgEQgHgFgCgGQgEgHAAgJIAAiLQAAgIAEgHQADgHAGgGQAFgFAIgDQAHgDAIAAIASAAIAAASIgUAAQgDAAgDACIgEAFIgDAHIgCAGIAACLIABAJQABAEADADQADACAFABIANABIAJAAIAAASg");
	this.shape_47.setTransform(-271.7,107.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_48.setTransform(-282.7,106.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg6BwIA6AAIAAASg");
	this.shape_49.setTransform(-293.7,106.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_50.setTransform(-304.7,106.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_51.setTransform(-315.7,106.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_52.setTransform(-84.7,82.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_53.setTransform(-95.7,82.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_54.setTransform(-106.7,82.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_55.setTransform(-117.7,82.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAUBJIAAhAIgmAAIAABAIgdAAIAAiRIAdAAIAABAIAmAAIAAhAIAcAAIAACRg");
	this.shape_56.setTransform(-128.7,82.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_57.setTransform(-139.7,82.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLAbIAAg0IAXAAIAAA0g");
	this.shape_58.setTransform(-150.7,77.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_59.setTransform(-161.7,82.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_60.setTransform(-172.7,82.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_61.setTransform(-183.7,82.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_62.setTransform(-205.7,85.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_63.setTransform(-216.7,82.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_64.setTransform(-227.7,82.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_65.setTransform(-238.7,82.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_66.setTransform(-249.7,82.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_67.setTransform(-260.7,82.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgdAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQAAALgFAIQgEAIgJAEIAIADQADACACAEQADADABAEQABAFABAGIAAAugAgRgHIAYAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgYAAg");
	this.shape_68.setTransform(-271.7,82.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_69.setTransform(-282.7,82.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAEAJIADAKIABAKQAAAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQANAAgBgWQABgLgEgGQgDgGgGAAIgZAAg");
	this.shape_70.setTransform(-293.7,82.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_71.setTransform(-304.7,82.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_72.setTransform(-315.7,82.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgDgHQgCgIAAgIIAAhBQAAgIACgHQADgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAIgCAIQgDAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_73.setTransform(-128.7,59.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHABAIIAABBQgBAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAghcIgTAAQgDAAgCACg");
	this.shape_74.setTransform(-139.7,59.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgDgHQgBgIAAgIIAAhBQAAgIABgHQADgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADADAGQAFAFABAIQACAHAAAIIAABBQAAAIgCAIQgBAHgFAFQgDAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_75.setTransform(-150.7,59.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAMIAAgXIAhAAIAAAXg");
	this.shape_76.setTransform(-161.7,65.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgBgHQgDgIAAgIIAAhBQAAgIADgHQABgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAFAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgFAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_77.setTransform(-172.7,59.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AguBJIAAgsQAAgIACgIQABgHAEgFQAEgFAFgDQAEgDAHAAIAaAAQAGAAADgGQAEgGAAgKQAAgJgEgGQgDgHgGAAIgnAAIAAgSIAzAAQAGAAAGADQAEAEAEAFQADAGADAHQACAIAAAIQAAAIgCAIQgDAHgDAFQgEAEgEADQgGADgGAAIgbAAQgLAAAAAWIAAAaIBCAAIAAASg");
	this.shape_78.setTransform(-183.7,59.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAsIAAgYIAgAAIAAAYgAgPgTIAAgYIAgAAIAAAYg");
	this.shape_79.setTransform(-216.7,62.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_80.setTransform(-227.7,59.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgTBWQgGAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_81.setTransform(-238.7,57.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_82.setTransform(-249.7,59.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgCAAgDACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQADACACAAIAuAAIAAASg");
	this.shape_83.setTransform(-260.7,59.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_84.setTransform(-271.7,59.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_85.setTransform(-282.7,59.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAEAJIADAKIABAKQAAAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAFAAAEgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQANAAgBgWQABgLgEgGQgDgGgGAAIgZAAg");
	this.shape_86.setTransform(-293.7,59.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_87.setTransform(-304.7,59.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFAEQAFAEAEAGQAEAGACAJQACAIAAAJQAAAKgCAIQgCAIgEAFQgEAGgFADQgFADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_88.setTransform(-315.7,59.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_89.setTransform(-139.7,35.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgDAFQgDAGgGADQgFADgGAAgAgSA3IAZAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgZAAg");
	this.shape_90.setTransform(-150.7,35.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_91.setTransform(-161.7,35.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_92.setTransform(-172.7,35.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAUBJIAAhAIgmAAIAABAIgdAAIAAiRIAdAAIAABAIAmAAIAAhAIAcAAIAACRg");
	this.shape_93.setTransform(-183.7,35.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_94.setTransform(-205.7,38.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_95.setTransform(-216.7,35.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgTBWQgGAAgGgDQgEgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgEADgHAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQADAAACgBIAEgFQADgDAAgEIABgIIAAhBIgBgJQAAgEgDgDQgBgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_96.setTransform(-227.7,34.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_97.setTransform(-238.7,35.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIA6AAIAAASIgtAAQgEAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACAEAAIAtAAIAAASg");
	this.shape_98.setTransform(-249.7,35.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_99.setTransform(-260.7,35.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_100.setTransform(-271.7,35.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_101.setTransform(-282.7,35.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_102.setTransform(-293.7,35.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_103.setTransform(-304.7,35.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_104.setTransform(-315.7,35.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_105.setTransform(-112.1,12);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_106.setTransform(-123.1,12);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_107.setTransform(-134.1,12);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_108.setTransform(-145.1,12);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_109.setTransform(-156.1,12);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_110.setTransform(-167.1,12);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_111.setTransform(-178.1,12);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_112.setTransform(-189.1,12);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_113.setTransform(-200.1,12);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_114.setTransform(-211.1,12);

	this.instance_1 = new lib.Símbolo7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-161.6,107.8,0.419,0.419,0,0,0,386,257.5);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 0, 0)];
	this.instance_1.cache(-2,-2,776,519);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.FORJAZ_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(138.6,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_1.setTransform(127.6,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_2.setTransform(116.6,174.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_3.setTransform(105.6,174.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_4.setTransform(94.6,174.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_5.setTransform(83.6,174.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_6.setTransform(72.6,174.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_7.setTransform(61.6,174.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_8.setTransform(215.6,151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_9.setTransform(204.6,151);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_10.setTransform(193.6,151);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_11.setTransform(182.6,151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_12.setTransform(171.6,151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_13.setTransform(160.6,151);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_14.setTransform(149.6,150.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_15.setTransform(127.6,151);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_16.setTransform(116.6,151);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_17.setTransform(105.6,151);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_18.setTransform(94.6,151);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_19.setTransform(83.6,151);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_20.setTransform(72.6,151);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_21.setTransform(61.6,150.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_22.setTransform(39.6,153.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0033CC").s().p("AgdBsIAAgSIAJAAIANgBQAGgBABgDQAEgCABgDIABgKIAAiLIgBgHIgEgGIgEgFQgDgCgDAAIgUAAIAAgSIASAAQAIAAAHADQAIADAFAFQAGAGADAHQAEAHAAAIIAACLQAAAJgEAGQgDAIgGAEQgGAEgIADQgIADgJAAg");
	this.shape_23.setTransform(28.6,151.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_24.setTransform(17.6,151);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033CC").s().p("AAQBsQgKAAgIgDQgIgDgGgEQgHgEgCgIQgEgGAAgJIAAiLQAAgIAEgHQADgHAGgGQAFgFAIgDQAHgDAIAAIASAAIAAASIgUAAQgEAAgCACIgEAFIgDAGIgCAHIAACLIABAKQACADACACQADADAFABIANABIAJAAIAAASg");
	this.shape_25.setTransform(6.6,151.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_26.setTransform(-4.4,151);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBdAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_27.setTransform(-15.4,151);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_28.setTransform(-26.4,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033CC").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAJADQADACACAEQACADACAEQACAFgBAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_29.setTransform(-37.4,151);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_30.setTransform(237.6,127.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_31.setTransform(226.6,127.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_32.setTransform(215.6,127.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_33.setTransform(204.6,127.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_34.setTransform(193.6,127.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_35.setTransform(182.6,127.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_36.setTransform(171.6,127.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_37.setTransform(160.6,127.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_38.setTransform(149.6,127.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_39.setTransform(127.6,127.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_40.setTransform(116.6,127.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033CC").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_41.setTransform(105.6,127.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_42.setTransform(94.6,127.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_43.setTransform(237.6,103.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_44.setTransform(226.6,103.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_45.setTransform(215.6,103.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_46.setTransform(193.6,103.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQADAFACAIQACAHABAIIAABBQgBAJgCAHQgCAHgDAFQgEAGgEADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQACgDABgEIABgIIAAhBIgBgIQgBgEgCgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_47.setTransform(182.6,103.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_48.setTransform(160.6,103.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0033CC").s().p("AgrBJIAAgSIAwAAIAFgCIAEgFIACgHIABgIIAAhXIgjAAIAAgSIA+AAIAABpQAAAIgCAIQgCAHgEAFQgDAGgFADQgFADgHAAg");
	this.shape_49.setTransform(149.6,103.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033CC").s().p("AgrBJIAAiRIBXAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_50.setTransform(138.6,103.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_51.setTransform(127.6,103.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_52.setTransform(116.6,103.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_53.setTransform(105.6,103.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_54.setTransform(94.6,103.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_55.setTransform(72.6,106.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0033CC").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_56.setTransform(61.6,103.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_57.setTransform(50.6,103.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_58.setTransform(39.6,103.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_59.setTransform(28.6,103.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_60.setTransform(17.6,103.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_61.setTransform(6.6,103.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_62.setTransform(-4.4,103.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0033CC").s().p("AgvBJIAAiRIBAAAQAGAAAGADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAEAJIAEAKIABAKQAAAJgDAHQgBAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAAAgWQAAgLgDgGQgDgGgHAAIgYAAg");
	this.shape_63.setTransform(-15.4,103.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_64.setTransform(-26.4,103.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_65.setTransform(-37.4,103.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIgBgIIAAhBQABgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAEAFADAIQABAHAAAIIAABBQAAAIgBAIQgDAHgEAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgEAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_66.setTransform(149.6,80.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgDgHQgCgIAAgIIAAhBQAAgIACgHQADgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAIgCAIQgDAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_67.setTransform(138.6,80.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHABAIIAABBQgBAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAghcIgTAAQgDAAgCACg");
	this.shape_68.setTransform(127.6,80.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0033CC").s().p("AgQAMIAAgXIAhAAIAAAXg");
	this.shape_69.setTransform(116.6,86.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgDACg");
	this.shape_70.setTransform(105.6,80.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0033CC").s().p("AgQBJQgJAAgFgCQgGgCgEgEQgDgEgBgHQgCgGAAgLIAAhJQAAgLACgGQABgHADgEQAEgEAGgCQAFgCAJAAIAuAAIAAATIgmAAQgGAAgCAEQgDAEAAALIAAASIAqAAQAMAAAGAIQAGAIAAANIAAAYQAAALgBAGQgCAHgEAEQgDAEgGACQgFACgJAAgAgTAjIABAKIACAGIADADIAFABIASAAQAFAAADgDQACgEAAgJIAAgZQAAgNgGAAIghAAg");
	this.shape_71.setTransform(94.6,80.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_72.setTransform(61.6,83.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_73.setTransform(50.6,80.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0033CC").s().p("AgTBWQgGAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgFADQgFADgHAAgAgMgmIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACABADAAIAPAAQADAAADgBIADgFQADgDAAgEIABgIIAAhBIgBgJQAAgEgDgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_74.setTransform(39.6,78.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_75.setTransform(28.6,80.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033CC").s().p("AgPBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIA6AAIAAASIgtAAQgEAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACAEAAIAtAAIAAASg");
	this.shape_76.setTransform(17.6,80.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_77.setTransform(6.6,80.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_78.setTransform(-4.4,80.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033CC").s().p("AgvBJIAAiRIBAAAQAGAAAGADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAEAJIAEAKIABAKQAAAJgDAHQgBAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAAAgWQAAgLgDgGQgDgGgHAAIgYAAg");
	this.shape_79.setTransform(-15.4,80.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_80.setTransform(-26.4,80.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFAEQAFAEAEAGQAEAGACAJQABAIAAAJQAAAKgBAIQgCAIgEAFQgDAGgGADQgFADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_81.setTransform(-37.4,80.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_82.setTransform(160.6,56.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0033CC").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg8BwIA8AAIAAASg");
	this.shape_83.setTransform(149.6,56.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_84.setTransform(138.6,56.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_85.setTransform(127.6,56.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_86.setTransform(116.6,56.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_87.setTransform(105.6,56.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_88.setTransform(94.6,56.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_89.setTransform(72.6,59.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_90.setTransform(61.6,56.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0033CC").s().p("AgTBWQgGAAgGgDQgEgDgEgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQAEgFAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgEADgHAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQADAAACgBIAFgFQABgDABgEIABgIIAAhBIgBgJQgBgEgBgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_91.setTransform(50.6,55.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBXAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_92.setTransform(39.6,56.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAGgDAGAAIA5AAIAAASIgtAAQgDAAgDACIgEAFIgCAHIgCAIIAABBIACAIIACAHIAEAFQADACADAAIAtAAIAAASg");
	this.shape_93.setTransform(28.6,56.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_94.setTransform(17.6,56.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_95.setTransform(6.6,56.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_96.setTransform(-4.4,56.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_97.setTransform(-15.4,56.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0033CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_98.setTransform(-26.4,56.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_99.setTransform(-37.4,56.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBdAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_100.setTransform(127.7,33);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_101.setTransform(116.7,33);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0033CC").s().p("AgrBJIAAgSIAwAAIAFgCIAEgFIACgHIABgIIAAhXIgjAAIAAgSIA+AAIAABpQAAAIgCAIQgCAHgEAFQgDAGgFADQgFADgHAAg");
	this.shape_102.setTransform(105.7,33);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0033CC").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_103.setTransform(94.7,33);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_104.setTransform(83.7,33);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0033CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_105.setTransform(72.7,33);

	this.instance_1 = new lib.Símbolo9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.2,117.8,0.376,0.376,0,0,0,385.9,257.4);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 127.5, 127.5, 0)];
	this.instance_1.cache(-2,-2,776,519);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.EXODAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(206.5,130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_1.setTransform(195.5,130);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQAEAFABAIQADAHAAAIIAABBQAAAJgDAHQgBAHgEAFQgEAGgEADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQACgDABgEIABgIIAAhBIgBgIQgBgEgCgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_2.setTransform(184.5,130);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_3.setTransform(173.5,130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAFAJIACAKIABAKQAAAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJQgBgEgCgDIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQANAAgBgWQAAgLgDgGQgDgGgGAAIgZAAg");
	this.shape_4.setTransform(162.5,130);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AAUBWIgEgeIgfAAIgEAeIgdAAIAfiQIAkAAIAdCQgAgNAmIAaAAIgMhOIgBAAgAgThMIA1gJIAAASIg1AGg");
	this.shape_5.setTransform(151.5,128.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_6.setTransform(140.5,130);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_7.setTransform(129.5,129.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_8.setTransform(206.5,106.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_9.setTransform(195.5,106.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_10.setTransform(184.5,106.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_11.setTransform(173.5,106.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_12.setTransform(162.5,106.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033CC").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_13.setTransform(151.5,106.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAJgCAHQgDAHgDAFQgEAGgEADQgGADgGAAgAgRA3IAYAAQADAAADgCIADgFQADgDAAgEIABgIIAAhBIgBgIQAAgEgDgDIgDgFQgDgCgDAAIgYAAg");
	this.shape_14.setTransform(140.5,106.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_15.setTransform(129.5,105.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_16.setTransform(107.5,109.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033CC").s().p("AgdBsIAAgSIAJAAIAOgBQAFgBACgCQACgDABgEIABgJIAAiLIgBgGIgDgHIgEgFQgCgCgEAAIgUAAIAAgSIARAAQAJAAAHADQAHADAHAFQAFAGAEAHQADAHAAAIIAACLQAAAJgDAHQgEAGgGAFQgGAEgIADQgHADgLAAg");
	this.shape_17.setTransform(96.5,107.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_18.setTransform(85.5,106.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033CC").s().p("AAPBsQgKAAgHgDQgIgDgHgEQgFgFgEgGQgDgHAAgJIAAiLQAAgIADgHQAEgHAFgGQAHgFAHgDQAHgDAJAAIARAAIAAASIgUAAQgEAAgCACIgEAFIgDAHIgBAGIAACLIABAJQABAEACADQACACAGABIANABIAJAAIAAASg");
	this.shape_19.setTransform(74.5,107.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_20.setTransform(63.5,106.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0033CC").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBbAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_21.setTransform(52.5,106.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_22.setTransform(41.5,106.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_23.setTransform(30.5,106.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_24.setTransform(206.5,82.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_25.setTransform(195.5,82.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_26.setTransform(184.5,82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_27.setTransform(173.5,82.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033CC").s().p("AgSBJIgeiRIAcAAIAUB0IABAAIAXh0IAZAAIghCRg");
	this.shape_28.setTransform(162.5,82.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_29.setTransform(140.5,85.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_30.setTransform(129.5,82.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_31.setTransform(118.5,82.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_32.setTransform(107.5,82.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_33.setTransform(96.5,82.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_34.setTransform(85.5,82.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_35.setTransform(74.5,82.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_36.setTransform(63.5,82.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_37.setTransform(52.5,82.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_38.setTransform(41.5,82.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_39.setTransform(30.5,82.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgBgIAAgIIAAhBQAAgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_40.setTransform(217.5,59.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_41.setTransform(206.5,59.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033CC").s().p("AgvBJIAAgSIA2AAQADAAACgDIAFgGIADgKIABgLQAAgLgDgHQgDgGgGAAIg4AAIAAhJIBUAAIAAASIg5AAIAAAmIAoAAQAHAAAEADQAFADAEAGQAEAFACAIQABAHABAIQgBAKgBAIIgHAQQgEAGgFAFQgFAEgGAAg");
	this.shape_42.setTransform(195.5,59.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033CC").s().p("AgPAMIAAgXIAfAAIAAAXg");
	this.shape_43.setTransform(184.5,65.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033CC").s().p("AguBJIAAgsQAAgIACgIQACgHADgFQAEgFAFgDQAEgDAHAAIAaAAQAGAAADgGQAEgGAAgKQAAgJgEgGQgDgHgGAAIgnAAIAAgSIAzAAQAGAAAGADQAFAEADAFQADAGADAHQABAIAAAIQAAAIgBAIQgDAHgDAFQgDAEgFADQgGADgGAAIgbAAQgLAAAAAWIAAAaIBCAAIAAASg");
	this.shape_44.setTransform(173.5,59.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033CC").s().p("AguBJIAAgsQAAgIACgIQACgHADgFQADgFAGgDQAFgDAGAAIAaAAQAGAAAEgGQADgGAAgKQAAgJgDgGQgEgHgGAAIgoAAIAAgSIA0AAQAGAAAFADQAGAEADAFQADAGADAHQACAIgBAIQABAIgCAIQgDAHgDAFQgDAEgGADQgFADgGAAIgbAAQgLAAAAAWIAAAaIBCAAIAAASg");
	this.shape_45.setTransform(162.5,59.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_46.setTransform(129.5,62.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_47.setTransform(118.5,59.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0033CC").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADABADAAIAPAAQAEAAABgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_48.setTransform(107.5,57.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_49.setTransform(96.5,59.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_50.setTransform(85.5,59.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_51.setTransform(74.5,59.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_52.setTransform(63.5,59.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0033CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_53.setTransform(52.5,59.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_54.setTransform(41.5,59.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIABAJQgBAKgCAIQgCAIgDAFQgEAGgEADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_55.setTransform(30.5,59.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_56.setTransform(228.5,35.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg6BwIA6AAIAAASg");
	this.shape_57.setTransform(217.5,35.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_58.setTransform(206.5,35.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_59.setTransform(195.5,35.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBXAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_60.setTransform(184.5,35.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_61.setTransform(173.5,35.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_62.setTransform(162.5,35.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_63.setTransform(140.5,38.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_64.setTransform(129.5,35.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0033CC").s().p("AgTBWQgGAAgFgDQgGgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_65.setTransform(118.5,34.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBZAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_66.setTransform(107.5,35.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0033CC").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgDAAgCACIgEAFIgDAHIAAAIIAABBIAAAIIADAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_67.setTransform(96.5,35.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_68.setTransform(85.5,35.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_69.setTransform(74.5,35.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_70.setTransform(63.5,35.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_71.setTransform(52.5,35.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0033CC").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_72.setTransform(41.5,35.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_73.setTransform(30.5,35.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_74.setTransform(173.6,12);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_75.setTransform(162.6,12);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_76.setTransform(151.6,12);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_77.setTransform(140.6,12);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033CC").s().p("AAVBJIgVg3IAAAAIgVA3IgcAAIAjhKIghhHIAdAAIATA0IABAAIAWg0IAaAAIghBHIAhBKg");
	this.shape_78.setTransform(129.6,12);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_79.setTransform(118.6,12);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_80.setTransform(96.6,12);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_81.setTransform(85.6,12);

	this.instance_1 = new lib.Símbolo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.6,69.7,1,1,0,0,0,106.6,69.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 127.5, 127.5, 0)];
	this.instance_1.cache(-2,-2,217,143);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.ENTRANAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape.setTransform(126.2,198.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_1.setTransform(115.2,198.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_2.setTransform(104.2,198.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_3.setTransform(93.2,198.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_4.setTransform(82.2,198.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_5.setTransform(71.2,198.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_6.setTransform(60.2,197.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_7.setTransform(225.2,174.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQgBALgEAIQgEAIgJAEIAHADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_8.setTransform(214.2,174.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_9.setTransform(203.2,174.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_10.setTransform(192.2,174.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_11.setTransform(181.2,174.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDQACgDABgFIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_12.setTransform(170.2,174.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_13.setTransform(148.2,174.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_14.setTransform(137.2,174.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_15.setTransform(115.2,174.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_16.setTransform(104.2,174.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_17.setTransform(93.2,174.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_18.setTransform(82.2,174.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_19.setTransform(71.2,174.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_20.setTransform(60.2,174.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_21.setTransform(225.2,151);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_22.setTransform(214.2,151);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_23.setTransform(203.2,151);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_24.setTransform(192.2,151);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_25.setTransform(181.2,151);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_26.setTransform(170.2,151);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_27.setTransform(159.2,150.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_28.setTransform(115.2,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_29.setTransform(104.2,151);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIA6AAIAAASIgtAAQgEAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACAEAAIAtAAIAAASg");
	this.shape_30.setTransform(93.2,151);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFAAAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_31.setTransform(82.2,151);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_32.setTransform(71.2,151);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_33.setTransform(60.2,150.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_34.setTransform(159.2,127.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_35.setTransform(148.2,127.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_36.setTransform(137.2,127.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_37.setTransform(126.2,127.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_38.setTransform(115.2,127.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_39.setTransform(104.2,127.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_40.setTransform(93.2,127.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_41.setTransform(82.2,127.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgdAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQAAALgFAIQgEAIgJAEIAIADQADACACAEQADADABAEQABAFABAGIAAAugAgRgHIAYAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgYAAg");
	this.shape_42.setTransform(71.2,127.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_43.setTransform(60.2,126.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_44.setTransform(38.2,130.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdBsIAAgSIAJAAIAOgBQAFgBACgCQACgDABgEIABgJIAAiKIgBgIIgDgGIgEgFQgCgCgEAAIgUAAIAAgSIARAAQAJAAAHADQAHADAHAGQAFAFAEAHQADAHAAAIIAACLQAAAJgDAGQgEAIgGAEQgGAEgIADQgHADgLAAg");
	this.shape_45.setTransform(27.2,128.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_46.setTransform(16.2,127.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQBsQgLAAgHgDQgIgDgHgEQgFgEgEgIQgDgGAAgJIAAiLQAAgIADgHQAEgHAFgFQAHgGAHgDQAHgDAJAAIARAAIAAASIgUAAQgEAAgCACIgEAFIgDAGIgBAIIAACKIABAJQABAEACADQACACAGABIANABIAJAAIAAASg");
	this.shape_47.setTransform(5.2,128.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_48.setTransform(-5.8,127.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBbAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_49.setTransform(-16.8,127.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_50.setTransform(-27.8,127.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_51.setTransform(-38.8,127.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDQACgDABgFIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_52.setTransform(170.2,103.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_53.setTransform(159.2,103.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_54.setTransform(148.2,103.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_55.setTransform(137.2,103.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRBJIgfiRIAbAAIAVB0IABAAIAWh0IAaAAIghCRg");
	this.shape_56.setTransform(126.2,103.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_57.setTransform(115.2,103.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNBJIAAg1IglhcIAeAAIAUBGIAAAAIAWhGIAdAAIglBcIAAA1g");
	this.shape_58.setTransform(104.2,103.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_59.setTransform(93.2,103.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_60.setTransform(71.2,106.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_61.setTransform(60.2,103.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_62.setTransform(49.2,103.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_63.setTransform(38.2,103.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_64.setTransform(27.2,103.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_65.setTransform(16.2,103.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_66.setTransform(5.2,103.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_67.setTransform(-5.8,103.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_68.setTransform(-16.8,103.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_69.setTransform(-27.8,103.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_70.setTransform(-38.8,103.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAFADQAFADAEAGQADAFACAIQADAHAAAIIAABBQAAAIgDAIQgCAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_71.setTransform(159.2,80.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgBgIAAgIIAAhBQAAgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_72.setTransform(148.2,80.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_73.setTransform(137.2,80.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgPAMIAAgXIAgAAIAAAXg");
	this.shape_74.setTransform(126.2,86.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgDgHQgCgIAAgIIAAhBQAAgIACgHQADgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAIgCAIQgDAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_75.setTransform(115.2,80.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgBgIgBgIIAAhBQABgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHABAIIAABBQgBAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAghcIgTAAQgDAAgCACg");
	this.shape_76.setTransform(104.2,80.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtBJIAAgSIAiAAIAAhsIgWAAIAAgTIAwAAIAAB/IAfAAIAAASg");
	this.shape_77.setTransform(93.2,80.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_78.setTransform(60.2,83.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_79.setTransform(49.2,80.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQAEAAABgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_80.setTransform(38.2,78.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_81.setTransform(27.2,80.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_82.setTransform(16.2,80.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_83.setTransform(5.2,80.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_84.setTransform(-5.8,80.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_85.setTransform(-16.8,80.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_86.setTransform(-27.8,80.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIABAJQgBAKgCAIQgCAIgDAFQgEAGgEADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_87.setTransform(-38.8,80.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_88.setTransform(137.2,56.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_89.setTransform(126.2,56.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQgBALgEAIQgEAIgJAEIAHADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_90.setTransform(115.2,56.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_91.setTransform(104.2,56.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_92.setTransform(93.2,56.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_93.setTransform(71.2,59.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_94.setTransform(60.2,56.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgTBWQgGAAgFgDQgGgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_95.setTransform(49.2,55.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBZAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_96.setTransform(38.2,56.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgDAAgCACIgEAFIgDAHIAAAIIAABBIAAAIIADAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_97.setTransform(27.2,56.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_98.setTransform(16.2,56.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_99.setTransform(5.2,56.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_100.setTransform(-5.8,56.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_101.setTransform(-16.8,56.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_102.setTransform(-27.8,56.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_103.setTransform(-38.8,56.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_104.setTransform(131.8,33);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_105.setTransform(120.8,33);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAPBWIgnhgIAABgIgWAAIAAiQIAcAAIArBsIAAhsIAWAAIAACQgAAFhEIgHgCIgGgDIgGgBQgFAAgCACQgCACAAADIgPAAQAAgIAGgFQAGgFAMAAIAKABIAHACIAGACIAGAAIAHgBQACgBAAgDIAPAAQAAAHgFAGQgGAFgNAAIgKgBg");
	this.shape_106.setTransform(109.8,31.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_107.setTransform(98.8,33);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQACAFgBAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_108.setTransform(87.8,33);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_109.setTransform(76.8,33);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_110.setTransform(65.8,33);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_111.setTransform(54.8,33);

	this.instance_1 = new lib.Símbolo8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.2,114,0.362,0.362,0,0,0,385.6,257.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 0, 0)];
	this.instance_1.cache(-2,-2,776,519);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.DARNASSUS_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(195.5,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_1.setTransform(184.5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_2.setTransform(173.5,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_3.setTransform(162.5,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_4.setTransform(151.5,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_5.setTransform(140.5,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_6.setTransform(129.5,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_7.setTransform(327.5,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_8.setTransform(316.5,-15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_9.setTransform(305.5,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_10.setTransform(294.5,-15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_11.setTransform(283.5,-15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_12.setTransform(272.5,-15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgDAFQgDAGgGADQgFADgGAAgAgSA3IAZAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgZAAg");
	this.shape_13.setTransform(261.5,-15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_14.setTransform(250.5,-16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_15.setTransform(206.5,-15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_16.setTransform(195.5,-15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_17.setTransform(184.5,-15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_18.setTransform(173.5,-15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_19.setTransform(162.5,-15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_20.setTransform(151.5,-15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0033CC").s().p("AAUBJIAAhAIgmAAIAABAIgdAAIAAiRIAdAAIAABAIAmAAIAAhAIAcAAIAACRg");
	this.shape_21.setTransform(140.5,-15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_22.setTransform(129.5,-16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_23.setTransform(349.5,-39.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_24.setTransform(338.5,-39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_25.setTransform(327.5,-39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_26.setTransform(316.5,-39.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_27.setTransform(305.5,-39.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_28.setTransform(294.5,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_29.setTransform(283.5,-39.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_30.setTransform(272.5,-39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_31.setTransform(261.5,-39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_32.setTransform(250.5,-39.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_33.setTransform(228.5,-39.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_34.setTransform(217.5,-39.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_35.setTransform(206.5,-39.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_36.setTransform(195.5,-39.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_37.setTransform(184.5,-39.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_38.setTransform(173.5,-39.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_39.setTransform(162.5,-39.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_40.setTransform(151.5,-39.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_41.setTransform(140.5,-39.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_42.setTransform(129.5,-39.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_43.setTransform(294.5,-63);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgDACg");
	this.shape_44.setTransform(283.5,-63);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_45.setTransform(272.5,-63);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033CC").s().p("AATBJIAAgjQABgcgNAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQACAFgBAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_46.setTransform(261.5,-63);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_47.setTransform(250.5,-63);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_48.setTransform(239.5,-63);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAGgDAGAAIA5AAIAAASIguAAQgCAAgDACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACACAAIAuAAIAAASg");
	this.shape_49.setTransform(228.5,-63);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_50.setTransform(217.5,-63);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_51.setTransform(206.5,-63);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_52.setTransform(184.5,-63);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_53.setTransform(173.5,-63);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0033CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_54.setTransform(162.5,-63);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_55.setTransform(151.5,-63);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0033CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_56.setTransform(140.5,-63);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0033CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_57.setTransform(129.5,-63.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0033CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_58.setTransform(107.5,-60.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0033CC").s().p("AgdBsIAAgSIAJAAIAOgBQAFgBACgDQACgCABgEIABgJIAAiKIgBgIIgDgGIgEgFQgCgCgEAAIgUAAIAAgSIARAAQAJAAAHADQAHADAHAGQAFAFAEAHQADAHAAAIIAACLQAAAJgDAGQgEAIgGAEQgGAEgIADQgHADgLAAg");
	this.shape_59.setTransform(96.5,-62.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_60.setTransform(85.5,-63);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0033CC").s().p("AAPBsQgKAAgHgDQgIgDgHgEQgFgEgEgIQgDgGAAgJIAAiLQAAgIADgHQAEgHAFgFQAHgGAHgDQAHgDAJAAIARAAIAAASIgUAAQgEAAgCACIgEAFIgDAGIgBAIIAACKIABAJQABAEACACQACADAGABIANABIAJAAIAAASg");
	this.shape_61.setTransform(74.5,-62.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_62.setTransform(63.5,-63);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0033CC").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBbAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_63.setTransform(52.5,-63);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_64.setTransform(41.5,-63);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_65.setTransform(30.5,-63);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_66.setTransform(228.5,-86.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAJgCAHQgCAHgDAFQgDAGgFADQgGADgGAAgAgSA3IAZAAQADAAADgCIADgFQADgDAAgEIABgIIAAhBIgBgIQAAgEgDgDIgDgFQgDgCgDAAIgZAAg");
	this.shape_67.setTransform(217.5,-86.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_68.setTransform(206.5,-86.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_69.setTransform(195.5,-86.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0033CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQgBALgEAIQgEAIgJAEIAHADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_70.setTransform(184.5,-86.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0033CC").s().p("AgNBJIAAg1IglhcIAeAAIAUBGIAAAAIAWhGIAdAAIglBcIAAA1g");
	this.shape_71.setTransform(173.5,-86.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_72.setTransform(162.5,-86.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_73.setTransform(140.5,-83.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_74.setTransform(129.5,-86.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_75.setTransform(118.5,-86.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_76.setTransform(107.5,-86.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_77.setTransform(96.5,-86.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_78.setTransform(85.5,-86.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_79.setTransform(74.5,-86.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_80.setTransform(63.5,-86.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_81.setTransform(52.5,-86.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_82.setTransform(41.5,-86.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0033CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_83.setTransform(30.5,-86.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgBgIAAgIIAAhBQAAgIABgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_84.setTransform(217.5,-110.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_85.setTransform(206.5,-110.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIgBgIIAAhBQABgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAEAFADAIQABAHABAIIAABBQgBAIgBAIQgDAHgEAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgDACg");
	this.shape_86.setTransform(195.5,-110.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0033CC").s().p("AgPAMIAAgXIAfAAIAAAXg");
	this.shape_87.setTransform(184.5,-104.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0033CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADAEAGQADAFACAIQACAHABAIIAABBQgBAIgCAIQgCAHgDAFQgEAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAghcIgTAAQgDAAgCACg");
	this.shape_88.setTransform(173.5,-110.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0033CC").s().p("AgRBJQgHAAgGgCQgGgCgDgEQgEgEgCgHQgBgGAAgLIAAhJQAAgLABgGQACgHAEgEQADgEAGgCQAGgCAHAAIAvAAIAAATIgmAAQgGAAgDAEQgCAEAAALIAAASIArAAQALAAAGAIQAGAIAAANIAAAYQAAALgCAGQgBAHgDAEQgEAEgGACQgFACgJAAgAgTAjIABAKIABAGIAEADIAFABIARAAQAGAAADgDQACgEAAgJIAAgZQAAgNgGAAIghAAg");
	this.shape_89.setTransform(162.5,-110.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_90.setTransform(129.5,-107.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_91.setTransform(118.5,-110.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0033CC").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADABADAAIAPAAQAEAAABgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_92.setTransform(107.5,-111.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_93.setTransform(96.5,-110.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0033CC").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_94.setTransform(85.5,-110.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_95.setTransform(74.5,-110.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_96.setTransform(63.5,-110.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0033CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_97.setTransform(52.5,-110.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0033CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_98.setTransform(41.5,-110.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0033CC").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIABAJQgBAKgCAIQgCAIgDAFQgEAGgEADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_99.setTransform(30.5,-110.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_100.setTransform(228.5,-133.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0033CC").s().p("AguBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg6BwIA6AAIAAASg");
	this.shape_101.setTransform(217.5,-133.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_102.setTransform(206.5,-133.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_103.setTransform(195.5,-133.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBXAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_104.setTransform(184.5,-133.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_105.setTransform(173.5,-133.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_106.setTransform(162.5,-133.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0033CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_107.setTransform(140.5,-130.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_108.setTransform(129.5,-133.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0033CC").s().p("AgTBWQgGAAgFgDQgGgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_109.setTransform(118.5,-135.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBZAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_110.setTransform(107.5,-133.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0033CC").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgDAAgCACIgEAFIgDAHIAAAIIAABBIAAAIIADAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_111.setTransform(96.5,-133.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_112.setTransform(85.5,-133.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0033CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_113.setTransform(74.5,-133.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0033CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_114.setTransform(63.5,-133.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0033CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_115.setTransform(52.5,-133.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0033CC").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_116.setTransform(41.5,-133.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0033CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_117.setTransform(30.5,-133.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDQACgDABgFIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_118.setTransform(234.1,-157.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0033CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_119.setTransform(223.1,-157.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_120.setTransform(212.1,-157.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0033CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_121.setTransform(201.1,-157.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_122.setTransform(190.1,-157.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0033CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_123.setTransform(179.1,-157.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0033CC").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_124.setTransform(168.1,-157.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0033CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_125.setTransform(157.1,-157.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0033CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHABAIIAABBQgBAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_126.setTransform(146.1,-157.4);

	this.instance_1 = new lib.Símbolo2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,-57.9,0.433,0.433,0,0,0,386,257.5);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 127.5, 127.5, 0)];
	this.instance_1.cache(-2,-2,776,519);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.DALARAN_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(206.5,100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_1.setTransform(195.5,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6600CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBXAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_2.setTransform(184.5,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_3.setTransform(173.5,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6600CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAFAJIACAKIABAKQAAAJgCAHQgCAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJQgBgEgCgDIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQANAAgBgWQAAgLgDgGQgDgGgGAAIgZAAg");
	this.shape_4.setTransform(162.5,100.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_5.setTransform(151.5,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6600CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_6.setTransform(140.5,100.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6600CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_7.setTransform(129.5,100);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_8.setTransform(250.5,76.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_9.setTransform(239.5,76.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6600CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_10.setTransform(228.5,76.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_11.setTransform(217.5,76.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6600CC").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_12.setTransform(206.5,76.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_13.setTransform(184.5,76.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_14.setTransform(173.5,76.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6600CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_15.setTransform(162.5,76.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_16.setTransform(151.5,76.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_17.setTransform(140.5,76.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6600CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_18.setTransform(129.5,76.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6600CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_19.setTransform(294.5,53.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6600CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQgBALgEAIQgEAIgJAEIAHADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_20.setTransform(283.5,53.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6600CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_21.setTransform(272.5,53.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_22.setTransform(261.5,53.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_23.setTransform(250.5,53.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDQACgDABgFIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_24.setTransform(239.5,53.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6600CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_25.setTransform(217.5,53.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6600CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgDAGgGADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQACgDAAgEIABgIIAAhBIgBgIQAAgEgCgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_26.setTransform(206.5,53.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_27.setTransform(184.5,53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_28.setTransform(173.5,53.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6600CC").s().p("AgtBJIAAiRIBaAAIAAASIg9AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_29.setTransform(162.5,53.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_30.setTransform(151.5,53.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6600CC").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_31.setTransform(140.5,53.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6600CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_32.setTransform(129.5,52.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_33.setTransform(316.5,29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_34.setTransform(305.5,29.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6600CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_35.setTransform(294.5,29.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgDACg");
	this.shape_36.setTransform(283.5,29.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_37.setTransform(272.5,29.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6600CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_38.setTransform(261.5,29.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6600CC").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_39.setTransform(250.5,29.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_40.setTransform(206.5,29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_41.setTransform(195.5,29.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_42.setTransform(184.5,29.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_43.setTransform(173.5,29.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6600CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_44.setTransform(162.5,29.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6600CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_45.setTransform(151.5,29.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6600CC").s().p("AAUBJIAAhAIgmAAIAABAIgdAAIAAiRIAdAAIAABAIAmAAIAAhAIAcAAIAACRg");
	this.shape_46.setTransform(140.5,29.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6600CC").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_47.setTransform(129.5,29.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6600CC").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_48.setTransform(107.5,32.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6600CC").s().p("AgdBsIAAgSIAJAAIAOgBQAFgBACgDQACgCABgDIABgKIAAiLIgBgHIgDgGIgEgFQgCgCgEAAIgUAAIAAgSIARAAQAJAAAHADQAHADAHAFQAFAGAEAHQADAHAAAIIAACLQAAAJgDAHQgEAGgGAFQgGAFgIACQgHADgLAAg");
	this.shape_49.setTransform(96.5,30.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_50.setTransform(85.5,29.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6600CC").s().p("AAPBsQgKAAgHgDQgIgCgHgFQgFgFgEgGQgDgHAAgJIAAiLQAAgIADgHQAEgHAFgGQAHgFAHgDQAHgDAJAAIARAAIAAASIgUAAQgEAAgCACIgEAFIgDAGIgBAHIAACLIABAKQABADACACQACADAGABIANABIAJAAIAAASg");
	this.shape_51.setTransform(74.5,30.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_52.setTransform(63.5,29.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6600CC").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBbAAIAAAPIg7BwIA7AAIAAASg");
	this.shape_53.setTransform(52.5,29.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_54.setTransform(41.5,29.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6600CC").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgEAIQgDAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_55.setTransform(30.5,29.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_56.setTransform(327.5,6.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_57.setTransform(316.5,6.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6600CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_58.setTransform(305.5,6.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_59.setTransform(294.5,6.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6600CC").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_60.setTransform(283.5,6.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6600CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_61.setTransform(261.5,6.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6600CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHgBAIIAABBQABAJgCAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_62.setTransform(250.5,6.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_63.setTransform(228.5,6.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6600CC").s().p("AgrBJIAAgSIAwAAIAFgCIAEgFIACgHIABgIIAAhXIgjAAIAAgSIA+AAIAABpQAAAIgCAIQgCAHgEAFQgDAGgFADQgFADgHAAg");
	this.shape_64.setTransform(217.5,6.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6600CC").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_65.setTransform(206.5,6.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6600CC").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_66.setTransform(195.5,6.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_67.setTransform(184.5,6.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_68.setTransform(173.5,6.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6600CC").s().p("AgPBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIA6AAIAAASIgtAAQgEAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACAEAAIAtAAIAAASg");
	this.shape_69.setTransform(162.5,6.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6600CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_70.setTransform(140.5,9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6600CC").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_71.setTransform(129.5,6.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6600CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_72.setTransform(118.5,6.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_73.setTransform(107.5,6.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_74.setTransform(96.5,6.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_75.setTransform(85.5,6.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6600CC").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_76.setTransform(74.5,6.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6600CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_77.setTransform(63.5,6.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6600CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_78.setTransform(52.5,6.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_79.setTransform(41.5,6.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6600CC").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_80.setTransform(30.5,6.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAGAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgHAAgAgIA3IASAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_81.setTransform(206.5,-17.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIgBgIIAAhBQABgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAEAFADAIQABAHABAIIAABBQgBAIgBAIQgDAHgEAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAhhcIgUAAQgDAAgDACg");
	this.shape_82.setTransform(195.5,-17.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6600CC").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgDgHQgCgIAAgIIAAhBQAAgIACgHQADgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAIgCAIQgDAHgDAFQgEAGgFADQgFADgGAAgAgJA3IATAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_83.setTransform(184.5,-17.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6600CC").s().p("AgQAMIAAgXIAgAAIAAAXg");
	this.shape_84.setTransform(173.5,-11.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6600CC").s().p("AgRBJQgHAAgGgCQgGgCgDgEQgEgEgCgHQgBgGAAgLIAAhJQAAgLABgGQACgHAEgEQADgEAGgCQAGgCAHAAIAvAAIAAATIgmAAQgGAAgDAEQgCAEAAALIAAASIArAAQALAAAGAIQAGAIAAANIAAAYQAAALgCAGQgBAHgDAEQgEAEgGACQgFACgJAAgAgTAjIABAKIABAGIAEADIAFABIARAAQAGAAADgDQACgEAAgJIAAgZQAAgNgGAAIghAAg");
	this.shape_85.setTransform(162.5,-17.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6600CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_86.setTransform(129.5,-14.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_87.setTransform(118.5,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6600CC").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADABADAAIAPAAQAEAAABgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_88.setTransform(107.5,-18.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6600CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_89.setTransform(96.5,-17.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6600CC").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_90.setTransform(85.5,-17.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_91.setTransform(74.5,-17.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_92.setTransform(63.5,-17.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6600CC").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_93.setTransform(52.5,-17.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6600CC").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_94.setTransform(41.5,-17.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6600CC").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIABAJQgBAKgCAIQgCAIgDAFQgEAGgEADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_95.setTransform(30.5,-17.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_96.setTransform(228.5,-41.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_97.setTransform(217.5,-41.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6600CC").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJABAWQgBALgDAIQgFAIgJAEIAIADQADACACAEQACADACAEQACAFgBAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_98.setTransform(206.5,-41.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6600CC").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_99.setTransform(195.5,-41.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6600CC").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_100.setTransform(184.5,-41.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6600CC").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_101.setTransform(173.5,-41.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_102.setTransform(162.5,-41.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6600CC").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_103.setTransform(140.5,-38.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_104.setTransform(129.5,-41.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6600CC").s().p("AgTBWQgGAAgFgDQgGgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQAEAAACgBIADgFQACgDABgEIABgIIAAhBIgBgJQgBgEgCgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_105.setTransform(118.5,-42.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6600CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBZAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_106.setTransform(107.5,-41.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6600CC").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgDAAgCACIgEAFIgDAHIAAAIIAABBIAAAIIADAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_107.setTransform(96.5,-41.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_108.setTransform(85.5,-41.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6600CC").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_109.setTransform(74.5,-41.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_110.setTransform(63.5,-41.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6600CC").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_111.setTransform(52.5,-41.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6600CC").s().p("AgsBJIAAiRIBaAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_112.setTransform(41.5,-41.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_113.setTransform(30.5,-41.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6600CC").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_114.setTransform(212.1,-64.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_115.setTransform(201.1,-64.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6600CC").s().p("AAUBJIAAgjQgBgcgNAAIgXAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAIAJAAAWQAAALgFAIQgDAIgKAEIAIADQADACACAEQACADACAEQABAFABAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_116.setTransform(190.1,-64.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6600CC").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_117.setTransform(179.1,-64.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6600CC").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_118.setTransform(168.1,-64.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6600CC").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgMAYIAZAAIgMhOIgBAAg");
	this.shape_119.setTransform(157.1,-64.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6600CC").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHABAIIAABBQgBAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_120.setTransform(146.1,-64.7);

	this.instance_1 = new lib.Símbolo6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(179.1,25.2,0.305,0.305,0,0,0,510.9,333.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 102, 76.5, 127.5, 0)];
	this.instance_1.cache(-2,-2,1026,672);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.CIMA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape.setTransform(173.3,151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_1.setTransform(162.3,151);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_2.setTransform(151.3,151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAGAAAGADQAEADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgFADgHAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_3.setTransform(140.3,151);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_4.setTransform(129.3,151);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_5.setTransform(118.3,151);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_6.setTransform(107.3,150.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_7.setTransform(85.3,151);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQADAAADgCIADgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_8.setTransform(74.3,151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHAAAIIAABBQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_9.setTransform(63.3,151);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_10.setTransform(52.3,151);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_11.setTransform(41.3,151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_12.setTransform(30.3,151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_13.setTransform(19.3,151);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg8AAIAAAuIArAAIAAARIgrAAIAAAuIA8AAIAAASg");
	this.shape_14.setTransform(8.3,151);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJAAAWQgBALgEAIQgEAIgJAEIAHADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_15.setTransform(-2.7,151);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_16.setTransform(-13.7,150.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_17.setTransform(162.3,127.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQABgDABgDIABgJIAAhBIgBgIQgBgEgBgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_18.setTransform(151.3,127.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAHAAIA5AAIAAASIguAAQgCAAgDACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACACAAIAuAAIAAASg");
	this.shape_19.setTransform(140.3,127.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgbAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_20.setTransform(129.3,127.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACADAAIAPAAQAEAAABgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_21.setTransform(118.3,127.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAnIAAgfIgfAAIAAgSIAfAAIAAgcIARAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_22.setTransform(107.3,126.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_23.setTransform(52.3,127.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_24.setTransform(41.3,127.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgZAAg");
	this.shape_25.setTransform(30.3,127.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_26.setTransform(19.3,127.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_27.setTransform(8.3,127.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_28.setTransform(-2.7,127.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJAnIAAgfIgeAAIAAgSIAeAAIAAgcIASAAIAAAcIAfAAIAAASIgfAAIAAAfg");
	this.shape_29.setTransform(-13.7,126.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAsIAAgYIAhAAIAAAYgAgQgTIAAgYIAhAAIAAAYg");
	this.shape_30.setTransform(-35.7,130.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdBsIAAgSIAJAAIAOgBQAEgBADgCQACgDABgEIABgJIAAiKIgBgIIgDgGIgEgFQgDgCgDAAIgUAAIAAgSIARAAQAJAAAHADQAHADAHAGQAFAFAEAHQADAHAAAIIAACLQAAAJgDAGQgEAIgGAEQgFAEgJADQgHADgKAAg");
	this.shape_31.setTransform(-46.7,128.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgpBJIAAgSIAwAAQADAAADgCQACgCACgDIADgIIAAgJIAAgKQgBgEgDgDQgCgCgEgBIgKgBIgPAAQgHAAgGgDQgGgDgEgFQgEgFgCgHQgCgIAAgJQAAgIACgIQACgIAEgFQADgGAGgDQAFgEAGAAIA6AAIAAASIguAAQgDAAgDACIgEAFIgCAGIgBAIQAAAJAEAGQADAGAGAAIAXAAQAHAAAGADQAGADADAFQAEAFACAHQACAIAAAJQAAAJgCAIQgCAJgEAGQgEAGgFADQgFAEgGAAg");
	this.shape_32.setTransform(-57.7,127.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQBsQgLAAgHgDQgIgDgHgEQgGgEgDgIQgDgGAAgJIAAiLQAAgIADgHQAEgHAFgFQAHgGAHgDQAHgDAJAAIARAAIAAASIgUAAQgDAAgDACIgEAFIgDAGIgBAIIAACKIABAJQABAEACADQACACAGABIANABIAJAAIAAASg");
	this.shape_33.setTransform(-68.7,128.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAeiRIAjAAIAeCRgAgNAYIAaAAIgMhOIgBAAg");
	this.shape_34.setTransform(-79.7,127.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgtBJIAAgMIA+hzIg+AAIAAgSIBcAAIAAAPIg8BwIA8AAIAAASg");
	this.shape_35.setTransform(-90.7,127.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAlAAIAeCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_36.setTransform(-101.7,127.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgNAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_37.setTransform(-112.7,127.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrBJIAAiRIBYAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_38.setTransform(63.3,103.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_39.setTransform(52.3,103.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_40.setTransform(41.3,103.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_41.setTransform(30.3,103.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AguBJIAAiRIA/AAQAHAAAEADQAGADADAGQAEAFACAIQACAHAAAIQAAALgDAHQgCAIgHAFQADABADADIAFAJIACAKIABAKQAAAJgBAHQgDAHgDAGQgEAFgFAEQgFADgHAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAZAAQANAAgBgWQAAgLgDgGQgDgGgGAAIgZAAg");
	this.shape_42.setTransform(19.3,103.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_43.setTransform(-2.7,106.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg8AAIAAAuIAsAAIAAARIgsAAIAAAuIA8AAIAAASg");
	this.shape_44.setTransform(-13.7,103.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_45.setTransform(-24.7,103.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_46.setTransform(-35.7,103.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgDAAg");
	this.shape_47.setTransform(-46.7,103.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_48.setTransform(-57.7,103.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATBJIAAgjQAAgcgMAAIgZAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgKAEIAIADQAEACACAEQACADACAEQABAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_49.setTransform(-68.7,103.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_50.setTransform(-79.7,103.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvBJIAAiRIBAAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIADAKIAAAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_51.setTransform(-90.7,103.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_52.setTransform(-101.7,103.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAFgDAHAAIA7AAIAAASIgwAAQgDAAgCACIgEAFIgDAHIgBAIIAABBIABAIIADAHIAEAFQACACADAAIAZAAIAAguIgYAAIAAgRIAxAAIAABRg");
	this.shape_53.setTransform(-112.7,103.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAmAAQAHAAAFADQAFADADAGQAFAFABAIQACAHAAAIIAABBQAAAIgCAIQgBAHgFAFQgDAGgFADQgFADgHAAgAgJA3IATAAIAFgCIAEgFIADgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_54.setTransform(74.3,80.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgDgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADADAGQAFAFACAIQABAHAAAIIAABBQAAAIgBAIQgCAHgFAFQgDAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgPg0IgDAFIgDAHIgBAIIAABGIAghcIgTAAQgDAAgDACg");
	this.shape_55.setTransform(63.3,80.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgBgHQgDgIAAgIIAAhBQAAgIADgHQABgIAEgFQAEgGAFgDQAFgDAGAAIAnAAQAFAAAGADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgEAGgFADQgFADgGAAgAgIA3IASAAIAFgCIAFgFIACgGIABgJIAAhEgAgOg0IgFAFIgCAHIgBAIIAABGIAhhcIgUAAQgDAAgCACg");
	this.shape_56.setTransform(52.3,80.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPAMIAAgXIAfAAIAAAXg");
	this.shape_57.setTransform(41.3,86.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRBJQgOAAgIgLQgIgKAAgWQAAgOAEgIQADgIAHgEIgFgFIgDgGIgCgIIgBgLQAAgSAHgKQAHgKAQAAIAeAAQAPAAAHAKQAHAJAAATIgBALIgCAIIgDAGIgEAFQAGAEADAIQAEAIAAAOQAAArgeAAgAgQAMQgEAFAAAMQAAANAEAHQADAGAGAAIAPAAQAGAAAEgGQAEgHAAgNQAAgMgEgFQgEgFgGAAIgPAAQgGAAgDAFgAgQgwQgEAGAAAKQAAALAEAFQADAGAGAAIAPAAQAGAAAEgGQADgFAAgLQAAgKgDgGQgEgGgGAAIgPAAQgGAAgDAGg");
	this.shape_58.setTransform(30.3,80.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgtBJIAAgSIAiAAIAAhsIgWAAIAAgTIAwAAIAAB/IAfAAIAAASg");
	this.shape_59.setTransform(19.3,80.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAsIAAgYIAgAAIAAAYgAgQgTIAAgYIAgAAIAAAYg");
	this.shape_60.setTransform(-13.7,83.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_61.setTransform(-24.7,80.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTBWQgGAAgGgDQgFgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgEAGQgDAFgGADQgFADgGAAgAgNgmIgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADABADAAIAPAAQADAAACgBIAFgFQACgDAAgEIABgIIAAhBIgBgJQAAgEgCgDQgCgDgDgBQgCgCgDAAIgPAAQgDAAgDACgAgThMIA1gJIAAASIg1AGg");
	this.shape_62.setTransform(-35.7,78.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_63.setTransform(-46.7,80.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIADgFQAEgGAFgDQAFgDAHAAIA5AAIAAASIguAAQgCAAgDACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQADACACAAIAuAAIAAASg");
	this.shape_64.setTransform(-57.7,80.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgcAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_65.setTransform(-68.7,80.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_66.setTransform(-79.7,80.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgvBJIAAiRIBAAAQAHAAAFADQAFADAEAGQADAFACAIQACAHAAAIQAAALgDAHQgDAIgGAFQADABADADIAFAJIADAKIAAAKQAAAJgBAHQgCAHgEAGQgEAFgFAEQgFADgGAAgAgTA3IAbAAQAGAAADgHQAEgGAAgLIgBgJIgDgHIgEgFQgCgCgDAAIgbAAgAgTgJIAYAAQANAAABgWQgBgLgDgGQgDgGgHAAIgYAAg");
	this.shape_67.setTransform(-90.7,80.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgEgDgEgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQAEgGAEgDQAGgDAGAAIAnAAQAGAAAFADQAFADAEAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgEADgHAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAEgFQADgDAAgDIABgJIAAhBIgBgIQAAgEgDgDQgBgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_68.setTransform(-101.7,80.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFAEQAFAEAEAGQADAGACAJQACAIAAAJQAAAKgCAIQgCAIgDAFQgDAGgFADQgGADgGAAIglAAIAAA4gAgSAAIAZAAQANAAAAgaQAAgcgNAAIgZAAg");
	this.shape_69.setTransform(-112.7,80.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAUBJIgEgfIgfAAIgEAfIgdAAIAfiRIAkAAIAdCRgAgNAYIAaAAIgLhOIgCAAg");
	this.shape_70.setTransform(63.3,56.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AguBJIAAiRIBBAAQAGAAAFADQAFADAEAGQADAFADAIQACAHAAAIIAABBQAAAJgCAHQgDAHgDAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAEgFQADgDAAgEIABgIIAAhBIgBgIQAAgEgDgDIgEgFQgCgCgDAAIgYAAg");
	this.shape_71.setTransform(52.3,56.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAUBJIAAgjQAAgcgOAAIgYAAIAAA/IgcAAIAAiRIA7AAQARAAAIAKQAIAJgBAWQAAALgDAIQgEAIgLAEIAIADQAEACACAEQADADABAEQACAFAAAGIAAAugAgSgHIAZAAQAGAAADgGQAEgHAAgKQAAgLgEgGQgDgHgGAAIgZAAg");
	this.shape_72.setTransform(41.3,56.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTBJQgGAAgFgDQgGgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgDAFQgEAFgFAEQgGADgGAAgAgMg0IgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACACADAAIAPAAQAEAAACgCIADgFQACgDABgDIABgJIAAhBIgBgIQgBgEgCgDQgBgDgCgCQgDgCgDAAIgPAAQgDAAgCACg");
	this.shape_73.setTransform(30.3,56.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAUBJIAAhAIgmAAIAABAIgcAAIAAiRIAcAAIAABAIAmAAIAAhAIAbAAIAACRg");
	this.shape_74.setTransform(19.3,56.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPAsIAAgYIAfAAIAAAYgAgPgTIAAgYIAfAAIAAAYg");
	this.shape_75.setTransform(-2.7,59.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_76.setTransform(-13.7,56.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTBWQgGAAgFgDQgGgDgDgFQgEgGgCgHQgCgHAAgIIAAhBQAAgJACgHQACgHAEgGQADgFAGgDQAFgDAGAAIAnAAQAGAAAGADQAFADADAFQAEAGACAHQACAHAAAJIAABBQAAAIgCAHQgCAHgDAGQgEAFgFADQgGADgGAAgAgMgmIgFAFIgCAHIgBAIIAABBIABAIIACAHIAFAFQACABADAAIAPAAQADAAADgBIADgFQADgDAAgEIABgIIAAhBIgBgJQAAgEgDgDQgBgDgCgBQgDgCgDAAIgPAAQgDAAgCACgAgThMIA1gJIAAASIg1AGg");
	this.shape_77.setTransform(-24.7,55.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_78.setTransform(-35.7,56.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgOBJQgHAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAEgDAHAAIA5AAIAAASIguAAQgDAAgCACIgEAFIgCAHIgBAIIAABBIABAIIACAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_79.setTransform(-46.7,56.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_80.setTransform(-57.7,56.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBYAAIAAASIgeAAIAABtIAeAAIAAASg");
	this.shape_81.setTransform(-68.7,56.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_82.setTransform(-79.7,56.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgrBJIAAgSIAeAAIAAhtIgeAAIAAgSIBYAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_83.setTransform(-90.7,56.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgtBJIAAiRIBbAAIAAASIg+AAIAAAwIAtAAIAAARIgtAAIAAA+g");
	this.shape_84.setTransform(-101.7,56.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgbAAIAdiRIAkAAIAfCRgAgMAYIAZAAIgMhOIgCAAg");
	this.shape_85.setTransform(-112.7,56.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTBJQgGAAgGgDQgFgDgDgGQgEgFgCgHQgCgIAAgIIAAhBQAAgIACgHQACgIAEgFQADgGAFgDQAGgDAGAAIAnAAQAGAAAFADQAGADADAGQAEAFACAIQACAHAAAIIAABBQAAAIgCAIQgCAHgEAFQgDAFgGAEQgFADgGAAgAgNg0IgDAFIgDAHIgBAIIAABBIABAIIADAHIADAFQADACADAAIAPAAQADAAACgCIAFgFQACgDAAgDIABgJIAAhBIgBgIQAAgEgCgDQgCgDgDgCQgCgCgDAAIgPAAQgDAAgDACg");
	this.shape_86.setTransform(107.4,33);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAPBJIgnhhIAABhIgWAAIAAiRIAcAAIArBtIAAhtIAWAAIAACRg");
	this.shape_87.setTransform(96.4,33);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgsBJIAAiRIBYAAIAAASIg7AAIAAAuIArAAIAAARIgrAAIAAAuIA7AAIAAASg");
	this.shape_88.setTransform(85.4,33);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSBJQgHAAgFgDQgFgDgEgGQgDgFgCgHQgCgHAAgJIAAhpIAbAAIAABpIAAAJIADAGIAEAFQACACADAAIAPAAQADAAACgCIAEgFIADgGIAAgJIAAhpIAbAAIAABpQAAAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAg");
	this.shape_89.setTransform(74.4,33);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AATBJIAAgjQABgcgNAAIgYAAIAAA/IgcAAIAAiRIA6AAQARAAAIAKQAHAJAAAWQAAALgDAIQgFAIgJAEIAIADQADACACAEQACADACAEQACAFgBAGIAAAugAgRgHIAYAAQAGAAAEgGQADgHAAgKQAAgLgDgGQgEgHgGAAIgYAAg");
	this.shape_90.setTransform(63.4,33);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgMBJIAAh/IggAAIAAgSIBZAAIAAASIgfAAIAAB/g");
	this.shape_91.setTransform(52.4,33);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgtBJIAAiRIAcAAIAAB/IA/AAIAAASg");
	this.shape_92.setTransform(30.4,33);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgsBJIAAiRIBZAAIAAASIg9AAIAAAuIAsAAIAAARIgsAAIAAAuIA9AAIAAASg");
	this.shape_93.setTransform(19.4,33);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgtBJIAAiRIBAAAQAGAAAFADQAFADAEAGQAEAFACAIQABAHABAIIAABBQgBAJgBAHQgCAHgEAFQgEAGgFADQgFADgGAAgAgRA3IAYAAQADAAACgCIAFgFQABgDABgEIABgIIAAhBIgBgIQgBgEgBgDIgFgFQgCgCgDAAIgYAAg");
	this.shape_94.setTransform(8.4,33);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAVBJIgFgfIgfAAIgFAfIgcAAIAeiRIAkAAIAfCRgAgMAYIAZAAIgLhOIgDAAg");
	this.shape_95.setTransform(-13.6,33);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAaBJIAAhbIgPBbIgVAAIgPhbIAABbIgVAAIAAiRIAcAAIASBuIAThuIAcAAIAACRg");
	this.shape_96.setTransform(-24.6,33);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgsBJIAAgSIAfAAIAAhtIgfAAIAAgSIBZAAIAAASIgfAAIAABtIAfAAIAAASg");
	this.shape_97.setTransform(-35.6,33);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgPBJQgGAAgFgDQgFgDgDgGQgEgFgCgHQgCgHAAgJIAAhBQAAgIACgHQACgIAEgFQADgGAGgDQAFgDAFAAIA6AAIAAASIguAAQgDAAgCACIgEAFIgDAHIAAAIIAABBIAAAIIADAHIAEAFQACACADAAIAuAAIAAASg");
	this.shape_98.setTransform(-46.6,33);

	this.instance_1 = new lib.Símbolo3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.3,119.3,1.505,1.505,0,0,0,100,65.3);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 0, 0)];
	this.instance_1.cache(-2,-2,204,135);

	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;

	this.instance_3 = new lib.press();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


// stage content:
(lib.mapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1); //--inicia la película
		var escenario = this; //--define al escenario como una variable
		
		//--cada botón avanza al cuadro seleccionado y se pausa
		
		//--funciones relacionadas con EXODAR
		this.EXODAR.addEventListener("click", m_exodar.bind(this));
		function m_exodar() {
			escenario.gotoAndStop(2);
		}
		this.LUPA_EXODAR.addEventListener("click", l_exodar.bind(this));
		function l_exodar() {
			escenario.gotoAndStop(3);
		}
		this.VOLVER_EXODAR.addEventListener("click", m_exodar.bind(this));
		
		//--funciones relacionadas con DARNASSUS
		this.DARNASSUS.addEventListener("click", m_darnassus.bind(this));
		function m_darnassus() {
			escenario.gotoAndStop(4);
		}
		this.LUPA_DARNASSUS.addEventListener("click", l_darnassus.bind(this));
		function l_darnassus() {
			escenario.gotoAndStop(5);
		}
		this.VOLVER_DARNASSUS.addEventListener("click", m_darnassus.bind(this));
		
		//--funciones relacionadas con CIMA DEL TRUENO
		this.CIMA.addEventListener("click", m_cima.bind(this));
		function m_cima() {
			escenario.gotoAndStop(6);
		}
		this.LUPA_CIMA.addEventListener("click", l_cima.bind(this));
		function l_cima() {
			escenario.gotoAndStop(7);
		}
		this.VOLVER_CIMA.addEventListener("click", m_cima.bind(this));
		
		//--funciones relacionadas con ORGRIMMAR
		this.ORGRIMMAR.addEventListener("click", m_orgrimmar.bind(this));
		function m_orgrimmar() {
			escenario.gotoAndStop(8);
		}
		this.LUPA_ORGRIMMAR.addEventListener("click", l_orgrimmar.bind(this));
		function l_orgrimmar() {
			escenario.gotoAndStop(9);
		}
		this.VOLVER_ORGRIMMAR.addEventListener("click", m_orgrimmar.bind(this));
		
		//--funciones relacionadas con DALARAN
		this.DALARAN.addEventListener("click", m_dalaran.bind(this));
		function m_dalaran() {
			escenario.gotoAndStop(10);
		}
		this.LUPA_DALARAN.addEventListener("click", l_dalaran.bind(this));
		function l_dalaran() {
			escenario.gotoAndStop(11);
		}
		this.VOLVER_DALARAN.addEventListener("click", m_dalaran.bind(this));
		
		//--funciones relacionadas con LUNARGENTA
		this.LUNARGENTA.addEventListener("click", m_lunargenta.bind(this));
		function m_lunargenta() {
			escenario.gotoAndStop(12);
		}
		this.LUPA_LUNARGENTA.addEventListener("click", l_lunargenta.bind(this));
		function l_lunargenta() {
			escenario.gotoAndStop(13);
		}
		this.VOLVER_LUNARGENTA.addEventListener("click", m_lunargenta.bind(this));
		
		//--funciones relacionadas con ENTRAÑAS
		this.ENTRANAS.addEventListener("click", m_entranas.bind(this));
		function m_entranas() {
			escenario.gotoAndStop(14);
		}
		this.LUPA_ENTRANAS.addEventListener("click", l_entranas.bind(this));
		function l_entranas() {
			escenario.gotoAndStop(15);
		}
		this.VOLVER_ENTRANAS.addEventListener("click", m_entranas.bind(this));
		
		//--funciones relacionadas con FORJAZ
		this.FORJAZ.addEventListener("click", m_forjaz.bind(this));
		function m_forjaz() {
			escenario.gotoAndStop(16);
		}
		this.LUPA_FORJAZ.addEventListener("click", l_forjaz.bind(this));
		function l_forjaz() {
			escenario.gotoAndStop(17);
		}
		this.VOLVER_FORJAZ.addEventListener("click", m_forjaz.bind(this));
		
		//--funciones relacionadas con VENTORMENTA
		this.VENTORMENTA.addEventListener("click", m_ventormenta.bind(this));
		function m_ventormenta() {
			escenario.gotoAndStop(18);
		}
		this.LUPA_VENTORMENTA.addEventListener("click", l_ventormenta.bind(this));
		function l_ventormenta() {
			escenario.gotoAndStop(19);
		}
		this.VOLVER_VENTORMENTA.addEventListener("click", m_ventormenta.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// FOTOGRAMAS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape.setTransform(709.7,383.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_1.setTransform(691.3,383.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AhMB5IAAjxIBsAAQAKAAAIAFQAJAFAGAJQAGAJADAMQADAMAAAOIAABtQAAAOgDAMQgDAMgGAJQgGAJgJAFQgIAFgKAAgAgeBcIAqAAQAFAAAEgDQAEgDACgGQADgFACgGQABgGAAgIIAAhtQAAgHgBgGQgCgHgDgFQgCgFgEgDQgEgDgFAAIgqAAg");
	this.shape_2.setTransform(673,383.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AggB5QgLAAgIgFQgJgFgGgJQgGgJgEgMQgDgMAAgOIAAhtQAAgOADgMQAEgMAGgJQAGgJAJgFQAIgFALAAIBBAAQALAAAIAFQAJAFAGAJQAGAJADAMQAEAMAAAOIAABtQAAAOgDAMQgEAMgGAJQgGAJgIAFQgJAFgLAAgAgVhXQgEADgDAFIgFAMQgBAGAAAHIAABtQAAAIABAGIAFALQACAGAEADQAEADAGAAIAaAAQAFAAAEgDQAEgDACgFQADgFACgHQABgGAAgIIAAhtQAAgHgBgHQgCgGgDgFQgDgFgEgDQgEgDgEAAIgaAAQgGAAgDADg");
	this.shape_3.setTransform(654.6,383.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033CC").s().p("AAiB5IghhbIgBAAIgjBbIgwAAIA7h7Ig3h2IAwAAIAhBWIACAAIAkhWIAsAAIg4B2IA3B7g");
	this.shape_4.setTransform(636.3,383.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AhJB5IAAjxICTAAIAAAeIhkAAIAABMIBJAAIAAAcIhJAAIAABOIBkAAIAAAdg");
	this.shape_5.setTransform(617.9,383.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AhMB5IAAjxIAvAAIAADUIBqAAIAAAdg");
	this.shape_6.setTransform(581.2,383.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AhJB5IAAjxICTAAIAAAeIhkAAIAABMIBJAAIAAAcIhJAAIAABOIBkAAIAAAdg");
	this.shape_7.setTransform(562.9,383.6);

	this.LUPA_EXODAR = new lib.LUPA_1();
	this.LUPA_EXODAR.name = "LUPA_EXODAR";
	this.LUPA_EXODAR.parent = this;
	this.LUPA_EXODAR.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_EXODAR, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAOIAAgaIAjAAIAAAag");
	this.shape_8.setTransform(509.1,790.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALABIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAHAAAIQAAAUgHAKQgIALgOAAg");
	this.shape_9.setTransform(496.9,785.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_10.setTransform(484.7,785.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgDAGIAAALIAAAtQAAAPAGAEQAEABAQABIAJAAIANgBIAUAAIAAAUg");
	this.shape_11.setTransform(472.5,785.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgFQgEgEgCgHQgCgIAAgLIAAhYIAgAAIAABWIAAALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_12.setTransform(460.3,785.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgyBRIAAihIAfAAIAACNIBGAAIAAAUg");
	this.shape_13.setTransform(448.1,784.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgHQgCgHAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_14.setTransform(831.8,760.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQACAIgBAMIAABXgAgMAFQgEABgCABQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_15.setTransform(819.6,760.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_16.setTransform(807.4,758.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_17.setTransform(774,760.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgFAGgDQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_18.setTransform(761.8,758.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQACAIAAAMIAABXgAgMAFQgEABgCABQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_19.setTransform(728.3,760.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgGgDgFgFQgEgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAEgFQAFgFAGgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAQAHADQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_20.setTransform(716.1,760.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_21.setTransform(703.9,760.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAiihIAnAAIAiChgAgOAbIAdAAIgOhXIgBAAg");
	this.shape_22.setTransform(691.7,759.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_23.setTransform(658.3,758.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_24.setTransform(646.1,760.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAEAEADAIQABAIAAAMIAABXg");
	this.shape_25.setTransform(612.6,760.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_26.setTransform(600.4,760.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgCgHAAgJQAAgIACgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQABAIABAMIAABXgAgMAFQgEABgCABQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_27.setTransform(567,760.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_28.setTransform(554.8,758.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_29.setTransform(542.6,758.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQABAIAAAMIAABXgAgMAFQgEABgCABQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_30.setTransform(530.4,760.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_31.setTransform(518.2,759.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQACAIgBAMIAABXgAgMAFQgEABgCABQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_32.setTransform(506,760.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgzBVIAAipIAfAAIAAAqIAnAAQASAAAIAKQAHAKAAAXIAAAnQAAAXgHALQgIALgSAAgAgUBBIAVAAIALgBQADgBADgCQACgCABgEIAAgNIAAgrIAAgLIgCgGIgEgDIgGgBIgdAAg");
	this.shape_33.setTransform(493.8,758.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_34.setTransform(460.3,760.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgFAGgDQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_35.setTransform(448.1,758.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_36.setTransform(831.9,735.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgFQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAFgHACQgGACgJAAgAgUgmQgCAFAAALIAAAsQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_37.setTransform(819.7,735.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEAAgCADQgCACgBAFIAAAMIAABUg");
	this.shape_38.setTransform(807.5,735.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_39.setTransform(795.3,734.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_40.setTransform(783.1,735.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_41.setTransform(770.9,735.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBADIgBAKQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_42.setTransform(758.7,735.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAbBAIAAhWIgBgKIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHACQAGABAEAFQAEAFACAIQACAHAAAMIAABXg");
	this.shape_43.setTransform(746.5,735.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_44.setTransform(717.7,735.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgFQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAFgHACQgGACgJAAgAgUgmQgCAFAAALIAAAsQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_45.setTransform(705.5,735.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiAIgjAAIAAgVIBBAAIAACVIAkAAIAAATg");
	this.shape_46.setTransform(693.3,733.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_47.setTransform(664.4,735.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAdIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_48.setTransform(652.2,733.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQACAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_49.setTransform(623.4,735.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgFgFQgDgFgCgIQgCgIgBgMIAAgsQABgLACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAAKIAAAuQAAAPAHAEQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_50.setTransform(611.2,735.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEAAgCADQgCACgBAFIAAAMIAABUg");
	this.shape_51.setTransform(599,735.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_52.setTransform(586.8,735.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgFQgFgFgBgIQgCgIAAgMIAAgsQAAgLACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgDAHIAAAKIAAAuQAAAPAGAEQAEABAQAAIAJAAIANAAIAUAAIAAAUg");
	this.shape_53.setTransform(574.6,735.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQABAIABAMIAABXgAgMAFQgEAAgCACQgDADgBADIAAAKQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_54.setTransform(545.7,735.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEAAgCADQgCACgBAFIAAAMIAABUg");
	this.shape_55.setTransform(533.5,735.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_56.setTransform(521.3,734.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHABADAFQAEAFADAHQABAIAAAMIAABXg");
	this.shape_57.setTransform(509.1,735.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_58.setTransform(496.9,735.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgEQgEgFgCgIQgCgHAAgMIAAhXIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_59.setTransform(484.7,735.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgFQgFgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgDAHIAAAKIAAAuQAAAPAGAEQAEABAQAAIAJAAIANAAIAUAAIAAAUg");
	this.shape_60.setTransform(472.5,735.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABAEAFQADAFADAHQABAIAAAMIAABXg");
	this.shape_61.setTransform(460.3,735.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_62.setTransform(448.1,735.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_63.setTransform(831.9,710.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_64.setTransform(819.7,710.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAEAEADAIQABAIAAALIAABYg");
	this.shape_65.setTransform(775.6,710.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_66.setTransform(763.4,710.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAjAAIAAAUgAgRg7IAAgYIAjAAIAAAYg");
	this.shape_67.setTransform(751.2,708.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgBgHQgCgIAAgMIAAhXIAeAAIAABVIABALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAGAAIAdAAIAAhrIAfAAIAAB/g");
	this.shape_68.setTransform(739,710.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAVBYIAAgwIgmAAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIBFAAIAACvgAgKhCQgEAAgCACIgDAGIgBAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgWAAIgJABg");
	this.shape_69.setTransform(726.8,713.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_70.setTransform(682.7,717.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAFAEABAIQACAIAAALIAABYg");
	this.shape_71.setTransform(670.5,710.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_72.setTransform(658.3,710.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgUIBBAAIAACTIAkAAIAAAUg");
	this.shape_73.setTransform(646.1,708.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_74.setTransform(633.9,710.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUBRIgiihIAfAAIAWCAIACAAIAZiAIAdAAIgmChg");
	this.shape_75.setTransform(621.7,709.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_76.setTransform(577.6,710.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_77.setTransform(565.4,709.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_78.setTransform(553.2,710.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUBUIAAhrIgeAAIAAgUIAeAAQAAgMABgIQACgIAEgFQAEgEAGgCQAGgBAIAAIAoAAIAAAUIgdAAIgGABIgEACIgCAHIgBAKIAcAAIAAAUIgcAAIAABrg");
	this.shape_79.setTransform(541,708.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_80.setTransform(528.8,710.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEABgCACQgCACgBAFIAAAMIAABUg");
	this.shape_81.setTransform(516.6,710.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgzBRIAAihIBIAAQAHAAAGAEQAFAEAEAHQAEAHACAJQADAKAAAKQAAALgDAJQgCAJgDAFQgFAHgFADQgGAEgHAAIgpAAIAAA+gAgUAAIAcAAQAOAAAAgdQAAgfgOAAIgcAAg");
	this.shape_82.setTransform(504.4,709.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgUIBBAAIAACTIAkAAIAAAUg");
	this.shape_83.setTransform(460.3,708.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_84.setTransform(448.1,710.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHABAFADQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_85.setTransform(831.8,685.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_86.setTransform(819.6,685.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_87.setTransform(794.1,685.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_88.setTransform(781.9,685.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgLIAAgnQAAgLACgJQACgIAEgGQAEgFAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_89.setTransform(769.7,683.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_90.setTransform(757.5,685.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAYBAIgYgtIgYAtIggAAIAphAIgpg/IAfAAIAZAsIAbgsIAeAAIgqA+IAqBBg");
	this.shape_91.setTransform(745.3,685.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgwBRIAAihIBiAAIAAAUIhDAAIAAAzIAwAAIAAATIgwAAIAAAzIBDAAIAAAUg");
	this.shape_92.setTransform(733.1,684.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgyBVIAAgVIAjAAIAAiAIgjAAIAAgTIBBAAIAACTIAkAAIAAAVg");
	this.shape_93.setTransform(707.6,683.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_94.setTransform(695.4,685.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgLIAAgnQAAgLACgJQACgIAEgGQAEgFAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_95.setTransform(683.2,683.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_96.setTransform(657.7,685.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_97.setTransform(645.5,685.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgLIAAgnQAAgLACgJQACgIAEgGQAEgFAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_98.setTransform(633.3,683.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAiAAIAAAUgAgbhIIA7gLIAAAUIg7AGg");
	this.shape_99.setTransform(621.1,683.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgyBVIAAgVIAjAAIAAiAIgjAAIAAgTIBBAAIAACTIAkAAIAAAVg");
	this.shape_100.setTransform(608.9,683.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgyBVIAAgVIAjAAIAAiAIgjAAIAAgTIBBAAIAACTIAkAAIAAAVg");
	this.shape_101.setTransform(583.4,683.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgwBRIAAihIBiAAIAAAUIhDAAIAAAzIAwAAIAAATIgwAAIAAAzIBDAAIAAAUg");
	this.shape_102.setTransform(571.2,684.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgRAOIAAgaIAjAAIAAAag");
	this.shape_103.setTransform(545.7,690.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgyBVIAAgVIAjAAIAAiAIgjAAIAAgTIBBAAIAACTIAkAAIAAAVg");
	this.shape_104.setTransform(533.5,683.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgFQgEgEgCgHQgBgIAAgLIAAhYIAeAAIAABVIABAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAGAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_105.setTransform(521.3,685.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgwBAIAAgMIA9hfIg9AAIAAgUIBhAAIAAAQIg6BbIA6AAIAAAUg");
	this.shape_106.setTransform(509.1,685.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_107.setTransform(496.9,685.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAbBAIAAhWIgBgKIgCgGIgEgEIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYg");
	this.shape_108.setTransform(484.7,685.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgHQgCgIAAgLIAAhYIAeAAIAABVIABAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAFAAIAfAAIAAhrIAeAAIAAB/g");
	this.shape_109.setTransform(472.5,685.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_110.setTransform(460.3,685.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag0BRIAAihIBHAAQAHAAAGAEQAGADADAGQAFAGACAIQACAIAAAKQAAALgDAJQgDAIgIAFQAEACADAEIAGAJIADALIABAMQAAAJgCAIQgDAJgEAGQgDAGgHADQgFAEgHAAgAgVA9IAeAAQAGAAAFgHQADgIAAgLIgBgLIgCgIIgFgFQgDgCgDAAIgeAAgAgVgKIAbAAQAPAAAAgZQAAgMgEgGQgEgHgHAAIgbAAg");
	this.shape_111.setTransform(448.1,684.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_112.setTransform(831.9,660.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_113.setTransform(819.7,658.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_114.setTransform(807.5,660.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgwBRIAAgUIAhAAIAAh5IghAAIAAgUIBiAAIAAAUIgiAAIAAB5IAiAAIAAAUg");
	this.shape_115.setTransform(795.3,659.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_116.setTransform(745.1,660.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgyBVIAAgUIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAAUg");
	this.shape_117.setTransform(732.9,658.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_118.setTransform(682.7,660.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAHIAAAKIAAAeIABATQABAHACAEQADADAEABIAKACIAUAAIAAhXIgdAAIgFABg");
	this.shape_119.setTransform(670.5,658.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_120.setTransform(620.3,660.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_121.setTransform(608.1,659.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_122.setTransform(595.9,660.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_123.setTransform(583.7,660.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAALACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_124.setTransform(571.5,660.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAALACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_125.setTransform(521.3,660.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAbBAIAAhVIgBgLIgCgGIgEgEIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYg");
	this.shape_126.setTransform(509.1,660.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_127.setTransform(496.9,660.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_128.setTransform(484.7,660.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_129.setTransform(472.5,659.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAYBAIgYgtIgYAtIggAAIAphAIgpg/IAfAAIAZAsIAbgsIAeAAIgqA+IAqBBg");
	this.shape_130.setTransform(460.3,660.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_131.setTransform(448.1,660.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAATg");
	this.shape_132.setTransform(831.9,633.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_133.setTransform(819.7,635.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQAEAEABAIQACAIAAAMIAABXg");
	this.shape_134.setTransform(790.3,635.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_135.setTransform(778.1,635.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgCgHgBgJQABgIACgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_136.setTransform(748.7,635.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgCgEgGQgDgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgEADIgBAHIgBALIAAAtQAAAPAGAEQAEABARAAIAIAAIANAAIAUAAIAAAUg");
	this.shape_137.setTransform(736.5,635.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAjAAIAAATgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_138.setTransform(724.3,633.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgzBUIAAioIAfAAIAAAqIAnAAQASAAAIAKQAHAKAAAXIAAAmQAAAZgHAKQgIAKgSAAgAgUBBIAVAAIALgBQADAAADgDQACgCAAgEIABgNIAAgrIgBgLIgBgGIgEgEIgGgBIgdAAg");
	this.shape_139.setTransform(712.1,633.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgEQgEgFgBgIQgDgHAAgMIAAhXIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_140.setTransform(699.9,635.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_141.setTransform(670.5,635.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgtBRIAAgUIA1AAQADAAADgCIAEgGIADgIIABgLIgBgLQgBgFgCgCQgDgDgFgBIgKgBIgRAAQgIAAgHgEQgGgDgFgFQgDgGgDgIQgCgIAAgKQAAgKACgIQADgJADgGQAEgGAGgEQAGgEAHAAIBBAAIAAAUIg0AAQgEAAgCACQgDACgBADIgDAHIgBAJQAAALAEAGQADAGAHAAIAaAAQAIAAAGAEQAGADAFAGQAEAFACAIQACAJAAAKQAAAKgDAJQgBAJgFAHQgEAHgGAEQgFAEgIAAg");
	this.shape_142.setTransform(658.3,634.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRANIAAgZIAjAAIAAAZg");
	this.shape_143.setTransform(628.9,640.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgyBUIAAgTIAkAAIAAhYIgkAAIAAgTIBCAAIAABrIAiAAIAAATgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_144.setTransform(616.7,633.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_145.setTransform(604.5,635.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQAEAEABAIQACAIAAAMIAABXg");
	this.shape_146.setTransform(592.3,635.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_147.setTransform(580.1,635.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_148.setTransform(567.9,635.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEABgCACQgCACgBAFIAAAMIAABUg");
	this.shape_149.setTransform(555.7,635.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDACgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_150.setTransform(543.5,633.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgHAAgIQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_151.setTransform(514.1,635.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgGQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAGgHACQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_152.setTransform(501.9,635.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAATg");
	this.shape_153.setTransform(489.7,633.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgGQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgLIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_154.setTransform(460.3,635.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDACgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_155.setTransform(448.1,633.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_156.setTransform(831.9,608.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_157.setTransform(819.7,610.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_158.setTransform(807.5,609.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAjAAIAAAUgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_159.setTransform(795.3,608.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("Ag0BYIAAivIBIAAQAJAAAGACQAGACAFAFQADAFACAIQACAIABAMIAAAsQgBALgCAIQgBAIgEAEQgEAFgGADQgHACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIAAgKIAAgwIgBgLQgBgEgCgCIgHgCIgLAAIgWAAg");
	this.shape_160.setTransform(783.1,613.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgFgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAEQgEABgCACQgCADgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_161.setTransform(770.9,610.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgFQgFgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgDAHIAAAKIAAAuQAAAQAGADQAEACAQAAIAJAAIANgBIAUAAIAAAUg");
	this.shape_162.setTransform(758.7,610.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_163.setTransform(728.3,608.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgFgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_164.setTransform(716.1,610.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_165.setTransform(703.9,608.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgEQgEgFgCgIQgCgHAAgMIAAhXIAgAAIAABVIAAALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAeAAIAAhrIAgAAIAAB/g");
	this.shape_166.setTransform(691.7,610.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_167.setTransform(679.5,608.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgCgEgFQgDgFgCgIQgDgIAAgMIAAgsQAAgLADgIQACgIADgFQAEgFAGgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgBAHIgBAKIAAAuQAAAQAHADQADACARAAIAIAAIANgBIAVAAIAAAUg");
	this.shape_168.setTransform(667.3,610.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgFgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_169.setTransform(636.9,610.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_170.setTransform(624.7,608.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_171.setTransform(594.3,610.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_172.setTransform(582.1,610.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgPAAIgbAAIAABGIgeAAIAAihIBAAAQAUAAAIALQAJAKAAAYQAAAMgEAJQgFAKgLAEIAJAEQADACADAEQACADACAFQACAFgBAHIAAAzgAgUgIIAcAAQAHAAAEgHQADgHABgMQgBgMgDgHQgEgHgHAAIgcAAg");
	this.shape_173.setTransform(551.7,609.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgFAiIgfAAIAiihIAnAAIAiChgAgOAbIAdAAIgOhXIgBAAg");
	this.shape_174.setTransform(539.5,609.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgzBRIAAihIBIAAQAHAAAFAEQAGADAEAGQAEAGACAIQADAIAAAKIAABIQAAAJgDAIQgCAIgEAGQgEAGgGADQgFAEgHAAgAgUA9IAcAAQADAAADgCIAEgFIADgIIABgJIAAhIIgBgKIgDgHIgEgGQgDgCgDAAIgcAAg");
	this.shape_175.setTransform(527.3,609.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgVBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAEgGAGgDQAGgEAHAAIArAAQAHAAAGAEQAGADAEAGQAEAGACAIQACAIAAAKIAABIQAAAJgCAIQgCAIgEAGQgEAGgGADQgGAEgHAAgAgOg6IgFAGIgCAHIgBAKIAABIIABAJIACAIIAFAFQADACADAAIARAAQADAAADgCIAFgFIACgIIABgJIAAhIIgBgKIgDgIQgBgDgDgCQgDgCgDAAIgRAAQgDAAgDACg");
	this.shape_176.setTransform(515.1,609.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAXBRIgWg9IgBAAIgXA9IggAAIAohSIglhPIAgAAIAWA6IABAAIAXg6IAeAAIglBPIAlBSg");
	this.shape_177.setTransform(502.9,609.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgxBRIAAihIBiAAIAAAUIhCAAIAAAzIAwAAIAAATIgwAAIAAAzIBCAAIAAAUg");
	this.shape_178.setTransform(490.7,609.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgyBRIAAihIAfAAIAACNIBGAAIAAAUg");
	this.shape_179.setTransform(460.3,609.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgwBRIAAihIBiAAIAAAUIhDAAIAAAzIAwAAIAAATIgwAAIAAAzIBDAAIAAAUg");
	this.shape_180.setTransform(448.1,609.1);

	this.instance = new lib.EL_EXODAR();
	this.instance.parent = this;
	this.instance.setTransform(491,405,0.286,0.286);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("ABHEHIAAiAQAAhkgvAAIhZAAIAADkIhlAAIAAoNIDVAAQA+AAAbAjQAdAiAABNQAAAogOAeQgPAegmAPQARAFAMAIQANAIAJALQAJAMAEAQQAGAQAAAXIAAClgAhBgdIBbAAQAWAAANgWQAMgXAAglQAAgngMgXQgNgXgWAAIhbAAg");
	this.shape_181.setTransform(439.5,54);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_182.setTransform(399.8,54);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AinEHIAAoNIDrAAQAWAAATAMQASALANATQANAUAIAaQAHAaAAAfIAADtQAAAegHAaQgHAagNATQgNAUgTALQgTALgWAAgAhCDGIBcAAQAKAAAJgGQAJgHAGgLQAGgLADgOQADgOAAgPIAAjtQAAgQgDgOQgDgOgGgLQgGgLgJgGQgJgHgKAAIhcAAg");
	this.shape_183.setTransform(360.1,54);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AhHEHQgXAAgSgLQgTgLgNgUQgNgUgIgZQgHgaAAgeIAAjtQAAgfAHgaQAIgaANgUQANgTATgLQASgMAXAAICPAAQAXAAASAMQATALANATQANAUAIAaQAHAaAAAfIAADtQAAAegHAaQgHAZgNAUQgNATgTALQgSAMgYAAgAgwi9QgIAGgGALQgGALgEAOQgDAOAAAQIAADtQAAAPADAOQAEAOAFALQAGALAJAHQAJAGALAAIA5AAQAMAAAIgGQAJgHAGgKQAGgLADgOQADgOAAgQIAAjtQAAgQgDgPQgDgOgHgLQgGgKgJgGQgIgHgLAAIg5AAQgLAAgJAHg");
	this.shape_184.setTransform(320.4,54);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("ABLEHIhJjFIgDAAIhMDFIhnAAIB/kMIh4kBIBpAAIBJC8IADAAIBOi8IBfAAIh5EAIB4ENg");
	this.shape_185.setTransform(280.7,54);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AigEHIAAoNIFBAAIAABCIjbAAIAACkICfAAIAAA/IifAAIAACnIDbAAIAABBg");
	this.shape_186.setTransform(241,54);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AimEHIAAoNIBlAAIAAHMIDoAAIAABBg");
	this.shape_187.setTransform(161.5,54);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AigEHIAAoNIFBAAIAABCIjbAAIAACkICfAAIAAA/IifAAIAACnIDbAAIAABBg");
	this.shape_188.setTransform(121.9,54);

	this.VOLVER_EXODAR = new lib.VOLVER_1();
	this.VOLVER_EXODAR.name = "VOLVER_EXODAR";
	this.VOLVER_EXODAR.parent = this;
	this.VOLVER_EXODAR.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_EXODAR, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.LUPA_DARNASSUS = new lib.LUPA_1();
	this.LUPA_DARNASSUS.name = "LUPA_DARNASSUS";
	this.LUPA_DARNASSUS.parent = this;
	this.LUPA_DARNASSUS.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_DARNASSUS, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgRANIAAgaIAjAAIAAAag");
	this.shape_189.setTransform(496.9,840.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAANACAFQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_190.setTransform(484.7,835.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBACgCQADgCABgEIABgLIAAgIIgnAAQgIAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAHgCQAGgCAIAAIBGAAIAACFQAAAMgCAIQgCAIgEAFQgEAFgGACQgGACgJAAgAgKhDQgEABgCACQgDACgBAEIAAAKIAAAwQAAALACAFQADAEAHAAIAdAAIAAhXIgVAAIgKAAg");
	this.shape_191.setTransform(472.5,838.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgFgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAEQgEABgCACQgCADgCADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_192.setTransform(460.3,835.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAEACAIQACAIAAALIAABYg");
	this.shape_193.setTransform(831.8,810.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgFQgEgEgBgHQgDgIAAgLIAAhYIAgAAIAABVIAAAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAGAAIAfAAIAAhrIAeAAIAAB/g");
	this.shape_194.setTransform(819.6,810.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("Ag0BYIAAivIBIAAQAJAAAGACQAGACAFAFQADAFACAIQADAIAAAMIAAAsQAAALgDAIQgBAIgEAEQgEAFgGADQgHACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIAAgKIAAgwIgBgLQgBgEgCgCIgHgCIgLAAIgWAAg");
	this.shape_195.setTransform(769.7,813.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_196.setTransform(744.2,810.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgDgEgFQgEgGgCgIQgCgIAAgNIAAgmQAAgLACgIQACgJAEgGQAEgFAGgCQAHgCAJgBIAmAAIAAgoIAfAAIAACngAgNgVQgDABgBACIgDAHIAAALIAAAcIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhXIgdAAIgFACg");
	this.shape_197.setTransform(732,808.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_198.setTransform(719.8,810.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgJIAAgKQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_199.setTransform(707.6,810.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgDgEgFQgEgGgCgIQgCgIAAgNIAAgmQAAgLACgIQACgJAEgGQAEgFAGgCQAHgCAJgBIAmAAIAAgoIAfAAIAACngAgNgVQgDABgBACIgDAHIAAALIAAAcIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhXIgdAAIgFACg");
	this.shape_200.setTransform(695.4,808.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_201.setTransform(683.2,810.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_202.setTransform(621.1,810.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAEADAIQABAIAAALIAABYg");
	this.shape_203.setTransform(584.5,810.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgJIAAgKQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_204.setTransform(572.3,810.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgEQgDgFgDgIQgCgIAAgMIAAgsQAAgLACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAPAGAEQAEABARABIAIAAIANgBIAUAAIAAAUg");
	this.shape_205.setTransform(560.1,810.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_206.setTransform(522.4,810.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgzBUIAAinIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAmQAAAYgIALQgHALgSgBgAgUBAIAVAAIALAAQADAAACgCQACgDACgFIAAgLIAAgrIAAgLIgDgHIgDgDIgGgCIgdAAg");
	this.shape_207.setTransform(510.2,808.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgXBUQgHAAgFgDQgFgDgFgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgGQAFgFAFgDQAFgDAHAAIAuAAIAAgKQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAYQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABgAgRhJIA7gKIAAATIg7AHg");
	this.shape_208.setTransform(485.8,808.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAEADAIQABAIAAALIAABYg");
	this.shape_209.setTransform(460.3,810.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgFgCgJQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_210.setTransform(819.7,783.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAAqQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_211.setTransform(775.6,785.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgFgCgJQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_212.setTransform(763.4,783.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_213.setTransform(751.2,785.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgFgCgJQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_214.setTransform(739,783.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_215.setTransform(726.8,785.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_216.setTransform(714.6,785.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgFgCgIQgCgHgBgJQABgIACgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgpIgZAAIgKACg");
	this.shape_217.setTransform(690.2,785.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgpIgZAAIgKACg");
	this.shape_218.setTransform(646.1,785.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgwBAIAAgMIA9hfIg9AAIAAgUIBhAAIAAAQIg5BbIA5AAIAAAUg");
	this.shape_219.setTransform(633.9,785.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgpIgYAAIgLACg");
	this.shape_220.setTransform(621.7,785.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_221.setTransform(609.5,785.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_222.setTransform(597.3,785.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_223.setTransform(585.1,785.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_224.setTransform(541,785.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgRBVQgJAAgHgDQgGgDgEgFQgEgFgCgJQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJAAIAmAAIAAgoIAfAAIAACogAgNgVQgDAAgBADIgDAHIAAAKIAAAdIABAUQABAHACAEQADADAEABIAKABIAUAAIAAhWIgdAAIgFABg");
	this.shape_225.setTransform(528.8,783.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_226.setTransform(496.9,785.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgyBVIAAgVIAkAAIAAhWIgkAAIAAgVIBCAAIAABrIAjAAIAAAVgAgRg6IAAgZIAjAAIAAAZg");
	this.shape_227.setTransform(484.7,783.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_228.setTransform(472.5,785.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_229.setTransform(460.3,785.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALABIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAHAAAIQAAAUgHAKQgIALgOAAg");
	this.shape_230.setTransform(448.1,785.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQABAIABAMIAABXgAgMAFQgEABgCABQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_231.setTransform(831.9,760.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAEACAIQABAIAAAMIAABXg");
	this.shape_232.setTransform(819.7,760.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgFQgEgEgCgIQgBgHAAgLIAAhYIAeAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAGABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_233.setTransform(807.5,760.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_234.setTransform(772.6,760.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAbBAIAAhVIgBgLIgCgGIgEgEIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAAMIAABXg");
	this.shape_235.setTransform(760.4,760.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_236.setTransform(748.2,760.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgEgFQgFgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAFgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgCAGIgBALIAAAtQAAAQAGADQAEABARAAIAIAAIANAAIAUAAIAAAUg");
	this.shape_237.setTransform(736,760.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgCgHgBgJQABgIACgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQABAIAAAMIAABXgAgMAFQgEABgCABQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_238.setTransform(701,760.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAEACAIQACAIAAAMIAABXgAAFhAIgIgCIgGgDIgGgBQgHAAgBABQgCACAAAEIgRAAQAAgJAGgGQAHgFAOAAIAKABIAIACIAHACIAHABQAEAAADgCQADgBAAgDIARAAQgBAIgFAGQgHAGgOAAIgMgBg");
	this.shape_239.setTransform(664.4,758.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_240.setTransform(652.2,760.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgyBVIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAjAAIAAAUgAgRg6IAAgaIAjAAIAAAag");
	this.shape_241.setTransform(627.8,758.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgYBUQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgFQAEgGAGgDQAFgDAGAAIAvAAIAAgKQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQACAIgBAMIAABXgAgMAZQgEABgCABQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABgAgRhIIA7gLIAAAUIg7AGg");
	this.shape_242.setTransform(580.7,758.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgHQgCgHAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_243.setTransform(556.3,760.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_244.setTransform(544.1,760.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgFAGgDQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_245.setTransform(509.1,758.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQACAIAAAMIAABXgAgMAFQgEABgCABQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_246.setTransform(496.9,760.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgFAGgDQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_247.setTransform(484.7,758.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgIQgCgHAAgLIAAhYIAeAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_248.setTransform(472.5,760.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgyBVIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAjAAIAAAUgAgRg6IAAgaIAjAAIAAAag");
	this.shape_249.setTransform(460.3,758.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgDAGIAAALIAAAtQAAAQAHADQADABAQAAIAJAAIANAAIAUAAIAAAUg");
	this.shape_250.setTransform(448.1,760.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQABAIABAMIAABXgAgMAFQgEAAgCACQgDADgBADIAAAKQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_251.setTransform(831.9,735.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgRANIAAgaIAjAAIAAAag");
	this.shape_252.setTransform(778.7,740.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABAEAFQAEAFACAHQABAIAAAMIAABXg");
	this.shape_253.setTransform(754.3,735.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgBgIQgCgHAAgMIAAhXIAeAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_254.setTransform(742.1,735.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQABAIABAMIAABXgAgMAFQgEAAgCACQgCADgBADIgBAKQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_255.setTransform(611.2,735.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHABADAFQAFAFABAHQACAIAAAMIAABXg");
	this.shape_256.setTransform(599,735.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgCgHAAgJQAAgIACgIQADgHAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQABAIABAMIAABXgAgMAFQgEAAgCACQgDADgBADIAAAKQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_257.setTransform(586.8,735.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_258.setTransform(550.2,735.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAWBRIAAhHIgqAAIAABHIggAAIAAihIAgAAIAABHIAqAAIAAhHIAfAAIAAChg");
	this.shape_259.setTransform(538,734.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAGACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBADIgBAKQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_260.setTransform(484.7,735.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAEACAIQACAIAAALIAABYg");
	this.shape_261.setTransform(831.8,710.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgEgEQgEgFgDgIQgCgIAAgMIAAgsQAAgLACgIQADgIAEgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAQAGADQAEACARAAIAIAAIANgBIAUAAIAAAUg");
	this.shape_262.setTransform(807.4,710.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_263.setTransform(780.1,710.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACAEAEQADAEACAIQACAIAAALIAABYg");
	this.shape_264.setTransform(755.7,710.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgEQgEgFgCgHQgCgIAAgMIAAhXIAgAAIAABVIAAALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAGAAIAeAAIAAhrIAgAAIAAB/g");
	this.shape_265.setTransform(743.5,710.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgnBtIAAgUIAZAAIALgBQADgBACgDQACgDABgEIAAgMIAAhwIgsAAIAAgUIBLAAIAACIQAAAMgBAHQgCAIgEAEQgEAFgGACQgHACgJAAgAADhTIAAgZIAlAAIAAAZg");
	this.shape_266.setTransform(731.4,711.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_267.setTransform(703.9,717.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_268.setTransform(691.7,710.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgEQgEgFgCgHQgCgIAAgMIAAhXIAgAAIAABVIAAALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_269.setTransform(667.3,710.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgCgHAAgJQAAgIACgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_270.setTransform(627.8,710.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgUIBBAAIAACTIAkAAIAAAUg");
	this.shape_271.setTransform(615.6,708.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgoIAfAAIAACngAgNgWQgDABgBADIgDAHIAAALIAAAcIABAUQABAHACADQADAFAEAAIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_272.setTransform(576,708.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_273.setTransform(548.7,710.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgUIBBAAIAACTIAkAAIAAAUg");
	this.shape_274.setTransform(536.5,708.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("Ag0BYIAAivIBIAAQAIAAAHACQAGACAFAFQADAFACAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIABgKIAAgwIgBgLQgCgEgCgCIgHgCIgLAAIgWAAg");
	this.shape_275.setTransform(524.3,713.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAbBAIAAhWIgBgKIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHACQAGACAEAEQAEAFACAIQACAHAAALIAABYg");
	this.shape_276.setTransform(512.1,710.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgOBRIAAiNIgjAAIAAgUIBjAAIAAAUIgiAAIAACNg");
	this.shape_277.setTransform(487.7,709.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgUIBBAAIAACTIAkAAIAAAUg");
	this.shape_278.setTransform(460.3,708.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_279.setTransform(448.1,710.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAEAFADAHQABAIAAALIAABYg");
	this.shape_280.setTransform(831.9,685.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_281.setTransform(793.4,685.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgyBVIAAgVIAkAAIAAhWIgkAAIAAgVIBCAAIAABrIAjAAIAAAVgAgRg6IAAgZIAjAAIAAAZg");
	this.shape_282.setTransform(769,683.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_283.setTransform(744.6,685.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_284.setTransform(732.4,685.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHABAFADQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_285.setTransform(706.2,685.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_286.setTransform(694,685.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAFADAHQABAIAAALIAABYg");
	this.shape_287.setTransform(669.6,685.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgyBVIAAgVIAkAAIAAhWIgkAAIAAgVIBCAAIAABrIAiAAIAAAVgAgRg6IAAgZIAkAAIAAAZg");
	this.shape_288.setTransform(645.2,683.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgTBAIglh/IAgAAIAYBgIAAAAIAZhgIAgAAIglB/g");
	this.shape_289.setTransform(633,685.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_290.setTransform(620.8,685.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_291.setTransform(608.6,685.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_292.setTransform(596.4,685.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgFQgEgEgCgHQgCgIAAgLIAAhYIAgAAIAABVIAAAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_293.setTransform(584.2,685.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHABAFADQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_294.setTransform(572,685.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgFQgEgEgCgHQgCgIAAgLIAAhYIAgAAIAABVIAAAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_295.setTransform(559.8,685.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AguBRIAAgUIA1AAQAEAAADgCIAEgGIAEgIIABgLIgBgLQgBgFgEgCQgCgDgEgBIgLgBIgRAAQgIAAgGgEQgHgDgEgFQgEgGgDgIQgCgIAAgKQAAgKACgIQADgJAEgGQAEgGAFgEQAGgEAHAAIBAAAIAAAUIgzAAQgEAAgCACQgDACgCADIgDAHIAAAJQAAALADAGQAEAGAHAAIAaAAQAIAAAGAEQAGADAEAGQAFAFACAIQACAJAAAKQAAAKgCAJQgCAJgFAHQgEAHgGAEQgGAEgGAAg");
	this.shape_296.setTransform(547.6,684.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_297.setTransform(521.3,685.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQADAFACAHQACAIAAALIAABYg");
	this.shape_298.setTransform(496.9,685.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGABQAHADAEAEQAEAFACAHQABAIAAALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_299.setTransform(484.7,685.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_300.setTransform(472.5,685.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AggBYIAUg0Igth7IAiAAIAaBTIABAAIAchTIAaAAIg/Cvg");
	this.shape_301.setTransform(460.3,688.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgOBRIAAiNIgjAAIAAgUIBjAAIAAAUIgiAAIAACNg");
	this.shape_302.setTransform(448.1,684.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_303.setTransform(831.8,660.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgyBVIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAiAAIAAAUgAgRg6IAAgaIAkAAIAAAag");
	this.shape_304.setTransform(807.4,658.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEABgCADQgCACgBAFIAAANIAABTg");
	this.shape_305.setTransform(758.6,660.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAPAHAEQADACAQgBIAJAAIANAAIAVAAIAAAUg");
	this.shape_306.setTransform(734.2,660.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_307.setTransform(722,660.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_308.setTransform(667.3,660.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgFQgEgEgCgIQgCgHAAgLIAAhYIAfAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_309.setTransform(642.9,660.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_310.setTransform(630.7,660.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAGABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_311.setTransform(588.2,660.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgyBRIAAihIAfAAIAACNIBGAAIAAAUg");
	this.shape_312.setTransform(576,659.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_313.setTransform(521.3,660.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACAEAFQADAFACAHQACAIAAALIAABYg");
	this.shape_314.setTransform(496.9,660.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAGABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_315.setTransform(484.7,660.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgxBVIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg6IAAgaIAkAAIAAAag");
	this.shape_316.setTransform(472.5,658.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAhihIApAAIAhChgAgOAbIAdAAIgNhXIgDAAg");
	this.shape_317.setTransform(448.1,659.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQABAIABAMIAABXgAgMAFQgEAAgCACQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_318.setTransform(831.7,635.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGIgEgEIgFgBIgeAAIAABrIgfAAIAAioIAfAAIAAAqIAnAAQAJgBAHACQAGACAEAFQAEAEACAIQACAHAAAMIAABXg");
	this.shape_319.setTransform(737.8,633.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgGgCgFgGQgEgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAEgFQAFgFAGgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAALIAAAtQAAAPAHAEQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_320.setTransform(725.6,635.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADADAEQAEAEADAIQABAIAAAMIAABXg");
	this.shape_321.setTransform(701.2,635.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQACAIAAAMIAABXgAgMAFQgEAAgCACQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_322.setTransform(672.5,635.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgGQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAGgHACQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_323.setTransform(578.6,635.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgUBUIAAhrIgeAAIAAgTIAeAAQAAgNABgIQACgIAEgFQAEgEAGgCQAGgCAIAAIAoAAIAAAUIgdAAIgGACIgEADIgCAGIgBALIAcAAIAAATIgcAAIAABrg");
	this.shape_324.setTransform(566.4,633.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAATg");
	this.shape_325.setTransform(554.2,633.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgHAAgIQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_326.setTransform(513.4,635.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgGQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAGgHACQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_327.setTransform(501.2,635.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiBIgjAAIAAgUIBBAAIAACVIAkAAIAAATg");
	this.shape_328.setTransform(489,633.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgJQACgIAEgFQAEgGAGgCQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDACgBACIgDAGIAAALIAAAeIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_329.setTransform(448.1,633.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_330.setTransform(807.5,609.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgCgHAAgJQAAgIACgHQACgIADgFQAFgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQABAIAAAMIAABXgAgMAEQgEABgCACQgCADgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_331.setTransform(714.6,610.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgBgIQgCgHAAgMIAAhXIAeAAIAABVIABALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_332.setTransform(690.2,610.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAiAAIAAAUgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_333.setTransform(678,608.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgFQgFgFgBgIQgCgIAAgMIAAgsQAAgLACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAAKIAAAuQAAAQAHADQADACAQAAIAJAAIANgBIAVAAIAAAUg");
	this.shape_334.setTransform(665.8,610.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgFgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAEQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_335.setTransform(633.9,610.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_336.setTransform(621.7,608.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgtBRIAAgUIA1AAQADAAADgCIAFgGIACgIIABgLIgBgLQgBgFgCgCQgDgDgFgBIgKgBIgRAAQgIAAgHgEQgGgDgFgFQgDgGgDgIQgCgIAAgKQAAgKACgIQADgJADgGQAEgGAGgEQAGgEAHAAIBBAAIAAAUIg0AAQgEAAgCACQgDACgBADIgEAHIAAAJQAAALAEAGQADAGAHAAIAaAAQAIAAAGAEQAGADAFAGQAEAFACAIQACAJAAAKQAAAKgDAJQgCAJgEAHQgEAHgGAEQgFAEgIAAg");
	this.shape_337.setTransform(545.7,609.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgUBRQgIAAgGgEQgFgDgEgGQgEgGgCgIQgDgIAAgJIAAh1IAeAAIAAB1IABAJIADAIIAFAFQACACADAAIAQAAQAEAAADgCIAEgFIADgIIABgJIAAh1IAdAAIAAB1QAAAJgBAIQgDAIgEAGQgEAGgGADQgFAEgHAAg");
	this.shape_338.setTransform(533.5,609.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgtBRIAAgUIA1AAQADAAADgCIAFgGIACgIIABgLIgBgLQgBgFgCgCQgDgDgEgBIgLgBIgRAAQgIAAgHgEQgGgDgEgFQgEgGgDgIQgCgIAAgKQAAgKACgIQADgJAEgGQADgGAGgEQAGgEAHAAIBBAAIAAAUIg0AAQgDAAgDACQgDACgBADIgEAHIAAAJQAAALAEAGQAEAGAGAAIAaAAQAIAAAGAEQAGADAFAGQAEAFACAIQACAJAAAKQAAAKgDAJQgCAJgEAHQgEAHgGAEQgGAEgHAAg");
	this.shape_339.setTransform(521.3,609.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgtBRIAAgUIA1AAQADAAADgCIAEgGIAEgIIABgLIgBgLQgCgFgDgCQgCgDgFgBIgKgBIgRAAQgIAAgGgEQgHgDgFgFQgEgGgCgIQgCgIAAgKQAAgKACgIQACgJAEgGQAEgGAGgEQAGgEAHAAIBAAAIAAAUIgzAAQgEAAgCACQgDACgCADIgCAHIgBAJQAAALADAGQAEAGAHAAIAaAAQAIAAAGAEQAHADAEAGQAEAFACAIQACAJAAAKQAAAKgCAJQgCAJgFAHQgEAHgGAEQgFAEgIAAg");
	this.shape_340.setTransform(509.1,609.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgFAiIgfAAIAhihIApAAIAhChgAgOAbIAdAAIgNhXIgDAAg");
	this.shape_341.setTransform(496.9,609.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AARBRIgshsIAABsIgYAAIAAihIAfAAIAvB5IAAh5IAZAAIAAChg");
	this.shape_342.setTransform(484.7,609.1);

	this.instance_1 = new lib.DARNASSUS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,405,0.378,0.371);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AiVEHIAAhBICtAAQAMAAAJgGQAKgHAFgMQAHgLAEgRQADgQAAgSQgBgVgDgPQgEgPgIgJQgJgJgOgEQgPgDgUAAIg6AAQgaAAgUgLQgWgLgOgSQgOgTgGgbQgIgaAAghQAAgfAIgcQAGgbAOgVQANgUASgMQASgNAXAAIDVAAIAABCIiqAAQgLAAgJAGQgIAGgGAKQgGALgDANQgDANAAAPQAAAiAMAVQANAVAVAAIBXAAQAaAAAVALQATALAOATQANATAIAbQAGAbAAAgQAAAigHAeQgHAdgPAWQgNAWgSANQgUANgXAAg");
	this.shape_343.setTransform(439.4,54);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhGEHQgXAAgSgLQgTgLgNgUQgNgTgHgaQgHgaAAgeIAAl+IBhAAIAAF+QgBAQAEAOQADAOAGALQAGAKAJAHQAIAGALAAIA3AAQAKAAAIgGQAJgHAGgKQAGgLADgOQADgOAAgQIAAl+IBhAAIAAF+QABAegIAaQgGAagOATQgNAUgSALQgSALgYAAg");
	this.shape_344.setTransform(399.8,54);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AiVEHIAAhBICtAAQAMAAAJgGQAKgHAFgMQAIgLACgRQAEgQAAgSQAAgVgEgPQgDgPgJgJQgJgJgPgEQgOgDgVAAIg5AAQgaAAgUgLQgWgLgNgSQgPgTgGgbQgIgaAAghQAAgfAIgcQAGgbAOgVQAMgUATgMQASgNAYAAIDUAAIAABCIiqAAQgLAAgJAGQgIAGgGAKQgGALgDANQgDANAAAPQAAAiANAVQAMAVAVAAIBWAAQAbAAAVALQATALAOATQANATAIAbQAGAbAAAgQAAAigHAeQgIAdgOAWQgNAWgSANQgUANgWAAg");
	this.shape_345.setTransform(360,54);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AiVEHIAAhBICtAAQAMAAAJgGQAKgHAFgMQAIgLACgRQADgQABgSQAAgVgEgPQgEgPgIgJQgJgJgPgEQgNgDgWAAIg4AAQgbAAgUgLQgWgLgNgSQgOgTgIgbQgHgaAAghQAAgfAHgcQAIgbANgVQAMgUATgMQASgNAYAAIDTAAIAABCIiqAAQgKAAgJAGQgIAGgGAKQgGALgDANQgDANAAAPQAAAiANAVQAMAVAUAAIBXAAQAbAAAUALQAVALANATQAOATAGAbQAHAbAAAgQAAAigHAeQgIAdgNAWQgOAWgTANQgTANgWAAg");
	this.shape_346.setTransform(320.3,54);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AA3EHIiQlgIAAFgIhPAAIAAoNIBlAAICdGLIAAmLIBPAAIAAINg");
	this.shape_347.setTransform(240.9,54);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("ABIEHIAAiAQAAhkgxAAIhZAAIAADkIhlAAIAAoNIDWAAQA+AAAcAjQAcAiAABNQAAAogPAeQgPAegkAPQAQAFANAIQAMAIAJALQAIAMAGAQQAEAQAAAXIAAClgAhCgdIBcAAQAWAAAMgWQANgXAAglQAAgngNgXQgMgXgWAAIhcAAg");
	this.shape_348.setTransform(201.3,54);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_349.setTransform(161.6,54);

	this.VOLVER_DARNASSUS = new lib.VOLVER_1();
	this.VOLVER_DARNASSUS.name = "VOLVER_DARNASSUS";
	this.VOLVER_DARNASSUS.parent = this;
	this.VOLVER_DARNASSUS.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_DARNASSUS, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#990000").s().p("AggB5QgLAAgIgFQgJgFgGgJQgGgJgEgMQgDgMAAgOIAAhtQAAgOADgMQAEgMAGgJQAGgJAJgFQAIgFALAAIBBAAQALAAAIAFQAJAFAGAJQAGAJADAMQAEAMAAAOIAABtQAAAOgDAMQgEAMgGAJQgGAJgIAFQgJAFgLAAgAgVhXQgEADgDAFIgFAMQgBAGAAAHIAABtQAAAIABAGIAFALQACAGAEADQAEADAGAAIAaAAQAFAAAEgDQAEgDACgFQADgFACgHQABgGAAgIIAAhtQAAgHgBgHQgCgGgDgFQgDgFgEgDQgEgDgEAAIgaAAQgGAAgDADg");
	this.shape_350.setTransform(764.7,383.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#990000").s().p("AAZB5IhBihIAAChIglAAIAAjxIAvAAIBIC1IAAi1IAkAAIAADxg");
	this.shape_351.setTransform(746.4,383.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#990000").s().p("AhJB5IAAjxICTAAIAAAeIhkAAIAABMIBJAAIAAAcIhJAAIAABOIBkAAIAAAdg");
	this.shape_352.setTransform(728,383.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#990000").s().p("AggB5QgKAAgJgFQgJgFgGgJQgGgJgDgMQgDgMAAgOIAAivIAtAAIAACvIABAOIAEAMQADAFAEADQAEADAFAAIAZAAQAEAAAEgDQAEgDADgFQADgFABgHQACgGAAgIIAAivIAtAAIAACvQAAAOgEAMQgDAMgGAJQgGAJgIAFQgJAFgLAAg");
	this.shape_353.setTransform(709.7,383.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#990000").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape_354.setTransform(691.3,383.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#990000").s().p("AgVB5IAAjTIg1AAIAAgeICVAAIAAAeIgzAAIAADTg");
	this.shape_355.setTransform(673,383.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#990000").s().p("AhMB5IAAjxIAvAAIAADUIBqAAIAAAdg");
	this.shape_356.setTransform(636.3,383.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#990000").s().p("AhJB5IAAjxICTAAIAAAeIhkAAIAABMIBJAAIAAAcIhJAAIAABOIBkAAIAAAdg");
	this.shape_357.setTransform(617.9,383.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#990000").s().p("AhMB5IAAjxIBsAAQAKAAAIAFQAJAFAGAJQAGAJADAMQADAMAAAOIAABtQAAAOgDAMQgDAMgGAJQgGAJgJAFQgIAFgKAAgAgeBcIAqAAQAFAAAEgDQAEgDACgGQADgFACgGQABgGAAgIIAAhtQAAgHgBgGQgCgHgDgFQgCgFgEgDQgEgDgFAAIgqAAg");
	this.shape_358.setTransform(599.6,383.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#990000").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_359.setTransform(562.9,383.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#990000").s().p("AAsB5IAAiYIgaCYIgkAAIgYiXIAACXIgjAAIAAjxIAuAAIAfC4IAfi4IAvAAIAADxg");
	this.shape_360.setTransform(544.5,383.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#990000").s().p("AhKB5IAAgdIA0AAIAAi2Ig0AAIAAgeICVAAIAAAeIg0AAIAAC2IA0AAIAAAdg");
	this.shape_361.setTransform(526.2,383.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#990000").s().p("AgZB5QgLAAgIgFQgIgFgGgJQgGgJgEgMQgDgMAAgOIAAhtQAAgOADgMQAEgMAGgJQAGgJAIgFQAJgFAKAAIBhAAIAAAeIhNAAQgFAAgEADQgEADgDAFQgDAFgBAHQgCAGAAAHIAABtQAAAIACAGQABAGADAFQADAGAEADQAEADAFAAIBNAAIAAAdg");
	this.shape_362.setTransform(507.8,383.6);

	this.LUPA_CIMA = new lib.LUPA_1();
	this.LUPA_CIMA.name = "LUPA_CIMA";
	this.LUPA_CIMA.parent = this;
	this.LUPA_CIMA.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_CIMA, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_2 = new lib.CIMA();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491,405,0.286,0.286);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAEABAIQACAIAAAMIAABXg");
	this.shape_363.setTransform(692.1,760.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgFQgEgEgCgIQgCgHAAgLIAAhYIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_364.setTransform(570.1,760.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgHQgCgHAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_365.setTransform(557.9,760.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgHQgCgHAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_366.setTransform(533.5,760.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgHQgCgHAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_367.setTransform(472.5,760.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgCgHAAgJQAAgIACgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQABAIABAMIAABXgAgMAFQgEABgCABQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_368.setTransform(460.3,760.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABAEAFQADAFACAHQACAIAAAMIAABXg");
	this.shape_369.setTransform(831.9,735.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQACAIgBAMIAABXgAgMAFQgEAAgCACQgDADAAADIgBAKQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_370.setTransform(723.8,735.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgTBAIglh/IAgAAIAYBgIABAAIAYhgIAgAAIglB/g");
	this.shape_371.setTransform(711.6,735.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgCgHAAgJQAAgIACgIQADgHAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQABAIABAMIAABXgAgMAFQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_372.setTransform(603.4,735.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAiAAIAAATgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_373.setTransform(591.2,733.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAdIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_374.setTransform(579,733.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_375.setTransform(566.8,735.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBADIgBAKQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_376.setTransform(519.7,735.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiAIgjAAIAAgVIBBAAIAACVIAkAAIAAATg");
	this.shape_377.setTransform(507.5,733.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiAIgjAAIAAgVIBBAAIAACVIAkAAIAAATg");
	this.shape_378.setTransform(495.3,733.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgCgHgBgJQABgIACgIQACgHADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBADIgBAKQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_379.setTransform(448.1,735.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgEQgDgFgCgIQgDgIAAgMIAAgsQAAgLADgIQACgIADgFQAEgFAGgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgBAHIgBAKIAAAuQAAAQAHADQADACARAAIAIAAIANgBIAVAAIAAAUg");
	this.shape_380.setTransform(795.1,710.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgEQgFgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgDADIgDAHIAAAKIAAAuQAAAQAGADQAEACAQAAIAJAAIANgBIAVAAIAAAUg");
	this.shape_381.setTransform(782.9,710.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_382.setTransform(770.7,710.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AggBYIAUg0Igth7IAiAAIAaBTIABAAIAchTIAaAAIg/Cvg");
	this.shape_383.setTransform(707.9,713.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_384.setTransform(682.6,710.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgoIAfAAIAACngAgNgWQgDABgBADIgDAHIAAALIAAAcIABAUQABAHACADQADAFAEAAIAKABIAUAAIAAhXIgdAAIgFABg");
	this.shape_385.setTransform(658.2,708.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_386.setTransform(608.5,710.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgBgHQgCgIAAgMIAAhXIAeAAIAABVIABALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAFAAIAfAAIAAhrIAeAAIAAB/g");
	this.shape_387.setTransform(558.8,710.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_388.setTransform(496.9,710.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_389.setTransform(484.7,710.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg7IAAgYIAkAAIAAAYg");
	this.shape_390.setTransform(472.5,708.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_391.setTransform(460.3,710.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAGACAEAFQAFAFABAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgBgEgDgCIgHgCIgLAAIgVAAg");
	this.shape_392.setTransform(448.1,713.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgzBVIAAioIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAnQAAAXgIALQgHALgSAAgAgUBAIAVAAIAKAAQAEAAACgDQACgCABgFIABgLIAAgsIgBgKIgCgHIgDgDIgGgBIgdAAg");
	this.shape_393.setTransform(751.2,683.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_394.setTransform(577.6,685.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADADAEQAFAFACAHQABAIAAALIAABYg");
	this.shape_395.setTransform(484.7,685.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_396.setTransform(472.5,685.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgEQgFgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgDAGIAAAKIAAAuQAAAPAHAEQADABAQABIAJAAIANgBIAUAAIAAAUg");
	this.shape_397.setTransform(448.1,685.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_398.setTransform(797,660.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgxBVIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg6IAAgaIAjAAIAAAag");
	this.shape_399.setTransform(772.6,658.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgFQgEgEgCgIQgCgHAAgLIAAhYIAfAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_400.setTransform(760.4,660.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACAEAFQAEAFABAHQACAIAAALIAABYg");
	this.shape_401.setTransform(711.6,660.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgDAGIAAALIAAAtQAAAPAGAEQAEACAQgBIAJAAIANAAIAUAAIAAAUg");
	this.shape_402.setTransform(687.2,660.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgYBUQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgFQAEgGAGgDQAFgDAGAAIAvAAIAAgKQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAZQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABgAgRhIIA7gLIAAAUIg7AGg");
	this.shape_403.setTransform(652.2,658.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBADgCQACgCABgEIABgLIAAgIIgmAAQgKAAgGgCQgHgDgEgFQgDgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIBFAAIAACFQAAAMgCAIQgCAIgDAFQgEAFgHACQgGACgJAAgAgJhDQgFABgCACQgDACAAAEIgBAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgVAAIgJAAg");
	this.shape_404.setTransform(531.9,663.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgFQgEgEgCgIQgBgHAAgLIAAhYIAeAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_405.setTransform(507.5,660.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAdBRIAAhmIgRBmIgXAAIgRhlIAABlIgXAAIAAihIAfAAIAUB6IAVh6IAfAAIAAChg");
	this.shape_406.setTransform(495.3,659.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAHIAAAKIAAAeIABATQABAHACAEQADADAEABIAKACIAUAAIAAhXIgdAAIgFABg");
	this.shape_407.setTransform(448.1,658.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQADAEACAIQACAIAAAMIAABXg");
	this.shape_408.setTransform(783.1,635.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_409.setTransform(745.1,635.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQACAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_410.setTransform(694.9,635.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgFgGQgDgEgCgIQgCgIgBgMIAAgrQABgMACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAALIAAAtQAAAPAHAEQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_411.setTransform(682.7,635.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAiAAIAAATgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_412.setTransform(670.5,633.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgzBUIAAioIAfAAIAAAqIAnAAQASAAAIAKQAHAKAAAXIAAAmQAAAZgHAKQgIAKgSAAgAgUBBIAVAAIAKgBQAEAAADgDQABgCABgEIABgNIAAgrIgBgLIgCgGIgDgEIgGgBIgdAAg");
	this.shape_413.setTransform(658.3,633.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgBgIQgCgHAAgMIAAhXIAfAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_414.setTransform(646.1,635.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAEAEADAIQABAIAAAMIAABXg");
	this.shape_415.setTransform(608.1,635.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEABgCACQgCACgBAFIAAAMIAABUg");
	this.shape_416.setTransform(583.7,635.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQABAIABAMIAABXgAgMAFQgEAAgCACQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_417.setTransform(559.3,635.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_418.setTransform(547.1,634.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQACAIgBAMIAABXgAgMAFQgEAAgCACQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_419.setTransform(509.1,635.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_420.setTransform(496.9,634.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgyBUIAAgTIAkAAIAAhYIgkAAIAAgTIBCAAIAABrIAjAAIAAATgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_421.setTransform(484.7,633.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("Ag0BYIAAivIBIAAQAIAAAHACQAGACAFAFQAEAFABAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIABgKIAAgwIgBgLQgCgEgCgCIgHgCIgLAAIgWAAg");
	this.shape_422.setTransform(472.5,638.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgCgHAAgJQAAgIACgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQABAIABAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_423.setTransform(460.3,635.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgGQgFgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgDAHIAAALIAAAtQAAAPAHAEQADABAQAAIAJAAIANAAIAUAAIAAAUg");
	this.shape_424.setTransform(448.1,635.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgFgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQACAIAAAMIAABXgAgMAEQgEABgCACQgCADgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_425.setTransform(819.6,610.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAjAAIAAAUgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_426.setTransform(783,608.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgFgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQACAIAAAMIAABXgAgMAEQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_427.setTransform(735.5,610.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_428.setTransform(675.9,610.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AARBRIgshsIAABsIgYAAIAAihIAfAAIAwB5IAAh5IAYAAIAAChg");
	this.shape_429.setTransform(628.4,609.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgVBRQgHAAgFgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAh1IAdAAIAAB1IABAJIADAIIAEAFQADACAEAAIAQAAQADAAACgCIAFgFIACgIIABgJIAAh1IAeAAIAAB1QAAAJgCAIQgCAIgEAGQgEAGgGADQgFAEgIAAg");
	this.shape_430.setTransform(604,609.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgOAAIgbAAIAABGIggAAIAAihIBCAAQATAAAIALQAJAKAAAYQAAAMgFAJQgEAKgMAEIAJAEQAEACADAEQADADABAFQABAFABAHIAAAzgAgTgIIAbAAQAHAAADgHQAEgHABgMQgBgMgEgHQgDgHgHAAIgbAAg");
	this.shape_431.setTransform(591.8,609.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAdBRIAAhmIgRBmIgYAAIgQhlIAABlIgXAAIAAihIAfAAIAUB6IAVh6IAfAAIAAChg");
	this.shape_432.setTransform(472.5,609.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgxBRIAAgUIAiAAIAAh5IgiAAIAAgUIBiAAIAAAUIghAAIAAB5IAhAAIAAAUg");
	this.shape_433.setTransform(460.3,609.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgQBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAFgGAFgDQAGgEAHAAIBAAAIAAAUIgzAAQgDAAgDACIgEAGIgDAHIgBAKIAABIIABAJIADAIIAEAFQADACADAAIAzAAIAAAUg");
	this.shape_434.setTransform(448.1,609.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AhFEHQgYAAgTgLQgSgLgNgUQgNgTgHgaQgGgaAAgeIAAl+IBfAAIAAF+QAAAQAEAOQADAOAGALQAGAKAIAHQAJAGALAAIA3AAQAKAAAJgGQAIgHAGgKQAGgLADgOQADgOAAgQIAAl+IBiAAIAAF+QgBAegGAaQgIAagMATQgNAUgTALQgTALgXAAg");
	this.shape_435.setTransform(558.6,54);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("ABHEHIAAiAQABhkgxAAIhZAAIAADkIhkAAIAAoNIDVAAQA+AAAcAjQAcAiAABNQAAAogPAeQgPAeglAPQARAFANAIQAMAIAJALQAIAMAGAQQAEAQAAAXIAAClgAhCgdIBcAAQAWAAAMgWQANgXAAglQAAgngNgXQgMgXgWAAIhcAAg");
	this.shape_436.setTransform(518.9,54);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AguEHIAAnLIhzAAIAAhCIFCAAIAABCIhtAAIAAHLg");
	this.shape_437.setTransform(479.2,54);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("ABgEHIAAlMIg5FMIhOAAIg0lJIAAFJIhNAAIAAoNIBlAAIBDGQIBEmQIBlAAIAAINg");
	this.shape_438.setTransform(201.2,54);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AigEHIAAhBIBvAAIAAmKIhvAAIAAhCIFBAAIAABCIhuAAIAAGKIBuAAIAABBg");
	this.shape_439.setTransform(161.5,54);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("Ag3EHQgXAAgSgLQgTgLgNgUQgNgTgGgaQgIgaAAgeIAAjtQAAgfAIgaQAGgaAOgUQANgTATgLQASgMAWAAIDTAAIAABCIioAAQgLAAgIAHQgIAGgHALQgGALgDAOQgEAOABAQIAADtQgBAPAEAOQADAOAGALQAGALAJAHQAIAGALAAICoAAIAABBg");
	this.shape_440.setTransform(121.9,54);

	this.VOLVER_CIMA = new lib.VOLVER_1();
	this.VOLVER_CIMA.name = "VOLVER_CIMA";
	this.VOLVER_CIMA.parent = this;
	this.VOLVER_CIMA.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_CIMA, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#990000").s().p("AAsB5IAAiYIgaCYIgjAAIgZiXIAACXIgjAAIAAjxIAuAAIAfC4IAfi4IAvAAIAADxg");
	this.shape_441.setTransform(673,383.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#990000").s().p("AAsB5IAAiYIgaCYIgjAAIgZiXIAACXIgjAAIAAjxIAuAAIAfC4IAfi4IAvAAIAADxg");
	this.shape_442.setTransform(654.6,383.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#990000").s().p("AhJB5IAAgdIAzAAIAAi2IgzAAIAAgeICTAAIAAAeIgyAAIAAC2IAyAAIAAAdg");
	this.shape_443.setTransform(636.3,383.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#990000").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape_444.setTransform(617.9,383.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#990000").s().p("AgcB5QgLAAgIgFQgJgFgGgJQgGgJgEgMQgCgMAAgOIAAhtQgBgOAEgMQAEgMAFgJQAHgJAIgFQAIgFALAAIBjAAIAAAeIhQAAQgFAAgEADQgDADgEAFIgEAMQgBAGAAAHIAABtQAAAIABAGQABAGADAFQADAGAEADQAEADAFAAIAqAAIAAhOIgoAAIAAgdIBTAAIAACIg");
	this.shape_445.setTransform(599.6,383.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#990000").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape_446.setTransform(581.2,383.6);

	this.LUPA_ORGRIMMAR = new lib.LUPA_1();
	this.LUPA_ORGRIMMAR.name = "LUPA_ORGRIMMAR";
	this.LUPA_ORGRIMMAR.parent = this;
	this.LUPA_ORGRIMMAR.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_ORGRIMMAR, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_3 = new lib.ORGRIMMAR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(491,405,0.286,0.286);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgFgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGACQAHACAEAEQAEAFACAHQABAIAAAMIAABXgAgMAEQgEABgCACQgCADgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_447.setTransform(484.7,835.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGIgDgEIgHgBIgdAAIAABrIggAAIAAioIAgAAIAAApIAnAAQAJABAHABQAGACAEAFQAEAEACAIQABAHABAMIAABXg");
	this.shape_448.setTransform(460.3,833.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGACQAHACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_449.setTransform(737.6,810.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_450.setTransform(713.2,810.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgFQgEgEgCgHQgCgIAAgLIAAhYIAfAAIAABVIABAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_451.setTransform(688.8,810.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgEQgFgFgBgIQgCgIAAgMIAAgsQAAgLACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAAKIAAAuQAAAPAHAEQADABAQABIAJAAIANgBIAVAAIAAAUg");
	this.shape_452.setTransform(676.6,810.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AAbBAIAAhWIgBgKIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHACQAGACAEAEQAEAFACAHQACAIAAALIAABYg");
	this.shape_453.setTransform(545.7,810.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgJIAAgKQgBgEgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_454.setTransform(484.7,810.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAEADAIQABAIAAALIAABYg");
	this.shape_455.setTransform(460.3,810.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgCgHgBgJQABgIACgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_456.setTransform(448.1,810.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAFACAHQACAIAAALIAABYg");
	this.shape_457.setTransform(831.9,785.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgUBUQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgSQgCAFAAAMIAAAqQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFgAgVhIIA7gLIAAAUIg7AGg");
	this.shape_458.setTransform(819.7,783.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgGgDgFgFQgEgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAEgFQAFgFAGgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAPAHAEQADABAQABIAJAAIANgBIAVAAIAAAUg");
	this.shape_459.setTransform(795.3,785.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgyBVIAAgVIAkAAIAAhWIgkAAIAAgVIBCAAIAABrIAiAAIAAAVgAgRg6IAAgZIAkAAIAAAZg");
	this.shape_460.setTransform(783.1,783.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAHACADAFQAEAFADAIQACAIAAAMIAAAsQAAALgCAIQgCAIgEAEQgEAFgGADQgHACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIAAgKIAAgwIgBgLQAAgEgDgCIgIgCIgKAAIgWAAg");
	this.shape_461.setTransform(746.5,788.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgpIgXAAIgLACg");
	this.shape_462.setTransform(658.3,785.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAFABAHQACAIAAALIAABYg");
	this.shape_463.setTransform(646.1,785.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgFQgEgEgCgHQgCgIAAgLIAAhYIAfAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_464.setTransform(633.9,785.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgpIgYAAIgKACg");
	this.shape_465.setTransform(521.3,785.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAEAFADAHQABAIAAALIAABYg");
	this.shape_466.setTransform(509.1,785.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgUBVIAAhrIgeAAIAAgVIAeAAQAAgNABgHQACgIAEgEQAEgFAGgCQAGgCAIABIAoAAIAAATIgdAAIgGABIgEAEIgCAGIgBAKIAcAAIAAAVIgcAAIAABrg");
	this.shape_467.setTransform(472.5,783.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAFADAHQABAIAAALIAABYg");
	this.shape_468.setTransform(460.3,785.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgwBRIAAgUIAiAAIAAh5IgiAAIAAgUIBiAAIAAAUIgiAAIAAB5IAiAAIAAAUg");
	this.shape_469.setTransform(448.1,784.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgSBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAEgGAGgDQAGgEAHAAIBCAAIAAAUIg1AAQgEAAgCACIgFAGIgDAHIgBAKIAABIIABAJIADAIIAFAFQACACAEAAIAbAAIAAgzIgaAAIAAgTIA2AAIAABag");
	this.shape_470.setTransform(783,759.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAVBVIAAhWIAAgLIgCgGIgEgDIgFgBIgeAAIAABrIgfAAIAAipIAfAAIAAAqIAnAAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYg");
	this.shape_471.setTransform(728.3,758.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQABAIABAMIAABXgAgMAFQgEABgCABQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_472.setTransform(667.3,760.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgSBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAEgGAGgDQAGgEAHAAIBCAAIAAAUIg1AAQgEAAgCACIgFAGIgDAHIgBAKIAABIIABAJIADAIIAFAFQACACAEAAIAbAAIAAgzIgaAAIAAgTIA2AAIAABag");
	this.shape_473.setTransform(655.1,759.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_474.setTransform(600.4,760.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgFgFQgDgEgCgIQgCgIgBgMIAAgrQABgMACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAQAHADQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_475.setTransform(588.2,760.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_476.setTransform(563.8,760.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIAAQgEACgCACQgCACgBAFIAAANIAABTg");
	this.shape_477.setTransform(484.7,760.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgSBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAEgGAGgDQAGgEAHAAIBCAAIAAAUIg1AAQgEAAgCACIgFAGIgDAHIgBAKIAABIIABAJIADAIIAFAFQACACAEAAIAbAAIAAgzIgaAAIAAgTIA2AAIAABag");
	this.shape_478.setTransform(448.1,759.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgUBUIAAhrIgeAAIAAgTIAeAAQAAgNABgIQACgIAEgFQAEgEAGgCQAGgCAIAAIAoAAIAAAVIgdAAIgGABIgEACIgCAHIgBALIAcAAIAAATIgcAAIAABrg");
	this.shape_479.setTransform(782,733.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgwBRIAAgUIA1AAQADAAADgCQADgCABgDIADgIIABgJIAAhhIgmAAIAAgUIBEAAIAAB1QAAAJgCAIQgCAIgEAGQgEAGgGADQgGAEgHAAg");
	this.shape_480.setTransform(757.6,734.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBADgCQACgCABgEIABgLIAAgIIgmAAQgKAAgGgCQgHgDgDgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIBFAAIAACFQAAAMgCAIQgCAIgDAFQgFAFgGACQgGACgJAAgAgJhDQgEABgDACQgCACgBAEIgBAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgVAAIgJAAg");
	this.shape_481.setTransform(658.2,738.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_482.setTransform(596.3,735.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEAAgCADQgCACgBAFIAAAMIAABUg");
	this.shape_483.setTransform(472.5,735.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgzBRIAAihIBIAAQAHAAAFAEQAGADAEAGQAEAGACAIQADAIAAAKIAABIQAAAJgDAIQgCAIgEAGQgEAGgGADQgFAEgHAAgAgUA9IAcAAQADAAADgCIAEgFIADgIIABgJIAAhIIgBgKQgBgEgCgDIgEgGQgDgCgDAAIgcAAg");
	this.shape_484.setTransform(448.1,734.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAFAEACAIQABAIAAALIAABYg");
	this.shape_485.setTransform(740.5,710.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AAYBAIgYgsIgYAsIggAAIAphAIgpg/IAfAAIAZArIAbgrIAeAAIgqA+IAqBBg");
	this.shape_486.setTransform(649.1,710.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACADAEQAEAEADAIQABAIAAALIAABYg");
	this.shape_487.setTransform(563.9,710.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_488.setTransform(551.7,710.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_489.setTransform(521.3,710.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgFgEQgDgFgCgIQgCgIgBgMIAAgsQABgLACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgBAHIgBAKIAAAuQAAAQAHADQADACAQAAIAJAAIANgBIAVAAIAAAUg");
	this.shape_490.setTransform(484.7,710.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgzBUIAAinIAfAAIAAAoIAnAAQASAAAIALQAHALAAAWIAAAmQAAAYgHALQgIAKgSAAgAgUBAIAVAAIAKAAQAEgBADgBQABgDABgFIABgLIAAgrIgBgLIgCgHIgDgEIgGgBIgdAAg");
	this.shape_491.setTransform(460.3,708.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_492.setTransform(831.8,692.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_493.setTransform(807.4,685.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgEQgFgFgBgIQgCgIAAgMIAAgsQAAgLACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgDAGIAAAKIAAAuQAAAPAGAEQAEABAQABIAJAAIANgBIAUAAIAAAUg");
	this.shape_494.setTransform(758.6,685.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgGQgBgDgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAFAFABAHQACAIAAALIAABYg");
	this.shape_495.setTransform(679.5,685.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAGACAEAFQAFAFABAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgBgEgDgCIgHgCIgLAAIgVAAg");
	this.shape_496.setTransform(655.1,688.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgxBVIAAgVIAjAAIAAhWIgjAAIAAgVIBBAAIAABrIAjAAIAAAVgAgRg6IAAgZIAjAAIAAAZg");
	this.shape_497.setTransform(630.7,683.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_498.setTransform(600.4,685.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgxBVIAAgVIAjAAIAAhWIgjAAIAAgVIBBAAIAABrIAiAAIAAAVgAgRg6IAAgZIAkAAIAAAZg");
	this.shape_499.setTransform(496.9,683.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgzBVIAAioIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAnQAAAXgIALQgHALgSAAgAgUBAIAVAAIALAAQADAAACgDQADgCABgFIAAgLIAAgsIAAgKIgCgHIgEgDIgGgBIgdAAg");
	this.shape_500.setTransform(472.5,683.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBACgCQADgCABgEIABgLIAAgIIgnAAQgIAAgHgCQgGgDgFgFQgEgEgBgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAHgCQAGgCAIAAIBGAAIAACFQAAAMgCAIQgBAIgFAFQgEAFgGACQgGACgJAAgAgKhDQgEABgCACQgCACgCAEIAAAKIAAAwQAAALACAFQADAEAHAAIAdAAIAAhXIgVAAIgKAAg");
	this.shape_501.setTransform(448.1,688.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAFADAHQABAIAAALIAABYg");
	this.shape_502.setTransform(784.8,660.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgFQgEgEgBgIQgCgHgBgLIAAhYIAgAAIAABWIAAALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_503.setTransform(748.2,660.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_504.setTransform(676.6,667.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgEgFQgEgEgDgIQgBgIAAgMIAAgrQAAgMABgIQADgIAEgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgCAGIgBALIAAAtQAAAPAGAEQAEACARgBIAIAAIANAAIAUAAIAAAUg");
	this.shape_505.setTransform(640,660.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_506.setTransform(568.5,667.8);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAArQAAALACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_507.setTransform(531.9,660.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_508.setTransform(807.5,634.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQADAEACAIQACAIAAAMIAABXg");
	this.shape_509.setTransform(795.3,635.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAbBAIAAhVIgBgLIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGADAEAEQAEAFACAIQACAHAAAMIAABXg");
	this.shape_510.setTransform(758.7,635.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_511.setTransform(734.3,634.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAEAEADAIQABAIAAAMIAABXg");
	this.shape_512.setTransform(722.1,635.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgHAAgIQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_513.setTransform(659.2,635.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAEAEADAIQABAIAAAMIAABXg");
	this.shape_514.setTransform(622.6,635.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQACAIAAAMIAABXgAgMAFQgEAAgCACQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_515.setTransform(610.4,635.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBACgCQADgCABgEIABgLIAAgIIgmAAQgJAAgHgCQgGgDgEgFQgFgEgBgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAHgCQAFgCAKAAIBFAAIAACFQAAAMgCAIQgBAIgEAFQgFAFgGACQgGACgJAAgAgKhDQgEABgCACQgDACgBAEIAAAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgVAAIgKAAg");
	this.shape_516.setTransform(586,638.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAEADAIQABAIAAAMIAABXg");
	this.shape_517.setTransform(559.8,635.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgCgEgGQgDgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBALIAAAtQAAAPAGAEQAEABARAAIAIAAIANAAIAUAAIAAAUg");
	this.shape_518.setTransform(535.4,635.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgRAeIAAg7IAjAAIgJA7g");
	this.shape_519.setTransform(509.1,642.8);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQACAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_520.setTransform(496.9,635.8);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEABgCACQgCACgBAFIAAAMIAABUg");
	this.shape_521.setTransform(472.5,635.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgFgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQACAIAAAMIAABXgAgMAEQgEABgCACQgCADgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_522.setTransform(831.7,610.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_523.setTransform(741.7,608.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgGQgEgFgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGACQAHACAEAEQAEAFACAHQABAIAAAMIAABXgAgMAEQgEABgCACQgCADgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_524.setTransform(729.5,610.8);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AAMBRQgKAAgFgCQgGgBgEgEQgEgEgCgGQgBgHAAgKIAAhJIgeAAIAAgUIAeAAIAAgiIAeAAIAAAiIApAAIAAAUIgpAAIAABFIABAKQAAAEADABQACACAEABIANAAIAAAUg");
	this.shape_525.setTransform(717.3,609.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAjAAIAAAUgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_526.setTransform(705.1,608.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAGACAEAFQAFAFABAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgBgEgDgCIgHgCIgLAAIgVAAg");
	this.shape_527.setTransform(692.9,613.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgFgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAEQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_528.setTransform(680.7,610.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgFgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAEQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_529.setTransform(635.7,610.8);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_530.setTransform(623.5,608.7);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgOAAIgbAAIAABGIggAAIAAihIBBAAQATAAAJALQAJAKAAAYQAAAMgFAJQgEAKgMAEIAJAEQAEACADAEQADADABAFQACAFAAAHIAAAzgAgTgIIAbAAQAHAAAEgHQADgHAAgMQAAgMgDgHQgEgHgHAAIgbAAg");
	this.shape_531.setTransform(545.7,609.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAiihIAoAAIAhChgAgOAbIAdAAIgOhXIgCAAg");
	this.shape_532.setTransform(533.5,609.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AAdBRIAAhmIgRBmIgYAAIgPhlIAABlIgYAAIAAihIAfAAIAUB6IAVh6IAfAAIAAChg");
	this.shape_533.setTransform(521.3,609.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AAdBRIAAhmIgRBmIgXAAIgQhlIAABlIgYAAIAAihIAfAAIAUB6IAVh6IAfAAIAAChg");
	this.shape_534.setTransform(509.1,609.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgxBRIAAgUIAjAAIAAh5IgjAAIAAgUIBiAAIAAAUIghAAIAAB5IAhAAIAAAUg");
	this.shape_535.setTransform(496.9,609.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgSBRQgHAAgGgEQgGgDgEgGQgEgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAEgGQAEgGAGgDQAGgEAHAAIBCAAIAAAUIg1AAQgEAAgCACIgFAGIgDAHIgBAKIAABIIABAJIADAIIAFAFQACACAEAAIAbAAIAAgzIgaAAIAAgTIA2AAIAABag");
	this.shape_536.setTransform(472.5,609.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgOAAIgbAAIAABGIggAAIAAihIBCAAQASAAAJALQAJAKAAAYQAAAMgFAJQgEAKgMAEIAJAEQAEACADAEQADADABAFQACAFAAAHIAAAzgAgTgIIAbAAQAHAAADgHQAEgHAAgMQAAgMgEgHQgDgHgHAAIgbAAg");
	this.shape_537.setTransform(460.3,609.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("ABfEHIAAlMIg3FMIhPAAIg1lJIAAFJIhMAAIAAoNIBlAAIBEGQIBDmQIBlAAIAAINg");
	this.shape_538.setTransform(360,54);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("ABgEHIAAlMIg4FMIhPAAIg1lJIAAFJIhMAAIAAoNIBlAAIBDGQIBEmQIBlAAIAAINg");
	this.shape_539.setTransform(320.3,54);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("Ag/EHQgWAAgTgLQgSgLgNgUQgNgTgHgaQgIgaABgeIAAjtQAAgfAHgaQAIgaAMgUQAOgTASgLQASgMAWAAIDaAAIAABCIivAAQgLAAgIAHQgJAGgFALQgHALgDAOQgEAOAAAQIAADtQAAAPAEAOQADAOAGALQAGALAJAHQAIAGALAAIBbAAIAAinIhXAAIAAhAICzAAIAAEog");
	this.shape_540.setTransform(201.2,54);

	this.VOLVER_ORGRIMMAR = new lib.VOLVER_1();
	this.VOLVER_ORGRIMMAR.name = "VOLVER_ORGRIMMAR";
	this.VOLVER_ORGRIMMAR.parent = this;
	this.VOLVER_ORGRIMMAR.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_ORGRIMMAR, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#6600CC").s().p("AAZB5IhCihIAAChIgkAAIAAjxIAuAAIBIC1IAAi1IAlAAIAADxg");
	this.shape_541.setTransform(691.3,383.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#6600CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_542.setTransform(673,383.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#6600CC").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape_543.setTransform(654.6,383.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#6600CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_544.setTransform(636.3,383.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#6600CC").s().p("AhMB5IAAjxIAvAAIAADUIBqAAIAAAdg");
	this.shape_545.setTransform(617.9,383.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#6600CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_546.setTransform(599.6,383.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#6600CC").s().p("AhMB5IAAjxIBsAAQAKAAAIAFQAJAFAGAJQAGAJADAMQADAMAAAOIAABtQAAAOgDAMQgDAMgGAJQgGAJgJAFQgIAFgKAAgAgeBcIAqAAQAFAAAEgDQAEgDACgGQADgFACgGQABgGAAgIIAAhtQAAgHgBgGQgCgHgDgFQgCgFgEgDQgEgDgFAAIgqAAg");
	this.shape_547.setTransform(581.2,383.6);

	this.LUPA_DALARAN = new lib.LUPA_1();
	this.LUPA_DALARAN.name = "LUPA_DALARAN";
	this.LUPA_DALARAN.parent = this;
	this.LUPA_DALARAN.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_DALARAN, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_4 = new lib.DALARAN();
	this.instance_4.parent = this;
	this.instance_4.setTransform(491,405,0.286,0.286);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQAEAEACAIQABAIAAALIAABYg");
	this.shape_548.setTransform(704.3,810.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgUBUIAAhrIgeAAIAAgUIAeAAQAAgNABgHQACgIAEgEQAEgFAGgCQAGgBAIAAIAoAAIAAAUIgdAAIgGAAIgEADIgCAHIgBAKIAcAAIAAAUIgcAAIAABrg");
	this.shape_549.setTransform(679.9,808.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgEQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_550.setTransform(643.3,810.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_551.setTransform(618.9,810.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgUBUQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgSQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFgAgVhJIA7gKIAAATIg7AHg");
	this.shape_552.setTransform(594.5,808.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AAVBUIAAhVIAAgKIgCgHIgEgDIgFgCIgeAAIAABrIgfAAIAAinIAfAAIAAAoIAnAAQAKABAFABQAHACAEAEQAEAFACAIQABAIAAALIAABXg");
	this.shape_553.setTransform(496.9,808.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgpIgYAAIgLACg");
	this.shape_554.setTransform(795.3,785.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgCgHQgBgIAAgLIAAhYIAeAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAGAAIAdAAIAAhrIAfAAIAAB/g");
	this.shape_555.setTransform(783.1,785.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgFgFQgDgEgCgIQgCgIgBgMIAAgrQABgMACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAPAHAEQADABAQABIAJAAIANgBIAVAAIAAAUg");
	this.shape_556.setTransform(770.9,785.8);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAFACAHQACAIAAALIAABYg");
	this.shape_557.setTransform(732.9,785.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAAqQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_558.setTransform(720.7,785.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgpIgYAAIgLACg");
	this.shape_559.setTransform(696.3,785.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADABIAIAAIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_560.setTransform(571.5,785.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAAMIAAArQAAAMgCAIQgCAIgEAEQgEAFgHADQgGACgJAAgAgUgmQgCAFAAAMIAAAqQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgrQAAgMgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_561.setTransform(496.9,785.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACADAFQAFAFACAHQABAIAAALIAABYg");
	this.shape_562.setTransform(484.7,785.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACAEAFQADAEACAIQACAIAAAMIAABXg");
	this.shape_563.setTransform(652.2,760.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgSBAQgJAAgHgCQgGgCgEgFQgEgEgCgIQgCgHAAgLIAAhYIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAeAAIAAhrIAgAAIAAB/g");
	this.shape_564.setTransform(640,760.8);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAGABQAHACAEAFQAEAEACAIQABAIAAAMIAABXgAgMAFQgEABgCABQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_565.setTransform(536.5,760.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgUBVIAAhrIgeAAIAAgUIAeAAQAAgOABgHQACgIAEgFQAEgEAGgCQAGgBAIgBIAoAAIAAAUIgdAAIgGABIgEAEIgCAGIgBALIAcAAIAAAUIgcAAIAABrg");
	this.shape_566.setTransform(448.1,758.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQACAIgBAMIAABXgAgMAFQgEAAgCACQgDADAAADIgBAKQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_567.setTransform(819.7,735.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHABADAFQAEAFADAHQABAIAAAMIAABXg");
	this.shape_568.setTransform(652.2,735.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAiAAIAAATgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_569.setTransform(615.6,733.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AATBRIgmhMIgCABIAABLIggAAIAAihIAgAAIAAA+IACAAIAog+IAhAAIgwBHIAvBag");
	this.shape_570.setTransform(603.4,734.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABAEAFQADAFACAHQACAIAAAMIAABXg");
	this.shape_571.setTransform(521.3,735.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgUBUQgJAAgHgCQgGgCgEgFQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAFgHACQgGACgJAAgAgUgSQgCAFAAALIAAAsQAAAMACAFQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFgAgVhJIA7gKIAAATIg7AHg");
	this.shape_572.setTransform(509.1,733.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAiAAIAAATgAgRg7IAAgZIAkAAIAAAZg");
	this.shape_573.setTransform(496.9,733.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgFgFQgDgFgCgIQgCgIgBgMIAAgsQABgLACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgBAHIgBAKIAAAuQAAAPAHAEQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_574.setTransform(484.7,735.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBACgCQADgCABgEIABgLIAAgIIgnAAQgIAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAHgCQAGgCAIAAIBGAAIAACFQAAAMgCAIQgCAIgEAFQgEAFgGACQgGACgJAAgAgKhDQgEABgCACQgDACgBAEIAAAKIAAAwQAAALACAFQADAEAHAAIAdAAIAAhXIgVAAIgKAAg");
	this.shape_575.setTransform(717.3,713.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAGACAEAFQAFAFABAIQACAIAAAMIAAAsQAAALgCAIQgBAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgBgEgDgCIgIgCIgKAAIgVAAg");
	this.shape_576.setTransform(578.5,713.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgzBUIAAinIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAmQAAAYgIALQgHAKgSAAgAgUBAIAVAAIALAAQADgBACgBQADgDABgFIAAgLIAAgrIAAgLIgCgHIgEgEIgGgBIgdAAg");
	this.shape_577.setTransform(472.5,708.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgFAAgMIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_578.setTransform(460.3,710.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQAEAFACAHQABAIAAALIAABYg");
	this.shape_579.setTransform(627.8,685.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgxBVIAAgVIAjAAIAAhWIgjAAIAAgVIBBAAIAABrIAiAAIAAAVgAgRg6IAAgZIAkAAIAAAZg");
	this.shape_580.setTransform(615.6,683.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgPAAIgbAAIAABGIgeAAIAAihIBAAAQATAAAJALQAJAKAAAYQAAAMgEAJQgFAKgLAEIAJAEQADACADAEQACADACAFQACAFgBAHIAAAzgAgUgIIAcAAQAHAAADgHQAFgHAAgMQAAgMgFgHQgDgHgHAAIgcAAg");
	this.shape_581.setTransform(591.2,684.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAFADAHQABAIAAALIAABYg");
	this.shape_582.setTransform(460.3,685.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAEAFADAHQABAIAAALIAABYg");
	this.shape_583.setTransform(819.6,660.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgIQgCgHAAgLIAAhYIAfAAIAABWIAAALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_584.setTransform(758.6,660.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgEgFQgEgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIAEgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgCAGIgBALIAAAtQAAAPAGAEQAEACARgBIAIAAIANAAIAUAAIAAAUg");
	this.shape_585.setTransform(703.9,660.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAhihIApAAIAhChgAgOAbIAdAAIgOhXIgCAAg");
	this.shape_586.setTransform(630.7,659.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_587.setTransform(533.5,660.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgxBVIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAjAAIAAAUgAgRg6IAAgaIAjAAIAAAag");
	this.shape_588.setTransform(509.1,658.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAGABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_589.setTransform(484.7,660.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgEQgEgFgCgIQgBgHAAgMIAAhXIAeAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAGABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_590.setTransform(807.5,635.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgTBAIglh/IAgAAIAYBgIAAAAIAZhgIAgAAIglB/g");
	this.shape_591.setTransform(696.3,635.8);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAEACAIQACAIAAAMIAABXg");
	this.shape_592.setTransform(633.9,635.8);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgEQgEgFgBgIQgDgHAAgMIAAhXIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_593.setTransform(621.7,635.8);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AAVBYIAAgwIgmAAQgJAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIBFAAIAACvgAgKhCQgEAAgCACIgDAGIgBAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgWAAIgJABg");
	this.shape_594.setTransform(547.1,638.2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBACgCQADgCABgEIABgLIAAgIIgnAAQgIAAgHgCQgGgDgEgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAHgCQAGgCAIAAIBGAAIAACFQAAAMgCAIQgCAIgEAFQgEAFgGACQgGACgJAAgAgKhDQgEABgCACQgDACgBAEIAAAKIAAAwQAAALACAFQADAEAHAAIAdAAIAAhXIgVAAIgKAAg");
	this.shape_595.setTransform(472.5,638.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgCgEgFQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAFgHACQgGACgJAAgAgUgmQgCAFAAALIAAArQAAANACAFQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_596.setTransform(790.9,610.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_597.setTransform(729.9,610.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgxAKIAAgTIBjAAIAAATg");
	this.shape_598.setTransform(717.7,609.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_599.setTransform(705.5,608.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_600.setTransform(693.3,610.8);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_601.setTransform(681.1,608.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgEQgEgFgBgIQgDgHAAgMIAAhXIAgAAIAABVIAAALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_602.setTransform(668.9,610.8);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgFgFQgDgFgCgIQgCgIgBgMIAAgsQABgLACgIQACgIADgFQAFgFAFgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAAKIAAAuQAAAQAHADQADACAQAAIAJAAIANgBIAVAAIAAAUg");
	this.shape_603.setTransform(644.5,610.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAFADAHQABAIAAAMIAABXg");
	this.shape_604.setTransform(603.4,610.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_605.setTransform(562.4,610.8);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgPAAIgbAAIAABGIgeAAIAAihIBAAAQAUAAAIALQAJAKAAAYQAAAMgEAJQgFAKgMAEIAKAEQADACADAEQACADACAFQABAFAAAHIAAAzgAgUgIIAcAAQAHAAAEgHQADgHAAgMQAAgMgDgHQgEgHgHAAIgcAAg");
	this.shape_606.setTransform(496.9,609.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAiihIAnAAIAiChgAgOAbIAdAAIgOhXIgBAAg");
	this.shape_607.setTransform(484.7,609.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgzBRIAAihIBIAAQAHAAAFAEQAGADAEAGQAEAGACAIQADAIAAAKIAABIQAAAJgDAIQgCAIgEAGQgEAGgGADQgFAEgHAAgAgUA9IAcAAQADAAADgCIAEgFIADgIIABgJIAAhIIgBgKIgDgHIgEgGQgDgCgDAAIgcAAg");
	this.shape_608.setTransform(448.1,609.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AA4EHIiRlgIAAFgIhPAAIAAoNIBlAAICdGLIAAmLIBPAAIAAINg");
	this.shape_609.setTransform(360,54);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("ABIEHIAAiAQAAhkgxAAIhZAAIAADkIhlAAIAAoNIDWAAQA9AAAcAjQAdAiAABNQAAAogOAeQgQAegkAPQAQAFAMAIQANAIAJALQAJAMAFAQQAEAQAAAXIAAClgAhCgdIBcAAQAWAAANgWQAMgXAAglQAAgngMgXQgNgXgWAAIhcAAg");
	this.shape_610.setTransform(280.7,54);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_611.setTransform(161.6,54);

	this.VOLVER_DALARAN = new lib.VOLVER_1();
	this.VOLVER_DALARAN.name = "VOLVER_DALARAN";
	this.VOLVER_DALARAN.parent = this;
	this.VOLVER_DALARAN.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_DALARAN, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#990000").s().p("AAaB5IhDihIAAChIgkAAIAAjxIAuAAIBJC1IAAi1IAkAAIAADxg");
	this.shape_612.setTransform(682.2,383.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#990000").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_613.setTransform(608.8,383.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#990000").s().p("AAZB5IhBihIAAChIglAAIAAjxIAuAAIBIC1IAAi1IAlAAIAADxg");
	this.shape_614.setTransform(590.4,383.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#990000").s().p("AhMB5IAAjxIAuAAIAADUIBrAAIAAAdg");
	this.shape_615.setTransform(553.7,383.6);

	this.LUPA_LUNARGENTA = new lib.LUPA_1();
	this.LUPA_LUNARGENTA.name = "LUPA_LUNARGENTA";
	this.LUPA_LUNARGENTA.parent = this;
	this.LUPA_LUNARGENTA.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_LUNARGENTA, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_5 = new lib.LUNARGENTA();
	this.instance_5.parent = this;
	this.instance_5.setTransform(491,405,0.378,0.371);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AAVBUIAAhWIAAgKIgCgHQgCgCgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQADAFACAHQACAIAAAMIAABXgAAFhAIgIgCIgGgDIgHgBQgFAAgDACQgBABAAAEIgSAAQABgKAGgEQAHgGANAAIALABIAIACIAHACIAHABQAEAAADgBQACgCABgDIARAAQgBAIgFAGQgHAGgOAAIgMgBg");
	this.shape_616.setTransform(545.7,833.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AgVBRQgHAAgGgEQgFgDgEgGQgEgGgCgIQgDgIAAgJIAAhIQAAgKADgIQACgIAEgGQAEgGAFgDQAHgEAGAAIArAAQAHAAAFAEQAGADAEAGQAEAGADAIQACAIAAAKIAABIQAAAJgCAIQgDAIgEAGQgEAGgGADQgFAEgHAAgAgKA9IAVAAQADAAADgCQADgCACgDIADgIQABgEAAgFIAAhMgAgQg6IgEAGIgEAHIgBAKIAABNIAkhmIgVAAQgEAAgCACg");
	this.shape_617.setTransform(509.1,834.1);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgVBRQgHAAgFgEQgGgDgEgGQgEgGgCgIQgDgIAAgJIAAhIQAAgKADgIQACgIAEgGQAEgGAGgDQAFgEAHAAIArAAQAGAAAGAEQAGADAEAGQAEAGACAIQADAIAAAKIAABIQAAAJgDAIQgCAIgDAGQgFAGgGADQgFAEgHAAgAgKA9IAVAAQADAAADgCQADgCABgDIADgIQACgEAAgFIAAhMgAgQg6IgFAGIgCAHIgBAKIAABNIAkhmIgWAAQgEAAgCACg");
	this.shape_618.setTransform(496.9,834.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgVBRQgHAAgGgEQgFgDgEgGQgEgGgDgIQgCgIAAgJIAAhIQAAgKACgIQADgIAEgGQAEgGAFgDQAHgEAGAAIArAAQAGAAAHAEQAFADAEAGQAEAGADAIQACAIAAAKIAABIQAAAJgCAIQgCAIgFAGQgEAGgFADQgGAEgHAAgAgJA9IAUAAQADAAADgCQADgCABgDIAEgIQABgEAAgFIAAhMgAgQg6IgEAGIgEAHIgBAKIAABNIAkhmIgVAAQgDAAgDACg");
	this.shape_619.setTransform(484.7,834.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgVBRQgHAAgGgEQgFgDgEgGQgEgGgDgIQgCgIAAgJIAAhIQAAgKACgIQADgIAEgGQAEgGAFgDQAGgEAHAAIArAAQAGAAAHAEQAFADAEAGQAEAGADAIQACAIAAAKIAABIQAAAJgCAIQgDAIgDAGQgFAGgFADQgGAEgHAAgAgJA9IAUAAQADAAADgCQADgCABgDIAEgIQABgEAAgFIAAhMgAgQg6IgEAGIgEAHIgBAKIAABNIAkhmIgVAAQgDAAgDACg");
	this.shape_620.setTransform(460.3,834.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgyBRIAAgUIAlAAIAAh4IgYAAIAAgVIA2AAIAACNIAiAAIAAAUg");
	this.shape_621.setTransform(448.1,834.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AAWBUIAAhVIgBgKIgCgHIgDgDIgHgCIgdAAIAABrIggAAIAAinIAgAAIAAAoIAnAAQAJABAHABQAGACAEAEQAEAFACAIQABAIAAALIAABXg");
	this.shape_622.setTransform(795.3,808.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgEQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_623.setTransform(708.5,810.8);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgEgEQgEgFgDgIQgCgIAAgMIAAgsQAAgLACgIQADgIAEgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAPAGAEQAEABARABIAIAAIANgBIAUAAIAAAUg");
	this.shape_624.setTransform(684.1,810.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgEQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgRAHgKQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_625.setTransform(621.7,810.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADABIAIAAIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgJIAAgKQgBgEgBgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_626.setTransform(472.5,810.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgpIgXAAIgLACg");
	this.shape_627.setTransform(831.9,785.8);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgpIgZAAIgKACg");
	this.shape_628.setTransform(533.5,785.8);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALABIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAHAAAIQAAAUgHAKQgIALgOAAg");
	this.shape_629.setTransform(472.5,785.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAGACAEAFQAEAFADAIQABAIAAAMIAAAsQAAALgBAIQgCAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgCgEgCgCIgIgCIgKAAIgVAAg");
	this.shape_630.setTransform(652.2,763.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgGQgDgEgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQABAIABAMIAABXgAgMAFQgEABgCABQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_631.setTransform(611.2,760.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAEACAIQACAIAAAMIAABXg");
	this.shape_632.setTransform(562.4,760.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgFQgEgEgBgIQgCgHgBgLIAAhYIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_633.setTransform(550.2,760.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgUBVIAAhrIgeAAIAAgUIAeAAQAAgOABgHQACgIAEgFQAEgEAGgCQAGgBAIgBIAoAAIAAAUIgdAAIgGABIgEAEIgCAGIgBALIAcAAIAAAUIgcAAIAABrg");
	this.shape_634.setTransform(538,758.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQACAIAAAMIAABXgAgMAFQgEAAgCACQgDADgBADIAAAKQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_635.setTransform(769.7,735.8);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AgTBAQgIAAgHgCQgGgCgEgEQgEgFgBgIQgDgHAAgMIAAhXIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAfAAIAAhrIAfAAIAAB/g");
	this.shape_636.setTransform(757.5,735.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgXBUQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgGQAFgFAFgDQAFgDAHAAIAtAAIAAgKQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAZQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAkAAIAAgoIgYAAIgKABgAgRhJIA7gKIAAATIg7AHg");
	this.shape_637.setTransform(658.8,733.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAdIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_638.setTransform(572.3,733.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgEQgEgFgCgIQgCgHAAgMIAAhXIAfAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_639.setTransform(560.1,735.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgEgFQgFgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAFgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAPAGAEQAEABARAAIAIAAIANAAIAUAAIAAAUg");
	this.shape_640.setTransform(535.7,735.8);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAGQACAIAAAHQAAAUgHAKQgIALgOAAg");
	this.shape_641.setTransform(510.2,735.8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgRBUQgJAAgHgCQgGgCgEgGQgEgGgCgIQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgDAJABIAmAAIAAgqIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAdIABATQABAHACADQADAEAEACIAKABIAUAAIAAhYIgdAAIgFABg");
	this.shape_642.setTransform(448.1,733.7);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_643.setTransform(831.8,710.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAEAEADAIQABAIAAALIAABYg");
	this.shape_644.setTransform(819.6,710.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgEQgEgFgCgHQgBgIAAgMIAAhXIAeAAIAABVIABALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAGAAIAdAAIAAhrIAfAAIAAB/g");
	this.shape_645.setTransform(807.4,710.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgRANIAAgaIAjAAIAAAag");
	this.shape_646.setTransform(744.2,715.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_647.setTransform(695.4,710.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AAVBUIAAhVIAAgKIgCgHIgEgEIgFgBIgeAAIAABrIgfAAIAAinIAfAAIAAAoIAnAAQAKABAFABQAHACAEAEQAEAFACAIQABAHAAAMIAABXg");
	this.shape_648.setTransform(683.2,708.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AgMAdIAAg5IAZAAIAAA5g");
	this.shape_649.setTransform(658.8,702.9);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgSBAQgKAAgGgCQgGgCgEgEQgEgFgCgHQgBgIAAgMIAAhXIAeAAIAABVIABALIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAHAAIAdAAIAAhrIAgAAIAAB/g");
	this.shape_650.setTransform(622.2,710.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AACBbIgJgVIgOAAQgHAAgGgDQgFgEgEgFQgEgGgCgIQgDgIAAgJIAAhJQAAgJADgIQACgJAEgGQAEgGAFgDQAHgDAGAAIAsAAQAGAAAGADQAFADAEAGQAFAGACAJQACAIAAAJIAABJQAAAJgCAIQgCAIgEAGQgEAGgGADQgGADgGAAIgFAAIAKAVgAgNhEIgFAFIgDAIIgBAJIAABJIABAJIADAHQABADAEACQACACADAAIARAAQADAAADgCQADgCABgDIAEgHIABgJIAAhJIgBgJIgEgIQgBgDgDgCQgDgCgDAAIgRAAQgDAAgCACg");
	this.shape_651.setTransform(610,710.1);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAjAAIAAAUgAgRg7IAAgYIAjAAIAAAYg");
	this.shape_652.setTransform(522.4,708.7);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADAEAEQADAFACAHQACAIAAALIAABYg");
	this.shape_653.setTransform(783.1,685.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgCgHAAgJQAAgIACgHQACgIADgFQAFgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQABAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_654.setTransform(742.1,685.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgCgHgBgJQABgIACgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQABAIAAALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_655.setTransform(701,685.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAFACAHQACAIAAALIAABYg");
	this.shape_656.setTransform(688.8,685.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgxBRIAAihIBiAAIAAAUIhCAAIAAAzIAwAAIAAATIgwAAIAAAzIBCAAIAAAUg");
	this.shape_657.setTransform(640,684.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADADAEQAEAFADAHQABAIAAALIAABYg");
	this.shape_658.setTransform(611.2,685.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AgUBUQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgSQgCAFAAALIAAArQAAAMACAGQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFgAgVhIIA7gLIAAAUIg7AGg");
	this.shape_659.setTransform(599,683.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAFACAHQACAIAAALIAABYg");
	this.shape_660.setTransform(562.4,685.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQABAIAAALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_661.setTransform(550.2,685.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AgQBRQgHAAgGgEQgGgDgEgGQgDgGgCgIQgDgIAAgJIAAhIQAAgKADgIQACgIADgGQAFgGAFgDQAGgEAHAAIBAAAIAAAUIgzAAQgDAAgDACIgFAGIgCAHIgBAKIAABIIABAJIACAIIAFAFQADACADAAIAzAAIAAAUg");
	this.shape_662.setTransform(538,684.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgHQgCgIAAgLIAAhYIAeAAIAABVIABAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAGAAIAdAAIAAhrIAfAAIAAB/g");
	this.shape_663.setTransform(496.9,685.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACADAFQAEAFADAHQABAIAAALIAABYg");
	this.shape_664.setTransform(733.1,660.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgFgDgIQgCgHAAgJQAAgIACgIQADgHADgEQAEgGAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_665.setTransform(695.4,660.8);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgGgDgFgFQgEgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAEgFQAFgFAGgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAPAHAEQADACAQgBIAJAAIANAAIAVAAIAAAUg");
	this.shape_666.setTransform(633.3,660.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgzBVIAAipIAfAAIAAAqIAnAAQASgBAHALQAIAKAAAXIAAAnQAAAXgIALQgHALgSAAgAgUBBIAVAAIAKgBQAEgBACgCQACgCABgFIABgMIAAgrIgBgKIgCgHIgDgDIgGgBIgdAAg");
	this.shape_667.setTransform(608.9,658.7);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgIQgCgHAAgLIAAhYIAeAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAFABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_668.setTransform(596.7,660.8);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgxBRIAAihIBiAAIAAAUIhCAAIAAAzIAwAAIAAATIgwAAIAAAzIBCAAIAAAUg");
	this.shape_669.setTransform(534.6,659.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AgUBVIAAhrIgeAAIAAgUIAeAAQAAgOABgHQACgIAEgEQAEgFAGgCQAGgBAIgBIAoAAIAAAUIgdAAIgGABIgEAEIgCAGIgBALIAcAAIAAAUIgcAAIAABrg");
	this.shape_670.setTransform(472.5,658.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAhihIApAAIAhChgAgOAbIAdAAIgNhXIgDAAg");
	this.shape_671.setTransform(782.9,634.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAEACAIQABAIABAMIAABXgAgMAFQgEAAgCACQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_672.setTransform(658.2,635.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAJAAAGACQAGACAEAFQAFAFACAIQABAIAAAMIAAAsQAAALgBAIQgCAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQADgBABgCIACgGIABgKIAAgwIgBgLQgCgEgCgCIgIgCIgKAAIgVAAg");
	this.shape_673.setTransform(621.6,638.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgEQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgHAAgIQAAgRAHgLQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAQALAAIApAAQAHAAAFACQAFADAEAFQADAEACAGQACAIAAAHQAAATgHALQgIALgOAAg");
	this.shape_674.setTransform(484.7,635.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAEADAIQABAIAAAMIAABXgAAFhAIgHgCIgHgDIgHgBQgFAAgDABQgCACAAAEIgRAAQABgJAGgGQAHgFANAAIALABIAIACIAHACIAHABQAEAAADgCQACAAABgEIARAAQAAAIgHAGQgGAGgOAAIgMgBg");
	this.shape_675.setTransform(460.3,633.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgVBRQgHAAgFgEQgGgDgEgGQgEgGgDgIQgCgIAAgJIAAhIQAAgKACgIQADgIAEgGQAEgGAGgDQAFgEAHAAIArAAQAGAAAHAEQAFADAEAGQAEAGACAIQADAIAAAKIAABIQAAAJgDAIQgCAIgDAGQgFAGgFADQgGAEgHAAgAgJA9IAUAAQADAAADgCQADgCABgDIAEgIQABgEAAgFIAAhMgAgQg6IgFAGIgDAHIgBAKIAABNIAkhmIgVAAQgDAAgDACg");
	this.shape_676.setTransform(831.9,609.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgVBRQgHAAgGgEQgFgDgEgGQgEgGgCgIQgDgIAAgJIAAhIQAAgKADgIQACgIAEgGQAEgGAFgDQAHgEAGAAIArAAQAHAAAFAEQAGADAEAGQAEAGADAIQACAIAAAKIAABIQAAAJgCAIQgCAIgFAGQgEAGgGADQgFAEgHAAgAgKA9IAVAAQADAAADgCQADgCACgDIACgIQACgEAAgFIAAhMgAgQg6IgEAGIgDAHIgCAKIAABNIAlhmIgWAAQgEAAgCACg");
	this.shape_677.setTransform(819.7,609.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgTBRQgQAAgIgMQgJgLAAgYQAAgRADgJQAEgIAIgFIgFgFQgDgDgBgEIgDgJIgBgMQAAgUAIgLQAJgLARAAIAiAAQARAAAHALQAIAKAAAVIgBAMIgCAJIgEAHIgFAFQAHAFAEAIQAEAJAAARQAAAvghAAgAgSANQgFAGAAAOQAAAOAFAHQAEAHAGAAIARAAQAHAAAEgHQAEgHAAgOQAAgOgEgGQgEgFgHAAIgRAAQgGAAgEAFgAgSg1QgEAGAAAMQAAALAEAGQAEAHAGAAIARAAQAHAAAEgHQADgGAAgLQAAgMgDgGQgEgHgHAAIgRAAQgGAAgEAHg");
	this.shape_678.setTransform(807.5,609.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AgRANIAAgaIAjAAIAAAag");
	this.shape_679.setTransform(795.3,615.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgqBRIAAgUIAzAAIAFgBQADgBACgCIACgHIAAgKIAAgXIguAAQgNAAgHgJQgHgIABgPIAAgaQAAgLABgHQACgIAEgEQAEgFAGgCQAHgCAIAAIAmAAQAJAAAGACQAHACAEAFQAEAEACAIQABAHAAALIAABSQAAAMgBAHQgCAIgEAFQgEAEgHACQgGACgJAAgAgPg6QgCACgCAEIgCAJIAAAPQAAANABAHQABAGAFAAIAjAAIAAgkQAAgNgCgEQgDgEgHAAIgSAAQgDAAgDABg");
	this.shape_680.setTransform(783.1,609.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgYBUQgGAAgFgDQgFgDgEgGQgEgFgDgHQgBgHAAgJQAAgIABgHQADgIAEgGQAEgFAFgDQAFgDAGAAIAuAAIAAgKQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQABAIABAMIAABXgAgMAYQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABgAgRhJIA7gKIAAATIg7AHg");
	this.shape_681.setTransform(688.8,608.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AAbBAIAAhWIgBgKIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHACQAGACAEAEQAEAFACAIQACAHAAAMIAABXg");
	this.shape_682.setTransform(676.6,610.8);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAFAFABAHQACAIAAAMIAABXg");
	this.shape_683.setTransform(629.5,610.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgEAiIggAAIAhihIApAAIAhChgAgOAbIAdAAIgNhXIgDAAg");
	this.shape_684.setTransform(557.9,609.1);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgxBRIAAihIBiAAIAAAUIhCAAIAAAzIAwAAIAAATIgwAAIAAAzIBCAAIAAAUg");
	this.shape_685.setTransform(521.3,609.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AgUBRQgIAAgGgEQgFgDgEgGQgEgGgDgIQgCgIAAgJIAAh1IAeAAIAAB1IABAJIADAIIAEAFQADACADAAIARAAQADAAADgCIAEgFIACgIIABgJIAAh1IAfAAIAAB1QAAAJgCAIQgDAIgEAGQgEAGgFADQgGAEgIAAg");
	this.shape_686.setTransform(460.3,609.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("Ag/EHQgWAAgSgLQgTgLgNgUQgNgTgIgaQgHgaAAgeIAAjtQAAgfAIgaQAHgaANgUQANgTATgLQATgMAVAAIDbAAIAABCIiwAAQgKAAgJAHQgIAGgHALQgGALgEAOQgDAOAAAQIAADtQAAAPADAOQADAOAHALQAGALAJAHQAJAGAKAAIBaAAIAAinIhWAAIAAhAIC0AAIAAEog");
	this.shape_687.setTransform(320.3,54);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AA3EHIiQlgIAAFgIhPAAIAAoNIBkAAICeGLIAAmLIBPAAIAAINg");
	this.shape_688.setTransform(201.2,54);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AhFEHQgYAAgSgLQgTgLgNgUQgNgTgHgaQgGgaAAgeIAAl+IBfAAIAAF+QABAQADAOQADAOAGALQAGAKAIAHQAJAGALAAIA3AAQAKAAAJgGQAIgHAGgKQAGgLADgOQADgOAAgQIAAl+IBhAAIAAF+QAAAegGAaQgIAagNATQgNAUgSALQgSALgYAAg");
	this.shape_689.setTransform(161.6,54);

	this.VOLVER_LUNARGENTA = new lib.VOLVER_1();
	this.VOLVER_LUNARGENTA.name = "VOLVER_LUNARGENTA";
	this.VOLVER_LUNARGENTA.parent = this;
	this.VOLVER_LUNARGENTA.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_LUNARGENTA, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#990000").s().p("AhFB5IAAgdIBQAAQAGAAADgEQAFgDADgFQADgFABgIQACgHAAgJQAAgKgCgGQgCgHgDgEQgFgEgGgCQgGgCgKAAIgaAAQgMAAgKgFQgJgFgHgIQgGgJgDgMQgEgMAAgPQAAgPAEgMQACgNAHgKQAFgJAJgGQAIgFALAAIBhAAIAAAeIhOAAQgEAAgFADIgGAHIgEALQgBAGgBAHQAAAQAHAKQAFAJAJAAIAoAAQAMAAAKAFQAJAFAGAJQAGAIAEANQADAMAAAPQAAAQgEAOQgDANgGAKQgHALgIAFQgJAGgLAAg");
	this.shape_690.setTransform(700.5,383.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#990000").s().p("AAaCQIhDiiIAACiIgkAAIAAjyIAvAAIBIC1IAAi1IAkAAIAADygAAIhyIgMgEIgKgEQgEgCgGABQgIgBgEADQgDADAAAFIgZAAQgBgOALgHQAKgJAUABIARABIAMADIAKADQAFABAFABQAHAAAEgCQAEgDAAgEIAZAAQAAALgJAJQgKAKgUgBQgMABgGgCg");
	this.shape_691.setTransform(663.8,381.4);

	this.LUPA_ENTRANAS = new lib.LUPA_1();
	this.LUPA_ENTRANAS.name = "LUPA_ENTRANAS";
	this.LUPA_ENTRANAS.parent = this;
	this.LUPA_ENTRANAS.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_ENTRANAS, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_6 = new lib.ENTRAÑAS();
	this.instance_6.parent = this;
	this.instance_6.setTransform(491,405,0.378,0.371);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgUBAQgJAAgHgCQgGgDgEgEQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIApAAQAJAAAGACQAGACAEAFQAFAFACAIQACAIAAALIAAAsQAAAMgCAIQgCAIgEAFQgEAEgHADQgGACgJAAgAgUgmQgCAFAAALIAAArQAAANACAFQADAFAHAAIAVAAQAHAAACgFQADgGAAgLIAAgsQAAgLgDgFQgCgFgHAAIgVAAQgHAAgDAFg");
	this.shape_692.setTransform(655.5,835.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_693.setTransform(594.5,835.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgFgCgJQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_694.setTransform(582.3,833.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAEgFAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQABAIAAAMIAABXgAgMAEQgEABgCACQgCADgBADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_695.setTransform(557.9,835.8);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgEQgEgFgCgIQgBgIAAgMIAAgsQAAgLABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAAUgHAHQgGAJgOAAIgtAAIAAALIAAAMIADAGQACADADAAIAIABIAtAAIAAAUgAgOgqIgEADIgCAHIAAAKIAAAQIAgAAIAGgBIAEgDIACgFIAAgKIAAgKQgBgDgBgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGgBIgUAAIgGABg");
	this.shape_696.setTransform(460.3,835.8);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AgRBUQgJABgHgDQgGgDgEgFQgEgFgCgJQgCgJAAgMIAAgmQAAgLACgIQACgJAEgGQAEgEAGgDQAHgCAJgBIAmAAIAAgpIAfAAIAACogAgNgWQgDABgBADIgDAGIAAAMIAAAcIABAUQABAHACADQADAFAEABIAKAAIAUAAIAAhXIgdAAIgFABg");
	this.shape_697.setTransform(448.1,833.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AgXBUQgHAAgFgDQgFgDgFgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgGQAFgFAFgDQAFgDAHAAIAuAAIAAgKQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAYQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABgAgRhJIA7gKIAAATIg7AHg");
	this.shape_698.setTransform(819.7,808.8);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgCgHAAgJQAAgIACgHQACgIADgFQAFgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_699.setTransform(714.6,810.8);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg7IAAgYIAjAAIAAAYg");
	this.shape_700.setTransform(690.2,808.7);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAEACAIQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_701.setTransform(621.7,810.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAiAAIAAAUgAgRg7IAAgYIAjAAIAAAYg");
	this.shape_702.setTransform(448.1,808.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgCAEIAAAJQAAAVAIAAIAkAAIAAgpIgYAAIgKACg");
	this.shape_703.setTransform(685.8,785.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgDgFgFQgEgEgCgIQgCgIAAgMIAAgrQAAgMACgIQACgIAEgFQAFgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgCAGIgBALIAAAtQAAAPAGAEQAEABARABIAIAAIANgBIAUAAIAAAUg");
	this.shape_704.setTransform(624.8,785.8);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgJgCgDQgDgEgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgFgBgGQgCgIAAgIQAAgSAHgKQAIgJAQAAIBDAAIAAAUIg8AAQgFAAgDAEQgDADAAAIQAAAPALABIApAAQAHAAAFADQAFACAEAFQADAEACAGQACAHAAAIQAAAUgHAKQgIALgOAAg");
	this.shape_705.setTransform(460.3,785.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgTBAQgJAAgGgCQgGgCgEgFQgEgEgBgIQgDgHAAgLIAAhYIAgAAIAABWIAAAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAGABIAfAAIAAhrIAeAAIAAB/g");
	this.shape_706.setTransform(795.3,760.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAEACAIQACAIAAAMIAABXgAgMAFQgEABgCABQgDADgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_707.setTransform(712.1,760.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgCgIQgBgHAAgLIAAhYIAeAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAGABIAdAAIAAhrIAfAAIAAB/g");
	this.shape_708.setTransform(687.7,760.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAEACAIQACAIAAAMIAABXg");
	this.shape_709.setTransform(641.1,760.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgzBVIAAipIAfAAIAAAqIAnAAQASAAAIAKQAHAKAAAXIAAAnQAAAXgHALQgIALgSAAgAgUBBIAVAAIAKgBQAEgBADgCQACgCAAgEIABgNIAAgrIgBgLIgBgGIgEgDIgGgBIgdAAg");
	this.shape_710.setTransform(616.7,758.7);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgDgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_711.setTransform(604.5,760.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGACAEAFQADAEADAIQABAIAAAMIAABXg");
	this.shape_712.setTransform(460.3,760.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgEQgEgFgCgIQgCgHAAgMIAAhXIAfAAIAABWIABAKIACAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_713.setTransform(831.9,735.8);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgEgFQgEgFgDgIQgCgIAAgMIAAgsQAAgLACgIQADgIAEgFQAEgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAPAGAEQAEABARAAIAIAAIANAAIAUAAIAAAUg");
	this.shape_714.setTransform(694.9,735.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_715.setTransform(670.5,735.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQACAIgBAMIAABXgAgMAFQgEAAgCACQgDADAAADIgBAKQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_716.setTransform(632.5,735.8);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgzBRIAAihIBIAAQAHAAAFAEQAGAEAEAHQAEAHACAJQADAKAAAKQAAALgDAJQgBAJgFAFQgDAHgHADQgFAEgHAAIgpAAIAAA+gAgUAAIAcAAQAOAAAAgdQAAgfgOAAIgcAAg");
	this.shape_717.setTransform(595.9,734.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgGQgEgEgCgIQgCgHAAgJQAAgIACgIQACgHAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGABAEAFQAEAFACAHQACAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_718.setTransform(496.9,735.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgvBAIAAhYQAAgVAKgJQALgJAWAAIA0AAIAAAUIgvAAIgIABQgEAAgCADQgCACgBAFIAAAMIAABUg");
	this.shape_719.setTransform(472.5,735.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAGACQAHACAEAEQAEAEACAIQABAIAAALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_720.setTransform(754.3,710.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AAWBUIAAhVIgBgKIgCgHIgEgEIgGgBIgdAAIAABrIgfAAIAAinIAfAAIAAAoIAnAAQAKABAFABQAHACAEAEQAEAFACAIQACAHgBAMIAABXg");
	this.shape_721.setTransform(717.7,708.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AgxBUIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAjAAIAAAUgAgRg7IAAgYIAjAAIAAAYg");
	this.shape_722.setTransform(652.2,708.7);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQACAIgBALIAABYgAgMAEQgEABgCADQgDACAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_723.setTransform(819.7,685.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AgQBRQgHAAgGgEQgFgDgEgGQgFgGgCgIQgCgIAAgJIAAhIQAAgKACgIQACgIAFgGQAEgGAGgDQAFgEAHAAIBAAAIAAAUIgzAAQgDAAgDACIgFAGIgCAHIgBAKIAABIIABAJIACAIIAFAFQADACADAAIAzAAIAAAUg");
	this.shape_724.setTransform(770.9,684.1);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQABAIABALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_725.setTransform(729.9,685.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgHQgCgIAAgLIAAhYIAfAAIAABVIAAAMIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAFAAIAfAAIAAhrIAeAAIAAB/g");
	this.shape_726.setTransform(717.7,685.8);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AgxBVIAAgVIAjAAIAAhWIgjAAIAAgVIBBAAIAABrIAjAAIAAAVgAgRg6IAAgZIAjAAIAAAZg");
	this.shape_727.setTransform(693.3,683.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgGQgCgDgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAEAFADAHQABAIAAALIAABYg");
	this.shape_728.setTransform(668.9,685.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQACAIgBALIAABYgAgMAFQgEABgCACQgDACAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_729.setTransform(819.7,660.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_730.setTransform(710.1,660.8);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AgzBVIAAipIAfAAIAAAqIAnAAQASgBAIALQAHAKAAAXIAAAnQAAAXgHALQgIALgSAAgAgUBBIAVAAIAKgBQAEgBADgCQABgCABgFIABgMIAAgrIgBgKIgCgHIgDgDIgGgBIgdAAg");
	this.shape_731.setTransform(697.9,658.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAHACADAFQAFAFACAIQACAIAAAMIAAAsQAAALgCAIQgCAIgEAEQgEAFgGADQgHACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQADgBABgCIACgGIAAgKIAAgwIgBgLQAAgEgDgCIgIgCIgKAAIgWAAg");
	this.shape_732.setTransform(618.7,663.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAFABAHQACAIAAALIAABYg");
	this.shape_733.setTransform(551.7,660.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgFQgDgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDAEIgCAGIgBALIAAAtQAAAPAGAEQAEACARgBIAIAAIANAAIAUAAIAAAUg");
	this.shape_734.setTransform(515.1,660.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAFACAHQABAIAAALIAABYg");
	this.shape_735.setTransform(502.9,660.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_736.setTransform(490.7,660.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AgSBAQgJAAgGgCQgHgDgEgFQgEgEgCgIQgBgIAAgMIAAgrQAAgMABgIQACgIAEgFQAEgFAHgCQAGgCAJAAIArAAQANAAAHAJQAHAJAAAUQAAATgHAIQgGAJgOAAIgtAAIAAALIAAAMIADAHQACACADAAIAIABIAtAAIAAAUgAgOgqIgEAEIgCAGIAAAKIAAAPIAgAAIAGAAIAEgDIACgGIAAgKIAAgJQgBgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgGAAIgUAAIgGABg");
	this.shape_737.setTransform(460.3,660.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_738.setTransform(671.4,635.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgCgDgGQgFgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgCAHIAAALIAAAtQAAAPAHAEQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_739.setTransform(622.6,635.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgBgCgDgBIgFgBIgeAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAFAEABAIQACAIAAAMIAABXg");
	this.shape_740.setTransform(472.5,635.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("Ag0BYIAAivIBIAAQAJAAAGACQAHACAEAFQADAFADAIQACAIAAAMIAAAsQAAALgCAIQgCAIgEAEQgEAFgGADQgHACgJAAIgqAAIAAAwgAgWAUIAgAAIAGgBQACgBACgCIACgGIAAgKIAAgwIgBgLQAAgEgDgCIgIgCIgKAAIgWAAg");
	this.shape_741.setTransform(680.7,613.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_742.setTransform(668.5,610.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgFgCgFgFQgEgFgCgIQgCgIAAgMIAAgsQAAgLACgIQACgIAEgFQAFgFAFgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgDADIgCAHIgBAKIAAAuQAAAQAGADQAEACARAAIAIAAIANgBIAUAAIAAAUg");
	this.shape_743.setTransform(656.3,610.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_744.setTransform(623.5,610.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgyBUIAAgUIAjAAIAAh/IgjAAIAAgVIBBAAIAACUIAkAAIAAAUg");
	this.shape_745.setTransform(611.3,608.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFADQAFADAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_746.setTransform(578.5,610.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AguBRIAAgUIA1AAQAEAAADgCIAEgGIAEgIIABgLIgBgLQgCgFgDgCQgCgDgFgBIgKgBIgRAAQgIAAgGgEQgHgDgFgFQgEgGgCgIQgCgIAAgKQAAgKACgIQACgJAEgGQAFgGAFgEQAGgEAHAAIBAAAIAAAUIgzAAQgEAAgCACQgDACgCADIgCAHIgBAJQAAALADAGQAFAGAGAAIAaAAQAIAAAGAEQAHADADAGQAFAFACAIQACAJAAAKQAAAKgCAJQgCAJgFAHQgEAHgGAEQgGAEgGAAg");
	this.shape_747.setTransform(533.5,609.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AAXBRIgFgiIgjAAIgFAiIgfAAIAhihIAoAAIAiChgAgOAbIAdAAIgNhXIgCAAg");
	this.shape_748.setTransform(521.3,609.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AARBgIgshsIAABsIgYAAIAAihIAfAAIAvB5IAAh5IAZAAIAAChgAgrhKQAAgKAHgFQAHgGANAAIAMABIAHACIAHACIAHABIAHgBQACgBAAgEIASAAQAAAIgHAGQgGAGgOAAIgMgBIgHgCIgHgDIgHgBQgFAAgDACQgCACAAAEg");
	this.shape_749.setTransform(509.1,607.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AiVEHIAAhBICtAAQAMAAAJgGQAKgHAFgMQAIgLACgRQAEgQAAgSQgBgVgDgPQgEgPgIgJQgJgJgPgEQgOgDgVAAIg5AAQgaAAgUgLQgWgLgOgSQgOgTgGgbQgIgaAAghQAAgfAIgcQAGgbAOgVQANgUASgMQASgNAYAAIDUAAIAABCIiqAAQgLAAgJAGQgIAGgGAKQgGALgDANQgDANAAAPQAAAiAMAVQANAVAVAAIBWAAQAbAAAVALQATALAOATQANATAIAbQAGAbAAAgQAAAigHAeQgHAdgPAWQgNAWgSANQgUANgWAAg");
	this.shape_750.setTransform(399.7,54);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AA4E3IiRlfIAAFfIhPAAIAAoNIBlAAICdGLIAAmLIBPAAIAAINgAiMj0QgBgfAWgSQAWgRAtAAQAVAAAOADQAQADAKAEIAXAGQALAEALAAQAPgBAJgEQAIgEAAgLIA4AAQAAAagUAUQgVATgtAAQgYAAgQgEIgagHIgVgJQgKgDgLgBQgTABgHAFQgIAGABANg");
	this.shape_751.setTransform(320.3,49.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AguEHIAAnLIhyAAIAAhCIFCAAIAABCIhuAAIAAHLg");
	this.shape_752.setTransform(201.3,54);

	this.VOLVER_ENTRANAS = new lib.VOLVER_1();
	this.VOLVER_ENTRANAS.name = "VOLVER_ENTRANAS";
	this.VOLVER_ENTRANAS.parent = this;
	this.VOLVER_ENTRANAS.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_ENTRANAS, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#0033CC").s().p("AhMB5IAAgTIBnjAIhnAAIAAgeICZAAIAAAZIhiC7IBiAAIAAAdg");
	this.shape_753.setTransform(682.2,383.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#0033CC").s().p("AhJB5IAAgdIBRAAQAFAAAEgDQADgDADgGIAEgLQACgGAAgIIAAiRIg7AAIAAgeIBoAAIAACvQAAAOgDAMQgEAMgGAJQgGAJgJAFQgIAFgLAAg");
	this.shape_754.setTransform(645.5,383.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#0033CC").s().p("AhLB5IAAjxICXAAIAAAeIhoAAIAABPIBMAAIAAAdIhMAAIAABng");
	this.shape_755.setTransform(590.4,383.6);

	this.LUPA_FORJAZ = new lib.LUPA_1();
	this.LUPA_FORJAZ.name = "LUPA_FORJAZ";
	this.LUPA_FORJAZ.parent = this;
	this.LUPA_FORJAZ.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_FORJAZ, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_7 = new lib.FORJAZ();
	this.instance_7.parent = this;
	this.instance_7.setTransform(491,405,0.378,0.371);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgEQgDgFgCgIQgDgIAAgMIAAgsQAAgLADgIQACgIADgFQAEgFAGgCQAHgCAJAAIBDAAIAAAUIg5AAIgGABIgEADIgBAHIgBAKIAAAuQAAAPAHAEQADABARABIAIAAIANgBIAVAAIAAAUg");
	this.shape_756.setTransform(570.1,810.8);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAiAAIAAAUgAgRg7IAAgYIAkAAIAAAYg");
	this.shape_757.setTransform(545.7,808.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAEAEADAIQABAIAAALIAABYg");
	this.shape_758.setTransform(509.1,810.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AgYBUQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgGQADgFAGgDQAFgDAGAAIAuAAIAAgKQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAYQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABgAgRhJIA7gKIAAATIg7AHg");
	this.shape_759.setTransform(460.3,808.8);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AAWBUIAAhVIgBgLIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHACADAFQAFAFACAHQABAIAAALIAABYgAAFhAIgHgDIgHgCIgHgBQgFAAgCABQgDACAAAEIgRAAQAAgJAHgGQAHgFANAAIAMABIAHACIAHACIAGABQAFAAADgCQADgBgBgDIARAAQABAIgHAGQgGAGgOAAIgMgBg");
	this.shape_760.setTransform(819.7,783.8);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgFQgDgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgEAEIgBAGIgBALIAAAtQAAAPAGAEQAEABARABIAIAAIANgBIAUAAIAAAUg");
	this.shape_761.setTransform(673.5,785.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AgTBAQgIAAgGgCQgHgCgEgFQgEgEgBgHQgCgIAAgLIAAhYIAeAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAABABIAFAAIAfAAIAAhrIAeAAIAAB/g");
	this.shape_762.setTransform(606.5,785.8);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAPAHAEQADABAQABIAJAAIANgBIAVAAIAAAUg");
	this.shape_763.setTransform(582.1,785.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgFgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYgAgMAFQgEABgCACQgCACgBAEIgBAJQAAAVAIAAIAlAAIAAgpIgZAAIgKACg");
	this.shape_764.setTransform(551.7,785.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AgXBUQgHAAgFgDQgFgDgEgFQgEgFgCgIQgCgHAAgJQAAgIACgIQACgHAEgFQAEgGAFgDQAFgDAHAAIAtAAIAAgKQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAZQgEABgCACQgCACgCAEIAAAJQAAAVAIAAIAkAAIAAgpIgYAAIgKACgAgRhIIA7gLIAAAUIg7AGg");
	this.shape_765.setTransform(496.9,783.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQABAIAAAMIAABXgAgMAFQgEABgCABQgCADgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_766.setTransform(755.1,760.8);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgFQgFgEgBgIQgCgIAAgMIAAgrQAAgMACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAALIAAAtQAAAQAHADQADABAQAAIAJAAIANAAIAVAAIAAAUg");
	this.shape_767.setTransform(706.3,760.8);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABADAFQAEAFADAHQABAIAAAMIAABXg");
	this.shape_768.setTransform(643.1,735.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgFQAFgFAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFACQAHABAEAFQAEAFACAHQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCADIAAAKQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_769.setTransform(630.9,735.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AgwBAIAAgMIA9hfIg9AAIAAgUIBhAAIAAAQIg5BbIA5AAIAAAUg");
	this.shape_770.setTransform(563.9,735.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGIgDgEIgGgBIgeAAIAABrIggAAIAAioIAgAAIAAAqIAnAAQAJgBAHACQAGACAEAFQAEAEACAIQABAHABAMIAABXg");
	this.shape_771.setTransform(539.5,733.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AgzBUIAAioIAfAAIAAAqIAnAAQASAAAHAKQAIALAAAWIAAAmQAAAZgIAKQgHAKgSAAgAgUBBIAVAAIALgBQADgBACgBQADgDABgEIAAgNIAAgqIAAgMIgCgGIgEgEIgGgBIgdAAg");
	this.shape_772.setTransform(472.5,733.7);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgDgHQgBgHAAgJQAAgIABgHQADgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQABAIABALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_773.setTransform(831.9,710.8);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGACQAHACADAEQAFAEACAIQABAIAAALIAABYg");
	this.shape_774.setTransform(819.7,710.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AgyBUIAAgUIAkAAIAAhXIgkAAIAAgUIBCAAIAABrIAiAAIAAAUgAgRg7IAAgYIAkAAIAAAYg");
	this.shape_775.setTransform(783.1,708.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AgzBUIAAinIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAmQAAAYgIALQgHAKgSAAgAgUBAIAVAAIAKAAQAEgBACgBQACgDABgFIABgLIAAgrIgBgLIgCgHIgDgEIgGgBIgdAAg");
	this.shape_776.setTransform(770.9,708.7);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AgxBAIAAgUIBDAAQAEAAADgEQACgEAAgIQAAgIgCgFQgDgDgEAAIgrAAQgHAAgFgDQgGgDgDgFQgEgEgBgIQgCgGAAgJQAAgSAHgJQAIgKAQAAIBDAAIAAAUIg8AAQgFAAgDADQgDAEAAAIQAAAPALAAIApAAQAHAAAFAEQAFACAEAFQADAEACAHQACAGAAAIQAAATgHAMQgIAKgOAAg");
	this.shape_777.setTransform(516.6,710.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#000000").s().p("AgQBRQgHAAgGgEQgGgDgEgGQgDgGgDgIQgCgIAAgJIAAhIQAAgKACgIQADgIADgGQAFgGAFgDQAGgEAHAAIBAAAIAAAUIgzAAQgDAAgDACIgEAGIgDAHIgBAKIAABIIABAJIADAIIAEAFQADACADAAIAzAAIAAAUg");
	this.shape_778.setTransform(758.7,684.1);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_779.setTransform(592.3,685.8);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgzBVIAAioIAfAAIAAAoIAnAAQASAAAHALQAIALAAAWIAAAnQAAAXgIALQgHALgSAAgAgUBAIAVAAIAKAAQAEAAACgDQACgCABgFIABgLIAAgsIgBgKIgCgHIgDgDIgGgBIgdAAg");
	this.shape_780.setTransform(580.1,683.7);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgGgDgHQgCgHAAgJQAAgIACgHQADgIAEgFQADgFAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQABAIABALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgXAAIgLABg");
	this.shape_781.setTransform(555.7,685.8);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgFQgDgGgCgHQgCgHAAgJQAAgIACgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAFACAHQABAIAAALIAABYgAgMAEQgEABgCADQgCACgCADIAAAJQAAAWAIAAIAlAAIAAgpIgZAAIgKABg");
	this.shape_782.setTransform(472.5,685.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgFgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQAAgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgCACgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_783.setTransform(712.5,660.8);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AgQBAQgJAAgHgCQgGgDgEgFQgDgEgDgIQgCgIAAgMIAAgrQAAgMACgIQADgIADgFQAEgFAGgCQAHgCAJAAIBCAAIAAAUIg4AAIgGABIgEAEIgBAGIgBALIAAAtQAAAPAGAEQAEACARgBIAIAAIANAAIAUAAIAAAUg");
	this.shape_784.setTransform(651.5,660.8);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgeBYIAAgUIAbAAIAMAAQAFgBADgCQACgCABgEIABgLIAAgIIgmAAQgKAAgGgCQgHgDgDgFQgEgEgCgIQgCgIAAgLIAAgsQAAgMACgIQACgIAEgFQAEgFAGgCQAHgCAJAAIBFAAIAACFQAAAMgCAIQgCAIgDAFQgEAFgHACQgGACgJAAgAgJhDQgFABgCACQgDACAAAEIgBAKIAAAwQAAALADAFQACAEAHAAIAdAAIAAhXIgVAAIgJAAg");
	this.shape_785.setTransform(567.4,663.2);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AAVBVIAAhWIAAgKIgCgHIgDgDIgGgBIgeAAIAABrIggAAIAAipIAgAAIAAAqIAnAAQAJAAAHABQAGACAEAEQAEAGACAHQACAIAAALIAABYg");
	this.shape_786.setTransform(543,658.7);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQACAIgBAMIAABXgAgMAFQgEAAgCACQgDADAAAEIgBAJQAAAVAIAAIAlAAIAAgoIgYAAIgLABg");
	this.shape_787.setTransform(819.7,635.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgwBAIAAgMIA9hfIg9AAIAAgUIBhAAIAAAQIg5BbIA5AAIAAAUg");
	this.shape_788.setTransform(807.5,635.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AAWBAIAAhVIgBgLIgCgHQgBgCgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADADAEQAEAEADAIQABAIAAAMIAABXg");
	this.shape_789.setTransform(795.3,635.8);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AAbBAIAAhVIgBgLIgCgHIgEgDIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGADAEAEQAEAFACAIQACAHAAAMIAABXg");
	this.shape_790.setTransform(538,635.8);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADADAEQAFAEACAIQABAIAAAMIAABXg");
	this.shape_791.setTransform(484.7,635.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgEgCgIQgCgHAAgJQAAgIACgIQACgHADgEQAFgGAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHADAEAEQAEAEACAIQABAIAAAMIAABXgAgMAFQgEAAgCACQgCADgCAEIAAAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_792.setTransform(472.5,635.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AAVBAIAAhVIAAgLIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHABQAGADAEAEQADAEADAIQABAIAAAMIAABXg");
	this.shape_793.setTransform(460.3,635.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgGQgEgFgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAFACAHQACAIAAAMIAABXgAgMAEQgEABgCACQgDADgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_794.setTransform(707.6,610.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("Ag1BYIAAivIBJAAQAIAAAHACQAHACADAFQAEAFADAIQABAIAAAMIAAAsQAAALgBAIQgCAIgEAEQgEAFgHADQgGACgJAAIgpAAIAAAwgAgVAUIAfAAIAGgBQACgBACgCIACgGIABgKIAAgwIgCgLQgBgEgCgCIgIgCIgKAAIgVAAg");
	this.shape_795.setTransform(671,613.2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgzBRIAAgNIBFiAIhFAAIAAgUIBnAAIAAARIhCB8IBCAAIAAAUg");
	this.shape_796.setTransform(509.1,609.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AgxBRIAAihIBjAAIAAAUIhEAAIAAA1IAyAAIAAATIgyAAIAABFg");
	this.shape_797.setTransform(448.1,609.1);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AinEHIAAgqIDjmhIjjAAIAAhCIFPAAIAAA2IjXGWIDXAAIAABBg");
	this.shape_798.setTransform(320.4,54);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AifEHIAAhBICwAAQAKAAAIgGQAJgHAGgLQAGgLADgOQADgOAAgPIAAk8Ih/AAIAAhCIDhAAIAAF+QAAAegIAaQgGAZgOAUQgNAUgTALQgSALgXAAg");
	this.shape_799.setTransform(241,54);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AikEHIAAoNIFJAAIAABCIjiAAIAACsICmAAIAAA/IimAAIAADgg");
	this.shape_800.setTransform(121.9,54);

	this.VOLVER_FORJAZ = new lib.VOLVER_1();
	this.VOLVER_FORJAZ.name = "VOLVER_FORJAZ";
	this.VOLVER_FORJAZ.parent = this;
	this.VOLVER_FORJAZ.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_FORJAZ, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#0033CC").s().p("AgVB5IAAjTIg1AAIAAgeICVAAIAAAeIgzAAIAADTg");
	this.shape_801.setTransform(709.7,383.6);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#0033CC").s().p("AAZB5IhCihIAAChIgkAAIAAjxIAuAAIBIC1IAAi1IAlAAIAADxg");
	this.shape_802.setTransform(691.3,383.6);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#0033CC").s().p("AAsB5IAAiYIgaCYIgjAAIgZiXIAACXIgjAAIAAjxIAuAAIAfC4IAfi4IAvAAIAADxg");
	this.shape_803.setTransform(654.6,383.6);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#0033CC").s().p("AgVB5IAAjTIg1AAIAAgeICVAAIAAAeIgzAAIAADTg");
	this.shape_804.setTransform(599.6,383.6);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#0033CC").s().p("AAZB5IhBihIAAChIglAAIAAjxIAvAAIBIC1IAAi1IAkAAIAADxg");
	this.shape_805.setTransform(581.2,383.6);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#0033CC").s().p("AgeB5IgzjxIAvAAIAgDBIAEAAIAmjBIAqAAIg4Dxg");
	this.shape_806.setTransform(544.5,383.6);

	this.LUPA_VENTORMENTA = new lib.LUPA_1();
	this.LUPA_VENTORMENTA.name = "LUPA_VENTORMENTA";
	this.LUPA_VENTORMENTA.parent = this;
	this.LUPA_VENTORMENTA.setTransform(747,497,1,1,0,0,0,25,25);
	new cjs.ButtonHelper(this.LUPA_VENTORMENTA, 0, 1, 2, false, new lib.LUPA_1(), 3);

	this.instance_8 = new lib.VENTORMENTA();
	this.instance_8.parent = this;
	this.instance_8.setTransform(491,405,0.378,0.371);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AAWBVIAAhWIgBgLIgCgGIgEgDIgFgBIgeAAIAABrIgfAAIAAipIAfAAIAAAqIAnAAQAKAAAFABQAHACAEAFQAEAFACAHQABAIAAALIAABYg");
	this.shape_807.setTransform(582.3,758.7);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgGgDgEgGQgDgEgCgIQgDgHAAgJQAAgIADgIQACgHADgEQAEgGAGgDQAFgDAHAAIAuAAIAAgLQgBgKgCgDQgDgEgGAAIgvAAIAAgUIA4AAQAKAAAFABQAHACAEAFQAEAEACAIQABAIAAAMIAABXgAgMAFQgEABgCABQgCADgBAEIgBAJQAAAVAIAAIAlAAIAAgoIgZAAIgKABg");
	this.shape_808.setTransform(557.9,760.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AAVBUIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGABAEAFQADAFADAHQABAIAAAMIAABXgAAFhAIgHgCIgHgDIgHgBQgFAAgDACQgCABAAAEIgRAAQABgKAGgEQAHgGANAAIALABIAIACIAHACIAHABQAEAAADgCQACAAABgEIARAAQAAAIgHAGQgGAGgOAAIgMgBg");
	this.shape_809.setTransform(713.2,733.8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AgyBUIAAgTIAjAAIAAiAIgjAAIAAgVIBBAAIAACVIAkAAIAAATg");
	this.shape_810.setTransform(521.3,733.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgxBUIAAgTIAjAAIAAhYIgjAAIAAgTIBBAAIAABrIAjAAIAAATgAgRg7IAAgZIAjAAIAAAZg");
	this.shape_811.setTransform(509.1,733.7);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AAVBAIAAhWIAAgKIgCgHQgCgCgCgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAHACQAGACAEAEQAEAEACAIQABAIAAALIAABYg");
	this.shape_812.setTransform(819.5,710.8);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgTBAIglh/IAgAAIAYBgIABAAIAYhgIAgAAIglB/g");
	this.shape_813.setTransform(679.5,710.8);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgGgCgHQgCgHAAgJQAAgIACgHQACgIAEgFQAEgFAFgDQAFgDAGAAIAuAAIAAgLQABgKgDgEQgDgDgGAAIgvAAIAAgUIA4AAQAJAAAHACQAGACAEAEQAEAEACAIQACAIAAALIAABYgAgMAEQgEABgCADQgDACgBADIAAAJQAAAWAIAAIAkAAIAAgpIgYAAIgKABg");
	this.shape_814.setTransform(649.1,710.8);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AAWBAIAAhWIgBgKIgCgGQgBgDgDgBIgGgBIgdAAIAABrIgfAAIAAh/IBGAAQAJAAAGABQAHADADAEQAFAFABAHQACAIAAALIAABYg");
	this.shape_815.setTransform(746.5,685.8);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AgQBAQgJAAgGgCQgHgDgDgEQgFgFgBgIQgCgIAAgMIAAgsQAAgLACgIQABgIAFgFQADgFAHgCQAGgCAJAAIBDAAIAAAUIg5AAIgGABIgEAEIgCAGIAAAKIAAAuQAAAPAHAEQADABAQABIAJAAIANgBIAVAAIAAAUg");
	this.shape_816.setTransform(722.1,685.8);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgEgFQgDgGgDgHQgCgHAAgJQAAgIACgHQADgIADgFQAEgFAGgDQAFgDAGAAIAvAAIAAgLQAAgKgDgEQgDgDgHAAIguAAIAAgUIA4AAQAJAAAHABQAGADAEAEQAEAFACAHQABAIABALIAABYgAgMAEQgEABgCADQgCACgBADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_817.setTransform(584.2,685.8);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AAVBVIAAhWIAAgKIgCgHIgEgDIgFgBIgeAAIAABrIgfAAIAAioIAfAAIAAAoIAnAAQAJAAAHACQAGACAEAEQAEAGACAHQACAHAAAMIAABYg");
	this.shape_818.setTransform(521.3,683.7);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgEgFQgEgFgCgIQgCgHAAgJQAAgIACgIQACgHAEgEQAEgGAFgDQAFgDAHAAIAtAAIAAgLQABgKgDgDQgDgEgGAAIgvAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgYAAIgKABg");
	this.shape_819.setTransform(739,660.8);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AAVBVIAAhWIAAgKIgCgHIgDgDIgHgBIgdAAIAABrIggAAIAAipIAgAAIAAAqIAnAAQAJAAAHABQAGACAEAEQAEAGACAHQABAIABALIAABYg");
	this.shape_820.setTransform(702.4,658.7);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgFgDgEgFQgEgFgDgIQgBgHAAgJQAAgIABgIQADgHAEgEQAEgGAFgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgDACgBAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_821.setTransform(589.8,660.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AgRBVQgJgBgHgCQgGgCgEgGQgEgGgCgIQgCgIAAgMIAAgnQAAgLACgJQACgIAEgFQAEgGAGgCQAHgCAJAAIAmAAIAAgqIAfAAIAACpgAgNgVQgDABgBACIgDAHIAAAKIAAAeIABATQABAHACAEQADADAEABIAKACIAUAAIAAhXIgdAAIgFABg");
	this.shape_822.setTransform(577.6,658.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AgSBAQgKAAgFgCQgHgCgEgFQgEgEgCgIQgBgHAAgLIAAhYIAeAAIAABWIABALIACAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIAdAAIAAhrIAgAAIAAB/g");
	this.shape_823.setTransform(565.4,660.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgxBVIAAgUIAjAAIAAhXIgjAAIAAgUIBBAAIAABrIAjAAIAAAUgAgRg6IAAgaIAjAAIAAAag");
	this.shape_824.setTransform(553.2,658.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AggBYIAUg0Igth7IAiAAIAaBTIABAAIAchTIAaAAIg/Cvg");
	this.shape_825.setTransform(472.5,663.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgYBAQgGAAgFgDQgGgDgDgFQgEgFgDgIQgCgHAAgJQAAgIACgIQADgHAEgEQADgGAGgDQAFgDAGAAIAuAAIAAgLQAAgKgCgDQgDgEgHAAIguAAIAAgUIA4AAQAJAAAHABQAGACAEAFQAEAFACAHQABAIABALIAABYgAgMAFQgEABgCACQgCACgCAEIAAAJQAAAVAIAAIAkAAIAAgoIgXAAIgLABg");
	this.shape_826.setTransform(460.3,660.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AAbBAIAAhVIgBgLIgCgGIgEgEIgGgBIgEAAIAABrIgUAAIAAhrIgPAAIAABrIgcAAIAAh/IBJAAQAJAAAHABQAGACAEAFQAEAFACAHQACAIAAALIAABYg");
	this.shape_827.setTransform(448.1,660.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AggBYIAUg0Igth7IAiAAIAaBTIABAAIAchTIAaAAIg/Cvg");
	this.shape_828.setTransform(794.2,638.2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGIgDgEIgGgBIgeAAIAABrIggAAIAAioIAgAAIAAAqIAnAAQAJgBAHACQAGACAEAFQAEAEACAIQACAHAAAMIAABXg");
	this.shape_829.setTransform(768.9,633.7);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AAVBUIAAhVIAAgLIgCgGIgDgEIgHgBIgdAAIAABrIggAAIAAioIAgAAIAAAqIAnAAQAJgBAHACQAGACAEAFQAEAEACAIQABAHABAMIAABXg");
	this.shape_830.setTransform(571.9,633.7);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AgXBAQgHAAgFgDQgFgDgFgGQgDgFgCgHQgDgHAAgJQAAgIADgHQACgIADgFQAFgFAFgDQAFgDAHAAIAuAAIAAgLQgBgKgCgEQgDgDgHAAIguAAIAAgUIA4AAQAKAAAFACQAHACAEAEQAEAFACAHQACAIgBAMIAABXgAgMAEQgEABgCACQgDADAAADIgBAJQAAAWAIAAIAlAAIAAgpIgYAAIgLABg");
	this.shape_831.setTransform(720.7,610.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AAWBRIAAgnQAAgfgOAAIgbAAIAABGIggAAIAAihIBCAAQATAAAIALQAJAKAAAYQAAAMgFAJQgEAKgLAEIAJAEQADACADAEQACADACAFQABAFABAHIAAAzgAgTgIIAbAAQAHAAADgHQAFgHAAgMQAAgMgFgHQgDgHgHAAIgbAAg");
	this.shape_832.setTransform(509.1,609.1);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AARBRIgshsIAABsIgYAAIAAihIAfAAIAwB5IAAh5IAYAAIAAChg");
	this.shape_833.setTransform(472.5,609.1);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AA4EHIiRlgIAAFgIhPAAIAAoNIBkAAICeGLIAAmLIBPAAIAAINg");
	this.shape_834.setTransform(439.4,54);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("ABIEHIAAiAQgBhkgvAAIhZAAIAADkIhmAAIAAoNIDWAAQA9AAAcAjQAdAiAABNQAAAogOAeQgPAeglAPQAQAFAMAIQANAIAJALQAJAMAFAQQAEAQABAXIAAClgAhBgdIBbAAQAWAAANgWQAMgXAAglQAAgngMgXQgNgXgWAAIhbAAg");
	this.shape_835.setTransform(320.4,54);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AguEHIAAnLIhyAAIAAhCIFCAAIAABCIhtAAIAAHLg");
	this.shape_836.setTransform(241,54);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AhCEHIhvoNIBkAAIBIGjIAJAAIBRmjIBdAAIh5INg");
	this.shape_837.setTransform(121.9,54);

	this.VOLVER_VENTORMENTA = new lib.VOLVER_1();
	this.VOLVER_VENTORMENTA.name = "VOLVER_VENTORMENTA";
	this.VOLVER_VENTORMENTA.parent = this;
	this.VOLVER_VENTORMENTA.setTransform(50,161);
	new cjs.ButtonHelper(this.VOLVER_VENTORMENTA, 0, 1, 2, false, new lib.VOLVER_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.286,scaleY:0.286,x:491,y:405}},{t:this.shape_180},{t:this.shape_179,p:{x:460.3,y:609.1}},{t:this.shape_178,p:{x:490.7,y:609.1}},{t:this.shape_177},{t:this.shape_176,p:{x:515.1}},{t:this.shape_175,p:{x:527.3,y:609.1}},{t:this.shape_174,p:{x:539.5,y:609.1}},{t:this.shape_173,p:{x:551.7}},{t:this.shape_172,p:{x:582.1}},{t:this.shape_171,p:{x:594.3,y:610.8}},{t:this.shape_170,p:{x:624.7,y:608.7}},{t:this.shape_169},{t:this.shape_168,p:{x:667.3}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165,p:{x:703.9}},{t:this.shape_164},{t:this.shape_163,p:{x:728.3}},{t:this.shape_162,p:{x:758.7}},{t:this.shape_161,p:{x:770.9}},{t:this.shape_160},{t:this.shape_159,p:{x:795.3}},{t:this.shape_158,p:{x:807.5,y:609.1}},{t:this.shape_157},{t:this.shape_156,p:{x:831.9,y:608.7}},{t:this.shape_155,p:{x:448.1}},{t:this.shape_154},{t:this.shape_153,p:{x:489.7}},{t:this.shape_152,p:{x:501.9}},{t:this.shape_151,p:{x:514.1}},{t:this.shape_150,p:{x:543.5}},{t:this.shape_149,p:{x:555.7,y:635.8}},{t:this.shape_148,p:{x:567.9}},{t:this.shape_147,p:{x:580.1}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{x:616.7}},{t:this.shape_143,p:{x:628.9}},{t:this.shape_142},{t:this.shape_141,p:{x:670.5}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:724.3,y:633.7}},{t:this.shape_137},{t:this.shape_136,p:{x:748.7}},{t:this.shape_135,p:{x:778.1}},{t:this.shape_134},{t:this.shape_133,p:{x:819.7}},{t:this.shape_132,p:{x:831.9}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:472.5,y:659.1}},{t:this.shape_128,p:{x:484.7,y:660.8}},{t:this.shape_127,p:{x:496.9}},{t:this.shape_126,p:{x:509.1,y:660.8}},{t:this.shape_125,p:{x:521.3}},{t:this.shape_124,p:{x:571.5}},{t:this.shape_123,p:{x:583.7}},{t:this.shape_122,p:{x:595.9}},{t:this.shape_121,p:{x:608.1,y:659.1}},{t:this.shape_120,p:{x:620.3}},{t:this.shape_119,p:{x:670.5}},{t:this.shape_118,p:{x:682.7}},{t:this.shape_117},{t:this.shape_116,p:{x:745.1}},{t:this.shape_115},{t:this.shape_114,p:{x:807.5}},{t:this.shape_113,p:{x:819.7}},{t:this.shape_112,p:{x:831.9}},{t:this.shape_111,p:{x:448.1}},{t:this.shape_110,p:{x:460.3,y:685.8}},{t:this.shape_109,p:{x:472.5,y:685.8}},{t:this.shape_108,p:{x:484.7}},{t:this.shape_107},{t:this.shape_106,p:{y:685.8,x:509.1}},{t:this.shape_105},{t:this.shape_104,p:{x:533.5}},{t:this.shape_103,p:{x:545.7,y:690.8}},{t:this.shape_102,p:{x:571.2,y:684.1}},{t:this.shape_101,p:{x:583.4,y:683.7}},{t:this.shape_100,p:{x:608.9,y:683.7}},{t:this.shape_99,p:{x:621.1,y:683.8}},{t:this.shape_98,p:{x:633.3}},{t:this.shape_97,p:{x:645.5}},{t:this.shape_96,p:{x:657.7,y:685.8}},{t:this.shape_95,p:{x:683.2}},{t:this.shape_94,p:{x:695.4}},{t:this.shape_93,p:{x:707.6,y:683.7}},{t:this.shape_92,p:{x:733.1,y:684.1}},{t:this.shape_91},{t:this.shape_90,p:{x:757.5,y:685.8}},{t:this.shape_89,p:{x:769.7}},{t:this.shape_88},{t:this.shape_87,p:{x:794.1,y:685.8}},{t:this.shape_86,p:{x:819.6}},{t:this.shape_85,p:{x:831.8}},{t:this.shape_84,p:{x:448.1}},{t:this.shape_83,p:{x:460.3,y:708.7}},{t:this.shape_82},{t:this.shape_81,p:{x:516.6}},{t:this.shape_80,p:{x:528.8}},{t:this.shape_79},{t:this.shape_78,p:{x:553.2}},{t:this.shape_77,p:{x:565.4,y:709.1}},{t:this.shape_76},{t:this.shape_75,p:{x:621.7,y:709.1}},{t:this.shape_74,p:{x:633.9}},{t:this.shape_73,p:{x:646.1,y:708.7}},{t:this.shape_72,p:{x:658.3}},{t:this.shape_71,p:{x:670.5}},{t:this.shape_70,p:{x:682.7,y:717.8}},{t:this.shape_69,p:{x:726.8,y:713.2}},{t:this.shape_68},{t:this.shape_67,p:{x:751.2,y:708.7}},{t:this.shape_66,p:{x:763.4}},{t:this.shape_65,p:{x:775.6,y:710.8}},{t:this.shape_64,p:{x:819.7}},{t:this.shape_63,p:{x:831.9}},{t:this.shape_62,p:{x:448.1}},{t:this.shape_61,p:{x:460.3}},{t:this.shape_60},{t:this.shape_59,p:{x:484.7,y:735.8}},{t:this.shape_58,p:{x:496.9}},{t:this.shape_57},{t:this.shape_56,p:{x:521.3,y:734.1}},{t:this.shape_55,p:{x:533.5}},{t:this.shape_54,p:{x:545.7}},{t:this.shape_53},{t:this.shape_52,p:{x:586.8}},{t:this.shape_51,p:{x:599}},{t:this.shape_50,p:{x:611.2}},{t:this.shape_49},{t:this.shape_48,p:{x:652.2}},{t:this.shape_47,p:{x:664.4}},{t:this.shape_46,p:{x:693.3}},{t:this.shape_45,p:{x:705.5}},{t:this.shape_44,p:{x:717.7}},{t:this.shape_43,p:{x:746.5}},{t:this.shape_42,p:{x:758.7}},{t:this.shape_41,p:{x:770.9}},{t:this.shape_40,p:{x:783.1}},{t:this.shape_39,p:{x:795.3,y:734.1}},{t:this.shape_38,p:{x:807.5,y:735.8}},{t:this.shape_37,p:{x:819.7}},{t:this.shape_36,p:{x:831.9}},{t:this.shape_35,p:{x:448.1}},{t:this.shape_34,p:{x:460.3}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:518.2,y:759.1}},{t:this.shape_30,p:{x:530.4}},{t:this.shape_29,p:{x:542.6,y:758.7}},{t:this.shape_28,p:{x:554.8,y:758.7}},{t:this.shape_27,p:{x:567}},{t:this.shape_26,p:{x:600.4}},{t:this.shape_25},{t:this.shape_24,p:{x:646.1}},{t:this.shape_23,p:{x:658.3,y:758.7}},{t:this.shape_22,p:{x:691.7,y:759.1}},{t:this.shape_21,p:{x:703.9,y:760.8}},{t:this.shape_20},{t:this.shape_19,p:{x:728.3}},{t:this.shape_18,p:{x:761.8}},{t:this.shape_17,p:{x:774}},{t:this.shape_16,p:{x:807.4,y:758.7}},{t:this.shape_15,p:{x:819.6}},{t:this.shape_14,p:{x:831.8}},{t:this.shape_13,p:{x:448.1,y:784.1}},{t:this.shape_12,p:{x:460.3}},{t:this.shape_11,p:{x:472.5}},{t:this.shape_10,p:{x:484.7}},{t:this.shape_9,p:{x:496.9}},{t:this.shape_8,p:{x:509.1,y:790.8}},{t:this.LUPA_EXODAR},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:617.9}},{t:this.shape_4},{t:this.shape_3,p:{x:654.6}},{t:this.shape_2},{t:this.shape_1,p:{x:691.3}},{t:this.shape,p:{x:709.7}}]},2).to({state:[{t:this.instance,p:{scaleX:1.225,scaleY:1.181,x:0,y:111}},{t:this.VOLVER_EXODAR},{t:this.shape_188,p:{x:121.9}},{t:this.shape_187,p:{x:161.5}},{t:this.shape_186,p:{x:241}},{t:this.shape_185},{t:this.shape_184,p:{x:320.4}},{t:this.shape_183,p:{x:360.1}},{t:this.shape_182,p:{x:399.8}},{t:this.shape_181}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.378,scaleY:0.371,x:491,y:405}},{t:this.shape_175,p:{x:448.1,y:609.1}},{t:this.shape_174,p:{x:460.3,y:609.1}},{t:this.shape_173,p:{x:472.5}},{t:this.shape_342,p:{x:484.7}},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_172,p:{x:577.6}},{t:this.shape_171,p:{x:589.8,y:610.8}},{t:this.shape_336,p:{x:621.7,y:608.7}},{t:this.shape_335},{t:this.shape_334,p:{x:665.8}},{t:this.shape_333,p:{x:678}},{t:this.shape_332,p:{x:690.2}},{t:this.shape_165,p:{x:702.4}},{t:this.shape_331,p:{x:714.6}},{t:this.shape_163,p:{x:726.8}},{t:this.shape_162,p:{x:758.7}},{t:this.shape_161,p:{x:770.9}},{t:this.shape_160},{t:this.shape_159,p:{x:795.3}},{t:this.shape_330,p:{x:807.5,y:609.1}},{t:this.shape_157},{t:this.shape_170,p:{x:831.9,y:608.7}},{t:this.shape_329,p:{x:448.1}},{t:this.shape_154},{t:this.shape_328,p:{x:489}},{t:this.shape_327,p:{x:501.2}},{t:this.shape_326,p:{x:513.4}},{t:this.shape_147,p:{x:542}},{t:this.shape_325,p:{x:554.2}},{t:this.shape_324},{t:this.shape_323,p:{x:578.6}},{t:this.shape_151,p:{x:590.8}},{t:this.shape_155,p:{x:619.5}},{t:this.shape_135,p:{x:631.7}},{t:this.shape_153,p:{x:660.3}},{t:this.shape_322,p:{x:672.5}},{t:this.shape_321},{t:this.shape_152,p:{x:713.4}},{t:this.shape_320},{t:this.shape_319,p:{x:737.8,y:633.7}},{t:this.shape_141,p:{x:750}},{t:this.shape_150,p:{x:778.6}},{t:this.shape_133,p:{x:790.8}},{t:this.shape_132,p:{x:819.5}},{t:this.shape_318},{t:this.shape_317,p:{y:659.1,x:448.1}},{t:this.shape_16,p:{x:460.3,y:658.7}},{t:this.shape_316},{t:this.shape_315,p:{x:484.7}},{t:this.shape_314,p:{x:496.9,y:660.8}},{t:this.shape_106,p:{y:660.8,x:509.1}},{t:this.shape_313},{t:this.shape_8,p:{x:533.5,y:665.8}},{t:this.shape_312},{t:this.shape_311,p:{x:588.2}},{t:this.shape_310,p:{x:630.7}},{t:this.shape_309},{t:this.shape_126,p:{x:655.1,y:660.8}},{t:this.shape_308},{t:this.shape_122,p:{x:709.8}},{t:this.shape_307},{t:this.shape_306},{t:this.shape_120,p:{x:746.4}},{t:this.shape_305},{t:this.shape_119,p:{x:770.8}},{t:this.shape_124,p:{x:783}},{t:this.shape_158,p:{x:795.2,y:659.1}},{t:this.shape_304,p:{y:658.7,x:807.4}},{t:this.shape_114,p:{x:819.6}},{t:this.shape_303,p:{x:831.8}},{t:this.shape_302,p:{x:448.1,y:684.1}},{t:this.shape_301,p:{x:460.3,y:688.2}},{t:this.shape_300,p:{x:472.5,y:685.8}},{t:this.shape_299},{t:this.shape_298,p:{x:496.9}},{t:this.shape_95,p:{x:509.1}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294,p:{x:572}},{t:this.shape_293,p:{x:584.2,y:685.8}},{t:this.shape_292,p:{x:596.4,y:685.8}},{t:this.shape_291,p:{x:608.6,y:685.8}},{t:this.shape_290},{t:this.shape_289,p:{x:633,y:685.8}},{t:this.shape_288,p:{x:645.2,y:683.7}},{t:this.shape_86,p:{x:657.4}},{t:this.shape_287},{t:this.shape_129,p:{x:681.8,y:684.1}},{t:this.shape_286,p:{x:694}},{t:this.shape_285,p:{x:706.2}},{t:this.shape_284,p:{x:732.4,y:685.8}},{t:this.shape_283},{t:this.shape_85,p:{x:756.8}},{t:this.shape_282},{t:this.shape_89,p:{x:781.2}},{t:this.shape_281,p:{x:793.4}},{t:this.shape_97,p:{x:819.7}},{t:this.shape_280,p:{x:831.9}},{t:this.shape_279,p:{x:448.1}},{t:this.shape_278,p:{x:460.3}},{t:this.shape_277,p:{x:487.7,y:709.1}},{t:this.shape_84,p:{x:499.9}},{t:this.shape_276,p:{x:512.1}},{t:this.shape_275,p:{y:713.2}},{t:this.shape_274,p:{x:536.5}},{t:this.shape_273,p:{x:548.7}},{t:this.shape_272,p:{x:576}},{t:this.shape_78,p:{x:588.2}},{t:this.shape_271,p:{x:615.6}},{t:this.shape_270,p:{x:627.8,y:710.8}},{t:this.shape_179,p:{x:655.1,y:709.1}},{t:this.shape_269,p:{x:667.3}},{t:this.shape_71,p:{x:679.5}},{t:this.shape_268},{t:this.shape_267,p:{x:703.9,y:717.8}},{t:this.shape_266,p:{x:731.4,y:711.1}},{t:this.shape_265},{t:this.shape_264,p:{x:755.7}},{t:this.shape_121,p:{x:767.9,y:709.1}},{t:this.shape_263,p:{x:780.1}},{t:this.shape_262},{t:this.shape_80,p:{x:819.6}},{t:this.shape_261},{t:this.shape_37,p:{x:448.1}},{t:this.shape_77,p:{x:460.3,y:734.1}},{t:this.shape_51,p:{x:472.5}},{t:this.shape_260,p:{x:484.7}},{t:this.shape_40,p:{x:496.9}},{t:this.shape_259,p:{x:538,y:734.1}},{t:this.shape_258,p:{x:550.2}},{t:this.shape_38,p:{x:562.4,y:735.8}},{t:this.shape_43,p:{x:574.6}},{t:this.shape_257,p:{x:586.8}},{t:this.shape_256,p:{x:599}},{t:this.shape_255,p:{x:611.2}},{t:this.shape_36,p:{x:623.4}},{t:this.shape_48,p:{x:664.4}},{t:this.shape_62,p:{x:676.6}},{t:this.shape_92,p:{x:717.7,y:734.1}},{t:this.shape_46,p:{x:729.9}},{t:this.shape_254,p:{x:742.1,y:735.8}},{t:this.shape_253},{t:this.shape_41,p:{x:766.5}},{t:this.shape_252,p:{x:778.7,y:740.8}},{t:this.shape_13,p:{x:819.7,y:734.1}},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248,p:{x:472.5}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245,p:{x:509.1}},{t:this.shape_244,p:{x:544.1}},{t:this.shape_243,p:{x:556.3}},{t:this.shape_56,p:{x:568.5,y:759.1}},{t:this.shape_242},{t:this.shape_35,p:{x:615.6}},{t:this.shape_241,p:{x:627.8}},{t:this.shape_14,p:{x:640}},{t:this.shape_240,p:{x:652.2}},{t:this.shape_239},{t:this.shape_30,p:{x:676.6}},{t:this.shape_18,p:{x:688.8}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236,p:{x:748.2}},{t:this.shape_235,p:{x:760.4}},{t:this.shape_234,p:{x:772.6}},{t:this.shape_233},{t:this.shape_232,p:{x:819.7}},{t:this.shape_231},{t:this.shape_230,p:{x:448.1}},{t:this.shape_229},{t:this.shape_228,p:{x:472.5,y:785.8}},{t:this.shape_227,p:{x:484.7,y:783.7}},{t:this.shape_226},{t:this.shape_225,p:{x:528.8}},{t:this.shape_224},{t:this.shape_39,p:{x:572.9,y:784.1}},{t:this.shape_223,p:{x:585.1}},{t:this.shape_222,p:{x:597.3,y:785.8}},{t:this.shape_221,p:{x:609.5,y:785.8}},{t:this.shape_220},{t:this.shape_219,p:{x:633.9,y:785.8}},{t:this.shape_218},{t:this.shape_9,p:{x:658.3}},{t:this.shape_217,p:{x:690.2}},{t:this.shape_93,p:{x:702.4,y:783.7}},{t:this.shape_216,p:{x:714.6,y:785.8}},{t:this.shape_215,p:{x:726.8}},{t:this.shape_214,p:{x:739}},{t:this.shape_213,p:{x:751.2}},{t:this.shape_212,p:{x:763.4}},{t:this.shape_211,p:{x:775.6}},{t:this.shape_128,p:{x:787.8,y:785.8}},{t:this.shape_210,p:{x:819.7}},{t:this.shape_10,p:{x:831.9}},{t:this.shape_109,p:{x:448.1,y:810.8}},{t:this.shape_209,p:{x:460.3}},{t:this.shape_208},{t:this.shape_110,p:{x:498,y:810.8}},{t:this.shape_207},{t:this.shape_206,p:{x:522.4,y:810.8}},{t:this.shape_83,p:{x:534.6,y:808.7}},{t:this.shape_205},{t:this.shape_204,p:{x:572.3}},{t:this.shape_203},{t:this.shape_31,p:{x:596.7,y:809.1}},{t:this.shape_96,p:{x:608.9,y:810.8}},{t:this.shape_202,p:{x:621.1,y:810.8}},{t:this.shape_73,p:{x:633.3,y:808.7}},{t:this.shape_70,p:{x:645.5,y:817.8}},{t:this.shape_87,p:{x:671,y:810.8}},{t:this.shape_201,p:{x:683.2,y:810.8}},{t:this.shape_200,p:{x:695.4}},{t:this.shape_199,p:{x:707.6}},{t:this.shape_198,p:{y:810.8}},{t:this.shape_197,p:{x:732}},{t:this.shape_196,p:{x:744.2,y:810.8}},{t:this.shape_195,p:{x:769.7,y:813.2}},{t:this.shape_90,p:{x:781.9,y:810.8}},{t:this.shape_21,p:{x:794.1,y:810.8}},{t:this.shape_194,p:{x:819.6,y:810.8}},{t:this.shape_193,p:{x:831.8,y:810.8}},{t:this.shape_156,p:{x:448.1,y:833.7}},{t:this.shape_192},{t:this.shape_191,p:{x:472.5,y:838.2}},{t:this.shape_190,p:{x:484.7}},{t:this.shape_189,p:{x:496.9,y:840.8}},{t:this.LUPA_DARNASSUS}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.622,scaleY:1.532,x:0,y:111}},{t:this.VOLVER_DARNASSUS},{t:this.shape_183,p:{x:121.9}},{t:this.shape_349,p:{x:161.6}},{t:this.shape_348,p:{x:201.3}},{t:this.shape_347,p:{x:240.9}},{t:this.shape_182,p:{x:280.7}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_434,p:{y:609.1}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_22,p:{x:484.7,y:609.1}},{t:this.shape_175,p:{x:520,y:609.1}},{t:this.shape_102,p:{x:532.2,y:609.1}},{t:this.shape_13,p:{x:544.3,y:609.1}},{t:this.shape_277,p:{x:579.6,y:609.1}},{t:this.shape_431,p:{x:591.8}},{t:this.shape_430},{t:this.shape_92,p:{x:616.2,y:609.1}},{t:this.shape_429,p:{x:628.4}},{t:this.shape_176,p:{x:640.6}},{t:this.shape_428,p:{x:675.9}},{t:this.shape_171,p:{x:688.1,y:610.8}},{t:this.shape_156,p:{x:723.3,y:608.7}},{t:this.shape_427},{t:this.shape_162,p:{x:770.8}},{t:this.shape_426},{t:this.shape_332,p:{x:795.2}},{t:this.shape_165,p:{x:807.4}},{t:this.shape_425,p:{x:819.6,y:610.8}},{t:this.shape_163,p:{x:831.8}},{t:this.shape_424},{t:this.shape_423,p:{x:460.3}},{t:this.shape_422,p:{y:638.2}},{t:this.shape_421,p:{x:484.7,y:633.7}},{t:this.shape_420,p:{x:496.9,y:634.1}},{t:this.shape_419},{t:this.shape_153,p:{x:521.3}},{t:this.shape_418,p:{x:547.1,y:634.1}},{t:this.shape_417},{t:this.shape_254,p:{x:571.5,y:635.8}},{t:this.shape_416,p:{x:583.7,y:635.8}},{t:this.shape_147,p:{x:595.9}},{t:this.shape_415,p:{x:608.1}},{t:this.shape_70,p:{x:620.3,y:642.8}},{t:this.shape_414},{t:this.shape_413,p:{x:658.3}},{t:this.shape_412,p:{x:670.5,y:633.7}},{t:this.shape_411,p:{x:682.7}},{t:this.shape_410,p:{x:694.9}},{t:this.shape_150,p:{x:707.1}},{t:this.shape_322,p:{x:719.3}},{t:this.shape_409,p:{x:745.1}},{t:this.shape_132,p:{x:757.3}},{t:this.shape_408},{t:this.shape_152,p:{x:795.3}},{t:this.shape_149,p:{x:807.5,y:635.8}},{t:this.shape_330,p:{x:819.7,y:634.1}},{t:this.shape_135,p:{x:831.9}},{t:this.shape_407,p:{x:448.1}},{t:this.shape_127,p:{x:460.3}},{t:this.shape_406,p:{x:495.3}},{t:this.shape_405},{t:this.shape_28,p:{x:519.7,y:658.7}},{t:this.shape_404,p:{x:531.9,y:663.2}},{t:this.shape_125,p:{x:544.1}},{t:this.shape_216,p:{x:556.3,y:660.8}},{t:this.shape_120,p:{x:568.5}},{t:this.shape_103,p:{x:580.7,y:665.8}},{t:this.shape_178,p:{x:615.6,y:659.1}},{t:this.shape_122,p:{x:627.8}},{t:this.shape_158,p:{x:640,y:659.1}},{t:this.shape_403,p:{x:652.2}},{t:this.shape_402,p:{x:687.2}},{t:this.shape_124,p:{x:699.4}},{t:this.shape_401},{t:this.shape_114,p:{x:723.8}},{t:this.shape_129,p:{x:736,y:659.1}},{t:this.shape_128,p:{x:748.2,y:660.8}},{t:this.shape_400},{t:this.shape_399,p:{x:772.6,y:658.7}},{t:this.shape_119,p:{x:784.8}},{t:this.shape_398},{t:this.shape_112,p:{x:831.9}},{t:this.shape_397},{t:this.shape_227,p:{x:460.3,y:683.7}},{t:this.shape_396},{t:this.shape_395},{t:this.shape_121,p:{x:496.9,y:684.1}},{t:this.shape_201,p:{x:509.1,y:685.8}},{t:this.shape_294,p:{x:521.3}},{t:this.shape_89,p:{x:565.4}},{t:this.shape_394,p:{x:577.6}},{t:this.shape_108,p:{x:621.7}},{t:this.shape_97,p:{x:633.9}},{t:this.shape_77,p:{x:646.1,y:684.1}},{t:this.shape_110,p:{x:658.3,y:685.8}},{t:this.shape_196,p:{x:670.5,y:685.8}},{t:this.shape_285,p:{x:682.7}},{t:this.shape_85,p:{x:726.8}},{t:this.shape_90,p:{x:739,y:685.8}},{t:this.shape_393,p:{x:751.2}},{t:this.shape_96,p:{x:763.4,y:685.8}},{t:this.shape_94,p:{x:775.6}},{t:this.shape_86,p:{x:819.7}},{t:this.shape_93,p:{x:831.9,y:683.7}},{t:this.shape_392,p:{x:448.1,y:713.2}},{t:this.shape_391},{t:this.shape_390,p:{x:472.5,y:708.7}},{t:this.shape_389,p:{x:484.7}},{t:this.shape_388},{t:this.shape_266,p:{x:509.3,y:711.1}},{t:this.shape_74,p:{x:521.3}},{t:this.shape_69,p:{x:546.6,y:713.2}},{t:this.shape_387,p:{x:558.8}},{t:this.shape_72,p:{x:571}},{t:this.shape_73,p:{x:596.3,y:708.7}},{t:this.shape_386,p:{x:608.5,y:710.8}},{t:this.shape_81,p:{x:633.8}},{t:this.shape_80,p:{x:646}},{t:this.shape_385,p:{x:658.2}},{t:this.shape_84,p:{x:670.4}},{t:this.shape_384,p:{x:682.6,y:710.8}},{t:this.shape_383,p:{x:707.9}},{t:this.shape_64,p:{x:733.2}},{t:this.shape_66,p:{x:745.4}},{t:this.shape_382,p:{x:770.7}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_78,p:{x:807.3}},{t:this.shape_272,p:{x:819.5}},{t:this.shape_63,p:{x:831.7}},{t:this.shape_379,p:{x:448.1}},{t:this.shape_58,p:{x:483.1}},{t:this.shape_378,p:{x:495.3}},{t:this.shape_377,p:{x:507.5}},{t:this.shape_376,p:{x:519.7}},{t:this.shape_43,p:{x:554.6}},{t:this.shape_375,p:{x:566.8}},{t:this.shape_374,p:{x:579}},{t:this.shape_373},{t:this.shape_372,p:{x:603.4}},{t:this.shape_256,p:{x:615.6}},{t:this.shape_56,p:{x:627.8,y:734.1}},{t:this.shape_52,p:{x:640}},{t:this.shape_47,p:{x:675}},{t:this.shape_46,p:{x:687.2}},{t:this.shape_41,p:{x:699.4}},{t:this.shape_371,p:{x:711.6}},{t:this.shape_370,p:{x:723.8}},{t:this.shape_48,p:{x:736}},{t:this.shape_37,p:{x:748.2}},{t:this.shape_38,p:{x:760.4,y:735.8}},{t:this.shape_258,p:{x:772.6}},{t:this.shape_36,p:{x:784.8}},{t:this.shape_62,p:{x:819.7}},{t:this.shape_369,p:{x:831.9}},{t:this.shape_23,p:{x:448.1,y:758.7}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_246},{t:this.shape_16,p:{x:509.1,y:758.7}},{t:this.shape_19,p:{x:521.3}},{t:this.shape_366},{t:this.shape_365,p:{x:557.9}},{t:this.shape_364,p:{x:570.1}},{t:this.shape_87,p:{x:582.3,y:760.8}},{t:this.shape_236,p:{x:594.5}},{t:this.shape_24,p:{x:606.7}},{t:this.shape_243,p:{x:618.9}},{t:this.shape_39,p:{x:631.1,y:759.1}},{t:this.shape_244,p:{x:643.3}},{t:this.shape_301,p:{x:667.7,y:763.2}},{t:this.shape_363,p:{x:692.1}},{t:this.shape_234,p:{x:704.3}},{t:this.shape_21,p:{x:716.5,y:760.8}},{t:this.shape_240,p:{x:728.7}},{t:this.shape_14,p:{x:740.9}},{t:this.shape_31,p:{x:753.1,y:759.1}},{t:this.shape_17,p:{x:765.3}},{t:this.shape_8,p:{x:777.5,y:765.8}},{t:this.instance_2,p:{scaleX:0.286,scaleY:0.286,x:491,y:405}},{t:this.LUPA_CIMA},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359,p:{x:562.9}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355,p:{x:673}},{t:this.shape_354,p:{x:691.3}},{t:this.shape_353,p:{x:709.7}},{t:this.shape_352,p:{x:728}},{t:this.shape_351},{t:this.shape_350,p:{x:764.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.225,scaleY:1.181,x:0,y:111}},{t:this.VOLVER_CIMA},{t:this.shape_440},{t:this.shape_439,p:{x:161.5}},{t:this.shape_438},{t:this.shape_182,p:{x:241}},{t:this.shape_183,p:{x:320.4}},{t:this.shape_188,p:{x:360.1}},{t:this.shape_187,p:{x:399.7}},{t:this.shape_437,p:{x:479.2}},{t:this.shape_436,p:{x:518.9}},{t:this.shape_435},{t:this.shape_186,p:{x:598.3}},{t:this.shape_347,p:{x:637.9}},{t:this.shape_184,p:{x:677.7}}]},1).to({state:[{t:this.shape_176,p:{x:448.1}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_431,p:{x:484.7}},{t:this.shape_535},{t:this.shape_534,p:{x:509.1,y:609.1}},{t:this.shape_533,p:{x:521.3,y:609.1}},{t:this.shape_532},{t:this.shape_531},{t:this.shape_172,p:{x:578.5}},{t:this.shape_171,p:{x:590.7,y:610.8}},{t:this.shape_530,p:{x:623.5}},{t:this.shape_529},{t:this.shape_334,p:{x:668.5}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523,p:{x:741.7}},{t:this.shape_163,p:{x:774.5}},{t:this.shape_428,p:{x:786.7}},{t:this.shape_336,p:{x:819.5,y:608.7}},{t:this.shape_522,p:{x:831.7}},{t:this.shape_259,p:{x:448.1,y:634.1}},{t:this.shape_327,p:{x:460.3}},{t:this.shape_521,p:{x:472.5}},{t:this.shape_155,p:{x:484.7}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_323,p:{x:547.6}},{t:this.shape_517},{t:this.shape_516,p:{x:586,y:638.2}},{t:this.shape_416,p:{x:598.2,y:635.8}},{t:this.shape_515,p:{x:610.4}},{t:this.shape_514},{t:this.shape_150,p:{x:634.8}},{t:this.shape_133,p:{x:647}},{t:this.shape_513,p:{x:659.2}},{t:this.shape_410,p:{x:685.5}},{t:this.shape_326,p:{x:697.7}},{t:this.shape_147,p:{x:709.9}},{t:this.shape_512,p:{x:722.1}},{t:this.shape_511},{t:this.shape_136,p:{x:746.5}},{t:this.shape_510,p:{x:758.7}},{t:this.shape_412,p:{x:770.9,y:633.7}},{t:this.shape_135,p:{x:783.1}},{t:this.shape_509},{t:this.shape_508,p:{x:807.5,y:634.1}},{t:this.shape_152,p:{x:819.7}},{t:this.shape_151,p:{x:831.9}},{t:this.shape_119,p:{x:448.1}},{t:this.shape_120,p:{x:460.3}},{t:this.shape_420,p:{x:507.5,y:659.1}},{t:this.shape_222,p:{x:519.7,y:660.8}},{t:this.shape_507},{t:this.shape_16,p:{x:544.1,y:658.7}},{t:this.shape_122,p:{x:556.3}},{t:this.shape_506},{t:this.shape_125,p:{x:615.6}},{t:this.shape_221,p:{x:627.8,y:660.8}},{t:this.shape_505,p:{x:640}},{t:this.shape_124,p:{x:652.2}},{t:this.shape_114,p:{x:664.4}},{t:this.shape_504},{t:this.shape_418,p:{x:723.8,y:659.1}},{t:this.shape_303,p:{x:736}},{t:this.shape_503},{t:this.shape_216,p:{x:760.4,y:660.8}},{t:this.shape_118,p:{x:772.6}},{t:this.shape_502,p:{x:784.8}},{t:this.shape_301,p:{x:831.9,y:663.2}},{t:this.shape_501},{t:this.shape_286,p:{x:460.3}},{t:this.shape_500},{t:this.shape_100,p:{x:484.7,y:683.7}},{t:this.shape_499,p:{x:496.9,y:683.7}},{t:this.shape_280,p:{x:509.1}},{t:this.shape_285,p:{x:521.3}},{t:this.shape_8,p:{x:533.5,y:690.8}},{t:this.shape_178,p:{x:563.8,y:684.1}},{t:this.shape_85,p:{x:576}},{t:this.shape_330,p:{x:588.2,y:684.1}},{t:this.shape_498},{t:this.shape_497,p:{x:630.7,y:683.7}},{t:this.shape_108,p:{x:642.9}},{t:this.shape_496},{t:this.shape_206,p:{x:667.3,y:685.8}},{t:this.shape_495},{t:this.shape_86,p:{x:691.7}},{t:this.shape_298,p:{x:703.9}},{t:this.shape_158,p:{x:716.1,y:684.1}},{t:this.shape_97,p:{x:728.3}},{t:this.shape_494,p:{x:758.6}},{t:this.shape_227,p:{x:770.8,y:683.7}},{t:this.shape_109,p:{x:783,y:685.8}},{t:this.shape_95,p:{x:795.2}},{t:this.shape_493,p:{x:807.4}},{t:this.shape_89,p:{x:819.6}},{t:this.shape_492},{t:this.shape_387,p:{x:448.1}},{t:this.shape_491},{t:this.shape_390,p:{x:472.5,y:708.7}},{t:this.shape_490},{t:this.shape_388},{t:this.shape_385,p:{x:509.1}},{t:this.shape_489,p:{x:521.3,y:710.8}},{t:this.shape_488},{t:this.shape_487,p:{x:563.9,y:710.8}},{t:this.shape_66,p:{x:594.3}},{t:this.shape_73,p:{x:606.5,y:708.7}},{t:this.shape_279,p:{x:636.9}},{t:this.shape_486},{t:this.shape_129,p:{x:661.3,y:709.1}},{t:this.shape_149,p:{x:673.5,y:710.8}},{t:this.shape_84,p:{x:685.7}},{t:this.shape_276,p:{x:697.9}},{t:this.shape_263,p:{x:710.1}},{t:this.shape_485,p:{x:740.5,y:710.8}},{t:this.shape_80,p:{x:752.7}},{t:this.shape_81,p:{x:764.9}},{t:this.shape_121,p:{x:777.1,y:709.1}},{t:this.shape_78,p:{x:789.3}},{t:this.shape_272,p:{x:819.7}},{t:this.shape_63,p:{x:831.9}},{t:this.shape_484},{t:this.shape_59,p:{x:460.3,y:735.8}},{t:this.shape_483,p:{x:472.5}},{t:this.shape_45,p:{x:484.7}},{t:this.shape_77,p:{x:496.9,y:734.1}},{t:this.shape_370,p:{x:509.1}},{t:this.shape_55,p:{x:521.3}},{t:this.shape_267,p:{x:533.5,y:742.8}},{t:this.shape_62,p:{x:558.8}},{t:this.shape_36,p:{x:571}},{t:this.shape_482},{t:this.shape_377,p:{x:608.5}},{t:this.shape_319,p:{x:633.8,y:733.7}},{t:this.shape_37,p:{x:646}},{t:this.shape_481,p:{x:658.2,y:738.2}},{t:this.shape_376,p:{x:670.4}},{t:this.shape_51,p:{x:682.6}},{t:this.shape_374,p:{x:707.9}},{t:this.shape_58,p:{x:720.1}},{t:this.shape_46,p:{x:732.3}},{t:this.shape_480,p:{x:757.6,y:734.1}},{t:this.shape_52,p:{x:769.8}},{t:this.shape_479,p:{x:782}},{t:this.shape_47,p:{x:794.2}},{t:this.shape_48,p:{x:819.5}},{t:this.shape_41,p:{x:831.7}},{t:this.shape_478},{t:this.shape_364,p:{x:460.3}},{t:this.shape_240,p:{x:472.5}},{t:this.shape_477},{t:this.shape_300,p:{x:496.9,y:760.8}},{t:this.shape_15,p:{x:509.1}},{t:this.shape_476,p:{x:563.8}},{t:this.shape_292,p:{x:576,y:760.8}},{t:this.shape_475},{t:this.shape_474,p:{x:600.4}},{t:this.shape_473,p:{x:655.1,y:759.1}},{t:this.shape_472},{t:this.shape_291,p:{x:679.5,y:760.8}},{t:this.shape_284,p:{x:691.7,y:760.8}},{t:this.shape_236,p:{x:703.9}},{t:this.shape_14,p:{x:716.1}},{t:this.shape_471},{t:this.shape_470,p:{x:783,y:759.1}},{t:this.shape_110,p:{x:795.2,y:760.8}},{t:this.shape_304,p:{y:758.7,x:807.4}},{t:this.shape_56,p:{x:819.6,y:759.1}},{t:this.shape_234,p:{x:831.8}},{t:this.shape_469},{t:this.shape_468,p:{x:460.3}},{t:this.shape_467},{t:this.shape_10,p:{x:484.7}},{t:this.shape_128,p:{x:496.9,y:785.8}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_93,p:{x:533.5,y:783.7}},{t:this.shape_70,p:{x:545.7,y:792.8}},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_211,p:{x:758.7}},{t:this.shape_9,p:{x:770.9}},{t:this.shape_460,p:{x:783.1}},{t:this.shape_459},{t:this.shape_288,p:{x:807.5,y:783.7}},{t:this.shape_458},{t:this.shape_457,p:{x:831.9,y:785.8}},{t:this.shape_456,p:{x:448.1}},{t:this.shape_455},{t:this.shape_39,p:{x:472.5,y:809.1}},{t:this.shape_454,p:{x:484.7}},{t:this.shape_96,p:{x:496.9,y:810.8}},{t:this.shape_67,p:{x:509.1,y:808.7}},{t:this.shape_201,p:{x:521.3,y:810.8}},{t:this.shape_87,p:{x:533.5,y:810.8}},{t:this.shape_453,p:{x:545.7}},{t:this.shape_204,p:{x:557.9}},{t:this.shape_209,p:{x:570.1}},{t:this.shape_31,p:{x:582.3,y:809.1}},{t:this.shape_199,p:{x:594.5}},{t:this.shape_196,p:{x:664.4,y:810.8}},{t:this.shape_452,p:{x:676.6}},{t:this.shape_451,p:{x:688.8}},{t:this.shape_392,p:{x:701,y:813.2}},{t:this.shape_450},{t:this.shape_197,p:{x:725.4}},{t:this.shape_449},{t:this.shape_195,p:{x:807.5,y:813.2}},{t:this.shape_90,p:{x:819.7,y:810.8}},{t:this.shape_21,p:{x:831.9,y:810.8}},{t:this.shape_277,p:{x:448.1,y:834.1}},{t:this.shape_448},{t:this.shape_38,p:{x:472.5,y:835.8}},{t:this.shape_447},{t:this.shape_170,p:{x:496.9,y:833.7}},{t:this.shape_156,p:{x:509.1,y:833.7}},{t:this.shape_189,p:{x:521.3,y:840.8}},{t:this.instance_3,p:{scaleX:0.286,scaleY:0.286,x:491,y:405}},{t:this.LUPA_ORGRIMMAR},{t:this.shape_350,p:{x:562.9}},{t:this.shape_446},{t:this.shape_445,p:{x:599.6}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_359,p:{x:691.3}},{t:this.shape_354,p:{x:709.7}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.225,scaleY:1.181,x:0,y:111}},{t:this.VOLVER_ORGRIMMAR},{t:this.shape_184,p:{x:121.9}},{t:this.shape_436,p:{x:161.6}},{t:this.shape_540},{t:this.shape_348,p:{x:241}},{t:this.shape_439,p:{x:280.6}},{t:this.shape_539},{t:this.shape_538},{t:this.shape_182,p:{x:399.8}},{t:this.shape_181}]},1).to({state:[{t:this.shape_608},{t:this.shape_174,p:{x:460.3,y:609.1}},{t:this.shape_13,p:{x:472.5,y:609.1}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_22,p:{x:509.1,y:609.1}},{t:this.shape_429,p:{x:521.3}},{t:this.shape_172,p:{x:550.2}},{t:this.shape_605,p:{x:562.4}},{t:this.shape_332,p:{x:591.2}},{t:this.shape_604},{t:this.shape_331,p:{x:615.6}},{t:this.shape_603,p:{x:644.5}},{t:this.shape_333,p:{x:656.7}},{t:this.shape_602,p:{x:668.9}},{t:this.shape_601},{t:this.shape_600,p:{x:693.3,y:610.8}},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597,p:{x:729.9}},{t:this.shape_171,p:{x:742.1,y:610.8}},{t:this.shape_330,p:{x:754.3,y:609.1}},{t:this.shape_522,p:{x:766.5}},{t:this.shape_165,p:{x:778.7}},{t:this.shape_596,p:{x:790.9}},{t:this.shape_163,p:{x:819.7}},{t:this.shape_428,p:{x:831.9}},{t:this.shape_510,p:{x:448.1}},{t:this.shape_423,p:{x:460.3}},{t:this.shape_595},{t:this.shape_323,p:{x:484.7}},{t:this.shape_326,p:{x:496.9}},{t:this.shape_594},{t:this.shape_59,p:{x:559.3,y:635.8}},{t:this.shape_133,p:{x:571.5}},{t:this.shape_593},{t:this.shape_592},{t:this.shape_409,p:{x:646.1}},{t:this.shape_591},{t:this.shape_147,p:{x:708.5}},{t:this.shape_106,p:{y:635.8,x:720.7}},{t:this.shape_135,p:{x:770.9}},{t:this.shape_151,p:{x:783.1}},{t:this.shape_158,p:{x:795.3,y:634.1}},{t:this.shape_590},{t:this.shape_289,p:{x:819.7,y:635.8}},{t:this.shape_152,p:{x:831.9}},{t:this.shape_29,p:{x:448.1,y:658.7}},{t:this.shape_125,p:{x:460.3}},{t:this.shape_402,p:{x:472.5}},{t:this.shape_589},{t:this.shape_28,p:{x:496.9,y:658.7}},{t:this.shape_588,p:{y:658.7}},{t:this.shape_219,p:{x:521.3,y:660.8}},{t:this.shape_587},{t:this.shape_119,p:{x:545.7}},{t:this.shape_116,p:{x:557.9}},{t:this.shape_118,p:{x:588.2}},{t:this.shape_314,p:{x:600.4,y:660.8}},{t:this.shape_586},{t:this.shape_23,p:{x:642.9,y:658.7}},{t:this.shape_129,p:{x:655.1,y:659.1}},{t:this.shape_120,p:{x:667.3}},{t:this.shape_222,p:{x:679.5,y:660.8}},{t:this.shape_315,p:{x:691.7}},{t:this.shape_585},{t:this.shape_406,p:{x:734.2}},{t:this.shape_124,p:{x:746.4}},{t:this.shape_584},{t:this.shape_502,p:{x:770.8}},{t:this.shape_121,p:{x:783,y:659.1}},{t:this.shape_311,p:{x:795.2}},{t:this.shape_304,p:{y:658.7,x:807.4}},{t:this.shape_583,p:{x:819.6}},{t:this.shape_114,p:{x:831.8}},{t:this.shape_394,p:{x:448.1}},{t:this.shape_582},{t:this.shape_100,p:{x:513.6,y:683.7}},{t:this.shape_201,p:{x:525.8,y:685.8}},{t:this.shape_294,p:{x:538}},{t:this.shape_581,p:{x:591.2,y:684.1}},{t:this.shape_97,p:{x:603.4}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_196,p:{x:640,y:685.8}},{t:this.shape_285,p:{x:652.2}},{t:this.shape_89,p:{x:705.5}},{t:this.shape_94,p:{x:717.7}},{t:this.shape_93,p:{x:729.9,y:683.7}},{t:this.shape_178,p:{x:783.1,y:684.1}},{t:this.shape_85,p:{x:795.3}},{t:this.shape_77,p:{x:807.5,y:684.1}},{t:this.shape_86,p:{x:819.7}},{t:this.shape_8,p:{x:831.9,y:690.8}},{t:this.shape_470,p:{x:448.1,y:709.1}},{t:this.shape_578},{t:this.shape_577},{t:this.shape_66,p:{x:484.7}},{t:this.shape_149,p:{x:496.9,y:710.8}},{t:this.shape_65,p:{x:509.1,y:710.8}},{t:this.shape_489,p:{x:521.3,y:710.8}},{t:this.shape_385,p:{x:533.5}},{t:this.shape_382,p:{x:545.7}},{t:this.shape_576},{t:this.shape_273,p:{x:590.7}},{t:this.shape_81,p:{x:602.9}},{t:this.shape_274,p:{x:635.7}},{t:this.shape_263,p:{x:647.9}},{t:this.shape_389,p:{x:660.1}},{t:this.shape_276,p:{x:692.9}},{t:this.shape_384,p:{x:705.1,y:710.8}},{t:this.shape_575},{t:this.shape_80,p:{x:729.5}},{t:this.shape_64,p:{x:741.7}},{t:this.shape_272,p:{x:774.5}},{t:this.shape_63,p:{x:786.7}},{t:this.shape_271,p:{x:819.5}},{t:this.shape_202,p:{x:831.7,y:710.8}},{t:this.shape_479,p:{x:448.1}},{t:this.shape_372,p:{x:460.3}},{t:this.shape_60},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_48,p:{x:556.3}},{t:this.shape_41,p:{x:568.5}},{t:this.shape_570,p:{x:603.4,y:734.1}},{t:this.shape_569},{t:this.shape_55,p:{x:627.8}},{t:this.shape_412,p:{x:640,y:733.7}},{t:this.shape_568},{t:this.shape_277,p:{x:687.2,y:734.1}},{t:this.shape_37,p:{x:699.4}},{t:this.shape_51,p:{x:711.6}},{t:this.shape_70,p:{x:723.8,y:742.8}},{t:this.shape_175,p:{x:758.7,y:734.1}},{t:this.shape_255,p:{x:770.9}},{t:this.shape_46,p:{x:783.1}},{t:this.shape_370,p:{x:795.3}},{t:this.shape_38,p:{x:807.5,y:735.8}},{t:this.shape_567},{t:this.shape_369,p:{x:831.9}},{t:this.shape_566,p:{x:448.1}},{t:this.shape_474,p:{x:460.3}},{t:this.shape_110,p:{x:472.5,y:760.8}},{t:this.shape_235,p:{x:484.7}},{t:this.shape_246},{t:this.shape_275,p:{y:763.2}},{t:this.shape_565},{t:this.shape_96,p:{x:548.7,y:760.8}},{t:this.shape_56,p:{x:560.9,y:759.1}},{t:this.shape_34,p:{x:573.1}},{t:this.shape_35,p:{x:600.4}},{t:this.shape_240,p:{x:612.6}},{t:this.shape_564,p:{x:640}},{t:this.shape_563,p:{x:652.2}},{t:this.shape_236,p:{x:664.4}},{t:this.shape_18,p:{x:691.7}},{t:this.shape_26,p:{x:703.9}},{t:this.shape_16,p:{x:731.3,y:758.7}},{t:this.shape_234,p:{x:743.5}},{t:this.shape_243,p:{x:755.7}},{t:this.shape_14,p:{x:783}},{t:this.shape_241,p:{x:795.2}},{t:this.shape_24,p:{x:807.4}},{t:this.shape_39,p:{x:819.6,y:759.1}},{t:this.shape_17,p:{x:831.8}},{t:this.shape_221,p:{x:448.1,y:785.8}},{t:this.shape_215,p:{x:460.3}},{t:this.shape_499,p:{x:472.5,y:783.7}},{t:this.shape_562},{t:this.shape_561,p:{x:496.9}},{t:this.shape_230,p:{x:509.1}},{t:this.shape_69,p:{x:547.1,y:788.2}},{t:this.shape_12,p:{x:559.3}},{t:this.shape_560,p:{x:571.5}},{t:this.shape_9,p:{x:609.5}},{t:this.shape_213,p:{x:621.7}},{t:this.shape_11,p:{x:659.7}},{t:this.shape_216,p:{x:671.9,y:785.8}},{t:this.shape_10,p:{x:684.1}},{t:this.shape_559,p:{x:696.3}},{t:this.shape_128,p:{x:708.5,y:785.8}},{t:this.shape_558,p:{x:720.7}},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554,p:{x:795.3}},{t:this.shape_457,p:{x:807.5,y:785.8}},{t:this.shape_210,p:{x:819.7}},{t:this.shape_211,p:{x:831.9}},{t:this.shape_317,p:{y:809.1,x:448.1}},{t:this.shape_87,p:{x:460.3,y:810.8}},{t:this.shape_270,p:{x:472.5,y:810.8}},{t:this.shape_31,p:{x:484.7,y:809.1}},{t:this.shape_553},{t:this.shape_90,p:{x:509.1,y:810.8}},{t:this.shape_21,p:{x:521.3,y:810.8}},{t:this.shape_83,p:{x:545.7,y:808.7}},{t:this.shape_73,p:{x:557.9,y:808.7}},{t:this.shape_199,p:{x:570.1}},{t:this.shape_191,p:{x:582.3,y:813.2}},{t:this.shape_552},{t:this.shape_551,p:{x:618.9,y:810.8}},{t:this.shape_550,p:{x:643.3}},{t:this.shape_451,p:{x:655.5}},{t:this.shape_549},{t:this.shape_390,p:{x:692.1,y:808.7}},{t:this.shape_548},{t:this.shape_189,p:{x:716.5,y:815.8}},{t:this.instance_4,p:{scaleX:0.286,scaleY:0.286,x:491,y:405}},{t:this.LUPA_DALARAN},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541}]},1).to({state:[{t:this.instance_4,p:{scaleX:1.225,scaleY:1.181,x:0,y:111}},{t:this.VOLVER_DALARAN},{t:this.shape_183,p:{x:121.9}},{t:this.shape_611},{t:this.shape_187,p:{x:201.2}},{t:this.shape_349,p:{x:241}},{t:this.shape_610},{t:this.shape_182,p:{x:320.4}},{t:this.shape_609,p:{x:360}}]},1).to({state:[{t:this.shape_13,p:{x:448.1,y:609.1}},{t:this.shape_686},{t:this.shape_429,p:{x:472.5}},{t:this.shape_22,p:{x:484.7,y:609.1}},{t:this.shape_606},{t:this.shape_473,p:{x:509.1,y:609.1}},{t:this.shape_685},{t:this.shape_342,p:{x:533.5}},{t:this.shape_302,p:{x:545.7,y:609.1}},{t:this.shape_684},{t:this.shape_508,p:{x:592.9,y:609.1}},{t:this.shape_159,p:{x:605.1}},{t:this.shape_597,p:{x:617.3}},{t:this.shape_683,p:{x:629.5,y:610.8}},{t:this.shape_428,p:{x:641.7}},{t:this.shape_682},{t:this.shape_681},{t:this.shape_605,p:{x:701}},{t:this.shape_163,p:{x:736}},{t:this.shape_172,p:{x:748.2}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_136,p:{x:448.1}},{t:this.shape_675},{t:this.shape_327,p:{x:472.5}},{t:this.shape_674},{t:this.shape_267,p:{x:496.9,y:642.8}},{t:this.shape_147,p:{x:522.2}},{t:this.shape_513,p:{x:534.4}},{t:this.shape_328,p:{x:559.7}},{t:this.shape_423,p:{x:571.9}},{t:this.shape_411,p:{x:597.2}},{t:this.shape_410,p:{x:609.4}},{t:this.shape_673},{t:this.shape_144,p:{x:633.8}},{t:this.shape_420,p:{x:646,y:634.1}},{t:this.shape_672},{t:this.shape_325,p:{x:670.4}},{t:this.shape_150,p:{x:695.7}},{t:this.shape_135,p:{x:707.9}},{t:this.shape_153,p:{x:733.2}},{t:this.shape_323,p:{x:745.4}},{t:this.shape_326,p:{x:757.6}},{t:this.shape_671,p:{x:782.9}},{t:this.shape_132,p:{x:795.1}},{t:this.shape_418,p:{x:807.3,y:634.1}},{t:this.shape_152,p:{x:819.5}},{t:this.shape_151,p:{x:831.7}},{t:this.shape_92,p:{x:448.1,y:659.1}},{t:this.shape_113,p:{x:460.3}},{t:this.shape_670},{t:this.shape_125,p:{x:484.7}},{t:this.shape_122,p:{x:496.9}},{t:this.shape_8,p:{x:509.1,y:665.8}},{t:this.shape_669},{t:this.shape_114,p:{x:546.8}},{t:this.shape_330,p:{x:559,y:659.1}},{t:this.shape_403,p:{x:571.2}},{t:this.shape_668,p:{x:596.7}},{t:this.shape_667},{t:this.shape_304,p:{y:658.7,x:621.1}},{t:this.shape_666},{t:this.shape_303,p:{x:645.5}},{t:this.shape_407,p:{x:657.7}},{t:this.shape_112,p:{x:669.9}},{t:this.shape_665,p:{x:695.4}},{t:this.shape_29,p:{x:707.6,y:658.7}},{t:this.shape_664},{t:this.shape_124,p:{x:745.3}},{t:this.shape_228,p:{x:757.5,y:660.8}},{t:this.shape_158,p:{x:769.7,y:659.1}},{t:this.shape_123,p:{x:781.9}},{t:this.shape_119,p:{x:807.4}},{t:this.shape_118,p:{x:819.6}},{t:this.shape_28,p:{x:831.8,y:658.7}},{t:this.shape_111,p:{x:448.1}},{t:this.shape_206,p:{x:460.3,y:685.8}},{t:this.shape_85,p:{x:472.5}},{t:this.shape_69,p:{x:484.7,y:688.2}},{t:this.shape_663,p:{x:496.9}},{t:this.shape_86,p:{x:509.1}},{t:this.shape_662},{t:this.shape_661,p:{x:550.2}},{t:this.shape_660},{t:this.shape_494,p:{x:574.6}},{t:this.shape_227,p:{x:586.8,y:683.7}},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657,p:{x:640}},{t:this.shape_129,p:{x:652.2,y:684.1}},{t:this.shape_281,p:{x:664.4}},{t:this.shape_291,p:{x:676.6,y:685.8}},{t:this.shape_656,p:{x:688.8}},{t:this.shape_655},{t:this.shape_70,p:{x:713.2,y:692.8}},{t:this.shape_654,p:{x:742.1}},{t:this.shape_101,p:{x:754.3,y:683.7}},{t:this.shape_653},{t:this.shape_201,p:{x:795.3,y:685.8}},{t:this.shape_284,p:{x:807.5,y:685.8}},{t:this.shape_121,p:{x:819.7,y:684.1}},{t:this.shape_97,p:{x:831.9}},{t:this.shape_385,p:{x:448.1}},{t:this.shape_66,p:{x:460.3}},{t:this.shape_274,p:{x:472.5}},{t:this.shape_81,p:{x:498}},{t:this.shape_84,p:{x:510.2}},{t:this.shape_652,p:{x:522.4}},{t:this.shape_71,p:{x:534.6}},{t:this.shape_80,p:{x:546.8}},{t:this.shape_272,p:{x:572.3}},{t:this.shape_63,p:{x:584.5}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_78,p:{x:634.4}},{t:this.shape_271,p:{x:646.6}},{t:this.shape_649},{t:this.shape_277,p:{x:671,y:709.1}},{t:this.shape_648},{t:this.shape_647},{t:this.shape_83,p:{x:707.6,y:708.7}},{t:this.shape_198,p:{y:710.8}},{t:this.shape_389,p:{x:732}},{t:this.shape_646},{t:this.shape_178,p:{x:769.7,y:709.1}},{t:this.shape_64,p:{x:781.9}},{t:this.shape_645,p:{x:807.4}},{t:this.shape_644,p:{x:819.6}},{t:this.shape_643},{t:this.shape_642},{t:this.shape_47,p:{x:460.3}},{t:this.shape_377,p:{x:485.8}},{t:this.shape_54,p:{x:498}},{t:this.shape_641},{t:this.shape_640},{t:this.shape_138,p:{x:547.9,y:733.7}},{t:this.shape_639},{t:this.shape_638,p:{x:572.3}},{t:this.shape_257,p:{x:584.5}},{t:this.shape_374,p:{x:596.7}},{t:this.shape_41,p:{x:608.9}},{t:this.shape_44,p:{x:621.1}},{t:this.shape_43,p:{x:646.6}},{t:this.shape_637},{t:this.shape_40,p:{x:671}},{t:this.shape_379,p:{x:696.5}},{t:this.shape_61,p:{x:708.7}},{t:this.shape_77,p:{x:720.9,y:734.1}},{t:this.shape_421,p:{x:733.1,y:733.7}},{t:this.shape_516,p:{x:745.3,y:738.2}},{t:this.shape_636},{t:this.shape_635,p:{x:769.7}},{t:this.shape_36,p:{x:781.9}},{t:this.shape_48,p:{x:807.4}},{t:this.shape_62,p:{x:819.6}},{t:this.shape_46,p:{x:831.8}},{t:this.shape_235,p:{x:448.1}},{t:this.shape_364,p:{x:460.3}},{t:this.shape_363,p:{x:472.5}},{t:this.shape_245,p:{x:484.7}},{t:this.shape_476,p:{x:496.9}},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632,p:{x:562.4}},{t:this.shape_35,p:{x:574.6}},{t:this.shape_27,p:{x:586.8}},{t:this.shape_18,p:{x:599}},{t:this.shape_631},{t:this.shape_630},{t:this.shape_474,p:{x:664.4}},{t:this.shape_110,p:{x:676.6,y:760.8}},{t:this.shape_23,p:{x:717.7,y:758.7}},{t:this.shape_236,p:{x:729.9}},{t:this.shape_243,p:{x:742.1}},{t:this.shape_17,p:{x:783.1}},{t:this.shape_16,p:{x:795.3,y:758.7}},{t:this.shape_566,p:{x:807.5}},{t:this.shape_234,p:{x:819.7}},{t:this.shape_14,p:{x:831.9}},{t:this.shape_225,p:{x:448.1}},{t:this.shape_223,p:{x:460.3}},{t:this.shape_629,p:{x:472.5}},{t:this.shape_56,p:{x:484.7,y:784.1}},{t:this.shape_215,p:{x:496.9}},{t:this.shape_222,p:{x:509.1,y:785.8}},{t:this.shape_221,p:{x:521.3,y:785.8}},{t:this.shape_628,p:{x:533.5}},{t:this.shape_214,p:{x:545.7}},{t:this.shape_558,p:{x:557.9}},{t:this.shape_230,p:{x:570.1}},{t:this.shape_212,p:{x:599}},{t:this.shape_10,p:{x:611.2}},{t:this.shape_570,p:{x:640,y:784.1}},{t:this.shape_559,p:{x:652.2}},{t:this.shape_100,p:{x:664.4,y:783.7}},{t:this.shape_497,p:{x:676.6,y:783.7}},{t:this.shape_126,p:{x:688.8,y:785.8}},{t:this.shape_210,p:{x:701}},{t:this.shape_211,p:{x:713.2}},{t:this.shape_216,p:{x:725.4,y:785.8}},{t:this.shape_39,p:{x:754.3,y:784.1}},{t:this.shape_128,p:{x:766.5,y:785.8}},{t:this.shape_554,p:{x:778.7}},{t:this.shape_9,p:{x:790.9}},{t:this.shape_93,p:{x:819.7,y:783.7}},{t:this.shape_627},{t:this.shape_470,p:{x:448.1,y:809.1}},{t:this.shape_293,p:{x:460.3,y:810.8}},{t:this.shape_626},{t:this.shape_96,p:{x:484.7,y:810.8}},{t:this.shape_87,p:{x:496.9,y:810.8}},{t:this.shape_551,p:{x:509.1,y:810.8}},{t:this.shape_197,p:{x:547.1}},{t:this.shape_454,p:{x:559.3}},{t:this.shape_73,p:{x:597.3,y:808.7}},{t:this.shape_196,p:{x:609.5,y:810.8}},{t:this.shape_625,p:{x:621.7}},{t:this.shape_317,p:{y:809.1,x:659.7}},{t:this.shape_487,p:{x:671.9,y:810.8}},{t:this.shape_624},{t:this.shape_204,p:{x:696.3}},{t:this.shape_623,p:{x:708.5}},{t:this.shape_31,p:{x:720.7,y:809.1}},{t:this.shape_21,p:{x:732.9,y:810.8}},{t:this.shape_90,p:{x:745.1,y:810.8}},{t:this.shape_550,p:{x:757.3}},{t:this.shape_622},{t:this.shape_489,p:{x:807.5,y:810.8}},{t:this.shape_452,p:{x:819.7}},{t:this.shape_199,p:{x:831.9}},{t:this.shape_621},{t:this.shape_620},{t:this.shape_252,p:{x:472.5,y:840.8}},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_600,p:{x:533.5,y:835.8}},{t:this.shape_616},{t:this.shape_190,p:{x:557.9}},{t:this.shape_171,p:{x:570.1,y:835.8}},{t:this.shape_189,p:{x:582.3,y:840.8}},{t:this.instance_5,p:{scaleX:0.378,scaleY:0.371,x:491,y:405}},{t:this.LUPA_LUNARGENTA},{t:this.shape_615},{t:this.shape_353,p:{x:572.1}},{t:this.shape_614},{t:this.shape_613,p:{x:608.8}},{t:this.shape_354,p:{x:627.1}},{t:this.shape_445,p:{x:645.5}},{t:this.shape_352,p:{x:663.8}},{t:this.shape_612},{t:this.shape_355,p:{x:700.5}},{t:this.shape_359,p:{x:718.9}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.622,scaleY:1.532,x:0,y:111}},{t:this.VOLVER_LUNARGENTA},{t:this.shape_187,p:{x:121.8}},{t:this.shape_689},{t:this.shape_688,p:{x:201.2}},{t:this.shape_349,p:{x:241}},{t:this.shape_610},{t:this.shape_687},{t:this.shape_186,p:{x:360.1}},{t:this.shape_609,p:{x:399.7}},{t:this.shape_437,p:{x:439.5}},{t:this.shape_182,p:{x:479.2}}]},1).to({state:[{t:this.shape_92,p:{x:448.1,y:609.1}},{t:this.shape_342,p:{x:460.3}},{t:this.shape_302,p:{x:472.5,y:609.1}},{t:this.shape_431,p:{x:484.7}},{t:this.shape_341},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_597,p:{x:566.3}},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_159,p:{x:692.9}},{t:this.shape_330,p:{x:705.1,y:609.1}},{t:this.shape_331,p:{x:717.3}},{t:this.shape_530,p:{x:729.5}},{t:this.shape_163,p:{x:762.3}},{t:this.shape_428,p:{x:774.5}},{t:this.shape_523,p:{x:807.3}},{t:this.shape_596,p:{x:819.5}},{t:this.shape_605,p:{x:831.7}},{t:this.shape_581,p:{x:448.1,y:634.1}},{t:this.shape_154},{t:this.shape_740},{t:this.shape_147,p:{x:484.7}},{t:this.shape_516,p:{x:496.9,y:638.2}},{t:this.shape_419},{t:this.shape_329,p:{x:521.3}},{t:this.shape_323,p:{x:533.5}},{t:this.shape_151,p:{x:545.7}},{t:this.shape_143,p:{x:557.9}},{t:this.shape_179,p:{x:584.1,y:634.1}},{t:this.shape_410,p:{x:596.4}},{t:this.shape_739},{t:this.shape_144,p:{x:634.8}},{t:this.shape_254,p:{x:647,y:635.8}},{t:this.shape_155,p:{x:659.2}},{t:this.shape_738},{t:this.shape_150,p:{x:683.6}},{t:this.shape_195,p:{x:709.9,y:638.2}},{t:this.shape_149,p:{x:722.1,y:635.8}},{t:this.shape_152,p:{x:734.3}},{t:this.shape_392,p:{x:746.5,y:638.2}},{t:this.shape_421,p:{x:758.7,y:633.7}},{t:this.shape_148,p:{x:770.9}},{t:this.shape_510,p:{x:783.1}},{t:this.shape_135,p:{x:795.3}},{t:this.shape_415,p:{x:807.5}},{t:this.shape_158,p:{x:819.7,y:634.1}},{t:this.shape_133,p:{x:831.9}},{t:this.shape_122,p:{x:448.1}},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735,p:{x:502.9}},{t:this.shape_734},{t:this.shape_668,p:{x:527.3}},{t:this.shape_127,p:{x:539.5}},{t:this.shape_733},{t:this.shape_129,p:{x:563.9,y:659.1}},{t:this.shape_221,p:{x:576.1,y:660.8}},{t:this.shape_665,p:{x:588.3}},{t:this.shape_732},{t:this.shape_125,p:{x:630.9}},{t:this.shape_216,p:{x:643.1,y:660.8}},{t:this.shape_407,p:{x:673.5}},{t:this.shape_118,p:{x:685.7}},{t:this.shape_731},{t:this.shape_730,p:{x:710.1}},{t:this.shape_266,p:{x:722.5,y:661.1}},{t:this.shape_124,p:{x:734.5}},{t:this.shape_119,p:{x:764.9}},{t:this.shape_120,p:{x:777.1}},{t:this.shape_16,p:{x:807.5,y:658.7}},{t:this.shape_729},{t:this.shape_114,p:{x:831.9}},{t:this.shape_300,p:{x:448.1,y:685.8}},{t:this.shape_293,p:{x:460.3,y:685.8}},{t:this.shape_499,p:{x:472.5,y:683.7}},{t:this.shape_395},{t:this.shape_107},{t:this.shape_85,p:{x:509.1}},{t:this.shape_98,p:{x:550.2}},{t:this.shape_97,p:{x:562.4}},{t:this.shape_104,p:{x:603.4}},{t:this.shape_654,p:{x:615.6}},{t:this.shape_493,p:{x:656.7}},{t:this.shape_728},{t:this.shape_121,p:{x:681.1,y:684.1}},{t:this.shape_727},{t:this.shape_481,p:{x:705.5,y:688.2}},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_288,p:{x:783.1,y:683.7}},{t:this.shape_194,p:{x:795.3,y:685.8}},{t:this.shape_95,p:{x:807.5}},{t:this.shape_723},{t:this.shape_89,p:{x:831.9}},{t:this.shape_434,p:{y:709.1}},{t:this.shape_384,p:{x:460.3,y:710.8}},{t:this.shape_422,p:{y:713.2}},{t:this.shape_652,p:{x:484.7}},{t:this.shape_77,p:{x:496.9,y:709.1}},{t:this.shape_551,p:{x:509.1,y:710.8}},{t:this.shape_271,p:{x:521.3}},{t:this.shape_385,p:{x:562.4}},{t:this.shape_78,p:{x:574.6}},{t:this.shape_83,p:{x:586.8,y:708.7}},{t:this.shape_81,p:{x:627.8}},{t:this.shape_66,p:{x:640}},{t:this.shape_722,p:{x:652.2}},{t:this.shape_193,p:{x:664.4,y:710.8}},{t:this.shape_263,p:{x:676.6}},{t:this.shape_721},{t:this.shape_269,p:{x:729.9}},{t:this.shape_276,p:{x:742.1}},{t:this.shape_720},{t:this.shape_264,p:{x:766.5}},{t:this.shape_80,p:{x:778.7}},{t:this.shape_272,p:{x:819.7}},{t:this.shape_63,p:{x:831.9}},{t:this.shape_13,p:{x:448.1,y:734.1}},{t:this.shape_45,p:{x:460.3}},{t:this.shape_719},{t:this.shape_374,p:{x:484.7}},{t:this.shape_718},{t:this.shape_375,p:{x:509.1}},{t:this.shape_483,p:{x:521.3}},{t:this.shape_37,p:{x:533.5}},{t:this.shape_369,p:{x:545.7}},{t:this.shape_252,p:{x:557.9,y:740.8}},{t:this.shape_717},{t:this.shape_370,p:{x:608.1}},{t:this.shape_55,p:{x:620.3}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_50,p:{x:682.7}},{t:this.shape_714},{t:this.shape_258,p:{x:707.1}},{t:this.shape_48,p:{x:719.3}},{t:this.shape_62,p:{x:731.5}},{t:this.shape_51,p:{x:743.7}},{t:this.shape_260,p:{x:781.7}},{t:this.shape_36,p:{x:819.7}},{t:this.shape_713},{t:this.shape_399,p:{x:448.1,y:758.7}},{t:this.shape_712},{t:this.shape_56,p:{x:472.5,y:759.1}},{t:this.shape_17,p:{x:484.7}},{t:this.shape_292,p:{x:496.9,y:760.8}},{t:this.shape_588,p:{y:758.7}},{t:this.shape_236,p:{x:521.3}},{t:this.shape_291,p:{x:533.5,y:760.8}},{t:this.shape_267,p:{x:545.7,y:767.8}},{t:this.shape_18,p:{x:592.3}},{t:this.shape_711},{t:this.shape_710},{t:this.shape_244,p:{x:628.9}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_365,p:{x:699.9}},{t:this.shape_707},{t:this.shape_284,p:{x:724.3,y:760.8}},{t:this.shape_243,p:{x:736.5}},{t:this.shape_240,p:{x:748.7}},{t:this.shape_706},{t:this.shape_632,p:{x:807.5}},{t:this.shape_234,p:{x:819.7}},{t:this.shape_14,p:{x:831.9}},{t:this.shape_217,p:{x:448.1}},{t:this.shape_705},{t:this.shape_11,p:{x:472.5}},{t:this.shape_215,p:{x:484.7}},{t:this.shape_314,p:{x:496.9,y:785.8}},{t:this.shape_629,p:{x:509.1}},{t:this.shape_561,p:{x:521.3}},{t:this.shape_128,p:{x:533.5,y:785.8}},{t:this.shape_10,p:{x:545.7}},{t:this.shape_230,p:{x:557.9}},{t:this.shape_101,p:{x:600.4,y:783.7}},{t:this.shape_558,p:{x:612.6}},{t:this.shape_704},{t:this.shape_628,p:{x:637}},{t:this.shape_100,p:{x:649.2,y:783.7}},{t:this.shape_497,p:{x:661.4,y:783.7}},{t:this.shape_219,p:{x:673.6,y:785.8}},{t:this.shape_703,p:{x:685.8}},{t:this.shape_210,p:{x:698}},{t:this.shape_211,p:{x:710.2}},{t:this.shape_9,p:{x:722.4}},{t:this.shape_560,p:{x:764.9}},{t:this.shape_468,p:{x:777.1}},{t:this.shape_213,p:{x:819.6}},{t:this.shape_93,p:{x:831.8,y:783.7}},{t:this.shape_702},{t:this.shape_455},{t:this.shape_39,p:{x:472.5,y:809.1}},{t:this.shape_454,p:{x:484.7}},{t:this.shape_110,p:{x:496.9,y:810.8}},{t:this.shape_67,p:{x:509.1,y:808.7}},{t:this.shape_90,p:{x:521.3,y:810.8}},{t:this.shape_96,p:{x:533.5,y:810.8}},{t:this.shape_200,p:{x:565.4}},{t:this.shape_204,p:{x:577.6}},{t:this.shape_73,p:{x:609.5,y:808.7}},{t:this.shape_701},{t:this.shape_625,p:{x:633.9}},{t:this.shape_87,p:{x:665.8,y:810.8}},{t:this.shape_451,p:{x:678}},{t:this.shape_700},{t:this.shape_209,p:{x:702.4}},{t:this.shape_699,p:{x:714.6}},{t:this.shape_623,p:{x:726.8}},{t:this.shape_70,p:{x:739,y:817.8}},{t:this.shape_197,p:{x:770.9}},{t:this.shape_199,p:{x:783.1}},{t:this.shape_31,p:{x:795.3,y:809.1}},{t:this.shape_21,p:{x:807.5,y:810.8}},{t:this.shape_698},{t:this.shape_550,p:{x:831.9}},{t:this.shape_697},{t:this.shape_696},{t:this.shape_336,p:{x:484.7,y:833.7}},{t:this.shape_425,p:{x:496.9,y:835.8}},{t:this.shape_171,p:{x:521.3,y:835.8}},{t:this.shape_600,p:{x:533.5,y:835.8}},{t:this.shape_170,p:{x:545.7,y:833.7}},{t:this.shape_695,p:{x:557.9,y:835.8}},{t:this.shape_694},{t:this.shape_693},{t:this.shape_156,p:{x:606.7,y:833.7}},{t:this.shape_277,p:{x:631.1,y:834.1}},{t:this.shape_38,p:{x:643.3,y:835.8}},{t:this.shape_692},{t:this.shape_683,p:{x:667.7,y:835.8}},{t:this.shape_190,p:{x:679.9}},{t:this.shape_189,p:{x:692.1,y:840.8}},{t:this.instance_6,p:{scaleX:0.378,scaleY:0.371,x:491,y:405}},{t:this.LUPA_ENTRANAS},{t:this.shape_352,p:{x:572.1}},{t:this.shape_614},{t:this.shape_355,p:{x:608.8}},{t:this.shape_354,p:{x:627.1}},{t:this.shape_613,p:{x:645.5}},{t:this.shape_691},{t:this.shape_359,p:{x:682.2}},{t:this.shape_690}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.622,scaleY:1.532,x:0,y:111}},{t:this.VOLVER_ENTRANAS},{t:this.shape_186,p:{x:121.9}},{t:this.shape_688,p:{x:161.5}},{t:this.shape_752},{t:this.shape_348,p:{x:241}},{t:this.shape_349,p:{x:280.7}},{t:this.shape_751},{t:this.shape_182,p:{x:360.1}},{t:this.shape_750}]},1).to({state:[{t:this.shape_797},{t:this.shape_176,p:{x:460.3}},{t:this.shape_173,p:{x:472.5}},{t:this.shape_480,p:{x:484.7,y:609.1}},{t:this.shape_341},{t:this.shape_796},{t:this.shape_597,p:{x:546.8}},{t:this.shape_605,p:{x:559}},{t:this.shape_336,p:{x:596.7,y:608.7}},{t:this.shape_161,p:{x:608.9}},{t:this.shape_168,p:{x:646.6}},{t:this.shape_331,p:{x:658.8}},{t:this.shape_795},{t:this.shape_333,p:{x:683.2}},{t:this.shape_121,p:{x:695.4,y:609.1}},{t:this.shape_794},{t:this.shape_170,p:{x:719.8,y:608.7}},{t:this.shape_163,p:{x:757.5}},{t:this.shape_428,p:{x:769.7}},{t:this.shape_156,p:{x:807.4,y:608.7}},{t:this.shape_596,p:{x:819.6}},{t:this.shape_171,p:{x:831.8,y:610.8}},{t:this.shape_133,p:{x:448.1}},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_327,p:{x:496.9}},{t:this.shape_513,p:{x:509.1}},{t:this.shape_790},{t:this.shape_138,p:{x:550.2,y:633.7}},{t:this.shape_147,p:{x:562.4}},{t:this.shape_510,p:{x:574.6}},{t:this.shape_413,p:{x:586.8}},{t:this.shape_521,p:{x:599}},{t:this.shape_323,p:{x:611.2}},{t:this.shape_326,p:{x:623.4}},{t:this.shape_150,p:{x:652.2}},{t:this.shape_135,p:{x:664.4}},{t:this.shape_153,p:{x:693.3}},{t:this.shape_152,p:{x:705.5}},{t:this.shape_151,p:{x:717.7}},{t:this.shape_174,p:{x:746.5,y:634.1}},{t:this.shape_132,p:{x:758.7}},{t:this.shape_421,p:{x:770.9,y:633.7}},{t:this.shape_410,p:{x:783.1}},{t:this.shape_789},{t:this.shape_788,p:{x:807.5}},{t:this.shape_787},{t:this.shape_143,p:{x:831.9}},{t:this.shape_92,p:{x:448.1,y:659.1}},{t:this.shape_310,p:{x:460.3}},{t:this.shape_120,p:{x:495.6}},{t:this.shape_113,p:{x:507.8}},{t:this.shape_786},{t:this.shape_125,p:{x:555.2}},{t:this.shape_785},{t:this.shape_730,p:{x:579.6}},{t:this.shape_216,p:{x:591.8,y:660.8}},{t:this.shape_303,p:{x:627.1}},{t:this.shape_735,p:{x:639.3}},{t:this.shape_784},{t:this.shape_123,p:{x:663.7}},{t:this.shape_122,p:{x:675.9}},{t:this.shape_77,p:{x:688.1,y:659.1}},{t:this.shape_128,p:{x:700.3,y:660.8}},{t:this.shape_783},{t:this.shape_29,p:{x:724.7,y:658.7}},{t:this.shape_119,p:{x:759.9}},{t:this.shape_118,p:{x:772.1}},{t:this.shape_28,p:{x:807.4,y:658.7}},{t:this.shape_124,p:{x:819.6}},{t:this.shape_114,p:{x:831.8}},{t:this.shape_86,p:{x:448.1}},{t:this.shape_582},{t:this.shape_782},{t:this.shape_395},{t:this.shape_286,p:{x:496.9}},{t:this.shape_285,p:{x:509.1}},{t:this.shape_111,p:{x:543.5}},{t:this.shape_781},{t:this.shape_110,p:{x:567.9,y:685.8}},{t:this.shape_780},{t:this.shape_779},{t:this.shape_393,p:{x:604.5}},{t:this.shape_96,p:{x:616.7,y:685.8}},{t:this.shape_206,p:{x:628.9,y:685.8}},{t:this.shape_656,p:{x:641.1}},{t:this.shape_494,p:{x:653.3}},{t:this.shape_281,p:{x:665.5}},{t:this.shape_103,p:{x:677.7,y:690.8}},{t:this.shape_657,p:{x:712.1}},{t:this.shape_101,p:{x:724.3,y:683.7}},{t:this.shape_778},{t:this.shape_201,p:{x:770.9,y:685.8}},{t:this.shape_653},{t:this.shape_85,p:{x:795.3}},{t:this.shape_97,p:{x:807.5}},{t:this.shape_266,p:{x:819.9,y:686.1}},{t:this.shape_196,p:{x:831.9,y:685.8}},{t:this.shape_272,p:{x:448.1}},{t:this.shape_66,p:{x:460.3}},{t:this.shape_278,p:{x:492.2}},{t:this.shape_273,p:{x:504.4}},{t:this.shape_777},{t:this.shape_277,p:{x:548.5,y:709.1}},{t:this.shape_416,p:{x:560.7,y:710.8}},{t:this.shape_63,p:{x:572.9}},{t:this.shape_389,p:{x:585.1}},{t:this.shape_534,p:{x:617,y:709.1}},{t:this.shape_202,p:{x:629.2,y:710.8}},{t:this.shape_149,p:{x:641.4,y:710.8}},{t:this.shape_56,p:{x:653.6,y:709.1}},{t:this.shape_722,p:{x:665.8}},{t:this.shape_274,p:{x:678}},{t:this.shape_271,p:{x:690.2}},{t:this.shape_263,p:{x:702.4}},{t:this.shape_64,p:{x:714.6}},{t:this.shape_404,p:{x:746.5,y:713.2}},{t:this.shape_80,p:{x:758.7}},{t:this.shape_776},{t:this.shape_775},{t:this.shape_78,p:{x:795.3}},{t:this.shape_81,p:{x:807.5}},{t:this.shape_774},{t:this.shape_773},{t:this.shape_44,p:{x:448.1}},{t:this.shape_45,p:{x:460.3}},{t:this.shape_772},{t:this.shape_38,p:{x:484.7,y:735.8}},{t:this.shape_47,p:{x:496.9}},{t:this.shape_570,p:{x:527.3,y:734.1}},{t:this.shape_771},{t:this.shape_42,p:{x:551.7}},{t:this.shape_770,p:{x:563.9,y:735.8}},{t:this.shape_533,p:{x:594.3,y:734.1}},{t:this.shape_37,p:{x:606.5}},{t:this.shape_638,p:{x:618.7}},{t:this.shape_769},{t:this.shape_768},{t:this.shape_374,p:{x:673.5}},{t:this.shape_62,p:{x:685.7}},{t:this.shape_40,p:{x:697.9}},{t:this.shape_48,p:{x:710.1}},{t:this.shape_41,p:{x:722.3}},{t:this.shape_377,p:{x:752.7}},{t:this.shape_376,p:{x:764.9}},{t:this.shape_36,p:{x:795.3}},{t:this.shape_635,p:{x:807.5}},{t:this.shape_46,p:{x:819.7}},{t:this.shape_251},{t:this.shape_245,p:{x:448.1}},{t:this.shape_24,p:{x:460.3}},{t:this.shape_23,p:{x:472.5,y:758.7}},{t:this.shape_39,p:{x:512.7,y:759.1}},{t:this.shape_87,p:{x:524.9,y:760.8}},{t:this.shape_236,p:{x:537.1}},{t:this.shape_232,p:{x:549.3}},{t:this.shape_234,p:{x:561.5}},{t:this.shape_17,p:{x:601.6}},{t:this.shape_363,p:{x:613.8}},{t:this.shape_16,p:{x:654,y:758.7}},{t:this.shape_15,p:{x:666.2}},{t:this.shape_767},{t:this.shape_304,p:{y:758.7,x:718.5}},{t:this.shape_248,p:{x:730.7}},{t:this.shape_35,p:{x:742.9}},{t:this.shape_766},{t:this.shape_18,p:{x:767.3}},{t:this.shape_8,p:{x:779.5,y:765.8}},{t:this.shape_178,p:{x:819.7,y:759.1}},{t:this.shape_14,p:{x:831.9}},{t:this.shape_69,p:{x:448.1,y:788.2}},{t:this.shape_12,p:{x:460.3}},{t:this.shape_499,p:{x:472.5,y:783.7}},{t:this.shape_106,p:{y:785.8,x:484.7}},{t:this.shape_765},{t:this.shape_230,p:{x:509.1}},{t:this.shape_100,p:{x:539.5,y:783.7}},{t:this.shape_764},{t:this.shape_763},{t:this.shape_460,p:{x:594.3}},{t:this.shape_762},{t:this.shape_214,p:{x:618.7}},{t:this.shape_703,p:{x:630.9}},{t:this.shape_212,p:{x:643.1}},{t:this.shape_761},{t:this.shape_558,p:{x:685.7}},{t:this.shape_468,p:{x:697.9}},{t:this.shape_215,p:{x:728.3}},{t:this.shape_93,p:{x:740.5,y:783.7}},{t:this.shape_210,p:{x:770.9}},{t:this.shape_288,p:{x:783.1,y:783.7}},{t:this.shape_9,p:{x:795.3}},{t:this.shape_10,p:{x:807.5}},{t:this.shape_760},{t:this.shape_211,p:{x:831.9}},{t:this.shape_453,p:{x:448.1}},{t:this.shape_759},{t:this.shape_550,p:{x:472.5}},{t:this.shape_390,p:{x:496.9,y:808.7}},{t:this.shape_758},{t:this.shape_31,p:{x:521.3,y:809.1}},{t:this.shape_21,p:{x:533.5,y:810.8}},{t:this.shape_757},{t:this.shape_485,p:{x:557.9,y:810.8}},{t:this.shape_756},{t:this.shape_699,p:{x:582.3}},{t:this.shape_200,p:{x:594.5}},{t:this.shape_90,p:{x:606.7,y:810.8}},{t:this.shape_197,p:{x:631.1}},{t:this.shape_204,p:{x:643.3}},{t:this.shape_83,p:{x:667.7,y:808.7}},{t:this.shape_384,p:{x:679.9,y:810.8}},{t:this.shape_22,p:{x:704.3,y:809.1}},{t:this.shape_73,p:{x:716.5,y:808.7}},{t:this.shape_67,p:{x:728.7,y:808.7}},{t:this.shape_386,p:{x:740.9,y:810.8}},{t:this.shape_65,p:{x:753.1,y:810.8}},{t:this.shape_219,p:{x:765.3,y:810.8}},{t:this.shape_456,p:{x:777.5}},{t:this.shape_189,p:{x:789.7,y:815.8}},{t:this.instance_7,p:{scaleX:0.378,scaleY:0.371,x:491,y:405}},{t:this.LUPA_FORJAZ},{t:this.shape_755},{t:this.shape_3,p:{x:608.8}},{t:this.shape,p:{x:627.1}},{t:this.shape_754},{t:this.shape_1,p:{x:663.8}},{t:this.shape_753}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.622,scaleY:1.532,x:0,y:111}},{t:this.VOLVER_FORJAZ},{t:this.shape_800},{t:this.shape_184,p:{x:161.6}},{t:this.shape_348,p:{x:201.3}},{t:this.shape_799},{t:this.shape_182,p:{x:280.7}},{t:this.shape_798}]},1).to({state:[{t:this.shape_75,p:{x:448.1,y:609.1}},{t:this.shape_178,p:{x:460.3,y:609.1}},{t:this.shape_833},{t:this.shape_302,p:{x:484.7,y:609.1}},{t:this.shape_176,p:{x:496.9}},{t:this.shape_832},{t:this.shape_533,p:{x:521.3,y:609.1}},{t:this.shape_92,p:{x:533.5,y:609.1}},{t:this.shape_429,p:{x:545.7}},{t:this.shape_277,p:{x:557.9,y:609.1}},{t:this.shape_174,p:{x:570.1,y:609.1}},{t:this.shape_428,p:{x:595.9}},{t:this.shape_171,p:{x:608.1,y:610.8}},{t:this.shape_170,p:{x:633.9,y:608.7}},{t:this.shape_695,p:{x:646.1,y:610.8}},{t:this.shape_603,p:{x:671.9}},{t:this.shape_333,p:{x:684.1}},{t:this.shape_602,p:{x:696.3}},{t:this.shape_165,p:{x:708.5}},{t:this.shape_831},{t:this.shape_163,p:{x:732.9}},{t:this.shape_162,p:{x:758.7}},{t:this.shape_161,p:{x:770.9}},{t:this.shape_160},{t:this.shape_159,p:{x:795.3}},{t:this.shape_77,p:{x:807.5,y:609.1}},{t:this.shape_157},{t:this.shape_156,p:{x:831.9,y:608.7}},{t:this.shape_155,p:{x:448.1}},{t:this.shape_147,p:{x:460.3}},{t:this.shape_153,p:{x:472.5}},{t:this.shape_416,p:{x:497.8,y:635.8}},{t:this.shape_141,p:{x:510}},{t:this.shape_144,p:{x:522.2}},{t:this.shape_512,p:{x:534.4}},{t:this.shape_327,p:{x:546.6}},{t:this.shape_830},{t:this.shape_254,p:{x:584.1,y:635.8}},{t:this.shape_510,p:{x:596.3}},{t:this.shape_515,p:{x:608.5}},{t:this.shape_415,p:{x:620.7}},{t:this.shape_323,p:{x:632.9}},{t:this.shape_150,p:{x:658.2}},{t:this.shape_133,p:{x:670.4}},{t:this.shape_671,p:{x:695.7}},{t:this.shape_788,p:{x:707.9}},{t:this.shape_135,p:{x:720.1}},{t:this.shape_149,p:{x:732.3,y:635.8}},{t:this.shape_152,p:{x:744.5}},{t:this.shape_56,p:{x:756.7,y:634.1}},{t:this.shape_829},{t:this.shape_828},{t:this.shape_132,p:{x:819.5}},{t:this.shape_410,p:{x:831.7}},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_125,p:{x:484.7}},{t:this.shape_128,p:{x:496.9,y:660.8}},{t:this.shape_505,p:{x:541}},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_407,p:{x:602}},{t:this.shape_119,p:{x:646.1}},{t:this.shape_120,p:{x:658.3}},{t:this.shape_820},{t:this.shape_668,p:{x:714.6}},{t:this.shape_126,p:{x:726.8,y:660.8}},{t:this.shape_819},{t:this.shape_583,p:{x:751.2}},{t:this.shape_124,p:{x:763.4}},{t:this.shape_114,p:{x:775.6}},{t:this.shape_118,p:{x:819.7}},{t:this.shape_457,p:{x:831.9,y:660.8}},{t:this.shape_317,p:{y:684.1,x:448.1}},{t:this.shape_770,p:{x:460.3,y:685.8}},{t:this.shape_86,p:{x:472.5}},{t:this.shape_110,p:{x:484.7,y:685.8}},{t:this.shape_201,p:{x:496.9,y:685.8}},{t:this.shape_39,p:{x:509.1,y:684.1}},{t:this.shape_818},{t:this.shape_103,p:{x:533.5,y:690.8}},{t:this.shape_259,p:{x:572,y:684.1}},{t:this.shape_817},{t:this.shape_285,p:{x:622.6}},{t:this.shape_288,p:{x:634.8,y:683.7}},{t:this.shape_95,p:{x:647}},{t:this.shape_196,p:{x:659.2,y:685.8}},{t:this.shape_96,p:{x:697.7,y:685.8}},{t:this.shape_97,p:{x:709.9}},{t:this.shape_816},{t:this.shape_90,p:{x:734.3,y:685.8}},{t:this.shape_815},{t:this.shape_85,p:{x:758.7}},{t:this.shape_31,p:{x:770.9,y:684.1}},{t:this.shape_87,p:{x:783.1,y:685.8}},{t:this.shape_663,p:{x:795.3}},{t:this.shape_497,p:{x:807.5,y:683.7}},{t:this.shape_89,p:{x:819.7}},{t:this.shape_661,p:{x:831.9}},{t:this.shape_392,p:{x:448.1,y:713.2}},{t:this.shape_273,p:{x:460.3}},{t:this.shape_81,p:{x:472.5}},{t:this.shape_73,p:{x:502.9,y:708.7}},{t:this.shape_263,p:{x:515.1}},{t:this.shape_276,p:{x:545.5}},{t:this.shape_279,p:{x:557.7}},{t:this.shape_193,p:{x:569.9,y:710.8}},{t:this.shape_80,p:{x:582.1}},{t:this.shape_389,p:{x:594.3}},{t:this.shape_645,p:{x:624.7}},{t:this.shape_644,p:{x:636.9}},{t:this.shape_814},{t:this.shape_813},{t:this.shape_84,p:{x:691.7}},{t:this.shape_219,p:{x:703.9,y:710.8}},{t:this.shape_383,p:{x:734.3}},{t:this.shape_78,p:{x:764.7}},{t:this.shape_64,p:{x:776.9}},{t:this.shape_387,p:{x:807.3}},{t:this.shape_812},{t:this.shape_202,p:{x:831.7,y:710.8}},{t:this.shape_43,p:{x:448.1}},{t:this.shape_372,p:{x:460.3}},{t:this.shape_38,p:{x:472.5,y:735.8}},{t:this.shape_260,p:{x:484.7}},{t:this.shape_371,p:{x:496.9}},{t:this.shape_811},{t:this.shape_810},{t:this.shape_378,p:{x:533.5}},{t:this.shape_54,p:{x:545.7}},{t:this.shape_374,p:{x:592.9}},{t:this.shape_258,p:{x:605.1}},{t:this.shape_377,p:{x:617.3}},{t:this.shape_48,p:{x:664.4}},{t:this.shape_138,p:{x:676.6,y:733.7}},{t:this.shape_36,p:{x:688.8}},{t:this.shape_62,p:{x:701}},{t:this.shape_809},{t:this.shape_37,p:{x:725.4}},{t:this.shape_301,p:{x:772.6,y:738.2}},{t:this.shape_46,p:{x:819.7}},{t:this.shape_251},{t:this.shape_399,p:{x:448.1,y:758.7}},{t:this.shape_712},{t:this.shape_191,p:{x:472.5,y:763.2}},{t:this.shape_24,p:{x:484.7}},{t:this.shape_563,p:{x:496.9}},{t:this.shape_588,p:{y:758.7}},{t:this.shape_17,p:{x:521.3}},{t:this.shape_21,p:{x:533.5,y:760.8}},{t:this.shape_99,p:{x:545.7,y:758.8}},{t:this.shape_808},{t:this.shape_807},{t:this.shape_564,p:{x:594.5}},{t:this.shape_235,p:{x:606.7}},{t:this.shape_15,p:{x:618.9}},{t:this.shape_632,p:{x:631.1}},{t:this.shape_234,p:{x:643.3}},{t:this.shape_14,p:{x:655.5}},{t:this.shape_8,p:{x:667.7,y:765.8}},{t:this.instance_8,p:{scaleX:0.378,scaleY:0.371,x:491,y:405}},{t:this.LUPA_VENTORMENTA},{t:this.shape_806},{t:this.shape_7},{t:this.shape_805},{t:this.shape_804},{t:this.shape_3,p:{x:617.9}},{t:this.shape,p:{x:636.3}},{t:this.shape_803},{t:this.shape_5,p:{x:673}},{t:this.shape_802},{t:this.shape_801},{t:this.shape_1,p:{x:728}}]},1).to({state:[{t:this.instance_8,p:{scaleX:1.622,scaleY:1.532,x:0,y:111}},{t:this.VOLVER_VENTORMENTA},{t:this.shape_837},{t:this.shape_188,p:{x:161.6}},{t:this.shape_688,p:{x:201.2}},{t:this.shape_836},{t:this.shape_184,p:{x:280.7}},{t:this.shape_835},{t:this.shape_538},{t:this.shape_186,p:{x:399.8}},{t:this.shape_834},{t:this.shape_437,p:{x:479.2}},{t:this.shape_182,p:{x:518.9}}]},1).wait(1));

	// BOTONES
	this.LUNARGENTA = new lib.LUNARGENTA_1();
	this.LUNARGENTA.name = "LUNARGENTA";
	this.LUNARGENTA.parent = this;
	this.LUNARGENTA.setTransform(1091.5,300.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.LUNARGENTA, 0, 1, 2, false, new lib.LUNARGENTA_1(), 3);

	this.DALARAN = new lib.DALARAN_1();
	this.DALARAN.name = "DALARAN";
	this.DALARAN.parent = this;
	this.DALARAN.setTransform(644.5,240.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.DALARAN, 0, 1, 2, false, new lib.DALARAN_1(), 3);

	this.ORGRIMMAR = new lib.ORGRIMMAR_1();
	this.ORGRIMMAR.name = "ORGRIMMAR";
	this.ORGRIMMAR.parent = this;
	this.ORGRIMMAR.setTransform(336.5,533.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.ORGRIMMAR, 0, 1, 2, false, new lib.ORGRIMMAR_1(), 3);

	this.CIMA = new lib.CIMA_1();
	this.CIMA.name = "CIMA";
	this.CIMA.parent = this;
	this.CIMA.setTransform(220.5,597.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.CIMA, 0, 1, 2, false, new lib.CIMA_1(), 3);

	this.DARNASSUS = new lib.DARNASSUS_1();
	this.DARNASSUS.name = "DARNASSUS";
	this.DARNASSUS.parent = this;
	this.DARNASSUS.setTransform(162.2,321.1,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.DARNASSUS, 0, 1, 2, false, new lib.DARNASSUS_1(), 3);

	this.EXODAR = new lib.EXODAR();
	this.EXODAR.name = "EXODAR";
	this.EXODAR.parent = this;
	this.EXODAR.setTransform(70.5,415.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.EXODAR, 0, 1, 2, false, new lib.EXODAR(), 3);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("ABIEHIAAjoIiMAAIAADoIhnAAIAAoNIBnAAIAADmICMAAIAAjmIBkAAIAAINg");
	this.shape_838.setTransform(1140.8,54);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AguEHIAAnLIhzAAIAAhCIFCAAIAABCIhtAAIAAHLg");
	this.shape_839.setTransform(1101.1,54);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AhHEHQgXAAgSgLQgTgLgNgUQgNgUgIgZQgHgaAAgeIAAjtQAAgfAHgaQAIgaANgUQANgTATgLQASgMAXAAICPAAQAXAAASAMQATALANATQANAUAIAaQAHAaAAAfIAADtQAAAegHAaQgHAZgNAUQgNATgTALQgSAMgYAAgAgwi9QgIAGgGALQgGALgEAOQgDAOAAAQIAADtQAAAPADAOQAEAOAFALQAGALAJAHQAJAGALAAIA5AAQAMAAAIgGQAJgHAGgKQAGgLADgOQADgOAAgQIAAjtQAAgQgDgPQgDgOgHgLQgGgKgJgGQgIgHgLAAIg5AAQgLAAgJAHg");
	this.shape_840.setTransform(1061.4,54);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("ABHEHIAAiAQAAhkgvAAIhZAAIAADkIhlAAIAAoNIDVAAQA9AAAcAjQAdAiAABNQAAAogOAeQgPAegmAPQARAFAMAIQANAIAJALQAJAMAEAQQAGAQAAAXIAAClgAhBgdIBbAAQAWAAANgWQAMgXAAglQAAgngMgXQgNgXgWAAIhbAAg");
	this.shape_841.setTransform(1021.7,54);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AigEHIAAoNIFBAAIAABCIjbAAIAACkICfAAIAAA/IifAAIAACnIDbAAIAABBg");
	this.shape_842.setTransform(982,54);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AinEHIAAgqIDjmhIjjAAIAAhCIFPAAIAAA2IjXGWIDXAAIAABBg");
	this.shape_843.setTransform(942.3,54);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_844.setTransform(902.6,54);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AigEHIAAoNIFBAAIAABCIjbAAIAACkICfAAIAAA/IifAAIAACnIDbAAIAABBg");
	this.shape_845.setTransform(823.2,54);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AinEHIAAoNIDrAAQAWAAATAMQASALANATQANAUAIAaQAHAaAAAfIAADtQAAAegHAaQgHAagNATQgNAUgTALQgTALgWAAgAhCDGIBcAAQAKAAAJgGQAJgHAGgLQAGgLADgOQADgOAAgPIAAjtQAAgQgDgOQgDgOgGgLQgGgLgJgGQgJgHgKAAIhcAAg");
	this.shape_846.setTransform(783.5,54);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#000000").s().p("AhHEHQgXAAgSgLQgTgLgNgUQgNgUgIgZQgHgaAAgeIAAjtQAAgfAHgaQAIgaANgUQANgTATgLQASgMAXAAICPAAQAXAAASAMQATALANATQANAUAIAaQAHAaAAAfIAADtQAAAegHAaQgHAZgNAUQgNATgTALQgSAMgYAAgAgwi9QgIAGgGALQgGALgEAOQgDAOAAAQIAADtQAAAPADAOQAEAOAFALQAGALAJAHQAJAGALAAIA5AAQAMAAAIgGQAJgHAGgKQAGgLADgOQADgOAAgQIAAjtQAAgQgDgPQgDgOgHgLQgGgKgJgGQgIgHgLAAIg5AAQgLAAgJAHg");
	this.shape_847.setTransform(704.1,54);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#000000").s().p("AhCEHIhvoNIBkAAIBIGjIAJAAIBRmjIBdAAIh5INg");
	this.shape_848.setTransform(664.4,54);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#000000").s().p("AigEHIAAhBIBvAAIAAmKIhvAAIAAhCIFBAAIAABCIhuAAIAAGKIBuAAIAABBg");
	this.shape_849.setTransform(624.6,54);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#000000").s().p("AguEHIAAnLIhzAAIAAhCIFDAAIAABCIhtAAIAAHLg");
	this.shape_850.setTransform(585,54);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#000000").s().p("Ag3EHQgXAAgTgLQgSgLgMgUQgNgTgIgaQgGgaAAgeIAAjtQAAgfAGgaQAIgaANgUQAOgTARgLQATgMAWAAIDSAAIAABCIinAAQgLAAgIAHQgIAGgHALQgGALgDAOQgDAOgBAQIAADtQABAPADAOQADAOAGALQAGALAIAHQAKAGAKAAICnAAIAABBg");
	this.shape_851.setTransform(545.3,54);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_852.setTransform(505.6,54);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("ABIEHIAAiAQAAhkgxAAIhZAAIAADkIhkAAIAAoNIDVAAQA+AAAcAjQAcAiAABNQAAAogPAeQgPAegkAPQAQAFANAIQAMAIAJALQAIAMAGAQQAEAQAAAXIAAClgAhCgdIBcAAQAWAAAMgWQANgXAAglQAAgngNgXQgMgXgWAAIhcAAg");
	this.shape_853.setTransform(465.9,54);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AigEHIAAoNIFBAAIAABCIjbAAIAACkICfAAIAAA/IifAAIAACnIDbAAIAABBg");
	this.shape_854.setTransform(426.2,54);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AguEHIAAnLIhzAAIAAhCIFCAAIAABCIhtAAIAAHLg");
	this.shape_855.setTransform(386.5,54);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AA4EHIiRlgIAAFgIhPAAIAAoNIBkAAICeGLIAAmLIBPAAIAAINg");
	this.shape_856.setTransform(346.7,54);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AigEHIAAhBIBvAAIAAmKIhvAAIAAhCIFBAAIAABCIhuAAIAAGKIBuAAIAABBg");
	this.shape_857.setTransform(307,54);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_858.setTransform(227.7,54);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AinEHIAAoNIDrAAQAWAAATAOQASANANAXQANAWAIAeQAHAfAAAhQAAAigHAdQgHAegNAUQgNAVgSAMQgTAMgXAAIiGAAIAADJgAhCgDIBcAAQAuAAAAhfQAAhiguAAIhcAAg");
	this.shape_859.setTransform(187.9,54);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("ABKEHIgRhuIhyAAIgQBuIhlAAIBsoNICEAAIBtINgAgwBXIBgAAIgrkbIgKAAg");
	this.shape_860.setTransform(148.3,54);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("ABgEHIAAlMIg5FMIhOAAIg0lJIAAFJIhNAAIAAoNIBlAAIBDGQIBEmQIBlAAIAAINg");
	this.shape_861.setTransform(108.5,54);

	this.ENTRANAS = new lib.ENTRANAS();
	this.ENTRANAS.name = "ENTRANAS";
	this.ENTRANAS.parent = this;
	this.ENTRANAS.setTransform(955.5,430.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.ENTRANAS, 0, 1, 2, false, new lib.ENTRANAS(), 3);

	this.FORJAZ = new lib.FORJAZ_1();
	this.FORJAZ.name = "FORJAZ";
	this.FORJAZ.parent = this;
	this.FORJAZ.setTransform(984.5,601.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.FORJAZ, 0, 1, 2, false, new lib.FORJAZ_1(), 3);

	this.VENTORMENTA = new lib.VENTORMENTA_1();
	this.VENTORMENTA.name = "VENTORMENTA";
	this.VENTORMENTA.parent = this;
	this.VENTORMENTA.setTransform(953.5,703.5,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.VENTORMENTA, 0, 1, 2, false, new lib.VENTORMENTA_1(), 3);

	this.instance_9 = new lib.FONDO();
	this.instance_9.parent = this;
	this.instance_9.setTransform(626,505.5,1,1,0,0,0,626,394.5);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#0033CC").s().p("AhEB5IAAgdIBPAAQAFAAAFgEQAEgDADgFQADgFABgIQACgHAAgJQAAgKgCgGQgBgHgFgEQgEgEgGgCQgHgCgJAAIgaAAQgNAAgJgFQgKgFgGgIQgHgJgDgMQgDgMAAgPQAAgPADgMQADgNAGgKQAHgJAIgGQAIgFALAAIBiAAIAAAeIhPAAQgFAAgEADIgGAHIgEALQgCAGABAHQAAAQAFAKQAGAJAJAAIAoAAQAMAAAKAFQAJAFAHAJQAFAIAEANQADAMAAAPQAAAQgDAOQgEANgGAKQgHALgIAFQgJAGgKAAg");
	this.shape_862.setTransform(709.7,383.6);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#0033CC").s().p("AggB5QgKAAgJgFQgJgFgGgJQgGgJgDgMQgDgMAAgOIAAivIAtAAIAACvIABAOIAEAMQADAFAEADQAEADAFAAIAZAAQAEAAAEgDQAEgDADgFQADgFABgHQACgGAAgIIAAivIAtAAIAACvQAAAOgEAMQgDAMgGAJQgGAJgIAFQgJAFgLAAg");
	this.shape_863.setTransform(691.3,383.6);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#0033CC").s().p("AhFB5IAAgdIBQAAQAGAAADgEQAFgDADgFQADgFABgIQACgHAAgJQAAgKgCgGQgCgHgDgEQgFgEgGgCQgHgCgJAAIgaAAQgNAAgJgFQgKgFgGgIQgHgJgDgMQgDgMAAgPQAAgPADgMQAEgNAFgKQAHgJAIgGQAIgFALAAIBhAAIAAAeIhOAAQgEAAgFADIgGAHIgEALQgBAGgBAHQAAAQAHAKQAFAJAJAAIAoAAQAMAAAKAFQAJAFAGAJQAGAIAEANQADAMAAAPQAAAQgEAOQgDANgGAKQgHALgIAFQgJAGgLAAg");
	this.shape_864.setTransform(673,383.6);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#0033CC").s().p("AhFB5IAAgdIBQAAQAGAAADgEQAFgDADgFQADgFABgIQACgHAAgJQAAgKgCgGQgCgHgDgEQgFgEgGgCQgGgCgKAAIgaAAQgMAAgKgFQgJgFgHgIQgGgJgDgMQgEgMAAgPQAAgPAEgMQACgNAHgKQAFgJAJgGQAJgFAKAAIBhAAIAAAeIhOAAQgEAAgFADIgGAHIgEALQgBAGgBAHQAAAQAHAKQAFAJAJAAIAoAAQAMAAAKAFQAJAFAGAJQAGAIAEANQADAMAAAPQAAAQgEAOQgDANgGAKQgGALgJAFQgJAGgLAAg");
	this.shape_865.setTransform(654.6,383.6);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#0033CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_866.setTransform(636.3,383.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#0033CC").s().p("AAaB5IhDihIAAChIgkAAIAAjxIAvAAIBIC1IAAi1IAkAAIAADxg");
	this.shape_867.setTransform(617.9,383.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#0033CC").s().p("AAhB5IAAg6QAAgvgWAAIgpAAIAABpIguAAIAAjxIBiAAQAcAAANAQQANAPAAAkQAAASgHAOQgHAOgRAHQAIACAGADQAGAEAEAFQAEAGACAHQACAIAAAKIAABMgAgegNIAqAAQAKAAAGgKQAGgKAAgSQAAgSgGgKQgGgLgKAAIgqAAg");
	this.shape_868.setTransform(599.6,383.6);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#0033CC").s().p("AAiB5IgIgyIg0AAIgHAyIgvAAIAyjxIA8AAIAzDxgAgVAoIArAAIgUiCIgEAAg");
	this.shape_869.setTransform(581.2,383.6);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#0033CC").s().p("AhMB5IAAjxIBsAAQAKAAAIAFQAJAFAGAJQAGAJADAMQADAMAAAOIAABtQAAAOgDAMQgDAMgGAJQgGAJgJAFQgIAFgKAAgAgeBcIAqAAQAFAAAEgDQAEgDACgGQADgFACgGQABgGAAgIIAAhtQAAgHgBgGQgCgHgDgFQgCgFgEgDQgEgDgFAAIgqAAg");
	this.shape_870.setTransform(562.9,383.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]}).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]},2).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.DALARAN},{t:this.LUNARGENTA}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.LUNARGENTA}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.FORJAZ},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.VENTORMENTA},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.FORJAZ},{t:this.ENTRANAS},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.EXODAR},{t:this.DARNASSUS},{t:this.CIMA},{t:this.ORGRIMMAR},{t:this.DALARAN},{t:this.LUNARGENTA}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(626,466.1,1252,883.9);
// library properties:
lib.properties = {
	id: '551BF80D0A35B34B872742C3F45F3B87',
	width: 1252,
	height: 900,
	fps: 12,
	color: "#DDDDDD",
	opacity: 1.00,
	manifest: [
		{src:"images/mapa_atlas_.png?1527448078933", id:"mapa_atlas_"}
	],
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
an.compositions['551BF80D0A35B34B872742C3F45F3B87'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;