// Sort Method

const usersNames = ['apushapa','Masum', 'Gopal', 'Binod'];
usersNames.sort();
console.log(usersNames);

// sort 
// 5,3,1,9 
// 1,3,5,9

// sort function change my original array
// but reduce, map, filter wo original array ko change nhi karta hai
// naya array bna kr deta hai

const numbers = [5,9,1200,400, 300]; // [1200, 300, 400, 5, 9]
numbers.sort();
console.log(numbers);

// notes 
// [5,9,1200,400, 300]
// sort()
// [1200, 300, 400, 5, 9]
// javascript isko numbers smjh kr sort nhi kr rha 
// isko string smjh kr kr rha hai
// on the basis of ASCII value


const number = [5,9,1200,400, 300]; 
number.sort((a,b)=>{
    return a-b;
});
// number.sort((a,b)=>a-b);
console.log(number);

// accending order a-b
// decending order b-a

// flipkart
// sort price high to low or low to high 

const products = [
    {producy: 1, productName: "p1", price: 300},
    {producy: 2, productName: "p2", price: 3200},
    {producy: 3, productName: "p3", price: 600},
    {producy: 4, productName: "p4", price: 900},
]

// low to high
const lowTohigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
});
console.log(lowTohigh);

//  high to low
const highTolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});
console.log(highTolow);