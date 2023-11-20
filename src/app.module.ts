import { Module } from '@nestjs/common';
import { TaskModule } from './apis';

@Module({
  imports: [TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
