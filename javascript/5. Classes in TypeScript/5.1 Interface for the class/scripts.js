"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.go = function (speed) {
        console.log("Go ".concat(speed.toFixed()));
    };
    Car.prototype.stop = function () {
        console.log('Stop');
    };
    return Car;
}());
var car = new Car();
car.go(1);
