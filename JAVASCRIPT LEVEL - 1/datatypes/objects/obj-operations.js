const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 22
}

//  read
console.log(person.firstName)
console.log(person)

// create //  add property
person.city = 'bangalore'
person['country'] = 'INDIA'
console.log(person)  // { firstName: 'john', lastName: 'doe', age: 22, city: 'bangalore', country: 'INDIA'}

// update
person.age = 25
person['firstName'] = 'charlie'
console.log(person)  // // { firstName: 'charlie', lastName: 'doe', age: 25, city: 'bangalore', country: 'INDIA'}


// delete
delete person.lastName
console.log(person)  // { firstName: 'charlie', age: 25, city: 'bangalore', country: 'INDIA' }