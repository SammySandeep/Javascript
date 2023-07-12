// Capitalize Words

function capitalizeWords(str){
      str = str.replace(/\s+/g, ' ').trim()
      let result = ' '
      const strArray = str.split(' ')
      for(i=0; i<strArray.length; i++){
        capitalWord = strArray[i][0].toUpperCase() + strArray[i].slice(1) + ' '
        result += capitalWord
      }
        return result.trim()
}

console.log(capitalizeWords('   js    string    exercises'))
capitalizeWords('dct academy bangalore')
