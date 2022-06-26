// Class Framework
class Framework extends Square {
    constructor(efill, strw, str, ifill, x, y, w, h) {
        super(x, y, w, h);
        this.efill = efill;
        this.strw = strw;
        this.str = str;
        this.ifill = ifill;
        this.strwHalf = strw / 2;
        this.innerX = x + 10;
        this.innerY = y + 10;
        this.innerW = w - 20;
        this.innerH = h - 20;
    }

    getEfill() {
        return this.efill;
    }

    setEfill(efill) {
        this.efill = efill;
    }

    getStrw() {
        return this.strw;
    }

    setStrw(strw) {
        this.strw = strw;
    }

    getStr() {
        return this.str;
    }

    setStr(str) {
        this.str = str;
    }

    getIfill() {
        return this.ifill;
    }

    setIfill(ifill) {
        this.ifill = ifill;
    }

    getStrwHalf() {
        return this.strwHalf;
    }

    setStrwHalf(strwHalf) {
        this.strwHalf = strwHalf;
    }

    getInnerX() {
        return this.innerX;
    }

    setInnerX(innerX) {
        this.innerX = innerX;
    }

    getInnerY() {
        return this.innerY;
    }

    setInnerY(innerY) {
        this.innerY = innerY;
    }

    getInnerW() {
        return this.innerW;
    }

    setInnerW(innerW) {
        this.innerW = innerW;
    }

    getInnerH() {
        return this.innerH;
    }

    setInnerH(innerH) {
        this.innerH = innerH;
    }
}