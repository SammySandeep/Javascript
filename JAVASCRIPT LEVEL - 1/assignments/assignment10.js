// Swap case

function swapCase(str){
    result = ''
    for(i=0; i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    return result
}


console.log(swapCase('The Quick Brown Fox'))
console.log(swapCase('DcT AcaDemY'))