import { login, register } from './authentication.api'
import { validateLogin, validateRegister } from './authentication.middleware'

export default [{
  prefix: '/v1/authentication',
  routes: [{
    method: 'POST',
    path: '/login',
    api: login,
    middleware: [validateLogin]
  }, {
    method: 'POST',
    path: '/register',
    api: register,
    middleware: [validateRegister]
  }]
}]
