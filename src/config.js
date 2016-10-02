export default {
  db: {
    db: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    port: process.env.DB_PORT
  },
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
