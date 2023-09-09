class ArrayTwoDimensional {
    constructor(w, h) {
        this.arrayTwoDimensional = new Array(w);
        for (let i = 0; i < this.arrayTwoDimensional.length; i++) {
            this.arrayTwoDimensional[i] = new Array(h);
        }
    }

    getArrayTwoDimensional() {
        return this.arrayTwoDimensional;
    }

    setArrayTwoDimensional(arrayTwoDimensional) {
        this.arrayTwoDimensional = arrayTwoDimensional;
    }

    fillArrayTwoDimensionalWithObject(arrayRows, arrayColumns, objectToInsert) {
        for (let i = 0; i < arrayRows; i++) {
            for (let j = 0; j < arrayColumns; j++) {
                this.arrayTwoDimensional[i][j] = objectToInsert;
            }
        }
    }

    insertObjectIntoArrayTwoDimensional(objectToInsert, positionX, positionY) {
        this.arrayTwoDimensional[positionX][positionY] = objectToInsert;
    }
}
