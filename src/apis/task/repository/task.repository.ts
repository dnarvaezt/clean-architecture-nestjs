import { Repository } from 'src/core/repository'
import { TaskModel } from '../task.model'

export abstract class TaskRepository extends Repository<TaskModel> {}
