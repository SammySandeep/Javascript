// find the first even number greater than 20
/*
const numbers = [10,15,21,24,30,40]

const result = numbers.find(function(ele){
    return ele > 20 && ele % 2 == 0
})

console.log(result)
*/

// check if an element is present in an array
const numbers = [10,15,21,24,30,40]
console.log(numbers.includes(30))   // true
console.log(numbers.indexOf(30) >= 0)   // true


// find element based on property
const users = [ { id: 1, name: 'steve'}, { id: 2, name: 'john'}]
const result = users.find(function(ele){
    return ele.id === 2
})

console.log(result)   //  { id: 2, name: 'john' }