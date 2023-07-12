// var customer = {
//     firstName: 'john',
//     lastName: 'smith',
//     email: 'john@gmail.com'
// }

// var firstName = customer.firstName
// var lastName = customer.lastName
// console.log(firstName, lastName)  // john smith

// Object destructuring - es6
const customer = {
    firstName: 'john',
    lastName: 'smith',
    email: 'john@gmail.com'
}

const{firstName,lastName,age} = customer
console.log(firstName,lastName,age)   // john smith undefined 