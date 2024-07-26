//--------------------------------------------------------------
// Activity 1 - Basic Error Handling with Try-Catch
// Task 1 - 
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject('Failed to fetch')
    }, 1000);
})

async function promise1res(){
    try{
        res = await promise1;
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

// Task 2 - 
function divideNum(numerator, denominator){
    try{
        if(denominator === 0){
            throw new Error("Denominator cannot be zero.");
        }
        const result = numerator / denominator;
        return result;
    }catch (error){
        console.log("Error", error.message);
    }
}
console.log(divideNum(18,2));
console.log(divideNum(18,0));
//--------------------------------------------------------------
// Activity 2 - Finally Block
// Task 3 - Finally block always runs
async function withFinally(){
    try{
        const data = await promise1;
        console.log(data);;
    }catch(error){
        console.log(error);
    }finally{
        console.log("finally block");
    }
}
withFinally()


//--------------------------------------------------------------
// Activity 3 - Create Error Objects
// Task 4 - 
class customeError extends Error {
    constructor(message){
        super(message)
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor)
    }
}

const throwCustomError = ()=>{
    try{
        throw new customeError("Error: Custom Error")
    }catch(e){
        console.log(e.message);
    }
}
throwCustomError()

// Task 5 - 
console.log('Task 5');

class nullInputError extends Error {
    constructor(message){
        super(message)
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor)
    }
}

const enterStr = (str) =>{
    if(str === ""){
        throw new nullInputError('dont enter blank string');
    }else{
        console.log(str);
    }
}

const handlError = (str) =>{
    try{
        enterStr(str)
    }catch(e){
        console.log(e.message);
    }
}
console.log(handlError("hello"));
console.log(handlError(""));
//--------------------------------------------------------------
// Activity 4 -
// Task 6 - 
const randomize = ()=>{
    return Math.random()*10;
}
const randomPromise = new Promise((resolve, reject)=>{
    let a = randomize();
    if(a > 5){
        resolve('Random Promise Resolved');
    }else{
        reject('Random promise Rejected');
    }
});
randomPromise
    .then((result)=>{
        console.log(result);
    }).catch((error) =>{
        console.log('Error: ',error);
    })

// Task 7 - 
console.log('Task 7');
async function randomPromise2(){
    try{
        let k = randomize();
        if(k > 1){
            throw new Error('Could not resolved');
        }else{
            console.log('New Random Promise Resolved');
        }
    }catch(error){
        console.log(error.msg);
    }
}
randomPromise2();
//--------------------------------------------------------------
// Activity 5 -
// Task 8 - 
const url = 'https://invalid-url-example.com'
const getData = ()=>{
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json()
    }).then((data)=> {
        console.log(data)
    })
    .catch((err)=>{
        console.log("Error fetching data : " + err.message)
    })
}

getData()
// Task 9 - 
console.log("Error handling in async function using try catch for invalid url data fetching :  TASK 9")
const fetchData = async () =>{
    try{
        const res = await fetch(url)
        const data = res.json();
        console.log(data)
    }catch(e) {
        console.log("Error fetching data(using async): " + e.message)
    }
    
}

fetchData()

//------------------------------------------------
            // Day-12 task: completed
//------------------------------------------------