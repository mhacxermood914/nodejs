const fs = require('fs')

const getNotes = () => {
    return 'Your notes...';
}

const addNotes = (title,body) => {

    const notes = loadNotes()

    if(Array.isArray(notes) && !notes.length){
        notes.push({
            title,
            body
        })

        console.log(notes)
    }

    saveNotes(notes)
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
    addNotes
}