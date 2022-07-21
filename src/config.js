// Función que lee variables de entorno
import { config } from 'dotenv'

// Se llama a la función
config();

// Se exporta a la constante que tiene la url de la db
export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;