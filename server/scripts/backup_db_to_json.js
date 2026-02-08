
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    Region,
    State,
    District,
    Place,
    Homestay,
    Guide,
    FestivalMaster,
    FestivalOccurrence,
    Tag,
    CulturalItem
} from '../src/models/index.js';
import Product from '../src/models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
const JSON_BACKEND_DIR = path.join(__dirname, '../../src/json_backend');

// Use Google DNS to bypass ISP blocking of MongoDB SRV records
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const BACKUP_DIR = path.join(JSON_BACKEND_DIR, 'backups', timestamp);

const saveJSON = (filepath, data) => {
    try {
        // 1. Save to main location (updating seed data)
        const fullPath = path.join(JSON_BACKEND_DIR, filepath);
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
        console.log(`✅ Updated ${filepath} (${data.length} records)`);

        // 2. Save to timestamped backup directory
        const backupPath = path.join(BACKUP_DIR, filepath);
        const backupDir = path.dirname(backupPath);
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }
        fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
        // console.log(`   Start Snapshot: ${backupPath}`);

    } catch (error) {
        console.error(`❌ Error saving ${filepath}:`, error);
    }
};

async function backupDatabase() {
    try {
        console.log('💾 Starting Database Backup...');
        console.log('   Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('   Connected.');

        // 1. Regions
        const regions = await Region.find({}).sort({ _id: 1 });
        saveJSON('_legacy/regions.json', regions);

        // 2. States
        const states = await State.find({}).sort({ name: 1 });
        saveJSON('_legacy/states.json', states);

        // 3. Districts
        const districts = await District.find({}).sort({ stateName: 1, districtName: 1 });
        saveJSON('data/districts.json', districts);

        // 4. Places
        const places = await Place.find({});
        saveJSON('data/places_normalized.json', places);

        // 5. Homestays
        const homestays = await Homestay.find({});
        saveJSON('_legacy/homestays_normalized.json', homestays);

        // 6. Guides
        const guides = await Guide.find({});
        saveJSON('_legacy/guides_normalized.json', guides);

        // 7. Festival Master
        const festivalMasters = await FestivalMaster.find({});
        saveJSON('_legacy/festival_master.json', festivalMasters);

        // 8. Festival Occurrences
        const festivalOccurrences = await FestivalOccurrence.find({});
        saveJSON('_legacy/festival_occurrences.json', festivalOccurrences);

        // 9. Tags
        const tags = await Tag.find({});
        saveJSON('_legacy/tags.json', tags);

        // 10. Cultural Items
        const culturalItems = await CulturalItem.find({});
        saveJSON('data/cultural_items.json', culturalItems);

        // 11. Products
        const products = await Product.find({});
        saveJSON('data/products.json', products);

        console.log('\n🎉 Backup Complete! Your MongoDB data is now saved to src/json_backend.');
        console.log('   Running "npm run seed" will now use THIS data instead of reverting.');

    } catch (error) {
        console.error('❌ Backup Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

backupDatabase();
