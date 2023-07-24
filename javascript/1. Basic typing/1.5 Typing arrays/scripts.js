"use strict";
/** Typing arrays **/
var strings1 = [1, 2, 3, 4, true, 'string'];
strings1.push(5);
strings1.push(false);
strings1.push('kek');
var strings2 = [];
strings2.push('str');
var strings3 = [];
strings3.push('str');
var cars = [];
cars.push({
    wheels: 1,
    brand: 'string',
    type: 'string',
});
var arrOfArr = [];
arrOfArr.push(['2']);
function printArr(arr) {
    arr.forEach(function (el, index, array) {
        console.log(el, index);
    });
}
printArr(arrOfArr);
