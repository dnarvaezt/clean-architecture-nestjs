import { Model } from 'mongoose'
import { ImageModel } from 'src/apis/image/application'
import { IFilter, Repository } from 'src/core'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { imageConnection } from './image.connection'
import { ImageMongoModel } from './image.schema'

@Injectable()
export class ImageMongoRepository extends Repository<ImageModel> {
  @InjectModel(ImageMongoModel.name)
  private taskModel: Model<ImageMongoModel> = imageConnection

  async get(id: string, args?: any): Promise<ImageModel> {
    const item = await this.taskModel.findById(`${id}`).exec()
    return this.inputFormat(item || {})
  }

  async set(value: ImageModel | ImageModel[], args?: any): Promise<any> {
    const task = new this.taskModel(value)
    return task.save()
  }

  async update(value: ImageModel | ImageModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async delete(value: string | ImageModel | string[] | ImageModel[], args?: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async count(filter?: IFilter, args?: any): Promise<number> {
    throw new Error('Method not implemented.')
  }

  async search(filter?: IFilter, args?: any): Promise<ImageModel[]> {
    const items = await this.taskModel.find().exec()
    return items.map(item => this.inputFormat(item))
  }

  async searchPaginator(
    filter?: IFilter,
    args?: any
  ): Promise<{ data: ImageModel[]; count: number }> {
    throw new Error('Method not implemented.')
  }

  private inputFormat(data: any): ImageModel {
    return new ImageModel(JSON.parse(JSON.stringify(data)))
  }
}
