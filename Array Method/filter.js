let num = [1,2,3,4,5,6,7,8,9,11,12,14,13];
let even = num.filter((el) => (el%2 == 0)); // enev -> true & odd -> false [only even number stored in even array]
let odd  = num.filter((el) => (el%2 != 0)); // even -> false & odd -> true [only odd number stored in odd array]

