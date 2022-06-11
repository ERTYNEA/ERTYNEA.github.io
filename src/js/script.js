// Var window
var windowInnerWidth = window.innerWidth;
var windowInnerHeight = window.innerHeight;
var canvas;

// Var square
var positionX = 0;
var positionY = getRandomInt(0, windowInnerHeight);
var measureW = 10;
var measureH = 10;

// Start canvas (autocall and manualcall)
function setup() {
	windowInnerWidth = window.innerWidth;
	windowInnerHeight = window.innerHeight;
	canvas = createCanvas(windowInnerWidth, windowInnerHeight);
}

// Window onresize (autocall)
window.onresize = function() {
	setup();
}

// Main loop (autocall)
function draw() {
	background(255, 0, 0);
	noStroke();
	fill(0, 0, 255);
	rect(positionX, positionY, measureW, measureH);
	if (positionX<windowInnerWidth) {
		positionX += 10;
	}
	else {
		positionX = 0;
		positionY = getRandomInt(0, windowInnerHeight);
	}
}

// Random int with min (included) and max (excluded)
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}