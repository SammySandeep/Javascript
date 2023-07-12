// Delete Property

const student = {
    name: 'David',
    sclass: 'V11',
    rollno: 12
}
function deleteProperty(object, property){
    if(object.hasOwnProperty(property)){
        delete object.property
        return student
    } else {
        return `${property} is not present in the object`
    }
}

console.log(deleteProperty(student, 'sclass'))
console.log(deleteProperty(student, 'age'))