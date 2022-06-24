// Class Character
class Character extends Square {
    constructor(img, x, y, w, h) {
        super(x, y, w, h);
        this.img = img;
    }

    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }
}