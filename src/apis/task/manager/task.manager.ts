import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { TaskService } from '../repository/task.service'
import { TaskModel } from '../task.model'

@Controller('task')
export class TaskManager {
  constructor(private service: TaskService) {}

  @Post()
  set(@Body() task: TaskModel) {
    return this.service.set(task)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id)
  }
}
