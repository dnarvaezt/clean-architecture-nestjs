import { Injectable } from '@nestjs/common'
import { TaskManager } from '../application/task.manager'
import { taskRepository } from './repository/provider'

@Injectable()
export class TaskService extends TaskManager {
  constructor() {
    super(taskRepository)
  }
}
