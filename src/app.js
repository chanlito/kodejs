/* npm dependencies */
import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'
/* local dependencies */
import config from './config'
import io from './socket.io'
import socket from './middleware/socket'

const app = new Koa()

app
  .use(error())
  .use(bodyParser())
  .use(socket())
  .use(ctx => {
    ctx.body = 'Welcome'
  })

io.attach(app)
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

export default app
