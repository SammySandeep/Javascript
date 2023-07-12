const numbers = [10,15,20,25,30]

const result = numbers.filter(function(ele){
    return ele % 2 === 0
})

console.log(result)   //  [ 10, 20, 30 ]


// Using if statement inside filter method

const result1 = numbers.filter(function(ele){
    if ( ele % 2 === 0){
        return true
    }
})

console.log(result1)