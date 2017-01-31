/**
 * Load application API handlers
 */
import web from '../api/web'

/**
 * Define the application routes
 */
export default [{
  prefix: '/',
  routes: [{
    method: 'GET',
    path: '/',
    api: web.index
  }]
}]

