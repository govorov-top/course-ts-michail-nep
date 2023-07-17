"use strict";
/** Operator extends **/
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1
function fromPair(pair) {
    const [key, value] = pair;
    return {
        [key]: value
    };
}
const myPair = ['myKey', 'myValue'];
fromPair(myPair);
class Computer {
    constructor(brand) { }
}
let brand = '';
// Example 3
let dateArg;
