/*
Create an object representing a car with properties like "brand", "model", and "year". Write a function that prints out the car details.
*/
// Define the car object
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
  };
  
  // Function to print car details
  function printCarDetails(carObj) {
    console.log(`Car Details:
    Brand: ${carObj.brand}
    Model: ${carObj.model}
    Year: ${carObj.year}`);
  }
  
  // Call the function to print car details
  printCarDetails(car);