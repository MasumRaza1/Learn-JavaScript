// Every Method
const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>number%2);
console.log(ans);

const userCart = [
    {productId: 1, productName:"Mobile", price:12000},
    {productId: 2, productName:"Laptop", price:22000},
    {productId: 3, productName:"tv", price:15000},
]
// check every product less than 30k
const myCart = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(myCart);