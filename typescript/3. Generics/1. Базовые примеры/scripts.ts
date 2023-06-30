/** Базовые примеры **/

type TypeFactory<T> = T;
type XType1 = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

function toArray<T>(...arg: T[]):T[] {
    return arg
}

toArray(1,2,3,4,5,6)
toArray('Привет!', 'Как дела?');

function head<T>(value:T):T;
function head(value:any): any {
    return value[0];
}
head(1);
head('1');


interface ModelDAte<T> {
    title: string,
    value: T, // number [] boolean
}

const obj: ModelDAte<number> = {
    title: 'adad',
    value: 12,
}

const obj2: ModelDAte<boolean> = {
    title: 'adad',
    value: true,
}


/* Homework */
function append<T>(el:T, list:T[]):T[] {
    return list.concat(el);
}

export {}