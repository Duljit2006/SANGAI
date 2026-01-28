import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        districtId: { type: String, ref: 'District', required: true, index: true },
        name: { type: String, required: true },
        languages: [{ type: String, required: true }],
        experienceYears: { type: Number, required: true },
        specialties: [{ type: String }],
        contact: {
            phone: String,
            whatsapp: { type: Boolean, default: false },
            email: String,
            website: String
        },
        rating: { type: Number, min: 0, max: 5, index: true },
        verified: { type: Boolean, default: false, index: true }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Compound indexes for common queries
guideSchema.index({ districtId: 1, verified: 1 });
guideSchema.index({ districtId: 1, rating: -1 });

export default mongoose.model('Guide', guideSchema);
