// Var
// REVISAR TODO: Implementar el arrayCharacters en una clase
var arrayCharacters = [];
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(0, 4, 255, 0, 0, 0, space.getW(), space.getH());
var mouse = new Mouse(framework.getInnerX(), framework.getInnerY());
// REVISAR FIXME: Con velocidad de 2 le da por temblar a veces y se sale del framework
// REVISAR TODO: Cuando el punto anterior este arrglado, hacer una velocidad mas rapida con doble click
arrayCharacters.push(
    (player = new Character(
        "/img/Human.png",
        2,
        framework.getInnerX(),
        framework.getInnerY(),
        10,
        10
    ))
);
arrayCharacters.push(
    (enemy = new Character(
        null,
        10,
        framework.getInnerX(),
        getRandomInt(framework.getInnerY(), framework.getInnerH()),
        10,
        10
    ))
);

function preload() {
    img = loadImage(player.getImg());
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
window.onresize = function () {
    setup();
};

// Main loop (autocall)
function draw() {
    background(0, 0, 0);

    // REVISAR XXX
    arrayCharacters.forEach(function (element, i) {
        console.log(element, i);
    });

    // REVISAR TODO: Refactorizar los pintados a pantalla

    // framework
    noStroke();
    fill(framework.getEfill());
    rect(
        framework.getX(),
        framework.getY(),
        framework.getW(),
        framework.getH()
    );
    strokeWeight(framework.getStrw());
    stroke(framework.getStr());
    fill(framework.getIfill());
    rect(
        framework.getInnerX(),
        framework.getInnerY(),
        framework.getInnerW(),
        framework.getInnerH()
    );

    // player
    noStroke();
    image(
        img,
        player.getX() + framework.getStrwHalf(),
        player.getY() + framework.getStrwHalf(),
        player.getW(),
        player.getH()
    );
    if (
        player.getX() < framework.getInnerW() - framework.getStrw() &&
        player.getX() < mouse.getX()
    ) {
        player.setX(player.getX() + player.getSpeed());
    } else if (
        player.getX() > framework.getInnerX() &&
        player.getX() > mouse.getX()
    ) {
        player.setX(player.getX() - player.getSpeed());
    }
    if (
        player.getY() < framework.getInnerH() - framework.getStrw() &&
        player.getY() < mouse.getY()
    ) {
        player.setY(player.getY() + player.getSpeed());
    } else if (
        player.getY() > framework.getInnerY() &&
        player.getY() > mouse.getY()
    ) {
        player.setY(player.getY() - player.getSpeed());
    }

    // enemy
    noStroke();
    fill(0, 0, 255);
    rect(enemy.getX(), enemy.getY(), enemy.getW(), enemy.getH());
    if (enemy.getX() < framework.getInnerW()) {
        enemy.setX(enemy.getX() + enemy.getSpeed());
    } else {
        enemy.setX(framework.getInnerX());
        enemy.setY(getRandomInt(framework.getInnerY(), framework.getInnerH()));
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
