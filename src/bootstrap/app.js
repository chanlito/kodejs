/**
 * Module dependencies
 */
import Koa from 'koa'
import bodyParser from 'koa-better-body'
import convert from 'koa-convert'
import error from 'koa-json-error'
import logger from 'koa-logger'
import respond from 'koa-respond'
import serve from 'koa-static'
import Pug from 'koa-pug'
import path from 'path'

/**
 * Load application configuration and dependencies
 */
import {
  env,
  pug as pugConfig,
  bodyParser as bodyParserConfig
} from '../config/app'
import db from './database'
import setupRouter from './router'

/**
 * Initialize modules
 */
const app = new Koa()
const pug = new Pug(pugConfig)

/**
 * Bind database instance to the application
 */
app.context.db = db
app.env = env

/**
 * Add additional middleware to the application
 */
app.use(error())
app.use(logger())
app.use(convert(serve(path.resolve(__dirname, '../../public'))))
app.use(convert(bodyParser(bodyParserConfig)))
app.use(respond())

/**
 * Setup template engine & routing
 */
pug.use(app)
setupRouter(app)

export default app
