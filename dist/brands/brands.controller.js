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
exports.BrandsController = void 0;
const brands_service_1 = require("./brands.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const brands_dto_1 = require("./dto/brands.dto");
const fileValidation_1 = require("../util/fileValidation");
const auth_guard_1 = require("../guard/auth.guard");
let BrandsController = class BrandsController {
    brandsService;
    constructor(brandsService) {
        this.brandsService = brandsService;
    }
    getAllApprovedBrands(page, tags) {
        return this.brandsService.getAllApprovedBrands(page, tags);
    }
    brandSearch(search, tags) {
        return this.brandsService.brandSearch(search, tags);
    }
    addBrand(file, body) {
        return this.brandsService.addBrand(file, body);
    }
    getBrandById(id) {
        return this.brandsService.getBrandById(id);
    }
    getAllBrandsForDashboard(page, status) {
        return this.brandsService.getAllBrandsForDashboard(page, status);
    }
    deleteBrand(id) {
        return this.brandsService.deleteBrand(id);
    }
    updateBrand(id, body) {
        return this.brandsService.updateBrand(id, body);
    }
};
exports.BrandsController = BrandsController;
__decorate([
    (0, common_1.Get)('brands'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "getAllApprovedBrands", null);
__decorate([
    (0, common_1.Get)('brands/search/'),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "brandSearch", null);
__decorate([
    (0, common_1.Post)('submit-brand'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', fileValidation_1.multerOptions)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, brands_dto_1.addBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "addBrand", null);
__decorate([
    (0, common_1.Get)('brands/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "getBrandById", null);
__decorate([
    (0, common_1.Get)('dashboard/brands'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "getAllBrandsForDashboard", null);
__decorate([
    (0, common_1.Delete)('dashboard/brands/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "deleteBrand", null);
__decorate([
    (0, common_1.Patch)('dashboard/brands/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, brands_dto_1.PatchBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "updateBrand", null);
exports.BrandsController = BrandsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [brands_service_1.BrandsService])
], BrandsController);
//# sourceMappingURL=brands.controller.js.map