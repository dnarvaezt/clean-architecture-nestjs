import { Module } from '@nestjs/common'
import { TaskModule } from './apis'
import { ImageModule } from './apis/image/image.module'

@Module({
  imports: [TaskModule, ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
