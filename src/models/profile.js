export default (db, type) => {
  let profile = db.define('profile', {
    id: {
      type: type.INTEGER.UNSIGNED,
      primaryKey: true
    },
    first_name: {
      type: type.STRING,
      allowNull: false
    },
    last_name: {
      type: type.STRING,
      allowNull: false
    }
  }, {
    name: {
      singular: 'profile',
      plural: 'profiles'
    },
    classMethods: {
      associate: models => {
        profile.belongsTo(models.user, {
          foreignKey: 'id',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      }
    }
  })
  return profile
}
