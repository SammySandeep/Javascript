/* Write a function called keys, which accepts an object and returns an array of all of the keys in the object. Do not use the built
in Object.keys() function!
*/

const obj = {d: 1, c: 2, t: 3}
const obj2 = { first: 'Matt', last: 'Lane' }
const obj3 = {}

function keys(obj){
    result = []
    for(key in obj){
        result.push(key)
    }
    return result
}

console.log(keys(obj))   //  [ 'd', 'c', 't' ]
console.log(keys(obj2))   // [ 'first', 'last' ]
console.log(keys(obj3))    // []