import { Entity } from 'typeorm'
import { ImageModel } from '../application'

@Entity()
export class ImageEntity extends ImageModel {}
