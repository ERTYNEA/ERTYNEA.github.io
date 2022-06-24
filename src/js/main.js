// Var
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(10, 10, space.getW() - 20, space.getH() - 20);
var mouse = new Mouse(framework.getX(), framework.getY());
var character_a = new Character("/img/Human.png", framework.getX(), framework.getY(), 10, 10);
var character_b = new Character(null, framework.getX(), getRandomInt(framework.getY(), framework.getH()), 10, 10);

function preload()
{
    img = loadImage(character_a.getImg());
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

    // character_a
    noStroke();
    image(img, character_a.getX(), character_a.getY(), character_a.getW(), character_a.getH());
    if ((character_a.getX() < framework.getW()) &&
        (character_a.getX() < mouse.getX())) {
        character_a.setX(character_a.getX() + 1);
    }
    else if ((character_a.getX() > framework.getX()) &&
        (character_a.getX() > mouse.getX())) {
        character_a.setX(character_a.getX() - 1);
    }
    if ((character_a.getY() < framework.getH()) &&
        (character_a.getY() < mouse.getY())) {
        character_a.setY(character_a.getY() + 1);
    }
    else if ((character_a.getY() > framework.getY()) &&
        (character_a.getY() > mouse.getY())) {
        character_a.setY(character_a.getY() - 1);
    }

    // character_b
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

function mousePressed() {
    mouse.setX(mouseX);
    mouse.setY(mouseY);
}