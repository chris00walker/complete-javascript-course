/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = 'Jonas'
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1992;


var job = 'programmer';
job = 'teacher';
*/

/*
// Math Operators
const now = 2037;
const ageSarah = now - 2018;
const ageJonas = now - 1991;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 is two to the power of three

const firstName = 'Jonas'
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; // 15 
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
const firstName = 'Chris';
const job = 'Entrepreneur';
const birthYear = 1970;
const year = 2023

const chris = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(chris);

const chrisNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(chrisNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple\n\
lines');
console.log(`String with
multiple
lines`);
*/

const age = 19;

if (age >= 18) {
    console.log('Sarah can apply for her drivers license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);