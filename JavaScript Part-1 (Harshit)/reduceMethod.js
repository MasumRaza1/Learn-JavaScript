// reduce method
const numbers = [1,2,3,4,5];

// aim : sum of all the number in array 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);

// accumulator, customElements, return
// 1              2              sum 3
// 3              3                6
// 6              4                10
// 10             5                15


// jaise me flipkart me add to cart karete to niche mera total Sum aa jata hai
const userCart = [
    {productId: 1, productName:"Mobile", price:12000},
    {productId: 2, productName:"Laptop", price:22000},
    {productId: 3, productName:"tv", price:15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
          return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);
//                 {12000, 22000, 15000}
// totalPrice         currentValue           return
// 0                   12000                  12000
// 12000               22000                  34000
// 34000               15000                  49000
