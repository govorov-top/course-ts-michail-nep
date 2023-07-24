"use strict";
/** Static properties and methods **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
var tslib_1 = require("tslib");
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return Circle.pi * this.radius * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    Circle.pi = 3.14;
    return Circle;
}());
var circle = new Circle(22);
console.log(circle.radius);
console.log(circle.area);
// console.log(Circle.pi)
var Elipse = /** @class */ (function (_super) {
    tslib_1.__extends(Elipse, _super);
    function Elipse(radius) {
        var _this = _super.call(this, radius) || this;
        _this.radius = radius;
        return _this;
    }
    return Elipse;
}(Circle));
// Homework
var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this.celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this.celsius * 1.8 + 32;
        },
        set: function (value) {
            this.celsius = (value - 32) / 1.8;
        },
        enumerable: false,
        configurable: true
    });
    Temperature.fromFahrenheit = function (value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    };
    return Temperature;
}());
exports.Temperature = Temperature;
