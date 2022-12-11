// 📌 Switch Case
let day;
console.log(day)
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log("Today is ", day);

// 📌 Rest Parameters

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5)); // There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted, so the result in the code above is 3.

// with Rest:
function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName);
    console.log(titles)
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator", "Test");
// ⚠️ The rest parameters must be at the end


// 📌 Spread Parameters
const myName = ["Sofela", "is", "my"];
const aboutMe = [...myName, "TEST", "name."];
console.log(aboutMe);

// 💡 The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

// 📌 Loops
/**
 * for - loops through a block of code a number of times
 * for/in - loops through the properties of an object
 * for/of - loops through the values of an iterable object
 * while - loops through a block of code while a specified condition is true
 * do/while - also loops through a block of code while a specified condition is true
 */
// 💡 for loop
for (let i = 0; i < 5; i++) {
    // if (i === 3) continue;
    console.log('The number is ', i);
}

// 💡 for/in loop
let student = {
    name: 'Monica',
    class: 7,
    age: 12
}

for (let key in student) {
    console.log(key + "=>" + student[key]);
}

let id = Symbol("id");

student = {
    ...student,
    [id]: 20,
};

console.log(student[id])

// using for...in
for (let key in student) {
    console.log(key);
}

// 💡 for/of loop
const students = ['John', 'Sara', 'Jack'];

for (let name of students) {
    console.log(name);
}

// 💡 while loop
let i = 1, n = 5;
while (i <= n) {
    console.log(i);
    i += 1;
}

// 💡do while loop
let j = 1;
const m = 5;
do {
    console.log(j);
    j++;
} while (j <= m);

// 📌 Array Methods

// 💡 The forEach() method executes a provided function once for each array element. There is no way to stop or break a forEach() loop other than by throwing an exception.
// array.forEach(function (currentValue, index, arr))

const people = ['John', 'Sara', 'Jack'];

people.forEach((name) => {
    console.log('Name: ', name);
});

// 💡 The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [65, 44, 12, 4];
const newArr = numbers.map((num) => num * 10)
console.log(numbers)
console.log(newArr)

// 💡 The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const ages3 = [32, 33, 16, 40];
const isAllAdult3 = ages3.filter(age => age >= 18)
console.log(isAllAdult3)

// 💡 array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const totalSum = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(totalSum);

// 📌 setTimeout()

// The setTimeout() method calls a function after a number of milliseconds. 1 second = 1000 milliseconds.
function greet() {
    console.log('Hello All');
}

const myTimeout = setTimeout(greet, 3000);
// // Invoke below function if you want to stop timeout
function myStopFunction() {
    clearTimeout(myTimeout);
}

// 📌 Async JS

// callback -> promise -> async-await

// 💡 Callback -> It is a function that is passed to another function.
function printName(name) {
    setTimeout(() => {
        console.log(name);
    }, Math.floor(Math.random() * 1000) + 1)
}

function printAllNames() {
    printName('Ajay');
    printName('Alok');
    printName('Mihir');
}
printAllNames(); // names are printed in different order every time as they are asynchronous.

// Let's revisit printName and make it callback fn
function printName(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, Math.floor(Math.random() * 1000) + 1)
}
// Now,
function printAllNames() {
    printName('Ajay', () => {
        printName('Alok', () => {
            printName('Mihir', () => { console.log('DONE') })
        })
    })
}

printAllNames(); // Now it will print in order but callback hell

// 💡 Promise: Promises are a better version of callback and were introduced in ES6. Here, we don’t pass any argument but wrap the whole code in a Promise method and return it. We are passing two parameters, resolve and reject to it. Now, whenever the resolve is run, the then() block from the function call is executed.catch()

function printName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (name === 'Mihir') {
            //     return reject('TEST')
            // }
            console.log(name);
            return resolve();
        }, Math.floor(Math.random() * 1000) + 1)
    })
}
function printAllNames() {
    printName('Ajay')
        .then(() => printName('Alok'))
        .then(() => printName('Mihir'))
        .catch(err => console.log(err));
}
printAllNames();

// 💡 Async-Await -> It is basically syntactic sugar for Promise. It makes async code look like sync.

async function printAllNames() {
    await printName('Ajay');
    await printName('Alok');
    await printName('Mihir');
}
printAllNames();

// 📌 Template Literals

const fullName = 'Jack';
console.log("Hello " + fullName + "!");
console.log(`Hello ${fullName}!`); // Hello Jack!

const str1 = `This is a string`;
const str2 = `This is a string with a 'quote' in it`;
const str3 = `This is a string with a "double quote" in it`;

const message1 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message1)

const result = 91
console.log(`${result < 10 ? 'Too low' : 'Very high'}`)

// 📌 Import and Export

// 💡JavaScript modules allow you to break up your code into separate files. A module is just a file. One script is one module. As simple as that.
/**
 * Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:
 - export keyword labels variables and functions that should be accessible from outside the current module.
 - import allows the import of functionality from other modules.

 // You can only have one default export in a file - it could be imported with any name
//  give a alias for named import
 */

// 📌 fetch

// 💡 The fetch() method starts the process of fetching a resource from a server. The fetch() method returns a Promise that resolves to a Response object.

const getData = async () => {
    const url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    const response = await fetch(url);

    const commits = await response.json(); // read response body and parse as JSON
    console.log(commits)

    console.log(commits[0].author.login);
}
getData();

const sendData = async () => {
    let user = {
        name: 'John',
        surname: 'Smith'
    };
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    console.log(result);
}
sendData()