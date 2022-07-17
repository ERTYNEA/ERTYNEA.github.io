// Class Character
class Character extends Square {
    constructor(img, speed, x, y, w, h) {
        super(x, y, w, h);
        this.img = img;
        this.speed = speed;
    }

    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}
