const person = {
    name: 'steve'
}
// DEEP COPY METHOD 1
// const student = Object.assign({}, person)

// DEEP COPY METHOD 2
const student = {...person}

console.log('person', person)    //  person { name: 'steve' }
console.log('student', student)   // student { name: 'steve' }

person.name = 'johnson'
console.log('person', person)   //  person { name: 'johnson' }
console.log('student', student)   //  student { name: 'steve' }

student.name = 'jack'
console.log('person', person)   //  person { name: 'johnson' }
console.log('student', student)   //  student { name: 'jack' }