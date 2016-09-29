import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'

import config from './config'
import sockets from './sockets'

const app = new Koa()
const port = config.port

/** middleware */
app.use(error())
app.use(bodyParser())

/** sockets */
sockets.default(app)
sockets.chat(app)

/** start server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
