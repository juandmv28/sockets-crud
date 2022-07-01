// Se llama a la app de express
import app from './app';
// Se llama a socket.io
import { Server as Websocketserver } from "socket.io";
// Se importa http desde node, ya que express lo requiere
import http from 'http';
// Se importa la función generada en sockets.js
import sockets from './sockets';

import { connectDB } from './db';

connectDB();

// Aplicación de express --> Retorna server
const server = http.createServer(app);
// Puerto en el que escucha el servidor
const httpServer = server.listen(3000);
console.log('Server running and listening on port 3000');

// Se crea servidor de websockets
const io = new Websocketserver(httpServer);
sockets(io);




