import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import error from 'koa-json-error'
import path from 'path'
import serve from 'koa-static'
import Koa from 'koa'
import Pug from 'koa-pug'

import appConfig from '../config/app'
import db from './lib/db'
import router from './lib/router'

const app = new Koa()
const pug = new Pug({
  viewPath: './src/views',
  debug: appConfig.env === 'development',
  noCache: appConfig.env === 'development'
})

app.context.db = db
app.env = appConfig.env

app
  .use(error())
  .use(convert(serve(path.join(__dirname, '../public'))))
  .use(bodyParser())

pug.use(app)
router.use(app)

export default app
