"use strict";
/** Access modifiers **/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function (speed) {
        console.log("Go with speed: ".concat(speed.toFixed()));
        this.log(speed);
    };
    Vehicle.prototype.stop = function () {
        console.log('Stop');
    };
    Vehicle.prototype.log = function (speed) {
        console.log("Vehicle has changed speed to: ".concat(speed));
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
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.changeSpeed = function (speed) {
        this.drive(speed);
        this.alternativeLog('Speed was changed');
    };
    return Car;
}(Vehicle));
var car = new Car();
car.drive(1);
car.stop();
