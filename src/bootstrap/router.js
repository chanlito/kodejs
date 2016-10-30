import _ from 'lodash'
import path from 'path'
import Router from 'koa-router'

import { definitions } from '../app/routes.json'

export default {
  use: app => {
    _(definitions).each(value => {
      const { prefix, routes } = value
      const router = new Router({ prefix: `${prefix}` })
      _(routes).each(route => {
        const method = route.method.toLowerCase()
        const routePath = route.path
        const web = route.web || false
        const [controller, action] = route.callback.split('.')
        const callbackHandler = web
        ? require(path.resolve('.', 'src/app/web', controller)).default[action]
        : require(path.resolve('.', 'src/app/api', controller)).default[action]
        const middleware = route.middleware || []
        const middlewareHandlers = []
        middleware.forEach(obj => {
          const [middlewareController, middlewareAction] = obj.split('.')
          const middlewareHandler =
            require(path.resolve('.', 'src/app/middleware', middlewareController)).default[middlewareAction]
          middlewareHandlers.push(middlewareHandler)
        })
        router[method](routePath, ...middlewareHandlers, callbackHandler)
      })
      app.use(router.routes())
      app.use(router.allowedMethods())
    })
  }
}
