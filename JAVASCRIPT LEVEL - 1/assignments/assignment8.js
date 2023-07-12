// Find keys of an object

function keys(obj){
    result = []
    for(const key in obj){
       result.push(key)
    }
    return result
}

console.log(keys({a: 1, b: 2, c: 3}))
console.log(keys({first: 'Matt', last: 'Lane'}))