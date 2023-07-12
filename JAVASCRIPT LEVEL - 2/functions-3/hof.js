const numbers = [10, 20, 30, 40, 50]

// numbers.forEach(function(ele){
//     console.log(ele)
// })

// myForEach
function myForEach(arr, callback){   // Higher Order Function
     for(let i = 0; i < arr.length; i++){
         callback(arr[i])
     }
}

myForEach(numbers, function(n){  // Callback
    console.log(n)
})

// myFilter
function myFilter(arr, callback){
    const result = []
    for(let i = 0; i < arr.length; i++ ){
        const bool = callback(arr[i])
        if (bool){
            result.push(arr[i])
        }
    }
    return result
}

const result = myFilter(numbers, function(n){
    return n % 2 == 0
})

console.log('Even numbers',result)