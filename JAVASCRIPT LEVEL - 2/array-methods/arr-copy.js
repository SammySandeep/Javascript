// Copy array object with the new address in the memory
const animals = ['Cat','Dog','Horse','Snake']

let animals2 = animals.slice()
animals2[3] = 'Shark'

let animals3 = [].concat(animals)
animals3[3] = 'Tiger'

// es6

let animals4 = [...animals]
animals4[3] = 'Lion'

console.log({animals, animals2, animals3, animals4})

/*
{
  animals: [ 'Cat', 'Dog', 'Horse', 'Snake' ],
  animals2: [ 'Cat', 'Dog', 'Horse', 'Shark' ],
  animals3: [ 'Cat', 'Dog', 'Horse', 'Tiger' ],
  animals4: [ 'Cat', 'Dog', 'Horse', 'Lion' ]
}
*/

