import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'

const app = new Koa()

app.use(error())
app.use(bodyParser())

export default app
