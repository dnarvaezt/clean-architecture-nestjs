import { TaskModel } from 'src/apis/task/application'
import { MemoryRepository } from 'src/core/repository/memory.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TaskMemoryRepository extends MemoryRepository<TaskModel> {}
