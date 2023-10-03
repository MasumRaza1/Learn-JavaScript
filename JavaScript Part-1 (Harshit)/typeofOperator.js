
//datatype(primitives data types)
//string = "Masum"
//number 123
//booleans
//undefined //let firstname; not int constant
//null 
//BigInt
//Symbol

// typeof opeartor
let age = 20;
let fname = "Masum";

// console.log(typeof(age));
// console.log(typeof(fname));
// console.log(typeof("he"));


//convert number to string
//number ko khali string se add kr do
age = age + "";
console.log(typeof (age));

//convert string to number
//string se pahle + lga do
let mySrt = +"8458";
console.log(typeof (mySrt));

//method 2
let a = 10;
a = String(a);
console.log(typeof(a));

let b = "Masum";
b = Number(b);
console.log(typeof(b));

// string Concatenation
let string1 = "Masum";
let string2 = "Raza";

let fullName = string1 + " " + string2;
console.log(fullName);

// string to number concatenate
let num1 = "10";
let num2 = "7";
let total = +num1 + +num2;
console.log(total);

//null
let myVar = null;
console.log(myVar);
myVar = "Masum";
console.log(typeof(myVar), myVar);

// console.log(typeof null);

//BigInt
let myNumber = BigInt(123999999999999999999);
let myNum = 2345n;
console.log(myNum);
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);