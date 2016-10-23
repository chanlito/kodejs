import fs from 'fs'
import path from 'path'

const routesPath = path.join(__dirname, '../../routes')

export default {
  use: app => {
    fs
      .readdirSync(routesPath)
      .filter(file => {
        return file.indexOf('.js') > 0
      })
      .forEach(route => {
        const module = require(`${routesPath}/${route}`)
        app.use(module.default.routes())
      })
  }
}
