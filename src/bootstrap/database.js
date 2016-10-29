import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import dbConfig from '../config/database'

const { database, username, password, options } = dbConfig
const modelsPath = path.join(__dirname, '../models')
const db = new Sequelize(database, username, password, options)

const models = db.models

fs.readdirSync(modelsPath)
  .filter(file => file.indexOf('.') > 0)
  .forEach(file => db.import(path.join(modelsPath, file)))

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

export default db
