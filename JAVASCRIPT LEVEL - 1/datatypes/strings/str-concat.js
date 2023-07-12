const source = 'bangalore', destination = 'mysore' , distance = 140, 
duration = '3 hours 30 mins'

//es5
console.log('the distance between ' + source + ' and ' + destination + ' is ' + distance + 
' kms and the time taken to travel is ' + duration + ' .')

//es6 - template literal
console.log(`the distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${duration} .`)