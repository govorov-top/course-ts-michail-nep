"use strict";
/** Базовые примеры **/
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3, 4, 5, 6);
toArray('Привет!', 'Как дела?');
function head(value) {
    return value[0];
}
head(1);
head('1');
const obj = {
    title: 'adad',
    value: 12,
};
const obj2 = {
    title: 'adad',
    value: true,
};
/* Homework */
function append(el, list) {
    return list.concat(el);
}
