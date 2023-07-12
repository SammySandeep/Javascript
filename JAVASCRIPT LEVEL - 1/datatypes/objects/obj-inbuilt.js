const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 22
}

console.log(Object.keys(person))  // [ 'firstName', 'lastName', 'age' ]
console.log(Object.values(person))  // [ 'john', 'doe', 22 ]

console.log(Object.keys(person).includes('firstName'))  // true
console.log(Object.keys(person).includes('city'))  // false

console.log(Object.values(person).includes('john'))   // true
console.log(Object.values(person).includes('23'))   // false