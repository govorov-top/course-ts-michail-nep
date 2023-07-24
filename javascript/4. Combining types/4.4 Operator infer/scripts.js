"use strict";
/** Operator extends **/
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1
function fromPair(pair) {
    var _a;
    var key = pair[0], value = pair[1];
    return _a = {},
        _a[key] = value,
        _a;
}
var myPair = ['myKey', 'myValue'];
fromPair(myPair);
var Computer = /** @class */ (function () {
    function Computer(brand) {
    }
    return Computer;
}());
var brand = '';
// Example 3
var dateArg;
