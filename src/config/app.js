import formidable from 'formidable'

const form = new formidable.IncomingForm({
  uploadDir: '/public/uploads',
  keepExtensions: 'true'
})

form.on('progress', function (bytesReceived, bytesExpected) {
  console.log('bytesReceived', bytesReceived)
  console.log('bytesExpected', bytesExpected)
})

export const env = process.env.NODE_ENV
export const port = process.env.PORT
export const pug = {
  viewPath: './views',
  debug: env === 'development',
  noCache: env === 'development'
}
export const bodyParser = {
  textLimit: '250kb',
  formLimit: '250kb',
  urlencodedLimit: '250kb',
  jsonLimit: '250kb',
  bufferLimit: '2mb',
  jsonStrict: true, // When set to true, JSON parser will only accept arrays and objects.
  multipart: false,
  IncomingForm: form,
  querystring: require('qs')
}
