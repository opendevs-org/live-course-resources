// Place JavaScript Code
console.log('from index.js')

// Defining Variables -> let, const
let fullName = 'Alok';
console.log(fullName);
fullName = 'opendevs';
console.log(fullName);
fullName = 10;
console.log(fullName);

const companyName = 'opendevs'
console.log(companyName);

companyName = 'JLL'; // it is going to throw Error
console.log(companyName);

/* Data Types in JavaScript
    1. String
    2. Number
    3. Bigint -> The bigint type represents the whole numbers that are larger than 2^53 – 1. To form a bigint literal number, you append the letter n at the end of the number:
    4. Boolean true/false
    5. Undefined
    5. Null -> null
    7. Symbol
    8. Object
*/

let type1 = 'Alok from opendevs' + " test"
let type2 = 10000000000000000n
console.log(Number.MAX_VALUE);
console.log(type2);
console.log(typeof type2);

let type3 = false;
console.log(typeof type3);

let fullName1 = null;
console.log(fullName1)
console.log(typeof fullName1)

let fullName2 = '10';
let test2 = '10';

console.log(fullName2 === test2)

let s1 = Symbol('id');
let s2 = Symbol('id');

console.log(s1 === s2)


// Conditional -> if, else if, else
let age = 17;
console.log(age >= 15 && age <= 18);

if (age < 15) {
    console.log('You are teenager');
} else if (age >= 15 && age <= 18) {
    console.log('Soon you are going to be adult');
} else {
    console.log('You are an Adult')
}

if (fullName != null) {
    console.log('Strings are equal')
} else {
    console.log('Strings are not equal')
}

const result = age > 18 ? 'You are an adult' : 'Not Adult';
console.log(result)

// Function & Arrow function & High Order Functions

function isEven(num) {
    return num % 2 === 0;
}

const isEven = num => {
    console.log('isEven function Invoked')
    return num % 2 === 0;
};

const sum = (num1, num2) => {
    return num1 + num2
};

console.log(isEven(4))
console.log(sum(2, 3))

let hiFunc = function () {
    return 'Hello'
}

// HOF
function iUseFunction(func) {
    return func();
}

const test = () => {
    return function () { return '42' }
}

const myFunc = test()
console.log(myFunc())

console.log(iUseFunction(hiFunc))

// Objects and its method

const obj = {
    name: 'Alok',
    profession: 'SE',
    age: 26,
    value: ['123'],
    printName: () => console.log('My name is Alok'),
    nestedObj: {
        tech: 'JS',
        address: 'IN',
        "fav animal": 'dog'
    }
}

console.log(obj.nestedObj['fav animal'])

// keys, values, entries
console.log(Object.keys(obj.nestedObj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
