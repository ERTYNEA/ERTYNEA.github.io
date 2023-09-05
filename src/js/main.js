/*
// Var
var arrayStructure = [];
var arrayCharacter = [];
var space = new Space(window.innerWidth, window.innerHeight);
var InitialX = 10;
var InitialY = 10;
var mouse = new Mouse(InitialX, InitialY);
var InitialSpeed = 2;

function preload() {
    // Structure
    arrayStructure.push(
        new Structure(
            "Framework",
            "Hub",
            255,
            255,
            0,
            0,
            0,
            space.getW(),
            space.getH(),
            0,
            0,
            0,
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
            // REVISAR XXX: Cuadra correctamente con el Framework?
            getRandomInt(
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntY(),
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntH()
            ),
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
}

// Window onresize (autocall)
window.onresize = function () {
    setup();
};

// Main loop (autocall)
function draw() {
    background(0, 0, 0);

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
    // REVISAR TODO: Aplicar el nuevo sistema de colisiones
    if (
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
        arrayCharacter.find((element) => element.name == "Player").getY() <
        mouse.getY()
    ) {
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

    // REVISAR XXX: Test nuevo sistema de colisiones
    console.log(
        "Player X: " +
            arrayCharacter.find((element) => element.name == "Player").getX()
    );
    console.log(
        "Player Y: " +
            arrayCharacter.find((element) => element.name == "Player").getY()
    );
    console.log(
        "Player X + W: " +
            (arrayCharacter.find((element) => element.name == "Player").getX() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getW())
    );
    console.log(
        "Player Y + H: " +
            (arrayCharacter.find((element) => element.name == "Player").getY() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getH())
    );
    console.log(
        "Framework ExtX: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getExtX()
    );
    console.log(
        "Framework ExtY: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getExtY()
    );
    console.log(
        "Framework ExtX + ExtW: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getExtX() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getExtW())
    );
    console.log(
        "Framework ExtY + ExtH: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getExtY() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getExtH())
    );
    console.log(
        "Framework IntX: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntX()
    );
    console.log(
        "Framework IntY: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntY()
    );
    console.log(
        "Framework IntX + IntW: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getIntX() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntW())
    );
    console.log(
        "Framework IntY + IntH: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getIntY() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntH())
    );
    console.log("Collision: " + getCollisionCharacterStructure("Player"));

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
        arrayStructure
            .find((element) => element.name == "Framework")
            .getIntX() +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntW()
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
            .setX(
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntX()
            );
        arrayCharacter
            .find((element) => element.name == "Enemy")
            .setY(
                getRandomInt(
                    arrayStructure
                        .find((element) => element.name == "Framework")
                        .getIntY(),
                    arrayStructure
                        .find((element) => element.name == "Framework")
                        .getIntY() +
                        arrayStructure
                            .find((element) => element.name == "Framework")
                            .getIntH()
                )
            );
    }
}

// Collision Character Structure
function getCollisionCharacterStructure(nameCharacter) {
    // REVISAR XXX: Test nuevo sistema de colisiones
    console.log(
        arrayCharacter.find((element) => element.name == nameCharacter)
    );
    arrayStructure.forEach(function (elementStructure) {
        // REVISAR XXX: Test nuevo sistema de colisiones
        console.log(elementStructure);
        // REVISAR TODO: Realizar el sistema de colisiones considerando velocidad = 1
        // REVISAR TODO: Ampliar el sistema de colisiones considerando velocidades > 1
    });
    return false;
}

// Random int with min (included) and max (included)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
*/

// -----------------------------------------------------------------------------
// Var section
// -----------------------------------------------------------------------------

// The boolean `activateDebugger` indicates whether messages intended for debugging should be written to the console.
var activateDebugger = true;

// The two-dimensional array `arrayWorld` is a representation of the game world; All its elements will be displayed on the screen.
var arrayWorld = [];

// The numbers `resolution` indicate the scale that the game world will have.
var resolutionW = 320;
var resolutionH = 200;

// The object `space` is used to store the screen dimensions.
var space = new Space(window.innerWidth, window.innerHeight);

// -----------------------------------------------------------------------------
// Var function
// -----------------------------------------------------------------------------

// The `preload` function is used to load resources before the rest of the code runs.
// This function is automatically executed once before the `setup` function runs.
function preload() {
    // We initialize the two-dimensional array `arrayWorld` to contain the game world and represent it on the screen later.
    arrayWorld = new Array(resolutionW);
    for (var i = 0; i < arrayWorld.length; i++) {
        arrayWorld[i] = new Array(resolutionH);
    }

    // We initialize playerCharacter, which represents the player.
    let playerCharacter = new Character(
        "Player",
        "Human",
        "/img/Human.png",
        1,
        0,
        0,
        10,
        10
    );

    // We initialize a pair of temporary numeric variables `tempPosition`.
    // We will use the `randomNumber` function for this, which will receive 0 and the `resolution` numbers as parameters.
    let tempPositionX = randomNumber(0, resolutionW);
    let tempPositionY = randomNumber(0, resolutionH);

    // We will use the `consoleDebugger` function to display the values of the temporary numeric variables `tempPosition`.
    consoleDebugger(
        activateDebugger,
        "tempPositionX for Player: " + tempPositionX
    );
    consoleDebugger(
        activateDebugger,
        "tempPositionY for Player: " + tempPositionY
    );

    // We insert into the two-dimensional array `arrayWorld` the `playerCharacter`.
    // We will use the specified `tempPositionX` and `tempPositionY` positions.
    insertIntoTwoDimensionalArray(
        arrayWorld,
        playerCharacter,
        tempPositionX,
        tempPositionY
    );

    // We will use the `consoleDebugger` function to display the values of the two-dimensional array `arrayWorld`
    consoleDebugger(activateDebugger, arrayWorld);

    // We initialize `imgPlayerPath` with the path extracted from the `Player` object in the two-dimensional array `arrayWorld`.
    let imgPlayerPath = extractObjectParameterFromTwoDimensionalArray(
        "Player",
        "img",
        arrayWorld
    );

    // We will use the `consoleDebugger` function to display the values of the string `imgPlayerPath`.
    consoleDebugger(
        activateDebugger,
        "imgPlayerPath in Player: " + imgPlayerPath
    );

    // We load the `img`.
    let imgPlayer = loadImage(imgPlayerPath);
}

// Start canvas (autocall and manualcall)
function setup() {
    space.setW(window.innerWidth);
    space.setH(window.innerHeight);

    canvas = createCanvas(space.getW(), space.getH());
}

// Window onresize (autocall)
window.onresize = function () {
    setup();
};

// Main loop (autocall)
function draw() {
    background(0, 0, 0);

    // Framework
    noStroke();
    /*
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
    // REVISAR TODO: Aplicar el nuevo sistema de colisiones
    if (
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
        arrayCharacter.find((element) => element.name == "Player").getY() <
        mouse.getY()
    ) {
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

    // REVISAR XXX: Test nuevo sistema de colisiones
    console.log(
        "Player X: " +
            arrayCharacter.find((element) => element.name == "Player").getX()
    );
    console.log(
        "Player Y: " +
            arrayCharacter.find((element) => element.name == "Player").getY()
    );
    console.log(
        "Player X + W: " +
            (arrayCharacter.find((element) => element.name == "Player").getX() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getW())
    );
    console.log(
        "Player Y + H: " +
            (arrayCharacter.find((element) => element.name == "Player").getY() +
                arrayCharacter
                    .find((element) => element.name == "Player")
                    .getH())
    );
    console.log(
        "Framework ExtX: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getExtX()
    );
    console.log(
        "Framework ExtY: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getExtY()
    );
    console.log(
        "Framework ExtX + ExtW: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getExtX() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getExtW())
    );
    console.log(
        "Framework ExtY + ExtH: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getExtY() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getExtH())
    );
    console.log(
        "Framework IntX: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntX()
    );
    console.log(
        "Framework IntY: " +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntY()
    );
    console.log(
        "Framework IntX + IntW: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getIntX() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntW())
    );
    console.log(
        "Framework IntY + IntH: " +
            (arrayStructure
                .find((element) => element.name == "Framework")
                .getIntY() +
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntH())
    );
    console.log("Collision: " + getCollisionCharacterStructure("Player"));

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
        arrayStructure
            .find((element) => element.name == "Framework")
            .getIntX() +
            arrayStructure
                .find((element) => element.name == "Framework")
                .getIntW()
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
            .setX(
                arrayStructure
                    .find((element) => element.name == "Framework")
                    .getIntX()
            );
        arrayCharacter
            .find((element) => element.name == "Enemy")
            .setY(
                getRandomInt(
                    arrayStructure
                        .find((element) => element.name == "Framework")
                        .getIntY(),
                    arrayStructure
                        .find((element) => element.name == "Framework")
                        .getIntY() +
                        arrayStructure
                            .find((element) => element.name == "Framework")
                            .getIntH()
                )
            );
    }
    */
}

// The `randomNumber` function takes `minNumber` and `maxNumber` as parameters.
// It returns a random number between `minNumber` and `maxNumber` (both inclusive).
function randomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

// The `consoleDebugger` function takes `activateDebugger` and `stringDebugger` as parameters.
// If `activateDebugger` is true, it will write `stringDebugger` to the console.
function consoleDebugger(activateDebugger, stringDebugger) {
    if (activateDebugger) {
        console.log(stringDebugger);
    }
}

// The `insertIntoTwoDimensionalArray` function receives parameters `twoDimensionalArray`, `objectToInsert`, `positionX`, and `positionY`.
// It inserts the object into the two-dimensional array at the specified x and y positions.
function insertIntoTwoDimensionalArray(
    twoDimensionalArray,
    objectToInsert,
    positionX,
    positionY
) {
    twoDimensionalArray[positionX][positionY] = objectToInsert;
}

// The function `extractObjectParameterFromTwoDimensionalArray` receives parameters `objectNameToExtract`, `objectParameterToExtract` and `twoDimensionalArray`.
// This function extracts the value `parameterValue` of the parameter from the object (specified by name) in the two-dimensional array.
function extractObjectParameterFromTwoDimensionalArray(
    objectNameToExtract,
    objectParameterToExtract,
    twoDimensionalArray
) {
    let parameterValue = null;
    twoDimensionalArray.some((row, i) => {
        return row.some((element, j) => {
            if (element.name === objectNameToExtract) {
                switch (objectParameterToExtract) {
                    case "name":
                        parameterValue = element.getName();
                        break;
                    case "type":
                        parameterValue = element.getType();
                        break;
                    case "img":
                        parameterValue = element.getImg();
                        break;
                    case "speed":
                        parameterValue = element.getSpeed();
                        break;
                    case "x":
                        parameterValue = element.getX();
                        break;
                    case "y":
                        parameterValue = element.getY();
                        break;
                    case "w":
                        parameterValue = element.getW();
                        break;
                    case "h":
                        parameterValue = element.getH();
                        break;
                    default:
                        parameterValue = null;
                }
                return true;
            }
            return false;
        });
    });
    return parameterValue;
}
