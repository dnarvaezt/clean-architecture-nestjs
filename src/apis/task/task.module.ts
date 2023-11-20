import { Module } from '@nestjs/common'
import { TaskInformer } from './informer/task.informer'
import { TaskManager } from './manager/task.manager'
import { TaskService } from './repository/task.service'

@Module({
  controllers: [TaskManager, TaskInformer],
  providers: [TaskService],
})
export class TaskModule {}
