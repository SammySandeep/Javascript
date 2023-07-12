const menuItems = [
    { id: 1, name: 'chicken kabab', price: 290, isVeg: false},
    { id: 2, name: 'paneer chilly', price: 210, isVeg: true},
    { id: 3, name: 'chicken biryani', price: 350, isVeg: false},
    { id: 4, name: 'veg biryani', price: 300, isVeg: true}
]

// find all the items which is veg
const result = menuItems.filter(function(ele){
    return ele.isVeg === true
}) 
console.log('veg items',result)

/*
veg items [
  { id: 2, name: 'paneer chilly', price: 210, isVeg: true },
  { id: 4, name: 'veg biryani', price: 300, isVeg: true }
]
*/

// find all the items which is non veg
const result1 = menuItems.filter(ele => ele.isVeg === false )
console.log('non veg',result1)

/*
non veg [
  { id: 1, name: 'chicken kabab', price: 290, isVeg: false },
  { id: 3, name: 'chicken biryani', price: 350, isVeg: false }
]
*/

// find all the items whose price is between 200 - 300
const result2 = menuItems.filter(function(ele){
    return ele.price >= 200 && ele.price <= 300
})
console.log('price range 200 - 300',result2)

/*
price range 200 - 300 [
  { id: 1, name: 'chicken kabab', price: 290, isVeg: false },
  { id: 2, name: 'paneer chilly', price: 210, isVeg: true },
  { id: 4, name: 'veg biryani', price: 300, isVeg: true }
]
*/

// find the item whose id is 3
const result3 = menuItems.find(function(ele){
    return ele.id === 3
})
console.log('Item with id 3',result3)  // Item with id 3 { id: 3, name: 'chicken biryani', price: 350, isVeg: false }

// find all the menu items which has term biryani in it
const result4 = menuItems.filter(function(ele){
    return ele.name.includes('biryani')
})
console.log('all biryani',result4)

/*
all biryani [
  { id: 3, name: 'chicken biryani', price: 350, isVeg: false },
  { id: 4, name: 'veg biryani', price: 300, isVeg: true }
]
*/

// find all the items which has term mushroom in it
const result5 = menuItems.filter(function(ele){
    return ele.name.includes('mushroom')
})
console.log('all mushroom',result5)   //  all mushrooms []