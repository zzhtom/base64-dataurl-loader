import mime from 'mime-types'
import path from 'path'

function getMimetype (resourcePath) {
  const resolvedMimeType = mime.contentType(path.extname(resourcePath))

  if (!resolvedMimeType) {
    return ''
  }

  return resolvedMimeType.replace(/;\s+charset/i, ';charset')
}

export default function loader (source) {
  return `export default ${JSON.stringify(
    'data:' + getMimetype(this.resourcePath) + ';base64,' + source.toString('base64')
  )}`
}
