// Write a javascript function to generate an array between two integers of 1 step length

function rangeBetween(num1,num2){
    const result = []
    for(let i = num1; i <= num2; i++){
       result.push(i)
    }
    return result
}


console.log(rangeBetween(4,7))    //  [ 4, 5, 6, 7 ]
console.log(rangeBetween(-4,7))   //   [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7 ]