// Write a function to display the powers of the given super hero

const superHeroes = [
     {
         "name": "Molecule Man",
         "age": 29,
         "secretIdentity": "Dan Jukes",
         "powers":[
             "Radiation resistance",
             "Turning tiny",
             "Radiation blast"
         ]
     },
     {
         "name": "Madame Uppercut",
         "age": 39,
         "secretIdentity": "Jane Wilson",
         "powers":[
             "Million tonne punch",
             "Damage resistance",
             "Superhuman reflexes"
         ]
     }
]

function superPower(object,val){
    let result = ''
    for(i = 0; i < object.length; i++){
        if( object[i]['name'] === val ){
            result = object[i]['powers'].join(',')
        } 
    }
    return result

}

console.log(superPower(superHeroes,'Molecule Man'))   // 'Radiation resistance,Turning tiny,Radiation blast'
console.log(superPower(superHeroes,'Madame Uppercut'))   // 'Million tonne punch,Damage resistance,Superhuman reflexes'
console.log(superPower(superHeroes,'Molecule Mqqan'))    //  ''