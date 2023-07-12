/* Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of 
the array
*/

function last(arr, num){
    let result 
    if (num == undefined){
        result = arr[arr.length-1]    
    }
     else {
        result = arr.slice(-num)
    }
    return result
 }


console.log(last([7,9,0,-2]))  // -2
console.log(last([7,9,0,-2],3))   //  [ 9, 0, -2 ]
console.log(last([7,9,0,-2],6))   //  [ 7, 9, 0, -2 ]