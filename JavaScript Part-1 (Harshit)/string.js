// string indexing

let fname = "Masum";

// M a s u m
// 0 1 2 3 4

console.log(fname[3]);

//length
console.log(fname.length);

// last index length - 1;
console.log(fname[fname.length-1]);


//string method
//trim()
//toUpperCase()
//toLowerCase()
//slice

let firstName = "   masum  ";
console.log(firstName.length);

// trim() : it removes the spaces

let newString = firstName.trim(); //"masum"
console.log(newString.length);

//toupperCase()
let upper = firstName.toUpperCase()
console.log(upper);

//toLowerCase()
let lower = firstName.toLowerCase()
console.log(lower);

//slice() : remove first and last string character
// start index
// end index
let newName = "masum";
let newStringg = newName.slice(0,5);
console.log(newStringg);
