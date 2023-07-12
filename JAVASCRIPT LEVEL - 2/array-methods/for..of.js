// es6

let products = ['pen','pencil','eraser']
for ( let product of products){
     console.log(product)
}
/*
pen
pencil
eraser
*/

for(let [index, product] of products.entries()){
     console.log(index, product)
}

/*
0 pen
1 pencil
2 eraser
*/

let name = 'steve'
for ( let result of name){
     console.log(result)
}

/*
s
t
e
v
e
*/