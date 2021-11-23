const yargs = require('yargs')

//create command


yargs.command({
    command:'add',
    describe:'Add new Note',
    handler:function(){
        console.log('Adding new note')
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove new Note',
    handler: function () {
        console.log('Remove new note')
    }
})


yargs.command({
    command: 'list',
    describe: 'List Notes',
    handler: function () {
        console.log('List out all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function () {
        console.log('Read a note')
    }
})

console.log(yargs.argv)