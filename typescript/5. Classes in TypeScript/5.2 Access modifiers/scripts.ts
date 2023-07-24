/** Access modifiers **/

class Vehicle {
    public drive(speed:number):void {
        console.log(`Go with speed: ${speed.toFixed()}`);
        this.log(speed);
    }
    public stop() {
        console.log('Stop')
    }
    private log(speed:number):void {
        console.log(`Vehicle has changed speed to: ${speed}`)
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
    public changeSpeed(speed:number) {
        this.drive(speed);
        this.alternativeLog('Speed was changed');
    }
}

const car = new Car();
car.drive(1);
car.stop();
// car.log(1); can`t get because this method is private

export {}