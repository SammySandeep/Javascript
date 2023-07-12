const fruits = ['apple','mango','kiwi','banana']

// remove elements from index
console.log(fruits)  //[ 'apple', 'mango', 'kiwi', 'banana' ]
fruits.splice(2, 1)
console.log(fruits)   // [ 'apple', 'mango', 'banana' ]
fruits.splice(1, 2)
console.log(fruits)  // apple
console.log(fruits.splice(0, 1))  // [ 'apple' ]

// add elements at specific index
const products = ['marker','scale','board','rack']
console.log(products)  // [ 'marker', 'scale', 'board', 'rack' ]
products.splice(2, 0, 'pencil')
console.log(products)   // [ 'marker', 'scale', 'pencil', 'board', 'rack' ]