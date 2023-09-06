// -----------------------------------------------------------------------------
// Var section
// -----------------------------------------------------------------------------

// The boolean `activateDebugger` indicates whether messages intended for debugging should be written to the console.
var activateDebugger = true;

// The two-dimensional array `arrayWorld` is a representation of the game world; All its elements will be displayed on the screen.
var arrayWorld = [];

// The numbers `resolution` indicate the scale that the game world will have.
var resolutionW = 80;
var resolutionH = 50;

// The `Img` objects are where we will store the images
var imgPlayer;

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
    for (let i = 0; i < arrayWorld.length; i++) {
        arrayWorld[i] = new Array(resolutionH);
    }

    // We initialize `nothingCharacter`, which represents the nothing.
    let nothingCharacter = new Character("Nothing", "World", "", 0);

    // We fill the two-dimensional array `arrayWorld` so that it contains `nothingCharacter` in all its cells by default.
    for (let i = 0; i < resolutionW; i++) {
        for (let j = 0; j < resolutionH; j++) {
            // We insert into the two-dimensional array `arrayWorld` the `nothingCharacter`.
            // We will use the specified positions.
            insertIntoTwoDimensionalArray(arrayWorld, nothingCharacter, i, j);
        }
    }

    // We initialize `playerCharacter`, which represents the player.
    let playerCharacter = new Character("Player", "Human", "/img/Human.png", 1);

    // We initialize a pair of temporary numeric variables `tempPosition`.
    // We will use the `randomNumber` function for this, which will receive 0 and the `resolution` (- 1) numbers as parameters.
    let tempPositionX = randomNumber(0, resolutionW - 1);
    let tempPositionY = randomNumber(0, resolutionH - 1);

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
    imgPlayer = loadImage(imgPlayerPath);
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

    // Iterate through the two-dimensional array `arrayWorld`.
    arrayWorld.some((row, i) => {
        return row.some((element, j) => {
            // Enter the case of finding an element whose name matches with `Player`.
            if (element.getName() === "Player") {
                // Position the image on the screen according to the two-dimensional array `arrayWorld`.
                image(imgPlayer, i * 10, j * 10, 10, 10);
            } else {
                // Fill the rest of the screen with the representation of nothing.
                fill(0, 0, 255);
                rect(i * 10, j * 10, 10, 10);
            }
        });
    });
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
