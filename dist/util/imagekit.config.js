"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagekit = void 0;
const dotenv = require("dotenv");
dotenv.config();
const ImageKit = require("imagekit");
exports.imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
});
//# sourceMappingURL=imagekit.config.js.map