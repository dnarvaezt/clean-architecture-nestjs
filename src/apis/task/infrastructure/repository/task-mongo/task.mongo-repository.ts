import { Model } from 'mongoose'
import { TaskModel } from 'src/apis/task/application'
import { IFilter, Repository } from 'src/core'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { taskConnection } from './task.connection'
import { TaskMongoModel } from './task.schema'

@Injectable()
export class TaskMongoRepository extends Repository<TaskModel> {
  @InjectModel(TaskMongoModel.name)
  private taskModel: Model<TaskMongoModel> = taskConnection

  async get(id: string, args?: any): Promise<TaskModel> {
    const item = await this.taskModel.findById(`${id}`).exec()
    return this.inputFormat(item || {})
  }

  async set(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    const task = new this.taskModel(value)
    return task.save()
  }

  async update(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async delete(value: string | TaskModel | string[] | TaskModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async count(filter?: IFilter, args?: any): Promise<number> {
    throw new Error('Method not implemented.')
  }

  async search(filter?: IFilter, args?: any): Promise<TaskModel[]> {
    const items = await this.taskModel.find().exec()
    return items.map(item => this.inputFormat(item))
  }

  async searchPaginator(
    filter?: IFilter,
    args?: any
  ): Promise<{ data: TaskModel[]; count: number }> {
    throw new Error('Method not implemented.')
  }

  private inputFormat(data: any): TaskModel {
    return new TaskModel(JSON.parse(JSON.stringify(data)))
  }
}
