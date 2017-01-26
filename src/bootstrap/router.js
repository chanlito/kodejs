import Router from 'koa-router'
import routeDefinitions from '../config/routes'

export default app => {
  routeDefinitions.map(({ prefix, routes }) => {
    const router = new Router({ prefix })
    routes.map(({ method, path = '/', api, middleware = [] }) => {
      router[method.toLowerCase()](path, ...middleware, api)
    })
    app.use(router.routes()).use(router.allowedMethods())
  })
}
