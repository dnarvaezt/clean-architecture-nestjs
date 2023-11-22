import { Repository } from 'src/core'
import { TaskModel } from './task.model'

export class TaskManager implements Repository<TaskModel> {
  constructor(private taskRepository: Repository<TaskModel>) {}

  get(id: string, args?: any): Promise<TaskModel> {
    return this.taskRepository.get(id, args)
  }

  set(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    return this.taskRepository.set(value, args)
  }

  update(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    return this.taskRepository.update(value, args)
  }

  delete(value: string | TaskModel | string[] | TaskModel[], args?: any): Promise<any> {
    return this.taskRepository.delete(value, args)
  }

  count(filter?: any, args?: any): Promise<number> {
    return this.taskRepository.count(filter, args)
  }

  search(filter?: any, args?: any): Promise<TaskModel[]> {
    return this.taskRepository.search(filter, args)
  }

  searchPaginator(filter?: any, args?: any): Promise<{ data: TaskModel[]; count: number }> {
    return this.taskRepository.searchPaginator(filter, args)
  }
}
