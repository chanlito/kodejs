/**
 * Moduel dependencies
 */
import Router from 'koa-router'

/**
 * Route handlers
 */
import { index } from '../web'

/**
 * Setup web router
 */
const router = new Router()

/**
 * Define routes
 */
router.get('/', index)

/**
 * Expose router
 */
export default router
