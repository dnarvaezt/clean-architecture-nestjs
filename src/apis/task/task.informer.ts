import { Controller, Get, Param } from '@nestjs/common'
import { TaskDto } from './task.dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskInformer {
  constructor(private service: TaskService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<TaskDto> {
    return this.service.get(id)
  }
}
