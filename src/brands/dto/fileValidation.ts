export const multerOptions = {
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return callback(null, false, new Error('Only image files are allowed!'));
    }
    callback(null, true);
  },
};
