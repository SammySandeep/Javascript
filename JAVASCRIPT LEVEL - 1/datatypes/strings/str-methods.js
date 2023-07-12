const password = 'secret123'

// property - value
console.log(password.length) // 9
console.log(password.length > 8 && password.length < 123) // true

const user = "sandeep"
//methods - behaviour
console.log(user.toUpperCase()) // SANDEEP
console.log(user) //sandeep
console.log('JOHN'.toLowerCase())  // john

const word = 'javascript'
console.log(word.indexOf('a'))  // 1
console.log(word.indexOf('x'))  // -1
console.log(word.lastIndexOf('a')) // 3
console.log(word.lastIndexOf('z')) // -1
console.log(word.indexOf('script')) // 4
console.log(word.includes('a')) // true
console.log(word.includes('z')) // false

/*
j a v a s c r i p t 
0 1 2 3 4 5 6 7 8 9
*/

console.log(word.slice(2,5))  // 'vas'
console.log(word.slice(5))  // 'cript'
console.log(word.substr(2,5))  // 'vascr'

//str to array
const str = 'js , react , node , express , mongo'
console.log(str.split(' , '))  // [ 'js', 'react', 'node', 'express', 'mongo' ]

const map = 'bangalore - mysore - cochin'
console.log(map.split(' - '))  // [ 'bangalore', 'mysore', 'cochin' ]


const originalString = " JavaScript is a programming language . I like javascript "
console.log(originalString.replace(/javascript/gi,"java"))  // java is a programming language . I like java
