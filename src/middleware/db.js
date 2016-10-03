import db from '../lib/db'

export default () => {
  return async(ctx, next) => {
    ctx.db = db
    await next()
  }
}
