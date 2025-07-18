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
exports.TagsSchema = exports.Tags = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Tags = class Tags {
    tag;
};
exports.Tags = Tags;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Tags.prototype, "tag", void 0);
exports.Tags = Tags = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], Tags);
exports.TagsSchema = mongoose_1.SchemaFactory.createForClass(Tags);
//# sourceMappingURL=tags.schema.js.map