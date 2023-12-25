/*
Removing Duplicates
Given an array items = ['apple', 'orange', 'banana', 'apple', 'orange'], remove duplicate elements to have a unique set of items.
*/
let items = ['apple', 'orange', 'banana', 'apple', 'orange'];
let uniqueItems = [...new Set(items)];
console.log(uniqueItems);