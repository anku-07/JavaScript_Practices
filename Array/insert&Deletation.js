/*
Array Insertion and Deletion
Starting with an array cities = ['New York', 'Los Angeles', 'Chicago'], insert 'Miami' at the end of the array and then remove 'Chicago'.
*/
let cities = ['New York', 'Los Angeles', 'Chicago'];

// cities[2] = 'Miami';
// console.log(cities);
cities.push('Miami');
let indexOfChicago = cities.indexOf('Chicago');
if(indexOfChicago !== -1){
    cities.splice(indexOfChicago,1);
}
console.log(cities);