const fruits = ['mango','apple','banana']

/* 
['mango','apple','banana']
    0   ,   1    ,   2
*/
console.log(fruits)  //  ['mango', 'apple', 'banana' ]
console.log(fruits[0])  // mango
console.log(fruits[10])  // undefined

console.log(typeof fruits)  // object

// methods
fruits.push('kiwi')
console.log(fruits.push('water melon')) // 5
console.log(fruits)  // [ 'mango', 'apple', 'banana', 'kiwi','water melon' ]

fruits.pop()
console.log(fruits.pop())  // kiwi
console.log(fruits)   // [ 'mango', 'apple', 'banana' ]

fruits.unshift('water melon')
console.log(fruits.unshift('orange'))  // 5
console.log(fruits)  // [ 'orange', 'water melon', 'mango', 'apple', 'banana' ]

console.log(fruits.shift())  // orange
console.log(fruits)  //  'water melon', 'mango', 'apple', 'banana' ]

const numbers = [10,20]
numbers.push(30,40,50)
console.log(numbers)  // [ 10, 20, 30, 40, 50 ]

numbers.unshift(1,2,3)
console.log(numbers)   //  [ 1,  2,  3, 10, 20, 30, 40, 50 ]
 

console.log(numbers.reverse())  // [ 50, 40, 30, 20, 10, 3, 2, 1]
console.log(numbers)

console.log(fruits.sort())  // [ 'apple', 'banana', 'mango', 'water melon' ]
console.log(fruits)   // [ 'apple', 'banana', 'mango', 'water melon' ]


const players = ['sachin','virat','shewag']
console.log(players.indexOf('virat'))  // 1
console.log(players.indexOf('rahul'))  // -1
console.log(players.lastIndexOf('rahul'))  // -1

console.log(players.includes('sachin'))  // true 
console.log(players.includes('saurav'))  // false

// arr to str 
console.log(players.join(','))  // 'sachin,virat,shewag'

const set1 = [10,20], set2 = [30,40]
console.log(set1 + set2)   // '10,2030,40'

const result = set1.concat(set2)  // [ 10, 20, 30, 40 ]
console.log(result)
