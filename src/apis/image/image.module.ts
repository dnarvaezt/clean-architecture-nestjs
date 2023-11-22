import { Module } from '@nestjs/common'
import { ImageController, ImageService } from './infrastructure'

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
