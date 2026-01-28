import { Router } from 'express';
import { Place, FestivalMaster, Guide, Homestay } from '../models/index.js';

const router = Router();

/**
 * GET /api/search
 * Full-text search across places and festivals
 */
router.get('/', async (req, res, next) => {
    try {
        const { q, type, limit = 20 } = req.query;

        if (!q || q.trim().length < 2) {
            return res.json({
                success: true,
                count: 0,
                data: { places: [], festivals: [], guides: [], homestays: [] }
            });
        }

        const searchQuery = q.trim();
        const limitNum = parseInt(limit);
        const regex = new RegExp(searchQuery, 'i');

        // Build result based on type filter
        const results = {};

        if (!type || type === 'places') {
            results.places = await Place.find({
                $or: [
                    { name: regex },
                    { shortDescription: regex },
                    { type: regex }
                ]
            })
                .populate('districtId', 'stateName districtName')
                .limit(limitNum);
        }

        if (!type || type === 'festivals') {
            results.festivals = await FestivalMaster.find({
                $or: [
                    { name: regex },
                    { description: regex }
                ]
            }).limit(limitNum);
        }

        if (!type || type === 'guides') {
            results.guides = await Guide.find({
                $or: [
                    { name: regex },
                    { specialties: regex }
                ]
            })
                .populate('districtId', 'stateName districtName')
                .limit(limitNum);
        }

        if (!type || type === 'homestays') {
            results.homestays = await Homestay.find({
                $or: [
                    { title: regex },
                    { hostName: regex }
                ]
            })
                .populate('placeId', 'name')
                .limit(limitNum);
        }

        const totalCount = Object.values(results).reduce((sum, arr) => sum + (arr?.length || 0), 0);

        res.json({
            success: true,
            query: searchQuery,
            count: totalCount,
            data: results
        });
    }
    catch (error) {
        next(error);
    }
});

export default router;
