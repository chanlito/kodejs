import Router from 'koa-router'

import dogs from '../api/dogs/dogs'

const router = new Router({
  prefix: '/dogs'
})

router
  .get('/', dogs.list)
  .post('/', dogs.add)
  .get('/:id', dogs.show)
  .put('/:id', dogs.edit)
  .del('/:id', dogs.delete)

export default router
