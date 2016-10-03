import Router from 'koa-router'

import authentication from './authentication.api'

const router = new Router({
  prefix: '/authentication'
})

router
  .post('/login', authentication.login)

export default router
