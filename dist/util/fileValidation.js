"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const common_1 = require("@nestjs/common");
exports.multerOptions = {
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpeg|png)$/)) {
            return callback(new common_1.BadRequestException('Only JPEG and PNG image files are allowed!'), false);
        }
        callback(null, true);
    },
};
//# sourceMappingURL=fileValidation.js.map