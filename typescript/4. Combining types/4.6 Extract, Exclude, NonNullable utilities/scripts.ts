/** Extract, Exclude, NonNullable utilities **/

// Extract
type A0 = Extract<"a" | "b" | "c", "a">
type A1 = Extract<"a" | "b" | "c", "a" | "b">
type A2 = Extract<string|number|(()=>void), Function>
type AStatus = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type ANumericStatus = Extract<AStatus, number>
type ATextStatus = Extract<AStatus, string>
interface Person {
    age: number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    education: string,
    skills: string[]
}
type PersonName = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>
const person: PersonName = "firstName";

// Exclude
type B0 = Exclude<"a" | "b" | "c", "a">
type B1 = Exclude<"a" | "b" | "c", "a" | "b">
type B2 = Exclude<string|number|(()=>void), Function>
type BStatus = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type BNumericStatus = Exclude<BStatus, string>
type BTextStatus = Exclude<BStatus, number>

// NonNullable
type C0 = NonNullable<string | number | undefined>
type C1 = NonNullable<string[] | number | undefined>

export {}