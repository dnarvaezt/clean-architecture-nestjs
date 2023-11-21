import { Module } from '@nestjs/common'
import { TaskInformer } from './task.informer'
import { TaskManager } from './task.manager'
import { TaskService } from './task.service'

@Module({
  controllers: [TaskManager, TaskInformer],
  providers: [TaskService],
})
export class TaskModule {}
