/* String end with suffix

Write a javascript function check if a string ends with the specified suffix.
*/

function string_endsWith(str,word){
        let  result = false
        const arr = str.split(' ')
        if (arr[arr.length-1] === word){
            result = true
        } 
    return result
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'))   //  true
console.log(string_endsWith('JS PHP PYTHON',' '))     //  false
