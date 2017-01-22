import apiRouter from '../app/routes/api'
import webRouter from '../app/routes/web'

export default app => {
  app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
  app.use(webRouter.routes()).use(webRouter.allowedMethods())
}
