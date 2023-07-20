"use strict";
/** Static properties and methods **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    get area() {
        return Circle.pi * this.radius * this.radius;
    }
}
Circle.pi = 3.14;
const circle = new Circle(22);
console.log(circle.radius);
console.log(circle.area);
// console.log(Circle.pi)
class Elipse extends Circle {
    constructor(radius) {
        super(radius);
        this.radius = radius;
    }
}
// Homework
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
exports.Temperature = Temperature;
