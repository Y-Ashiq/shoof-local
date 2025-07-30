import { Inject, Injectable } from '@nestjs/common';
import { imagekit } from '../util/imagekit.config';
import { InjectModel } from '@nestjs/mongoose';
import { Brands } from 'src/schemas/brand.schema';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
const getColors = require('get-image-colors');
import APIfeatures from '../util/APIfeatures';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brands.name) private brandModel: Model<Brands>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

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
    let mongoQuery = this.brandModel
      .find({
        name: { $regex: keyword, $options: 'i' },
        status: 'approved',
      })
      .populate('tags');

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
    let data = await this.cacheManager.get('brands');
    let totalPages: number = 0;
    
    if (!data) {

      const limit: number = 12;
      let mongoQuery = this.brandModel
        .find({ status: 'approved' })
        .populate('tags');

      const features = new APIfeatures(mongoQuery).filterByTags(tags);

      totalPages = await features.getTotalPages(limit);

      features.pagination(page, limit);
      const brands =await features.getQuery()
      data = await this.cacheManager.set("brands",brands)
      return { brands , totalPages };
    } else {

      return { brands: data, totalPages };
    }
  }

  /**
   * Retrieves all brands for dashboard (with status filter).
   * @returns List of all brands
   */
  async getAllBrandsForDashboard(page: number, status: string) {
    const limit: number = 12;
    let mongoQuery = this.brandModel.find();

    const features = new APIfeatures(mongoQuery).filterByStatus(status);

    const totalPages = await features.getTotalPages(limit);
    features.pagination(page, limit);

    return { brands: await features.getQuery(), totalPages };
  }

  /**
   * Retrieves a brand by its ID.
   * @param id - Brand ID
   * @returns Brand document
   * @throws Error if not found
   */
  getBrandById(id: string) {
    const brand = this.brandModel.findById(id).populate('tags');
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  }

  async brandDashboardSearch(search: string, status: string) {
    let filter: any = {
      name: { $regex: search, $options: 'i' },
    };

    if (status) {
      filter.status = status;
    }

    let mongoQuery = this.brandModel.find(filter);

    const features = new APIfeatures(mongoQuery);

    return await features.getQuery();
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
