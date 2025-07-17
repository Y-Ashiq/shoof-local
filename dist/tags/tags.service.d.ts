import { Model } from 'mongoose';
import { Tags } from 'src/schemas/tags.schema';
export declare class TagsService {
    private tagModel;
    constructor(tagModel: Model<Tags>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Tags, {}> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: number): Promise<(import("mongoose").Document<unknown, {}, Tags, {}> & Tags & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
