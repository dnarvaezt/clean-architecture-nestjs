import { Repository } from 'src/core/repository'
import { Injectable } from '@nestjs/common'
import { TaskModel } from '../task.model'
import { TaskMemoryRepository } from './task.memory'

@Injectable()
export class TaskService
  extends (() => {
    return TaskMemoryRepository
  })()
  implements Repository<TaskModel> {}
