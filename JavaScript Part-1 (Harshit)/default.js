// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){ //before ES6 we use
//         b=7;
//     }
//     return a+b;
// }
function addTwo(a,b=11){
   
    return a+b;
}
const ans = addTwo(4);
console.log(ans);