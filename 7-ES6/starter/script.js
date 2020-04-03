// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5, age5)

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6, age6)




// ES5
function driversLicense5(passedTest){
    if (passedTest){
        console.log(firstName); // undefined

        var firstName = 'John'; // function scoped (var)
        var yearOfBirth = 1990; // function scoped (var)

        // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')

}

driversLicense5(true);


// ES6

function driversLicense6(passedTest){
    // console.log(firstName); these both print errors
    // console.log(yearOfBirth);

    let firstName;
    const yearOfBirth = 1990;
    if (passedTest){
        firstName = 'John'; // block scoped (let)
        yearOfBirth; // block scoped (let)

        // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
}
driversLicense6(true);





let i = 23; // block scoped

for (let i = 0; i < 5; i++){
    console.log(i); // console logs 0 through 5 (i is block scoped)
}

console.log(i); // will console log 23



/* // Will say uncaught syntaxError: identifier 'i' has already been declared

var i = 23; // function scoped

for (var i = 0; i < 5; i++){
    console.log(i); // console logs 0 through 5 (i is function scoped)
}

console.log(i); // will console log 23

*/