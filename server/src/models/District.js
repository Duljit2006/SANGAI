import mongoose from 'mongoose';

const districtSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        stateCode: { type: String, required: true, index: true },
        stateName: { type: String, required: true },
        districtName: { type: String, required: true },
        region: { type: String, required: true, default: 'northeast' }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Virtual for places count
districtSchema.virtual('places', {
    ref: 'Place',
    localField: '_id',
    foreignField: 'districtId'
});

districtSchema.set('toJSON', { virtuals: true });
districtSchema.set('toObject', { virtuals: true });

export default mongoose.model('District', districtSchema);
