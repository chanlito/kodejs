export default (db, { ENUM, INTEGER, STRING }) => {
  return db.define('User', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uniqId: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: STRING,
      allowNull: false
    },
    fullName: {
      type: STRING
    },
    status: {
      type: ENUM('active', 'banned', 'inactive', 'pending'),
      allowNull: false,
      defaultValue: 'inactive'
    }
  }, {
    name: { singular: 'user', plural: 'users' },
    classMethods: {
      defineRelationship
    }
  })
}

function defineRelationship({ Role, User }) {
  User.belongsTo(Role, {
    foreignKey: { name: 'roleId', allowNull: false },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
}
