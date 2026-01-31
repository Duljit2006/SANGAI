import mongoose from 'mongoose';
import Product from '../models/Product.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

const products = [
    {
        title: "VERTIVER SOAP",
        slug: "vertiver-soap",
        category: "wellness",
        price: 150.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8176_S.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8186_S.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "BAY LEAF SOAP",
        slug: "bay-leaf-soap",
        category: "wellness",
        price: 150.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8194_S.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8202_S.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "HANGING DIFFUSER LEMON GRASS",
        slug: "hanging-diffuser-lemon-grass",
        category: "wellness",
        price: 400.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8273_S.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8291_S.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "HANGING DIFFUSER VERTIVER",
        slug: "hanging-diffuser-vertiver",
        category: "wellness",
        price: 500.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8308_S_6827db38-01be-4ad1-8faa-5405bec63d07.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8326_S_f7e6190e-6a40-44ca-9f4c-52525d8b6bac.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "LEMON GRASS SOAP",
        slug: "lemon-grass-soap",
        category: "wellness",
        price: 150.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8208_S.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8217_S.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "HANGING DIFFUSER ORANGE",
        slug: "hanging-diffuser-orange",
        category: "wellness",
        price: 450.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8340_S_ffccd144-dc43-47ce-818a-20d5e1984224.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8359_S_67c1ecb6-1b47-4857-8ab9-3f2407551055.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    },
    {
        title: "HANGING DIFFUSER CITRONELLA GRASS",
        slug: "hanging-diffuser-citronella-grass",
        category: "wellness",
        price: 400.00,
        images: [
            "//themeghalayanage.store/cdn/shop/files/PER_8237_S.jpg",
            "//themeghalayanage.store/cdn/shop/files/PER_8265_S.jpg"
        ],
        facets: { location: "Jaiaw, East Khasi Hills" }
    }
];

const seedProducts = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            console.error('MONGODB_URI is not defined in .env');
            // Fallback for dev if env not loaded correctly in this context
            console.log('Ensure .env is correct. Exiting.');
            process.exit(1);
        }

        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing wellness products to avoid duplicates
        await Product.deleteMany({ category: 'wellness' });
        console.log('Cleared existing wellness products.');

        await Product.insertMany(products);
        console.log(`Seeded ${products.length} wellness products.`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();
