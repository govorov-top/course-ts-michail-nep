"use strict";
/** Typing arrays **/
const strings1 = [1, 2, 3, 4, true, 'string'];
strings1.push(5);
strings1.push(false);
strings1.push('kek');
const strings2 = [];
strings2.push('str');
const strings3 = [];
strings3.push('str');
const cars = [];
cars.push({
    wheels: 1,
    brand: 'string',
    type: 'string',
});
const arrOfArr = [];
arrOfArr.push(['2']);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index);
    });
}
printArr(arrOfArr);