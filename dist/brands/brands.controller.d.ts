import { BrandsService } from './brands.service';
import { addBrandDto, PatchBrandDto } from './dto/brands.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    getAllApprovedBrands(page: number, tags: string[]): Promise<{}>;
    brandSearch(search: string, tags: string[]): Promise<any>;
    addBrand(file: Express.Multer.File, body: addBrandDto): Promise<string>;
    getBrandById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/brand.schema").Brands, {}> & import("../schemas/brand.schema").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../schemas/brand.schema").Brands, {}> & import("../schemas/brand.schema").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("../schemas/brand.schema").Brands, "findOne", {}>;
    getAllBrandsForDashboard(page: number, status: string): Promise<{
        brands: any;
        totalPages: number;
    }>;
    deleteBrand(id: string): Promise<string>;
    updateBrand(id: string, body: PatchBrandDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/brand.schema").Brands, {}> & import("../schemas/brand.schema").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
