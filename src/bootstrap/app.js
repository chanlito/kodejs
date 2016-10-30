import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import error from 'koa-json-error'
import logger from 'koa-logger'
import path from 'path'
import respond from 'koa-respond'
import serve from 'koa-static'
import Koa from 'koa'
import Pug from 'koa-pug'

import appConfig from '../config/app'
import db from './database'
import router from './router'

const app = new Koa()
const env = appConfig.env
const pug = new Pug({
  viewPath: './src/views',
  debug: env === 'development',
  noCache: env === 'development'
})

app.context.db = db
app.env = env

app.use(error())
app.use(logger())
app.use(convert(serve(path.join(__dirname, '../public'))))
app.use(bodyParser())
app.use(respond())

pug.use(app)
router.use(app)

export default app
