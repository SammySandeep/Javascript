var numbers = [10,20,30,40,50]
var v1 = numbers[0]
var v2 = numbers[1]
console.log(v1, v2)  // 10 20

// array destructuring - es6
const users = ['john','doe','jack','smith','charlie']
const[u1,u2] = users
console.log(u1, u2)  // john doe
const[,,,u3] = users
console.log(u3)  // smith

const u4 = users[4]
console.log(u4)  //  charlie

console.log(numbers.indexOf(60))  // -1