/* Write a function called swapKeyAndValue, which accepts an object and a key.

The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged
*/

const instructor = { name: 'Elie', job: 'Instructor'}

function swapKeyAndValue(obj, str){
    const result = {}
    for(let key in obj){
        if ( key === str){
            result[obj[key]] = str
        } else {
           result[key] = obj[key]
        }
    }
    return result
}


console.log(swapKeyAndValue(instructor, 'name'))   // { Elie: 'name', job: 'Instructor' }
console.log(swapKeyAndValue(instructor, 'job'))   // { name: 'Elie', Instructor: 'job' }