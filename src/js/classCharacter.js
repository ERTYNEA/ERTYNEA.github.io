// Class Character
class Character extends Square {
    constructor(name, type, img, speed, x, y, w, h) {
        super(x, y, w, h);
        this.name = name;
        this.type = type;
        this.img = img;
        this.speed = speed;
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
