/**
 * Module dependencies
 */
import Router from 'koa-router'

/**
 * Import API routes
 */
import authenticationRoutes from '../app/api/authentication/authentication.route'
import uploadRoutes from '../app/api/uploads/uploads.route'

/**
 * Import web routes
 */
import webRoutes from '../app/web'

const appRoutes = [
  ...authenticationRoutes,
  ...uploadRoutes,
  ...webRoutes
]

/**
 * Setup application routers according to the route definitions
 */
export default app => appRoutes.map(({ prefix, routes }) => {
  const router = new Router({ prefix })
  routes.map(({ method, path = '/', api, middleware = [] }) => router[method.toLowerCase()](path, ...middleware, api))
  app.use(router.routes()).use(router.allowedMethods())
})
