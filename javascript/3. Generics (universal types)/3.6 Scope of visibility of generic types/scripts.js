"use strict";
/** Scope of visibility of generic types **/
Object.defineProperty(exports, "__esModule", { value: true });
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
var toTupleWith = tuplePairCreator(1);
var v1 = toTupleWith('2');
var v2 = toTupleWith(2);
// Homework
function createMap(list) {
    return function (cb) {
        var result = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var el = list_1[_i];
            result.push(cb(el));
        }
        return result;
    };
}
var mapNums = createMap([1, 2, 3, 4, 5]);
var cbNums = mapNums(function (num) { return num + 1; });
var mapStrings = createMap(['1', '2', '3', '4', '5']);
var cbStrings = mapStrings(function (string) { return string + 'updated'; });
