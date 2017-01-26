/**
 * Module dependencies
 */
import http from 'http'

/**
 * Load application configuration and dependencies
 */
import app from './app'
import { port } from '../config/app'
import db from './database'
import setupSocketIo from './socket.io'

const log = console.log
/**
 * Initialize application server
 */
const server = http.createServer(app.callback())

/**
 * Bind socket io to the application and initialize it with the server
 */
setupSocketIo(app, server)

db.sync()
  .then(() => server.listen(port, () => log(`Server running on port ${port}`)))
  .catch(e => log('Unable to start server.', e))

export default server
