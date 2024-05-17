// app/api/generate/route.js
import sharp from "sharp";
import path from "path";
import fs from "fs/promises";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Initialize the S3 client
const r2 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
});

// Function to upload to S3
async function uploadToS3({ key, contentType }) {
    try {
        const signedUrl = await getSignedUrl(r2, new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: key,
            ContentType: contentType,
        }), { expiresIn: 60 * 60 });

        return { imageUrl: `${process.env.R2_PUBLIC_URL}/${key}`, signedUrl };
    } catch (error) {
        console.error('S3 Upload Error:', error);
        throw new Error('Failed to upload to S3');
    }
}

export async function POST(request) {
    try {
        // Read image URL from the request body
        const { profileImg } = await request.json();

        // Fetch the profile picture from the URL
        const response = await axios.get(profileImg, { responseType: "arraybuffer" });
        const profilePicBuffer = Buffer.from(response.data);

        // Get the calling card image from local file system
        const callingCardPath = path.resolve("./public/CallingCard.jpg");
        const callingCardBuffer = await fs.readFile(callingCardPath);

        // Get dimensions of the calling card
        const cardMetadata = await sharp(callingCardBuffer).metadata();

        // Resize the profile picture to be larger
        const resizedProfilePic = await sharp(profilePicBuffer)
            .resize({ width: Math.floor(cardMetadata.width / 2) }) // Adjust the size as needed
            .toBuffer();

        // Create a circular mask
        const circleMask = Buffer.from(
            `<svg width="${cardMetadata.width / 2}" height="${cardMetadata.width / 2}">
                <circle cx="${cardMetadata.width / 4}" cy="${cardMetadata.width / 4}" r="${cardMetadata.width / 4}" fill="white"/>
             </svg>`
        );

        // Apply the mask to the profile picture
        const circularProfilePic = await sharp(resizedProfilePic)
            .composite([{ input: circleMask, blend: "dest-in" }])
            .png()
            .toBuffer();

        // Resize circular profile picture to match calling card dimensions
        const resizedCircularProfilePic = await sharp(circularProfilePic)
            .resize({
                width: cardMetadata.width / 2, // The circular profile pic should be half the width of the card
                height: cardMetadata.width / 2, // The circular profile pic should be a square
                fit: sharp.fit.cover, // Cover the entire area
            })
            .toBuffer();

        // Create a composite image
        const compositeImage = await sharp(callingCardBuffer)
            .composite([
                {
                    input: resizedCircularProfilePic,
                    top: cardMetadata.height / 2 - cardMetadata.width / 4,
                    left: cardMetadata.width / 2 - cardMetadata.width / 4,
                },
            ]) // Center the profile picture
            .png()
            .toBuffer();

        // Generate a unique filename
        const filename = `${uuidv4()}.png`;

        // Get signed URL and image URL
        const { imageUrl, signedUrl } = await uploadToS3({ key: filename, contentType: "image/png" });

        // Upload the image using the signed URL
        await axios.put(signedUrl, compositeImage, {
            headers: {
                "Content-Type": "image/png",
            },
        });

        return new Response(JSON.stringify({ imageUrl }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error generating image:", error);
        return new Response(JSON.stringify({ error: "Failed to generate image" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
