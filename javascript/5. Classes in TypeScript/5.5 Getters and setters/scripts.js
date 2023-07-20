"use strict";
/** Getters and setters **/
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(25, 30);
rectangle.area;
class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
const car = new Car('red', 300);
console.log(car.color);
// console.log(car.maxSpeed);
car.maxSpeed = 5;
