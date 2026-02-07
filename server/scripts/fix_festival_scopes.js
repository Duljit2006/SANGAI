
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CulturalItem from '../src/models/CulturalItem.js';
import connectDB from '../src/config/database.js';

dotenv.config({ path: '.env' });

const SCOPE_UPDATES = [
    { name: 'Hornbill Festival', state: 'NL' },
    { name: 'Ziro Festival of Music', state: 'AR' },
    { name: 'Torgya Festival', state: 'AR' },
    { name: 'Bihu', state: 'AS' },
    { name: 'Sangai Festival', state: 'MN' },
    { name: 'Cherry Blossom Festival', state: 'ML' }
];

const fixScopes = async () => {
    try {
        await connectDB();
        console.log('Connected to database...');

        for (const update of SCOPE_UPDATES) {
            const item = await CulturalItem.findOne({ name: update.name });
            if (item) {
                item.scope = {
                    type: 'state',
                    stateCode: update.state,
                    regionId: 'NE'
                };
                await item.save();
                console.log(`✅ Updated ${update.name} -> State: ${update.state}`);
            } else {
                console.log(`⚠️  Item not found: ${update.name}`);
            }
        }

        console.log('Scope fix completed!');
        process.exit(0);
    } catch (err) {
        console.error('Error fixing scopes:', err);
        process.exit(1);
    }
};

fixScopes();
