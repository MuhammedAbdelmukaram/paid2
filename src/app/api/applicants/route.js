import dbConnect from '../../../lib/dbConnect';
import Applicant from '../../../models/applicants';

// Handle POST request to create or update an applicant
export async function POST(request) {
    await dbConnect();

    try {
        const { input1, input2, input3, input4, textArea, step, applicantId, solanaWalletAddress } = await request.json();

        if (step === 1) {
            // Create a new applicant in step 1
            const newApplicant = new Applicant({
                name: input1,
                occupation: input2,
                biggestPaidDay: input3,
                recentPaid: input4,
                reason: textArea,
            });

            await newApplicant.save();
            return new Response(JSON.stringify(newApplicant), { status: 201 });
        } else if (step === 2 && applicantId) {
            // Update existing applicant in step 2
            const updatedApplicant = await Applicant.findByIdAndUpdate(applicantId, { solanaWalletAddress }, { new: true });

            if (!updatedApplicant) {
                return new Response(JSON.stringify({ message: 'Applicant not found' }), { status: 404 });
            }

            return new Response(JSON.stringify(updatedApplicant), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'Invalid step or missing applicantId' }), { status: 400 });
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error }), { status: 500 });
    }
}

export async function GET(request) {
    await dbConnect();

    try {
        const applicants = await Applicant.find();
        return new Response(JSON.stringify(applicants), { status: 200 });
    } catch (error) {
        console.error('Internal Server Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error }), { status: 500 });
    }
}
