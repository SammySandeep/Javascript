// es5
function greet(name){
    name = typeof name === 'undefined' ? 'anonymous' : name
    const message = `Hello ${name}`
    return message
}

console.log(greet())   // Hello anonymous
console.log(greet('Sandeep'))   // Hello Sandeep

// es6
function sayHello(name = 'anonymous'){
    const message = `Hello ${name}`
    return message
}

console.log(sayHello())   //  Hello anonymous
console.log(sayHello('Rahul'))  // Hello Rahul
