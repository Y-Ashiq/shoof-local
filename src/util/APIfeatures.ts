class APIfeatures {
  private mongoQuery: any;
  /**
   * @param mongoQuery - The Mongoose query object
   */
  constructor(mongoQuery: any) {
    this.mongoQuery = mongoQuery;
  }

  /**
   * Filters the query by an array of tags (if provided).
   * @param tags - Array of tag strings
   * @returns this (for chaining)
   */
  filterByTags(tags?: string[]) {
    if (tags && tags.length > 0) {
      this.mongoQuery = this.mongoQuery.find({ tags: { $in: tags } });
    }
    return this;
  }

  filterByStatus(status?: string) {
    if (status) {
      this.mongoQuery = this.mongoQuery.find({ status });
    }
    return this;
  }

  /**
   * Applies pagination to the Mongoose query.
   * @param page - The page number (1-based)
   * @param limit - Number of items per page
   * @returns this (for chaining)
   */
  pagination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    this.mongoQuery = this.mongoQuery.skip(skip).limit(limit);
    return this;
  }

  /**
   * Returns the built Mongoose query.
   */
  getQuery() {
    return this.mongoQuery;
  }

  /**
   * Calculates total pages based on the current query and limit.
   * @param limit - Number of items per page
   * @returns Total number of pages
   */
  async getTotalPages(limit: number): Promise<number> {
    const totalDoc = await this.mongoQuery.clone().countDocuments();
    return Math.ceil(totalDoc / limit);
  }
}

export default APIfeatures;
