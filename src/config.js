export default {
  db: {
    db: process.env.DB_DATABASE || 'test',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 28015
  },
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
