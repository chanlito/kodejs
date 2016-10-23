import SocketIo from 'socket.io'

export default {
  use: server => {
    const io = new SocketIo(server)
    io.on('connection', socket => {
      console.log(`socket ${socket.id} connected`)
      socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`)
      })
    })
  }
}
