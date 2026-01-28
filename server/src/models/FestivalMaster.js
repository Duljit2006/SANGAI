import mongoose from 'mongoose';

const festivalMasterSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String },
        tags: [{ type: String }],
        recurring: { type: Boolean, default: true }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Text index for search
festivalMasterSchema.index({ name: 'text', description: 'text' });

export default mongoose.model('FestivalMaster', festivalMasterSchema);
