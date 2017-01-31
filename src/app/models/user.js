export default (db, { INTEGER, STRING }) => {
  const attributes = {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    sid: {
      type: STRING(191),
      allowNull: false,
      unique: true
    },
    username: {
      type: STRING(191), // NOTE: unique STRING is max 191 when using with uft8mb4
      allowNull: false,
      unique: true
    },
    password: {
      type: STRING,
      allowNull: false
    }
  }

  const options = {
    name: {
      singular: 'user',
      plural: 'users'
    },
    classMethods: {
      associate(models) {
        // association can be defined here
        // read more: http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  }

  return db.define('User', attributes, options)
}
