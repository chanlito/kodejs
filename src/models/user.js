import shortid from 'shortid'

export default (db, type) => {
  let user = db.define('user', {
    id: {
      type: type.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    sid: {
      type: type.STRING(191),
      allowNull: false,
      unique: true,
      defaultValue: shortid.generate()
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
    name: {
      singular: 'user',
      plural: 'users'
    },
    classMethods: {
      associate: models => {
        // association can be defined here
        // read more: http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  })
  return user
}
