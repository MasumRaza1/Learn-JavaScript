// filter method

const numbers = [1,3,2,4,5,8];

const isEven = function(number){
        return number%2===0;
}
const evnNumbers = numbers.filter(isEven);
console.log(evnNumbers);

// filter function ka hmesha callBack funtion return karega
// boolean true ya false