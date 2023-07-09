/** Basic typing of functions **/

function sum(a: number, b: number): number {
    return a + b;
}
const sum2 = (a: number,b: number) => a + b;
const sum3 = function (a: number, b: number): number {
    return a + b;
};
sum(2.3, 8);
sum2(2.3, 8);
sum3(2.3, 8);

function log(name: string, userId?: number): void {
    console.log('Hello ' + name + ' with ID', userId || 'anonymous');
}
log('Roman');
log('Roman', 5);

function crash(): never {
    throw new Error('crash');
}

function average(...nums: number[]): number {
    const sum = nums.reduce((current: number, total: number) => current + total, 0);
    return sum / nums.length;
}
average(1, 2, 3, 45, 99);

// The task is to rewrite a function written in JS to TS
function slice(str:string, start:number, end?:number): string {
    let newStr: string = '';

    let lastIndex: number;

    if (end) {
        lastIndex = end > str.length ? str.length : end;
    } else {
        lastIndex = str.length;
    }

    for (let i:number = start; i < lastIndex; i++) {
        newStr += str[i];
    }

    return newStr;
}