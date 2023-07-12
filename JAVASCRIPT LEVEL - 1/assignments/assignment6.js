// Even and odd

function evenOdd(arr){
    even = []
    odd = []
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return [even, odd]
}

console.log(evenOdd([1,2,3,4,5,6]))
console.log(evenOdd([]))