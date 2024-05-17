// app/api/tweet.js
import { TwitterApi } from 'twitter-api-v2';
import axios from 'axios';

// Initialize the Twitter client
const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET_KEY,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { imageUrl, status } = req.body;

            // Fetch the image from the URL
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const imageBuffer = Buffer.from(response.data, 'binary');

            // Upload the image to Twitter
            const mediaId = await twitterClient.v1.uploadMedia(imageBuffer, { mimeType: 'image/png' });

            // Create a tweet with the uploaded image
            const tweet = await twitterClient.v1.tweet(status, { media_ids: mediaId });

            res.status(200).json({ tweet });
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Error tweeting image:', error);
        res.status(500).json({ error: 'Failed to tweet image' });
    }
}
