import mongoose from 'mongoose';

const homestaySchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        placeId: { type: String, ref: 'Place', required: true, index: true },
        hostName: { type: String, required: true },
        title: { type: String, required: true },
        pricePerNight: { type: Number, required: true, index: true },
        maxGuests: { type: Number, required: true },
        amenities: [{ type: String }],
        images: [{ type: String }],
        contact: {
            phone: String,
            whatsapp: { type: Boolean, default: false },
            email: String,
            website: String
        },
        verified: { type: Boolean, default: false, index: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Compound indexes for filtering
homestaySchema.index({ placeId: 1, verified: 1 });
homestaySchema.index({ pricePerNight: 1, verified: 1 });

export default mongoose.model('Homestay', homestaySchema);
