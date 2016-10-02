import http from 'http'
import { co } from 'bluebird-co'

import app from './app'
import config from './config'
import db from './utils/db'
import socketIo from './utils/socket.io'

const port = config.port
const server = http.createServer(app.callback())

socketIo(server)

co(function*() {
  const sync = yield db.sequelize.sync()
  if (sync) {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  }
})

export default server
