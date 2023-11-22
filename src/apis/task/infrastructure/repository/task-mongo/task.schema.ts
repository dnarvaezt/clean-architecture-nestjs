import { Document, HydratedDocument } from 'mongoose'
import { TaskModel } from 'src/apis/task/application'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class TaskMongoModel extends Document implements TaskModel {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  public id: string

  @Prop()
  public name: string

  @Prop()
  public description: string
}

export type TaskDocument = HydratedDocument<TaskMongoModel>

export const TaskMongoSchema = SchemaFactory.createForClass(TaskMongoModel)
