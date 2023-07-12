const products = [
    { id: 1, name: 'marker', price: 15},
    { id: 2, name: 'scale', price: 10},
    { id: 3, name: 'board', price: 100}
]

const result = products.find(function(product){
    return product.id == 1
})
console.log(result)  //  { id: 1, name: 'marker', price: 15 }

const result2 = products.find((product) => {
    return product.id == 2
})
console.log(result2)   //  { id: 2, name: 'scale', price: 10 }

const result3 = products.find(product => product.id == 3)
console.log(result3)  //  { id: 3, name: 'board', price: 100 }