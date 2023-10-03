// Maps
// map is iterable

// store data in order fashion

// store key value pair (like object)
// duplicate keys are not allowed like object


// different between map and objects

// object can only have string or symbol
// as key

// in map you can use anything as key
// like array, number, string


// object literals
// key -> string
// key -> symbol

// const person = {
//     firstName: "Masum",
//     age : 20,
//     1: "one"
// }
// for(let key in person)
// {
//     console.log(typeof key);
// }

const person = new Map();
person.set('firstName', 'Masum');
person.set('age', 20);
person.set(1, '1');
person.set([1,2,3,4], 'array key hai');
console.log(person);
console.log(person.get('age'));

for(let key of person.keys())
{
    console.log(key, typeof(key));
}