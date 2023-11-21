import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { mountSwagger } from './swagger.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  mountSwagger(app, {
    title: 'clean-architecture-nestjs',
    description: 'apis',
    version: '1.0.0',
    tag: 'apis',
  })

  await app.listen(3000)
}
bootstrap()
