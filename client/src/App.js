import React from 'react'
import { io } from 'socket.io-client'

function App() {

  const socket = io('http://localhost:8000')
  socket.on('receiving message', message => console.log(message))

  return (
    <h1>Chat App</h1>
  );
}

export default App;
