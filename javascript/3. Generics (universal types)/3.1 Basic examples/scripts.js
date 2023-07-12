"use strict";
/** Basic examples **/
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(...arg) {
    return arg;
}
toArray(1, 2.3, 5);
toArray('1,2.3,5', 'adwad', 'r[lpkpw');
const headArrowFunction = (value) => value[0];
function head(value) {
    return value[0];
}
head(['123', '234']);
headArrowFunction(['1', '2', 3]);
const obj = {
    title: 'string',
    value: 'T',
};
const obj2 = {
    title: 'string',
    value: [1, 2, 3, 4, 5, 6],
};
// Homework
function append(el, list) {
    return list.concat(el);
}
append(1, [123, 456, 789]);
append('1', ['123', '456', '789']);
