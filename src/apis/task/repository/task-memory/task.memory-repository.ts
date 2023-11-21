import { MemoryRepository } from 'src/core/repository/memory.repository'
import { Injectable } from '@nestjs/common'
import { TaskModel } from '../../task.model'

@Injectable()
export class TaskMemoryRepository extends MemoryRepository<TaskModel> {}
