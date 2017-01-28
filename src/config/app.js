export const env = process.env.NODE_ENV
export const port = process.env.PORT
export const pug = {
  viewPath: './views',
  debug: env === 'development',
  noCache: env === 'development'
}
export const bodyParser = {
  textLimit: '1mb',
  jsonLimit: '1mb',
  formLimit: '1mb'
}
