import Twitter from "next-auth/providers/twitter";

export const authOptions = {
    providers: [
        Twitter({
            clientId: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY,
            clientSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
            version: "2.0",
        }),
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};
