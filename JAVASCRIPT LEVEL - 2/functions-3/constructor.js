function User(fName, lName){
    this.firstName = fName,
    this.lastName = lName,
    this.isAdmin = false
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.details = function(){
        return `${this.firstName} - admin (${this.isAdmin})`
    }
}

const user1 = new User('Steve', 'D')
console.log(user1)   //   User { firstName: 'Steve', lastName: 'D', isAdmin: false }
console.log(user1.firstName)   //   Steve
user1.firstName = 'John'
console.log(user1.firstName)  //  John
console.log(user1.details())  //  John - admin (false)
console.log(user1) 

/*
User 
  firstName: 'John',
  lastName: 'D',
  isAdmin: false,
  fullName: [Function (anonymous)]
}
*/

User.prototype.greet = function(){
    return `hello ${this.firstName}`
}
console.log(user1.greet())  //  hello John

console.log(user1.fullName())  // John D

const user2 = new User('Sam', 'S')
console.log(user2)   //   User { firstName: 'Sam', lastName: 'S', isAdmin: false }
console.log(user2.details())  //  Sam - admin (false)
console.log(Object.getPrototypeOf(user2))  //  { greet: [Function (anonymous)] }  

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

Person.prototype.color = 'Blue'

const rand = new Person('Rand McNally', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');  

console.log(rand.color)  //  Blue

Person.prototype.color = 'Black'
console.log(rand.color)  // Black
console.log(ken.color)  // Black
console.log(rand.hasOwnProperty("name"))  // true
console.log(rand.hasOwnProperty("age"))  // true
console.log(rand.hasOwnProperty("color"))  // false

function Car (make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

const car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
const car2 = new Car('Nissan', '300ZX', 1992, ken);

console.log(car2.owner.name)  //  Ken Jones