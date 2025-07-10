import { Injectable } from '@nestjs/common';
import { imagekit } from '../util/imagekit.config';
import { InjectModel } from '@nestjs/mongoose';
import { Brands } from 'src/schemas/brand.schema';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brands.name) private brandModel: Model<Brands>) {}

  async addBrand(file: Express.Multer.File, body: any) {

    
    const imgURl = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });

    await this.brandModel.create({
      name: body.name,
      description: body.description,
      image: imgURl.url,
    });
    return 'File uploaded successfully!';
  }
}
