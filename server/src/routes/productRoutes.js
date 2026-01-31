
import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Get all products or filter by category
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};

        if (category) {
            query.category = category.toLowerCase();
        }

        const products = await Product.find(query);
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET /api/products/:slug
 * @desc    Get product by slug
 * @access  Public
 */
router.get('/:slug', async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET /api/products/category/:category
 * @desc    Get products by category (Direct route)
 * @access  Public
 */
router.get('/category/:category', async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category.toLowerCase() });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
