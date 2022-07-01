import { loadNotes, onNewNote } from './sockets.js';
import { onHandleSubmit, renderNotes, appendNote } from './ui.js'; 

onNewNote(appendNote);
loadNotes(renderNotes);

const noteForm = document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
