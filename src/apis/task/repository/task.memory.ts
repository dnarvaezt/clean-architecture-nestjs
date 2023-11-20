import { TaskModel } from '../task.model'
import { TaskRepository } from './task.repository'

export class TaskMemoryRepository extends TaskRepository {
  private tasks: TaskModel[] = [
    {
      id: '1',
      name: '1',
      description: '1',
    },
  ]

  async get(id: string, args?: any): Promise<TaskModel> {
    return this.tasks.find(item => item.id === id)
  }

  async set(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async update(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async delete(value: string | TaskModel | TaskModel[] | string[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async count(filter?: any, args?: any): Promise<number> {
    throw new Error('Method not implemented.')
  }

  async search(filter?: any, args?: any): Promise<TaskModel[]> {
    throw new Error('Method not implemented.')
  }

  async searchPaginator(filter?: any, args?: any): Promise<{ data: TaskModel[]; count: number }> {
    throw new Error('Method not implemented.')
  }

  inputFormat(data: any, args?: any): TaskModel {
    throw new Error('Method not implemented.')
  }

  outputFormat(data: any, args?: any) {
    throw new Error('Method not implemented.')
  }
}
