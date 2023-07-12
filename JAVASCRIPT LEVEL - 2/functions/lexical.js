const str1 = 'outside function'  // global

function greet(){   //  function
    const str2 = 'inside function'
    console.log('str2',str2)  // str2 inside function
    console.log('str1',str1)  // str1 outside function
 // console.log('str3',str3)  // ReferenceError: str3 is not defined

    function hello(){
        const str3 = 'inside hello function'
        console.log('hello',str2)  //  hello inside function
        console.log('hello1',str1)  //  hello1 outside function
        console.log('hello2',str3)
    }
    hello()
}
greet()