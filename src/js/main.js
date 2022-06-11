// Var
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(10, 10, space.getW() - 20, space.getH() - 20);

// Var square
var squarePositionX = framework.getX();
var squarePositionY = getRandomInt(framework.getY(), framework.getH());
var squareMeasureW = 10;
var squareMeasureH = 10;

// Start canvas (autocall and manualcall)
function setup() {
	space.setW(window.innerWidth);
	space.setH(window.innerHeight);
	canvas = createCanvas(space.getW(), space.getH());
	framework.setW(space.getW() - 20);
	framework.setH(space.getH() - 20);
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