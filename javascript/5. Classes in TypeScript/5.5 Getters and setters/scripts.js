"use strict";
/** Getters and setters **/
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.height * this.width;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rectangle = new Rectangle(25, 30);
rectangle.area;
var Car = /** @class */ (function () {
    function Car(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    Object.defineProperty(Car.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        set: function (speed) {
            if (speed > 0)
                this._maxSpeed = speed;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car = new Car('red', 300);
console.log(car.color);
// console.log(car.maxSpeed);
car.maxSpeed = 5;
