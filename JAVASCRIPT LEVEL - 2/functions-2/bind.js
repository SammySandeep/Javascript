const person1 = { firstName: 'steve', lastName: 'adams'}

function greet(msg, sign){
    console.log(this)
    console.log(`${msg}, ${sign} ${this.firstName}`)
}


const newGreet = greet.bind(person1, 'Hi', 'Mr')
newGreet()

/*
{ firstName: 'steve', lastName: 'adams' }
Hi,Mr steve
*/

console.log(typeof greet)   //  function