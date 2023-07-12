const fruits = ['apple','mango','kiwi']

console.log('--- using for loop')
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

console.log('---using forEach')
fruits.forEach(function(ele){
    console.log(ele)
})

/*
--- using for loop
apple
mango
kiwi
---using forEach
apple
mango
kiwi
*/