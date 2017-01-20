export const env = process.env.NODE_ENV || 'development'
export const port = process.env.PORT || 3000
export const pug = {
  viewPath: './views',
  debug: env === 'development',
  noCache: env === 'development'
}
