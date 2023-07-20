/** Abstract classes **/

abstract class Vehicle {
    abstract color: string;
    abstract drive(speed:number):void;
    public stop() {
        console.log('Stop')
    }
}
class Car extends Vehicle {
    constructor(public color: string) {
        super();
    }
    public drive(speed:number):void {
        console.log(`Go with speed: ${speed.toFixed()}`);
    }
}

const car = new Car('red');
car.drive(1);
car.stop();

export {}