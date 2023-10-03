// Some Method

const numbers = [3,5,8,9];

// kya ek bhi number aisa hai jo even hai
// true

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

const userCart = [
    {productId: 1, productName:"Mobile", price:12000},
    {productId: 2, productName:"Laptop", price:22000},
    {productId: 3, productName:"tv", price:15000},
    {productId: 3, productName:"tv", price:115000},
]

const myCart = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(myCart);