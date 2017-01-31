import gm from 'gm'
import Promise from 'bluebird'

Promise.promisifyAll(gm.prototype)

const { UPLOAD_PATH, UPLOAD_HOST, UPLOAD_PORT } = process.env
const fs = Promise.promisifyAll(require('fs'))
const host = `${UPLOAD_HOST}:${UPLOAD_PORT}/uploads/`

export const singleImageUploader = async ctx => {
  const { file } = ctx.req
  const { filename } = file
  await writeImage(filename)
  fs.unlinkAsync(UPLOAD_PATH + filename)
  ctx.ok({
    message: 'File uploaded',
    small: `${host}small-${filename}`,
    medium: `${host}medium-${filename}`,
    large: `${host}large-${filename}`
  })
}

export const multiImageUploader = async ctx => {
  const { files } = ctx.req
  const images = []
  const filenames = []
  const data = []
  files.map(({ filename }) => {
    images.push(writeImage(filename))
    filenames.push(filename)
    data.push({
      small: `${host}small-${filename}`,
      medium: `${host}medium-${filename}`,
      large: `${host}large-${filename}`
    })
  })
  await Promise.all(images)
  filenames.map(filename => fs.unlinkAsync(UPLOAD_PATH + filename))
  ctx.ok({
    message: 'All files uploaded',
    data
  })
}

export default { singleImageUploader, multiImageUploader }

/**
 * Read an image file and write 3 different image files (small, medium, large)
 */
const writeImage = filename => Promise.all([
  gm(UPLOAD_PATH + filename).resize(120).quality(90).writeAsync(UPLOAD_PATH + 'small-' + filename),
  gm(UPLOAD_PATH + filename).resize(480).quality(90).writeAsync(UPLOAD_PATH + 'medium-' + filename),
  gm(UPLOAD_PATH + filename).resize(960).quality(90).writeAsync(UPLOAD_PATH + 'large-' + filename)
])
