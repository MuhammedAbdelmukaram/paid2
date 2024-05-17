import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Providers";
import LoadingScreen from "@/app/components/LoadingScreen";
import React, {Suspense} from "react";

const myFont = localFont({
    src: "../../public/font/Sansation_Regular.ttf", // Path relative to the public directory
    display: "swap",
});
export const metadata = {
    title: "Get $PAID",
    description: "1st Sustainable NFT Project 🏦 Powered by Revenue Generating Products",
};

export default function RootLayout({ children }) {
    return (
        <Providers>

            <html lang="en">
            <Suspense fallback={<LoadingScreen/>}>
                <body className={myFont.className}>{children}</body>
            </Suspense>
            </html>
        </Providers>
    );
}
