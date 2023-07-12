/*
If you can't sleep just count sheeps!!
Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
*/

function countSheep(num){
    let result = ''
      for(i=1; i<=num; i++){
          result += `${i} sheep...`
      }
      return result
}


console.log(countSheep(3))   // 1 sheep...2 sheep...3 sheep...
console.log(countSheep(5))    // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...