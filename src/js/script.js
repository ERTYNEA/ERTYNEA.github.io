// Var window
var windowInnerWidth = window.innerWidth;
var windowInnerHeight = window.innerHeight;
var canvas;

// Var framework
var frameworkPositionX = 10;
var frameworkPositionY = 10;
var frameworkMeasureW = windowInnerWidth - 20;
var frameworkMeasureH = windowInnerHeight - 20;

// Var square
var squarePositionX = frameworkPositionX;
var squarePositionY = getRandomInt(frameworkPositionY, frameworkMeasureH);
var squareMeasureW = 10;
var squareMeasureH = 10;

// Start canvas (autocall and manualcall)
function setup() {
	windowInnerWidth = window.innerWidth;
	windowInnerHeight = window.innerHeight;
	canvas = createCanvas(windowInnerWidth, windowInnerHeight);
	frameworkMeasureW = windowInnerWidth - 20;
	frameworkMeasureH = windowInnerHeight - 20;
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
	rect(frameworkPositionX, frameworkPositionY, frameworkMeasureW, frameworkMeasureH);
	noStroke();
	fill(0, 0, 255);
	rect(squarePositionX, squarePositionY, squareMeasureW, squareMeasureH);
	if (squarePositionX<frameworkMeasureW) {
		squarePositionX += 10;
	}
	else {
		squarePositionX = frameworkPositionX;
		squarePositionY = getRandomInt(frameworkPositionY, frameworkMeasureH);
	}
}

// Random int with min (included) and max (excluded)
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}