import { Injectable } from '@nestjs/common'
import { TaskProvider } from './task.provider'
import { TaskRepository } from './task.repository'

@Injectable()
export class TaskService extends TaskProvider implements TaskRepository {}
