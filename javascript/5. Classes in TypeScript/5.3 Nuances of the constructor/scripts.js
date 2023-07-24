"use strict";
/** Nuances of the constructor **/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Vehicle = /** @class */ (function () {
    function Vehicle(createdAt) {
        this.createdAt = createdAt;
    }
    Vehicle.prototype.drive = function (speed) {
        console.log("Go with speed: ".concat(speed.toFixed()));
        this.log(speed);
    };
    Vehicle.prototype.stop = function () {
        console.log('Stop');
    };
    Vehicle.prototype.log = function (speed) {
        console.log("Vehicle has changed speed to: ".concat(speed, " at ").concat(this.createdAt));
    };
    // JS
    /*#someAction(){
        console.log('Action')
    }*/
    Vehicle.prototype.alternativeLog = function (text) {
        console.log(text.toLowerCase());
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    tslib_1.__extends(Car, _super);
    //public color: string;
    //public maxSpeed: number;
    function Car(color, maxSpeed) {
        var _this = _super.call(this, new Date()) || this;
        _this.color = color;
        _this.maxSpeed = maxSpeed;
        return _this;
        //this.color = color;
        //this.maxSpeed = maxSpeed;
    }
    Car.prototype.getInfo = function () {
        console.log(this.color, this.maxSpeed, this.createdAt);
    };
    return Car;
}(Vehicle));
var car = new Car('red', 200);
car.drive(1);
car.stop();
console.log(car.color);
// car.log(1); can`t get because this method is private
// car.createdAt can`t get because this method is private
// Homework
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.log = function () {
        console.log("new Rectangle was create at ".concat(new Date()));
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    tslib_1.__extends(Square, _super);
    function Square(width, color) {
        var _this = _super.call(this, width, width) || this;
        _this.width = width;
        _this.color = color;
        return _this;
    }
    Square.prototype.paint = function (newColor) {
        this.color = newColor;
    };
    return Square;
}(Rectangle));
