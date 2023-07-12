// Check all numbers in array is greater than 100

const prices = [125,175,200,250]

const result = prices.every(function(ele){
    return ele > 100
})

console.log(result)   // true

function abovethreshold(currentValue){
     return currentValue > 90
}

console.log(prices.every(abovethreshold))  // true