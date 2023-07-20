/** Getters and setters **/

class Rectangle {
    constructor(public width : number, public height : number) {}
    public get area():number {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(25,30);
rectangle.area;

class Car {
    constructor(public color: string, private _maxSpeed : number) {}
    public get maxSpeed():number {
        return this._maxSpeed;
    }
    public set maxSpeed(speed: number) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
const car = new Car('red',300);
console.log(car.color);
// console.log(car.maxSpeed);

car.maxSpeed = 5;

export {}