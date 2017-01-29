/**
 * Module dependencies
 */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
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
import error from './error'
import response from './response'

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
app.use(convert(serve(path.resolve('.', './public'))))
app.use(bodyParser(bodyParserConfig))
app.use(response())

/**
 * Setup template engine & routing
 */
pug.use(app)
setupRouter(app)

export default app
