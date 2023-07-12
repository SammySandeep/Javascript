// Write a javascript function to repeat a string a specified times.

function repeatString(str, num){
    let result = ''
    for (let i = 0; i < num; i++){
        result = result.concat(str)
    }
    return result
}



console.log(repeatString('a',4))   // 'aaaa'
console.log(repeatString('dct',3))    // 'dctdctdct'