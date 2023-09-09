class ArrayPath {
    constructor() {
        this.arrayPath = [];
    }

    getArrayPath() {
        return this.arrayPath;
    }

    setArrayPath(arrayPath) {
        this.arrayPath = arrayPath;
    }

    getValueArrayPath(key) {
        for (let i = 0; i < this.arrayPath.length; i++) {
            if (this.arrayPath[i].key === key) {
                return this.arrayPath[i].value;
            }
        }
        return null;
    }

    setKeyValueArrayPath(key, value) {
        this.arrayPath.push({ key, value });
    }

    removeKeyValueArrayPath(key) {
        for (let i = 0; i < this.arrayPath.length; i++) {
            if (this.arrayPath[i].key === key) {
                this.arrayPath.splice(i, 1);
                break;
            }
        }
    }
}
