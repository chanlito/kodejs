import http from 'http'

import app from './app'
import config from './config'

const port = config.port
const server = http.createServer(app.callback())

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default server
