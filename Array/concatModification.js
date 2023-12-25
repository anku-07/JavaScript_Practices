/*
Qn : Array Concatenation and Modification
Create an array arr1 = [1, 2, 3] and arr2 = [4, 5]. Concatenate arr2 to arr1 without using the concat() method, and ensure that arr1 contains all elements from both arrays.
*/
let arr1 = [1,2,3,4];
let arr2 = [5,6,7];

for(let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
}
console.log(arr1);