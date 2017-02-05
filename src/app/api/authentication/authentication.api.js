import bcrypt from 'bcrypt'
import shortid from 'shortid'
import uuid from 'uuid'
import { pick } from 'lodash'

export const login = async ctx => {
  ctx.ok('Logged In')
}

export const register = async ctx => {
  const { body } = ctx.request
  const { Role, User } = ctx.db.models
  const { email, fullName, password } = body
  const [username] = email.split('@')

  const transaction = await ctx.db.transaction()
  try {
    let [role] = await Role.findOrCreate({
      where: { accessLevel: 'basic' },
      defaults: { accessLevel: 'basic' },
      transaction
    })
    role = role.toJSON()
    let user = await User.create({
      email,
      fullName: fullName.trim(),
      password: await bcrypt.hash(password, 10),
      roleId: role.id,
      status: 'inactive',
      uniqId: uuid.v4().replace(/-/g, ''),
      username: `${username}.${shortid.generate()}`
    }, { transaction })
    user = user.toJSON()
    transaction.commit()
    ctx.ok({
      ...pick(user, ['email', 'fullName', 'username'])
    })
  } catch (error) {
    transaction.rollback()
    ctx.fail(error, 500)
  }
}

export default { login, register }
