export default (db, type) => {
  let dogs = db.define('dogs', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: type.TEXT
    },
    image_url: {
      type: type.STRING
    }
  }, {
    classMethods: {
      associate: models => {
        // association can be defined here
        // read more: http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  })
  return dogs
}
