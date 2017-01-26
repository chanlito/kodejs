/**
 * Module dependencies
 */
import Router from 'koa-router'

/**
 * Load applications route definitions
 */
import routeDefinitions from '../config/routes'

/**
 * Setup application routers according to the route definitions
 */
export default app => {
  routeDefinitions.map(({ prefix, routes }) => {
    const router = new Router({ prefix })
    routes.map(({ method, path = '/', api, middleware = [] }) => {
      router[method.toLowerCase()](path, ...middleware, api)
    })
    app.use(router.routes()).use(router.allowedMethods())
  })
}
