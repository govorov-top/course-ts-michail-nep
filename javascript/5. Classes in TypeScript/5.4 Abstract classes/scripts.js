"use strict";
/** Abstract classes **/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.stop = function () {
        console.log('Stop');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    tslib_1.__extends(Car, _super);
    function Car(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    Car.prototype.drive = function (speed) {
        console.log("Go with speed: ".concat(speed.toFixed()));
    };
    return Car;
}(Vehicle));
var car = new Car('red');
car.drive(1);
car.stop();
