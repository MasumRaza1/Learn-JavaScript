// rest 'parameter'

// function myFun(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);
// }
// myFun(1,3,4,6,5);

function addAll(...numbers){
    let total = 0;

    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5);
console.log(ans);