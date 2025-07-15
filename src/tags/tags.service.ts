import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tags } from 'src/schemas/tags.schema';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tags.name) private tagModel: Model<Tags>) {}

  async findAll() {
    let tags = await this.tagModel.find().sort({tags:1});
    return tags;
  }

  async findOne(id: number) {

    let tag = await this.tagModel.findById(id);
    return tag;
  }
}
