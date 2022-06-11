// Var
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(10, 10, space.getW() - 20, space.getH() - 20);
var character = new Character(framework.getX(), getRandomInt(framework.getY(), framework.getH()), 10, 10);

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
	rect(character.getX(), character.getY(), character.getW(), character.getH());
	if (character.getX() < framework.getW()) {
		character.setX(character.getX() + 10);
	}
	else {
		character.setX(framework.getX());
		character.setY(getRandomInt(framework.getY(), framework.getH()));
	}
}

// Random int with min (included) and max (excluded)
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}