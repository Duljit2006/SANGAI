/**
 * Restore Legacy Data Script
 * Migrates old schema fields to new schema fields in the database.
 * Safe to run multiple times - only updates fields that are missing.
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dns from 'dns';

import State from '../src/models/State.js';
import Region from '../src/models/Region.js';
import District from '../src/models/District.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

// Use Google DNS to bypass ISP blocking of MongoDB SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

async function restoreLegacyData() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected.');


        // --- 0. LOAD JSON DATA ---
        // We need to read the JSON files to restore lost data like 'glance' stats
        const statesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/json_backend/_legacy/states.json'), 'utf-8'));
        const regionsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/json_backend/_legacy/regions.json'), 'utf-8'));

        // Helper to find source data
        const findSourceState = (slug) => statesData.find(s => s.slug === slug);
        const findSourceRegion = (slug) => regionsData.find(r => r.slug === slug);

        // --- 1. STATES ---
        const states = await State.find({});
        console.log(`Found ${states.length} states to check.`);

        for (const state of states) {
            let modified = false;
            console.log(`Checking State: ${state.name}...`);

            const source = findSourceState(state.slug);

            // 0. Restore Glance Data (if missing fields)
            if (source && source.glance) {
                if (!state.glance) state.glance = {};

                // Fields to restore
                const fields = ['capital', 'landscapeType', 'climate', 'population', 'area'];
                fields.forEach(field => {
                    if (!state.glance[field] && source.glance[field]) {
                        console.log(`  - Restoring glance.${field}: ${source.glance[field]}`);
                        state.glance[field] = source.glance[field];
                        modified = true;
                    }
                });

                // Languages needs special handling (array)
                if ((!state.glance.languages || state.glance.languages.length === 0) && source.glance.languages) {
                    console.log(`  - Restoring glance.languages: ${source.glance.languages.join(', ')}`);
                    state.glance.languages = source.glance.languages;
                    modified = true;
                }
            }

            // 1. Migrate heroImage -> heroImages
            if (!state.heroImages || state.heroImages.length === 0) {
                if (state.heroImage && state.heroImage.url) {
                    console.log(`  - Migrating singular heroImage to heroImages array.`);
                    state.heroImages = [state.heroImage];
                    modified = true;
                } else {
                    console.log(`  - No legacy heroImage found in DB record.`);
                }
            }

            // 2. Migrate landMemory -> sharedStory
            if (!state.sharedStory || !state.sharedStory.paragraphs || state.sharedStory.paragraphs.length === 0) {
                if (state.landMemory && state.landMemory.narrative) {
                    console.log(`  - Migrating landMemory.narrative to sharedStory.`);
                    state.sharedStory = {
                        title: `The Story of ${state.name}`,
                        paragraphs: [state.landMemory.narrative]
                    };
                    if (state.landMemory.keyTransitions && state.landMemory.keyTransitions.length > 0) {
                        const transitionText = "Key transitions in history: " + state.landMemory.keyTransitions.join("; ") + ".";
                        state.sharedStory.paragraphs.push(transitionText);
                    }
                    modified = true;
                }
            }

            // 3. Ensure Collage Images exist
            if (!state.collageImages || state.collageImages.length === 0) {
                if (state.heroImages && state.heroImages.length > 0) {
                    console.log(`  - Populating collageImages from heroImages.`);
                    state.collageImages = state.heroImages;
                    modified = true;
                }
            }

            if (modified) {
                await state.save();
                console.log('  ✅ Saved changes.');
            } else {
                console.log('  - No changes needed.');
            }
        }

        // --- 2. REGIONS ---
        const regions = await Region.find({});
        console.log(`\nFound ${regions.length} regions to check.`);
        for (const region of regions) {
            let modified = false;
            console.log(`Checking Region: ${region.name}...`);

            if (!region.heroImages || region.heroImages.length === 0) {
                if (region._doc.heroImage && region._doc.heroImage.url) {
                    console.log(`  - Migrating singular heroImage to heroImages array.`);
                    region.heroImages = [region._doc.heroImage];
                    modified = true;
                }
            }

            if (!region.collageImages || region.collageImages.length === 0) {
                if (region.heroImages && region.heroImages.length > 0) {
                    console.log(`  - Populating collageImages from heroImages.`);
                    region.collageImages = region.heroImages;
                    modified = true;
                }
            }

            if (modified) {
                await region.save();
                console.log('  ✅ Saved changes.');
            } else {
                console.log('  - No changes needed.');
            }
        }

        // --- 3. DISTRICTS ---
        const districts = await District.find({});
        console.log(`\nFound ${districts.length} districts to check.`);
        let districtUpdates = 0;
        for (const district of districts) {
            let modified = false;

            if (!district.heroImages || district.heroImages.length === 0) {
                if (district.heroImage && district.heroImage.url) {
                    district.heroImages = [district.heroImage];
                    modified = true;
                } else if (district.images && district.images.hero && district.images.hero.length > 0) {
                    district.heroImages = district.images.hero.map(url => ({ url, caption: district.districtName }));
                    modified = true;
                }
            }

            if (modified) {
                await district.save();
                districtUpdates++;
                process.stdout.write('.');
            }
        }
        console.log(`\n✅ Updated ${districtUpdates} districts.`);

        console.log('\n✅ Legacy Data Restoration Complete.');

    } catch (error) {
        console.error('❌ Restoration Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

restoreLegacyData();
