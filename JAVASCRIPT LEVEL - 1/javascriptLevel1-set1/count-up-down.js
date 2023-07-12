/* Create a function that takes a number as an argumnet returns an array. The first element of the array should be 0, and then each
element should increase by 1 until it reaches the input number. Then each element should count back then 0
*/

function countUpThenDown(num){
    const result = []
    for(let i = 0; i <= num; i++ ){
        result.push(i)
    }
    for(let i = num-1; i >= 0; i--){
        result.push(i)
    }
    return result
}


console.log(countUpThenDown(2))   //  [ 0, 1, 2, 1, 0 ]
console.log(countUpThenDown(0))   // [ 0 ]