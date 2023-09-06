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

// The object `space` is used to store the window dimensions.
var space = new Space(window.innerWidth, window.innerHeight);

// The `canvas` object is used to store the game screen.
var canvas;

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

// The `setup` function runs once at the beginning of the game.
// It is used to perform the initial setup of the canvas and other elements.
function setup() {
    // We store the window dimensions in the `space` object.
    space.setW(window.innerWidth);
    space.setH(window.innerHeight);

    // We initialize `canvas` to contain the game screen.
    canvas = createCanvas(space.getW(), space.getH());
}

// In case the window is resized, we call the `setup` function.
window.onresize = function () {
    setup();
};

// The `draw` function is automatically executed in a continuous loop.
// It is used to execute all drawing and element update instructions.
function draw() {
    // We use the `background` function call to set the background color of the game canvas.
    // The parameters used are the red, green, and blue (RGB) values that represent the background color.
    background(0, 0, 0);

    // We use the `noStroke` function call to disable outline strokes when drawing shapes on the game canvas.
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
    // Initialize the temporary variable `parameterValue` to null.
    // This is where we will temporarily store the value of the parameter (what we want to extract).
    let parameterValue = null;

    // Iterate through the two-dimensional array (rows and columns).
    twoDimensionalArray.some((row) => {
        return row.some((element) => {
            // Enter the case of finding an element whose name matches the searched object's name.
            if (element.getName() === objectNameToExtract) {
                // Store the value of the parameter from the element in the temporary variable `parameterValue`.
                parameterValue = element[objectParameterToExtract];
                // End the current iteration.
                return true;
            }

            // If nothing is found, end the current iteration.
            return false;
        });
    });

    // Return the value stored in the temporary variable `parameterValue`.
    return parameterValue;
}
