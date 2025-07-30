import { Brands } from 'src/schemas/brand.schema';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
export declare class BrandsService {
    private brandModel;
    private cacheManager;
    constructor(brandModel: Model<Brands>, cacheManager: Cache);
    addBrand(file: Express.Multer.File, body: any): Promise<string>;
    brandSearch(keyword: string, tags: string[]): Promise<any>;
    getAllApprovedBrands(page: number, tags: string[]): Promise<{
        brands: any;
        totalPages: number;
    }>;
    getAllBrandsForDashboard(page: number, status: string): Promise<{
        brands: any;
        totalPages: number;
    }>;
    getBrandById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Brands, {}> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Brands, {}> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Brands, "findOne", {}>;
    brandDashboardSearch(search: string, status: string): Promise<any>;
    deleteBrand(id: string): Promise<string>;
    updateBrand(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, Brands, {}> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
