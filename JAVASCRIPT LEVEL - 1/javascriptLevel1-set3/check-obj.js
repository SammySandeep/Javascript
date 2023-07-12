// Write a javascript function to check if an object contains given property

function checkObject(obj,str){
    let result = false
    for (const key in obj){
        if (key === str){
            result = true
        } 
    }
    return result
 }


console.log(checkObject({'name':'gokul','city':'bangalore'},'name'))  // true
console.log(checkObject({'name':'gokul','city':'bangalore'},'age'))   // false