import { Document, HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { TaskModel } from '../../task.model'

@Schema()
export class TaskMongoModel extends Document implements TaskModel {
  @Prop()
  public id: string

  @Prop()
  public name: string

  @Prop()
  public description: string
}

export type TaskDocument = HydratedDocument<TaskMongoModel>

export const TaskMongoSchema = SchemaFactory.createForClass(TaskMongoModel)
