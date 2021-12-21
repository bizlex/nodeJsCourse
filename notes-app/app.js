const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Title note',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        console.log('Listing the notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading the note');
    }
})

yargs.parse()
// console.log(yargs.argv);