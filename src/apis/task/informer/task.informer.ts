import { Controller, Get, Param } from '@nestjs/common'
import { TaskService } from '../repository/task.service'
import { TaskInputModel } from './task.dtos'

@Controller('task')
export class TaskInformer {
  constructor(private service: TaskService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<TaskInputModel> {
    return this.service.get(id)
  }
}
