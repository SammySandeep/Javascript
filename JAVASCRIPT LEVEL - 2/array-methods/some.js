// Check if the array contains an even number

const numbers =[5,15,20,25,35]

const result = numbers.some(function(ele){
    return ele % 2 == 0
})

console.log(result)  // true