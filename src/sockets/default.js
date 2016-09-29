import Io from 'koa-socket'
export default (app) => {
  const io = new Io()
  io.on('connection', ctx => {
    console.log('Joined index', ctx.socket.id)
    io.broadcast('connections', {
      numConnections: io.connections.size
    })
  })
  io.on('disconnect', ctx => {
    console.log('Left index', ctx.socket.id)
    io.broadcast('connections', {
      numConnections: io.connections.size
    })
  })
  io.attach(app)
}
