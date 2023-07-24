"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = 'str';
var x = typeof str;
var max = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
};
max(1, 2, 3, 4, 5, 6, 0, 555);
