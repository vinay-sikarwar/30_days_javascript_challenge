// Activity 1 : Array creation and access
//------------------------------------------------
// Task 1 : 
var arr = [1,2,3,4,5];
console.log(arr)

// Task 2 :
console.log(arr[0]);
console.log(arr[arr.length-1]);

// Activity 2 : Array Methods (Basic)
//------------------------------------------------
// Task 3 : push - used to add element at end of array
arr.push(9);
console.log(arr);

// Task 4 : pop - delete last element
arr.pop()
console.log(arr);

// Task 5 : shift - remove first element
arr.shift()
console.log(arr);

// Task 6 : upshift - add new no. in beginning
arr.unshift(1)
console.log(arr);


// Activity 3 : Array Methods (intermediate)
//------------------------------------------------
// Task 7 : map
const doubled = arr.map(function(num){
    return num*2;
})
console.log(doubled);

// Task 8 : filter
// const newArray = array.filter(function(element, index, array) {
//     // Return true if element passes the test, false otherwise
//   }, thisValue);
  

const evenArr = arr.filter(function(num){
    return num%2 == 0;
})

// Task 9 : reduce
const sumOfArr = arr.reduce(function(accumalator, currVal){
    return accumalator+currVal;
}, 0)
console.log(sumOfArr);


// Activity 4 : 
//------------------------------------------------
// Task 10 : for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11 : foreach
arr.forEach((element) =>{
    console.log(element);
})

// Activity 5 : Multi-Dimensional Arrays
//------------------------------------------------
// Task 12 : form a matrix
const newArr = [[1,2,3,4,5],
                [6,7,8,9,10],
                [1,2,3,4,5]];
console.log(newArr);

// Task 13 :
console.log(newArr[1][2]);

//------------------------------------------------
            // Day-6 Task: completed
//------------------------------------------------