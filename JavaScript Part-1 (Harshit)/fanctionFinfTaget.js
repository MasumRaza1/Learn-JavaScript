


function fintTarget(array, target)

    for(let i = 0; i<array.length; i++){
        if(array[i]==target){
            return i;
        }
    }

const array = [1,3,4,5,6];
console.log(fintTarget(array,5));
