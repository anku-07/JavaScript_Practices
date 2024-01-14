let arr = [1,2,3,4,5];
let newArr = [...arr]; // for copy arr eliment in an new Array
console.log(newArr); // output : [1,2,3,4,5];

let chars = [..."hello"]; // output : ['h', 'e', 'l', 'l', 'o'];

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let nums = [...odd,...even]; // output : [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]; order wise printing 
