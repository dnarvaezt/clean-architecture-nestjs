import { Controller, Get, Param } from '@nestjs/common'
import { TaskService } from '../service'
import { TaskModelDto } from './task.dto'

@Controller('task')
export class TaskInformer {
  constructor(private service: TaskService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<TaskModelDto> {
    return this.service.get(id)
  }
}
