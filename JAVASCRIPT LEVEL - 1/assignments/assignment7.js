// String from Object

function stringFromObject(obj){
    result = ''
    for(const key in obj){
        result += `${key} = ${obj[key]} ,`
    }
    return result.slice(0,result.length-1)
}

console.log(stringFromObject({a: 1, b: '2'}))
console.log(stringFromObject({name: 'Elie', job: 'Instructor', isCatOwner: false}))