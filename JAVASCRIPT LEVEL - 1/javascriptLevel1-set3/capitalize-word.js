// Write a javascript fucntion to capitalize each word in the string

function capitalizeWords(str){
    const result = []
    const words = str.split(' ')
    for(let i = 0; i < words.length; i++){
        const newStr = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        result.push(newStr)
    }
    return result.join(' ')
}

console.log(capitalizeWords('js react node'))