console.log(this)  // {}

function f1() {
    console.log(this)
}
f1()  //  Object [global]

const f2 = function(){
    console.log(this)
}
f2()  //  Object [global]

const af = () => {
    console.log(this)
}
af()  //  {}

const person = {
    name: 'john',
    details: function() {
        console.log(this.name)
    }
}
person.details()   // 'john'

const person1 = {
    name: 'john',
    details: () => {
        console.log(this.name)
    }
}
person1.details()  //  undefined

function f3(){
    const person = {
        name: 'john',
        details: () => {
            console.log(this)
        }
    }
    person.details()
}
f3()  //  Object [global]