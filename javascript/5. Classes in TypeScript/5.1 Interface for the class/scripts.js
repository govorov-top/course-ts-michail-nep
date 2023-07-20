"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    go(speed) {
        console.log(`Go ${speed.toFixed()}`);
    }
    stop() {
        console.log('Stop');
    }
}
const car = new Car();
car.go(1);
