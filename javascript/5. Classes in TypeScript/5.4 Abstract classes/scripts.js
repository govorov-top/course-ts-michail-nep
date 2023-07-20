"use strict";
/** Abstract classes **/
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    stop() {
        console.log('Stop');
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(`Go with speed: ${speed.toFixed()}`);
    }
}
const car = new Car('red');
car.drive(1);
car.stop();
