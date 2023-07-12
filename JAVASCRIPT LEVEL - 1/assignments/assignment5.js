// Find the first n elements of the array

function first(arr,num = 0){
    result = []
    if(num == 0){
        return arr[0]
    } else if(num > arr.length) {
        for (i=0; i<arr.length; i++){
          result.push(arr[i])
        }    
        return result
    } else if(num < arr.length) {
        for (i=0; i<num; i++){
          result.push(arr[i])
        }    
        return result
    } else {
        return result
    }
}

console.log(first([7,9,0,-2]))
console.log(first([],3))
console.log(first([7,9,0,-2],3))
console.log(first([7,9,0,-2],6))