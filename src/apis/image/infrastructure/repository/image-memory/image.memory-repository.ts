import { ImageModel } from 'src/apis/image/application'
import { MemoryRepository } from 'src/core/repository/memory.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ImageMemoryRepository extends MemoryRepository<ImageModel> {}
