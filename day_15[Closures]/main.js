// a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//------------------------------------------------------
// Activity 1 - Understanding Closures
// Task 1 - 
function outer(){
    const a = 14;
    function inner(){
        return a;
    }
    return inner();
}
console.log(outer());

// Task 2 - Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter(){
    let cnt = 0;
    return{
        increament: function(){
            cnt++;
        },
        getValue: function(){
            return cnt;
        }
    }
}

const myCounter = counter();

myCounter.increament();
myCounter.increament();
console.log(myCounter.getValue());

//------------------------------------------------------
// Activity 2 - Practical Closures
// Task 3 - 

// Task 4 - 
function user(name){
    function great(){
        return `Hello ${name}`;
    }
    return great();
}
console.log(user("vinay"));

//------------------------------------------------------
// Activity 3 - Closures in Loops
// Task 5 - Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functionArray = [];

for (let i = 0; i < 5; i++) {
    functionArray[i] = function(){
        console.log(i);
    }
}
functionArray[0]();
functionArray[4]();

//------------------------------------------------------
// Activity 4 - Module Pattern
// Task 6 - Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager(){
    let items = []; // Private variable to store the collection of the items

    return{
        // Method to add an item
        addItems:function(item){
            items.push(item);
        },
        // Method to remove an item
        removeItems:function(item){
            items = items.filter(existingItem => existingItem !== item);
        },
        listItems: function() {
            return items.slice(); // Return a copy of the items array
        }
    }
}

const itemManager = createItemManager();

itemManager.addItems('Apple');
itemManager.addItems('Banana');
itemManager.addItems('Orange');

console.log(itemManager.listItems());

itemManager.removeItems("Banana");

console.log(itemManager.listItems());


//------------------------------------------------------
// Activity 5 -
// Task 7 - 
function squareMemoize(fn){
    const cache = {}; // Object to store results of previous computations

    return function(x){
        // Checking if the result is already in the cache
        if(cache[x] !== undefined){
            console.log("Returning from cache...");
            return cache[x];
        }
        // Calculating the result if not in cache
        console.log("Calculating result...");
        const res = fn(x);
        cache[x] = res; // Store the result in cache
        return res;
    }
}

function square(x){
    return x * x;
}

// Creating a memoized version of the square function
const memoizedSquare = squareMemoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));

// Task 8 - 
function factorialMemory(fn) {   
    const cach = {};
    return function(x){
        if(cach[x] !== undefined){
            console.log('From Cache Memorey...');
            return cach[x];
        }
        let res = fn(x);
        cach[x] = res;
        console.log('From Calculations...');
        return res;
    }
}

function factorial(x){
    let prod = 1;
    for(let i=1; i<=x ; i++){
        prod = prod*i;
    }
    return prod;
}

const myFactorial = factorialMemory(factorial);
console.log(myFactorial(3));
console.log(myFactorial(3));