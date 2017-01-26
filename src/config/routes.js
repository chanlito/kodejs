import { home as renderHome } from '../api/web'
import { uploadImage } from '../api/uploads'

const routeDefinitions = [{
  prefix: '/',
  routes: [{
    method: 'GET',
    path: '/',
    api: renderHome
  }]
}, {
  prefix: '/v1/uploads',
  routes: [{
    method: 'POST',
    path: '/',
    api: uploadImage
  }]
}]

export default routeDefinitions
