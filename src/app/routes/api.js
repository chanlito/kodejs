/**
 * Load application API handlers
 */
import { singleImageUploader, multiImageUploader } from '../api/uploads'

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
    path: '/images',
    api: singleImageUploader,
    middleware: [isMultiPart, singleUpload]
  }, {
    method: 'POST',
    path: '/images/bulk',
    api: multiImageUploader,
    middleware: [isMultiPart, multiUpload]
  }]
}]

