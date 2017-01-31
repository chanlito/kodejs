/**
 * Module dependencies
 */
import Router from 'koa-router'

/**
 * Load applications route definitions
 */
import apiRoutes from '../app/routes/api'
import webRoutes from '../app/routes/web'

/**
 * Setup application routers according to the route definitions
 */
export default app => [...apiRoutes, ...webRoutes].map(({ prefix, routes }) => {
  const router = new Router({ prefix })
  routes.map(({ method, path = '/', api, middleware = [] }) => {
    router[method.toLowerCase()](path, ...middleware, api)
  })
  app.use(router.routes()).use(router.allowedMethods())
})
