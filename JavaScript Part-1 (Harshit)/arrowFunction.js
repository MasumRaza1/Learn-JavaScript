// Arrow Function

// const singHappyBirthday = function() {
//     console.log("happy bithday ....");
// }
// singHappyBirthday();

const singHappyBirthday = () => { 
    console.log("happy bithday ....");
}
singHappyBirthday();


// three sum
const sumThreeSum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
let sum = sumThreeSum (3,5,2);
console.log(sum);

//one line

const sumOfthree = (num1, num2, num3) => num1 + num2 +num3;
console.log(sumOfthree(3,5,7));


//find even number
const isEven = num => {
    return num%2 ===0;
}
let returnResut = isEven(4);
console.log(returnResut);

// one line 
const isEvens = num => num % 2 === 0;
console.log(isEvens(7))