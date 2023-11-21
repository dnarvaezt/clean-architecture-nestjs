import { injectProperties } from 'src/core'

export class TaskDto {
  public id: string = ''
  public name: string = ''
  public description: string = ''

  constructor(init: Partial<TaskDto> = {}) {
    injectProperties<TaskDto>(this, init)
  }
}
