import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Io from 'koa-socket'
import Koa from 'koa'

import config from './config'

const app = new Koa()
const io = new Io()
const port = config.port

app.use(error())
app.use(bodyParser())
app.use(async(ctx, next) => {
  ctx.io = io
  await next()
})

io.attach(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
