import { BadRequestException } from '@nestjs/common';

export const multerOptions = {
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.match(/\/(jpeg|png)$/)) {
      return callback(
        new BadRequestException('Only JPEG and PNG image files are allowed!'),
        false,
      );
    }
    callback(null, true);
  },
};
