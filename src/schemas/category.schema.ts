import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
