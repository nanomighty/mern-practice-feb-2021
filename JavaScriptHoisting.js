// Assignment: JavaScript Hoisting

//1: GIVEN
console.log(hello);
var hello = 'world';                                 

//After Hoisting by the Interpreter
//var hello;
//console.log(hello); // logs undefined
//hello = 'world';

//2: GIVEN
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//After Hoisting by the Interpreter
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// var needle;
// needle = 'haystack';
// test(); // logs 'magnet'

//3: GIVEN
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//After Hoisting by the Interpreter
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan;
// brendan = 'super cool';
// console.log(brendan);  // logs 'super cool'

//4: GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//After Hoisting by the Interpreter
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// var food;
// food = 'chicken';
// console.log(food); //logs 'chicken'
// eat();             //logs 'half-chicken'

//5: GIVEN
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//After Hoisting by the Interpreter
// var mean;
// mean();
// console.log(food);
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }              
// console.log(food); // error: mean is not a function --> this stops everything from running

//6: GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//After Hoisting by the Interpreter
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// var genre;
// console.log(genre);  //logs undefined
// genre = 'disco';
// rewind();            //logs "rock", "r&b"
// console.log(genre);  //logs "disco"

//7: GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//After Hoisting by the Interpreter
// function learn() {
//     var dojo;
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // "san jose"
// learn();           // "undefined", "seattle", "burbank"
// console.log(dojo); // "san jose"

//8: GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

//After Hoisting by the Interpreter
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); //logs {name:"Chicago",students:65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); //error - can't make assignment to constant variable

//------------------------------------------Hoisting with ES6 syntax----------------------------------------





//1: GIVEN
console.log(hello);
let hello = 'world';

//After Hoisting by the Interpreter
//logs reference error - hello is not defined


//2: GIVEN
let needle = 'haystack';
test();
function test() {
    let needle = 'magnet';
    console.log(needle);
}

//After Hoisting by the Interpreter
// function test() {
//     let needle = 'magnet';
//     console.log(needle);
// }
// let needle = 'haystack';
// test();
//logs 'magnet'



//3: GIVEN
let brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//After Hoisting by the Interpreter
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// let brendan = 'super cool';
// console.log(brendan);
//logs 'super cool'


//4: GIVEN
let food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}

//After Hoisting by the Interpreter
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }
// let food = 'chicken';
// console.log(food);         // logs 'chicken'
// eat();                     // ReferenceError - cannot access 'food' before initialization



//5: GIVEN
mean();
console.log(food);
let mean = function () {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);

//After Hoisting by the Interpreter
//error - mean is not defined


//6: GIVEN
console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);

//After Hoisting by the Interpreter
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     let genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// let genre = "disco";
// rewind();
// console.log(genre);
//reference error - genre is not defined //This stops the runtime

//7: GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//After Hoisting by the Interpreter
// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     let dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//ReferenceError - cannot access 'dojo' before initialization


//8: GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

//After Hoisting by the Interpreter
// function makeDojo(name, students) {
//     let dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
//logs {name:"Chicago",students:65, hiring: true}
//logs closed for now