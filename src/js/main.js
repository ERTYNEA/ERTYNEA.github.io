// Var
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(0, 4, 255, 0, 0, 0, space.getW(), space.getH());
var mouse = new Mouse(framework.getInnerX(), framework.getInnerY());
var character_a = new Character("/img/Human.png", framework.getInnerX(), framework.getInnerY(), 10, 10);
var character_b = new Character(null, framework.getInnerX(), getRandomInt(framework.getInnerY(), framework.getInnerH()), 10, 10);

function preload()
{
    img = loadImage(character_a.getImg());
}

// Start canvas (autocall and manualcall)
function setup() {
    space.setW(window.innerWidth);
    space.setH(window.innerHeight);

    canvas = createCanvas(space.getW(), space.getH());

    framework.setInnerW(space.getW() - 20);
    framework.setInnerH(space.getH() - 20);
}

// Window onresize (autocall)
window.onresize = function() {
    setup();
}

// Main loop (autocall)
function draw() {
    background(0, 0, 0);

    // framework
    noStroke();
    fill(framework.getEfill());
    rect(framework.getX(), framework.getY(), framework.getW(), framework.getH());
    strokeWeight(framework.getStrw());
    stroke(framework.getStr());
    fill(framework.getIfill());
    rect(framework.getInnerX(), framework.getInnerY(), framework.getInnerW(), framework.getInnerH());

    // character_a
    noStroke();
    image(img, character_a.getX() + framework.getStrwHalf(), character_a.getY() + framework.getStrwHalf(), character_a.getW(), character_a.getH());
    if ((character_a.getX() < (framework.getInnerW() - framework.getStrw())) &&
        (character_a.getX() < mouse.getX())) {
        character_a.setX(character_a.getX() + 1);
    }
    else if ((character_a.getX() > framework.getInnerX()) &&
        (character_a.getX() > mouse.getX())) {
        character_a.setX(character_a.getX() - 1);
    }
    if ((character_a.getY() < (framework.getInnerH() - framework.getStrw())) &&
        (character_a.getY() < mouse.getY())) {
        character_a.setY(character_a.getY() + 1);
    }
    else if ((character_a.getY() > framework.getInnerY()) &&
        (character_a.getY() > mouse.getY())) {
        character_a.setY(character_a.getY() - 1);
    }

    // character_b
    noStroke();
    fill(0, 0, 255);
    rect(character_b.getX(), character_b.getY(), character_b.getW(), character_b.getH());
    if (character_b.getX() < framework.getInnerW()) {
        character_b.setX(character_b.getX() + 10);
    }
    else {
        character_b.setX(framework.getInnerX());
        character_b.setY(getRandomInt(framework.getInnerY(), framework.getInnerH()));
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