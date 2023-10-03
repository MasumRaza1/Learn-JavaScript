// map Method

const numbers = [2,4,2,1,3];

// const square = function(number){
//     return number * number;
// }
// map funtion new array banyega 
// to usko store karege
//when use map fun then must be return

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map(function(number){
    const squareNumber = numbers.map((number)=>{ // arrow function
    return number * number;

});
console.log(squareNumber);