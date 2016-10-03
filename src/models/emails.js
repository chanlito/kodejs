export default (db, type) => {
  let emails = db.define('emails', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    primary: {
      type: type.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: models => {
        emails.belongsTo(models.users)
      }
    }
  })
  return emails
}
