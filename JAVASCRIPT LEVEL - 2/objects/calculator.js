const calculator = {
    result: 0,
    add: function(n = 0){
        return this.result += n
    },
    minus: function(n = 0){
        return this.result -= n
    },
    multiply: function(n = 1){
        return this.result *= n
    },
    reset: function(){
        return this.result = 0
    },
    division: function(n = 1){
        return this.result = this.result / 8
    }
}

console.log(calculator.add(5))   // 5
console.log(calculator.add(10))  // 15
console.log(calculator.minus(3))   // 12
console.log(calculator.multiply(2))   // 24
console.log(calculator.division(8))  //3
console.log(calculator.reset())  // 0