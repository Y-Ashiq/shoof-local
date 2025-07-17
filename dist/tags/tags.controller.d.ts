import { TagsService } from './tags.service';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/tags.schema").Tags, {}> & import("../schemas/tags.schema").Tags & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/tags.schema").Tags, {}> & import("../schemas/tags.schema").Tags & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
