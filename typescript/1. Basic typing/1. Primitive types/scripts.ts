/** Primitive types **/

/* Numbers */
let num: number = 10;
let num2: number = 7.43;
let num3: number = NaN;

/* String */
let str: string = 'String';
// Or
let str2: string;
str2 = 'String 2';

/* Symbol */
let symbol: symbol = Symbol('as');

/* Boolean */
let boolean: boolean = true;
boolean = false;

/* Nothing */
let nothing: undefined = undefined;
let nothing2: null = null;

/* Literal */
const literal = 108;
const literal2 = 'String';
const literal3 = {a:2,b:3};

/* Universal types */
// any
let any: any;
any = 1;
any = 'string';
any = {};
any = [];
any = true;

// unknown
let unknown: unknown = 2;
if (typeof unknown === "string") unknown.toUpperCase();

export {};