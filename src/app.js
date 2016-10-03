import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'
import Pug from 'koa-pug'

import db from './middleware/db'
import router from './lib/router'

const app = new Koa()
const pug = new Pug({
  viewPath: './src/views'
})

app
  .use(error())
  .use(bodyParser())
  .use(db())

pug.use(app)
router.use(app)

export default app
