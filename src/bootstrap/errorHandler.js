export default () => {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      console.log(err)
      const code = err.status || err.statusCode || 500
      const message = err.message || 'Internal Server Error'
      ctx.set('Message', message)
      ctx.status = code
      ctx.body = {
        code,
        message,
        ...err,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
      }
    }
  }
}
