import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      minlength: [2, 'Product name must be at least 2 characters long'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be greater than or equal to zero']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    sku: {
      type: String,
      required: [true, 'SKU identifier is required'],
      unique: true,
      trim: true
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'Stock cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'Stock must be an integer'
      }
    }
  },
  {
    timestamps: true
  }
);

export default model('Product', productSchema);
