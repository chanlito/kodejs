import formidable from 'formidable'

const form = new formidable.IncomingForm({
  uploadDir: './public/uploads',
  keepExtensions: 'true'
})

form.on('progress', (bytesReceived, bytesExpected) => {
  console.log('bytesReceived', bytesReceived)
  console.log('bytesExpected', bytesExpected)
})

export { form }
