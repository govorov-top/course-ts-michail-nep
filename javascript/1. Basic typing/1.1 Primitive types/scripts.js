"use strict";
/** Primitive types **/
Object.defineProperty(exports, "__esModule", { value: true });
/* Numbers */
var num = 10;
var num2 = 7.43;
var num3 = NaN;
/* String */
var str = 'String';
// Or
var str2;
str2 = 'String 2';
/* Symbol */
var symbol = Symbol('as');
/* Boolean */
var boolean = true;
boolean = false;
/* Date */
var now = new Date();
/* Nothing */
var nothing = undefined;
var nothing2 = null;
/* Literal */
var literal = 108;
var literal2 = 'String';
var literal3 = { a: 2, b: 3 };
/* Universal types */
// any
var any;
any = 1;
any = 'string';
any = {};
any = [];
any = true;
// unknown
var unknown = 2;
if (typeof unknown === "string")
    unknown.toUpperCase();
