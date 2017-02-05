export default (db, { ENUM, INTEGER, TEXT }) => {
  return db.define('Role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    accessLevel: {
      type: ENUM('admin', 'basic'),
      unique: true,
      allowNull: false
    },
    description: {
      type: TEXT
    }
  }, {
    name: { singular: 'role', plural: 'roles' },
    classMethods: {
      defineRelationship
    }
  })
}

/**
 * Relationship can be defined here.
 * Read more at http://docs.sequelizejs.com/en/latest/docs/associations/
 */
function defineRelationship({ Role, User }) {
  Role.hasOne(User, {
    foreignKey: { name: 'roleId', allowNull: false },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
}
