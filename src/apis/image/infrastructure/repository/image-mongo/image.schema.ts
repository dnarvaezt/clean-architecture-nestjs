import { Document, HydratedDocument } from 'mongoose'
import { ImageModel } from 'src/apis/image/application'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class ImageMongoModel extends Document implements ImageModel {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  public id: string

  @Prop()
  public src: string
}

export type ImageDocument = HydratedDocument<ImageMongoModel>

export const ImageMongoSchema = SchemaFactory.createForClass(ImageMongoModel)
