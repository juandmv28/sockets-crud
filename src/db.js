// Importa conexión de mongoose
import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

// Se crea la conexión para exportar
export const connectDB = async () => {
    try {
        // Se carga la url de db desde .env
        await connect(MONGODB_URI);
        console.log('Connected to DB');
    }
    catch(error) {
        console.log(error);
        console.log('Error capturado');
    }
}