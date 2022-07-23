// Var
var arrayCharacter = [];
var space = new Space(window.innerWidth, window.innerHeight);
var framework = new Framework(0, 4, 255, 0, 0, 0, space.getW(), space.getH());
var mouse = new Mouse(framework.getInnerX(), framework.getInnerY());
// REVISAR FIXME: Con velocidad de 2 le da por temblar a veces y se sale del framework
// REVISAR TODO: Cuando el punto anterior este arrglado, hacer una velocidad mas rapida con doble click

function preload() {
    // Position
    InitialX = framework.getInnerX() + framework.getStrwHalf();
    InitialY = framework.getInnerY() + framework.getStrwHalf();

    // Character
    arrayCharacter.push(
        new Character(
            "Player",
            "Human",
            "/img/Human.png",
            2,
            InitialX,
            InitialY,
            10,
            10
        )
    );
    arrayCharacter.push(
        new Character(
            "Enemy",
            "Monster",
            null,
            10,
            InitialX,
            // REVISAR XXX: Se mantiene pero no cuadra correctamente con el framework
            getRandomInt(framework.getInnerY(), framework.getInnerH()),
            10,
            10
        )
    );

    // Images
    img = loadImage(
        arrayCharacter.find((element) => element.name == "Player").getImg()
    );
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

    // Player
    noStroke();
    image(
        img,
        arrayCharacter.find((element) => element.name == "Player").getX(),
        arrayCharacter.find((element) => element.name == "Player").getY(),
        arrayCharacter.find((element) => element.name == "Player").getW(),
        arrayCharacter.find((element) => element.name == "Player").getH()
    );
    if (
        arrayCharacter.find((element) => element.name == "Player").getX() <
            framework.getInnerW() - framework.getStrw() &&
        arrayCharacter.find((element) => element.name == "Player").getX() <
            mouse.getX()
    ) {
        arrayCharacter
            .find((element) => element.name == "Player")
            .setX(
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getX() +
                    arrayCharacter
                        .find((element) => element.name == "Player")
                        .getSpeed()
            );
    } else if (
        arrayCharacter.find((element) => element.name == "Player").getX() >
            framework.getInnerX() + framework.getStrwHalf() &&
        arrayCharacter.find((element) => element.name == "Player").getX() >
            mouse.getX()
    ) {
        arrayCharacter
            .find((element) => element.name == "Player")
            .setX(
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getX() -
                    arrayCharacter
                        .find((element) => element.name == "Player")
                        .getSpeed()
            );
    }
    if (
        arrayCharacter.find((element) => element.name == "Player").getY() <
            framework.getInnerH() - framework.getStrw() &&
        arrayCharacter.find((element) => element.name == "Player").getY() <
            mouse.getY()
    ) {
        arrayCharacter
            .find((element) => element.name == "Player")
            .setY(
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getY() +
                    arrayCharacter
                        .find((element) => element.name == "Player")
                        .getSpeed()
            );
    } else if (
        arrayCharacter.find((element) => element.name == "Player").getY() >
            framework.getInnerY() + framework.getStrwHalf() &&
        arrayCharacter.find((element) => element.name == "Player").getY() >
            mouse.getY()
    ) {
        arrayCharacter
            .find((element) => element.name == "Player")
            .setY(
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getY() -
                    arrayCharacter
                        .find((element) => element.name == "Player")
                        .getSpeed()
            );
    }

    // Enemy
    noStroke();
    fill(0, 0, 255);
    rect(
        arrayCharacter.find((element) => element.name == "Enemy").getX(),
        arrayCharacter.find((element) => element.name == "Enemy").getY(),
        arrayCharacter.find((element) => element.name == "Enemy").getW(),
        arrayCharacter.find((element) => element.name == "Enemy").getH()
    );
    if (
        arrayCharacter.find((element) => element.name == "Enemy").getX() <
        framework.getInnerW()
    ) {
        arrayCharacter
            .find((element) => element.name == "Enemy")
            .setX(
                arrayCharacter
                    .find((element) => element.name == "Enemy")
                    .getX() +
                    arrayCharacter
                        .find((element) => element.name == "Enemy")
                        .getSpeed()
            );
    } else {
        arrayCharacter
            .find((element) => element.name == "Enemy")
            .setX(framework.getInnerX());
        arrayCharacter
            .find((element) => element.name == "Enemy")
            .setY(getRandomInt(framework.getInnerY(), framework.getInnerH()));
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
