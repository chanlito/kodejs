import debug from 'debug'
import SocketIo from 'socket.io'

const log = debug('vanilla-es7:utils:socket.io')

export default server => {
  const io = new SocketIo(server)
  io.on('connection', socket => {
    log(`socket ${socket.id} connected`)
    socket.on('disconnect', () => {
      log(`socket ${socket.id} disconnected`)
    })
  })
}
