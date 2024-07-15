// Activity 1 - Arithmetic Operations
// ------------------------------------------

// Task1 - add two no. and log to console
var a=2, b=3;
console.log(a+b);

// Task2 - substract two no.
var c=44 , d =3;
console.log(c-d);

// Task3 - Multiply two no.
console.log(c * d);

// Task4 - Divide two no.
console.log(d/c);

// Task5 - Reminder
console.log(c%d);

// Activity 2 - Assignment operator
// ------------------------------------------

// Task6 - use +=
c += 6;
console.log(c);

// Task7 - use -=
c -= 4;
console.log(c);

// Activity 3 - comparision operator
// ------------------------------------------
//tast8 - > and <
const big = 6, small =2;
console.log(big>small);
console.log(big<small);

//tast9 - <= and >=
var f = 9, g = 6
console.log(f>=g);
console.log(f<=g);

//task10 - == and ===
console.log(5 == '5')   // true, Loose equality: Checks value with type coercion
console.log(5 === '5'); // false , Strict equality: Checks both value and type

// Activity 4 - Logical operator
// ------------------------------------------
//task11 - &&
console.log(5 === '5' && 5 == '5'); //false

//task12 - ||
console.log(5 === '5' || 5 == '5'); //true

//task13 - !
console.log(!(5 === '5'));          //true

// Activity 2 - Ternary operator
// ------------------------------------------
//task14 - ternary operator
const num = 5;
const iseven = (num%2 == 0) ? "Even": "odd";
console.log(iseven);

const score = 85;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              'D';
console.log(grade);

function getStatus(isActive) {
    return isActive ? 'Active' : 'Inactive';
}
console.log(getStatus(false)); // Output: 'Inactive'


// ------------------------------------------
                //Day 2 Task: Completed
// ------------------------------------------