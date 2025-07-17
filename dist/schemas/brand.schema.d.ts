import { Types } from 'mongoose';
export declare class Brands {
    name: String;
    description: String;
    image: object;
    tags: Types.ObjectId[];
    links: string[];
    status: string;
    primaryColor: string;
}
export declare const BrandSchema: import("mongoose").Schema<Brands, import("mongoose").Model<Brands, any, any, any, import("mongoose").Document<unknown, any, Brands, any> & Brands & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Brands, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Brands>, {}> & import("mongoose").FlatRecord<Brands> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
