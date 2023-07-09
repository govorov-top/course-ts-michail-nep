/** Read more about aliases **/

type Union1 = 'a' | 'b' | 'c';
type Union2 = 'd' | 'e' | 'f';
type Union3 = Union1 | Union2; // "a" | "b" | "c" | "d" | "e" | "f"
type Union4 = Union1 & Union2; // ("a" & "a") | ("c" & "c")

type User = {
    readonly email : string,
    login: string,
    password: string
}

type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

type Employee = {
    contractStart: number
} & User & Person;

type Developer = {
    skills: string[],
    phone: string,
    level?: 'junior' | 'meddle' | 'senior',
    say(arg: number): void,
    code?: (arg: string) => void
} & Employee;

const user1: Developer = {
    say(arg: number): void {},
    phone: "",
    skills: [],
    contractStart: 28,
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    email: 'w'
}

export {}