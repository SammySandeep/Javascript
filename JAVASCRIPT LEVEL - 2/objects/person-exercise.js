const person = {
    name: 'Rahul',
    city: 'Bangalore',
    profession: 'Senior Software Developer',
    details: function(){
        return `${this.name} is working as a ${this.profession} in ${this.city}`
    }
}

console.log(person.details())   //  Rahul is working as a Senior Software Developer in Bangalore