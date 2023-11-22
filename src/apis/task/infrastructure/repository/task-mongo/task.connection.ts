import { connect, model } from 'mongoose'
import { TaskMongoSchema } from './task.schema'

connect('mongodb://localhost/task', {})
export const taskConnection = model('task', TaskMongoSchema)
