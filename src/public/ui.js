import { saveNote } from './sockets.js'

// Se selecciona la lista de notas
const notesList = document.querySelector('#notes');

const noteUI = note => {
    // Se crea elemento div
    const div = document.createElement('div');
    // Se le agrega al div el contenido
    div.innerHTML = `
        <div>
            <h1>${note.title}</h1>
            <div>
                <button>Delete</button>
                <button>Update</button>
            </div>
            <p>${note.description}</p>
        </div>
    `
    // Se devuelve el div
    return div;
}

// Se crea función que renderza las notas, dentro de esta se recorre el
// array que se creó de notas, y a cada una se le aplica la función noteUI
export const renderNotes = notes => {
    notes.forEach(note => notesList.append(noteUI(note)));
}

export const onHandleSubmit = (e) => {
    // Se previen el submit
    e.preventDefault();
    
    // Se envían al backend por medio de la función saveNote
    saveNote(
        noteForm['title'].value,
        noteForm['description'].value
    );
}

export const appendNote = note => {
    notesList.append(noteUI(note));
}