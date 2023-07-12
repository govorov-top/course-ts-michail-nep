/** Conditional type **/
const x = 16;
const isXNegative = x >= 0 ? "no" : 'yes'

interface StringRecord {
    [key: string]: string
}
interface DateRecord {
    [key: string]: Date
}
type MyRecord<T> = T extends string ? StringRecord : DateRecord;
type Obj1 = MyRecord<string>
type Obj2 = MyRecord<number>
const o1:Obj1 = {
    v1:'1',
    v2:'2',
    v3:'3',
  //v4: 1
}
const o2:Obj2 = {
    newDate: new Date(),
}
export {}