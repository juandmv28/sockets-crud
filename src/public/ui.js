import { saveNote, deleteNote, getNoteById, updateNote } from './sockets.js'

// Se selecciona la lista de notas
const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

// Para validar si la nota tiene id o no
var saveId = '';

const noteUI = note => {
    // Se crea elemento div
    const div = document.createElement('div');
    // Se le agrega al div el contenido
    div.innerHTML = `
        <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp">
            <div class="d-flex justify-content-between">
                <h1>${note.title}</h1>
                <div>
                    <button class="delete btn btn-danger" data-id="${note._id}">Delete</button>
                    <button class="update btn btn-secondary" data-id="${note._id}">Update</button>
                </div>
            </div>
            <p>${note.description}</p>
        </div>
    `

    // Pasa el id de la base de datos de la nota
    const btnDelete = div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update');

    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id));
    btnUpdate.addEventListener('click', e => getNoteById(btnUpdate.dataset.id));

    // Se devuelve el div
    return div;
}

// Se crea función que renderza las notas, dentro de esta se recorre el
// array que se creó de notas, y a cada una se le aplica la función noteUI
export const renderNotes = notes => {
    // Se pone vacío para que no se sobreescriba
    notesList.innerHTML = '';
    notes.forEach(note => notesList.append(noteUI(note)));
}

// Para guardar y enviar a la vase de datos
export const onHandleSubmit = (e) => {
    // Se previen el submit
    e.preventDefault();

    // Se valida si la nota tiene _id o no
    if (saveId) {
        updateNote(saveId, title.value, description.value);
    }
    else{
        saveNote(
            title.value,
            description.value
        );
    }

    // Para que al momento de limpiarse, no apunte a la nota, para poder crear nuevas notas
    saveId = '';

    // Se limpian los campos 
    title.value = '';
    description.value = '';
}

export const appendNote = note => {
    notesList.append(noteUI(note));
}

export const fillForm = note => {
    title.value = note.title;
    description.value = note.description;
    // Se agrega id al llenar
    saveId = note._id;
}