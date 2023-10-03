// Array is Reference type 



let mix = [1,3,4,9.5,"Mango",null, undefined];
console.log(mix);

let fruit = ["apple", "banana", "mango"];
console.log(fruit);
fruit[1]="grapes";
console.log(fruit);


console.log(Array.isArray(fruit));

let obj = {} //object literal
console.log(Array.isArray(obj));

