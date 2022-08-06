// Class Structure
class Structure extends HiperSquare {
    constructor(
        name,
        type,
        extColorR,
        extColorG,
        extColorB,
        extX,
        extY,
        extW,
        extH,
        intColorR,
        intColorG,
        intColorB,
        intX,
        intY,
        intW,
        intH
    ) {
        super(
            extColorR,
            extColorG,
            extColorB,
            extX,
            extY,
            extW,
            extH,
            intColorR,
            intColorG,
            intColorB,
            intX,
            intY,
            intW,
            intH
        );
        this.name = name;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }
}
