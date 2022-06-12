// Var
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(10, 10, space.getW() - 20, space.getH() - 20);
var character_a = new Character(framework.getX(), getRandomInt(framework.getY(), framework.getH()), 10, 10);
var character_b = new Character(framework.getX(), getRandomInt(framework.getY(), framework.getH()), 10, 10);

function preload()
{
  img = loadImage("/img/Human.png");
}

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
	fill(0, 255, 0);
	image(img, character_a.getX(), character_a.getY(), character_a.getW(), character_a.getH());
	if (character_a.getX() < framework.getW()) {
		character_a.setX(character_a.getX() + 1);
	}
	else {
		character_a.setX(framework.getX());
		character_a.setY(getRandomInt(framework.getY(), framework.getH()));
	}

	noStroke();
	fill(0, 0, 255);
	rect(character_b.getX(), character_b.getY(), character_b.getW(), character_b.getH());
	if (character_b.getX() < framework.getW()) {
		character_b.setX(character_b.getX() + 10);
	}
	else {
		character_b.setX(framework.getX());
		character_b.setY(getRandomInt(framework.getY(), framework.getH()));
	}
}

// Random int with min (included) and max (excluded)
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}