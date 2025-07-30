const db = {
    getNoteList: () => JSON.parse(localStorage.getItem('notes')),
    updateNoteList: (notes) => localStorage.setItem('notes', JSON.stringify(notes)),
    saveSingleNote: (note) => {
        return null;
    }
}

