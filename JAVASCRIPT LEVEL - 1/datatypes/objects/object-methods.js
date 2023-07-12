const product = {
    id : 1,
    name: 'marker',
    price:  10,
    price:  10
}

// console.log(product)   // { id: 1, name: 'marker', price: 10 }
// Object.freeze(product)
// product.price = 15
// product.rating = 4.3
// console.log(product)   // { id: 1, name: 'marker', price: 10 }
// console.log(Object.isFrozen(product))  // true

// Object.seal(product)
// product.price = 16
// product.rate = 4
// console.log(product)  // { id: 1, name: 'marker', price: 16 }

const item = { seller: 'amazon'}
Object.assign(item, product)
console.log(item)  // { seller: 'amazon', id: 1, name: 'marker', price: 10 }

const result = Object.entries(item)
console.log(result)  // [ [ 'seller', 'amazon' ], [ 'id', 1 ],[ 'name', 'marker' ], [ 'price', 10 ] ]

console.log(Object.keys(item))   //  [ 'seller', 'id', 'name', 'price' ]
console.log(Object.values(item))  // [ 'amazon', 1, 'marker', 10 ]

console.log(item.hasOwnProperty('color'))  // false
console.log(item.hasOwnProperty('price'))  // true

console.log(item.length)  // undefined