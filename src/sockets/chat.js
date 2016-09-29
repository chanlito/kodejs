import Io from 'koa-socket'
export default (app) => {
  const io = new Io({
    namespace: 'chat'
  })
  io.on('connection', ctx => {
    console.log('Joined chat', ctx.socket.id)
    io.broadcast('connections', {
      numConnections: io.connections.size
    })
  })
  io.on('disconnect', ctx => {
    console.log('Left chat', ctx.socket.id)
    io.broadcast('connections', {
      numConnections: io.connections.size
    })
  })
  io.attach(app)
}
