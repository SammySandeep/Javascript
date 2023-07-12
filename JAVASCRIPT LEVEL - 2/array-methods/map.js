const tech = ['javascript','react','node','angular']

const result = tech.map(function(ele){
    return ele.toUpperCase()
})

console.log(result)  //  [ 'JAVASCRIPT', 'REACT', 'NODE', 'ANGULAR' ]
console.log(tech)   //  [ 'javascript', 'react', 'node', 'angular' ]

const result2 = tech.map(function(ele){
    return ele.length
})

console.log(result2)   //  [ 10, 5, 4, 7 ]

const numbers = [1,4,9]
const result3 = numbers.map(Math.sqrt)
console.log(result3)  // [ 1, 2, 3 ]