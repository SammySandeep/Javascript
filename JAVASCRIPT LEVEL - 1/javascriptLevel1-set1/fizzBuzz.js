/*
Write a Javascript Program which iterates the integers from 0 to 100. But for multiplies of three print "FIzz" instead of the number
and for the multiplies of five print "Buzz". For numbers which are multiplies of both three and five print "FizzBuzz"
*/

function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if((i % 3 == 0) && (i % 5 == 0 )){
            console.log('FizzBuzz')
        } else if(i%3 == 0){
            console.log('Fizz')
        } else if(i%5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()