// Var
var arrayStructure = [];
var arrayCharacter = [];
var space = new Space(window.innerWidth, window.innerHeight);
// REVISAR TODO: Cambiar el framework simple por el Framework del Hub
var framework = new Framework(0, 4, 255, 0, 0, 0, space.getW(), space.getH());
var InitialX = framework.getInnerX() + framework.getStrwHalf();
var InitialY = framework.getInnerY() + framework.getStrwHalf();
var mouse = new Mouse(InitialX, InitialY);
var InitialSpeed = 2;
// REVISAR FIXME: Con velocidad superior a 1 se sale del framework

function preload() {
    // Structure
    arrayStructure.push(
        new Structure(
            "Framework",
            "Hub",
            255,
            0,
            0,
            0,
            0,
            space.getW(),
            space.getH(),
            0,
            0,
            255,
            10,
            10,
            space.getW() - 20,
            space.getH() - 20
        )
    );

    // Character
    arrayCharacter.push(
        new Character(
            "Player",
            "Human",
            "/img/Human.png",
            InitialSpeed,
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

    arrayStructure
        .find((element) => element.name == "Framework")
        .setExtW(space.getW());
    arrayStructure
        .find((element) => element.name == "Framework")
        .setExtH(space.getH());
    arrayStructure
        .find((element) => element.name == "Framework")
        .setIntW(space.getW() - 20);
    arrayStructure
        .find((element) => element.name == "Framework")
        .setIntH(space.getH() - 20);

    // REVISAR TODO: Cambiar el framework simple por el Framework del Hub
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

    // REVISAR TODO: Cambiar el framework simple por el Framework del Hub
    // framework
    /*
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
    */

    // Framework
    noStroke();
    fill(
        arrayStructure
            .find((element) => element.name == "Framework")
            .getExtColorR(),
        arrayStructure
            .find((element) => element.name == "Framework")
            .getExtColorG(),
        arrayStructure
            .find((element) => element.name == "Framework")
            .getExtColorB()
    );
    rect(
        arrayStructure.find((element) => element.name == "Framework").getExtX(),
        arrayStructure.find((element) => element.name == "Framework").getExtY(),
        arrayStructure.find((element) => element.name == "Framework").getExtW(),
        arrayStructure.find((element) => element.name == "Framework").getExtH()
    );
    noStroke();
    fill(
        arrayStructure
            .find((element) => element.name == "Framework")
            .getIntColorR(),
        arrayStructure
            .find((element) => element.name == "Framework")
            .getIntColorG(),
        arrayStructure
            .find((element) => element.name == "Framework")
            .getIntColorB()
    );
    rect(
        arrayStructure.find((element) => element.name == "Framework").getIntX(),
        arrayStructure.find((element) => element.name == "Framework").getIntY(),
        arrayStructure.find((element) => element.name == "Framework").getIntW(),
        arrayStructure.find((element) => element.name == "Framework").getIntH()
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
        arrayCharacter.find((element) => element.name == "Player").getX() +
            arrayCharacter.find((element) => element.name == "Player").getW() <
            framework.getInnerX() +
                framework.getInnerW() -
                framework.getStrwHalf() &&
        arrayCharacter.find((element) => element.name == "Player").getX() <
            mouse.getX()
    ) {
        if (
            arrayCharacter.find((element) => element.name == "Player").getX() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getSpeed() <=
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
        } else {
            arrayCharacter
                .find((element) => element.name == "Player")
                .setX(mouse.getX());
        }
    } else if (
        arrayCharacter.find((element) => element.name == "Player").getX() >
            framework.getInnerX() + framework.getStrwHalf() &&
        arrayCharacter.find((element) => element.name == "Player").getX() >
            mouse.getX()
    ) {
        if (
            arrayCharacter.find((element) => element.name == "Player").getX() -
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getSpeed() >=
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
        } else {
            arrayCharacter
                .find((element) => element.name == "Player")
                .setX(mouse.getX());
        }
    }
    if (
        arrayCharacter.find((element) => element.name == "Player").getY() +
            arrayCharacter.find((element) => element.name == "Player").getH() <
            framework.getInnerY() +
                framework.getInnerH() -
                framework.getStrwHalf() &&
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
        if (
            arrayCharacter.find((element) => element.name == "Player").getY() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getSpeed() <=
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
        } else {
            arrayCharacter
                .find((element) => element.name == "Player")
                .setY(mouse.getY());
        }
    } else if (
        arrayCharacter.find((element) => element.name == "Player").getY() >
            framework.getInnerY() + framework.getStrwHalf() &&
        arrayCharacter.find((element) => element.name == "Player").getY() >
            mouse.getY()
    ) {
        if (
            arrayCharacter.find((element) => element.name == "Player").getY() -
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getSpeed() >=
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
        } else {
            arrayCharacter
                .find((element) => element.name == "Player")
                .setY(mouse.getY());
        }
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
    var mouseTempX = mouse.getX();
    var mouseTempY = mouse.getY();

    mouse.setX(mouseX);
    mouse.setY(mouseY);

    if (mouseTempX == mouse.getX() && mouseTempY == mouse.getY()) {
        if (
            arrayCharacter
                .find((element) => element.name == "Player")
                .getSpeed() < 5
        ) {
            arrayCharacter
                .find((element) => element.name == "Player")
                .setSpeed(
                    arrayCharacter
                        .find((element) => element.name == "Player")
                        .getSpeed() + 1
                );
        }
    } else {
        arrayCharacter
            .find((element) => element.name == "Player")
            .setSpeed(InitialSpeed);
    }
}
