class ArrayKeyValue {
    constructor() {
        this.arrayKeyValue = [];
    }

    getArrayKeyValue() {
        return this.arrayKeyValue;
    }

    setArrayKeyValue(arrayKeyValue) {
        this.arrayKeyValue = arrayKeyValue;
    }

    getValueArrayKeyValue(key) {
        for (let i = 0; i < this.arrayKeyValue.length; i++) {
            if (this.arrayKeyValue[i].key === key) {
                return this.arrayKeyValue[i].value;
            }
        }
        return null;
    }

    setKeyValueArrayKeyValue(key, value) {
        this.arrayKeyValue.push({ key, value });
    }

    removeKeyValueArrayKeyValue(key) {
        for (let i = 0; i < this.arrayKeyValue.length; i++) {
            if (this.arrayKeyValue[i].key === key) {
                this.arrayKeyValue.splice(i, 1);
                break;
            }
        }
    }
}
