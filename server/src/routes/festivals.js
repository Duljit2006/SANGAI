import { Router } from 'express';
import { FestivalMaster, FestivalOccurrence } from '../models/index.js';
import ApiError from '../utils/ApiError.js';

const router = Router();

/**
 * GET /api/festivals
 * List all festivals
 */
router.get('/', async (req, res, next) => {
    try {
        const festivals = await FestivalMaster.find().sort({ name: 1 });

        res.json({
            success: true,
            count: festivals.length,
            data: festivals
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/festivals/upcoming
 * Get upcoming festival occurrences
 */
router.get('/upcoming', async (req, res, next) => {
    try {
        const { district, limit = 10 } = req.query;
        const now = new Date();

        const filter = { startDate: { $gte: now } };
        if (district) filter.districtId = district;

        const occurrences = await FestivalOccurrence.find(filter)
            .populate('festivalId')
            .populate('districtId', 'stateName districtName')
            .sort({ startDate: 1 })
            .limit(parseInt(limit));

        res.json({
            success: true,
            count: occurrences.length,
            data: occurrences
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/festivals/by-month/:month
 * Get festivals by month (1-12)
 */
router.get('/by-month/:month', async (req, res, next) => {
    try {
        const month = parseInt(req.params.month);
        if (month < 1 || month > 12) {
            throw ApiError.badRequest('Month must be between 1 and 12');
        }

        // Get occurrences where startDate month matches
        const occurrences = await FestivalOccurrence.aggregate([
            {
                $match: {
                    $expr: { $eq: [{ $month: '$startDate' }, month] }
                }
            },
            {
                $lookup: {
                    from: 'festivalmasters',
                    localField: 'festivalId',
                    foreignField: '_id',
                    as: 'festival'
                }
            },
            { $unwind: '$festival' },
            {
                $lookup: {
                    from: 'districts',
                    localField: 'districtId',
                    foreignField: '_id',
                    as: 'district'
                }
            },
            { $unwind: '$district' },
            { $sort: { startDate: 1 } }
        ]);

        res.json({
            success: true,
            count: occurrences.length,
            data: occurrences
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/festivals/:id
 * Get festival with all occurrences
 */
router.get('/:id', async (req, res, next) => {
    try {
        const festival = await FestivalMaster.findById(req.params.id);

        if (!festival) {
            throw ApiError.notFound('Festival not found');
        }

        const occurrences = await FestivalOccurrence.find({ festivalId: festival._id })
            .populate('districtId', 'stateName districtName')
            .sort({ startDate: 1 });

        res.json({
            success: true,
            data: {
                ...festival.toObject(),
                occurrences
            }
        });
    }
    catch (error) {
        next(error);
    }
});

export default router;
