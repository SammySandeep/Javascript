const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 22
}

// for in
for(const key in person){
    console.log(key, person[key])
}

// firstName john
// lastName doe
// age 22