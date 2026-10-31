import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import productRoutes from './routes/productRoute.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load ENV configs
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Parsing JSON body structures middleware
app.use(express.json());

// Routes assignment
app.use('/api/products', productRoutes);

// Error Handling Lifecycle Engine (Always place this after defined routers)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server executing in environment on port ${PORT}`);
});
