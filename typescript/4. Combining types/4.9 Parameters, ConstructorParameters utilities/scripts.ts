/** Parameters, ConstructorParameters utilities **/

function f1(arg: {a:number, b: string}) {
    return arg.a + arg.b;
}
type T0 = ReturnType<typeof f1>

// Parameters
type T1 = Parameters<typeof f1>

// ConstructorParameters
class Car {
    constructor(id: number, brand: string, model: string) {
    }
}
type T2 = ConstructorParameters<typeof Car>;

export {}