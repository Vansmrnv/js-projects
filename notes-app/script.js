
const addBtn = document.getElementById('add')
const notes = db.getNoteList();

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const noteList = document.querySelector('.note__list');

    const noteObj = note.createSingleNote(text);

    // note.printText(noteObj, text);
    note.deleteButtonAction(noteObj);
    note.editButtonAction(noteObj);
    note.textAreaAction(noteObj, text);


    noteList.appendChild(noteObj.noteElement)
}



// things to do. Add a note list. So that for styling the note list can be used instead of just individual styling