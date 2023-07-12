// Write a javascript function to get a random item from an array

function randomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]   
}


console.log(randomElement([10,20,30,40]))
console.log(randomElement(['a','b','c']))