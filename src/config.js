export default {
  db: {
    db: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    options: {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      logging: console.log
    }
  },
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
