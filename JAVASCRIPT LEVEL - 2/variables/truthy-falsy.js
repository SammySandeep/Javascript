// falsy values - 0, undefined, null, NaN, '', false
// truthy values - values that are not falsy are truthy 

console.log(0, Boolean(0))   //  false
console.log(undefined, Boolean(undefined))   //  false
console.log(null, Boolean(null))   //  false
console.log(NaN, Boolean(NaN))   //  false
console.log('', Boolean(''))   //  false
console.log(false, Boolean(false))   //  false


console.log(1, Boolean(1))   //  true
console.log(-1, Boolean(-1))   //  true
console.log('dct', Boolean('dct'))   //  true
console.log([], Boolean([]))   //  true
console.log({}, Boolean({}))   //  true
console.log(true, Boolean(true))   //  true

// conditionals or loops
if (NaN){
    console.log('true statements executed')
} else{
    console.log('false statements executed')
}

const person = {
    name: 's'
}
const m = {}.concat(person)
console.log(m)