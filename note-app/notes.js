const fs = require('fs'),chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...';
}

const addNotes = (title,body) => {

    const notes = loadNotes()
    console.log("1.",notes)

    if(Array.isArray(notes)){
        notes.push({
            title,
            body
        })

        saveNotes(notes)
    }

}

const removeNotes = (title)=>{
    const notes = loadNotes()
    console.log({notes})
    if (Array.isArray(notes) && notes.length>0){
        const newNotes = notes.filter((e)=>e.title!=title)
        console.log({newNotes})
        saveNotes(newNotes)
    }
}

const listNotes = ()=>{
    console.log(chalk.inverse('Your notes'))

    loadNotes().forEach((note)=>{
        console.log(note.title)
    })
}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    }catch(e){
        return [];
    }
}

module.exports={
    getNotes,
    addNotes,
    removeNotes,
    listNotes
}