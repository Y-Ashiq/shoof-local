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

  // @Prop({ type: [{ type: 'ObjectId', ref: 'Category' }] })
  // categories: string[];

  @Prop({
    type: [String],
    validate: [
      {
        validator: function (tags: string[]) {
          return Array.isArray(tags) && tags.length <= 10;
        },
        message: 'A brand can have at most 10 tags.',
      },
      {
        validator: function (tags: string[]) {
          return Array.isArray(tags) && new Set(tags).size === tags.length;
        },
        message: 'Tags must be unique.',
      },
    ],
  })
  tags: string[];

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
