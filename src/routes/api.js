/**
 * Load application API handlers
 */
import { singleUploader, multiUploader } from '../api/uploads'

/**
 * Load application middleware
 */
import { isMultiPart, singleUpload, multiUpload } from '../middleware/index'

/**
 * Define the application routes
 */
export default [{
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: singleUploader,
    middleware: [isMultiPart, singleUpload]
  }, {
    method: 'POST',
    path: '/bulk',
    api: multiUploader,
    middleware: [isMultiPart, multiUpload]
  }]
}]

