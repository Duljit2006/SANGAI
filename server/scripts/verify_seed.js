
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, '../.env') });

import mongoose from 'mongoose';
import connectDB from '../src/config/database.js';
import { Place } from '../src/models/index.js';

// START DNS WORKAROUND
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
// END DNS WORKAROUND

const verify = async () => {
    try {
        await connectDB();
        const place = await Place.findOne({ name: 'Gurudongmar Lake' });
        console.log(JSON.stringify(place, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

verify();
