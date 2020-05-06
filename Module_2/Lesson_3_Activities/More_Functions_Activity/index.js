

function sum(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const arr1 = [1,2,3,4,5,6,7,8,9,10] //55
const arr2 = [100,200,200,500] //1000
const arr3 = [-5,-4,2,-1,0,9] //1
const arr4 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10] //-55
const arr5 = [0,1,-1,0] //0

console.log(sum(arr1));
console.log(sum(arr2));
console.log(sum(arr3));
console.log(sum(arr4));
console.log(sum(arr5));