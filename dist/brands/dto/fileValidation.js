"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
exports.multerOptions = {
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpeg|png|)$/)) {
            req.fileValidationError = 'Only image files are allowed!';
            return callback(null, false, new Error('Only image files are allowed!'));
        }
        callback(null, true);
    },
};
//# sourceMappingURL=fileValidation.js.map