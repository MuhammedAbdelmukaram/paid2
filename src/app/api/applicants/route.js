import dbConnect from '../../../lib/dbConnect';
import Applicant from '../../../models/applicant';

export async function POST(request) {
    await dbConnect();

    try {
        const { input1, input2, input3, input4, input5, textArea } = await request.json();

        const newApplicant = new Applicant({
            name: input1,
            occupation: input2,
            biggestPaidDay: input3,
            recentPaid: input4,
            solanaWalletAddress: input5,
            reason: textArea,
        });

        await newApplicant.save();
        return new Response(JSON.stringify(newApplicant), { status: 201 });
    } catch (error) {
        console.error('Internal Server Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
    }
}

export async function GET(request) {
    await dbConnect();

    try {
        const applicants = await Applicant.find();
        return new Response(JSON.stringify(applicants), { status: 200 });
    } catch (error) {
        console.error('Internal Server Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
    }
}
