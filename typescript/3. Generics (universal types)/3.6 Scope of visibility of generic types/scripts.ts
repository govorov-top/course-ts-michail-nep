/** Scope of visibility of generic types **/

function tuplePairCreator<T>(first: T) {
    return function <U>(second: U): [T,U] {
        return [first, second]
    }
}

const toTupleWith = tuplePairCreator(1);
const v1 = toTupleWith('2')
const v2 = toTupleWith(2)

// Homework
function createMap<T>(list: T[]): <U>(cb: (x: T) => U) => U[] {
    return function<U>(cb: (x:T)=> U): U[] {
        const result = [];
        for (let el of list) {
            result.push(cb(el))
        }

        return result;
    }
}
const mapNums = createMap([1,2,3,4,5]);
const cbNums = mapNums(num => num + 1);
const mapStrings = createMap(['1','2','3','4','5']);
const cbStrings = mapStrings(string => string + 'updated');

export {}