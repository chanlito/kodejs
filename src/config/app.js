export default {
  debug: true,
  url: `http://localhost:${process.env.PORT}`,
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
