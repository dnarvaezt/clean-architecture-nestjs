import { Module } from '@nestjs/common'
import { TaskInformer, TaskManager } from './controller/'
import { TaskService } from './service/task.service'

@Module({
  controllers: [TaskManager, TaskInformer],
  providers: [TaskService],
})
export class TaskModule {}
