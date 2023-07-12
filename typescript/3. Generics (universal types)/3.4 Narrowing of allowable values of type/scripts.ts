/** Narrowing of allowable values of type **/

function prop<O,K extends keyof O>(key: K, obj: O):O[K] {
    return obj[key]
}

const obj = {a:1,b:2,c:3};
prop('a', obj);
prop('b', obj);
//prop('d', obj);

interface Laptop {
    brand: string,
    year: number
}
type B = Laptop['brand']
type Y = Laptop['year']

//Homework
function keys<O extends object>(obj: O): Array<keyof O> {
    const currentKeys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
}


function values<O extends object>(obj: O): Array<O[keyof O]> {
    const currentValues = [];

    for (let key in obj) {
        currentValues.push(obj[key]);
    }

    return currentValues;
}

export {}