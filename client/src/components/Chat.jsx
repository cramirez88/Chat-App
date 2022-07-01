import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client'



const Chat = () => {
  const dates = new Date()

  const [socket] = useState(() => io(':8000'));
  socket.on('connect', () => {
    console.log(` you connected with ${socket.id}`)
    socket.emit('send', dates)
  })
  // useEffect(() => {
  //   // we need to set up all of our event listeners
  //   // in the useEffect callback function
  //   console.log('Is this running?');
  
   
 
  //   // note that we're returning a callback function
  //   // this ensures that the underlying socket will be closed if App is unmounted
  //   // this would be more critical if we were creating the socket in a subcomponent
  //   return () => socket.disconnect(true);
  // }, []);

  return (
    <h1>Socket Test</h1>
  )
}

export default Chat