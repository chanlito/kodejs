export default (db, type) => {
  let users = db.define('users', {
    id: {
      type: type.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: type.STRING(191), // NOTE: unique STRING is max 191 when using with uft8mb4
      allowNull: false,
      unique: true
    },
    password: {
      type: type.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: models => {
        // association can be defined here
        // read more: http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  })
  return users
}
