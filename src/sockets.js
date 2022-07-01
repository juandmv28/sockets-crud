// Se importa el modelo hecho en Note
import Note from './models/Note'
// Función para capturar los eventos del server
export default (io) => {

    // Cuando se genere la conexión al servidor
    io.on('connection', (socket) => {

        const emitNotes = async () => {
            const notes = await Note.find();
            // Se emite el evento (nombreDescriptivo, datoAEnviar)
            io.emit('server:loadnotes', notes);
        }
        emitNotes();

        // función para recibir la data del form
        socket.on('client:newnote', async (data) => {
            // Se instancia un obejto de Note y se le agrega la data
            const newNote = new Note(data);
            // Se guarda en la DB
            const savedNote = await newNote.save();
            socket.emit('server:newnote', savedNote);
        });
    });
}