const passwords = ['Password123','dct@academy','qwerty','secret123','gopro123','harryp@tter']

// function authenticate(passwords, password){
//     for(let i = 0; i < passwords.length; i++){
//         if (passwords[i] === password){
//             return 'authenticated'
//         }
//     }
//     return 'not authenticated'
// }

function authenticate(arr, password){
    let isAuth = false
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === password){
            isAuth = true
            break
        }
    }
   if(isAuth){
       return 'authenticated'
    } else {
       return 'not authenticated'
       }
   }

console.log(authenticate(passwords,'dct@academy'))
console.log(authenticate(passwords,'Balrog'))