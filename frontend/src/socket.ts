// socket.ts
import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3001"; // backend socket server
let socket: Socket;

export const getSocket = () => {
  if (!socket) {
    socket = io(URL);
  }
  return socket;
};
