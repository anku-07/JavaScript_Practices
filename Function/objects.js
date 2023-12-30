/*
Create an object called car with properties make, model, and year. Write a function that prints out all the key-value pairs of the object.
*/
// Function Object
function carinfo(){
     let car = {
        info : [
            {make : "Japan"},
            {model : "Audi Q7"},
            {year : 2024}
        ]
    };
    let stored = car.info[0];
    console.log(stored);
}

