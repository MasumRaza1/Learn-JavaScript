// splice method
// start, delete, insert

// Array k bich me se kuch delete karna hai 
// ya insert krna hai
// to use krte hai splice method

const myArray = ['item1', 'item2', 'item3'];

// delete
// myArray.splice(1, 1);
// index 1 se start krna hai 1 item delete krna hai
console.log(myArray);

// Insert
myArray.splice(1,0,'inserted item');
console.log(myArray);