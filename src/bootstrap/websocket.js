import redis from 'socket.io-redis'
import SocketIo from 'socket.io'

import redisConfig from '../config/redis'

const { host, port } = redisConfig

export default {
  use: server => {
    const io = new SocketIo(server)
    io.adapter(redis({ host, port }))
    io.on('connection', socket => {
      console.log(`socket ${socket.id} connected`)
      socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`)
      })
    })
  }
}
