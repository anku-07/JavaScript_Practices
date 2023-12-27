/*
Qn-1:
create a program that generates a random number representing a dice roll.
[The number should be between 1 to 6]
*/
const random = Math.floor(Math.random() * 6) + 1;
console.log(random);

/*
Qn-2:
Create an object representing a car that stors the following properties for the car : name, model, color
print the car's name;
*/
const car = {
    name : "Audi",
    model : "S4",
    color : "Black"
};
console.log(car.color);

/*
Qn-3:
create an object person with their name,age,city.Edit their city's orginal value to change it to."New York".Add a new property country and set it to the united states
*/
const person = {
    name : "Aditya",
    age : 22,
    city : "Kolkata",
}
person.city = "New York";
person.country = "United states";
console.log(person);