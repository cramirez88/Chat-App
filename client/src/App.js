import React from 'react'
import { io } from 'socket.io-client'
import Chat from './components/Chat';

function App() {
  return (
    <Chat/>
  );
}

export default App;
