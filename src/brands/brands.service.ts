import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { imagekit } from '../util/imagekit.config';
import { InjectModel } from '@nestjs/mongoose';
import { Brands } from 'src/schemas/brand.schema';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
const getColors = require('get-image-colors');
import APIfeatures from '../util/APIfeatures';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brands.name) private brandModel: Model<Brands>) {}

  /**
   * Uploads a brand image, extracts primary color, and creates a new brand document.
   * @param file - Uploaded image file
   * @param body - Brand data
   * @returns Success message
   */
  async addBrand(file: Express.Multer.File, body: any) {
    const imgURl = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });

    const tempPath = path.join(__dirname, `${Date.now()}-${file.originalname}`);
    fs.writeFileSync(tempPath, file.buffer);

    const colors = await getColors(tempPath);
    const primColor = colors.map((color: any) => color.hex());

    fs.unlinkSync(tempPath);

    body.image = imgURl.url;
    body.primaryColor = primColor[0];
    await this.brandModel.create(body);
    return 'File uploaded successfully!';
  }

 
  /**
   * Searches for approved brands by keyword (case-insensitive).
   * @param keyword - Search term
   * @returns List of matching brands
   */
  async brandSearch(keyword: string, tags: string[]) {
    let mongoQuery = this.brandModel.find({
      name: { $regex: keyword, $options: 'i' },
      status: 'approved',
    });

    const features = new APIfeatures(mongoQuery).filterByTags(tags);

    return await features.getQuery();
  }
  /**
   * Retrieves paginated, approved brands, optionally filtered by tags.
   * @param page - Page number
   * @param tags - Array of tag strings
   * @returns List of brands
   */
  async getAllApprovedBrands(page: number, tags: string[]) {
    const limit: number = 10;
    let mongoQuery = this.brandModel.find({ status: 'approved' }).populate("tags");

    const features = new APIfeatures(mongoQuery).filterByTags(tags).pagination(page, limit);

    return await features.getQuery();
  }

  /**
   * Retrieves all brands for dashboard (no status filter).
   * @returns List of all brands
   */
  getAllBrandsForDashboard() {
    let brands = this.brandModel.find();
    return brands;
  }

  /**
   * Retrieves a brand by its ID.
   * @param id - Brand ID
   * @returns Brand document
   * @throws Error if not found
   */
  getBrandById(id: string) {
    const brand = this.brandModel.findById(id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  }

  /**
   * Deletes a brand by its ID.
   * @param id - Brand ID
   * @returns Success message
   * @throws Error if not found
   */
  async deleteBrand(id: string) {
    const brand = await this.brandModel.findByIdAndDelete(id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    return 'Brand deleted successfully!';
  }
  /**
   * Updates a brand by its ID.
   * @param id - Brand ID
   * @param body - Updated brand data
   * @returns Updated brand document
   * @throws Error if not found
   */
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
