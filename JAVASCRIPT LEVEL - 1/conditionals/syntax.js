/*

if statement

if(condition){
    statement
}

-------

if else statement

if(condition){
    statement1
} else {
    statement2
}

--------

if else if else statement

if(condition1){
    statement1
} else if(condition2) {
    statement2
} else if(condition3) {
    statement3
}  else {
    statement4
}
*/

const userPassword = 'secret123'
if(userPassword.length >= 8 && userPassword.length <= 125){
    console.log('proceed forward')
} else {
    console.log('password length is too short (8 - 125)')
}

const randomNumber = 35 , userGuess = 70
if(userGuess > randomNumber){
    console.log('your guess is too high')
} else if(userGuess < randomNumber){
    console.log('your guess is low')
} else if(userGuess == randomNumber){
    console.log("your guessed is right")
} else{
    console.log('invalid input')
}


