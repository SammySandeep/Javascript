/* You are given two strings S! and S2 . You need to find weights of both strings and compare them. The weight of a string can be 
obtained by adding individual weights of the characters that make the string. The weight of the individual characters are the position 
on which they occur in the english alphabets; eg a has a weight 1, z has a weight 26

Output:
return 1 if the weight of the first string is greater , return 2 if the weight of the second string is greater, return equal if the
weights are equal 

*/

const alphabets = 'abcdefghijklmnopqrstuvwxyz'

function strWeight(str1,str2){
    let str1Weight = 0
    let str2Weight = 0
    for(let i = 0; i < str1.length; i++){
         str1Weight += alphabets.indexOf(str1[i]) + 1
    }
    for(let j = 0; j < str2.length; j++){
        str2Weight += alphabets.indexOf(str2[j]) + 1
    }
    if (str1Weight > str2Weight){
        return 1
    } else if(str1Weight < str2Weight){
        return 2
    } else {
        return 'equal'
    }

}

console.log(strWeight('mansuper','superman'))  // equal
console.log(strWeight('batman','superman'))   // 2
console.log(strWeight('batman','manbat'))   // equal