import { Module } from '@nestjs/common'
import { TaskController, TaskService } from './infrastructure'

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
