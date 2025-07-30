
const note = {
    createSingleNote: (text) => {
        const note = document.createElement('div')
        note.classList.add('note')

        note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
        `;

        const main = note.querySelector('.main');
        const deleteBtn = note.querySelector('.delete');
        const editBtn = note.querySelector('.edit');
        const textArea = note.querySelector('textarea');

        return {
            mainElement: main,
            deleteBtnElement: deleteBtn,
            editBtnElement: editBtn,
            textAreaElement: textArea,
            noteElement: note
        };
    },
    // printText: (note, text) => {
    //     note.mainElement.innerHTML = marked(text)
    // },
    deleteButtonAction: (note) => {
        note.deleteBtnElement.addEventListener('click', () => {
            note.noteElement.remove()
            updateLS()
        })
    },
    editButtonAction: (note) => {
        note.editBtnElement.addEventListener('click', () => {
            note.mainElement.classList.toggle('hidden')
            note.textAreaElement.classList.toggle('hidden')
        })
    },
    textAreaAction: (note, text) => {
        note.textAreaElement.value = text
        note.textAreaElement.addEventListener('input', (e) => {
            // const { value } = e.target
            //     note.mainElement.innerHTML = marked(value)
            //     updateLS()
        })
    }

}

function updateLS() {
    const notesText = document.querySelectorAll('textarea').forEach(el => {
        el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        });
    });

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    db.updateNoteList(notes);
}
