/**
 * Module dependencies
 */
import redis from 'socket.io-redis'
import SocketIo from 'socket.io'

/**
 * Load redis configuration
 */
import { host, port, authPass } from '../config/redis'

/**
 * Setup socket.io for the application
 */
export default (app, server) => {
  const io = new SocketIo(server)
  io.adapter(redis({ host, port, auth_pass: authPass })) // comment out this line disable redis adapter
  io.on('connection', socket => {
    console.log(`socket ${socket.id} connected`)
    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })
  })
  app.context.io = io // bind a socket.io instance to the application context
}
