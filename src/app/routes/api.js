/**
 * Moduel dependencies
 */
import Router from 'koa-router'

/**
 * Route handlers
 */
import upload from '../api/upload'

/**
 * Setup web router
 */
const uploadRouter = new Router()

/**
 * Define routes
 */
uploadRouter.get('/', index)

/**
 * Expose router
 */
export default router
