"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIfeatures {
    mongoQuery;
    constructor(mongoQuery) {
        this.mongoQuery = mongoQuery;
    }
    filterByTags(tags) {
        if (tags && tags.length > 0) {
            this.mongoQuery = this.mongoQuery.find({ tags: { $in: tags } });
        }
        return this;
    }
    filterByStatus(status) {
        if (status) {
            this.mongoQuery = this.mongoQuery.find({ status });
        }
        return this;
    }
    pagination(page, limit) {
        const skip = (page - 1) * limit;
        this.mongoQuery = this.mongoQuery.skip(skip).limit(limit);
        return this;
    }
    getQuery() {
        return this.mongoQuery;
    }
    async getTotalPages(limit) {
        const totalDoc = await this.mongoQuery.clone().countDocuments();
        return Math.ceil(totalDoc / limit);
    }
}
exports.default = APIfeatures;
//# sourceMappingURL=APIfeatures.js.map