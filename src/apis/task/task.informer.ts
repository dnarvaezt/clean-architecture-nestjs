import { Controller, Get, Param } from '@nestjs/common'
import { TaskDto } from './task.dto'
import { TaskModel } from './task.model'
import { TaskService } from './task.service'

@Controller('task')
export class TaskInformer {
  constructor(private service: TaskService) {}

  @Get()
  async getAll(): Promise<TaskDto[]> {
    const items: TaskModel[] = await this.service.search()
    return items.map(item => new TaskDto(item))
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<TaskModel> {
    return this.service.get(id)
  }
}
