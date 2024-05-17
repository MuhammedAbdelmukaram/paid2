// app/api/attach/route.js
import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

export async function POST(request) {
    try {
        // Define the paths to the images in the public folder
        const baseImagePath = path.resolve("./public/CallingCard.jpg");
        const overlayImagePath = path.resolve("./public/profilePic.jpg");

        // Read the images from the file system
        const baseImageBuffer = await fs.readFile(baseImagePath);
        const overlayImageBuffer = await fs.readFile(overlayImagePath);

        // Get dimensions of the base image
        const baseImageMetadata = await sharp(baseImageBuffer).metadata();

        // Resize the overlay image to 40% of the base image's width
        const resizedOverlayImageWidth = Math.floor(baseImageMetadata.width * 0.3);
        const resizedOverlayImage = await sharp(overlayImageBuffer)
            .resize({ width: resizedOverlayImageWidth })
            .toBuffer();

        // Create a circular mask
        const circleMask = Buffer.from(
            `<svg width="${resizedOverlayImageWidth}" height="${resizedOverlayImageWidth}">
                <circle cx="${resizedOverlayImageWidth / 2}" cy="${resizedOverlayImageWidth / 2}" r="${resizedOverlayImageWidth / 2}" fill="white"/>
             </svg>`
        );

        // Apply the mask to make the overlay image circular
        const circularOverlayImage = await sharp(resizedOverlayImage)
            .composite([{ input: circleMask, blend: "dest-in" }])
            .png()
            .toBuffer();

        // Calculate positions for the composite
        const topPosition = Math.floor(baseImageMetadata.height / 2 - resizedOverlayImageWidth / 2);
        const leftPosition = Math.floor(baseImageMetadata.width / 2 - resizedOverlayImageWidth / 2);

        // Create a composite image
        const compositeImage = await sharp(baseImageBuffer)
            .composite([
                {
                    input: circularOverlayImage,
                    top: topPosition,
                    left: leftPosition,
                },
            ]) // Center the circular overlay image
            .png()
            .toBuffer();

        // Return the composite image as a response
        return new Response(compositeImage, {
            headers: {
                "Content-Type": "image/png",
            },
        });
    } catch (error) {
        console.error("Error attaching image:", error);
        return new Response(JSON.stringify({ error: "Failed to attach image" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
