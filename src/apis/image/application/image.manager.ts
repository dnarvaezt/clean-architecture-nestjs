import { Repository } from 'src/core'
import { ImageModel } from './image.model'

export class ImageManager implements Repository<ImageModel> {
  constructor(private taskRepository: Repository<ImageModel>) {}

  get(id: string, args?: any): Promise<ImageModel> {
    return this.taskRepository.get(id, args)
  }

  set(value: ImageModel | ImageModel[], args?: any): Promise<any> {
    return this.taskRepository.set(value, args)
  }

  update(value: ImageModel | ImageModel[], args?: any): Promise<any> {
    return this.taskRepository.update(value, args)
  }

  delete(value: string | ImageModel | string[] | ImageModel[], args?: any): Promise<any> {
    return this.taskRepository.delete(value, args)
  }

  count(filter?: any, args?: any): Promise<number> {
    return this.taskRepository.count(filter, args)
  }

  search(filter?: any, args?: any): Promise<ImageModel[]> {
    return this.taskRepository.search(filter, args)
  }

  searchPaginator(filter?: any, args?: any): Promise<{ data: ImageModel[]; count: number }> {
    return this.taskRepository.searchPaginator(filter, args)
  }
}
