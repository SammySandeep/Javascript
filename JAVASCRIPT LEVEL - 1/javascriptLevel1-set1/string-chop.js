// Write a javascript function to chop a string into chunks of a given length

function stringChop(str,num){
    const result = []
    for(let i = 0; i < str.length; i += num){
        chop = str.slice(i, i+num)
        result.push(chop)
    }
    return result
}

console.log(stringChop('resource',2))   // [ 're', 'so', 'ur', 'ce' ]
console.log(stringChop('dcresource',3))   //  [ 'dcr', 'eso', 'urc', 'e' ]