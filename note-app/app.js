const yargs = require('yargs')
const {addNotes}=require('./notes.js')
//create command


yargs.command({
    command:'add',
    describe:'Add new Note',
    builder:{
        title:{
            describe:'A Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'A Note Body',
            demandOption: true,
            type: 'string'
        }
    },  
    handler:function(arg){
        addNotes(arg.title,arg.body)
        console.log('Adding new note',arg.title)
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

yargs.parse()