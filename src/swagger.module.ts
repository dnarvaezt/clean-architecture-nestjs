import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function mountSwagger(
  app: INestApplication<any>,
  data: { title: string; description: string; version: string; tag: string }
) {
  const config = new DocumentBuilder()
    .setTitle(data.title)
    .setDescription(data.description)
    .setVersion(data.version)
    .addTag(data.tag)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}
