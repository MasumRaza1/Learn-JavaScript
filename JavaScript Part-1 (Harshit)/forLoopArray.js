// for loop in array

let fruit = ["apple", "mango", "grapes", "banana"];
console.log(fruit.length);
console.log(fruit[fruit.length-1]);

for(let i = 0; i<fruit.length-1; i++)
{
    console.log(fruit[i].toLocaleUpperCase());
}

let fruit2 = [];

for(let i = 0; i<fruit.length-1; i++)
{
    fruit2.push(fruit[i].toLocaleLowerCase())
    console.log(fruit2[i]);
}