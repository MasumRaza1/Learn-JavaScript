// important array methods

// forEach
// map
// filter
// reduce

// const numbers = [1,4,5,2,8];

// function multiplyBy(number, index){
//     console.log("index is", index);
//     console.log(number*2);

// }
// multiplyBy(numbers[0],0);

// for(let i = 0; i<numbers.length; i++)
// {
//     multiplyBy(numbers[i], i);

// }

// numbers.forEach(multiplyBy);

const users = [
    {firstName : "Masum", age: 20},
    {firstName : "Binod", age: 21},
    {firstName : "Gopal", age: 22},
    {firstName : "hemPuspa", age: 22},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// })

users.forEach((user, index)=> {
    console.log(user.firstName, index);
})


// for of
for(let user of users){
    console.log(user.firstName);
}