import { Injectable } from '@nestjs/common'
import { ImageManager } from '../application/image.manager'
import { imageRepository } from './repository/image.repository'

@Injectable()
export class ImageService extends ImageManager {
  constructor() {
    super(imageRepository)
  }
}
