"use strict";
/** Narrowing of allowable values of type **/
Object.defineProperty(exports, "__esModule", { value: true });
function prop(key, obj) {
    return obj[key];
}
const obj = { a: 1, b: 2, c: 3 };
prop('a', obj);
prop('b', obj);
//Homework
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
