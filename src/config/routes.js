/**
 * Load application API handlers
 */
import { home as renderHome } from '../api/web'
import { uploadImage } from '../api/uploads'

/**
 * Define the application routes
 */
const routeDefinitions = [{
  prefix: '/',
  routes: [{
    method: 'GET',
    path: '/',
    api: renderHome
  }]
}, {
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: uploadImage
  }]
}]

/**
 * Make it available to the application router
 */
export default routeDefinitions
