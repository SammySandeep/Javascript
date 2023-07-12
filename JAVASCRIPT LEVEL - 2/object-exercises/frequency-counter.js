// Important
// Write a javascript program to find the occurances of characters in the given string

function frequency (str){
    const result = {}
    for(const char of str){
       if(result.hasOwnProperty(char)) {
           result[char] = result[char] + 1
       } else {
           result[char] = 1
       }
    }
    return result
}

console.log(frequency('dctdcd'))   //  { d: 3, c: 2, t: 1 }
console.log(frequency('aba'))   //  { a: 2, b: 1 }