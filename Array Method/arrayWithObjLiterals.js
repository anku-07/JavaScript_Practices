let data = {
    email : "aditya07@gmail.com",
    password : "adi*07"
}

let dataCopy = {...data,id: 123,Country : "India"} // output : {email: 'aditya07@gmail.com', password: 'adi*07', id: 123, Country: 'India'}
let arr = [1,2,3,4,5]; // val
let obj1 = {...arr}; // obj -> key : val || output :  {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

let obj2 = {..."hello"};  // output : {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}


