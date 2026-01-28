import { Router } from 'express';
import { Homestay, Place } from '../models/index.js';
import ApiError from '../utils/ApiError.js';

const router = Router();

/**
 * GET /api/homestays
 * List homestays with filters
 */
router.get('/', async (req, res, next) => {
    try {
        const {
            placeId,
            minPrice,
            maxPrice,
            verified,
            amenities,
            page = 1,
            limit = 20
        } = req.query;

        // Build filter
        const filter = {};
        if (placeId) filter.placeId = placeId;
        if (verified !== undefined) filter.verified = verified === 'true';
        if (minPrice || maxPrice) {
            filter.pricePerNight = {};
            if (minPrice) filter.pricePerNight.$gte = parseInt(minPrice);
            if (maxPrice) filter.pricePerNight.$lte = parseInt(maxPrice);
        }
        if (amenities) {
            filter.amenities = { $all: amenities.split(',') };
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [homestays, total] = await Promise.all([
            Homestay.find(filter)
                .populate('placeId', 'name districtId')
                .skip(skip)
                .limit(parseInt(limit))
                .sort({ pricePerNight: 1 }),
            Homestay.countDocuments(filter)
        ]);

        res.json({
            success: true,
            count: homestays.length,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / parseInt(limit)),
            data: homestays
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/homestays/amenities
 * Get all available amenities
 */
router.get('/amenities', async (req, res, next) => {
    try {
        const homestays = await Homestay.find({}, { amenities: 1 });
        const allAmenities = new Set();
        homestays.forEach(h => h.amenities.forEach(a => allAmenities.add(a)));

        res.json({
            success: true,
            data: [...allAmenities].sort()
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/homestays/:id
 * Get single homestay with place details
 */
router.get('/:id', async (req, res, next) => {
    try {
        const homestay = await Homestay.findById(req.params.id)
            .populate({
                path: 'placeId',
                populate: { path: 'districtId' }
            });

        if (!homestay) {
            throw ApiError.notFound('Homestay not found');
        }

        res.json({
            success: true,
            data: homestay
        });
    }
    catch (error) {
        next(error);
    }
});

export default router;
