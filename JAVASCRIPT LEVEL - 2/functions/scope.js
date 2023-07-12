const str1 = 'outside function'  // global

function greet(){   //  function
    const str2 = 'inside function'
    console.log('str2',str2)  // inside function
    console.log('str1',str1)  //  outside function
}
greet()
console.log('str1',str1)  //  outside function
console.log('str2',str2)  //  ReferenceError: str2 is not defined
