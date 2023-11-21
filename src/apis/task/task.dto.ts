import { injectProperties } from 'src/core'
import { TaskModel } from './task.model'

export class TaskDto extends TaskModel {
  public active: boolean = false

  constructor(init: Partial<TaskDto> = {}) {
    super(init)
    injectProperties<TaskDto>(this, init)

    this.active = true
  }
}
