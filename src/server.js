import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv'

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT === undefined ? 3000 : process.env.SERVER_PORT;
const CLIENT_PORT = process.env.CLIENT_PORT === undefined ? 3001 : process.env.CLIENT_PORT;

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:" + CLIENT_PORT
      }
});

let clients = [];

io.on('connection', (socket) => {
    clients.add()
    console.log("Client Connected");

    socket.on('message', () => {
        console.log(message);
    });
});

httpServer.listen(SERVER_PORT);
