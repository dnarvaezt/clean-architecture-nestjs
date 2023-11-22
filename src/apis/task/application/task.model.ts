import { injectProperties } from 'src/core'

export class TaskModel {
  public id: string = ''
  public name: string = ''
  public description: string = ''

  constructor(init: Partial<TaskModel> = {}) {
    injectProperties<TaskModel>(this, init)
  }
}
