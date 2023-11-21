import { providerFactory, Repository } from 'src/core'
import { EnvironmentEnum } from 'src/core/environment.enum'
import { TaskModel } from '../task.model'
import { TaskMemoryRepository } from './task-memory/task.memory'
import { tasksData } from './task-memory/task.memory.data'

export const taskRepository: Repository<TaskModel> = providerFactory({
  [EnvironmentEnum.Production]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Test]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Development]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Local]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Mocked]: new TaskMemoryRepository(tasksData),
})
