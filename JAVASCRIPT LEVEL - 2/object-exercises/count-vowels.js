// Important
// Write a javascript program to count the occurances of each of the vowel in the given string

function vowelOccurance(str){
    let result = { a: 0, e: 0, i: 0, o: 0, u: 0}
    str = str.toLowerCase()
    for(const char of str){
        if (result.hasOwnProperty(char)){
            result[char] = result[char] + 1
        }
    }
    return result

}

console.log(vowelOccurance('javascript'))   //   { a: 2, e: 0, i: 1, o: 0, u: 0 } 