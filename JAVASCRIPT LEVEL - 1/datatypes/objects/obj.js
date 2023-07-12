
//  key || property || label

const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 22
}

console.log(person)   // { firstName: 'john', lastName: 'doe', age: 22 }
console.log(person.firstName)  // john
console.log(person['firstName'])   // john
console.log(person.city)  // undefined
console.log(typeof person)  // object

const prices = [10,20,30]  
console.log(typeof prices)   // object

console.log(Array.isArray(prices))  // true
console.log(Array.isArray(person))  // false