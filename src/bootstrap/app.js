/**
 * Module dependencies
 */
import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import path from 'path'
import Pug from 'koa-pug'
import serve from 'koa-static'

/**
 * Load application configuration and dependencies
 */
import {
  env,
  pug as pugConfig,
  bodyParser as bodyParserConfig
} from '../config/app'
import db from './database'
import error from './error'
import requestValidator from './validator'
import response from './response'
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
app.use(serve(path.resolve('.', './src/resource/public')))
app.use(bodyParser(bodyParserConfig))
app.use(response())
app.use(requestValidator())

/**
 * Setup template engine & routing
 */
pug.use(app)
setupRouter(app)

export default app
