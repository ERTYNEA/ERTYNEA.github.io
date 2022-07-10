// Class Character
class Character extends Square {
    constructor(img, vel, x, y, w, h) {
        super(x, y, w, h);
        this.img = img;
        this.vel = vel;
    }

    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }

    getVel() {
        return this.vel;
    }

    setVel(vel) {
        this.vel = vel;
    }
}