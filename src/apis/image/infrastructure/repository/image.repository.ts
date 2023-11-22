import { providerFactory, Repository } from 'src/core'
import { EnvironmentEnum } from 'src/core/environment.enum'
import { ImageModel } from '../../application'
import { ImageMemoryRepository } from './image-memory/image.memory-repository'
import { tasksData } from './image-memory/image.memory.data'
import { ImageMongoRepository } from './image-mongo/image.mongo-repository'

export const imageRepository: Repository<ImageModel> = providerFactory({
  [EnvironmentEnum.Production]: new ImageMemoryRepository(tasksData),
  [EnvironmentEnum.Test]: new ImageMemoryRepository(tasksData),
  [EnvironmentEnum.Development]: new ImageMongoRepository(),
  [EnvironmentEnum.Local]: new ImageMemoryRepository(tasksData),
  [EnvironmentEnum.Mocked]: new ImageMemoryRepository(tasksData),
})
