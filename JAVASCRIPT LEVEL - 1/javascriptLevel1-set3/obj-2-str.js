/* Write a function called stringFromObject that generates a string from an object's key/value pairs

The format should be "key = value, key = value"

Each key/value pair should be seperated by a comma and space except for the last pair
*/

function stringFromObject(obj){
    const result = []
    for(let key in obj){
        const str = `${key} = ${obj[key]}`
        result.push(str)
    }
    return result.join(',')
}


console.log(stringFromObject({ a: 1, b: '2' }))   // 'a = 1, b = 2'
console.log(stringFromObject({ name: 'Steve', job: 'Developer', isManager: false }))  // 'name = Steve, job = Developer, isManager = false'
console.log(stringFromObject({ }))  // ''