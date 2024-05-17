import mongoose from 'mongoose';

const ApplicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    biggestPaidDay: {
        type: String,
        required: true,
    },
    recentPaid: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
        maxlength: 300,
    },
    solanaWalletAddress: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Applicant || mongoose.model('Applicant', ApplicantSchema);
