/** Static properties and methods **/

class Circle {
    protected static pi : number = 3.14;
    constructor(public radius: number) {}
    private static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
    get area():number {
        return Circle.pi * this.radius * this.radius;
    }
}
const circle = new Circle(22);
console.log(circle.radius);
console.log(circle.area);
// console.log(Circle.pi)

class Elipse extends Circle{
    constructor(public radius: number) {
        super(radius);
    }
}

// Homework
export class Temperature {
    constructor(protected celsius: number) {}

    get fahrenheit():number {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value: number) {
        this.celsius = (value - 32) / 1.8;
    }

    public static fromFahrenheit(value: number):Temperature {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
export {}
