export default {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  options: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    define: {
      underscored: true,
      freezeTableName: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      createdAt: 'created_date',
      updatedAt: 'updated_date',
      deletedAt: 'deleted_date',
      timestamps: true
    }
  }
}
