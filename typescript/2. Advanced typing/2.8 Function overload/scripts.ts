/** Function overload **/
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any): any {
    return a + b;
}
// It`s working
add(1,3);
add('1','3');

type asyncCb = (res: number) => number;

function asyncSum(a:number, b:number): Promise<number>;
function asyncSum(a:number, b:number, cb: asyncCb): number;
function asyncSum(a:number, b:number, cb?: asyncCb): any {
    const result = a + b;
    if (cb){
        return cb(result)
    }

    return Promise.resolve(result)
}

asyncSum(1,2);

/* Homework */

// function head(value: string | number[] | boolean[]): string | number | boolean {
//     return value[0];
// }

function head(value: string) : string;
function head(value: number[]) : number;
function head(value: boolean[]) : boolean;
function head(value: any) : any{
    return value[0];
}

export {}