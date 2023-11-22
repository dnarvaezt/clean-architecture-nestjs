import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { TaskModel } from '../application'
import { TaskDto } from './task.dto'
import { TaskEntity } from './task.entity'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private service: TaskService) {}

  @Get()
  async getAll(): Promise<TaskDto[]> {
    const items: TaskModel[] = await this.service.search()
    return items.map(item => new TaskDto(JSON.parse(JSON.stringify(item))))
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<TaskModel> {
    return this.service.get(`${id}`)
  }

  @Post()
  set(@Body() task: TaskEntity) {
    return this.service.set(task)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id)
  }
}
