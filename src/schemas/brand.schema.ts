import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Brands {
  @Prop({ required: true, type: String })
  name: String;

  @Prop({ required: true, type: String })
  description: String;

  @Prop({ required: true, type: Object })
  image: object;
}

export const BrandSchema = SchemaFactory.createForClass(Brands);
