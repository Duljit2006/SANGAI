
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, '../.env') });

import mongoose from 'mongoose';
import connectDB from '../src/config/database.js';
import { District } from '../src/models/index.js';

// START DNS WORKAROUND
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
// END DNS WORKAROUND

const listIds = async () => {
    try {
        await connectDB();
        const districts = await District.find({}, '_id districtName').sort({ _id: 1 });
        districts.forEach(d => console.log(`${d._id} : ${d.districtName}`));
    } catch (e) { console.error(e); }
    finally { mongoose.connection.close(); }
};
listIds();
