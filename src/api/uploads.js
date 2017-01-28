export const uploader = async ctx => {
  const { file, files } = ctx.req
  ctx.body = { file, files }
}
