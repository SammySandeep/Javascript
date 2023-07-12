let a = [10]
let b = ['apple']
console.log('a', a)    //  a [ 10 ]
console.log('b', b)    //  b [ 'apple' ]

let c = a
console.log('a', a)    //  a [ 10 ]
console.log('c', c)    //  c [ 10 ]

a.push(20)
console.log('a', a)   //  a [ 10, 20 ]
console.log('c', c)   //  c [ 10, 20 ]

c.push(30)
console.log('a', a)    //  a [ 10, 20, 30 ]
console.log('c', c)   //  c [ 10, 20, 30 ]