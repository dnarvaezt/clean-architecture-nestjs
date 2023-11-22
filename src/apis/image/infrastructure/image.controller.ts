import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ImageModel } from '../application'
import { ImageDto } from './image.dto'
import { ImageEntity } from './image.entity'
import { ImageService } from './image.service'

@Controller('image')
export class ImageController {
  constructor(private service: ImageService) {}

  @Get()
  async getAll(): Promise<ImageDto[]> {
    const items: ImageModel[] = await this.service.search()
    return items.map(item => new ImageDto(JSON.parse(JSON.stringify(item))))
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ImageModel> {
    return this.service.get(`${id}`)
  }

  @Post()
  set(@Body() task: ImageEntity) {
    return this.service.set(task)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id)
  }
}
