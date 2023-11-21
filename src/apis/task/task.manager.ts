import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { TaskEntity } from './task.entity'
import { TaskService } from './task.service'

@Controller('task')
export class TaskManager {
  constructor(private service: TaskService) {}

  @Post()
  set(@Body() task: TaskEntity) {
    return this.service.set(task)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id)
  }
}
