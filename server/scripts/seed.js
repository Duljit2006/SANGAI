/**
 * Database Seeding Script
 * Run with: npm run seed
 */
import 'dotenv/config';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import connectDB from '../src/config/database.js';
import {
    District,
    Place,
    Homestay,
    Guide,
    FestivalMaster,
    FestivalOccurrence,
    Tag
} from '../src/models/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const JSON_DIR = join(__dirname, '../../src/json_backend');

/**
 * Load JSON file
 */
const loadJSON = (filename) => {
    const filepath = join(JSON_DIR, filename);
    const content = readFileSync(filepath, 'utf-8');
    return JSON.parse(content);
};

/**
 * Seed all collections
 */
const seedDatabase = async () => {
    try {
        console.log('🌱 Starting database seed...\n');

        // Connect to MongoDB
        await connectDB();

        // Clear existing data
        console.log('🗑️  Clearing existing data...');
        await Promise.all([
            District.deleteMany({}),
            Place.deleteMany({}),
            Homestay.deleteMany({}),
            Guide.deleteMany({}),
            FestivalMaster.deleteMany({}),
            FestivalOccurrence.deleteMany({}),
            Tag.deleteMany({})
        ]);

        // Load JSON files
        console.log('📂 Loading JSON files...');
        const districts = loadJSON('districts.json');
        const tags = loadJSON('tags.json');
        const places = loadJSON('places_normalized.json');
        const homestays = loadJSON('homestays_normalized.json');
        const guides = loadJSON('guides_normalized.json');
        const festivalMasters = loadJSON('festival_master.json');
        const festivalOccurrences = loadJSON('festival_occurrences.json');

        // Insert data
        console.log('📥 Inserting Districts...');
        await District.insertMany(districts);
        console.log(`   ✓ ${districts.length} districts inserted`);

        console.log('📥 Inserting Tags...');
        await Tag.insertMany(tags);
        console.log(`   ✓ ${tags.length} tags inserted`);

        console.log('📥 Inserting Places...');
        await Place.insertMany(places);
        console.log(`   ✓ ${places.length} places inserted`);

        console.log('📥 Inserting Homestays...');
        await Homestay.insertMany(homestays);
        console.log(`   ✓ ${homestays.length} homestays inserted`);

        console.log('📥 Inserting Guides...');
        await Guide.insertMany(guides);
        console.log(`   ✓ ${guides.length} guides inserted`);

        console.log('📥 Inserting Festival Masters...');
        await FestivalMaster.insertMany(festivalMasters);
        console.log(`   ✓ ${festivalMasters.length} festival masters inserted`);

        console.log('📥 Inserting Festival Occurrences...');
        await FestivalOccurrence.insertMany(festivalOccurrences);
        console.log(`   ✓ ${festivalOccurrences.length} festival occurrences inserted`);

        console.log('\n✅ Database seeded successfully!');

        // Print summary
        console.log('\n📊 Summary:');
        console.log(`   Districts:           ${districts.length}`);
        console.log(`   Tags:                ${tags.length}`);
        console.log(`   Places:              ${places.length}`);
        console.log(`   Homestays:           ${homestays.length}`);
        console.log(`   Guides:              ${guides.length}`);
        console.log(`   Festival Masters:    ${festivalMasters.length}`);
        console.log(`   Festival Occurrences: ${festivalOccurrences.length}`);
        console.log(`   ─────────────────────────────`);
        console.log(`   Total records:       ${districts.length + tags.length + places.length + homestays.length + guides.length + festivalMasters.length + festivalOccurrences.length}`);

    }
    catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
    finally {
        await mongoose.connection.close();
        console.log('\n🔌 Database connection closed');
        process.exit(0);
    }
};

// Run seeding
seedDatabase();
