// Se llama a express, esto devuelve una function
import express from 'express';
import path from 'path';

// Se instancia express
const app = express();

// Permite que el navegador acceda a la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Se exporta para poder ser llamada en otra parte
export default app;