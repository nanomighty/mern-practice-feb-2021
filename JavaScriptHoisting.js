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
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre;
console.log(genre);  //logs undefined
genre = 'disco';
rewind();            //logs "rock", "r&b"
console.log(genre);  //logs "disco"

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

//Extra Problem : GIVEN - 1
console.log(example);
var example = "I'm the example!";   

//After Hoisting by the Interpreter
// var example;
// console.log(example);             //logs undefined
// example = "I'm the example!"; 

//Extra Problem: GIVEN - 2
console.log(example);
let example = "I'm the example!";    

//After Hoisting by the Interpreter
// console.log(example);
// let example = "I'm the example!";   //ReferenceError: example is not defined

