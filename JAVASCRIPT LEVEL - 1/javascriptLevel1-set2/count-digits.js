// Write a Javascript function to count the digits of an integer

function countDigits(num){
    n = String(num)   // n.toString()
    let result = 0
    for (i = 0; i < n.length; i++){
        result = result + parseInt(n[i])    // ParseInt is to convert string into number
    }
    return result
}


console.log(countDigits(1947))   // 21
console.log(countDigits(800900))   // 17