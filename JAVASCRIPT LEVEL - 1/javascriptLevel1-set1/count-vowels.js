/*
Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string
*/

function countVowels(str){
     const vowels = ['a','e','i','o','u']
     let count = 0
     for(let i = 0; i < str.length; i++){
         if(vowels.includes(str[i].toLowerCase())){
             count += 1
         }
     }
     return count
}


console.log(countVowels('ThE quick brown fox'))  // 5
console.log(countVowels('javascript is AwesOme'))   // 8