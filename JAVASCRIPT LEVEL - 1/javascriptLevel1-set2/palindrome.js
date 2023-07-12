/*  Is it a Palindrome?

Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is palindrome(meaning that
the string is same forward as it is backward). Otherwise return the false .

NOTE - without using .reverse() method

*/

function palindrome(str){
    let result = ''
    for(i = str.length-1; i >= 0; i--){
        result = result.concat(str[i])
    }
    if (result === str){
        return true 
    } else {
        return false
    }
}


console.log(palindrome("madam"))  // true
console.log(palindrome("javascript"))   // false