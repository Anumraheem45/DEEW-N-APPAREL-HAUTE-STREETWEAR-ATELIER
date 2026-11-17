import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

export const app = express();

// Security and utility middlewares
app.use(cors({
  origin: [config.clientUrl, 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'DEEWĀN APPAREL (دیوان)',
    tagline: 'HAUTE STREETWEAR ATELIER',
    environment: config.nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// Mount modular API routers
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// 404 handler
app.use(notFoundHandler);

// Centralized error handler
app.use(errorHandler);
