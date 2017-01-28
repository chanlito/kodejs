/**
 * Load application API handlers
 */
import uploads from '../api/uploads'

/**
 * Load application middleware
 */
import { singleUpload, multiUpload } from '../middleware'

/**
 * Define the application routes
 */
export default [{
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: uploads.uploadImage,
    middleware: [singleUpload]
  }, {
    method: 'POST',
    path: '/bulk',
    api: uploads.uploadImage,
    middleware: [multiUpload]
  }]
}]

