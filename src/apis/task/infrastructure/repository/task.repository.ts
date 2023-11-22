import { providerFactory, Repository } from 'src/core'
import { EnvironmentEnum } from 'src/core/environment.enum'
import { TaskModel } from '../../application'
import { TaskMemoryRepository } from './task-memory/task.memory-repository'
import { tasksData } from './task-memory/task.memory.data'
import { TaskMongoRepository } from './task-mongo/task.mongo-repository'

export const taskRepository: Repository<TaskModel> = providerFactory({
  [EnvironmentEnum.Production]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Test]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Development]: new TaskMongoRepository(),
  [EnvironmentEnum.Local]: new TaskMemoryRepository(tasksData),
  [EnvironmentEnum.Mocked]: new TaskMemoryRepository(tasksData),
})
