/** Operator extends **/

// Example 1
function fromPair(pair: [string, string]) {
    const [key,value] = pair;
    return{
        [key]: value
    }
}
type FirstArg<T> = T extends  (first: infer First, ...args: any[]) => any ? First : never;
const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue'];
fromPair(myPair);

// Example 2
type ConstructorFirstArg<T> = T extends {new(arg: infer A, ...args: any[]): any} ? A : never;
class Computer {
    constructor(brand: string) {}
}
let brand: ConstructorFirstArg<typeof Computer> = '';

// Example 3
let dateArg:ConstructorFirstArg<typeof Date>;

export {}