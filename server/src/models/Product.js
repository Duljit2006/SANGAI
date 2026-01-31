import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        index: true // Indexed for filtering
    },
    price: {
        type: Number,
        required: true
    },
    compareAtPrice: {
        type: Number,
        default: null
    },
    images: [{
        type: String // URLs
    }],
    facets: {
        location: {
            type: String,
            default: ''
        }
    },
    inStock: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    // Variants: Small, Medium, Big, etc.
    variants: [{
        id: String,
        name: String,
        price: Number,
        compareAtPrice: Number,
        inStock: { type: Boolean, default: true }
    }],
    // Accordions: Product Details, Care, Process
    accordions: [{
        title: String,
        content: String
    }],
    // Artisan Story
    story: {
        title: String,
        image: String,
        logo: String,
        content: String
    },
    reviews: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

export default mongoose.model('Product', productSchema);
