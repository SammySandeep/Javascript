const numbers = [10,15,20,25]

// add 2 to every element in array
const result = numbers.map(function(ele){
    return ele + 2
})

console.log('add 2',result)   //  add 2 [ 12, 17, 22, 27 ]

// add 2 to an even number and 3 to an odd numbers
const result2 = numbers.map(function(ele){
    if ( ele % 2 === 0 ){
        return ele + 2
    } else {
        return ele + 3
    }
})

console.log('2 even 3 odd',result2)  //  2 even 3 odd [ 12, 18, 22, 28 ]

// add 5 only if number is even
const result3 = numbers.map(function(ele){
    if (ele % 2 === 0){
        return ele + 5
    } else {
        return ele
    }
})

console.log('5 if even',result3)  //  5 if even [ 15, 15, 25, 25 ]

// return an array of objects, where each object will contain key to the name of the fruit and it's value the length
const fruits = ['apple','mango','kiwi']

const result4 = fruits.map(function(ele){
    return { [ele]: ele.length}
})

console.log('arr str 2 arr obj',result4)  // arr str 2 arr obj [ { apple: 5 }, { mango: 5 }, { kiwi: 4 } ]