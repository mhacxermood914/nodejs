const yargs = require('yargs')
const {hideBin}=require('yargs/helpers')

const argv =  yargs(hideBin(process.argv)).parse()
const { addNotes, removeNotes,listNotes}=require('./notes.js')
//create command
console.log({argv})

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
    handler: function () {
        console.log('Read a note')
    }
})

yargs.parse()
