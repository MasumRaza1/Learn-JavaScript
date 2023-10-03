//how to clone array 

//how to concatenate array

let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];

console.log(array1);
console.log(array2);

array2 = [].concat(array1);
console.log(array2);

//spread operator
let array3=[...array1,"item99"]; 
console.log(array3);

array3 =array1.slice(0).concat(["item3","item4"]);
console.log(array3);