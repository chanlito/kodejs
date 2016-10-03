import Router from 'koa-router'

import dogs from '../api/dogs/dogs'

const router = new Router({
  prefix: '/dogs'
})

router
  .post('/', dogs.add)

export default router
