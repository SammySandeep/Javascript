/* Given a string, capitalize the letters that occupy even indexes and odd indexes seperately, and return as shown below. Index 0 will
be considered even.

The input will be a lowercase string with no spaces. 
*/

function capitalize(str){
    let evenUpper = ''
    let oddUpper = ''
    for(let i = 0; i < str.length; i++){
       if (i % 2 == 0){
            evenUpper = evenUpper.concat(str[i].toUpperCase())
            oddUpper = oddUpper.concat(str[i])
        } else {
            oddUpper = oddUpper.concat(str[i].toUpperCase())
            evenUpper = evenUpper.concat(str[i])
        }
    }
    return [evenUpper, oddUpper]
}


console.log(capitalize('abcdef'))   // [ 'AbCdEf', 'aBcDeF' ]
console.log(capitalize('dct'))   // [ 'DcT', 'dCt' ]