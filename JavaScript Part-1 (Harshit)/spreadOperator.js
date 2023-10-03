// spread operator

const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1, ...array2, 89];
// const newArray = [..."abc"];
// const newArray = [..."123456"];
// console.log(newArray);

const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value59"
};
// console.log(obj1);

const obj2 = {
    key1 : "binod",
    key3: "value1",
    key4: "value2"
};
// console.log(obj1);

const newObject = {...obj1, ...obj2, key6:"value6"};
console.log(newObject);

const newObj = {..."abc"};
console.log(newObj);
