export default () => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    const { message = 'Internal Server Error', stack, status, statusCode } = error
    const code = status || statusCode || 500
    ctx.set('Message', message)
    ctx.status = code
    ctx.body = {
      code,
      message,
      ...error,
      stack: process.env.NODE_ENV === 'development' ? stack : undefined
    }
  }
}
