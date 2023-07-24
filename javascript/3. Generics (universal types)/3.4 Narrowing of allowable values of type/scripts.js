"use strict";
/** Narrowing of allowable values of type **/
Object.defineProperty(exports, "__esModule", { value: true });
function prop(key, obj) {
    return obj[key];
}
var obj = { a: 1, b: 2, c: 3 };
prop('a', obj);
prop('b', obj);
//Homework
function keys(obj) {
    var currentKeys = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
function values(obj) {
    var currentValues = [];
    for (var key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
