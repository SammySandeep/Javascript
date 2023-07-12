const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'steve'}
]

// forEach()
users.forEach(function(user){
    console.log(`${user.id} - ${user.name}`)
})

// forEach(callback) into an arrow function
users.forEach((ele) => {
    console.log(`${ele.id} - ${ele.name}`)
})

users.forEach(user => console.log(`${user.id} - ${user.name}`) )

/*
1 - john
2 - steve
1 - john
2 - steve
1 - john
2 - steve
*/