/** Basic examples **/

type TypeFactory<T> = T;
type XType = TypeFactory<string>

function toArray<T>(...arg: T[]): T[]{
    return arg;
}
toArray<number>(1,2.3,5);
toArray<string>('1,2.3,5', 'adwad', 'r[lpkpw');


const headArrowFunction = <T>(value: T[]): T => value[0]
function head (value: []) : undefined;
function head<T>(value: T) : T;
function head<T>(value:readonly T[]) : T;
function head(value: any) : any{
    return value[0];
}
head(['123','234']);
headArrowFunction(['1','2', 3])
interface ModelDate<T> {
    title: string,
    value: T, // number[], boolean and another
}
const obj: ModelDate<string> = {
    title: 'string',
    value: 'T',
}
const obj2: ModelDate<Array<number>> = {
    title: 'string',
    value: [1,2,3,4,5,6],
};


// Homework
function append<T>(el: T, list:T[]): T[]{
    return list.concat(el)
}
append(1,[123,456,789])
append('1',['123','456','789'])


export {}