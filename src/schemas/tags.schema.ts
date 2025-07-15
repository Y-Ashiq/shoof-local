import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Tags {
  @Prop({ unique: true })
  tag: string;
}

export const TagsSchema = SchemaFactory.createForClass(Tags);
