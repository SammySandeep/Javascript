let a = [10]
// DEEP COPY METHOD 1
// let c = a.slice(0)

// DEEP COPY METHOD 2
// let c = [].concat(a)

// DEEP COPY METHOD 3
let c = [...a]
console.log('a', a)    // a [ 10 ]
console.log('c', c)    // c [ 10 ]

a.push(20)
console.log('a', a)    //  a [ 10, 20 ]
console.log('c', c)    //  c [ 10 ]

c.push(30)
console.log('a', a)   //  a [ 10, 20 ]
console.log('c', c)   //  c [ 10, 30 ]