const person1 = { firstName: 'steve', lastName: 'adams'}

function greet(msg, sign){
    console.log(this)
    console.log(`${msg}, ${sign} ${this.firstName}`)
}

// greet('hi')
/*
Object [global]
hi undefined
*/

greet.call(person1, 'Hi', 'Mr')

/*
{ firstName: 'steve', lastName: 'adams' }
Hi, Mr steve
*/