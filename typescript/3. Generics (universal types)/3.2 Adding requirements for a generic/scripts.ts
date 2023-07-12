/** Adding requirements for a generic **/
function len<T extends {length: number}>(arg:T): number {
    return arg.length
}
len('234');
len([1,2,3,4,5,6]);
len({length: 12});
len({a: 1, length: 78})
// len(112343);
// len(true);
//len({a: 1})

export {}