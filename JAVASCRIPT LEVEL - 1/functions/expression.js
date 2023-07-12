const greet = function(name = 'anonymous'){
    const message = `Hi ${name}`
    return message
}

console.log(greet())   //  Hi anonymous
console.log(greet('Sandeep'))   //  Hi Sandeep