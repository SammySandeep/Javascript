const prices = [10,20,40,50,100]

const result = prices.find(function(ele){
    return ele > 25
})

console.log(result)   // 40


// Using if statement

const result1 = prices.find(function(ele){
    if (ele > 45){
        return true
    }
})

console.log(result1)  // 50