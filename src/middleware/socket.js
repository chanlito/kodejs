import io from '../socket.io'

export default (app) => {
  return async (ctx, next) => {
    ctx.io = io
    await next()
  }
}
