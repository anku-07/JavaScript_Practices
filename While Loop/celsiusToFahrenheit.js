// Create a program that converts celsius to fahrrnheit for temparetures between 0 to 100 using while loop.
let celsius = 0;
while(celsius <= 100){
    let fahrrnheit = (celsius * 9/5)+32;
    console.log(`${celsius} c = ${fahrrnheit}f`);
    celsius++;
}