const validator = require('validator')
const getNotes = require('./notes.js')

console.log(getNotes)

console.log(validator.isEmail('alex@test.com'));
console.log(validator.isURL('http//'));

// const add = require('./utils')
// const sum = add(5, 3)
// console.log(sum);