import SocketIo from 'koa-socket'

const io = new SocketIo()

io.on('connection', ctx => {
  console.log('Join event', ctx.socket.id)
  io.broadcast('connections', {
    numConnections: io.connections.size
  })
})
io.on('disconnect', ctx => {
  console.log('leave event', ctx.socket.id)
  io.broadcast('connections', {
    numConnections: io.connections.size
  })
})

export default io
