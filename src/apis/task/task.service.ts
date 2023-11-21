import { Repository } from 'src/core'
import { Injectable } from '@nestjs/common'
import { taskRepository } from './repository/provider'
import { TaskModel } from './task.model'

@Injectable()
export class TaskService extends Repository<TaskModel> {
  get(id: string, args?: any): Promise<TaskModel> {
    return taskRepository.get(id, args)
  }
  set(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    return taskRepository.set(value, args)
  }
  update(value: TaskModel | TaskModel[], args?: any): Promise<any> {
    return taskRepository.update(value, args)
  }
  delete(value: string | TaskModel | string[] | TaskModel[], args?: any): Promise<any> {
    return taskRepository.delete(value, args)
  }
  count(filter?: any, args?: any): Promise<number> {
    return taskRepository.count(filter, args)
  }
  search(filter?: any, args?: any): Promise<TaskModel[]> {
    return taskRepository.search(filter, args)
  }
  searchPaginator(filter?: any, args?: any): Promise<{ data: TaskModel[]; count: number }> {
    return taskRepository.searchPaginator(filter, args)
  }
}
