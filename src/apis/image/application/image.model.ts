import { injectProperties } from 'src/core'

export class ImageModel {
  public id: string = ''
  public src: string = ''

  constructor(init: Partial<ImageModel> = {}) {
    injectProperties<ImageModel>(this, init)
  }
}
