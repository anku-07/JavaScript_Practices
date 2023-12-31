/*
Create an object representing a person with properties like "name", "age", and a method to greet the person.
*/
let person = {
    name: "Aditya",
    age: 21,
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
  
  // Calling the greet method
  console.log(person.greet());
  