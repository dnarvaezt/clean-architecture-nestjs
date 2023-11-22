import { connect, model } from 'mongoose'
import { ImageMongoSchema } from './image.schema'

// connect('mongodb://localhost:27017/nest-store', {})
export const imageConnection = model('image', ImageMongoSchema)
