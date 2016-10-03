import Router from 'koa-router'

const router = new Router()

router
  .get('/', async function (ctx) {
    ctx.render('index', { title: 'Vanilla ES7' })
  })

export default router
