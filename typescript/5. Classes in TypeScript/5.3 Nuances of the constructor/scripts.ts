/** Nuances of the constructor **/

class Vehicle {
    constructor(protected createdAt: Date) {
    }
    public drive(speed:number):void {
        console.log(`Go with speed: ${speed.toFixed()}`);
        this.log(speed);
    }
    public stop() {
        console.log('Stop')
    }
    private log(speed:number):void {
        console.log(`Vehicle has changed speed to: ${speed} at ${this.createdAt}`)
    }

    // JS
    /*#someAction(){
        console.log('Action')
    }*/
    protected alternativeLog(text:string){
        console.log(text.toLowerCase())
    }
}
class Car extends Vehicle {
   //public color: string;
   //public maxSpeed: number;

   constructor(public readonly color:string,public maxSpeed:number) {
       super(new Date());
       //this.color = color;
       //this.maxSpeed = maxSpeed;
   }
   getInfo(){
       console.log(
           this.color,
           this.maxSpeed,
           this.createdAt
       )
   }
}

const car = new Car('red',200);
car.drive(1);
car.stop();
console.log(car.color)
// car.log(1); can`t get because this method is private
// car.createdAt can`t get because this method is private

// Homework
class Rectangle {
    constructor(public width : number, public height : number) {
        this.log();
    }
    public area():number {
        return this.height * this.width;
    }
    private log():void {
        console.log(`new Rectangle was create at ${new Date()}`)
    }
}

class Square extends Rectangle {
    constructor(public width : number, public color : string) {
        super(width, width);
    }

    public paint(newColor:string):void {
        this.color = newColor;
    }
}
export {}