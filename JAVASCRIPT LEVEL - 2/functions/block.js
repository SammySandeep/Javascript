function greet(){   // function
    const str1 = 'inside function'
    if(true){   // block
        const str2 = 'inside block'
        console.log(str2)  // inside block
        console.log(str1)  // inside function
    }
    console.log(str1)   //  inside function
    console.log(str2)   //  ReferenceError: str2 is not defined
}

greet()