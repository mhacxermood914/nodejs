const yargs = require('yargs')
const { addNotes, removeNotes, listNotes, readNotes}=require('./notes.js')
//create command

yargs.command({
    command:'add',
    describe:'Add new Note',
    alias:"+x",
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
    builder:{
        title:"A note Title",
    },  
    handler: function (arg) {
        removeNotes(arg.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'List Notes',
    handler: function () {
        listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: "A note Title",
        demandOption:true,
        type:'string',
        requiresArg: true
    },
    handler: function (arg) {
        readNotes(arg.title)
    }
})

yargs.parse()
