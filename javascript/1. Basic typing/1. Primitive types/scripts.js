"use strict";
/** Primitive types **/
Object.defineProperty(exports, "__esModule", { value: true });
/* Numbers */
let num = 10;
let num2 = 7.43;
let num3 = NaN;
/* String */
let str = 'String';
// Or
let str2;
str2 = 'String 2';
/* Symbol */
let symbol = Symbol('as');
/* Boolean */
let boolean = true;
boolean = false;
/* Nothing */
let nothing = undefined;
let nothing2 = null;
/* Literal */
const literal = 108;
const literal2 = 'String';
const literal3 = { a: 2, b: 3 };
/* Universal types */
// any
let any;
any = 1;
any = 'string';
any = {};
any = [];
any = true;
// unknown
let unknown = 2;
if (typeof unknown === "string")
    unknown.toUpperCase();
