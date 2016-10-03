import Router from 'koa-router'

import users from './users.api'

const router = new Router({
  prefix: '/users'
})

router
  .get('/', users.list)
  .post('/', users.create)

export default router
