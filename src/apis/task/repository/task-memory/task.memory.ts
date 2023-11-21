import { MemoryRepository } from 'src/core/repository/memory.repository'
import { TaskModel } from '../../task.model'

export class TaskMemoryRepository extends MemoryRepository<TaskModel> {}
