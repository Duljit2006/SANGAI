import { Router } from 'express';
import { Guide } from '../models/index.js';
import ApiError from '../utils/ApiError.js';

const router = Router();

/**
 * GET /api/guides
 * List guides with filters
 */
router.get('/', async (req, res, next) => {
    try {
        const {
            district,
            language,
            specialty,
            verified,
            minRating,
            page = 1,
            limit = 20
        } = req.query;

        // Build filter
        const filter = {};
        if (district) filter.districtId = district;
        if (language) filter.languages = language;
        if (specialty) filter.specialties = specialty;
        if (verified !== undefined) filter.verified = verified === 'true';
        if (minRating) filter.rating = { $gte: parseFloat(minRating) };

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [guides, total] = await Promise.all([
            Guide.find(filter)
                .populate('districtId', 'stateName districtName')
                .skip(skip)
                .limit(parseInt(limit))
                .sort({ rating: -1 }),
            Guide.countDocuments(filter)
        ]);

        res.json({
            success: true,
            count: guides.length,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / parseInt(limit)),
            data: guides
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/guides/languages
 * Get all available languages
 */
router.get('/languages', async (req, res, next) => {
    try {
        const languages = await Guide.distinct('languages');

        res.json({
            success: true,
            data: languages.sort()
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/guides/specialties
 * Get all available specialties
 */
router.get('/specialties', async (req, res, next) => {
    try {
        const specialties = await Guide.distinct('specialties');

        res.json({
            success: true,
            data: specialties.sort()
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/guides/:id
 * Get single guide
 */
router.get('/:id', async (req, res, next) => {
    try {
        const guide = await Guide.findById(req.params.id)
            .populate('districtId');

        if (!guide) {
            throw ApiError.notFound('Guide not found');
        }

        res.json({
            success: true,
            data: guide
        });
    }
    catch (error) {
        next(error);
    }
});

export default router;
