// Write a program in js array eliment taken form user and check spefic eliment in this array and his location.
let numOfEliment = prompt("Enter number of eliment : ");
let arr = [];
let i = 0;
while(i < numOfEliment){
    let element = prompt("Enter eliment : ");
    arr.push(element);
    i++;
}
console.log(`Array eliment are ${arr}`);

let checkedEliment = prompt("Enter seraching eliment : ");

for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] == checkedEliment){
        console.log(`Your seaching eliment ${checkedEliment} is exist in ${i} index.`);
        break;
    }
}