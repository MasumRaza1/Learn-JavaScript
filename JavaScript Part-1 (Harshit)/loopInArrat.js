// let i = 0;
// while(i  <fruits.length)
// {
//     console.log(fruits[i]);
//     i++;
// }

// //for of loop
// console.log("for of loop");

// for(let i of fruits)
// {
//     console.log(i);
// }

const fruits = ["apple", "banana"];
fruits.push("mango");
const fruits2 = [];

for(let i of fruits)
{
    fruits2.push(i.toUpperCase());
    console.log(i);
}

for(let index in fruits) // return index
{
    console.log(index);
}