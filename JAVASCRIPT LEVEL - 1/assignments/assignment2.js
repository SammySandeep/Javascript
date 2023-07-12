// Remove Array Element

function removeArrayElements(arr,num){
    if (arr.includes(num)){
       const index = arr.indexOf(num)
       arr.splice(index,1)
       return arr
    } else {
        return `${num} is not present in the array`
    }
}

console.log(removeArrayElements([2,5,9,6],5))
console.log(removeArrayElements([2,5,9,6],15))