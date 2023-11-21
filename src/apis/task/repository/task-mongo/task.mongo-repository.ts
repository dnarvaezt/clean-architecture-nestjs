import { Model } from 'mongoose'
import { IFilter, Repository } from 'src/core'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { TaskModel } from '../../task.model'
import { taskConnection } from './task.connection'
import { TaskMongoModel } from './task.schema'

@Injectable()
export class TaskMongoRepository extends Repository<TaskModel> {
  @InjectModel(TaskMongoModel.name)
  private taskModel: Model<TaskMongoModel> = taskConnection

  async get(id: string, args?: any): Promise<TaskModel> {
    throw this.taskModel.findById(id).exec()
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
    const a = items.map(item => {
      return new TaskModel({ id: item.id, name: item.name })
    })

    return a
  }

  async searchPaginator(
    filter?: IFilter,
    args?: any
  ): Promise<{ data: TaskModel[]; count: number }> {
    throw new Error('Method not implemented.')
  }
}
