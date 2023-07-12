// Convert an array of strings into an object
function buildObj(arr){
    const result = {}
    for(i = 0; i < arr.length; i++){
        result[arr[i]] = arr[i].length
    }
    return result
}

console.log(buildObj(['apple','mango','kiwi']))   //  { apple: 5, mango: 5, kiwi: 4 }