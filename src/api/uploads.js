export const uploadImage = async ctx => {
  console.log('fields', ctx.request.fields)
  console.log('files', ctx.request.files)
}
