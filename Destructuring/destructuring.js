let names = ["tony","bruce","steve","peter","captain","thor"];

// we can do this

// let win = names[0];
// let lose = names[1];
// let elimanet = names[2];

//we can shortly 

//let[winner,runnerup] = names;
 //console.log(winner,runnerup); // output : tony bruce

// here is we use rest and stores others eliment in an others array
let [winner,runnerup, ...others] = names; // winner = tony, runnerup = bruce, ...others = steve,peter,captain,thor