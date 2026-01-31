
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';
import connectDB from '../config/database.js';

// We import the mock data directly to have a SINGLE SOURCE OF TRUTH
// This prevents desync between frontend mock data and backend seed data.
import { MOCK_PRODUCTS } from '../../../src/data/mockProducts.js';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const seedProducts = async () => {
    try {
        await connectDB();

        console.log('Clearing existing products...');
        await Product.deleteMany({});

        console.log(`Processing ${MOCK_PRODUCTS.length} products from source...`);

        // Transform data: Ensure valid URLs and dedup
        const seenSlugs = new Set();
        const validProducts = [];

        for (const product of MOCK_PRODUCTS) {
            // 1. Fix Image URLs (replace protocol-relative // with https://)
            const fixedImages = product.images.map(img => {
                if (img.startsWith('//')) {
                    return `https:${img}`;
                }
                return img;
            });

            // Fix story logo/image if present
            if (product.story) {
                if (product.story.image && product.story.image.startsWith('//')) {
                    product.story.image = `https:${product.story.image}`;
                }
                if (product.story.logo && product.story.logo.startsWith('//')) {
                    product.story.logo = `https:${product.story.logo}`;
                }
            }

            // 2. Deduplication check
            if (seenSlugs.has(product.slug)) {
                console.warn(`Duplicate slug found and skipped: ${product.slug}`);
                continue;
            }
            seenSlugs.add(product.slug);

            // 3. Construct clean product object
            validProducts.push({
                ...product,
                images: fixedImages
            });
        }

        console.log(`Seeding ${validProducts.length} unique products...`);
        await Product.insertMany(validProducts);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error with data import: ${error}`);
        process.exit(1);
    }
};

seedProducts();
