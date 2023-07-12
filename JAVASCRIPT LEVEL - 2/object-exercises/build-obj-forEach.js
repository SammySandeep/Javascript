// Convert an array of strings into an object
function buildObj(arr){
    const result = {}
    arr.forEach(function(ele){
        result[ele] = ele.length
    })
        
    return result
}

console.log(buildObj(['apple','mango','kiwi']))   //  { apple: 5, mango: 5, kiwi: 4 }