export declare class Category {
    name: string;
    description?: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category, any> & Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>, {}> & import("mongoose").FlatRecord<Category> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
