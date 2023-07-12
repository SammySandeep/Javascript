function loop(x){
    if(x >= 10){
        return
    } else {
        console.log('Hii')
        loop(x + 1)
    }
}
loop(0)

/*
Hii
HII
.
.
Hii
*/

function factorial(n){
    if((n === 0) || (n === 1)){
        return 1
    } else {
        return(n * factorial(n - 1))
    }
}

console.log(factorial(3))  // 6