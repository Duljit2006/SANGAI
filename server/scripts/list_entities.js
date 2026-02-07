
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import State from '../src/models/State.js';
import District from '../src/models/District.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sangai';

async function listEntities() {
    try {
        await mongoose.connect(MONGO_URI);

        console.log('--- STATES ---');
        const states = await State.find({}).sort({ name: 1 });
        states.forEach(s => console.log(`State: ${s.name} (${s.code})`));

        console.log('\n--- DISTRICTS ---');
        const districts = await District.find({}).sort({ stateName: 1, districtName: 1 });
        districts.forEach(d => console.log(`District: ${d.districtName} [${d.stateName}]`));

    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.connection.close();
    }
}

listEntities();
