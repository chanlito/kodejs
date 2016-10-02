export default (db, type) => {
  let users = db.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: type.STRING,
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

      }
    }
  })
  return users
}
