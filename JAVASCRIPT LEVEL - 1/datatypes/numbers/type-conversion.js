// str -> num
console.log(typeof '14')  // string

console.log(parseInt('14'))  // 14
console.log(typeof parseInt('14'))  // number

console.log(parseInt(25.8))  // 25
console.log(parseFloat(25.8))  // 25.8
console.log(typeof parseFloat(25.8))  // number
console.log(parseFloat('14'))  // 14

console.log(Number('14'))  // 14
console.log(Number('25.8'))  // 25.8

console.log(parseInt('10') + 15)  // 25

// num -> str
const n = 10
console.log(n.toString()) // '10'

console.log(String(10))  // '10'
console.log(String(22.5)) // '22.5'

console.log(' ' + 10 )  // '10'

console.log(10 / '2') // 5