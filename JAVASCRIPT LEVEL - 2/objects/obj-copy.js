const person = {
    name: 'Marina',
    age: 29
}

let human = Object.assign({}, person, { age: 20})
console.log(person, human)   //  { name: 'Marina', age: 29 } { name: 'Marina', age: 20 }

let femme3 = JSON.parse(JSON.stringify(person))
femme3.name = 'Leslie'

console.log(person, femme3)  //  { name: 'Marina', age: 29 } { name: 'Leslie', age: 29 }