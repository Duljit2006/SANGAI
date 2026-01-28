import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true, unique: true },
        description: { type: String }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

export default mongoose.model('Tag', tagSchema);
