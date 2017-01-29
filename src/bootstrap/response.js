export default () => async (ctx, next) => {
  ctx.ok = (data, code = 200) => ctx.body = typeof data !== 'object' ? { code, message: data } : { code, message: 'OK', ...data } // eslint-disable-line
  ctx.fail = (data, code = 400) => typeof data !== 'object' ? ctx.throw(code, data) : ctx.throw(code, data.message, data)
  await next()
}
