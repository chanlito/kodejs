import redis from 'socket.io-redis'
import SocketIo from 'socket.io'

import { host, port, authPass } from '../config/redis'

export default {
  bindTo(app, server) {
    const io = new SocketIo(server)
    io.adapter(redis({ host, port, auth_pass: authPass })) // comment out this line if you don't have redis
    io.on('connection', socket => {
      console.log(`socket ${socket.id} connected`)
      socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`)
      })
    })
    app.context.io = io
  }
}
