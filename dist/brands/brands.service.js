"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const imagekit_config_1 = require("../util/imagekit.config");
const mongoose_1 = require("@nestjs/mongoose");
const brand_schema_1 = require("../schemas/brand.schema");
const mongoose_2 = require("mongoose");
const fs = require("fs");
const path = require("path");
const getColors = require('get-image-colors');
const APIfeatures_1 = require("../util/APIfeatures");
const cache_manager_1 = require("@nestjs/cache-manager");
let BrandsService = class BrandsService {
    brandModel;
    cacheManager;
    constructor(brandModel, cacheManager) {
        this.brandModel = brandModel;
        this.cacheManager = cacheManager;
    }
    async addBrand(file, body) {
        const imgURl = await imagekit_config_1.imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
        });
        const tempPath = path.join(__dirname, `${Date.now()}-${file.originalname}`);
        fs.writeFileSync(tempPath, file.buffer);
        const colors = await getColors(tempPath);
        const primColor = colors.map((color) => color.hex());
        fs.unlinkSync(tempPath);
        body.image = imgURl.url;
        body.primaryColor = primColor[0];
        await this.brandModel.create(body);
        return 'File uploaded successfully!';
    }
    async brandSearch(keyword, tags) {
        let mongoQuery = this.brandModel
            .find({
            name: { $regex: keyword, $options: 'i' },
            status: 'approved',
        })
            .populate('tags');
        const features = new APIfeatures_1.default(mongoQuery).filterByTags(tags);
        return await features.getQuery();
    }
    async getAllApprovedBrands(page, tags) {
        const data = await this.cacheManager.get('brands');
        let totalPages = 0;
        if (!data) {
            const limit = 12;
            let mongoQuery = this.brandModel
                .find({ status: 'approved' })
                .populate('tags');
            const features = new APIfeatures_1.default(mongoQuery).filterByTags(tags);
            totalPages = await features.getTotalPages(limit);
            features.pagination(page, limit);
            return { brands: await features.getQuery(), totalPages };
        }
        else {
            return { brands: data, totalPages };
        }
    }
    async getAllBrandsForDashboard(page, status) {
        const limit = 12;
        let mongoQuery = this.brandModel.find();
        const features = new APIfeatures_1.default(mongoQuery).filterByStatus(status);
        const totalPages = await features.getTotalPages(limit);
        features.pagination(page, limit);
        return { brands: await features.getQuery(), totalPages };
    }
    getBrandById(id) {
        const brand = this.brandModel.findById(id).populate('tags');
        if (!brand) {
            throw new Error('Brand not found');
        }
        return brand;
    }
    async brandDashboardSearch(search, status) {
        let filter = {
            name: { $regex: search, $options: 'i' },
        };
        if (status) {
            filter.status = status;
        }
        let mongoQuery = this.brandModel.find(filter);
        const features = new APIfeatures_1.default(mongoQuery);
        return await features.getQuery();
    }
    async deleteBrand(id) {
        const brand = await this.brandModel.findByIdAndDelete(id);
        if (!brand) {
            throw new Error('Brand not found');
        }
        return 'Brand deleted successfully!';
    }
    async updateBrand(id, body) {
        const brand = await this.brandModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        if (!brand) {
            throw new Error('Brand not found');
        }
        return brand;
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(brand_schema_1.Brands.name)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], BrandsService);
//# sourceMappingURL=brands.service.js.map