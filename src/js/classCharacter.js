// Class Character
class Character {
    constructor(name, type, img, speed) {
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
