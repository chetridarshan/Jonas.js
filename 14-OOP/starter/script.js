'use strict';

/*
    208: Constructor functions and the new operator
*/

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // // Never do this as it creates multiple copies of the same function
//     // this.calcAge = function () {
//     //     return 2023 - birthYear;
//     // };
// }

// const vishu = new Person('Vishu', 1992);
// const vasudha = new Person('Vasudha', 1997);
// console.log(vishu);
// console.log(vasudha);

/*
    1: New {} is created
    2: function is called, this = {}
    3: {} is linked to prototype, sets __proto__ property to that of constructor's prototype
    4: function returns the object
*/

/*
    209: Prototypes
*/

// console.log(
//     Person.prototype
// );
// Person.prototype.calcAge = function () {
//     return 2023 - this.birthYear;
// };

// console.log(vishu.calcAge());
// console.log(vishu.__proto__);
// console.log(vishu.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(vishu));

// Person.prototype.species = 'Homo Sapiens';
// console.log(vishu.species);
// console.log(vasudha.species);

/*
    211: Prototypal inheritance on built in objects
*/

// console.log(vishu.__proto__);
// console.log(vishu.__proto__.__proto__);
// console.log(vishu.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5, 5, 6, 3, 2, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// // add new method to array prototype -- not a good practice, but just for fun
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1)

/*
    212: Coding Challenge #1
*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelarate = function () {
//     this.speed += 10;
//     console.log(`${this.make} speed is ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} speed is ${this.speed} km/h`);
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);
// car1.accelarate();
// car1.brake();
// car2.accelarate();
// car2.brake();
// car1.brake();
// car1.brake();

/*
    213: ES6 Classes
*/

class PersonCl {
    constructor (fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge () {
        console.log(2023 - this.birthYear);
    }

    static hey () {
        console.log(`Hey there!!`);
        console.log(this);
    }

    get age () {
        return 2023 - this.birthYear;
    }

    set fullName (name) {
        name.includes(' ') ? this._fullName = name : alert(`${name} is not a full name`);
    }

    get fullName () {
        return this._fullName;
    }
};

const sneha = new PersonCl('Sneha Bharathi', 2006);
console.log(sneha);
console.log(sneha.__proto__ === PersonCl.prototype);
sneha.calcAge();

// Taking to next level 😎
PersonCl.prototype.greet = function () {
    console.log(`Hello ${this.firstName}`);
};

sneha.greet();
console.log(sneha.__proto__ === PersonCl.prototype);
console.log(sneha.age);
console.log(sneha.fullName);

/* 
    214: Getters and setters
*/

const account = {
    ownner: 'Vishu',
    movements: [100, 200, 300, 400, 500],

    get latest () {
        return this.movements.slice(-1).pop();
    },

    set latest (mov) {
        this.movements.push(mov);
    }
};

account.latest = 50;
console.log(account.latest);
console.log(account.movements);

/* 
    215: Static Methods
*/

PersonCl.hey();



