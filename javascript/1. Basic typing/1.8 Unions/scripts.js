"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newStatus = 'loading';
var newStatusArr = ['loading'];
function printID(id) {
    // This will not work without the condition:
    // console.log(id.toUpperCase());
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printID('мой id 5');
printID(5);
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
    }
    else {
        console.log('Hello', person);
    }
}
welcome(['Roman', 'Govorov']);
welcome('Roman Govorov');
var dev = {
    login: 'login',
    skills: ['1', '2'],
    level: 'junior',
};
// create a function that change level of incoming developer
function gradeDeveloper(developer, newLevel) {
    return developer.level = newLevel;
}
gradeDeveloper(dev, 'senior');
