import debug from 'debug'

export default {
  create: async function (ctx) {
    const log = debug('vanilla-es7:api:users:create')
    const { email, password } = ctx.request.body
    const username = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '')
    const t = await ctx.db.sequelize.transaction()
    let options = {
      transaction: t
    }
    try {
      const user = await ctx.db.users.create({
        username: username,
        password: password
      }, options)
      const userEmail = await ctx.db.emails.create({
        email: email,
        primary: true
      }, options)
      t.commit()
      ctx.body = {
        id: user.id,
        username: user.username,
        email: userEmail.email
      }
    } catch (e) {
      log('Error', e)
      t.rollback()
      ctx.status = 400
      ctx.body = { message: 'Failed to create user' }
    }
  },
  list: async function (ctx) {
    ctx.body = 'hello'
  }
}
