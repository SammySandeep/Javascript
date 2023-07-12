const products = ['marker','scale','board']

// products.forEach(function(ele){
//    console.log(`${ele} has ${ele.length} characters`)
// })

/*
marker has 6 characters
scale has 5 characters
board has 5 characters
 */


products.forEach(function(ele, i, arr){
    console.log(ele, i, arr)
})

/*
marker 0 [ 'marker', 'scale', 'board' ]
scale 1 [ 'marker', 'scale', 'board' ]
board 2 [ 'marker', 'scale', 'board' ]
*/

console.log(getFullYear())