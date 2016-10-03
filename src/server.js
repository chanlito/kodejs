import http from 'http'
import { co } from 'bluebird-co'

import app from './app'
import config from './config'
import db from './lib/db'
import socketIo from './lib/socket.io'

const port = config.port
const server = http.createServer(app.callback())

socketIo.use(server)

co(function*() {
  const sync = yield db.sequelize.sync({
    force: true,
    logging: false
  })
  if (sync) {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  }
})

export default server
