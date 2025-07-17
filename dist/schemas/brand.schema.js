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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSchema = exports.Brands = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Brands = class Brands {
    name;
    description;
    image;
    tags;
    links;
    status;
    primaryColor;
};
exports.Brands = Brands;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Brands.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Brands.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Object }),
    __metadata("design:type", Object)
], Brands.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose_2.Types.ObjectId, ref: 'Tags' }],
        validate: [
            {
                validator: function (tags) {
                    return Array.isArray(tags) && tags.length <= 10;
                },
                message: 'A brand can have at most 10 tags.',
            },
            {
                validator: function (tags) {
                    return (Array.isArray(tags) &&
                        new Set(tags.map(String)).size === tags.length);
                },
                message: 'Tags must be unique.',
            },
        ],
    }),
    __metadata("design:type", Array)
], Brands.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
    }),
    __metadata("design:type", Array)
], Brands.prototype, "links", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    }),
    __metadata("design:type", String)
], Brands.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", String)
], Brands.prototype, "primaryColor", void 0);
exports.Brands = Brands = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
    })
], Brands);
exports.BrandSchema = mongoose_1.SchemaFactory.createForClass(Brands);
//# sourceMappingURL=brand.schema.js.map