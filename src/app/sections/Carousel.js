"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Product from "@/app/components/Roadmap/Product";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const nextSlide = () => {
        setActiveIndex(current => (current === 2 ? 0 : current + 1));
        resetProgressBar();
    };

    const prevSlide = () => {
        setActiveIndex(current => (current === 0 ? 2 : current - 1));
        resetProgressBar();
    };

    const resetProgressBar = () => {
        setProgress(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress < 100) {
                    return oldProgress + 0.5; // Increase the progress bar by 0.5% every 25ms to sum up to 100% in 5000ms (5 seconds)
                }
                nextSlide(); // Move to the next slide when progress reaches 100%
                return 0; // Reset progress bar when it fills up
            });
        }, 25);

        return () => clearInterval(interval);
    }, []);

    const slideStyles = () => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.5s ease-in-out',
    });

    return (
        <div style={{
            width: "100%",
            padding: "10px 19%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
        }}>
            <div style={{ marginTop: 0, width: '100%', overflow: 'hidden' }}>
                <div style={{
                    display: 'flex',
                    width: '300%',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${activeIndex * (100 / 3)}%)`
                }}>
                    <div style={slideStyles()}>
                        <Product progress={progress} ctaText={"Amazon of Web3"} mainImagePath={"/nileLogo.png"} secondaryImagePath={"/nileBanner.png"} description={"Everything on Web 3 is Bigger & Better right? So will the Amazon of Web 3 Be! The Go-To Marketplace for Physical Products Purchasable with Solana Exclusively. "}/>
                    </div>
                    <div style={slideStyles()}>
                        <Product progress={progress} ctaText={"Taste the Charts"} mainImagePath={"/DefuelLogo.png"} secondaryImagePath={"/DefuelBanner.png"} description={"Made for degens by degens. The ultimate snacking station for solana enthusiasts with an appetite for gains"}/>
                    </div>
                    <div style={slideStyles()}>
                        <Product progress={progress} ctaText={"Make your Store"} mainImagePath={"/DestorezLogo.png"} secondaryImagePath={"/DestorezBanner.png"} description={"Monetize your Audience with Solana & Native token payments, Detailed customization, and Hassle-free fulfillment, Focus on Creating while we Handle the Rest. "}/>
                    </div>
                </div>
            </div>


            <Image
                src="/arrowLeft.png"
                alt="Previous"
                width={38}
                height={38}
                onClick={prevSlide}
                style={{ cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}
            />
            <Image
                src="/arrowRight.png"
                alt="Next"
                width={38}
                height={38}
                onClick={nextSlide}
                style={{ cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
            />
        </div>
    );
};

export default Carousel;
