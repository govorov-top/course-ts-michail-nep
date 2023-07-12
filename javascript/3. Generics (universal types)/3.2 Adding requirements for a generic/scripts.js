"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Adding requirements for a generic **/
function len(arg) {
    return arg.length;
}
len('234');
len([1, 2, 3, 4, 5, 6]);
len({ length: 12 });
len({ a: 1, length: 78 });
