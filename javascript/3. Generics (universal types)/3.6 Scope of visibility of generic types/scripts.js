"use strict";
/** Scope of visibility of generic types **/
Object.defineProperty(exports, "__esModule", { value: true });
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith = tuplePairCreator(1);
const v1 = toTupleWith('2');
const v2 = toTupleWith(2);
// Homework
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3, 4, 5]);
const cbNums = mapNums(num => num + 1);
const mapStrings = createMap(['1', '2', '3', '4', '5']);
const cbStrings = mapStrings(string => string + 'updated');
