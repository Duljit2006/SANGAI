import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './config/database.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    }
});
app.use('/api', limiter);

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'SANGAI API',
        version: '1.0.0',
        description: 'Backend API for Northeast India Travel Platform',
        endpoints: {
            health: '/api/health',
            districts: '/api/districts',
            places: '/api/places',
            homestays: '/api/homestays',
            guides: '/api/guides',
            festivals: '/api/festivals',
            search: '/api/search',
            tags: '/api/tags'
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`
    });
});

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        app.listen(PORT, () => {
            console.log(`\n🚀 SANGAI API running on port ${PORT}`);
            console.log(`📍 http://localhost:${PORT}`);
            console.log(`\n📚 Endpoints:`);
            console.log(`   GET /api/districts`);
            console.log(`   GET /api/places`);
            console.log(`   GET /api/homestays`);
            console.log(`   GET /api/guides`);
            console.log(`   GET /api/festivals`);
            console.log(`   GET /api/search?q=`);
            console.log(`   GET /api/tags`);
            console.log(`   GET /api/health\n`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
