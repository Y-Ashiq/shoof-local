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
    body.image = imgURl.url;
    await this.brandModel.create(body);
    return 'File uploaded successfully!';
  }

  getAllBrands() {
    return this.brandModel.find({ status: 'approved' });
  }

  getAllApprovedBrands() {
    return this.brandModel.find({ status: 'approved' });
  }

  getAllBrandsForDashboard() {
    let brands = this.brandModel.find();
    return brands;
  }

  getBrandById(id: string) {
    const brand = this.brandModel.findById(id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  }
  brandSearch(keyword: string) {
    const brand = this.brandModel.find({
      name: { $regex: keyword, $options: 'i' },
      status: 'approved',
    });
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  }

  async deleteBrand(id: string) {
    const brand = await this.brandModel.findByIdAndDelete(id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    return 'Brand deleted successfully!';
  }
  async updateBrand(id: string, body: any) {
    const brand = await this.brandModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  }
}
