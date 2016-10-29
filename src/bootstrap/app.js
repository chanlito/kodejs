import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import error from 'koa-json-error'
import path from 'path'
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
app.use(convert(serve(path.join(__dirname, '../public'))))
app.use(bodyParser())

pug.use(app)
router.use(app)

export default app
