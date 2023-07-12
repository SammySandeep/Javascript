// Write a JavaScript function to get the first element of the array. Passing a parameter 'n' will return the first n elements of the array

function first(arr,n){
    let result 
    if (n === undefined){
        result = arr[0]
    } else if (n < 0){
        result = arr.slice(0)
    } else{
        result = arr.slice(0, n)
    }
    return result
 }


console.log(first([7,9,0,-2]))  // 7
console.log(first([],3))   // []
console.log(first([7,9,0,-2],3))   // [ 7, 9, 0 ]
console.log(first([7,9,0,-2],6))   // [ 7, 9, 0, -2 ]
console.log(first([7,9,0,-2],-3))  // [ 7, 9, 0, -2 ]