const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const socket = require('socket.io')
app.use(cors())



const server = app.listen(port, () => console.log(`The port is up and running on port: ${port}`))




const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['*'],
    credentials: true
  }
})
io.on('connection', socket => {
  console.log(`Socket id is: ${socket.id}`)
  socket.on('send', date => {
    console.log(date)
    // socket.emit('send', date)
  })
  }
  
)







