/** Keyof operator **/
type WindowProp = keyof Window;
const myValue: WindowProp = 'ontouchend'
interface PC {
    brand: string,
    year: number
}

type Type = keyof PC; // brand | year
const value : Type = 'brand';

type Tuple = keyof [string, number];
const value2: Tuple = 0;

export {}