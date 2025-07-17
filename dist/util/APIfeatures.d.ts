declare class APIfeatures {
    private mongoQuery;
    constructor(mongoQuery: any);
    filterByTags(tags?: string[]): this;
    filterByStatus(status?: string): this;
    pagination(page: number, limit: number): this;
    getQuery(): any;
    getTotalPages(limit: number): Promise<number>;
}
export default APIfeatures;
