// Write a Javascript function to find the highest value in an array. Note - Without using Math.max()

function max(arr){
    let result = arr[0]
    for(i = 0; i < arr.length; i++){
        if( arr[i] > result){
          result = arr[i]
        } 
    }
    return result
}

console.log(max([12,34,56,1]))   // 56
console.log(max([-12,-34,0,-56,-1]))   // 0

                  