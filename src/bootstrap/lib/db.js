import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import dbConfig from '../../config/database'

const db = {}
const { database, username, password, options } = dbConfig
const modelsPath = path.join(__dirname, '../../models')
const sequelize = new Sequelize(database, username, password, options)

fs
  .readdirSync(modelsPath)
  .filter(file => file.indexOf('.') > 0)
  .forEach(file => {
    const model = sequelize.import(path.join(modelsPath, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
