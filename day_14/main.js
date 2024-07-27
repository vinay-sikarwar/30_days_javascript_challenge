// Classes
// A class is a blueprint for creating objects with predefined properties and methods. It is a way to create reusable components that encapsulate data and functionality.

// Properties
// Properties are variables that belong to an object. In a class, properties are defined in the constructor.

// Methods
// Methods are functions that belong to an object. In a class, methods are defined inside the class body.


//------------------------------------------------
//Activity 1- Class defination

// Task 1 -
class Person{
    constructor(names, age){
        this.names = names;
        this.age = age;
    }
    greeting(){
        return `Hello ${this.names} , are you really ${this.age} year old`;
    }
}
//An instance is an individual object of a certain class. An instance contains real data and can be used to call methods defined in the class.
const greet = new Person('vinay', 20);
console.log(greet.greeting());

// Task 2 -
class Person2{
    constructor(names, age){
        this.names = names;
        this.age = age;
    }
    // Getter
    greetMethod(){
        return `Hello ${this.names} , are you really ${this.age} year old`;
    }
    // Method
    updateAge(newAge){
        this.age = newAge
        console.log(this.age);
    }
}
const newGreet = new Person2('vinay', 20);
console.log(newGreet.greetMethod());

newGreet.updateAge(25);
console.log(newGreet.greetMethod());

//------------------------------------------------
//Activity 2- class inheritance 
// Task 3 - 
class Student extends Person2{
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        // console.log(this.studentId);
    }
    stdInf(){
        return this.studentId;
    }
    greetMethod(){
        return `Hello ${this.names} , are you really ${this.age} year old and student id is ${this.studentId}`;
    }
}
const student1 = new Student('vinay',20,'EE22');
console.log(student1.stdInf());

// Task 4 - override the greeting message
console.log(student1.greetMethod());

//------------------------------------------------
//Activity 3- Static Methods and Properties
// Static methods in JavaScript classes are methods that belong to the class itself rather than instances of the class.
// Task 5 - static method
class Person3{
    constructor(names, age){
        this.names = names;
        this.age = age;
    }
    // Getter
    greetMethod(){
        return `Hello ${this.names} , are you really ${this.age} year old`;
    }
    // Method
    updateAge(newAge){
        this.age = newAge
        console.log(this.age);
    }
    static msg(){
        return "Hello there, you are in person 3 class"
    }
}
// calling static method without creating instance
console.log(Person3.msg());

// Task 6 - add static property to keep track of no. of students
class Student1 extends Person2{
    static cnt=0;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        // console.log(this.studentId);
        Student1.cnt++;
    }
    stdInf(){
        return this.studentId;
    }
    greetMethod(){
        return `Hello ${this.names} , are you really ${this.age} year old and student id is ${this.studentId}`;
    }
    static totalStd(){
        return Student1.cnt;
    }
}
const std1 = new Student1('a',4,'55')
const std2 = new Student1('b',4,'55')
const std3 = new Student1('c',4,'55')
console.log(Student1.totalStd());

//------------------------------------------------
//Activity 4- Getters and Setters
// Task 7 - 
class Person4{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName(){
        return `full name: ${this.firstname} ${this.lastname}`;
    }
}
// instance of class 
const namefull = new Person4('vinay','sikarwar');
console.log(namefull.fullName);

// Task 8 -
class Person5{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName(){
        return `full name: ${this.firstname} ${this.lastname}`;
    }
    set newName(name){
        this.firstname = name;
    }
}
const namefull1 = new Person5('vinay','sikarwar');
console.log(namefull1.fullName);

namefull1.newName = 'vinny';
console.log(namefull1.fullName);
//------------------------------------------------
//Activity 5- Private fields
// Task 9 - 
class Bank{
    #balance=0;
    constructor(deposit, withdraw){
        this.deposit = deposit;
        this.#balance += this.deposit
        this.withdraw = withdraw;
        this.#balance -= this.withdraw;
    }
    depositToAc(money){
        this.#balance += money;
        console.log(`${money} deposited succesfully`);
        return `Your current balance is : ${this.#balance}`;
    }
    withdrawByAc(money){
        this.#balance -= money;
        console.log(`${money} withdrawn succesfully`);
        return `Your current balance is : ${this.#balance}`;
    }
    currBalance(){
        return this.#balance;
    }
}


// Task 10 - create instance of bank
const acc = new Back(2000,1000);

console.log(acc.currBalance());
console.log(acc.withdrawByAc(200));
console.log(acc.depositToAc(200000));

//------------------------------------------------------
            // Day 14 task: completed
//------------------------------------------------------