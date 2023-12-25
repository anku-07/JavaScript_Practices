/*
Qn : Array Searching and Removal
Given an array nums = [10, 20, 30, 40, 50], find the index of the number 30 and remove it from the array.
*/
let nums = [10,20,30,40,50];
let indexOf30 = nums.indexOf(30);
if(indexOf30 !== -1){
    nums.splice(indexOf30,1);
}
console.log(nums);