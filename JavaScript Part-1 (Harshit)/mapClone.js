// Clone using object assign

const obj = {
    key1: "value1",
    key2: "value"
}
// const obj2 = obj;
// const obj2 = Object.assign({}, obj);
const obj2 = {...obj};
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


