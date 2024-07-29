//------------------------------------------------
// Activity 1- Basic Recursion
// Task 1 - Factorial
let prod = 1; 
function Factorial(x){
    if(x >= 1){
        prod = prod * x;
        return Factorial(x-1);
    }
    result = prod;
    prod = 1;
    return result;
}
console.log(Factorial(3));
console.log(Factorial(5));
console.log(Factorial(6));

// Task 2 -
let series = 0;
function fibonacci(n){
    for (let i = 0; i < n; i++) {
        a = series;
        // series +=  
        
    }
}

//------------------------------------------------
// Activity 2- Recursion with Array
// Task 3 - 
let sum = 0;
function sumArr(arr,i) {
    if(i < arr.length){
        sum += arr[i];
        return sumArr(arr, i+1);
    }
    let res = sum;
    sum = 0;
    return res;
}
console.log(sumArr([1,2],0));

// Task 4 -
let ans = Number.MIN_SAFE_INTEGER;
const maxArr = (arr,i)=>{
    if(i >arr.length){
        let k = ans;
        ans = Number.MIN_SAFE_INTEGER
        return k;
    }
    if(arr[i] > ans){
        ans = arr[i];
    }
    return maxArr(arr, i+1);
}
console.log(maxArr([2,4,6,1],0));
console.log(maxArr([-2,-4,-22,-95,-6,-1],0));

//------------------------------------------------
// Activity 3- String Manipulation with Recursion
// Task 5 -
function reverseStr(str,n, newstr = ''){
    if(n < 0){
        return newstr;
    }
    newstr += str[n];
    return reverseStr(str,n-1, newstr);
}
str ="Hello how are you";
console.log(reverseStr(str, str.length-1));

function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

console.log(reverseString('hello')); // Output: 'olleh'


// Task 6 - check palindrome
function checkPalindrome(str, low, high) { 
    if(low == high){
        return 1;
    }
    if(str[low] != str[high]){
        return -1;
    }
    return checkPalindrome(str, low+1, high-1);
}
console.log(checkPalindrome('madam', 0, 4));

//------------------------------------------------
// Activity 4- Recursive Search
// Task 7 -
function Search(arr, k, low , high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2); 

    if (arr[mid] === k) {
        return mid;
    } else if (arr[mid] > k) {
        return Search(arr, k, low, mid - 1);
    } else {
        return Search(arr, k, mid + 1, high);
    }
}

let arr = [2, 4, 8, 8, 26, 67];
let low = 0, high = arr.length - 1;
console.log(Search(arr, 2, low, high)); // Output: 0 (assuming array is sorted)
console.log(Search(arr, 67, low, high)); // Output: 5 (assuming array is sorted)
console.log(Search(arr, 10, low, high)); // Output: -1 (10 is not in the array)

// Task 8 -
function numOccur(arr, target, i, cnt) {
    if(i == arr.length){
        if(cnt>0){
            return cnt;
        }else{
            return -1;
        }
    }
    if(arr[i] == target){
        cnt++;
    }
    return numOccur(arr, target, i+1, cnt);
}
let b = [2,9,34,6,9,9];
console.log(numOccur(b, 9, 0, 0));
console.log(numOccur(b, 3, 0, 0));

//------------------------------------------------
// Activity 5- Tree Traversal
// Task 9 - write a recursive function to perform an in order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    
    inOrderTraversal(node.left); // Traverse the left subtree
    console.log(node.value);     // Visit the root
    inOrderTraversal(node.right);// Traverse the right subtree
}

// Example Usage:
// Create a sample binary tree:
//     1
//    / \
//   2   3
//  / \
// 4   5

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Perform in-order traversal
inOrderTraversal(root);
// Output should be: 4, 2, 5, 1, 3


// Task 10 -

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    
    let leftDepth = calculateDepth(node.left);   // Calculate the depth of the left subtree
    let rightDepth = calculateDepth(node.right); // Calculate the depth of the right subtree
    
    return Math.max(leftDepth, rightDepth) + 1;  // Return the larger depth plus 1 for the current node
}

// Example Usage:

// Create a sample binary tree:
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.right = new TreeNode(6);

console.log(calculateDepth(root1)); // Output should be: 3

// Create another sample binary tree:
//      1
//     / 
//    2   
//   / 
//  3   

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);

console.log(calculateDepth(root2)); // Output should be: 3

// Create another sample binary tree:
//      1

let root3 = new TreeNode(1);

console.log(calculateDepth(root3)); // Output should be: 1

// Create an empty binary tree

let root4 = null;

console.log(calculateDepth(root4)); // Output should be: 0

//------------------------------------------------
        // Day-16 task: Completed
//------------------------------------------------