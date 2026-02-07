
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Region from '../src/models/Region.js';
import State from '../src/models/State.js';
import District from '../src/models/District.js';

// Setup environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sangai';

async function seedPageContent() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected.');

        // 1. Update Region (Northeast)
        console.log('Updating Region content...');
        await Region.findOneAndUpdate(
            { slug: 'northeast' },
            {
                $set: {
                    'description.title': 'Welcome to Northeast India',
                    'description.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'glance.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                    'gateway.title': 'Explore the Eight Sisters',
                    'gateway.description': 'Journey through the diverse landscapes and cultures of the eight northeastern states, each offering a unique tapestry of experiences, from mist-covered hills to vibrant festivals.'
                }
            },
            { new: true, upsert: true }
        );

        // 2. Update States
        console.log('Updating States content...');
        const states = await State.find({});
        for (const state of states) {
            // Only update if missing or empty to avoid overwriting custom data if check existed (but we are setting initial CMS data)
            // User requested "put current content", which is mostly generic fallback in code.
            const updates = {};

            if (!state.description?.content) {
                updates['description.title'] = `Welcome to ${state.name}`;
                updates['description.content'] = `Explore the unique culture and natural beauty of ${state.name}. Discover a land where tradition meets nature in perfect harmony.`;
            }

            if (!state.glance?.description) {
                updates['glance.description'] = `An overview of ${state.name}'s key statistics and geography.`;
            }

            if (!state.gateway?.description) {
                updates['gateway.title'] = `Explore ${state.name}'s Districts`;
                updates['gateway.description'] = `Discover the hidden gems across the diverse districts of ${state.name}.`;
            }

            if (Object.keys(updates).length > 0) {
                await State.updateOne({ _id: state._id }, { $set: updates });
            }
        }

        // 3. Update Districts
        console.log('Updating Districts content...');
        const districts = await District.find({});
        for (const district of districts) {
            const updates = {};

            if (!district.description?.content) {
                updates['description.title'] = `Welcome to ${district.districtName}`;
                updates['description.content'] = `Explore the unique culture and natural beauty of ${district.districtName}.`;
            }

            if (!district.glance?.description) {
                updates['glance.description'] = `Key facts and geography of ${district.districtName}.`;
            }

            if (!district.gateway?.description) {
                updates['gateway.title'] = `Explore More of ${district.stateName}`;
                updates['gateway.description'] = `Discover other destinations in the region.`;
            }

            if (Object.keys(updates).length > 0) {
                await District.updateOne({ _id: district._id }, { $set: updates });
            }
        }

        console.log('✅ Page Content Seeded Successfully');
    } catch (error) {
        console.error('❌ Seeding Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

seedPageContent();
