// Write a javascript function to count the occurrence of a sub string in a string

function count(str,word){
    let count = 0
    str1 = str.split(' ')
    for(let i = 0; i < str1.length; i++){
        if(str1[i].toLowerCase() === word.toLowerCase()){
            count += 1
        }
    }
    return count
}


console.log(count('The quick brown fox jumps over the lazy dog','the'))  // 2
console.log(count('The quick brown fox jumps over the lazy dog','fox'))   // 1