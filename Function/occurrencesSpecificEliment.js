//Write a function that counts the occurrences of a specific element in an array.

function occurrences(arr,targetEliment){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === targetEliment){
            count ++;
        }
    }
    return count;
}

let arr = [1,2,3,4,4,3,2,1,3];
let targetEliment = 3;
console.log(occurrences(arr,targetEliment));