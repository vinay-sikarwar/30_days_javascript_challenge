// Activity 1 - Variable Declaration
var mynum = 4;
console.log(mynum);

let newStr = "Vinay";
console.log(newStr);

// Activity 2 Constant Declaration
const a = true;
console.log(a);

// Activity 3 - Data Types
var b = 66;
console.log(typeof(b));  // number

var s = "I am vinay";
console.log(typeof(s)); //string

var c = false;
console.log(typeof(c)); //boolean

var d = {name: "vinay", surname: "surname"};
console.log(typeof(d));     //object

var e = [1,2,3,4];
console.log(typeof(e));   // object because arrays are essentially specialized objects.

// Activity 4 - Reassigning Variables
let f = 9;
console.log(f);
f = 10 ;
console.log(f);

// Activity 5 - Understanding const 
const g = 55;
console.log(g);
g = 46;
console.log(g);  // TypeError : assignment to constant variable 

// Feature Request - 
// 1. Variable Type console log: Write a script that declares variable of different data types and logs both the value and type to the console.
let mark = 99;
var age = 21;
const name = "vinay"
var user = {name: "vinay", marks: 99};
let subject = ["js", "java"];

console.log(typeof(mark));
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(user));
console.log(typeof(subject));

// 2. Reasignment demo: demonstrate difference betwwen let and const
let location = india;
console.log(location);

location = usa;
console.log(location);

const cgpa = 9;
console.log(cgpa);

cgpa = 9.9;
console.log(cgpa);


// ------------------------------------------------------
//            Day-1 Task: Completed
// ------------------------------------------------------