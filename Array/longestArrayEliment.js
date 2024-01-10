// Write a javascript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country = ["Australia", "Germany","United states of Amarica"];

let country = ["Australia","Germany","United states of Amarica"];

function getMaxLength(country){
    let ans = country[0].length;
    for(let i = 0; i < country.length; i++){
        if(country[i].length > ans){
            ans = country[i];
        }
    }
    return console.log(ans);
}

getMaxLength(country);
