import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Providers";

const myFont = localFont({
    src: "../../public/font/Sansation_Regular.ttf", // Path relative to the public directory
    display: "swap",
});
export const metadata = {
    title: "Get $PAID",
    description: "Anti Cabal Cabal Onchain 🏦 Powered by $SOL Generating Products 🚀",
};

export default function RootLayout({ children }) {
    return (
        <Providers>

            <html lang="en">
                <body className={myFont.className}>{children}</body>
            </html>
        </Providers>
    );
}
