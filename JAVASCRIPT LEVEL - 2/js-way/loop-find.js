// find the first element greater than 18
const numbers = [10,15,20,30]

console.log('using loop and condition')
let result
for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 18){
        result = numbers[i]
        break
    }
}
console.log(result)

console.log('Using find method')
const result2 = numbers.find(function(ele){
    return ele > 18
})
console.log(result2)

/*
using loop and condition
20
Using find method
20
*/