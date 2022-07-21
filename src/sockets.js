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
            io.emit('server:newnote', savedNote);
        });

        socket.on('client:deletenote', async (id) => {
            // Se borra la nota de la base de datos
            await Note.findByIdAndDelete(id);
            // Se ejecuta emit notes para volver a cargar las notas
            emitNotes();
        });

        socket.on('client:getnote', async (id) => {
            const note = await Note.findById(id);
            io.emit('server:selectednote', note);
        });

        socket.on('client:updatenote', async (updatedNote) => {
            await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description,
            });
            emitNotes();
        });

    });
}