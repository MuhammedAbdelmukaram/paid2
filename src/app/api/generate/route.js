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
        // Read image URL and text from the request body
        const { profileImg, overlayText } = await request.json();

        // Fetch the profile picture from the URL
        const response = await axios.get(profileImg, { responseType: "arraybuffer" });
        const profilePicBuffer = Buffer.from(response.data);

        // Get the calling card image from local file system
        const callingCardPath = path.resolve("./public/CallingCard.jpg");
        const callingCardBuffer = await fs.readFile(callingCardPath);

        // Get dimensions of the calling card
        const cardMetadata = await sharp(callingCardBuffer).metadata();

        // Resize the profile picture to be 30% of the card width
        const resizedProfilePicWidth = Math.floor(cardMetadata.width * 0.3);
        const resizedProfilePic = await sharp(profilePicBuffer)
            .resize({ width: resizedProfilePicWidth })
            .toBuffer();

        // Create a circular mask
        const circleMask = Buffer.from(
            `<svg width="${resizedProfilePicWidth}" height="${resizedProfilePicWidth}">
                <circle cx="${resizedProfilePicWidth / 2}" cy="${resizedProfilePicWidth / 2}" r="${resizedProfilePicWidth / 2}" fill="white"/>
             </svg>`
        );

        // Apply the mask to the profile picture
        const circularProfilePic = await sharp(resizedProfilePic)
            .composite([{ input: circleMask, blend: "dest-in" }])
            .png()
            .toBuffer();

        // Calculate positions for the composite
        const topPosition = Math.floor(cardMetadata.height / 2 - resizedProfilePicWidth / 2);
        const leftPosition = Math.floor(cardMetadata.width / 2 - resizedProfilePicWidth / 2);

        // Create the overlay text as an SVG
        const fontSize = Math.floor(cardMetadata.width * 0.05); // Adjust font size as needed
        const textBackgroundColor = "rgba(0, 0, 0, 0.7)"; // Background color with transparency
        const textColor = "white"; // Text color
        const textGlow = "0 0 5px white"; // Glow effect

        const textSvg = `
            <svg width="${cardMetadata.width}" height="${fontSize * 2}">
                <style>
                    .text-style {
                        font-size: ${fontSize}px;
                        fill: ${textColor};
                        font-family: Arial, sans-serif;
                        filter: drop-shadow(${textGlow});
                    }
                    .background-style {
                        fill: ${textBackgroundColor};
                    }
                </style>
                <rect x="0" y="0" width="100%" height="100%" class="background-style" />
                <text x="50%" y="50%" class="text-style" text-anchor="middle" dominant-baseline="middle">${overlayText}</text>
            </svg>
        `;

        // Create the text image buffer
        const textImageBuffer = Buffer.from(textSvg);

        // Calculate the position for the text
        const textTopPosition = topPosition + resizedProfilePicWidth + 10; // Adjust 10px spacing as needed

        // Create a composite image
        const compositeImage = await sharp(callingCardBuffer)
            .composite([
                {
                    input: circularProfilePic,
                    top: topPosition,
                    left: leftPosition,
                },
                {
                    input: textImageBuffer,
                    top: textTopPosition,
                    left: 0, // Center the text
                },
            ]) // Center the circular overlay image and add text below
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
