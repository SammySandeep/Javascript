function greet(name){
    const message = `Hello ${name}`
    return message
}

console.log(greet())  // Hello undefined
console.log(greet('Sandeep'))  // if return is not mentioned then output will be undefined