/**
 * Load application API handlers
 */
import { uploader } from '../api/uploads'

/**
 * Load application middleware
 */
import { singleUpload, multiUpload } from '../middleware/index'

/**
 * Define the application routes
 */
export default [{
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: uploader,
    middleware: [singleUpload]
  }, {
    method: 'POST',
    path: '/bulk',
    api: uploader,
    middleware: [multiUpload]
  }]
}]

