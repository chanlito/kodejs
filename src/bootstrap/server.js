import http from 'http'
import { co } from 'bluebird-co'

import app from './app'
import appConfig from '../config/app'
import db from './lib/db'
import socketIo from './lib/socket.io'

const { port } = appConfig
const server = http.createServer(app.callback())

socketIo.use(server)

co(function* () {
  const sync = yield db.sequelize.sync({
    force: false,
    logging: console.log
  })
  if (sync) {
    server.listen(port, () => console.log(`Server running on port ${port}`))
  }
})

export default server
