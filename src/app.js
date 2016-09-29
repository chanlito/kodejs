import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'

import config from './config'
import socket from './sockets/index'
import socketChat from './sockets/chat'

const app = new Koa()
const port = config.port

app.use(error())
app.use(bodyParser())

socket(app)
socketChat(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
