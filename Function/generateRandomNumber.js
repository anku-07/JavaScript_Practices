// Write a JavaScript function to generate a random number with in arange(start,end)
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor((Math.random() * diff) + start);
}
console.log(generateRandom(start,end));