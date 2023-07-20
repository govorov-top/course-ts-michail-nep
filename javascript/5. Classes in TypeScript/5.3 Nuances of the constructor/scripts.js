"use strict";
/** Nuances of the constructor **/
var _Vehicle_instances, _Vehicle_someAction;
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(createdAt) {
        _Vehicle_instances.add(this);
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log(`Go with speed: ${speed.toFixed()}`);
        this.log(speed);
    }
    stop() {
        console.log('Stop');
    }
    log(speed) {
        console.log(`Vehicle has changed speed to: ${speed} at ${this.createdAt}`);
    }
    alternativeLog(text) {
        console.log(text.toLowerCase());
    }
}
_Vehicle_instances = new WeakSet(), _Vehicle_someAction = function _Vehicle_someAction() {
    console.log('Action');
};
class Car extends Vehicle {
    //public color: string;
    //public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        //this.color = color;
        //this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed, this.createdAt);
    }
}
const car = new Car('red', 200);
car.drive(1);
car.stop();
console.log(car.color);
// car.log(1); can`t get because this method is private
// car.createdAt can`t get because this method is private
// Homework
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was create at ${new Date()}`);
    }
}
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
