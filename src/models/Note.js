// Este archivo define el esquema de nuestra base de datos
import { Schema, model } from 'mongoose';

// Esquema como tal
const schema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    // Cuando un dato nuevo se crea, este 
    // crea dos propiedades: CREATED AT y 
    // UPDATED AT
    timestamps: true
});

// Se hace exportable el modelo
export default model('Note', schema);