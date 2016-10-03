import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import Koa from 'koa'

import db from './middleware/db'
import router from './lib/router'

const app = new Koa()

app
  .use(error())
  .use(bodyParser())
  .use(db())

router.use(app)

export default app
