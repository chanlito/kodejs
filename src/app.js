import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import error from 'koa-json-error'
import path from 'path'
import serve from 'koa-static'
import Koa from 'koa'
import Pug from 'koa-pug'

import config from './config'
import db from './middleware/db'
import router from './lib/router'

const app = new Koa()
const env = config.environment
const pug = new Pug({
  viewPath: './src/views',
  debug: env === 'development',
  noCache: env === 'development'
})

app
  .use(error())
  .use(bodyParser())
  .use(db())
  .use(convert(serve(path.join(__dirname, '/public'))))

pug.use(app)
router.use(app)

export default app
