import { Router } from 'express';
import { District, Place, Guide } from '../models/index.js';
import ApiError from '../utils/ApiError.js';

const router = Router();

/**
 * GET /api/districts
 * List all districts grouped by state
 */
router.get('/', async (req, res, next) => {
    try {
        const districts = await District.find().sort({ stateCode: 1, districtName: 1 });

        // Group by state
        const grouped = districts.reduce((acc, district) => {
            const state = district.stateName;
            if (!acc[state]) acc[state] = [];
            acc[state].push(district);
            return acc;
        }, {});

        res.json({
            success: true,
            count: districts.length,
            data: grouped
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/districts/list
 * Simple list of all districts
 */
router.get('/list', async (req, res, next) => {
    try {
        const districts = await District.find().sort({ stateName: 1, districtName: 1 });

        res.json({
            success: true,
            count: districts.length,
            data: districts
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/districts/by-state/:stateCode
 * Get districts by state code
 */
router.get('/by-state/:stateCode', async (req, res, next) => {
    try {
        const { stateCode } = req.params;
        const districts = await District.find({ stateCode: stateCode.toUpperCase() });

        if (districts.length === 0) {
            throw ApiError.notFound(`No districts found for state: ${stateCode}`);
        }

        res.json({
            success: true,
            count: districts.length,
            data: districts
        });
    }
    catch (error) {
        next(error);
    }
});

/**
 * GET /api/districts/:id
 * Get single district with stats
 */
router.get('/:id', async (req, res, next) => {
    try {
        const district = await District.findById(req.params.id);

        if (!district) {
            throw ApiError.notFound('District not found');
        }

        // Get counts
        const [placesCount, guidesCount] = await Promise.all([
            Place.countDocuments({ districtId: district._id }),
            Guide.countDocuments({ districtId: district._id })
        ]);

        res.json({
            success: true,
            data: {
                ...district.toObject(),
                stats: {
                    placesCount,
                    guidesCount
                }
            }
        });
    }
    catch (error) {
        next(error);
    }
});

export default router;
