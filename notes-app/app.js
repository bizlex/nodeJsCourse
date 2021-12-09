// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

console.log(getNotes)
console.log(chalk.green.bold.inverse('Success!'))
const log = console.log;
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// console.log(validator.isEmail('alex@test.com'));
// console.log(validator.isURL('http//'));

// const add = require('./utils')
// const sum = add(5, 3)
// console.log(sum);