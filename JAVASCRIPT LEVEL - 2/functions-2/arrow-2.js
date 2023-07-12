// Create an arrow function called as square, which takes 1 parameter, it returns the square of the number

const square = (a) => {
    return a * a
}

console.log(square(5))  // 25

// Only 1 parameter, () are optional
const square2 = a => {
    return a * a
}
console.log(square2(5))  // 25

// Only 1 parameter, () are optional, if only 1 statement, then {} optional, return optional, statement has to be on the same line as =>
const square3 = n => n * n
console.log(square3(5))  // 25