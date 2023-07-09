/** Typing arrays **/
const strings1:Array<any> = [1,2,3,4, true, 'string'];
strings1.push(5);
strings1.push(false);
strings1.push('kek');

const strings2:string[] = [];
strings2.push('str');

const strings3:Array<string> = [];
strings3.push('str');

interface Car {
    wheels: number,
    brand: string,
    type: string,
}
const cars: Car[] = [];
cars.push({
    wheels: 1,
    brand: 'string',
    type: 'string',
})

const arrOfArr:Array<string>[] = [];
arrOfArr.push(['2']);

function printArr(arr:unknown[]):void {
    arr.forEach((el,index,array) => {
        console.log(el,index);
    });
}
printArr(arrOfArr);