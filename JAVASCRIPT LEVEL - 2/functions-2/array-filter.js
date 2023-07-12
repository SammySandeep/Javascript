const products = [
    { id: 1, name: 'marker', price: 15},
    { id: 2, name: 'scale', price: 10},
    { id: 3, name: 'board', price: 100}
]

const result = products.filter(function(product){
    return product.price <= 20
})
console.log(result)

/*
[
  { id: 1, name: 'marker', price: 15 },
  { id: 2, name: 'scale', price: 10 }
]
*/

const result2 = products.filter((product) => {
    return product.price >= 12
})
console.log(result2)

/*
[
  { id: 1, name: 'marker', price: 15 },
  { id: 3, name: 'board', price: 100 }
]
*/

const result3 = products.filter(product => product.price >= 50)
console.log(result3)  // [ { id: 3, name: 'board', price: 100 } ]