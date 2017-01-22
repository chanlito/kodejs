const host = process.env.DB_HOST
const port = process.env.DB_PORT

export const database = process.env.DB_DATABASE
export const username = process.env.DB_USERNAME
export const password = process.env.DB_PASSWORD
export const options = {
  host,
  port,
  dialect: 'mysql',
  logging: false,
  sync: {
    force: false,
    logging: console.log
  },
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
