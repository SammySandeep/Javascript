const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 22
}

for(const key in person){
    console.log(key, person[key])
}

// for(attribute in person){
//     console.log(attribute, person[attribute])
// }

/*
firstName john
lastName doe
age 22
*/