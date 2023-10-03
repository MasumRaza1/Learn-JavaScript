// primitive vs reference type

let num1 = 6;
let num2 = num1;
console.log(num1);
console.log(num2);

num1++;
console.log("After incrimenting num 1");
console.log(num1);
console.log(num2);


//reference type
//array // pointersave in heap
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push("item3");
// console.log("add some value in array1");
console.log(array1);
console.log(array2);