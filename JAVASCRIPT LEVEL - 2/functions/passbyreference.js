const person = {name: 'Sam', city: 'Hubli'}

function changeCity(person){
    person.city = 'Mysore'
    console.log(person)  // { name: 'Sam', city: 'Mysore' }
}
changeCity(person)
console.log(person)  //  { name: 'Sam', city: 'Mysore' }