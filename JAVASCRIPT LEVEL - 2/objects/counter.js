const counter = {
    count: 0,
    up: function(){
       return this.count += 1
    },
    down: function(){
       return this.count -= 1
    },
    reset: function(){
       return this.count = 0
    }
}

console.log(counter.up())  // 1
console.log(counter.up())  // 2
console.log(counter.down())  // 1
console.log(counter.reset()) // 0
