// Say Again

function sayAgain(word, num){
     result = ''
     for(i=0; i<num; i++){
         result += word
     }
     return result
}

console.log(sayAgain("hi",4))
console.log(sayAgain("hi",0))
console.log(sayAgain("ok",6))
