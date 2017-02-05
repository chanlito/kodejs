/**
 * Load application API handlers
 */
import { singleImageUploader, multiImageUploader } from './uploads.api'

/**
 * Load application middleware
 */
import {
  isMultiPart,
  multiUpload,
  singleUpload
} from './uploads.middleware.js'

/**
 * Define the application routes
 */
export default [{
  prefix: '/v1/uploads',
  routes: [
    { method: 'post', path: '/images', api: singleImageUploader, middleware: [isMultiPart, singleUpload] },
    { method: 'post', path: '/images/bulk', api: multiImageUploader, middleware: [isMultiPart, multiUpload] }
  ]
}]
