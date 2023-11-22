import { Entity } from 'typeorm'
import { TaskModel } from '../application'

@Entity()
export class TaskEntity extends TaskModel {}
