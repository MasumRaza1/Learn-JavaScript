// Optional Chaining

const user = {
    firstName: "Masum",
    // address:{houseNumber: '123'}
}
console.log(user.firstName);
console.log(user.address);
// console.log(user.address.houseNumber);
console.log(user?.address?.houseNumber);