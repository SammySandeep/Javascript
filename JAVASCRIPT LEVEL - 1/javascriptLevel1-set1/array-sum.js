// Given an array of numbers, find the sum of elements

function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
          sum += arr[i]
    }
    return sum
}

console.log(sumArray([10,20,30]))
console.log(sumArray([]))