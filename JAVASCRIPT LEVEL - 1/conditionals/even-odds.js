const evens = []
const odds = []
function evenOdds(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            evens.push(arr[i])
        }
         else{
             odds.push(arr[i])
         }   
    }
    return [evens, odds]
}

console.log(evenOdds([1,2,3,4,5,6]))   // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]