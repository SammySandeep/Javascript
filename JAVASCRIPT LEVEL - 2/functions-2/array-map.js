const users = [
    {id: 1, name: 'john', dept: 'sales'},
    {id: 2, name: 'steve',dept: 'tech'},
    {id: 3, name: 'adam', dept: 'finance'}
]

const result = users.map(function(user){
    return user.name
})
console.log(result)  //  [ 'john', 'steve', 'adam' ]

const result2 = users.map((user) => {
    return user.name
})
console.log(result2)   //  [ 'john', 'steve', 'adam' ]

const result3 = users.map(user => user.name)
console.log(result3)  //  [ 'john', 'steve', 'adam' ]
