// -----------------------------------------------------------------------------
// Var section
// -----------------------------------------------------------------------------

// The boolean `activateDebugger` indicates whether messages intended for debugging should be written to the console.
var activateDebugger = true;

// The object `arrayWorld` is a representation of the game world; All its elements will be displayed on the screen.
var arrayWorld = [];

// The numbers `resolution` indicate the scale that the game world will have.
var resolutionW = 20;
var resolutionH = 20;

// The object `arrayPath` will contain an association to all the game resources.
var arrayPath;

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
    // We initialize the `arrayWorld` object.
    arrayWorld = new ArrayTwoDimensional(resolutionW, resolutionH);

    // We initialize the object `nothingCharacter`, which represents the nothing.
    let nothingCharacter = new Character("Nothing", "World", 0);

    // Fill the object `arrayWorld` with the object `nothingCharacter`
    arrayWorld.fillArrayTwoDimensionalWithObject(
        resolutionW,
        resolutionH,
        nothingCharacter
    );

    // We initialize the object `playerCharacter`, which represents the player.
    let playerCharacter = new Character("Player", "Human", 1);

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

    // We insert into the object `arrayWorld` the `playerCharacter`.
    // We will use the specified `tempPositionX` and `tempPositionY` positions.
    arrayWorld.insertObjectIntoArrayTwoDimensional(
        playerCharacter,
        tempPositionX,
        tempPositionY
    );

    // We will use the `consoleDebugger` function to display the values of the object `arrayWorld`
    consoleDebugger(activateDebugger, arrayWorld.getArrayTwoDimensional());

    // We initialize the `arrayPath` object.
    arrayPath = new ArrayKeyValue();

    // We save the image resource paths in the `arrayPath` object.
    arrayPath.setKeyValueArrayKeyValue("imgPlayerPath", PATH_IMG_PLAYER);

    // We retrieve the image resource paths from the `arrayPath` object.
    imgPlayerPath = arrayPath.getValueArrayKeyValue("imgPlayerPath");

    // We use `consoleDebugger` to display the image resource paths.
    consoleDebugger(activateDebugger, "imgPlayerPath: " + imgPlayerPath);

    // We load all the image resources.
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

    // Iterate through the object `arrayWorld`.
    arrayWorld.getArrayTwoDimensional().some((row, i) => {
        return row.some((element, j) => {
            // Enter the case of finding an element whose name matches with `Player`.
            if (element.getName() === "Player") {
                // Paint on the screen the representation of the current treated element.
                // The position of the image is calculated as the difference between the screen dimension and the resolution, multiplied by its position in the two-dimensional array `arrayWorld`.
                // The dimension of the image is calculated as the difference between the screen dimension and the resolution.
                image(
                    imgPlayer,
                    (space.getW() / resolutionW) * i,
                    (space.getH() / resolutionH) * j,
                    space.getW() / resolutionW,
                    space.getH() / resolutionH
                );
            } else {
                // Paint on the screen the representation of nothing.
                // The position of nothing is calculated as the difference between the screen dimension and the resolution, multiplied by its position in the two-dimensional array `arrayWorld`.
                // The dimension of nothing is calculated as the difference between the screen dimension and the resolution.
                fill(0, 0, 0);
                rect(
                    (space.getW() / resolutionW) * i,
                    (space.getH() / resolutionH) * j,
                    space.getW() / resolutionW,
                    space.getH() / resolutionH
                );
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
