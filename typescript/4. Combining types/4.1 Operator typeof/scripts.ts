/** Operator typeof **/
import {average} from "../../1. Basic typing/1.2 Basic typing of functions/scripts";

let str = 'str'
let x = typeof str;

type fn = typeof average
const max: fn = (...numbers) => Math.max(...numbers);
max(1,2,3,4,5,6,0,555);

type returnFn = ReturnType<typeof average>

export {}