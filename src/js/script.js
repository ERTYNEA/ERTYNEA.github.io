// Var window
var windowInnerWidth = window.innerWidth;
var windowInnerHeight = window.innerHeight;
var canvas;

// Class framework
class Framework {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	
	getX() {
		return this.x;
	}

	setX(x) {
		this.x = x;
	}

	getY() {
		return this.y;
	}

	setY(y) {
		this.y = y;
	}

	getW() {
		return this.w;
	}

	setW(w) {
		this.w = w;
	}

	getH() {
		return this.h;
	}

	setH(h) {
		this.h = h;
	}
}

// Var framework
var framework = new Framework(10, 10, windowInnerWidth - 20, windowInnerHeight - 20);

// Var square
var squarePositionX = framework.getX();
var squarePositionY = getRandomInt(framework.getY(), framework.getH());
var squareMeasureW = 10;
var squareMeasureH = 10;

// Start canvas (autocall and manualcall)
function setup() {
	windowInnerWidth = window.innerWidth;
	windowInnerHeight = window.innerHeight;
	canvas = createCanvas(windowInnerWidth, windowInnerHeight);
	framework.setW(windowInnerWidth - 20);
	framework.setH(windowInnerHeight - 20);
}

// Window onresize (autocall)
window.onresize = function() {
	setup();
}

// Main loop (autocall)
function draw() {
	background(255, 0, 0);
	noStroke();
	fill(0, 0, 0);
	rect(framework.getX(), framework.getY(), framework.getW(), framework.getH());
	noStroke();
	fill(0, 0, 255);
	rect(squarePositionX, squarePositionY, squareMeasureW, squareMeasureH);
	if (squarePositionX<framework.getW()) {
		squarePositionX += 10;
	}
	else {
		squarePositionX = framework.getX();
		squarePositionY = getRandomInt(framework.getY(), framework.getH());
	}
}

// Random int with min (included) and max (excluded)
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}