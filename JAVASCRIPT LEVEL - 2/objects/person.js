const person = {
    name: 'Robin',
    city: 'Bangalore',
    profession: 'Software Developer',
    greet: function(){
        return 'HI There'
    },
    code: function(){
        // return person.name + ' is currently coding'
        return this.name + ' is cuurently coding'
    }
}

console.log(person.name)   //  'Robin'
console.log(person.city)   //  'Bangalore'
console.log(person.profession)   //  'Software Developer'
console.log(person.greet)   //  [Function: greet]
console.log(person.greet())   //  'HI There'
console.log(person.code())   //  'Currently coding'