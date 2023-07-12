function add(n,m,p){
    console.log(arguments)    //  [Arguments] { '0': 10, '1': 20, '2': 30 }
    console.log(arguments.length)  // 3
    console.log(arguments[0])  // 10
}

add(10,20,30)