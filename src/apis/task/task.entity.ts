import { injectProperties } from 'src/core'

export class TaskEntity {
  public id: string = ''
  public name: string = ''
  public description: string = ''

  constructor(init: Partial<TaskEntity> = {}) {
    injectProperties<TaskEntity>(this, init)
  }
}
