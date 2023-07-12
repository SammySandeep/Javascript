// find all the even numbers in array
const numbers = [10,15,20,25,35]

console.log('Using loop and condition')
const result = []
for(let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        result.push(numbers[i])
    }
}
console.log(result)

console.log('Using filter method')
const result2 = numbers.filter(function(ele){
    return ele % 2 === 0
})
console.log(result2)

/*
Using loop and condition
[ 10, 20 ]
Using filter method
[ 10, 20 ]
*/