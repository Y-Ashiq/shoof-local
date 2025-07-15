import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

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

  // @Prop({ type: [{ type: 'ObjectId', ref: 'Category' }] })
  // categories: string[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Tags' }],
    validate: [
      {
        validator: function (tags: Types.ObjectId[]) {
          return Array.isArray(tags) && tags.length <= 10;
        },
        message: 'A brand can have at most 10 tags.',
      },
      {
        validator: function (tags: Types.ObjectId[]) {
          return (
            Array.isArray(tags) &&
            new Set(tags.map(String)).size === tags.length
          );
        },
        message: 'Tags must be unique.',
      },
    ],
  })
  tags: Types.ObjectId[];

  @Prop({
    type: [String],
  })
  links: string[];

  @Prop({
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status: string;

  @Prop({ type: String, default: null })
  primaryColor: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brands);
