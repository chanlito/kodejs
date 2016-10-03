import fs from 'fs'
import path from 'path'

const apiPath = path.join(__dirname, '../api')

export default {
  use: app => {
    fs
      .readdirSync(apiPath)
      .forEach(dir => {
        fs
          .readdirSync(path.join(apiPath + '/' + dir))
          .filter(file => {
            return file.indexOf('.route.js') > 0
          })
          .forEach(route => {
            const module = require(`${apiPath}/${dir}/${route}`)
            app.use(module.default.routes())
          })
      })
  }
}
