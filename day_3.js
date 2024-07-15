// Activity 1 - If else statements 
//----------------------------------------------
//Task1 - Check if no. is positive , negative or zero and log result
const a = -1;
if (a > 0){
    console.log("possitive");
}else if(a < 0){
    console.log("negative");
}else{
    console.log("zero");
}

//Task2 - check if a person is eligible to vote(>=18) and log result
var age = 16;
if(age>=18){
    console.log("Eligible to vote");
}else{
    console.log("Wait, until you are 18+");
}

// Activity 2 - Nested if-else statements
//----------------------------------------------
//Task3 - lasgest of 3 no.
var b = 4, c = 9 , d =2;
if(b>c){
    if(b>d){
        console.log(`${b} is largest`);
    }else{
        console.log(`${d} is largest`);
    }
}else{
    console.log(`${c} is largest`);
}

// Activity 3 - Switch case
//----------------------------------------------
//Task4 - day of week by no.
const n = 3;
let dayname;

switch(n){
    case 1:
        dayname = "Monday";
        break;
    case 2:
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "Wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday"
    case 7:
        dayname = "Sunday";
    default:
        dayname = "Monday";
}
console.log(dayname);

//Task5 - Check grades bsed on score
var marks = 80;
let grade ;
switch(marks){
    case 90:
        grade = "A";
        break;
    case 80:
        grade = "B";
        break;
    case 70:
        grade = "C";
        break;
    case 60:
        grade = "D";
        break;
    case 0:
        grade = "F";
        break;
    default:
        grade = "Enter valid marks";

        //    case marks>90:
    //     grade = "A";
    //     break;
    // case marks>80:
    //     grade = "B";
    //     break;we can't use the comparision 
}
console.log(grade);

// Activity 4 - Conditional (ternary) operator
//----------------------------------------------
//Task6 - 
var newnum = 89;
const ans = (newnum%2) ? "even" : "odd";
console.log(ans);

// Activity 5 - combining conditions
//----------------------------------------------
//Task7 - check if year is leap (divisible by 4, not by 100 and 400)
let year = 1998;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


//----------------------------------------------
                // Day2 Task: Completed
//----------------------------------------------                