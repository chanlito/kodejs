import formidable from 'formidable'

const files = []
const maxFileCount = 1

const form = new formidable.IncomingForm({
  uploadDir: './public/uploads',
  keepExtensions: 'true'
})

form.on('fileBegin', (name, file) => {
  files.push(file)
  if (files.length > maxFileCount) throw new Error('Oops')
})

form.on('progress', (bytesReceived, bytesExpected) => {
  console.log('bytesReceived', bytesReceived)
  console.log('bytesExpected', bytesExpected)
})

form.on('error', error => console.log(error))

export { form }
