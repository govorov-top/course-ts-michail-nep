"use strict";
/** Access modifiers **/
var _Vehicle_instances, _Vehicle_someAction;
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor() {
        _Vehicle_instances.add(this);
    }
    drive(speed) {
        console.log(`Go with speed: ${speed.toFixed()}`);
        this.log(speed);
    }
    stop() {
        console.log('Stop');
    }
    log(speed) {
        console.log(`Vehicle has changed speed to: ${speed}`);
    }
    alternativeLog(text) {
        console.log(text.toLowerCase());
    }
}
_Vehicle_instances = new WeakSet(), _Vehicle_someAction = function _Vehicle_someAction() {
    console.log('Action');
};
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog('Speed was changed');
    }
}
const car = new Car();
car.drive(1);
car.stop();
