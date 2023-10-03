const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value"
// }
// agar key obj2 me nhi hai to wo khud 
// obj1 jayega aur wha dekhe hai ki nhi

// console.log(obj2.key1);

const obj2 = Object.create(obj1);
// there one more way to create empty object
obj2.key3 = "Value3";
obj2.key2 = "unique";
console.log(obj2.key3);
console.log(obj2);
console.log(obj2.__proto__); // obj1 wala show hoga
// this is happening


// --proto-- and prototype is different
// official ecmascript
//[[prototype]] or  --proto-- same