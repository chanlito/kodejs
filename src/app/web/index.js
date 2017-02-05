import home from './home'

/**
 * Define the application routes
 */
export default [{
  prefix: '/',
  routes: [
    { method: 'GET', path: '/', api: home }
  ]
}]
