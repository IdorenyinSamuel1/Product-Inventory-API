import mongoose from 'mongoose';

export const errorHandler = (err, req, res, next) => {
  // Handle Mongoose Duplicate Key (Code 11000) for SKU field
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: 'Conflict: A product with this SKU already exists.'
    });
  }

  // Handle Mongoose Validation Errors
  if (err instanceof mongoose.Error.ValidationError) {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: messages
    });
  }

  // Handle Mongoose Cast Error (Malformed ObjectIDs)
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: `Invalid format for field: ${err.path}. Expected valid MongoDB ObjectId.`
    });
  }

  // Default fallback internal server error code
  console.error(err);
  return res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.'
  });
};
