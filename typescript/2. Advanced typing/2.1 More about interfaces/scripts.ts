/** More about interfaces **/
interface User {
    readonly email : string,
    login: string,
    password: string
}

/* a lot of code */

interface User {
    isOnline?: boolean
}
const user : User = {
    email: "",
    login: "",
    password: ""
}
/*interface Window {
    isAuth?: boolean
}
window.isAuth;*/

interface Person{
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}
const person : Person = {
    firstName: "",
    lastName: ""
}

interface Employee extends User, Person{
    contractStart: number
}
const employee : Employee = {
    email: 'dw@de.ru',
    contractStart: 0,
    firstName: "",
    lastName: "",
    login: "",
    password: "",
}
interface Developer extends Employee{
    skills: string[],
    phone: string,
    level?: 'junior' | 'meddle' | 'senior',
    say(arg: number): void,
    code?: (arg: string) => void
}
const developer : Developer = {
    contractStart: 0,
    email: "",
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    phone: "",
    skills: [],
    say(arg: number): void {}
}


/*class MyDeveloper implements Developer {
    contractStart: number;
    readonly email: string;
    readonly firstName: string;
    lastName: string;
    readonly login: string;
    password: string;
    phone: string;
    skills: string[];

    constructor() {
    }

    say(arg: number): void {
    }
}*/

export {}