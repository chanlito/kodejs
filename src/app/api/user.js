import Promise from 'bluebird'

export default {
  create: async ctx => {
    const { user: userModel, profile: profileModel } = ctx.db.models
    const { username, password, first_name, last_name } = ctx.request.body
    const t = await ctx.db.transaction()
    const options = { transaction: t }
    try {
      const user = await userModel.create({
        username,
        password
      }, options)
      const profile = await profileModel.create({
        id: user.id,
        first_name,
        last_name
      }, options)
      const response = {
        id: user.id,
        sid: user.sid,
        username: user.username,
        password: user.password,
        first_name: profile.first_name,
        last_name: profile.last_name
      }
      t.commit()
      ctx.set('Location', `http://${ctx.host}/users/${user.id}`)
      ctx.created(response)
    } catch (error) {
      t.rollback()
      ctx.internalServerError({
        message: 'Unable to create user',
        reason: error.message
      })
    }
  },
  get: async ctx => {
    const { id: userId } = ctx.params
    const { user: userModel, profile: profileModel } = ctx.db.models
    const [user, profile] = await Promise.all([
      userModel.find({
        attributes: ['id', 'sid', 'username', 'password'],
        where: {
          id: userId
        },
        raw: true
      }),
      profileModel.find({
        attributes: ['first_name', 'last_name'],
        where: {
          id: userId
        },
        raw: true
      })
    ])
    const response = Object.assign(user, profile)
    ctx.ok(response)
  }
}
