// Sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([7,4,1,1,1,2,3,3,2]);
console.log(numbers);
// console.log(numbers[2]); // no index-based access

const string = new Set("absbdc");
// add (insert)
string.add('z');
console.log(string);
string.add(['items1','items2']);

// check element or not
if(string.has('a'))
{
    console.log('a is present');
}

// iterable
// for(let item of string)
// {
//     console.log(string);
// }

const myArray = [1,2,4,4,5,6,6,7];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);

// length 
let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length);