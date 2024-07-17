// Activity 1: Function Declaration
//------------------------------------------------
// Task 1: no. is even or odd
var x = 4;
function evenOrOdd(x) {
    if(x%2 == 0){
        console.log("even");
    }else{
        console.log("Odd");
    }
};
evenOrOdd(x);

// Task 2: sqr of no.
function Square(num){
    return num *num;
}
console.log(Square(x));

// Activity 2: Function expression
//------------------------------------------------
// Task 3: max of two no.
const maxNum = function (a,b) {
    if(a>b){
        console.log(`${a} is big`);
    }else if(a == b){
        console.log("Both are same no.");
    }else{
        console.log(`${b} is big`);
    }
}
maxNum(36.2,36);

// Task 4: Concate two strings
var Concate = function (str1, str2) {
    return str1+str2;
}
console.log(Concate("Hacker", "Rank"));

// Activity 3: Arrow functions
//------------------------------------------------
// Task 5: sum of two no.
const sumOfTwo = (a ,b) =>{
    return a+b;
}
console.log(sumOfTwo(5,9));

// Task 6: check if string contains a specific charecter
const specificChar = (str,char) =>{
    for (let i = 0; i < str.length; i++) {
        if(str[i] == char){
            return true;
        }
    }
    return false;
}
console.log(specificChar("vin@y","@"));

// Activity 4: Function parameters and default values
//------------------------------------------------
// Task 7: product of two no. but 2nd parameter should be default
const prod = (k, l=5) => {
    return k*l;
};
console.log(prod(7));       //35
console.log(prod(7,2));     //14

// Task 8: 
var user = function(name, age=18) {
    return `Your name - ${name} and age -${age}`
}
console.log(user("amit", 44));
console.log(user("john"));

// Activity 5: Higher Order functions
//------------------------------------------------
// Task 9: Higher-order function that takes a function, no. and calls the func that many times
const newFunc = function(lower, a){
    for(let i=0; i<a; i++){
        lower();
    }
}
var lower = () =>{
    console.log("hi");
}
newFunc(lower,5);

// Task 10: 
const new2 = (func1, func2, num) =>{
    func1(num);
    func2(num);
}
function func1(num){
    console.log(`Double of ${num} is ${2 * num}`);
}
function func2(num){
    console.log(`Half of ${num} is ${num/2}`);
}
new2(func1,func2, 24);

//------------------------------------------------
            // Day-2 Task: completed
//------------------------------------------------