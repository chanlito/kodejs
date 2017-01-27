/**
 * Load application API handlers
 */
import web from '../api/web'
import uploads from '../api/uploads'

/**
 * Define the application routes
 */
const routeDefinitions = [{
  prefix: '/',
  routes: [{
    method: 'GET',
    path: '/',
    api: web.index
  }]
}, {
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: uploads.uploadImage
  }]
}]

/**
 * Make it available to the application router
 */
export default routeDefinitions
