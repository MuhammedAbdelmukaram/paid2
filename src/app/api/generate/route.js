// app/api/generate/route.js
import sharp from "sharp";
import path from "path";
import fs from "fs/promises";
import axios from "axios";

export async function POST(request) {
    try {
        const profilePicPath = path.resolve("./public/profilePic.jpg");
        const callingCardPath = path.resolve("./public/CallingCard.jpg");

        // Read image from the body
        const { profileImg } = await request.json();

        // Fetch the profile picture from the URL
        const response = await axios.get(profileImg, { responseType: "arraybuffer" });
        const profilePicBuffer = Buffer.from(response.data);

        // Read the images
        const profilePic = await fs.readFile(profilePicPath);
        const callingCard = await fs.readFile(callingCardPath);

        // Get dimensions of the calling card
        const cardMetadata = await sharp(callingCard).metadata();

        // Resize the profile picture to be larger
        const resizedProfilePic = await sharp(profilePicBuffer)
            .resize({ width: Math.floor(cardMetadata.width / 2) }) // Adjust the size as needed
            .toBuffer();

        // Create a circular mask
        const circleMask = Buffer.from(
            `<svg width="${cardMetadata.width / 2}" height="${cardMetadata.width / 2}">
                <circle cx="${cardMetadata.width / 4}" cy="${cardMetadata.width / 4}" r="${
                cardMetadata.width / 4
            }" fill="white"/>
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
        const compositeImage = await sharp(callingCard)
            .composite([
                {
                    input: resizedCircularProfilePic,
                    top: cardMetadata.height / 2 - cardMetadata.width / 4,
                    left: cardMetadata.width / 2 - cardMetadata.width / 4,
                },
            ]) // Center the profile picture
            .toBuffer();

        return new Response(compositeImage, {
            headers: {
                "Content-Type": "image/png",
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
