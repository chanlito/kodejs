import debug from 'debug'

const log = debug('vanilla-es7:api:authentication')

export default {
  login: async function (ctx) {
    log('ctx', ctx)
  }
}
