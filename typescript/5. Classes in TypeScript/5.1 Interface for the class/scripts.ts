/** Interface for the class **/
interface ICar {
    go(speed:number):void,
    maxSpeed?: number
}
class Car implements ICar{
    go(speed:number) {
        console.log(`Go ${speed.toFixed()}`)
    }
    stop(){
        console.log('Stop')
    }
}

const car: Car = new Car();
car.go(1);
//car.maxSpeed = 380;

export {}