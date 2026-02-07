
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, '../.env') });

import mongoose from 'mongoose';
import connectDB from '../src/config/database.js';
import { Place, District } from '../src/models/index.js';
import { destinationsPart1 } from './destinations_part1.js';
import { destinationsPart2 } from './destinations_part2.js';

// START DNS WORKAROUND
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
// END DNS WORKAROUND

const allDestinations = [...destinationsPart1, ...destinationsPart2];

const seedDestinations = async () => {
    try {
        await connectDB();
        console.log(`🌱 Seeding ${allDestinations.length} destinations...`);

        // 1. Get all valid District IDs to verify content
        const districtDocs = await District.find({}, '_id districtName');
        const validDistrictIds = new Set(districtDocs.map(d => d._id));
        const districtNameMap = {}; // name -> id for fallback
        districtDocs.forEach(d => {
            districtNameMap[d.districtName.toLowerCase()] = d._id;
        });

        for (const dest of allDestinations) {
            let finalDistrictId = dest.districtId;

            // Verification
            if (!validDistrictIds.has(finalDistrictId)) {
                // Try to find by name if strict ID match fails (fallback)
                // Extract district name from ID (e.g. AR_TAWANG -> tawang)
                const parts = finalDistrictId.split('_');
                if (parts.length > 1) {
                    const potentialName = parts.slice(1).join(' ').toLowerCase();
                    if (districtNameMap[potentialName]) {
                        console.warn(`   ⚠️  Correcting ID for ${dest.name}: ${finalDistrictId} -> ${districtNameMap[potentialName]}`);
                        finalDistrictId = districtNameMap[potentialName];
                    } else {
                        // Attempt partial match or state-based fallback would be complex.
                        // For now log error but try to proceed (might fail at schema level)
                        console.error(`   ❌ Invalid District ID: ${finalDistrictId} for ${dest.name}. Valid IDs: ${districtDocs.length}`);
                        // Maybe skip or continue? Continue to let Mongoose throw if required.
                    }
                }
            }

            // Generate a slug-like _id for the Place
            const placeId = dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            const placeData = {
                _id: placeId,
                ...dest,
                districtId: finalDistrictId
            };

            await Place.findOneAndUpdate(
                { _id: placeId },
                placeData,
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            console.log(`   ✓ Added: ${dest.name} (${finalDistrictId})`);
        }

        console.log('\n✅ Successfully seeded destinations!');

    } catch (error) {
        console.error('❌ Error seeding destinations:', error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedDestinations();
